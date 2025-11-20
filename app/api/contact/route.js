import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";

let client;
let db;
let isConnected = false;

// Connect to MongoDB, reuse connection for performance
async function connectToDatabase() {
  if (isConnected && db) return db;
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is missing");
  }
  client = new MongoClient(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 5000,
    maxPoolSize: 10,
  });
  await client.connect();
  db = client.db(); // Use default from URI if set
  isConnected = true;
  return db;
}

// Handle only POST method
export async function POST(req) {
  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Save to MongoDB but don't fail request if this fails
    try {
      const database = await connectToDatabase();
      const contacts = database.collection("contacts");
      await contacts.insertOne({ name, email, service: service || "", message, createdAt: new Date() });
      console.log("Contact saved to MongoDB");
    } catch (dbError) {
      console.error("MongoDB save error (continuing):", dbError.message);
    }

    // Create Nodemailer transporter with SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // use true if port 465
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log("SMTP connection verified");
    } catch (verifyError) {
      console.error("SMTP connection error:", verifyError);
      return new Response(
        JSON.stringify({ error: "Failed to connect to email server" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Send email with form data
    const mailData = {
      from: process.env.SMTP_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Interest:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailData);
    console.log("Email sent successfully");

    // IMPORTANT: Always return JSON with correct headers
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Unhandled error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process request", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// Optional: respond to GET with JSON error to avoid blank response
export async function GET() {
  return new Response(
    JSON.stringify({ error: "GET method not supported." }),
    { status: 405, headers: { "Content-Type": "application/json" } }
  );
}


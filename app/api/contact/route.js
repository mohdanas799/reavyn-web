import nodemailer from "nodemailer";
import { MongoClient } from 'mongodb';

let client;
let db;
let isConnected = false;

// Initialize MongoDB connection
async function connectToDatabase() {
  if (isConnected && db) return db;
  
  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined in environment variables');
  }
  
  try {
    client = new MongoClient(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // 5 second timeout
      socketTimeoutMS: 5000, // 5 second socket timeout
      maxPoolSize: 10, // Maintain up to 10 socket connections
    });
    await client.connect();
    db = client.db('reavyn'); // Use default database from URI
    isConnected = true;
    console.log("MongoDB connection established");
    return db;
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    isConnected = false;
    throw error;
  }
}

export async function POST(req) {
  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required." }),
        { status: 400 }
      );
    }

    // Save to MongoDB first (but don't fail if DB is unavailable)
    try {
      const database = await connectToDatabase();
      const contacts = database.collection('contacts');
      
      const contactData = {
        name,
        email,
        service: service || "",
        message,
        createdAt: new Date()
      };
      
      await contacts.insertOne(contactData);
      console.log("Contact saved to MongoDB");
    } catch (dbError) {
      console.error("Database Error (continuing with email):", dbError.message);
      // Don't fail the request if DB save fails, continue with email
    }

    // Create transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Add connection timeout
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
    });

    // Verify connection
    try {
      await transporter.verify();
      console.log("SMTP connection verified");
    } catch (verifyError) {
      console.error("SMTP connection failed:", verifyError);
      return new Response(
        JSON.stringify({ error: "Failed to connect to email server" }),
        { status: 500 }
      );
    }

    // Prepare email data
    const mailData = {
      from: '"Reavyn" <razi@reavyn.com>', // Use your verified sender
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Interest:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailData);
    console.log("Email sent successfully:", info.messageId);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    // Detailed error logging
    console.error("Nodemailer Error:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send email",
        details: error.message 
      }),
      { status: 500 }
    );
  }
}
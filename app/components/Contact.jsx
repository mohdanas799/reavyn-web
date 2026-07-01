"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [popup, setPopup] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setPopup(true);
      setFormData({ name: "", email: "", service: "", message: "" });
    } catch (err) {
      alert(err.message);
    } finally {
      setSending(false);
    }
  };

  const closePopup = () => setPopup(false);

  return (
    <section className="w-full bg-gray-50 py-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Info Panel */}
        <div className="flex flex-col justify-center space-y-6">
          <p className="text-lg font-medium text-gray-700">Get In Touch</p>
          <h2 className="text-3xl max-w-xl -mt-6 font-bold text-gray-900">
            Let’s Build Something Incredible Together
          </h2>
          <p className="text-gray-800 mt-20 text-5xl">
            Do you have a project in mind or just want to say hello? We’re here
            to support you every step of the way.
          </p>

          <div className="mt-6 space-y-2 text-gray-700 text-base">
            <p>
              <span className="font-semibold">Available</span> — Mon - Sat |
              10:00 AM - 6:00 PM IST
            </p>
            <p>
              <span className="font-semibold">Contact</span> —
              razi@reavyn.com | +91-8960668333
            </p>
            <p>
              <span className="font-semibold">Address</span> — New Ashok Nagar,
              New Delhi, 110096, India
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-black p-8 rounded-2xl text-white shadow-lg">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="youremail@gmail.com"
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Service Interest</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select</option>
                <option value="custom web">Custom Website</option>
                <option value="app">App Development (Android/iOS)</option>
                <option value="e-commerce">E-Commerce</option>
                <option value="shopify">Shopify Solutions</option>
                <option value="chatbots">AI Chatbots</option>
                <option value="workflow">
                  Smart Virtual Agents Workflow Automation
                </option>
                <option value="saas">CRM Systems SaaS Websites</option>
                <option value="crm">Customized CRM Software</option>
                <option value="automation">Automation Solutions</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project."
                rows={4}
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <p className="text-xs text-gray-400">
              Your information is secure and will only be used to respond to
              your inquiry.
            </p>

            <button
              type="submit"
              disabled={sending}
              className={`mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-300 ${
                sending ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {sending ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Popup Success Message */}
      <AnimatePresence>
        {popup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-xl"
            >
              <div className="flex flex-col items-center space-y-4">
                <CheckCircle className="text-green-500 w-16 h-16" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Message Sent!
                </h3>
                <p className="text-gray-700">
                  Thank you for reaching out. We’ll get back to you shortly.
                </p>
                <button
                  onClick={closePopup}
                  className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

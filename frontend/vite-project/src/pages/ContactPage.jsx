import React, { useEffect } from "react";
import { motion } from "framer-motion"; // For animations

function ContactPage() {
  // Scroll animation effect
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="contact-page bg-gradient-to-r from-green-200 via-yellow-100 to-green-300 min-h-screen flex items-center justify-center">
      <motion.div
        className="contact-content max-w-2xl p-6 bg-white shadow-lg rounded-lg"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="text-3xl font-bold text-center text-green-600 mb-4">📞 Contact Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Have questions? We’d love to hear from you! Reach out and we'll get back to you as soon as possible.
        </p>
        
        {/* Contact form */}
        <form className="space-y-4">
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your message..."
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default ContactPage;

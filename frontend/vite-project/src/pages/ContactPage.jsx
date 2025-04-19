import React from "react";
import Navbar from "./Navbar"; // Assuming Navbar is in the components folder
import { motion } from "framer-motion"; // For animations

function ContactPage() {
  // Scroll animation effect
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="contact-page bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <motion.div
        className="max-w-4xl mx-auto py-10 px-6"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          📞 Contact Us
        </h1>

        {/* Description */}
        <p className="text-base text-gray-700 text-center mb-8">
          Have questions? We’d love to hear from you! Fill out the form below, and we’ll get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <motion.form
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.5 }}
        >
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            />
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your message..."
              className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 text-sm font-medium shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>

        {/* Additional Contact Info */}
        <section className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">📍 Our Office</h2>
          <p className="text-sm text-gray-600">
            Institute of Engineering and Management (IEM), Kolkata, West Bengal, India
          </p>
          <p className="text-sm text-gray-600">Email: support@krishibondhu.com</p>
          <p className="text-sm text-gray-600">Phone: +91 98765 43210</p>
        </section>
      </motion.div>
    </div>
  );
}

export default ContactPage;
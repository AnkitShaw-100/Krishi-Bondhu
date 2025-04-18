import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function HomePage() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Navbar */}

      <div className="bg-green-600 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">KrishiBondhu</h1>
          <nav className="space-x-6">
            <Link
              to="/"
              className="hover:text-green-200 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-green-200 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-green-200 transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>


      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20 text-center">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-extrabold mb-4"
        >
          Welcome to KrishiBondhu!
        </motion.h2>
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-xl mb-6"
        >
          A hyper-local marketplace connecting farmers and buyers directly.
          Simple, accessible, and efficient trade without middlemen.
        </motion.p>

        {/* Buttons for Seller/Buyer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center gap-6"
        >
          <Link
            to="/seller-dashboard"
            className="px-8 py-4 bg-green-700 text-white rounded-lg shadow-lg hover:bg-green-800 transition-all duration-300 transform hover:scale-105"
          >
            Seller
          </Link>
          <Link
            to="/buyer-dashboard"
            className="px-8 py-4 bg-blue-700 text-white rounded-lg shadow-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105"
          >
            Buyer
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default HomePage;
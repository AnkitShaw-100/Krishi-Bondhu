import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo/Brand */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight font-sans">
          Krishi<span className="text-yellow-300">Bondhu</span>
        </h1>

        {/* Navigation Links */}
        <nav className="mt-4 md:mt-0 space-x-4 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-300 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-300 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/transaction-history"
            className="hover:text-yellow-300 transition duration-300"
          >
            Transactions
          </Link>

          {/* Voice Search feature — disabled for now */}
          {/*
          <Link
            to="/voice-search"
            className="hover:text-yellow-300 transition duration-300"
          >
            Voice Search
          </Link>
          */}
        </nav>
      </div>
    </motion.header>
  );
}

export default Navbar;

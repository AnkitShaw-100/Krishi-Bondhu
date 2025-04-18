// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-green-600 text-white p-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">KrishiBondhu</h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-green-200 transition-colors duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-200 transition-colors duration-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-green-200 transition-colors duration-300">
            Contact
          </Link>
          <Link to="/transaction-history" className="hover:text-green-200 transition-colors duration-300">
            Transaction History
          </Link>
          <Link to="/voice-search" className="hover:text-green-200 transition-colors duration-300">
            Voice Search
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

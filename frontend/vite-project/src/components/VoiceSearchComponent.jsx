import React from 'react';
import { motion } from 'framer-motion';
// import VoiceSearchComponent from './VoiceSearchComponent'; // Assuming you made it a component
import LocationSearch from './LocationSearch'; // For Google Maps integration
import LanguageSwitcher from './LanguageSwitcher'; // For language toggle

function VoiceSearchPage() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Navbar can be included globally across all pages */}
      <div className="bg-green-600 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">KrishiBondhu</h1>
          <nav className="space-x-6">
            <a href="/" className="hover:text-green-200 transition-colors duration-300">
              Home
            </a>
            <a href="/about" className="hover:text-green-200 transition-colors duration-300">
              About
            </a>
            <a href="/contact" className="hover:text-green-200 transition-colors duration-300">
              Contact
            </a>
            <a href="/transaction-history" className="hover:text-green-200 transition-colors duration-300">
              Transaction History
            </a>
            <a href="/voice-search" className="hover:text-green-200 transition-colors duration-300">
              Voice Search
            </a>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 mt-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-6"
        >
          🔍 Voice Search for Bengali Listings
        </motion.h1>

        <section className="mb-8">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl font-semibold text-green-600 mb-4"
          >
            🔊 Use Voice Search
          </motion.h2>
          <VoiceSearchComponent />
        </section>

        <section className="mb-8">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl font-semibold text-green-600 mb-4"
          >
            📍 Search Listings by Location
          </motion.h2>
          <LocationSearch />
        </section>

        <section className="mb-8">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-2xl font-semibold text-green-600 mb-4"
          >
            🌍 Change Language
          </motion.h2>
          <LanguageSwitcher />
        </section>
      </div>
    </div>
  );
}

export default VoiceSearchPage;

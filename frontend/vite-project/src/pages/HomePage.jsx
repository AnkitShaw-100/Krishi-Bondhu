import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../pages/Navbar';

// Importing images correctly from src/assets
import heroImage from '../assets/main-image.jpg';
import image1 from '../assets/image-1.jpg';
import image2 from '../assets/image-2.jpg';
import image3 from '../assets/image-3.jpg';
import testimonialImage1 from '../assets/user.jpg';
import testimonialImage2 from '../assets/user.jpg';
import logo from '../assets/logo.png';

function HomePage() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Background */}
      <section
        className="relative bg-cover bg-center text-white py-24 px-4"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <img
            src={logo}
            alt="Krishi Bondhu Logo"
            className="mx-auto mb-6 h-28 w-28 rounded-full animate-bounce"
          />

          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Welcome to <span className="text-green-400">KrishiBondhu</span>
          </h1>
          <p className="text-lg md:text-2xl font-medium mb-10 text-gray-100">
            A hyper-local platform connecting farmers directly to buyers — no middlemen, just growth.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/seller-dashboard"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg shadow-lg transition-transform"
              >
                I'm a Seller
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/buyer-dashboard"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg transition-transform"
              >
                I'm a Buyer
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Middle Visual Grid */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          How KrishiBondhu Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-xl shadow-lg overflow-hidden bg-white"
          >
            <img
              src={image1}
              alt="Farmer listing produce"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Farmers List Their Produce</h3>
              <p className="text-gray-600">
                Farmers can easily list their produce using Bengali voice or text input. Accessible and simple for all.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-xl shadow-lg overflow-hidden bg-white"
          >
            <img
              src={image2}
              alt="Buyer finding produce"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Buyers Find Local Produce</h3>
              <p className="text-gray-600">
                Buyers can discover fresh, local produce within a 5–10km radius. Trade directly, without middlemen.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-xl shadow-lg overflow-hidden bg-white"
          >
            <img
              src={image3}
              alt="Barter and cash trade"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Barter or Cash Transactions</h3>
              <p className="text-gray-600">
                Trade goods for cash or barter items. Flexibility for both buyers and sellers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-200 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Feature 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-4">Bengali Voice Input</h3>
            <p className="text-gray-800">
              Farmers can list their produce using intuitive Bengali voice input, making the platform accessible to all.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-4">Hyper-Local Connectivity</h3>
            <p className="text-gray-800">
              Focused on connecting buyers and sellers within a 5–10km radius for quick and easy transactions.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-4">Barter Support</h3>
            <p className="text-gray-800">
              Offers flexibility with both cash and barter transactions, enabling trade even without monetary exchange.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-lg text-gray-800"
          >
            <div className="flex gap-4 items-center mb-4">
              <img
                src={testimonialImage1}
                alt="User 1"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-lg">John Doe</h3>
                <p className="text-sm text-gray-500">Farmer</p>
              </div>
            </div>
            <p>"KrishiBondhu made it easy for me to sell my produce directly to local buyers. The platform is simple and reliable."</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-lg text-gray-800"
          >
            <div className="flex gap-4 items-center mb-4">
              <img
                src={testimonialImage2}
                alt="User 2"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-lg">Jane Smith</h3>
                <p className="text-sm text-gray-500">Buyer</p>
              </div>
            </div>
            <p>"I found fresh produce nearby at great prices. This platform has changed the way we buy locally!"</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-white py-4"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl font-bold">
              Krishi<span className="text-yellow-300">Bondhu</span>
            </h2>
            <p className="mt-2 text-sm opacity-80">
              Bridging the gap between farmers and buyers through simple, effective digital tools.
            </p>
            <p className="mt-1 text-sm opacity-80">
              &copy; {new Date().getFullYear()} KrishiBondhu. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2 md:space-y-0 md:space-x-6 text-center text-lg font-medium">
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
          </nav>
        </div>

        {/* Bottom Animating Bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        ></motion.div>
      </motion.footer>
    </div>
  );
}

export default HomePage;
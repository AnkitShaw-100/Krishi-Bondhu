import React from 'react';
import { motion } from 'framer-motion'; // For animations

function AboutUsPage() {
  // Scroll animation effect
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="about-us-page bg-gradient-to-r from-blue-200 via-teal-100 to-blue-300 min-h-screen flex items-center justify-center">
      <motion.div
        className="about-content max-w-3xl p-8 bg-white shadow-lg rounded-lg"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">🌟 About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to KrishiBondhu! We are a team of passionate individuals working together to empower farmers and local buyers in rural Bengal. Our goal is to create a seamless and efficient marketplace where farmers can directly connect with buyers, exchanging fresh produce at fair prices.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          By focusing on a Bengali-first, voice-driven user experience, we aim to bridge the gap in rural commerce and provide a platform that supports local agriculture and communities.
        </p>
        
        <motion.div 
          className="team-members space-y-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800">Our Team</h2>
          <div className="team-member flex items-center space-x-6">
            <img 
              src="https://randomuser.me/api/portraits/men/1.jpg" 
              alt="Team Member 1" 
              className="w-16 h-16 rounded-full shadow-md"
            />
            <div>
              <p className="font-semibold text-gray-800">John Doe</p>
              <p className="text-sm text-gray-600">Co-founder & CEO</p>
            </div>
          </div>

          <div className="team-member flex items-center space-x-6">
            <img 
              src="https://randomuser.me/api/portraits/women/2.jpg" 
              alt="Team Member 2" 
              className="w-16 h-16 rounded-full shadow-md"
            />
            <div>
              <p className="font-semibold text-gray-800">Jane Smith</p>
              <p className="text-sm text-gray-600">Co-founder & CTO</p>
            </div>
          </div>

          <div className="team-member flex items-center space-x-6">
            <img 
              src="https://randomuser.me/api/portraits/men/3.jpg" 
              alt="Team Member 3" 
              className="w-16 h-16 rounded-full shadow-md"
            />
            <div>
              <p className="font-semibold text-gray-800">Amit Kumar</p>
              <p className="text-sm text-gray-600">Lead Developer</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutUsPage;

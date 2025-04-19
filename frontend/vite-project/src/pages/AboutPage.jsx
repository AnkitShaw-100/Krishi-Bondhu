import React from 'react';
import Navbar from './Navbar'; 
import { motion } from 'framer-motion'; 
import Ankit from '../assets/ankit.jpg'; 
import Anushka from '../assets/anushka.png'; 

function AboutUsPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="about-us-page bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <motion.div
        className="about-content max-w-5xl mx-auto py-12 px-6"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Page Title */}
        <h1 className="text-5xl font-bold text-center text-green-600 mb-8">
          🌾 About Us
        </h1>

        {/* Project Description */}
        <section className="text-lg text-gray-700 leading-relaxed mb-12">
          <p className="mb-4">
            Welcome to <span className="font-bold text-green-800">KrishiBondhu</span> – A Hyperlocal Agri-Marketplace! 
            Our mission is to empower farmers and local buyers in rural Bengal by creating a seamless, user-friendly, and efficient platform for trade.
          </p>
          <p className="mb-4">
            KrishiBondhu focuses on enabling farmers to list their produce using <span className="font-bold">Bengali voice input</span> or text input, discover nearby buyers within a 5–10km radius, and even barter goods or sell for cash. Our platform eliminates middlemen, ensuring fair prices and fostering local, day-to-day agricultural trade.
          </p>
          <p>
            With features like <span className="font-bold">hyperlocal peer-to-peer trade</span>, <span className="font-bold">barter support</span>, and <span className="font-bold">anonymous posting</span>, we aim to revolutionize rural commerce while keeping the platform simple and effective for users.
          </p>
        </section>

        {/* Team Members Section */}
        <section className="team-members">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Team Member 1 */}
            <motion.div
              className="team-member flex items-center space-x-6"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <img 
                src={Ankit} 
                alt="Ankit Shaw" 
                className="w-24 h-24 rounded-full shadow-md"
              />
              <div>
                <h3 className="font-bold text-xl text-gray-800">Ankit Shaw</h3>
                <p className="text-md text-gray-600">Co-founder & Lead Developer</p>
                <p className="text-sm text-gray-500">
                  A passionate developer from IEM with expertise in MERN stack and a vision to revolutionize rural commerce through technology.
                </p>
              </div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              className="team-member flex items-center space-x-6"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <img 
                src={Anushka}
                alt="Anushka Maity" 
                className="w-24 h-24 rounded-full shadow-md"
              />
              <div>
                <h3 className="font-bold text-xl text-gray-800">Anushka Maity</h3>
                <p className="text-md text-gray-600">Co-founder & UI/UX Designer</p>
                <p className="text-sm text-gray-500">
                  A creative mind from IEM specializing in crafting intuitive user experiences and visual designs for impactful digital platforms.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Closing Note */}
        <section className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            Together, we are committed to bridging the gap between farmers and buyers, fostering growth and connectivity in rural Bengal. Thank you for being a part of our journey!
          </p>
        </section>
      </motion.div>
    </div>
  );
}

export default AboutUsPage;
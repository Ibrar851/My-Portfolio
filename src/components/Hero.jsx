import React from "react";
import profilePic from "../assets/profile.jpeg"; // your image path

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-[#0d1117] text-gray-900 dark:text-white px-6 md:px-16 pt-24 transition-colors duration-500 overflow-hidden"
    >
      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-dark dark:bg-[#0d1117]/80 backdrop-blur-md border border-gray-300 dark:border-gray-700 rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-7xl mx-auto">
        
        {/* Left: Profile Image */}
        <div className="flex justify-center md:justify-start mb-8 md:mb-0 md:mr-12 flex-shrink-0">
          <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border-4 border-blue-500 overflow-hidden shadow-lg">
            <img
              src={profilePic}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right: Text Section */}
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4">
            Hi, I’m <span className="text-blue-500">Ibrar Ul Haq</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-base sm:text-lg md:text-xl leading-relaxed">
            A passionate <span className="text-blue-400">MERN Stack Developer</span> crafting powerful, responsive, and modern web applications using React, Node.js, Express, and MongoDB.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-medium text-white transition-all duration-300 shadow-md">
              View Projects
            </button>
            <button className="text-black border border-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

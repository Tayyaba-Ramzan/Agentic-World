"use client";
import React from "react";
import { BsRobot } from "react-icons/bs";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const HeroSection = () => {
  const lines = [
    "Harness the power of AI to redefine the future.",
    "Elevate your enterprise with cutting-edge automation",
    "Revolutionize your operations with state-of-the-art AI solutions.",
    "Step into the future—transform efficiency with intelligent innovation."
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-black via-gray-900 to-black text-white mt-10">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-700/20 to-transparent blur-3xl opacity-50"></div>

      {/* Branding Badge */}
      <div className="px-4 py-1 rounded-full flex items-center space-x-2 bg-white/10 backdrop-blur-lg shadow-lg">
        <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
        <span className="text-purple-400 font-medium tracking-wider">POWERED BY PANAVERSITY</span>
      </div>

      {/* Hero Image */}
      <div className="mt-10 transition-all duration-500 hover:scale-105">
      <motion.div 
          initial={{ scale: 0.9 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="w-40 sm:w-48 md:w-56 lg:w-64"
        >
          <Image
          src="/my-robot.png"
          alt="AI Agent"
          width={280}
          height={280}
          className="rounded-full object-cover shadow-2xl border-4 border-purple-500/50"
        />
        </motion.div>
        
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-6 leading-tight">
        <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Intelligent AI Agents
        </span>
      </h1>

      {/* Subtitle */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-2 text-gray-300">
        Redefining the Future of Automation
      </h2>

      {/* Typewriter Box */}
      <div className="mt-8 py-4 px-6 bg-gray-900/50 backdrop-blur-md rounded-lg w-full max-w-lg flex items-center gap-4 shadow-lg border border-gray-800">
        <span className="text-purple-400">
          <BsRobot size={28} />
        </span>

        {/* Typewriter Effect */}
        <div className="text-gray-300 text-lg font-medium">
          <Typewriter
            words={lines}
            loop={true}
            cursor
            cursorColor="#8B5CF6"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <Link
          href="#"
          className="flex items-center space-x-2 text-white bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-xl font-semibold text-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-purple-500/50"
        >
          <p>Unleash the Potential of AI Innovation</p> <FaChevronRight />
        </Link>

        <Link
          href="#"
          className="border-2 border-gray-600 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:border-purple-500 hover:text-purple-400"
        >
          Experience the AI Revolution – Live Demo
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

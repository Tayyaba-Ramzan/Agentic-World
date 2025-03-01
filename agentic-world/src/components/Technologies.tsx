"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaRobot, FaBrain, FaLock, FaSatelliteDish, FaMicrochip, FaCloud } from "react-icons/fa";

const technologies = [
  {
    name: "Autonomous AI Agents",
    description: "Revolutionizing industries with self-learning AI.",
    icon: FaRobot,
    glow: "hover:shadow-cyan-500",
    color: "text-cyan-400",
  },
  {
    name: "Advanced Machine Learning",
    description: "Harnessing data for unparalleled decision-making.",
    icon: FaBrain,
    glow: "hover:shadow-yellow-500",
    color: "text-yellow-400",
  },
  {
    name: "Cybersecurity & Blockchain",
    description: "Next-level security for decentralized ecosystems.",
    icon: FaLock,
    glow: "hover:shadow-green-500",
    color: "text-green-400",
  },
  {
    name: "Quantum Computing",
    description: "Breaking barriers with quantum speed and efficiency.",
    icon: FaSatelliteDish,
    glow: "hover:shadow-purple-500",
    color: "text-purple-400",
  },
  {
    name: "Neural & Bio Interfaces",
    description: "Merging AI with the human brain for enhanced cognition.",
    icon: FaMicrochip,
    glow: "hover:shadow-red-500",
    color: "text-red-400",
  },
  {
    name: "Cloud AI & Edge Computing",
    description: "Scalable AI solutions for real-time intelligence",
    icon: FaCloud,
    glow: "hover:shadow-blue-500",
    color: "text-blue-400",
  },
];

const Technologies = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="technology"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 md:px-8 text-center overflow-hidden pb-10"
    >
      {/* Animated Background */}

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[4px] h-[4px] bg-white/40 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.2,
            }}
            animate={{ y: ["100vh", "-10vh"], opacity: [0.1, 0.5, 0.1] }}
            transition={{ duration: Math.random() * 10 + 5, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      {/* Heading */}
      <h1
        data-aos="fade-down"
        className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-pulse"
      >
        Next-Gen Technologies
      </h1>

      {/* Technologies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 z-10 mt-12 w-full max-w-6xl">
        {technologies.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={index}
              data-aos="zoom-in"
              className={`p-8 flex flex-col items-center justify-center bg-black backdrop-blur-lg rounded-3xl shadow-xl border border-purple-500 hover:border-none transform transition-all duration-500 hover:scale-105 ${tech.glow} hover:shadow-[0_0_25px]`}
            >
              <IconComponent className={`${tech.color} w-16 h-16 sm:w-20 sm:h-20`} />
              <p className="mt-4 text-xl sm:text-2xl font-bold text-white">{tech.name}</p>
              <p className="text-white/80 mt-2 text-sm sm:text-base">{tech.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;

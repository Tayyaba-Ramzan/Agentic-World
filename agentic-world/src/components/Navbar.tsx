"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaRobot } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <FaRobot size={30} className="text-purple-500" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Agentic World
          </h2>
        </div>

        {/* Hamburger Menu - Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <CgMenuRight size={28} />
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link href="#technology" className="hover:text-purple-400 transition-all">
              Technology
            </Link>
          </li>
          <li>
            <Link href="#insights" className="hover:text-purple-400 transition-all">
              Insights
            </Link>
          </li>
          <li>
            <Link href="#pricing" className="hover:text-purple-400 transition-all">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-purple-400 transition-all">
              Contact
            </Link>
          </li>
          <li>
            <Link href="#launch" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105 shadow-lg">
              Explore Innovations
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation - Full Screen Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-0 flex flex-col justify-center items-center bg-black text-white z-50">
            <button
              className="absolute top-5 right-6 text-3xl text-purple-600 hover:text-purple-400 transition"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <IoMdClose />
            </button>

            <nav className="flex flex-col space-y-6 text-xl text-center">
              <Link href="#technology" className="text-white hover:text-purple-600 transition-all" onClick={handleLinkClick}>
                Technology
              </Link>
              <Link href="#insights" className="text-white hover:text-purple-600 transition-all" onClick={handleLinkClick}>
                Agents
              </Link>
              <Link href="#pricing" className="text-white hover:text-purple-600 transition-all" onClick={handleLinkClick}>
                Pricing
              </Link>
              <Link href="#contact" className="text-white hover:text-purple-600 transition-all" onClick={handleLinkClick}>
                Contact
              </Link>
              <Link href="#launch" className="text-white bg-purple-500 hover:bg-purple-600 rounded-lg px-6 py-3 transition-all transform hover:scale-110 shadow-lg" onClick={handleLinkClick}>
                Explore Innovations
              </Link>
            </nav>
          </div>
        </>
      )}
      <hr className="h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-green-500 border-0 rounded-full " />

    </nav>
  );
};

export default Navbar;

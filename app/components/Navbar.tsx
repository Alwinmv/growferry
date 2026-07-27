"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">

        <a href="#home">
          <Image
            src="/logo.png"
            alt="Growferry Logo"
            width={180}
            height={60}
            priority
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700">
          <a href="#home" className="hover:text-black transition">
            Home
          </a>

          <a href="#services" className="hover:text-black transition">
            Services
          </a>

          <a href="#work" className="hover:text-black transition">
            Why Choose Us
          </a>

          <a href="#about" className="hover:text-black transition">
            About
          </a>

          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-black"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25 }}
      className="md:hidden flex flex-col items-center gap-6 py-6 bg-white border-t text-gray-700"
    >
      <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
      <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
      <a href="#work" onClick={() => setMenuOpen(false)}>Why Choose Us</a>
      <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
      <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
}
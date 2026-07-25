"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="scroll-mt-24 min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white via-gray-50 to-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
     <motion.h1
  className="text-4xl md:text-6xl font-bold text-black leading-tight"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  Grow Your Business with Growferry
</motion.h1>

      <motion.p
  className="mt-6 max-w-2xl text-base md:text-lg text-gray-600 px-4"
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
>
  We help businesses build beautiful websites, powerful brands,
  and digital experiences that convert visitors into customers.
</motion.p>

     <motion.button
  className="mt-8 bg-black text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
  whileHover={{
    scale: 1.08,
    y: -3,
    boxShadow: "0px 18px 40px rgba(77, 77, 77, 0.69)",
  }}
  whileTap={{
    scale: 0.96,
  }}
>
  Book a Free Consultation
</motion.button>
    </motion.section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
   <motion.section
  id="home"
  className="
    relative
    overflow-hidden
    scroll-mt-24
    flex flex-col justify-center items-center text-center
    px-6
    py-16 md:py-24
    md:min-h-[calc(100vh-72px)]
    bg-gradient-to-b from-white via-gray-50 to-white
  "
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 rounded-full bg-blue-400/30 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-[26rem] h-[26rem] rounded-full bg-purple-400/30 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 -z-10
        bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)]
        bg-[size:70px_70px]
        opacity-[0.04]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/20 via-transparent to-white" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight text-black drop-shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Grow Your Business with Growferry
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-base md:text-lg text-gray-600"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          We help businesses build beautiful websites, powerful brands,
          and digital experiences that convert visitors into customers.
        </motion.p>

      <a
  href="https://wa.me/918714181898?text=Hi%20Growferry!%20I%20would%20like%20to%20book%20a%20free%20consultation."
  target="_blank"
  rel="noopener noreferrer"
>
  <motion.button
    className="mt-8 bg-black text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300"
    whileHover={{
      scale: 1.03,
      y: -2,
      boxShadow: "0px 18px 40px rgba(77,77,77,0.25)",
    }}
    whileTap={{
      scale: 0.96,
    }}
  >
    Book a Free Consultation
  </motion.button>
</a>
      </div>
    </motion.section>
  );
}
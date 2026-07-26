"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="home"
     className="relative overflow-hidden scroll-mt-24 min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white via-gray-50 to-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">

  <motion.div
  className="absolute bottom-20 right-20 w-[30rem] h-[30rem] rounded-full bg-purple-400/40 blur-3xl"
  animate={{
    x: [0, -15, 0],
    y: [0, 10, 0],
    scale: [1, 1.05, 1],
  }}
  transition={{
    duration: 24,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

  <motion.div
  className="absolute top-20 left-20 w-96 h-96 rounded-full bg-blue-400/40 blur-3xl"
  animate={{
    x: [0, 15, 0],
    y: [0, -10, 0],
    scale: [1, 1.04, 1],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

</div>
<div
  className="absolute inset-0 -z-10
             bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)]
             bg-[size:70px_70px]
             opacity-[0.04]"
/>
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/20 via-transparent to-white" />
     <motion.h1
className="max-w-5xl text-4xl md:text-6xl font-bold text-black leading-tight drop-shadow-sm"
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
    </motion.section>
  );
}

"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "💻",
    title: "Website Development",
    description: "Fast, modern websites built using Next.js and React.",
  },
  {
    icon: "🎨",
    title: "UI / UX Design",
    description: "Beautiful interfaces designed to improve user experience.",
  },
  {
    icon: "✨",
    title: "Branding & Graphic Design",
    description: "Build a strong brand identity with professional designs.",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    description: "Grow your brand with data-driven marketing strategies.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 min-h-screen bg-gray-50 py-20 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mt-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Everything you need to grow your business online.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow hover:shadow-2xl hover:border-black/20 cursor-pointer"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                {service.icon} {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
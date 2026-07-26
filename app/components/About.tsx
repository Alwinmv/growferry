"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 min-h-screen bg-gray-50 py-20 px-6 md:px-10 flex items-center"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            About Growferry
          </h2>

          <p className="text-gray-600 leading-8 mb-6">
            Growferry is a creative digital agency helping businesses
            build modern websites, powerful brands, and digital experiences
            that create real business growth.
          </p>

          <p className="text-gray-600 leading-8 mb-8">
            We believe every business deserves a strong online presence.
            That's why we combine creativity, technology, and strategy
            to deliver solutions that truly make an impact.
          </p>

          <motion.button
            className="bg-black text-white px-8 py-4 rounded-xl shadow-xl"
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">

            <div className="space-y-8">

              <div>
                <h3 className="text-2xl font-bold text-black">
                  🚀 Our Mission
                </h3>

                <p className="text-gray-600 mt-3">
                  Helping businesses grow through innovative digital
                  solutions and modern technology.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black">
                  💡 Our Vision
                </h3>

                <p className="text-gray-600 mt-3">
                  To become a trusted digital partner for startups,
                  entrepreneurs, and growing businesses worldwide.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200">

  <div className="text-center">
    <h3 className="text-3xl font-bold text-black">50+</h3>
    <p className="text-gray-600 mt-2 text-sm">
      Projects
    </p>
  </div>

  <div className="text-center">
    <h3 className="text-3xl font-bold text-black">30+</h3>
    <p className="text-gray-600 mt-2 text-sm">
      Happy Clients
    </p>
  </div>

  <div className="text-center">
    <h3 className="text-3xl font-bold text-black">100%</h3>
    <p className="text-gray-600 mt-2 text-sm">
      Commitment
    </p>
  </div>

</div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
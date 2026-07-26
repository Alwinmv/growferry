"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "⚡",
    title: "Fast Delivery",
    description:
      "We deliver high-quality projects on time without compromising quality.",
  },
  {
    icon: "📱",
    title: "Fully Responsive",
    description:
      "Every website looks perfect on mobile, tablet, and desktop devices.",
  },
  {
    icon: "🎯",
    title: "Custom Solutions",
    description:
      "Every business is unique, so we create solutions tailored to your goals.",
  },
  {
    icon: "🎨",
    title: "Creative Design",
    description:
      "Beautiful branding, graphics, and user-friendly interfaces that leave a lasting impression.",
  },
  {
    icon: "💬",
    title: "Dedicated Support",
    description:
      "We're here to support you even after your website goes live.",
  },
  {
    icon: "🚀",
    title: "Business Growth",
    description:
      "Our focus is not just building websites, but helping your business grow online.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="work"
      className="scroll-mt-24 min-h-screen bg-white py-20 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Growferry?
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mt-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We build modern digital solutions that help your business grow with confidence.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          {features.map((feature, index) => (
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
              className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow hover:shadow-2xl hover:border-black/20 cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
  <span className="mr-2">{feature.icon}</span>
  {feature.title}
</h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

const reasons = [
  "Lightning-fast Next.js performance",
  "Beautiful UI with Tailwind + animations",
  "Dark & Light mode out of the box",
  "Easy to customize and scale",
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        Why Choose Us?
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 border rounded-xl shadow-sm bg-white dark:bg-gray-800"
          >
            ✅ {reason}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

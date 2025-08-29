"use client";

import { motion } from "framer-motion";

const steps = [
  { title: "Sign Up", desc: "Create your free account in seconds." },
  { title: "Customize", desc: "Tailor the app to fit your business needs." },
  { title: "Launch", desc: "Go live and start growing your SaaS." },
];

export default function Working() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 border rounded-xl shadow-sm bg-white dark:bg-gray-800"
          >
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion, TargetAndTransition } from "framer-motion";
import { Check } from "lucide-react";

// Sample pricing plans
const plans = [
  {
    name: "Starter",
    price: "$9/mo",
    features: ["Basic features", "Up to 10 users", "Email support"],
  },
  {
    name: "Pro",
    price: "$29/mo",
    features: ["All Starter features", "Up to 100 users", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited users", "Dedicated manager", "24/7 support"],
  },
];

// Motion.li for safe JSX
const MotionLi = motion.li;

// Hover animation object with proper typing
const cardHover: TargetAndTransition = {
  scale: 1.04,
  y: -6,
  boxShadow: "0px 20px 40px rgba(124, 58, 237, 0.3)",
  transition: { type: "spring", stiffness: 150, damping: 14 },
};

export default function Pricing() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-purple-200 via-purple-100 to-purple-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background Glows */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[40rem] h-[40rem] bg-purple-400 dark:bg-purple-700 rounded-full blur-3xl opacity-20"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
          transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-[30rem] h-[30rem] bg-pink-400 dark:bg-pink-700 rounded-full blur-3xl opacity-20"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
          transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
        }}
      />

      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold mb-16 text-gray-900 dark:text-white"
        >
          <motion.span
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-900 dark:text-white"
          >
            EduStax{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-purple-700 dark:text-purple-400"
          >
            Pricing Plans
          </motion.span>
        </motion.h2>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.2,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={cardHover} // ✅ fixed red squiggle
              className="relative flex flex-col justify-between p-8 min-h-[400px] bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
                {plan.name}
              </h3>

              <p className="text-4xl font-extrabold mb-6 text-indigo-600 dark:text-indigo-300">
                {plan.price}
              </p>

              <motion.ul className="flex-1 space-y-3 mb-6 text-gray-700 dark:text-gray-300">
                {plan.features.map((feat, i) => (
                  <MotionLi
                    key={i}
                    className="flex items-center justify-center gap-2"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Check className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                    <span>{feat}</span>
                  </MotionLi>
                ))}
              </motion.ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg transition"
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

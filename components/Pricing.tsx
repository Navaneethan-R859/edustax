"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

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

export default function Pricing() {
  const cardHover = {
    scale: 1.07,
    y: -6,
    rotateX: 2,
    rotateY: 3,
    boxShadow: "0px 25px 50px rgba(124, 58, 237, 0.25)",
    transition: { type: "spring", stiffness: 180, damping: 14 },
  };

  const pulseBorder = {
    whileHover: {
      borderImageSlice: 1,
      borderImageSource: "linear-gradient(135deg, #7c3aed, #4f46e5)",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    animate: {
      borderImageSlice: 1,
      borderImageSource: "linear-gradient(135deg, #a78bfa, #6366f1)",
      transition: { repeat: Infinity, repeatType: "mirror", duration: 2, ease: "easeInOut" },
    },
  };

  const floatEffect = {
    animate: {
      y: [0, -4, 0],
      transition: { repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative py-20 bg-white dark:bg-gradient-to-r dark:from-purple-700 dark:via-purple-800 dark:to-indigo-900 overflow-hidden">
      {/* Gradient blobs for glow (only show in light mode for subtle effect) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse dark:hidden"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse dark:hidden"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-gray-800 dark:text-white"
        >
          <span className="text-gray-800 dark:text-white">EduStax</span>{" "}
          <span className="text-purple-700 dark:text-purple-300">Pricing Plans</span>
        </motion.h2>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.2, type: "spring", stiffness: 120 }}
              whileHover={cardHover}
              className="relative p-8 bg-white dark:bg-gray-900 rounded-3xl flex flex-col items-center text-center cursor-pointer overflow-hidden shadow-lg"
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-4 border-transparent pointer-events-none"
                {...pulseBorder}
              />

              {/* Plan Name */}
              <h3 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
                {plan.name}
              </h3>

              {/* Price */}
              <p className="text-4xl font-extrabold mb-6 text-indigo-600 dark:text-indigo-300">
                {plan.price}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
                {plan.features.map((feat, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center justify-center gap-2"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <Check className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                    <span>{feat}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg transition-colors"
              >
                Choose Plan
              </motion.button>

              {/* Floating subtle effect */}
              <motion.div {...floatEffect} className="absolute inset-0 rounded-3xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

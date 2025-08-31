"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants, TargetAndTransition } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "What is Edustax?", answer: "Edustax is a SaaS platform designed to simplify learning management and digital education delivery." },
  { question: "Can I cancel anytime?", answer: "Absolutely. You can cancel or switch plans at any time with no hidden charges." },
  { question: "Is Edustax suitable for schools and colleges?", answer: "Yes! Our platform is designed to scale from individual learners to large educational institutions." },
  { question: "Does it support collaborative learning?", answer: "Yes! Teachers and students can interact, share content, and track progress in real-time." },
];

// Fade-up animation
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: "spring", stiffness: 120 },
  }),
};

// Hover effect
const hoverEffect: TargetAndTransition = {
  scale: 1.02,
  boxShadow: "0 12px 30px rgba(124, 58, 237, 0.3)",
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-purple-200 via-purple-100 to-purple-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Floating Glows */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-purple-300 rounded-full opacity-20 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-pink-300 rounded-full opacity-20 blur-3xl"
        animate={{ scale: [1.1, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={hoverEffect}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden cursor-pointer border border-purple-300 dark:border-purple-700 transition-all"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left text-purple-700 dark:text-purple-300 font-semibold text-lg"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {faq.question}
                <ChevronDown
                  className={`h-6 w-6 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="px-6 pb-6 text-gray-700 dark:text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

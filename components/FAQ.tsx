"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "What is Edustax?", answer: "Edustax is a SaaS platform designed to simplify learning management and digital education delivery." },
  { question: "Is there a free trial?", answer: "Yes! You can start with a 14-day free trial and explore all features before upgrading." },
  { question: "Can I cancel anytime?", answer: "Absolutely. You can cancel or switch plans at any time with no hidden charges." },
  { question: "Is Edustax suitable for schools and colleges?", answer: "Yes! Our platform is designed to scale from individual learners to large educational institutions." },
  { question: "Does it support collaborative learning?", answer: "Yes! Teachers and students can interact, share content, and track progress in real-time." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const cardHover = {
    hover: {
      scale: 1.03,
      rotateY: 3,
      rotateX: 2,
      boxShadow: "0 15px 30px rgba(124, 58, 237, 0.25)",
      transition: { type: "spring", stiffness: 200, damping: 12 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, type: "spring", stiffness: 120 },
    }),
  };

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Glows */}
      <motion.div
        className="absolute top-40 left-20 w-80 h-80 bg-purple-400 rounded-full opacity-20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0], opacity: [0.2, 0.3, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl"
        animate={{ scale: [1.2, 1, 1.3], rotate: [0, -45, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-black"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer border-2 border-purple-200"
              variants={fadeUp}
              custom={idx}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              style={{ transformStyle: "preserve-3d" }}
              {...cardHover}
            >
              {/* Question */}
              <button
                className="w-full flex justify-between items-center p-6 text-left text-purple-700 font-semibold text-lg"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {faq.question}
                <ChevronDown
                  className={`h-6 w-6 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="px-6 pb-6 text-gray-600"
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

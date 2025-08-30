"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aditi Sharma",
    role: "Teacher",
    quote: "Edustax made my classroom more engaging and collaborative.",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Rahul Verma",
    role: "Student",
    quote: "I love how easy it is to access all my courses on one platform.",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Sneha Patel",
    role: "Parent",
    quote: "I can now track my child’s progress in real-time. Amazing tool!",
    avatar: "https://i.pravatar.cc/100?img=20",
  },
  {
    name: "Karan Singh",
    role: "Student",
    quote: "The gamified lessons keep me motivated to learn every day.",
    avatar: "https://i.pravatar.cc/100?img=25",
  },
  {
    name: "Neha Gupta",
    role: "Teacher",
    quote: "Tracking student performance has never been easier.",
    avatar: "https://i.pravatar.cc/100?img=30",
  },
  {
    name: "Rohit Mehra",
    role: "Parent",
    quote: "The platform’s dashboard is very intuitive and informative.",
    avatar: "https://i.pravatar.cc/100?img=35",
  },
  {
    name: "Priya Nair",
    role: "Student",
    quote: "I love the interactive quizzes—they make learning fun!",
    avatar: "https://i.pravatar.cc/100?img=40",
  },
];

export default function Testimonials() {
  const slideDirections = ["-100%", "100%", "-50%", "50%"];
  const themeColor = "#7c3aed"; // Purple theme

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-purple-700 dark:text-purple-400"
        >
          What Our Users Say
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ x: slideDirections[idx % slideDirections.length], opacity: 0, scale: 0.95 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, type: "spring", stiffness: 150, damping: 15 }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0px 20px 40px ${themeColor}55`,
                borderColor: themeColor,
              }}
              className="relative p-8 rounded-3xl flex flex-col items-center text-center cursor-pointer overflow-hidden 
                         bg-gradient-to-br from-purple-800 to-purple-900 
                         dark:from-gray-800 dark:to-gray-900 
                         border-2 border-purple-700 dark:border-purple-600 
                         transition-colors duration-500"
            >
              {/* Animated Gradient Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent"
                whileHover={{
                  borderColor: themeColor,
                  transition: { duration: 0.8, type: "tween" },
                }}
              />

              {/* Avatar animation */}
              <motion.img
                src={t.avatar}
                alt={t.name}
                className="h-16 w-16 rounded-full mb-4 shadow-lg border-2 border-purple-500"
                animate={{
                  y: [0, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />

              {/* Quote animation */}
              <motion.p
                className="italic text-purple-300 dark:text-purple-200 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.3,
                  duration: t.quote.length * 0.05,
                }}
              >
                “{t.quote}”
              </motion.p>

              <h4 className="font-semibold text-purple-400 dark:text-purple-300">{t.name}</h4>
              <span className="text-purple-300 dark:text-purple-200 text-sm">{t.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

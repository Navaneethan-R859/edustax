"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion, Transition } from "framer-motion";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaCertificate,
  FaUsers,
  FaGlobe,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

export default function Working() {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  useEffect(() => setMounted(true), []);

  // Floating animation
  const floatInit = { y: 0 };
  const floatKeyframes = prefersReducedMotion ? { y: 0 } : { y: [0, -15, 0] };
  const floatTiming: Transition = prefersReducedMotion
    ? { duration: 0 }
    : { repeat: Infinity, duration: 4, ease: "easeInOut" };

  // Fade-up animation helpers
  const fadeUpInit = { opacity: 0, y: 40 };
  const fadeUpTarget = { opacity: 1, y: 0 };
  const fadeUpTiming = (i: number): Transition => ({
    delay: i * 0.2,
    duration: 0.6,
    ease: "easeOut",
  });

  const features = [
    {
      icon: <FaBookOpen className="text-purple-600 text-5xl" />,
      title: "Wide Range of Courses",
      desc: "Access diverse subjects crafted by industry experts.",
    },
    {
      icon: <FaChalkboardTeacher className="text-green-600 text-5xl" />,
      title: "Expert Instructors",
      desc: "Learn from professionals with real-world experience.",
    },
    {
      icon: <FaLaptopCode className="text-blue-600 text-5xl" />,
      title: "Practical Learning",
      desc: "Hands-on projects and coding challenges.",
    },
    {
      icon: <FaCertificate className="text-yellow-600 text-5xl" />,
      title: "Certification",
      desc: "Earn globally recognized certificates.",
    },
    {
      icon: <FaUsers className="text-pink-600 text-5xl" />,
      title: "Community Support",
      desc: "Join learners worldwide and grow together.",
    },
    {
      icon: <FaGlobe className="text-indigo-600 text-5xl" />,
      title: "Global Access",
      desc: "Learn anytime, anywhere with multilingual support.",
    },
    {
      icon: <FaRocket className="text-red-600 text-5xl" />,
      title: "Career Boost",
      desc: "Get career-ready skills and land your dream job.",
    },
    {
      icon: <FaHeadset className="text-teal-600 text-5xl" />,
      title: "24/7 Support",
      desc: "Dedicated mentors and instant query resolution.",
    },
  ];

  const dashboardStats = [
    { title: "Users", value: "1,245", color: "purple" },
    { title: "Revenue", value: "$8,432", color: "green" },
    { title: "Orders", value: "312", color: "blue" },
    { title: "Growth", value: "23%", color: "pink" },
  ];

  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Features */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Features of <span className="text-purple-600">EduStax</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Discover the features that make EduStax the best place for learning.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={fadeUpInit}
            animate={fadeUpTarget}
            transition={fadeUpTiming(idx)}
            whileHover={{ scale: 1.07, boxShadow: "0 0 30px rgba(168,85,247,0.6)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center relative overflow-hidden"
          >
            {/* Glow border effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-purple-500 opacity-0"
              whileHover={{ opacity: 1, boxShadow: "0 0 25px rgba(168,85,247,0.7)" }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              initial={floatInit}
              animate={floatKeyframes}
              transition={floatTiming}
              className="mb-6 z-10"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 z-10">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 z-10">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Dashboard Section */}
      <div className="max-w-7xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl mt-16 relative overflow-hidden">
        {/* Animated gradient glow background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20 blur-2xl"
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />

        <motion.h3
          className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Dashboard
        </motion.h3>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {dashboardStats.map((stat, i) => (
            <motion.div
              key={i}
              className={`p-6 rounded-2xl shadow-md text-center bg-gray-100 dark:bg-gray-700 relative`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{
                scale: 1.08,
                boxShadow: `0 0 25px rgba(255,255,255,0.2), 0 0 40px rgba(236,72,153,0.4)`,
              }}
            >
              <h4 className="text-gray-600 dark:text-gray-300">{stat.title}</h4>
              <p
                className={`text-2xl font-bold mt-2 text-${stat.color}-600 dark:text-${stat.color}-400`}
              >
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Placeholder Chart Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gray-100 dark:bg-gray-700 p-8 rounded-2xl shadow-md mt-10 text-center relative z-10"
          whileHover={{
            boxShadow: "0 0 30px rgba(59,130,246,0.6)",
            scale: 1.02,
          }}
        >
          <p className="text-gray-500 dark:text-gray-300">
            📊 EDUSTAX
          </p>
        </motion.div>
      </div>

      {/* Background Floating Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-purple-400 dark:bg-purple-700 rounded-full opacity-20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400 dark:bg-pink-700 rounded-full opacity-20 blur-3xl"
          animate={{ scale: [1.2, 1, 1.3], opacity: [0.2, 0.35, 0.2] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}

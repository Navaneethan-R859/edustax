"use client";

import { motion, Variants } from "framer-motion";
import {
  FaGraduationCap,
  FaBook,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaGlobe,
} from "react-icons/fa";

// Typed motion variants
const spin: Variants = {
  animate: {
    rotate: [0, 360],
    y: [0, -30, 0],
    transition: { repeat: Infinity, duration: 10, ease: "linear" },
  },
};

const float: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
  },
};

const textAnimation: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
  pulse: {
    scale: [1, 1.02, 1],
    transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
  },
};

export default function Hero() {
  return (
    <section
      className="
        relative h-screen flex flex-col items-center justify-center text-center
        bg-gradient-to-br from-purple-200 via-purple-100 to-purple-300
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        overflow-hidden px-6
      "
    >
      {/* Background Spinning Shape */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-400 dark:bg-purple-700 rounded-full opacity-20"
        variants={spin}
        animate="animate"
      />

      {/* Hero Text */}
      <div className="relative z-10 max-w-3xl">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white"
          variants={textAnimation}
          initial="hidden"
          animate={["visible", "pulse"]}
        >
          Learn. Grow. Succeed with{" "}
          <span className="text-purple-600 dark:text-purple-400">EduStax</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-2xl text-gray-700 dark:text-gray-300"
          variants={textAnimation}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 1 }}
        >
          Dive into top courses, earn certifications, and elevate your skills globally.
        </motion.p>
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-24 left-12 text-purple-600 dark:text-purple-400 text-6xl opacity-80"
        variants={float}
        animate="animate"
        whileHover={{ scale: 1.2, rotateY: 20, transition: { duration: 0.5 } }}
      >
        <FaGraduationCap />
      </motion.div>

      <motion.div
        className="absolute top-32 right-16 text-pink-600 dark:text-pink-400 text-5xl opacity-80"
        variants={float}
        animate="animate"
        whileHover={{ scale: 1.2, rotateX: 20 }}
      >
        <FaBook />
      </motion.div>

      <motion.div
        className="absolute bottom-28 left-16 text-blue-600 dark:text-blue-400 text-6xl opacity-80"
        variants={float}
        animate="animate"
        whileHover={{ scale: 1.2, rotateY: -20 }}
      >
        <FaLaptopCode />
      </motion.div>

      <motion.div
        className="absolute bottom-24 right-20 text-green-600 dark:text-green-400 text-6xl opacity-80"
        variants={float}
        animate="animate"
        whileHover={{ scale: 1.2, rotateX: -20 }}
      >
        <FaChalkboardTeacher />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 text-yellow-600 dark:text-yellow-400 text-5xl opacity-80"
        variants={spin}
        animate="animate"
      >
        <FaGlobe />
      </motion.div>
    </section>
  );
}

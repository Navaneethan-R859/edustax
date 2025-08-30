"use client";

import { motion, Variants, TargetAndTransition } from "framer-motion";
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


const cardHover: TargetAndTransition = {
  scale: 1.05,
  rotateY: 6,
  rotateX: 6,
  transition: { type: "spring", stiffness: 200, damping: 12 },
};


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: -5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};


const float: TargetAndTransition = {
  y: [0, -12, 0],
  transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
};

export default function Features() {
  const features = [
    { icon: <FaBookOpen className="text-purple-600 dark:text-purple-400 text-5xl" />, title: "Wide Range of Courses", desc: "Access diverse subjects crafted by industry experts." },
    { icon: <FaChalkboardTeacher className="text-green-600 dark:text-green-400 text-5xl" />, title: "Expert Instructors", desc: "Learn from professionals with real-world experience." },
    { icon: <FaLaptopCode className="text-blue-600 dark:text-blue-400 text-5xl" />, title: "Practical Learning", desc: "Hands-on projects and coding challenges." },
    { icon: <FaCertificate className="text-yellow-600 dark:text-yellow-400 text-5xl" />, title: "Certification", desc: "Earn globally recognized certificates." },
    { icon: <FaUsers className="text-pink-600 dark:text-pink-400 text-5xl" />, title: "Community Support", desc: "Join learners worldwide and grow together." },
    { icon: <FaGlobe className="text-indigo-600 dark:text-indigo-400 text-5xl" />, title: "Global Access", desc: "Learn anytime, anywhere with multilingual support." },
    { icon: <FaRocket className="text-red-600 dark:text-red-400 text-5xl" />, title: "Career Boost", desc: "Get career-ready skills and land your dream job." },
    { icon: <FaHeadset className="text-teal-600 dark:text-teal-400 text-5xl" />, title: "24/7 Support", desc: "Dedicated mentors and instant query resolution." },
  ];

  return (
    <section className="relative py-20 bg-transparent overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Features Of{" "}
          <motion.span
            animate={{ color: ["#9333EA", "#A855F7", "#9333EA"] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            EduStax
          </motion.span>
        </h2>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Discover the features that make EduStax the best place for learning.
        </motion.p>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-8 relative z-10 mb-20">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
            variants={fadeUp}
            whileHover={cardHover} 
            whileTap={{ scale: 0.98 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Floating Icon */}
            <motion.div
              animate={float} 
              className="mb-6"
            >
              {feature.icon}
            </motion.div>

            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Background Glow */}
      <motion.div
        className="absolute top-40 left-20 w-80 h-80 bg-purple-400 dark:bg-purple-600 rounded-full opacity-15 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400 dark:bg-pink-600 rounded-full opacity-15 blur-3xl"
        animate={{ scale: [1.2, 1, 1.3], opacity: [0.15, 0.25, 0.15] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
    </section>
  );
}

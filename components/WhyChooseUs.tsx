"use client";

import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaCertificate,
  FaUsers,
  FaGlobe,
  FaRocket,
  FaHeadset,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";

const features = [
  {
    title: "Interactive Learning",
    desc: "Learn with 3D simulations, quizzes, and gamified content.",
    icon: FaBookOpen,
    animation: { whileHover: { scale: 1.07 } },
  },
  {
    title: "Expert Mentors",
    desc: "Guidance from top educators & industry leaders worldwide.",
    icon: FaChalkboardTeacher,
    animation: { whileHover: { y: -12, scale: 1.05 } },
  },
  {
    title: "Code Playground",
    desc: "Experiment, build, and run projects with instant feedback.",
    icon: FaLaptopCode,
    animation: { whileHover: { scale: 1.06 } },
  },
  {
    title: "Certified Courses",
    desc: "Earn globally recognized certificates to boost your career.",
    icon: FaCertificate,
    animation: {
      whileHover: {
        scale: 1.1,
        boxShadow:
          "0px 15px 40px rgba(124,58,237,0.3), 0px 10px 20px rgba(0,0,0,0.15)",
      },
    },
  },
  {
    title: "Community Connect",
    desc: "Collaborate with peers, join discussions, and grow together.",
    icon: FaUsers,
    animation: { whileHover: { scale: 1.08 } },
  },
  {
    title: "Global Access",
    desc: "Seamless learning anywhere, anytime across devices.",
    icon: FaGlobe,
    animation: { whileHover: { y: -8, scale: 1.06 } },
  },
  {
    title: "Career Growth",
    desc: "Placement prep, internships, and career support programs.",
    icon: FaChartLine,
    animation: { whileHover: { scale: 1.05 } },
  },
  {
    title: "Innovation Hub",
    desc: "Build projects, hackathons, and showcase creativity.",
    icon: FaLightbulb,
    animation: { whileHover: { scale: 1.07 } },
  },
  {
    title: "24/7 Support",
    desc: "Instant doubt-solving with mentors and AI assistants.",
    icon: FaHeadset,
    animation: { whileHover: { y: -10, scale: 1.04 } },
  },
  {
    title: "Fast Growth",
    desc: "Rocket-speed progress with AI-personalized learning paths.",
    icon: FaRocket,
    animation: { whileHover: { scale: 1.09 } },
  },
];

export default function Features() {
  const float = {
    animate: {
      y: [0, -20, 0], // only floating up/down
      transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
    },
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Floating Icons (no rotate) */}
      <motion.div
        className="absolute top-16 left-16 text-purple-300 text-6xl opacity-70"
        variants={float}
        animate="animate"
        whileHover={{ scale: 1.2 }}
      >
        <FaBookOpen />
      </motion.div>

      <motion.div
        className="absolute top-32 right-16 text-indigo-300 text-5xl opacity-70"
        variants={float}
        animate="animate"
        whileHover={{ scale: 1.2 }}
      >
        <FaLaptopCode />
      </motion.div>

      <motion.div
        className="absolute bottom-28 left-12 text-pink-300 text-6xl opacity-70"
        variants={float}
        animate="animate"
        whileHover={{ scale: 1.2 }}
      >
        <FaChalkboardTeacher />
      </motion.div>

      <motion.div
        className="absolute bottom-24 right-20 text-green-300 text-6xl opacity-70"
        variants={float}
        animate="animate"
        whileHover={{ scale: 1.2 }}
      >
        <FaGlobe />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 text-yellow-300 text-5xl opacity-70"
        variants={float}
        animate="animate"
        whileHover={{ scale: 1.2 }}
      >
        <FaRocket />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14"
        >
          <span className="text-white-800">Why Choose</span>{" "}
          <span className="text-purple-700">Edustax? </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={item.animation.whileHover}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.4,
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
                className="relative group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center text-center"
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-500"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    boxShadow:
                      "0px 0px 20px rgba(124,58,237,0.6), 0px 0px 40px rgba(124,58,237,0.4)",
                  }}
                  transition={{ duration: 0.4 }}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="p-4 bg-purple-100 dark:bg-purple-900 rounded-full mb-4"
                  >
                    <Icon className="w-8 h-8 text-purple-600 dark:text-purple-300" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

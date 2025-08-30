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
  { title: "Interactive Learning", desc: "Learn with 3D simulations, quizzes, and gamified content.", icon: FaBookOpen, hover: { scale: 1.07 } },
  { title: "Expert Mentors", desc: "Guidance from top educators & industry leaders worldwide.", icon: FaChalkboardTeacher, hover: { y: -10, scale: 1.05 } },
  { title: "Code Playground", desc: "Experiment, build, and run projects with instant feedback.", icon: FaLaptopCode, hover: { scale: 1.06 } },
  { title: "Certified Courses", desc: "Earn globally recognized certificates to boost your career.", icon: FaCertificate, hover: { scale: 1.1, boxShadow: "0px 10px 30px rgba(124,58,237,0.3)" } },
  { title: "Community Connect", desc: "Collaborate with peers, join discussions, and grow together.", icon: FaUsers, hover: { scale: 1.08 } },
  { title: "Global Access", desc: "Seamless learning anywhere, anytime across devices.", icon: FaGlobe, hover: { scale: 1.06 } },
  { title: "Career Growth", desc: "Placement prep, internships, and career support programs.", icon: FaChartLine, hover: { scale: 1.05 } },
  { title: "Innovation Hub", desc: "Build projects, hackathons, and showcase creativity.", icon: FaLightbulb, hover: { scale: 1.07 } },
  { title: "24/7 Support", desc: "Instant doubt-solving with mentors and AI assistants.", icon: FaHeadset, hover: { scale: 1.04 } },
  { title: "Fast Growth", desc: "Rocket-speed progress with AI-personalized learning paths.", icon: FaRocket, hover: { scale: 1.09 } },
];

export default function Features() {
  return (
    <section
      className="
        relative py-20 px-6
        bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300
        dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
        overflow-hidden
      "
    >
      {/* Soft Animated Glow Background */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[40rem] h-[40rem] bg-purple-300 dark:bg-purple-700 rounded-full blur-3xl opacity-30"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
          transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-[30rem] h-[30rem] bg-pink-300 dark:bg-pink-700 rounded-full blur-3xl opacity-20"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
          transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-800 dark:text-gray-200"
          >
            Why Choose{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-purple-700 dark:text-purple-400"
          >
            Edustax?
          </motion.span>
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={item.hover}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 14,
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
                className="relative group p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-500"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    boxShadow:
                      "0px 0px 20px rgba(124,58,237,0.5), 0px 0px 40px rgba(124,58,237,0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
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

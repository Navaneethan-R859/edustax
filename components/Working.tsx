"use client";

import { motion } from "framer-motion";
import { 
  FaRegUserCircle, 
  FaCog, 
  FaRocket, 
  FaChartLine, 
  FaUsers, 
  FaStar,
  FaGraduationCap,
  FaBook,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaGlobe
} from "react-icons/fa";

const steps = [
  { icon: <FaRegUserCircle />, title: "Sign Up", desc: "Create your free account in seconds." },
  { icon: <FaCog />, title: "Customize", desc: "Tailor the platform to fit your business needs." },
  { icon: <FaRocket />, title: "Launch", desc: "Go live and start growing your SaaS." },
];

const stats = [
  { title: "Active Users", value: "3,450", icon: <FaUsers />, color: "text-blue-600" },
  { title: "Revenue Growth", value: "+12.3%", icon: <FaChartLine />, color: "text-green-600" },
  { title: "Customer Rating", value: "4.8/5", icon: <FaStar />, color: "text-yellow-500" },
];

export default function Working() {
  const cardHover = {
    hover: {
      scale: 1.07,
      rotateY: 12,
      rotateX: 8,
      transition: { type: "spring", stiffness: 200, damping: 12 },
    },
  };

  const floatIcon = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 20, -20, 0],
      transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50, rotateX: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { delay: i * 0.3, duration: 0.6, type: "spring", stiffness: 120 },
    }),
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-200 via-purple-100 to-purple-300 overflow-hidden">
      {/* Background Floating Icons */}
      <motion.div
        className="absolute top-24 left-16 text-purple-300 text-6xl opacity-70"
        animate={{ y: [0, -25, 0], rotate: [0, 45, -45, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        whileHover={{ scale: 1.3, rotateY: 20 }}
      >
        <FaGraduationCap />
      </motion.div>

      <motion.div
        className="absolute top-32 right-16 text-indigo-300 text-5xl opacity-70"
        animate={{ y: [0, -20, 0], rotate: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        whileHover={{ scale: 1.2, rotateX: 20 }}
      >
        <FaBook />
      </motion.div>

      <motion.div
        className="absolute bottom-28 left-12 text-pink-300 text-6xl opacity-70"
        animate={{ y: [0, -30, 0], rotate: [0, 60, -60, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        whileHover={{ scale: 1.3, rotateY: -20 }}
      >
        <FaLaptopCode />
      </motion.div>

      <motion.div
        className="absolute bottom-24 right-20 text-green-300 text-6xl opacity-70"
        animate={{ y: [0, -18, 0], rotate: [0, 35, -35, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        whileHover={{ scale: 1.2, rotateX: -20 }}
      >
        <FaChalkboardTeacher />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 text-yellow-300 text-5xl opacity-70"
        animate={{ y: [0, -22, 0], rotate: [0, 50, -50, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      >
        <FaGlobe />
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
          How <span className="text-purple-600">It Works</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Follow these steps to get started and monitor your progress in real-time with dynamic insights.
        </p>
      </motion.div>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-3 gap-10 px-6 relative z-10 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-3xl shadow-2xl p-8 text-center cursor-pointer"
            variants={cardHover}
            whileHover="hover"
            custom={i}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-3xl mb-6 shadow-lg"
              variants={floatIcon}
              animate="animate"
            >
              {step.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-20 px-6 max-w-6xl mx-auto relative z-10">
        {stats.map((stat, i) => {
          const hoverEffects = [
            { scale: 1.08, rotateY: 10, rotateX: 5 },
            { scale: 1.06, rotateY: -8, rotateX: 8 },
            { scale: 1.1, rotateY: 15, rotateX: -10 },
          ];
          const floatEffects = [
            { y: [0, -10, 0], rotate: [0, 15, -15, 0] },
            { y: [0, -8, 0], rotate: [0, -10, 10, 0] },
            { y: [0, -12, 0], rotate: [0, 20, -20, 0] },
          ];

          return (
            <motion.div
              key={i}
              className="bg-gray-50 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center cursor-pointer"
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: i * 0.3, type: "spring", stiffness: 120 }}
              whileHover={hoverEffects[i]}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className={`w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-white shadow ${stat.color}`}
                animate={floatEffects[i]}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                {stat.icon}
              </motion.div>
              <h4 className="text-xl font-bold">{stat.value}</h4>
              <p className="text-gray-600">{stat.title}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

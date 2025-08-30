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
} from "react-icons/fa";
import { UserCircle } from "lucide-react";

export default function Features() {
  // Card hover 3D effect
  const cardHover = {
    hover: {
      scale: 1.05,
      rotateY: 10,
      rotateX: 10,
      transition: { type: "spring", stiffness: 200, damping: 12 },
    },
  };

  // Floating icons
  const float = {
    animate: {
      y: [0, -15, 0],
      transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
    },
  };

  // Fade-up animation for staggered entry
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const features = [
    { icon: <FaBookOpen className="text-purple-600 text-5xl" />, title: "Wide Range of Courses", desc: "Access diverse subjects crafted by industry experts." },
    { icon: <FaChalkboardTeacher className="text-green-600 text-5xl" />, title: "Expert Instructors", desc: "Learn from professionals with real-world experience." },
    { icon: <FaLaptopCode className="text-blue-600 text-5xl" />, title: "Practical Learning", desc: "Hands-on projects and coding challenges." },
    { icon: <FaCertificate className="text-yellow-600 text-5xl" />, title: "Certification", desc: "Earn globally recognized certificates." },
    { icon: <FaUsers className="text-pink-600 text-5xl" />, title: "Community Support", desc: "Join learners worldwide and grow together." },
    { icon: <FaGlobe className="text-indigo-600 text-5xl" />, title: "Global Access", desc: "Learn anytime, anywhere with multilingual support." },
    { icon: <FaRocket className="text-red-600 text-5xl" />, title: "Career Boost", desc: "Get career-ready skills and land your dream job." },
    { icon: <FaHeadset className="text-teal-600 text-5xl" />, title: "24/7 Support", desc: "Dedicated mentors and instant query resolution." },
  ];

  const stats = [
    { title: "Total Users", value: "15,320", change: "+10.5% this month", color: "green" },
    { title: "Active Users", value: "3,450", change: "-2.1% last week", color: "red" },
    { title: "Total Courses", value: "187", change: "+5.0% this quarter", color: "green" },
    { title: "Total Earnings", value: "$125,800", change: "+12.3% this month", color: "green" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-200 via-purple-100 to-purple-300 overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
          Features Of <span className="text-purple-600">EduStax</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Discover the features that make EduStax the best place for learning.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-8 relative z-10 mb-20">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center cursor-pointer"
            variants={cardHover}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            custom={idx}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div variants={float} animate="animate" className="mb-6">
              {feature.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* EduStax Dashboard Showcase */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 relative z-10">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.02, rotateY: 5 }}
          className="bg-white rounded-2xl shadow-xl p-6 col-span-1 flex flex-col space-y-6"
        >
          <div className="font-bold text-xl">📚 EduStax</div>
          <nav className="flex flex-col space-y-4 text-gray-700">
            <a className="font-semibold text-purple-600">Dashboard</a>
            <a>Learning</a>
            <a>My Organization</a>
            <a>Total Earnings</a>
            <a>Settings</a>
            <a>Profile</a>
          </nav>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-auto bg-gray-100 py-2 rounded-lg"
          >
            Logout
          </motion.button>
        </motion.div>

        {/* Main Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateX: 5 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.02, rotateY: 5, rotateX: 2 }}
          className="bg-white rounded-2xl shadow-xl p-8 col-span-3"
        >
          {/* Navbar */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.2 }}
            className="flex justify-between items-center mb-6"
          >
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow"
              >
                PLAN STATUS : PREMIUM
              </motion.button>
              <UserCircle className="w-8 h-8 text-gray-600" />
            </div>
          </motion.div>

          {/* Welcome */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold">
              Welcome back, <span className="text-purple-600">John!</span>
            </h3>
            <p className="text-gray-500 mb-6">
              Here’s a quick overview of your dashboard.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 perspective-1000">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, type: "spring", stiffness: 120, damping: 12 }}
                whileHover={{ scale: 1.12, rotateX: -8, rotateY: 8, boxShadow: "0px 15px 40px rgba(0,0,0,0.2)" }}
                className="p-4 bg-gray-50 rounded-lg shadow-sm cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <h4 className="text-sm text-gray-500">{stat.title}</h4>
                <p className="text-2xl font-bold">{stat.value}</p>
                <span className={`text-${stat.color}-600 text-sm`}>{stat.change}</span>
              </motion.div>
            ))}
          </div>

          {/* Calendar + Webinar */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.05, rotateZ: -2, boxShadow: "0px 10px 30px rgba(128,0,128,0.3)" }}
              className="bg-gray-50 rounded-xl p-6 shadow-sm cursor-pointer"
            >
              <h4 className="text-lg font-semibold mb-4">Upcoming Events</h4>
              <div className="text-sm text-gray-500">📅 August 2025 (Calendar UI)</div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg shadow"
              >
                Schedule
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", delay: 0.1 }}
              whileHover={{ scale: 1.05, rotateZ: 2, boxShadow: "0px 10px 30px rgba(128,0,128,0.3)" }}
              className="bg-gray-50 rounded-xl p-6 shadow-sm cursor-pointer"
            >
              <h4 className="text-lg font-semibold mb-4">Data Analytics Webinar</h4>
              <p className="text-sm text-gray-600">
                Tue, 12 Aug 2025 • 12:00–1:00 EST
              </p>
              <p className="text-sm text-gray-500 mt-2">
                🎤 Hosted by Prof. Ramesh Kumar & Dr. Meena Joseph
              </p>
              <p className="text-sm text-gray-500">👥 150+ registered</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Glow */}
      <motion.div
        className="absolute top-40 left-20 w-80 h-80 bg-purple-400 rounded-full opacity-20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0], opacity: [0.2, 0.3, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400 rounded-full opacity-20 blur-3xl"
        animate={{ scale: [1.2, 1, 1.3], rotate: [0, -45, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
    </section>
  );
}

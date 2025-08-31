"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";
import dynamic from "next/dynamic";
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

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const Calendar = dynamic(() => import("react-calendar"), { ssr: false });
import "react-calendar/dist/Calendar.css";

import type { ChartData } from "chart.js";

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

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

  const chartData: ChartData<"bar" | "line"> = {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [
      { label: "New Users", data: [300,450,400,500,600,480,520,400,450,600,650,700], backgroundColor: "#9333EA" },
      { label: "Growth Rate %", data: [30,45,40,50,60,48,52,40,45,60,65,70], type: "line", borderColor: "#A855F7", fill: false },
    ],
  };

  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">

      {/* Features */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Features of <span className="text-purple-600">EduStax?</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Discover the features that make EduStax the best place for learning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center cursor-pointer"
            whileHover={{ scale: 1.05, rotateY: 6, rotateX: 6 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="mb-6"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Dashboard */}
      <div className="max-w-7xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl mt-16">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <span className="px-4 py-1 bg-purple-200 dark:bg-purple-600 text-purple-800 dark:text-white rounded-full text-sm">PLAN STATUS : PREMIUM</span>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Welcome back, <span className="text-purple-600">John</span>! Here is a quick overview of your dashboard.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {[ 
            { title: "Total Users", value: "15,320", change: "+10.5% this month", color: "text-green-500" },
            { title: "Active Users", value: "3,450", change: "-2.1% last week", color: "text-red-500" },
            { title: "Total Courses", value: "187", change: "+5.0% this quarter", color: "text-green-500" },
            { title: "Total Earnings", value: "$125,800", change: "+12.3% this month", color: "text-green-500" },
          ].map((card, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-md text-center">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">{card.title}</h3>
              <p className="text-2xl font-bold">{card.value}</p>
              <span className={`${card.color} text-sm`}>{card.change}</span>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md mb-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Monthly User Growth</h3>
          <Chart type="bar" data={chartData} />
        </div>

        {/* Calendar & Next Event */}
        {mounted && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Upcoming Events & Deadlines</h3>
              <Calendar />
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Next Event</h3>
              <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Data Analytics Webinar</span></p>
              <p className="text-gray-600 dark:text-gray-400">Date: Tue, 12 Aug 2025 | 10:00-12:00 IST</p>
              <p className="text-gray-600 dark:text-gray-400">Attendees: 150+ registered</p>
              <p className="text-gray-600 dark:text-gray-400">Mode: Online (Zoom)</p>
              <p className="text-gray-600 dark:text-gray-400">Organized by: Dept. of Computer Science, ABC Univ.</p>
            </div>
          </div>
        )}

      </div>

      {/* Background Glows */}
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

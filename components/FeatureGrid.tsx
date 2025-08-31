"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion, Transition } from "framer-motion";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
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
import { UserCircle } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Calendar = dynamic(() => import("react-calendar"), { ssr: false });
import "react-calendar/dist/Calendar.css";

import type { ChartData, ChartOptions } from "chart.js";

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

  const stats = [
    {
      title: "Total Users",
      value: "15,320",
      change: "+10.5% this month",
      color: "green",
    },
    {
      title: "Active Users",
      value: "3,450",
      change: "-2.1% last week",
      color: "red",
    },
    {
      title: "Total Courses",
      value: "187",
      change: "+5.0% this quarter",
      color: "green",
    },
    {
      title: "Total Earnings",
      value: "$125,800",
      change: "+12.3% this month",
      color: "green",
    },
  ];

  const chartData: ChartData<"bar" | "line"> = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "New Users",
        data: [300, 450, 400, 500, 600, 480, 520, 400, 450, 600, 650, 700],
        backgroundColor: "#9333EA",
      },
      {
        label: "Growth Rate %",
        data: [30, 45, 40, 50, 60, 48, 52, 40, 45, 60, 65, 70],
        type: "line",
        borderColor: "#A855F7",
        fill: false,
      },
    ],
  };

  const chartOptions: ChartOptions<"bar" | "line"> = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color:
            typeof window !== "undefined" &&
            document.documentElement.classList.contains("dark")
              ? "#fff"
              : "#111",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color:
            typeof window !== "undefined" &&
            document.documentElement.classList.contains("dark")
              ? "#e5e7eb"
              : "#111",
        },
        grid: {
          color:
            typeof window !== "undefined" &&
            document.documentElement.classList.contains("dark")
              ? "#374151"
              : "#e5e7eb",
        },
      },
      y: {
        ticks: {
          color:
            typeof window !== "undefined" &&
            document.documentElement.classList.contains("dark")
              ? "#e5e7eb"
              : "#111",
        },
        grid: {
          color:
            typeof window !== "undefined" &&
            document.documentElement.classList.contains("dark")
              ? "#374151"
              : "#e5e7eb",
        },
      },
    },
  };

  const colorMap: Record<string, string> = {
    green: "text-green-600 dark:text-green-400",
    red: "text-red-600 dark:text-red-400",
    yellow: "text-yellow-600 dark:text-yellow-400",
    blue: "text-blue-600 dark:text-blue-400",
    pink: "text-pink-600 dark:text-pink-400",
    indigo: "text-indigo-600 dark:text-indigo-400",
    teal: "text-teal-600 dark:text-teal-400",
    purple: "text-purple-600 dark:text-purple-400",
  };

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={fadeUpInit}
            animate={fadeUpTarget}
            transition={fadeUpTiming(idx)}
            whileHover={{ scale: 1.05, rotateY: 10, rotateX: 10 }}
            whileTap={{ scale: 0.98 }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center cursor-pointer"
          >
            <motion.div
              initial={floatInit}
              animate={floatKeyframes}
              transition={floatTiming}
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

      {/* Dashboard */}
      <div className="max-w-7xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl mt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateX: 5 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.02, rotateY: 5, rotateX: 2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 col-span-3"
          style={{ perspective: 1000 }}
        >
          {/* ...rest of the dashboard content */}
        </motion.div>
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

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
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white shadow-lg"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="h-16 w-16 rounded-full mx-auto mb-4"
              />
              <p className="italic text-gray-600 mb-4">“{t.quote}”</p>
              <h4 className="font-semibold">{t.name}</h4>
              <span className="text-gray-500 text-sm">{t.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

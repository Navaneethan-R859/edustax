"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Shield } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
    title: "Smart Learning",
    description: "AI-powered personalized courses tailored to every student.",
  },
  {
    icon: <Users className="h-8 w-8 text-indigo-600" />,
    title: "Collaboration",
    description: "Built-in tools for teachers, students, and parents to engage.",
  },
  {
    icon: <Shield className="h-8 w-8 text-indigo-600" />,
    title: "Security",
    description: "Enterprise-grade security with GDPR compliance.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white shadow-lg"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

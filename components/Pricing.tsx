"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$9/mo",
    features: ["Basic features", "Up to 10 users", "Email support"],
  },
  {
    name: "Pro",
    price: "$29/mo",
    features: ["All Starter features", "Up to 100 users", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited users", "Dedicated manager", "24/7 support"],
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-white shadow-lg border"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <button className="px-6 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

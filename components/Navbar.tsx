"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700 relative"
    >
      {/* Logo */}
      <h1 className="text-xl font-bold">EDUSTAX</h1>

      {/* Right Side */}
      <div className="flex items-center gap-4 relative">
        {/* Buttons */}
        <Button variant="outline">Login</Button>
        <Button>Get Started</Button>

        {/* Theme Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        )}

        {/* Static Icon Menu */}
        <div className="relative">
          <Menu
            className="h-6 w-6 cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-2">
              <p className="text-sm font-semibold mb-2">Navigation</p>
              <a href="#features" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                Features
              </a>
              <a href="#pricing" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                Pricing
              </a>
              <a href="#testimonials" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                Testimonials
              </a>
              <a href="#faq" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                FAQ
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}

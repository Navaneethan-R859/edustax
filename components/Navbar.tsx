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

  const handleNavClick = (id: string) => {
    setShowMenu(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = ["Hero", "Features", "Working", "WhyChooseUs", "Pricing", "Testimonials", "FAQ"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      aria-label="Main navigation"
      className="sticky top-0 z-50 flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 
                 border-b border-gray-200 dark:border-gray-700 
                 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
    >
      {/* Logo */}
      <h1
        className="text-xl font-bold cursor-pointer text-gray-900 dark:text-white"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        EDUSTAX
      </h1>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => handleNavClick(section)}
            className="hover:text-purple-600 dark:hover:text-purple-400 font-medium text-gray-700 dark:text-gray-200 transition-colors"
          >
            {section}
          </button>
        ))}

        <Button>Get Started</Button>

        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden relative">
        <Menu
          className="h-6 w-6 cursor-pointer text-gray-900 dark:text-gray-200"
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div className="absolute right-0 mt-2 w-screen max-w-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-4 z-50">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium"
              >
                {section}
              </button>
            ))}

            <div className="border-t border-gray-200 dark:border-gray-700 my-3" />

            <Button className="w-full mb-3">Get Started</Button>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full flex justify-center p-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            )}
          </div>
        )}
      </div>
    </motion.nav>
  );
}

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

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700 
      bg-white dark:bg-gray-900 backdrop-blur-sm"
    >
      {/* Logo always visible */}
      <h1
        className="text-xl font-bold cursor-pointer text-gray-900 dark:text-white"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        EDUSTAX
      </h1>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {["features", "pricing", "testimonials", "faq"].map((section) => (
          <button
            key={section}
            onClick={() => handleNavClick(section)}
            className="hover:text-purple-600 dark:hover:text-purple-400 font-medium text-gray-700 dark:text-gray-200"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}

        <Button>Get Started</Button>

        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        )}
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden relative">
        <Menu
          className="h-6 w-6 cursor-pointer text-gray-900 dark:text-gray-200"
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-3 z-50">
            {["features", "pricing", "testimonials", "faq"].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="block w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded mb-1 text-gray-700 dark:text-gray-200"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}

            <div className="border-t border-gray-200 dark:border-gray-700 my-2" />

            <Button className="w-full mb-2">Get Started</Button>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full flex justify-center p-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </motion.nav>
  );
}

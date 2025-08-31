"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import Working from "@/components/Working";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Everything inside a single container with no background separations */}
      <div className="flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <FeatureGrid />

        {/* How it Works Section */}
        <Working />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Pricing Section */}
        <Pricing />

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

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
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navbar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <section id="Features">
          <FeatureGrid />
        </section>

        {/* How it Works Section */}
        <section id="Working">
          <Working />
        </section>

        {/* Why Choose Us Section */}
        <section id="WhyChooseUs">
          <WhyChooseUs />
        </section>

        {/* Pricing Section */}
        <section id="Pricing">
          <Pricing />
        </section>

        {/* Testimonials Section */}
        <section id="Testimonials">
          <Testimonials />
        </section>

        {/* FAQ Section */}
        <section id="FAQ">
          <FAQ />
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

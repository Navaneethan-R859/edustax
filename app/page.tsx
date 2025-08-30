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
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="scroll-mt-24">
        <Hero />
      </section>

      {/* Features Section */}
      <section id="features" className="scroll-mt-24">
        <FeatureGrid />
      </section>

      {/* How it Works Section */}
      <section id="working" className="scroll-mt-24">
        <Working />
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="scroll-mt-24">
        <WhyChooseUs />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="scroll-mt-24">
        <Pricing />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="scroll-mt-24">
        <Testimonials />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-24">
        <FAQ />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

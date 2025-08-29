import Image from "next/image";

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
      <Hero />
      <FeatureGrid />
      <Working />
      <WhyChooseUs />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}

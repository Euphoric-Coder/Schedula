'use client'

import React from "react";
import Hero from "@/components/Hero";
import KeyFeatures from "@/components/KeyFeatures";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import Title from "@/components/Title";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-indigo-50 to-white">
      <Title />
      <Hero />
      <KeyFeatures />
      <HowItWorks />
      <CTASection />
    </div>
  );
};

export default Page;

import React from "react";
import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import ProblemSection from "@/components/organisms/ProblemSection";
import SolutionSection from "@/components/organisms/SolutionSection";
import AuthorSection from "@/components/organisms/AuthorSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import PricingSection from "@/components/organisms/PricingSection";
import BootcampSection from "@/components/organisms/BootcampSection";
import GuaranteeSection from "@/components/organisms/GuaranteeSection";
import FinalCTASection from "@/components/organisms/FinalCTASection";
import Footer from "@/components/organisms/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem Section */}
      <div id="problem">
        <ProblemSection />
      </div>
      
      {/* Solution Section */}
      <div id="solution">
        <SolutionSection />
      </div>
      
      {/* Author Section */}
      <div id="author">
        <AuthorSection />
      </div>
      
      {/* Testimonials Section */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Bootcamp Section */}
      <BootcampSection />
      
      {/* Guarantee Section */}
      <GuaranteeSection />
      
      {/* Final CTA Section */}
      <FinalCTASection />
      
      <Footer />
    </div>
  );
};

export default LandingPage;
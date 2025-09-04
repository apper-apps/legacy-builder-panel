import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import ProgressIndicator from "@/components/molecules/ProgressIndicator";
import { toast } from "react-toastify";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleGetGuide = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
    
    toast.info("Scroll down to secure your copy!", {
      position: "top-right",
      autoClose: 2000,
    });
  };
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <>
      <ProgressIndicator />
      
      <motion.header 
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                isScrolled 
                  ? "bg-gradient-to-br from-navy-500 to-primary-600" 
                  : "bg-gradient-to-br from-gold-400 to-gold-500"
              }`}>
                <ApperIcon name="BookOpen" className={`w-5 h-5 ${
                  isScrolled ? "text-white" : "text-navy-900"
                }`} />
              </div>
              <div>
                <h1 className={`font-display font-bold text-lg ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}>
                  Legacy Builder
                </h1>
                <p className={`text-xs ${
                  isScrolled ? "text-gray-600" : "text-navy-200"
                }`}>
                  Family Business Harmony
                </p>
              </div>
            </motion.div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { label: "Problem", id: "problem" },
                { label: "Solution", id: "solution" },
                { label: "Author", id: "author" },
                { label: "Testimonials", id: "testimonials" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors duration-200 hover:text-gold-600 ${
                    isScrolled ? "text-gray-700" : "text-navy-200 hover:text-gold-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <Button
                size="md"
                onClick={handleGetGuide}
                className={`${
                  isScrolled 
                    ? "bg-gradient-to-r from-navy-500 to-primary-600 text-white hover:from-navy-600 hover:to-primary-700" 
                    : ""
                }`}
              >
                <ApperIcon name="Download" className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Get Guide</span>
                <span className="sm:hidden">$9.97</span>
              </Button>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
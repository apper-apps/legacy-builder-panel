import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(currentScrollY / scrollHeight, 1);
      setScrollProgress(progress);
    };
    
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-navy-100">
      <motion.div 
        className="h-full bg-gradient-to-r from-gold-500 to-gold-600"
        style={{ scaleX: scrollProgress }}
        initial={{ scaleX: 0 }}
        transition={{ ease: "easeOut" }}
        transformOrigin="left"
      />
    </div>
  );
};

export default ProgressIndicator;
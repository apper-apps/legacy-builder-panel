import React from "react";
import { motion } from "framer-motion";

const BookMockup = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50, rotateY: -15 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative transform perspective-1000 hover:scale-105 transition-transform duration-500"
      >
        {/* Book Shadow */}
        <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/20 rounded-full blur-xl transform scale-90"></div>
        
        {/* Book Cover */}
        <div className="relative w-80 h-96 mx-auto transform rotate-y-5 shadow-2xl rounded-r-lg overflow-hidden bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800">
          {/* Book Spine */}
          <div className="absolute left-0 top-0 w-4 h-full bg-gradient-to-b from-navy-800 to-navy-900 shadow-inner"></div>
          
          {/* Cover Content */}
          <div className="p-8 h-full flex flex-col justify-between text-white relative z-10">
            {/* Top Section */}
            <div>
              <div className="w-16 h-16 bg-gold-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-navy-900">FB</span>
              </div>
              
              <h2 className="text-2xl font-display font-bold leading-tight mb-4">
                Family Business
                <br />
                <span className="text-gold-400">Harmony</span>
                <br />
                Quick-Start Guide
              </h2>
            </div>
            
            {/* Bottom Section */}
            <div>
              <div className="border-t border-gold-400/30 pt-4">
                <p className="text-gold-300 font-medium">Coach IanB</p>
                <p className="text-sm text-navy-300">CILC Family Business Advisory</p>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-400/10 rounded-full translate-y-12 -translate-x-12"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default BookMockup;
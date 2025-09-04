import React from "react";
import { motion } from "framer-motion";
import PricingBox from "@/components/molecules/PricingBox";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-white via-gray-50 to-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Transform Your Family Business 
            <span className="text-gold-600">Today</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get instant access to the complete Family Business Harmony Guide and start building the legacy you deserve
          </p>
        </motion.div>
        
        {/* Pricing Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <PricingBox />
        </motion.div>
        
        {/* Urgency & Scarcity */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-6 py-3 rounded-full border border-red-200">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="font-semibold">Limited Time: Special Launch Pricing</span>
          </div>
          <p className="text-gray-600 mt-4">
            Price returns to regular $29.97 soon. Secure your copy now!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
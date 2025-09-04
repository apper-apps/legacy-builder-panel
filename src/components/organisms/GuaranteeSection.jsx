import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-navy-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card variant="elevated" className="text-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-gradient-to-br from-navy-200 to-navy-300 rounded-full opacity-20"></div>
            
            <div className="relative z-10">
              {/* Shield Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <ApperIcon name="Shield" className="w-10 h-10 text-white" />
              </div>
              
              {/* Header */}
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                100% Risk-Free 
                <span className="text-green-600"> Guarantee</span>
              </h2>
              
              {/* Main Guarantee Text */}
              <div className="max-w-2xl mx-auto mb-8">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Your <strong className="text-navy-700">$9.97 investment is 100% risk-free.</strong> If you don't find the guide practical and helpful for your family business, just let us know within 7 days and we'll refund every penny.
                </p>
                
                <p className="text-lg text-gray-600 font-medium">
                  No questions asked. No hassles. No hoops to jump through.
                </p>
              </div>
              
              {/* Features */}
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    icon: "Clock",
                    title: "7-Day Window",
                    description: "Full week to try the guide risk-free"
                  },
                  {
                    icon: "MessageCircle",
                    title: "No Questions Asked",
                    description: "Simple refund process, no explanations needed"
                  },
                  {
                    icon: "CheckCircle",
                    title: "Keep Everything",
                    description: "Even if refunded, the knowledge is yours"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ApperIcon name={feature.icon} className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              {/* Why We Offer This */}
              <motion.div 
                className="bg-gradient-to-r from-navy-50 to-primary-50 rounded-xl p-6 border border-navy-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-lg font-semibold text-navy-900 mb-3">
                  Why can we offer this guarantee?
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Because we've seen these strategies work for hundreds of family businesses over 20+ years. We're confident that when you apply what's in this guide, you'll see immediate improvements in your family business relationships.
                </p>
              </motion.div>
              
              {/* Contact Info */}
              <div className="mt-6 text-sm text-gray-500">
                <p>Questions about our guarantee? Contact us at:</p>
                <p className="font-semibold text-navy-600 mt-1">support@legacybuilder.com</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
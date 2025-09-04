import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import { toast } from "react-toastify";

const FinalCTASection = () => {
  const handleFinalCTA = () => {
    toast.success("Redirecting to secure checkout...", {
      position: "top-right",
      autoClose: 2000,
    });
    
    // In a real app, this would redirect to payment processor
    setTimeout(() => {
      window.open("https://checkout.stripe.com", "_blank");
    }, 1000);
  };
  
  return (
    <section className="py-20 bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Urgency Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-full mb-6">
            <ApperIcon name="Clock" className="w-4 h-4" />
            <span className="font-semibold text-sm">Limited Time Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Don't Let Conflict 
            <span className="text-gold-300"> Stall Your Family's Future</span>
          </h2>
          
          <p className="text-xl text-navy-200 leading-relaxed max-w-3xl mx-auto">
            Every day you wait is another day of potential conflict, missed opportunities, and uncertainty for your family's business legacy.
          </p>
        </motion.div>
        
        {/* Final Value Proposition */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <h3 className="text-2xl font-display font-bold mb-6 text-gold-300">
              In the next 30 minutes, you could have:
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                {
                  icon: "BookOpen",
                  text: "Complete 42-page guide downloaded to your device"
                },
                {
                  icon: "CheckSquare",
                  text: "Family business assessment completed"
                },
                {
                  icon: "MessageSquare",
                  text: "First difficult conversation planned out"
                },
                {
                  icon: "Target",
                  text: "Clear roadmap for your family's harmony"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                >
                  <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ApperIcon name={item.icon} className="w-3 h-3 text-navy-900" />
                  </div>
                  <span className="text-navy-100">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Price Reminder */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <p className="text-lg text-navy-200 mb-2">Regular Price: <span className="line-through">$29.97</span></p>
            <p className="text-4xl font-bold text-gold-300 mb-2">Just $9.97 Today</p>
            <p className="text-navy-200">Less than the cost of lunch for your family's future</p>
          </div>
        </motion.div>
        
        {/* Final CTA Button */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="xl"
            onClick={handleFinalCTA}
            className="text-2xl font-bold px-12 py-6 shadow-2xl transform hover:scale-105"
          >
            <ApperIcon name="Download" className="w-7 h-7 mr-4" />
            Get Your Copy Now for $9.97
          </Button>
        </motion.div>
        
        {/* Security & Guarantee Reminders */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-navy-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center space-x-2">
            <ApperIcon name="Shield" className="w-4 h-4 text-green-400" />
            <span>Secure Checkout</span>
          </div>
          <div className="flex items-center space-x-2">
            <ApperIcon name="Download" className="w-4 h-4 text-green-400" />
            <span>Instant Download</span>
          </div>
          <div className="flex items-center space-x-2">
            <ApperIcon name="RefreshCw" className="w-4 h-4 text-green-400" />
            <span>7-Day Guarantee</span>
          </div>
        </motion.div>
        
        {/* Final Motivational Text */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <p className="text-lg text-navy-200 italic">
            "The best time to plant a tree was 20 years ago. The second best time is now."
          </p>
          <p className="text-gold-300 font-semibold mt-4">
            Start building your family business harmony today.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
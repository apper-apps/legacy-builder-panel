import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import { toast } from "react-toastify";

const BootcampSection = () => {
  const handleBootcampInterest = () => {
    toast.success("We'll notify you about upcoming bootcamp dates after your purchase!", {
      position: "top-right",
      autoClose: 3000,
    });
  };
  
  const bootcampFeatures = [
    {
      icon: "Users",
      title: "Live Family Sessions",
      description: "Work directly with your family members in guided sessions"
    },
    {
      icon: "FileText",
      title: "Complete Charter Creation", 
      description: "Leave with a finished Family Business Charter document"
    },
    {
      icon: "MessageCircle",
      title: "Expert Facilitation",
      description: "Coach IanB guides difficult conversations with care"
    },
    {
      icon: "Target",
      title: "Practical Action Plans",
      description: "Clear next steps for implementing your new framework"
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-br from-navy-600 via-navy-700 to-primary-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            This Guide Is Just the 
            <span className="text-gold-300"> Beginning</span>
          </h2>
          <p className="text-xl text-navy-200 max-w-4xl mx-auto leading-relaxed">
            Once you've started the journey to harmony, the natural next step is building your full Family Business Charter with your family. That's exactly what we do in our Family Business Bootcamp.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-3xl font-display font-bold text-gold-300 mb-4">
                Family Business Bootcamp
              </h3>
              <p className="text-lg text-navy-200 leading-relaxed mb-8">
                An intensive 2-day workshop where families leave with clarity, alignment, and a practical implementation plan. Work directly with Coach IanB and other family business owners to create lasting change.
              </p>
            </div>
            
            {/* Features */}
            <div className="space-y-4">
              {bootcampFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ApperIcon name={feature.icon} className="w-5 h-5 text-navy-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-navy-200 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Button
              variant="secondary"
              size="lg"
              onClick={handleBootcampInterest}
              className="bg-white text-navy-700 hover:bg-navy-50"
            >
              <ApperIcon name="Calendar" className="w-5 h-5 mr-2" />
              Learn About the Bootcamp
            </Button>
          </motion.div>
          
          {/* Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card variant="glass" className="p-8 bg-white/10 backdrop-blur-lg border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name="Calendar" className="w-8 h-8 text-navy-900" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Next Bootcamp
                  </h4>
                  <p className="text-navy-200">
                    Details announced to guide purchasers first
                  </p>
                </div>
                
                <div className="border-t border-white/20 pt-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gold-300">2</div>
                      <div className="text-sm text-navy-200">Intensive Days</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gold-300">12</div>
                      <div className="text-sm text-navy-200">Families Max</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-gold-500/20 to-gold-400/20 rounded-lg p-4 border border-gold-400/30">
                  <p className="text-sm text-center text-gold-200">
                    <strong>Early Bird Priority:</strong> Guide purchasers get first access to bootcamp registration and special pricing
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
        
        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-navy-200 text-lg mb-4">
            Start with the guide today, then take the next step with your family
          </p>
          <div className="flex items-center justify-center space-x-2 text-gold-300">
            <ApperIcon name="ArrowDown" className="w-5 h-5" />
            <span className="font-semibold">Get your guide below to secure bootcamp priority</span>
            <ApperIcon name="ArrowDown" className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BootcampSection;
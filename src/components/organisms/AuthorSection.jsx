import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";

const AuthorSection = () => {
  const credentials = [
    { icon: "Award", text: "20+ Years Family Business Advisory" },
    { icon: "Users", text: "100+ Successful Family Business Transformations" },
    { icon: "Globe", text: "Barbados, Grenada, Jamaica & Beyond" },
    { icon: "BookOpen", text: "Certified Family Business Consultant" }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-navy-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Meet Your Guide to 
            <span className="text-navy-600"> Family Business Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted advisor to family businesses across the Caribbean and beyond
          </p>
        </motion.div>
        
        <Card variant="elevated" className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Author Photo */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative mx-auto w-72 h-72 lg:w-80 lg:h-80">
                {/* Photo Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  {/* Placeholder for author photo - in real app would be actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-navy-600 to-primary-700 flex items-center justify-center">
                    <div className="text-center text-white">
                      <ApperIcon name="User" className="w-24 h-24 mx-auto mb-4" />
                      <p className="font-semibold">Coach IanB</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center shadow-lg">
                  <ApperIcon name="Star" className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-navy-500 rounded-full flex items-center justify-center shadow-lg">
                  <ApperIcon name="Award" className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
            
            {/* Author Bio */}
            <motion.div 
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-2">
                  Coach IanB
                </h3>
                <Badge variant="gold" size="lg" className="mb-4">
                  Founder, CILC Family Business Advisory
                </Badge>
              </div>
              
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p className="text-xl leading-relaxed">
                  <strong className="text-navy-700">Coach IanB has guided family businesses across the Caribbean and beyond for over 20 years.</strong> As founder of CILC Family Business Advisory, he specializes in helping families align around purpose, build robust governance structures, and secure multi-generational legacies.
                </p>
                
                <p className="text-lg leading-relaxed">
                  His proven methodologies have transformed countless family enterprises, turning conflict into collaboration and uncertainty into strategic clarity. Ian's unique approach combines Caribbean business culture with global best practices, creating practical solutions that work in real-world family business environments.
                </p>
              </div>
              
              {/* Credentials */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gradient-to-r from-navy-50 to-primary-50 rounded-lg border border-navy-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-navy-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ApperIcon name={credential.icon} className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {credential.text}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Trust Badge */}
              <motion.div 
                className="bg-gradient-to-r from-gold-50 to-gold-100 p-6 rounded-xl border-l-4 border-l-gold-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <ApperIcon name="Shield" className="w-6 h-6 text-gold-600" />
                  <h4 className="text-lg font-semibold text-gold-800">
                    Trusted Advisor
                  </h4>
                </div>
                <p className="text-gold-700 font-medium">
                  "Trusted by family businesses in Barbados, Grenada, Jamaica & beyond to navigate complex family dynamics and build lasting legacies."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AuthorSection;
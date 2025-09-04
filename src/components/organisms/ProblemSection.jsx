import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const ProblemSection = () => {
  const problems = [
    {
      icon: "AlertTriangle",
      title: "Lack of clarity on roles and expectations",
      description: "Family members step on each other's toes, creating tension and inefficiency"
    },
    {
      icon: "Users",
      title: "Conflict between family and business priorities",
      description: "Personal relationships suffer when business decisions get emotional"
    },
    {
      icon: "Clock",
      title: "Succession plans left unspoken",
      description: "The next generation is unprepared, creating uncertainty and conflict"
    },
    {
      icon: "TrendingDown",
      title: "Small issues that grow into major divisions",
      description: "Minor disagreements become family feuds that destroy businesses"
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            Why Most Family Businesses 
            <span className="text-red-600"> Struggle</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These common challenges can tear apart even the strongest families and most successful businesses
          </p>
        </motion.div>
        
        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <ApperIcon name={problem.icon} className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Solution Preview */}
        <motion.div 
          className="text-center bg-gradient-to-r from-navy-50 to-primary-50 rounded-2xl p-8 border-2 border-navy-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ApperIcon name="Lightbulb" className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
              The Good News?
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong className="text-navy-700">Harmony isn't luck—it's built through intentional steps.</strong> This guide shows you exactly how successful family businesses create clarity, reduce tension, and build lasting legacies.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-gold-700 font-semibold">
              <ApperIcon name="ArrowDown" className="w-5 h-5" />
              <span>Discover the solution below</span>
              <ApperIcon name="ArrowDown" className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
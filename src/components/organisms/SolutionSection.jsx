import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FeatureCard from "@/components/molecules/FeatureCard";
import featureService from "@/services/api/featureService";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";

const SolutionSection = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  const loadFeatures = async () => {
    try {
      setError("");
      setLoading(true);
      const data = await featureService.getAll();
      setFeatures(data);
    } catch (err) {
      setError(err.message || "Failed to load features");
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    loadFeatures();
  }, []);
  
  if (loading) {
    return (
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded-lg w-1/2 mx-auto mb-8"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-gray-100 p-6 rounded-xl h-48"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  if (error) {
    return <Error message={error} onRetry={loadFeatures} />;
  }
  
  if (features.length === 0) {
    return <Empty title="No Features Available" description="Features are being updated." />;
  }
  
  return (
    <section className="py-20 bg-white">
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
            Your Quick-Start Roadmap to 
            <br />
            <span className="bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent">
              Family Business Harmony
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to transform conflict into collaboration and build a lasting family legacy
          </p>
        </motion.div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.Id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </div>
        
        {/* Preview Section */}
        <motion.div 
          className="bg-gradient-to-r from-navy-50 via-primary-50 to-gold-50 rounded-2xl p-8 lg:p-12 border border-navy-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Preview Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                See What's Inside the Guide
              </h3>
              
              <div className="space-y-4 mb-8">
                {[
                  "Complete Family Business Assessment Tool",
                  "Step-by-Step Charter Creation Worksheet",
                  "Conflict Resolution Framework Templates", 
                  "Succession Planning Conversation Starters",
                  "Role & Responsibility Clarity Matrix",
                  "Legacy Vision Building Exercises"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  >
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                <strong className="text-navy-700">42 pages</strong> of practical, proven strategies that you can implement immediately—no fluff, just results.
              </p>
            </div>
            
            {/* Visual Preview */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-3 mb-6">
                  <div className="h-4 bg-navy-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="h-20 bg-gold-100 rounded flex items-center justify-center">
                    <span className="text-gold-700 font-semibold text-sm">Chart 1</span>
                  </div>
                  <div className="h-20 bg-navy-100 rounded flex items-center justify-center">
                    <span className="text-navy-700 font-semibold text-sm">Chart 2</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/5"></div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform -rotate-3">
                <div className="w-20 h-24 bg-gradient-to-b from-gray-100 to-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
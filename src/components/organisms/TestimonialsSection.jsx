import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/molecules/TestimonialCard";
import testimonialService from "@/services/api/testimonialService";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  const loadTestimonials = async () => {
    try {
      setError("");
      setLoading(true);
      const data = await testimonialService.getAll();
      setTestimonials(data);
    } catch (err) {
      setError(err.message || "Failed to load testimonials");
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    loadTestimonials();
  }, []);
  
  if (loading) {
    return (
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gray-200 rounded-lg w-1/2 mx-auto"></div>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-100 p-6 rounded-xl h-64"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  if (error) {
    return <Error message={error} onRetry={loadTestimonials} />;
  }
  
  if (testimonials.length === 0) {
    return <Empty title="No Testimonials Available" description="Client testimonials are being updated." />;
  }
  
  return (
    <section className="py-20 bg-gradient-to-br from-navy-50 via-primary-50 to-gold-50">
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
            Real Results from 
            <span className="bg-gradient-to-r from-navy-600 to-primary-600 bg-clip-text text-transparent"> Real Families</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how other family business owners transformed conflict into harmony and built lasting legacies
          </p>
        </motion.div>
        
        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <motion.div
              key={testimonial.Id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
        
        {/* Featured Testimonial */}
        {testimonials.length > 2 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <TestimonialCard testimonial={testimonials[2]} />
          </motion.div>
        )}
        
        {/* Success Stats */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-navy-600 to-primary-700 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-display font-bold mb-8">
            Join the Growing Community of Successful Family Businesses
          </h3>
          
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gold-300">96%</div>
              <div className="text-navy-200">Report Reduced Conflict</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gold-300">89%</div>
              <div className="text-navy-200">Improved Communication</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gold-300">100%</div>
              <div className="text-navy-200">Recommend to Others</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
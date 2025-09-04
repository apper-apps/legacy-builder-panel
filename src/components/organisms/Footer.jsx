import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-500 rounded-lg flex items-center justify-center">
                <ApperIcon name="BookOpen" className="w-5 h-5 text-navy-900" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Legacy Builder</h3>
                <p className="text-navy-300 text-sm">Family Business Harmony</p>
              </div>
            </div>
            <p className="text-navy-300 leading-relaxed">
              Empowering family businesses across the Caribbean and beyond to build lasting harmony, clarity, and multi-generational success.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold-300 mb-4">About Coach IanB</h4>
            <div className="space-y-2 text-navy-300">
              <p>20+ Years Experience</p>
              <p>CILC Family Business Advisory</p>
              <p>Caribbean & International</p>
              <p>Certified Family Business Consultant</p>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gold-300 mb-4">Get Support</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <ApperIcon name="Mail" className="w-4 h-4 text-gold-400" />
                <span className="text-navy-300">support@legacybuilder.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <ApperIcon name="Shield" className="w-4 h-4 text-gold-400" />
                <span className="text-navy-300">7-Day Money Back Guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <ApperIcon name="Clock" className="w-4 h-4 text-gold-400" />
                <span className="text-navy-300">Instant Digital Delivery</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial Quote */}
        <div className="border-t border-navy-800 pt-8 mb-8">
          <blockquote className="text-center italic text-navy-200 text-lg max-w-3xl mx-auto">
            "This completely changed our business! The discussion and agreement around the family charter impacted us in very real ways."
            <cite className="block text-gold-300 font-medium mt-2 not-italic">
              — Andrew Payne, Steamatic & Pure Cleaning
            </cite>
          </blockquote>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-navy-800 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-navy-400 text-sm">
            © {currentYear} Legacy Builder. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-navy-400">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Refund Policy</span>
          </div>
        </div>
        
        {/* Final Trust Elements */}
        <div className="mt-8 flex items-center justify-center space-x-8 text-navy-400 text-sm">
          <div className="flex items-center space-x-2">
            <ApperIcon name="Shield" className="w-4 h-4 text-green-400" />
            <span>Secure SSL Encryption</span>
          </div>
          <div className="flex items-center space-x-2">
            <ApperIcon name="Star" className="w-4 h-4 text-gold-400" />
            <span>100% Money Back Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
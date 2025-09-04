import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ message = "Something went wrong", onRetry, className = "" }) => {
  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-50 ${className}`}>
      <div className="max-w-md mx-auto text-center px-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
          <ApperIcon name="AlertCircle" className="w-8 h-8 text-red-600" />
        </div>
        
        <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
          Oops! Something Went Wrong
        </h2>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          {message}. Don't worry, these things happen. Please try again or contact us if the problem persists.
        </p>
        
        {onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center px-6 py-3 bg-navy-500 text-white font-semibold rounded-xl hover:bg-navy-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <ApperIcon name="RefreshCw" className="w-5 h-5 mr-2" />
            Try Again
          </button>
        )}
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Need help? Contact us at support@legacybuilder.com</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
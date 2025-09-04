import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "Nothing to see here", 
  description = "It looks like there's no content available right now.",
  action,
  className = ""
}) => {
  return (
    <div className={`min-h-[400px] flex items-center justify-center ${className}`}>
      <div className="max-w-md mx-auto text-center px-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-navy-100 to-primary-100 rounded-full mb-6">
          <ApperIcon name="BookOpen" className="w-10 h-10 text-navy-500" />
        </div>
        
        <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>
        
        {action && (
          <div>
            {action}
          </div>
        )}
      </div>
    </div>
  );
};

export default Empty;
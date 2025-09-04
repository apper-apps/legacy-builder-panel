import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Card = forwardRef(({ 
  children, 
  variant = "default",
  padding = "default",
  className = "",
  ...props 
}, ref) => {
  const baseStyles = "rounded-xl transition-all duration-200";
  
  const variants = {
    default: "bg-white border border-gray-200 shadow-lg hover:shadow-xl",
    elevated: "bg-white shadow-2xl hover:shadow-3xl transform hover:scale-[1.02]",
    glass: "bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl",
    gradient: "bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl border border-gray-100"
  };
  
  const paddings = {
    none: "",
    sm: "p-4",
    default: "p-6",
    lg: "p-8",
    xl: "p-10"
  };
  
  return (
    <div
      ref={ref}
      className={cn(
        baseStyles,
        variants[variant],
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;
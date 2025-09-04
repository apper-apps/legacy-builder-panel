import React from "react";

const Loading = ({ className = "" }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-br from-navy-500 via-navy-600 to-primary-600 min-h-screen relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="h-16 bg-white/20 rounded-lg"></div>
              <div className="h-8 bg-white/15 rounded-lg w-3/4"></div>
              <div className="h-14 bg-gold-400/50 rounded-xl w-64"></div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-96 bg-white/10 rounded-2xl shadow-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections Skeleton */}
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        {/* Problem Section */}
        <div className="space-y-6">
          <div className="h-12 bg-gray-200 rounded-lg w-1/2 mx-auto"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div className="h-4 bg-gray-200 rounded flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Author Section */}
        <div className="bg-gray-50 p-8 rounded-2xl">
          <div className="flex items-start space-x-6">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0"></div>
            <div className="flex-1 space-y-3">
              <div className="h-6 bg-gray-200 rounded w-1/3"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          {[1, 2].map((item) => (
            <div key={item} className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
import React from 'react';

export const HairGrowthIcon = ({ size = 24, className = "" }) => {
  return (
    <svg 
      xmlns="http://w3.org" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`text-emerald-500 animate-pulse ${className}`}
    >
      {/* Scalp Surface */}
      <path d="M2 20c4-1 16-1 20 0" />
      
      {/* Hair Follicle and Strand */}
      <path d="M12 20c-1.5-4-2-8 0-14s3-4 3-4" />
      <path d="M11.5 13c1.5-2 2-4 1.5-6" />
      
      {/* Growth/Sparkle Indicators */}
      <path d="M5 6l1 1M6 5l1 1M18 7l1-1M19 8l1-1" />
      <path d="M12 2a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1z" />
    </svg>
  );
};

export default HairGrowthIcon;

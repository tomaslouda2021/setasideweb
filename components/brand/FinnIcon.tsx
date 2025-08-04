import React from 'react';

interface FinnIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const FinnIcon: React.FC<FinnIconProps> = ({ 
  width = 120, 
  height = 120,
  className = '' 
}) => {
  const size = Math.min(width, height);

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 1024 1024" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="appBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#0ea5e9' }} />
          <stop offset="100%" style={{ stopColor: '#06b6d4' }} />
        </linearGradient>
      </defs>
      
      {/* Background with iOS corner radius */}
      <rect width="1024" height="1024" fill="url(#appBg)" rx="225" />
      
      {/* F Letter centered and sized for visibility */}
      <path 
        d="M250 200 L774 200 L774 350 L450 350 L450 500 L700 500 L700 650 L450 650 L450 824 L250 824 Z" 
        fill="white"
      />
    </svg>
  );
};

export default FinnIcon;
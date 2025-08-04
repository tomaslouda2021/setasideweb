import React from 'react';

interface FinnVerticalLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const FinnVerticalLogo: React.FC<FinnVerticalLogoProps> = ({ 
  width = 200, 
  height = 200,
  className = '' 
}) => {
  const size = Math.min(width, height);

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="finnVerticalBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#0ea5e9' }} />
          <stop offset="100%" style={{ stopColor: '#06b6d4' }} />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect width="200" height="200" fill="url(#finnVerticalBg)" rx="16" />
      
      {/* F Icon */}
      <g transform="translate(70, 30)">
        <rect width="60" height="60" fill="white" rx="14" />
        <path 
          d="M16 12 L44 12 L44 20 L26 20 L26 28 L38 28 L38 36 L26 36 L26 48 L16 48 Z" 
          fill="#0ea5e9"
        />
      </g>
      
      {/* Brand Text */}
      <text 
        x="100" 
        y="140" 
        textAnchor="middle" 
        fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif" 
        fontSize="24" 
        fontWeight="800" 
        fill="white"
      >
        Finn
      </text>
    </svg>
  );
};

export default FinnVerticalLogo;
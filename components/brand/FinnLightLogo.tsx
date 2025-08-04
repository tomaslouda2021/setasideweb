import React from 'react';

interface FinnLightLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const FinnLightLogo: React.FC<FinnLightLogoProps> = ({ 
  width = 300, 
  height = 100,
  className = '' 
}) => {
  const aspectRatio = 300 / 100;
  const computedHeight = width / aspectRatio;
  const finalHeight = height || computedHeight;

  return (
    <svg 
      width={width} 
      height={finalHeight} 
      viewBox="0 0 300 100" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="finnIconBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#0ea5e9' }} />
          <stop offset="100%" style={{ stopColor: '#06b6d4' }} />
        </linearGradient>
      </defs>
      
      {/* White background */}
      <rect width="300" height="100" fill="white" rx="12" />
      
      {/* F Icon with gradient background */}
      <g transform="translate(20, 20)">
        <rect width="60" height="60" fill="url(#finnIconBg)" rx="14" />
        <path 
          d="M16 12 L44 12 L44 20 L26 20 L26 28 L38 28 L38 36 L26 36 L26 48 L16 48 Z" 
          fill="white"
        />
      </g>
      
      {/* Brand Text (Dark) */}
      <text 
        x="100" 
        y="60" 
        fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif" 
        fontSize="32" 
        fontWeight="800" 
        fill="#1e293b"
      >
        Finn
      </text>
    </svg>
  );
};

export default FinnLightLogo;
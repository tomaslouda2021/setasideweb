import React from 'react';
import { FinnHorizontalLogo, FinnVerticalLogo, FinnIcon, FinnLightLogo } from '../brand';

interface LogoProps {
  variant?: 'horizontal' | 'vertical' | 'icon' | 'light' | 'loading';
  width?: number;
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'horizontal', 
  width, 
  height,
  className = '' 
}) => {
  // Use the new Finn logo components
  switch (variant) {
    case 'horizontal':
      return <FinnHorizontalLogo width={width} height={height} className={className} />;
    case 'vertical':
      return <FinnVerticalLogo width={width} height={height} className={className} />;
    case 'icon':
      return <FinnIcon width={width} height={height} className={className} />;
    case 'light':
      return <FinnLightLogo width={width} height={height} className={className} />;
    case 'loading':
      // Keep the loading variant for now
      break;
  }

  // Loading variant implementation
  const w = width || 60;
  const h = height || 60;

  if (variant === 'loading') {
    return (
      <svg width={w} height={h} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
          <linearGradient id="spinnerBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0ea5e9' }} />
            <stop offset="100%" style={{ stopColor: '#06b6d4' }} />
          </linearGradient>
        </defs>
        
        <circle cx="30" cy="30" r="30" fill="url(#spinnerBg)" />
        
        <g transform="translate(15, 15)">
          <rect x="7.5" y="7.5" width="15" height="15" rx="3" fill="rgba(255,255,255,0.95)" />
          <path 
            d="M10 9 L20 9 L20 11.5 L12.5 11.5 L12.5 14 L18 14 L18 16.5 L12.5 16.5 L12.5 21 L10 21 Z" 
            fill="#0ea5e9"
          />
          
          <circle cx="15" cy="15" r="13" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          
          <circle cx="15" cy="2" r="1.5" fill="#f59e0b">
            <animateTransform 
              attributeName="transform" 
              type="rotate" 
              values="0 15 15;360 15 15" 
              dur="2s" 
              repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    );
  }

  return null;
};

export default Logo;
import React from 'react';

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
  const dimensions = {
    horizontal: { w: width || 300, h: height || 100, viewBox: '0 0 300 100' },
    vertical: { w: width || 200, h: height || 200, viewBox: '0 0 200 200' },
    icon: { w: width || 120, h: height || 120, viewBox: '0 0 120 120' },
    light: { w: width || 300, h: height || 100, viewBox: '0 0 300 100' },
    loading: { w: width || 60, h: height || 60, viewBox: '0 0 60 60' }
  };

  const { w, h, viewBox } = dimensions[variant];

  if (variant === 'horizontal') {
    return (
      <svg width={w} height={h} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
          <linearGradient id="horizontalBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1e40af' }} />
            <stop offset="100%" style={{ stopColor: '#0891b2' }} />
          </linearGradient>
        </defs>
        
        <rect width="300" height="100" fill="url(#horizontalBg)" rx="12" />
        
        <g transform="translate(20, 20)">
          <circle cx="30" cy="30" r="26" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
          
          <circle cx="30" cy="4" r="3" fill="#fbbf24">
            <animateTransform 
              attributeName="transform" 
              type="rotate" 
              values="0 30 30;360 30 30" 
              dur="8s" 
              repeatCount="indefinite" />
          </circle>
          
          <rect x="15" y="15" width="30" height="30" rx="4" fill="rgba(255,255,255,0.95)" />
          
          <text x="30" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#059669">$</text>
        </g>
        
        <text x="85" y="60" fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif" 
              fontSize="28" fontWeight="800" fill="white">SetAside</text>
      </svg>
    );
  }

  if (variant === 'vertical') {
    return (
      <svg width={w} height={h} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
          <linearGradient id="verticalBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1e40af' }} />
            <stop offset="100%" style={{ stopColor: '#0891b2' }} />
          </linearGradient>
        </defs>
        
        <rect width="200" height="200" fill="url(#verticalBg)" rx="16" />
        
        <g transform="translate(70, 30)">
          <circle cx="30" cy="30" r="26" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
          
          <circle cx="30" cy="4" r="3" fill="#fbbf24">
            <animateTransform 
              attributeName="transform" 
              type="rotate" 
              values="0 30 30;360 30 30" 
              dur="8s" 
              repeatCount="indefinite" />
          </circle>
          
          <rect x="15" y="15" width="30" height="30" rx="4" fill="rgba(255,255,255,0.95)" />
          
          <text x="30" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#059669">$</text>
        </g>
        
        <text x="100" y="150" textAnchor="middle" fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif" 
              fontSize="20" fontWeight="800" fill="white">SetAside</text>
      </svg>
    );
  }

  if (variant === 'icon') {
    return (
      <svg width={w} height={h} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
          <linearGradient id="iconBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1e40af' }} />
            <stop offset="100%" style={{ stopColor: '#0891b2' }} />
          </linearGradient>
        </defs>
        
        <rect width="120" height="120" fill="url(#iconBg)" rx="24" />
        
        <g transform="translate(30, 30)">
          <circle cx="30" cy="30" r="26" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
          
          <circle cx="30" cy="4" r="3" fill="#fbbf24">
            <animateTransform 
              attributeName="transform" 
              type="rotate" 
              values="0 30 30;360 30 30" 
              dur="8s" 
              repeatCount="indefinite" />
          </circle>
          
          <rect x="15" y="15" width="30" height="30" rx="4" fill="rgba(255,255,255,0.95)" />
          
          <text x="30" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#059669">$</text>
        </g>
      </svg>
    );
  }

  if (variant === 'light') {
    return (
      <svg width={w} height={h} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
          <linearGradient id="lightIconBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1e40af' }} />
            <stop offset="100%" style={{ stopColor: '#0891b2' }} />
          </linearGradient>
        </defs>
        
        <rect width="300" height="100" fill="white" rx="12" stroke="#e2e8f0" strokeWidth="1" />
        
        <g transform="translate(20, 20)">
          <circle cx="30" cy="30" r="30" fill="url(#lightIconBg)" />
          
          <circle cx="30" cy="30" r="22" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
          
          <circle cx="30" cy="8" r="2.5" fill="#fbbf24">
            <animateTransform 
              attributeName="transform" 
              type="rotate" 
              values="0 30 30;360 30 30" 
              dur="8s" 
              repeatCount="indefinite" />
          </circle>
          
          <rect x="18" y="18" width="24" height="24" rx="3" fill="rgba(255,255,255,0.95)" />
          
          <text x="30" y="33" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#059669">$</text>
        </g>
        
        <text x="85" y="60" fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif" 
              fontSize="28" fontWeight="800" fill="#1e293b">SetAside</text>
      </svg>
    );
  }

  if (variant === 'loading') {
    return (
      <svg width={w} height={h} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
          <linearGradient id="spinnerBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1e40af' }} />
            <stop offset="100%" style={{ stopColor: '#0891b2' }} />
          </linearGradient>
        </defs>
        
        <circle cx="30" cy="30" r="30" fill="url(#spinnerBg)" />
        
        <g transform="translate(15, 15)">
          <circle cx="15" cy="15" r="13" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          
          <circle cx="15" cy="2" r="1.5" fill="#fbbf24">
            <animateTransform 
              attributeName="transform" 
              type="rotate" 
              values="0 15 15;360 15 15" 
              dur="2s" 
              repeatCount="indefinite" />
          </circle>
          
          <rect x="7.5" y="7.5" width="15" height="15" rx="2" fill="rgba(255,255,255,0.95)" />
          
          <text x="15" y="17.5" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#059669">$</text>
        </g>
      </svg>
    );
  }

  return null;
};

export default Logo;
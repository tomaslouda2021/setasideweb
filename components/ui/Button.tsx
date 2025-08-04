import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-finn-gradient text-white hover:opacity-90 focus:ring-finn-primary-start shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-finn-secondary text-white hover:bg-opacity-90 focus:ring-finn-secondary shadow-md hover:shadow-lg',
    accent: 'bg-finn-accent text-white hover:bg-opacity-90 focus:ring-finn-accent shadow-md hover:shadow-lg',
    outline: 'border-2 border-finn-primary text-finn-primary hover:bg-finn-primary hover:text-white focus:ring-finn-primary',
    ghost: 'text-finn-neutral hover:bg-finn-background focus:ring-finn-neutral'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
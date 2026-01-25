import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variantClasses = {
  primary:
    'bg-[#0099cc] text-white hover:bg-[#005f73] focus:ring-[#00e5ff]',
  secondary:
    'bg-[#1a2128] text-white hover:bg-[#0a0f14] focus:ring-[#00e5ff]',
  outline:
    'border border-[#141a21] text-[#b8c5d0] hover:bg-[#0a0f14] focus:ring-[#00e5ff]',
  ghost:
    'text-[#b8c5d0] hover:bg-[#0a0f14] focus:ring-[#00e5ff]',
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        rounded-sm font-medium
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#000000]
        disabled:opacity-50 disabled:cursor-not-allowed
        cursor-pointer hover:cursor-pointer
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

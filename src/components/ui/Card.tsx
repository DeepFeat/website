import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outline';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const variantClasses = {
  default: 'bg-[#0f1d32] border border-[#162a42]',
  elevated: 'bg-[#0f1d32] border border-[#162a42] shadow-lg',
  outline: 'bg-transparent border border-[#162a42]',
};

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export default function Card({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
}: CardProps) {
  return (
    <div
      className={`
        rounded-sm
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

import { ReactNode } from 'react';

interface MediaPlaceholderProps {
  type?: 'image' | 'video' | 'gif' | 'demo';
  aspectRatio?: 'video' | 'square' | 'wide' | 'portrait';
  label?: string;
  icon?: ReactNode;
  className?: string;
}

const aspectRatioClasses = {
  video: 'aspect-video',
  square: 'aspect-square',
  wide: 'aspect-[21/9]',
  portrait: 'aspect-[9/16]',
};

const typeIcons = {
  image: (
    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  video: (
    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  gif: (
    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
    </svg>
  ),
  demo: (
    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

const typeLabels = {
  image: 'Product Screenshot',
  video: 'Demo Video',
  gif: 'Animated Demo',
  demo: 'Interactive Demo',
};

export default function MediaPlaceholder({
  type = 'image',
  aspectRatio = 'video',
  label,
  icon,
  className = '',
}: MediaPlaceholderProps) {
  const displayLabel = label || typeLabels[type];
  const displayIcon = icon || typeIcons[type];

  return (
    <div className={`relative ${aspectRatioClasses[aspectRatio]} ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#162a42] via-[#0a1628] to-[#1a2d4a] rounded-sm overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
            }}
          />
        </div>

        {/* Animated Scanline Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#00e5ff]/30 to-transparent animate-scan"
          />
        </div>

        {/* Corner Brackets */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#00e5ff]/40" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#00e5ff]/40" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#00e5ff]/40" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#00e5ff]/40" />

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-[#00e5ff]/60 mb-4">
            {displayIcon}
          </div>
          <div className="text-center px-4">
            <p className="text-sm font-medium text-[#c0c8d0] mb-1">{displayLabel}</p>
            <p className="text-xs text-[#7a8a99]">Placeholder</p>
          </div>
        </div>

        {/* Subtle Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00e5ff]/5 to-transparent opacity-50" />
      </div>
    </div>
  );
}

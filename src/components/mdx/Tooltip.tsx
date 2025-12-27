import React, { useState, type ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: string;
  term?: string;
}

export default function Tooltip({ children, content, term }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span 
      className="tooltip-wrapper relative inline"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      <span 
        className="cursor-help border-b border-dotted border-current"
        tabIndex={0}
        role="button"
        aria-describedby="tooltip"
        style={{
          color: '#0D5C4B',
          borderColor: '#0D5C4B',
        }}
      >
        {term || children}
      </span>
      
      {isVisible && (
        <span 
          id="tooltip"
          role="tooltip"
          className="absolute z-50 top-full left-1/2 mt-2 px-4 py-3 text-sm shadow-lg whitespace-normal w-80 text-left leading-relaxed"
          style={{
            transform: 'translateX(-50%)',
            animation: 'fadeIn 0.15s ease-out',
            backgroundColor: '#1A1A1A',
            color: '#E8E4DE',
            border: '1px solid #2D3D3F',
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
          }}
        >
          {content}
          <span 
            className="absolute bottom-full left-1/2 border-4 border-transparent"
            style={{ 
              transform: 'translateX(-50%)',
              borderBottomColor: '#1A1A1A',
            }}
          />
        </span>
      )}
    </span>
  );
}

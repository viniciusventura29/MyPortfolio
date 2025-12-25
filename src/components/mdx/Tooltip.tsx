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
        className="cursor-help border-b border-dotted border-zinc-500 text-zinc-300 hover:text-zinc-200 hover:border-zinc-400 transition-colors duration-150"
        tabIndex={0}
        role="button"
        aria-describedby="tooltip"
      >
        {term || children}
      </span>
      
      {isVisible && (
        <span 
          id="tooltip"
          role="tooltip"
          className="absolute z-50 top-full left-1/2 mt-2 px-4 py-3 text-sm text-zinc-300 bg-zinc-800 border border-zinc-700 rounded shadow-lg whitespace-normal w-80 text-left leading-relaxed"
          style={{
            transform: 'translateX(-50%)',
            animation: 'fadeIn 0.15s ease-out'
          }}
        >
          {content}
          <span 
            className="absolute bottom-full left-1/2 border-4 border-transparent border-b-zinc-800"
            style={{ transform: 'translateX(-50%)' }}
          />
        </span>
      )}
    </span>
  );
}

import React from 'react';

export const DbdLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 36 36" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M18 2.5L2.5 18L18 33.5L33.5 18L18 2.5Z" 
        stroke="#FF0000" 
        strokeWidth="3"
        fill="none"
      />
      <path 
        d="M18 8.5L8.5 18L18 27.5L27.5 18L18 8.5Z" 
        stroke="#FF0000" 
        strokeWidth="2"
        fill="none"
      />
      <path 
        d="M18 14.5L14.5 18L18 21.5L21.5 18L18 14.5Z" 
        fill="#FF0000"
      />
    </svg>
  );
};
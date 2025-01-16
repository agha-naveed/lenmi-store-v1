// components/ui/card.tsx

import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

// Card component wrapper
export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// CardContent component for the content inside the card
export const CardContent: React.FC<CardContentProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

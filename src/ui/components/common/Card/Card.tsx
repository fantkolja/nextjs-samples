import React, { ReactNode } from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={clsx('border border-blue-800 bg-blue-200 rounded text-blue-800 p-6', className)}>
      {children}
    </div>
  );
};

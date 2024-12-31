import React from 'react';

interface SectionTitleProps {
  highlight: string;
  children: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ highlight, children }) => {
  return (
    <h2 className="text-4xl font-bold mb-6">
      <span className="text-red-600">{highlight}</span> {children}
    </h2>
  );
};
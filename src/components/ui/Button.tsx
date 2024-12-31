import React from 'react';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ href, variant = 'primary', children }) => {
  const baseStyles = "px-6 py-3 rounded-md transition-colors";
  const styles = {
    primary: `${baseStyles} bg-red-600 text-white hover:bg-red-700`,
    secondary: `${baseStyles} border border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600`
  };

  return (
    <a href={href} className={styles[variant]}>
      {children}
    </a>
  );
};
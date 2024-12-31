import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactInfoProps {
  icon: LucideIcon;
  text: string;
  href: string;
  variant?: 'normal' | 'large';
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ 
  icon: Icon, 
  text, 
  href,
  variant = 'normal' 
}) => {
  const baseStyles = "flex items-center gap-3 rounded-lg transition-colors group";
  const styles = {
    normal: `${baseStyles} px-6 py-3 bg-gray-100 hover:bg-gray-200`,
    large: `${baseStyles} px-8 py-4 bg-gray-50 hover:bg-gray-100`
  };

  const iconStyles = {
    normal: "w-5 h-5",
    large: "w-6 h-6"
  };

  return (
    <a href={href} className={styles[variant]}>
      <div className="p-2 bg-red-600 rounded-lg group-hover:bg-red-700 transition-colors">
        <Icon className={`${iconStyles[variant]} text-white`} />
      </div>
      <span className={`text-gray-900 font-medium ${variant === 'large' ? 'text-lg' : ''}`}>
        {text}
      </span>
    </a>
  );
};
import React from 'react';

interface ContactFormTextareaProps {
  label: string;
  placeholder: string;
}

export const ContactFormTextarea: React.FC<ContactFormTextareaProps> = ({
  label,
  placeholder
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <textarea
        rows={5}
        className="block w-full rounded-lg border-gray-200 shadow-sm focus:border-red-500 focus:ring-red-500 text-base p-4"
        placeholder={placeholder}
      />
    </div>
  );
};
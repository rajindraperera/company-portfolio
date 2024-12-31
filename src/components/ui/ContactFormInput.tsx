import React from 'react';

interface ContactFormInputProps {
  label: string;
  type: string;
  placeholder: string;
  prefix?: string;
}

export const ContactFormInput: React.FC<ContactFormInputProps> = ({
  label,
  type,
  placeholder,
  prefix
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <span className="text-gray-500 text-sm">{prefix}</span>
          </div>
        )}
        <input
          type={type}
          className={`block w-full rounded-lg border-gray-200 shadow-sm focus:border-red-500 focus:ring-red-500 text-base
            ${prefix ? 'pl-24' : 'pl-4'} py-3`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
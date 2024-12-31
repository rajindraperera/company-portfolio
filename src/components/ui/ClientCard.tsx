import React from 'react';

interface ClientCardProps {
  logo: string;
  name: string;
  description: string;
  image: string;
}

export const ClientCard: React.FC<ClientCardProps> = ({ logo, name, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white p-2 rounded-lg">
          <img
            src={logo}
            alt={`${name} logo`}
            className="h-8"
          />
        </div>
        <div className="absolute top-4 right-4 bg-white text-red-600 px-3 py-1 rounded-full text-sm font-medium">
          Our Impact
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
  social: {
    linkedin: string;
    twitter: string;
    github: string;
  };
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  description,
  image,
  social
}) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
    <div className="relative h-64 overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
      <p className="text-red-600 mb-4">{role}</p>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
      <div className="flex space-x-4">
        <a 
          href={social.linkedin} 
          className="text-gray-400 hover:text-red-600 transition-colors"
          aria-label={`${name}'s LinkedIn`}
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a 
          href={social.twitter} 
          className="text-gray-400 hover:text-red-600 transition-colors"
          aria-label={`${name}'s Twitter`}
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a 
          href={social.github} 
          className="text-gray-400 hover:text-red-600 transition-colors"
          aria-label={`${name}'s GitHub`}
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
);
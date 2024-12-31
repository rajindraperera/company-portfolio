import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, MapPin } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  client: string;
  image: string;
  logo: string;
  description: string;
  impact: string[];
  technologies: string[];
  duration: string;
  value: string;
  location: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  client,
  image,
  logo,
  description,
  impact,
  technologies,
  duration,
  value,
  location
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300"
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-white p-2 rounded-lg shadow-md">
          <img
            src={logo}
            alt={`${client} logo`}
            className="h-6 w-auto"
          />
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <div className="flex items-center justify-between mb-2">
          <p className="text-red-600 text-sm font-medium">{client}</p>
          <div className="flex items-center text-gray-500 text-xs">
            <MapPin className="w-3.5 h-3.5 mr-1" />
            <span>{location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="mb-3">
          <div className="space-y-1">
            {impact.slice(0, 2).map((item, index) => (
              <div key={index} className="flex items-start text-sm">
                <span className="text-red-600 mr-1.5">•</span>
                <span className="text-gray-600 line-clamp-1">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
              +{technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 border-t pt-2">
          <div className="flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="w-3.5 h-3.5 mr-1" />
            <span>{value}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
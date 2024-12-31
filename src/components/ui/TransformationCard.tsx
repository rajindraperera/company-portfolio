import React from 'react';
import { motion } from 'framer-motion';

interface TransformationCardProps {
  logo: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
}

export const TransformationCard: React.FC<TransformationCardProps> = ({
  logo,
  name,
  description,
  image,
  tags
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-56">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md">
          <img
            src={logo}
            alt={`${name} logo`}
            className="h-8 w-auto"
          />
        </div>
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-4 py-1.5 bg-white text-red-600 rounded-full text-sm font-medium shadow-md">
            Our Impact
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 pb-6">
        <a
          href={`#case-study-${name.toLowerCase().replace(/\s+/g, '-')}`}
          className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
        >
          View Case Study
          <svg
            className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};
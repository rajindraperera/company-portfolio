import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  shortDescription,
  longDescription,
  tags
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="bg-red-50/50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-red-600" />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-3">{shortDescription}</p>
      <p className="text-gray-500 text-sm mb-6">{longDescription}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-1.5 text-sm bg-gray-100 text-gray-600 rounded-full 
                     hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={`#${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="inline-flex items-center text-red-600 font-medium group"
      >
        Learn more
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
    </motion.div>
  );
};
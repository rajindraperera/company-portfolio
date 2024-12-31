import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  author,
  date,
  readTime,
  image,
  link
}) => {
  return (
    <a 
      href={link}
      className="group block relative overflow-hidden rounded-xl bg-gray-900 aspect-[16/9]"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent">
        <div className="absolute bottom-0 p-6 w-full">
          <div className="flex items-center justify-between text-white/80 text-sm mb-3">
            <span>{author} | {date}</span>
            <span className="px-3 py-1 bg-red-600 rounded-full">{readTime}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-red-500">
            <span className="mr-2">Read More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>
    </a>
  );
};
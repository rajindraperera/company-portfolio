import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FeaturedPostCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

export const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  image,
  slug
}) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{author}</span>
          <span>•</span>
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        <a
          href={`/blog/${slug}`}
          className="inline-flex items-center mt-4 text-red-600 font-medium group"
        >
          Read More
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};
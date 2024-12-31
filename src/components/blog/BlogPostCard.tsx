import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
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
    <div className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-red-600 text-white text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <span>{author}</span>
          <span>•</span>
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        <a
          href={`/blog/${slug}`}
          className="inline-flex items-center text-sm text-red-600 font-medium group"
        >
          Read More
          <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};
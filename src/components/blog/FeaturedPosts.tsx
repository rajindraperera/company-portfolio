import React from 'react';
import { featuredPosts } from '../../data/blogData';
import { FeaturedPostCard } from './FeaturedPostCard';

export const FeaturedPosts = () => {
  return (
    <section className="py-20 bg-[#faf7f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">
          Featured <span className="text-red-600">Stories</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <FeaturedPostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};
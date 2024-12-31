import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { featuredPosts, blogPosts } from '../data/blogData';
import { ArrowLeft } from 'lucide-react';

export const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = [...featuredPosts, ...blogPosts].find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="pt-24 min-h-screen bg-[#faf7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center text-red-600 font-medium hover:text-red-700"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center text-red-600 font-medium hover:text-red-700 mb-8"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back to Blog
        </button>

        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-500 mb-8">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
          {/* Add more content here */}
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </article>
    </div>
  );
};
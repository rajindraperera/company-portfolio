import React from 'react';
import { BlogHero } from '../components/blog/BlogHero';
import { FeaturedPosts } from '../components/blog/FeaturedPosts';
import { LatestPosts } from '../components/blog/LatestPosts';
import { NewsletterSignup } from '../components/blog/NewsletterSignup';

export const Blog = () => {
  return (
    <div className="pt-16">
      <BlogHero />
      <FeaturedPosts />
      <LatestPosts />
      <NewsletterSignup />
    </div>
  );
};
import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { BlogCard } from '../ui/BlogCard';
import { Button } from '../ui/Button';

export const BlogSection = () => {
  const blogs = [
    {
      title: "Sri Lanka Poised to Excel in IT Development & Offshoring",
      author: "Ashan Perera",
      date: "Feb 6, 2024",
      readTime: "3 mins",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      link: "#"
    },
    {
      title: "Unlocking Growth at Zero Cost: The Power of a Tech Audit",
      author: "Shehzaan Yehiya",
      date: "Jan 11, 2024",
      readTime: "8 mins",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <SectionTitle highlight="latest resources">Read our</SectionTitle>
          <Button href="/blog" variant="secondary">View All Blogs</Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};
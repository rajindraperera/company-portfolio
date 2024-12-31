import React from 'react';
import { motion } from 'framer-motion';

export const BlogHero = () => {
  return (
    <section className="relative bg-gray-900 py-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
          alt="Technology background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Latest Insights &{' '}
            <span className="text-red-600">Industry Analysis</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, technologies, and insights from our experts
          </p>
        </motion.div>
      </div>
    </section>
  );
};
import React from 'react';
import { motion } from 'framer-motion';

export const AboutHero = () => {
  return (
    <section className="relative bg-gray-900 py-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
          alt="Team collaboration"
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
            A Team dedicated to{' '}
            <span className="text-red-600">providing</span>
          </h1>
          <h2 className="text-3xl md:text-4xl text-red-600 font-bold mb-8">
            Technology, Product & Digital Transformation
          </h2>
        </motion.div>
      </div>
    </section>
  );
};
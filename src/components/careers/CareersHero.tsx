import React from 'react';
import { motion } from 'framer-motion';

export const CareersHero = () => {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              At RPX99 we are always looking for{' '}
              <span className="text-red-600">talented individuals</span> to join our team.
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              If you are passionate about helping businesses succeed and thrive in today's competitive market, 
              we want to hear from you.
            </p>
            <a
              href="#positions"
              className="inline-block px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              View All Our Openings
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
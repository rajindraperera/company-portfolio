import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code2, Lightbulb, Rocket } from 'lucide-react';

export const TeamSection = () => {
  const teamStats = [
    { icon: Users, count: '50+', label: 'Team Members' },
    { icon: Code2, count: '200+', label: 'Projects Delivered' },
    { icon: Lightbulb, count: '10+', label: 'Years Experience' },
    { icon: Rocket, count: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <section className="py-20 bg-[#faf7f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What started off with 2 people has now grown to a{' '}
            <span className="text-red-600">full-blown team of experts</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our journey began with a vision to transform businesses through technology. 
            Today, we're proud to have assembled a team of passionate experts dedicated 
            to turning that vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-4 bg-red-600 rounded-lg mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.count}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
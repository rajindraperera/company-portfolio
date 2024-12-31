import React from 'react';
import { motion } from 'framer-motion';

export const TechStack = () => {
  const technologies = [
    { name: 'Figma', image: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
    { name: 'Kafka', image: 'https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg' },
    { name: 'Flutter', image: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg' },
    { name: 'Node.js', image: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' },
    { name: 'Laravel', image: 'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our Technology Stack
          </h2>
          <p className="text-gray-600 text-lg">
            We leverage cutting-edge technologies to deliver exceptional solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <img
                src={tech.image}
                alt={tech.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <span className="text-gray-600">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Code, LineChart, Lightbulb } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: 'Software Engineering',
      description: 'Custom software solutions built with cutting-edge technologies to drive your business forward.',
      icon: Code
    },
    {
      title: 'Technology Transformation',
      description: 'Strategic consulting to modernize your technology stack and optimize operations.',
      icon: Lightbulb
    },
    {
      title: 'Digital Growth',
      description: 'Data-driven strategies to accelerate your digital presence and market reach.',
      icon: LineChart
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive solutions to drive your digital transformation journey
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                <div className="inline-flex p-4 bg-blue-600 rounded-lg">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-medium text-gray-900 text-center">
                  {service.title}
                </h3>
                <p className="mt-4 text-base text-gray-500 text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
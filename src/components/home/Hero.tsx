import React from 'react';
import { TypewriterEffect } from '../ui/TypewriterEffect';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 pt-16 pb-32 overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
          alt="Business background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Leverage on the most{' '}
              <span className="text-red-600 block mt-2">
                <TypewriterEffect text="impactful and disruptive" />
              </span>
              <span className="text-red-600">
                <TypewriterEffect text="technologies" speed={150} />
              </span>
            </h1>
            
            <div className="mt-8">
              <div className="flex items-center justify-center text-gray-300">
                <span className="text-xl font-medium">End-to-End Solutions:</span>
                <span className="ml-2 text-xl">
                  <TypewriterEffect text="From strategy to implementation, we have you covered!" speed={100} />
                </span>
              </div>
              
              <div className="mt-8 flex gap-4 justify-center">
                <Button href="#about">More About RP X99</Button>
                <Button href="#services" variant="secondary">View Our Services</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { Button } from '../ui/Button';
import { SectionTitle } from '../ui/SectionTitle';

export const DigitalSolutions = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle highlight="Digital solutions">and transformations.</SectionTitle>
        
        <p className="text-gray-600 text-lg max-w-3xl mb-8">
          We engineer transformative digital solutions that catalyze substantial business growth. 
          Are you prepared to unleash your potential? Delve into our suite of services and learn 
          how RP X99 can be your catalyst for advancement.
        </p>
        
        <div className="flex gap-4">
          <Button href="#about">More About RP X99</Button>
          <Button href="#services" variant="secondary">View Our Services</Button>
        </div>
      </div>
    </section>
  );
};
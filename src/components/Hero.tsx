import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const TypeWriter = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(c => c + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayText}</span>;
};

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 pt-16 pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
          alt="Business background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="pt-20 lg:pt-32">
          <div className="text-left max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Leverage on the most{' '}
              <span className="text-orange-500 block mt-2">
                <TypeWriter text="impactful and disruptive" />
              </span>
              <span className="text-orange-500">
                <TypeWriter text="technologies" speed={150} />
              </span>
            </h1>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center text-gray-300">
                <span className="text-xl font-medium">Global Teams:</span>
                <span className="ml-2 text-xl">
                  <TypeWriter text="Delivering |" speed={200} />
                </span>
              </div>
              
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
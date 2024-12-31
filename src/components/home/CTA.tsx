import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const CTA = () => {
  return (
    <section className="py-20 bg-[#faf7f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1c1c1c] rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to propel your business forward with cutting-edge technology?
            </h3>
            <div className="flex space-x-2 text-red-600 mt-4">
              {[...Array(9)].map((_, i) => (
                <ArrowRight key={i} className="w-6 h-6" />
              ))}
            </div>
          </div>
          
          <div className="bg-red-600 rounded-xl p-8 text-white">
            <p className="text-lg mb-6">
              Our Team is always available to help you out. Reach out to us right now, and we will get back to you <span className="font-semibold">within 24 - 48 hours</span>.
            </p>
            <Button href="#contact" variant="secondary">Get In Touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
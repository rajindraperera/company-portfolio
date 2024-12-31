import React from 'react';
import { JobCard } from './JobCard';
import { jobOpenings } from '../../data/jobOpenings';

export const OpenPositions = () => {
  return (
    <section id="positions" className="py-20 bg-[#faf7f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">
          We are <span className="text-red-600">actively looking</span> for
        </h2>
        <div className="space-y-6">
          {jobOpenings.map((job, index) => (
            <JobCard key={index} number={index + 1} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};
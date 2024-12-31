import React from 'react';

interface JobCardProps {
  number: number;
  title: string;
  location: string;
  type: string;
  description: string;
}

export const JobCard: React.FC<JobCardProps> = ({
  number,
  title,
  location,
  type,
  description
}) => {
  return (
    <div className="bg-white rounded-lg p-6 flex items-start gap-8">
      <span className="text-4xl font-bold text-red-600/20">
        {number.toString().padStart(2, '0')}
      </span>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                {location}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                {type}
              </span>
            </div>
          </div>
          <a
            href={`/careers/apply/${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Apply Now
          </a>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
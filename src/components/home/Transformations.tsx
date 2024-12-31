import React from 'react';
import { TransformationCard } from '../ui/TransformationCard';

export const Transformations = () => {
  const transformations = [
    {
      logo: "https://www.unsw.edu.au/etc.clientlibs/unsw-common/clientlibs/clientlib-site/resources/images/logo.svg",
      name: "UNSW",
      description: "Establishing a centralized database for comprehensive data integration of students, faculty, and research. Our automated grant workflows and self-service portals streamline course registration and transcript access, enhancing efficiency and user autonomy.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      tags: ["Education", "Database", "Automation"]
    },
    {
      logo: "https://education.gov.au/themes/custom/education_gov_au/logo.svg",
      name: "Department of Education",
      description: "Engineered a platform to deliver seamless educational experiences, even in low-bandwidth scenarios. This robust platform provides an intuitive interface for educators to efficiently manage resources and facilitates enhanced online collaboration.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      tags: ["Government", "Education", "Platform"]
    },
    {
      logo: "/mo-logo.svg",
      name: "MO - Marketplace",
      description: "A foundational MVP platform encompassing a mobile app, web app, and backend infrastructure has been meticulously crafted for a startup. This integrated suite enables seamless multi-channel user experiences and robust backend functionalities.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      tags: ["Startup", "Mobile", "Web"]
    }
  ];

  return (
    <section className="py-20 bg-[#faf7f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-red-600">Transformations we've</span>
          <br />done for our clients
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => (
            <TransformationCard key={index} {...transformation} />
          ))}
        </div>

        <div className="mt-16 text-gray-600 max-w-3xl">
          <p className="mb-8 leading-relaxed">
            Dive into inspiring case studies that showcase how we've empowered businesses 
            to achieve impactful transformations. We don't just talk about transformation, 
            we deliver it. Explore real-world examples of how we've partnered with clients 
            across industries to overcome challenges, optimize processes, and achieve 
            significant results.
          </p>
          <a
            href="#impact"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors group"
          >
            More About Our Impact
            <svg
              className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
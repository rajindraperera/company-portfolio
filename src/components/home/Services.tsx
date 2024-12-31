import React from 'react';
import { ServiceCard } from '../ui/ServiceCard';
import { SectionTitle } from '../ui/SectionTitle';
import { Code2, Lightbulb, BarChart3, Users } from 'lucide-react';

export const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle highlight="Our services">to help your business grow</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            icon={Code2}
            title="Software Product Engineering"
            shortDescription="Custom software solutions built with cutting-edge technologies"
            longDescription="We deliver innovative software solutions tailored to your business needs, leveraging the latest technologies and best practices in software development."
            tags={["Design Sprint", "Software Development", "Big Data", "UI/UX"]}
          />
          
          <ServiceCard
            icon={Lightbulb}
            title="Technology Transformation"
            shortDescription="Modernize your technology stack and optimize operations"
            longDescription="Transform your legacy systems into modern, scalable solutions that drive efficiency and enable digital innovation across your organization."
            tags={["Legacy Modernization", "Data Migration", "E-commerce", "Tech Consulting"]}
          />
          
          <ServiceCard
            icon={BarChart3}
            title="Digital Growth Strategy"
            shortDescription="Data-driven strategies to accelerate your digital presence"
            longDescription="Develop comprehensive digital strategies that drive growth, enhance market presence, and create meaningful customer engagement."
            tags={["Startup Advisory", "Digital Marketing", "Analytics", "SEO"]}
          />
          
          <ServiceCard
            icon={Users}
            title="Resource Augmentation"
            shortDescription="Scale your team with skilled professionals"
            longDescription="Access top-tier talent and specialized expertise to strengthen your team and accelerate project delivery."
            tags={["Extended Teams", "Fractional CTO", "Tech Lead", "Agile Teams"]}
          />
        </div>
      </div>
    </section>
  );
};
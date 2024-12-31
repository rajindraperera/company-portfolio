import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { TeamSection } from '../components/about/TeamSection';
import { TechStack } from '../components/about/TechStack';
import { TeamMembers } from '../components/about/TeamMembers';

export const About = () => {
  return (
    <div className="pt-16">
      <AboutHero />
      <TeamSection />
      <TechStack />
      <TeamMembers />
    </div>
  );
};
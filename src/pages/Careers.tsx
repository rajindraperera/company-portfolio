import React from 'react';
import { CareersHero } from '../components/careers/CareersHero';
import { OpenPositions } from '../components/careers/OpenPositions';

export const Careers = () => {
  return (
    <div className="pt-16">
      <CareersHero />
      <OpenPositions />
    </div>
  );
};
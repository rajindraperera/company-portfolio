import React from 'react';
import { Hero } from '../components/home/Hero';
import { DigitalSolutions } from '../components/home/DigitalSolutions';
import { Transformations } from '../components/home/Transformations';
import { Services } from '../components/home/Services';
import { Testimonials } from '../components/home/Testimonials';
import { FAQ } from '../components/home/FAQ';
import { BlogSection } from '../components/home/BlogSection';
import { ContactForm } from '../components/home/ContactForm';

export const Home = () => {
  return (
    <>
      <Hero />
      <DigitalSolutions />
      <Transformations />
      <Services />
      <Testimonials />
      <FAQ />
      <BlogSection />
      <ContactForm />
    </>
  );
};
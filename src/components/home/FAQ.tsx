import React, { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { FAQItem } from '../ui/FAQItem';

export const FAQ = () => {
  const faqs = [
    {
      question: "What is a tech audit and how does it work?",
      answer: "A tech audit, similar to a checkup for your IT systems, offers a comprehensive assessment of your company's technology infrastructure, processes, and policies. This evaluation helps pinpoint strengths, weaknesses, potential risks, and areas where your tech can be improved to better align with your business goals. The process typically involves planning the audit scope based on your needs, gathering data about your hardware, software, security, and data management, analyzing that data for vulnerabilities and inefficiencies, and then providing a report with recommendations for improvement. Following the audit, we can work with you to develop an action plan to address the findings and ensure your technology is working to its full potential, leading to benefits like improved efficiency, enhanced security, cost savings, better alignment with your business goals, and even compliance with industry regulations."
    },
    {
      question: "What is resource augmentation?",
      answer: "Resource augmentation is our flexible staffing solution that allows you to scale your team with skilled professionals on-demand. We provide experienced developers, designers, and technical experts who seamlessly integrate with your existing team, helping you meet project deadlines and technical challenges without the overhead of full-time hiring."
    },
    {
      question: "How much can I save by shifting to RP X99?",
      answer: "The cost savings from partnering with RP X99 vary based on your specific needs and current technology spending. Typically, our clients see 20-40% reduction in operational costs through optimized processes, efficient resource utilization, and our competitive pricing model. We'll provide a detailed cost analysis during our initial consultation."
    }
  ];

  return (
    <section className="py-20 bg-[#faf7f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionTitle highlight="frequently asked questions">Let us answer a few</SectionTitle>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};
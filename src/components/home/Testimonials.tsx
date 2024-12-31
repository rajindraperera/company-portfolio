import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Our outdated internal processes and website stability issues were making it difficult to meet customer demands. Then RP X99 stepped in. They quickly stabilized our website and identified a major operational bottleneck, streamlining our workflow and boosting efficiency. Thanks to RP X99, our customer engagement has significantly improved.",
      author: "Shahid Hussain",
      position: "CEO - Kiddoz"
    },
    {
      quote: "Our brand image was stuck in the past and we weren't reaching our target audience effectively. RP X99 Consultancy helped us develop a comprehensive digital strategy that included a user-friendly mobile app. The app has been a game-changer, allowing us to connect with customers on a whole new level and build a stronger brand identity.",
      author: "Anika Wijesuriya",
      position: "CEO - MO Marketplace"
    },
    {
      quote: "We were making decisions based on gut feeling, not data. RP X99 implemented a data analytics platform as part of our digital strategy. Now, we have real-time insights into our customers and operations, which allows us to make data-driven decisions that are fueling our growth.",
      author: "Gihan Dias",
      position: "CEO - Domain LK"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">
          What our
          <br /><span className="text-red-600">clients have to say</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Quote className="text-red-600 w-8 h-8 mb-4" />
              <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.quote}</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
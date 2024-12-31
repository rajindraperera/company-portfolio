import React from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { ContactFormInput } from '../ui/ContactFormInput';
import { ContactFormTextarea } from '../ui/ContactFormTextarea';
import { ContactInfo } from '../ui/ContactInfo';

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#faf7f5]">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent" />
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-red-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-red-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Is your business ready to{' '}
            <span className="text-red-600">leverage disruptive technologies</span>?
          </h2>
          <p className="text-gray-600 text-lg">
            Connect with us through email or phone or fill the form below and we will reach out to you within{' '}
            <span className="font-semibold">24 - 48 hours</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Get in touch</h3>
              <div className="space-y-4">
                <ContactInfo
                  icon={Phone}
                  text="+94 77 459 8619"
                  href="tel:+94774598619"
                  variant="large"
                />
                <ContactInfo
                  icon={Mail}
                  text="hello@rpx99.com"
                  href="mailto:hello@rpx99.com"
                  variant="large"
                />
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Ready to transform your business?</h3>
              <p className="text-gray-300 mb-6">Our team of experts is ready to help you achieve your digital transformation goals.</p>
              <div className="flex text-red-500">
                {[...Array(5)].map((_, i) => (
                  <ArrowRight key={i} className="w-5 h-5" />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <ContactFormInput
                    label="Name"
                    type="text"
                    placeholder="Your full name"
                  />
                  <ContactFormInput
                    label="Email"
                    type="email"
                    placeholder="johndoe@gmail.com"
                  />
                </div>

                <ContactFormInput
                  label="Contact No"
                  type="tel"
                  placeholder="123-456-7890"
                  prefix="LK | +94"
                />

                <ContactFormTextarea
                  label="Message"
                  placeholder="Tell us about your project..."
                />

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 px-6 rounded-lg hover:bg-red-700 
                           transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg
                           font-medium flex items-center justify-center gap-2"
                >
                  Get In Touch
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
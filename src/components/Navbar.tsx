import React from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-500">RPX99</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-orange-500">About Us</a>
            <a href="#services" className="text-gray-300 hover:text-orange-500">Services</a>
            <a href="#projects" className="text-gray-300 hover:text-orange-500">Projects</a>
            <a href="#insights" className="text-gray-300 hover:text-orange-500">Insights</a>
            <a href="#contact" className="px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700">
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-orange-500">About Us</a>
            <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Services</a>
            <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Projects</a>
            <a href="#insights" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Insights</a>
            <a href="#contact" className="block px-3 py-2 text-orange-500 font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};
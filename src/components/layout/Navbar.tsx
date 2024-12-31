import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/about', label: 'About Us' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Insights' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact Us' }
  ];

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors ${isActive ? 'text-red-600' : 'text-gray-300 hover:text-red-500'}`;

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div>
            <NavLink to="/">
              <Logo />
            </NavLink>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={navLinkClasses}
              >
                {item.label}
              </NavLink>
            ))}
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
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={navLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
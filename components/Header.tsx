
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm shadow-lg shadow-black/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white tracking-wider transition-opacity hover:opacity-80">
          <span className="text-amber-400">High</span> Limits
        </a>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-300 hover:text-amber-400 transition duration-300">About</a>
          <a href="#categories" className="text-gray-300 hover:text-amber-400 transition duration-300">Categories</a>
          <a href="#locations" className="text-gray-300 hover:text-amber-400 transition duration-300">Locations</a>
          <a href="#testimonials" className="text-gray-300 hover:text-amber-400 transition duration-300">Testimonials</a>
          <a href="#faq" className="text-gray-300 hover:text-amber-400 transition duration-300">FAQ</a>
          <a href="#contact" className="text-gray-300 hover:text-amber-400 transition duration-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

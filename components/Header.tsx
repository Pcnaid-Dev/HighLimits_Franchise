import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = targetId ? document.querySelector(targetId) : null;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      // Optionally update URL hash without jumping
      // window.history.pushState(null, '', targetId);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" onClick={handleNavClick} className="text-4xl font-heading text-white tracking-wider transition-opacity hover:opacity-80">
          <span className="text-amber-400">High</span> Limits
        </a>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" onClick={handleNavClick} className="text-gray-300 hover:text-amber-400 font-medium transition duration-300">About</a>
          <a href="#categories" onClick={handleNavClick} className="text-gray-300 hover:text-amber-400 font-medium transition duration-300">Categories</a>
          <a href="#locations" onClick={handleNavClick} className="text-gray-300 hover:text-amber-400 font-medium transition duration-300">Locations</a>
          <a href="#testimonials" onClick={handleNavClick} className="text-gray-300 hover:text-amber-400 font-medium transition duration-300">Testimonials</a>
          <a href="#faq" onClick={handleNavClick} className="text-gray-300 hover:text-amber-400 font-medium transition duration-300">FAQ</a>
          <a href="#contact" onClick={handleNavClick} className="text-gray-300 hover:text-amber-400 font-medium transition duration-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
import React, { useRef, useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import SmokeBackground from './components/SmokeBackground';

// A simple hook to detect when an element is visible in the viewport
const useIsVisible = (ref: React.RefObject<HTMLElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Start animation when the element is partially visible
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.unobserve(entry.target);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
};

// Wrapper component to apply the fade-in effect
const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};


const App: React.FC = () => {
  return (
    <div className="text-gray-200 font-body antialiased relative z-0">
      <SmokeBackground />
      <Header />
      <main>
        <Hero />
        <FadeInSection><About /></FadeInSection>
        <FadeInSection><Categories /></FadeInSection>
        <FadeInSection><Locations /></FadeInSection>
        <FadeInSection><Testimonials /></FadeInSection>
        <FadeInSection><FAQ /></FadeInSection>
        <FadeInSection><Contact /></FadeInSection>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
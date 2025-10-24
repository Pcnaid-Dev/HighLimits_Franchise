// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-black-and-white-shot-of-a-man-smoking-a-cigar-41793-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-20 p-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
          Elevate Your Experience
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-300 drop-shadow-md">
          Your premier destination for quality smoke and vape products. Discover our locations and find your new favorite spot.
        </p>

<div className="mt-10 brand-row animate-fade-in-up [animation-delay:0.8s]" aria-label="Our Brands">
  <div className="brand-tile glow--smokelab">
    <img
      src="https://media-assets.pcnaid.com/Smoke%20Lab%20Smoke%20Shop%20Logo-art.png"
      alt="Smoke Lab"
      width={1600} height={750}
      className="brand-img"
      decoding="async" loading="eager"
    />
  </div>

  <div className="brand-tile glow--smokebox">
    <img
      src="https://media-assets.pcnaid.com/Smoke%20Box%20Smoke%20Shop%20Logo-art.png"
      alt="Smoke Box"
      width={1600} height={750}
      className="brand-img"
      decoding="async" loading="lazy"
    />
  </div>

  <div className="brand-tile glow--highlimits">
    <img
      src="https://media-assets.pcnaid.com/High%20Limits%20Smoke%20Shop%20Logo-art.png"
      alt="High Limits Smoke Shop"
      width={1600} height={750}
      className="brand-img"
      decoding="async" loading="lazy"
    />
  </div>

  <div className="brand-tile glow--blazy">
    <img
      src="https://media-assets.pcnaid.com/Blazy%20Vape%20Shop%20Logo-art.png"
      alt="Blazy Vape"
      width={1600} height={750}
      className="brand-img"
      decoding="async" loading="lazy"
    />
  </div>

  <div className="brand-tile glow--fivestar">
    <img
      src="https://media-assets.pcnaid.com/5-Star%20Smoke%20Shop%20Logo-art.png"
      alt="5 Star Smoke Shop & CBD"
      width={1600} height={750}
      className="brand-img"
      decoding="async" loading="lazy"
    />
  </div>


        
        <a 
          href="#locations"
          className="mt-8 inline-block bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-transform transform hover:scale-105 duration-300 shadow-xl"
        >
          Find a Shop
        </a>
      </div>
    </section>
  );
};

export default Hero;

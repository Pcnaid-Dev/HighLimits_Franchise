import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
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
        <h1 className="text-6xl md:text-8xl font-heading tracking-wider drop-shadow-lg animate-fade-in-up">
          Elevate Your Experience
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300 drop-shadow-md animate-fade-in-up [animation-delay:0.3s]">
          Explore our family of brands — bringing you quality, community, and style.
        </p>
        <p className="mt-2 text-lg md:text-xl max-w-2xl mx-auto text-gray-300 drop-shadow-md animate-fade-in-up [animation-delay:0.5s]">
          SmokeLab, SmokeBox, BlazyVape, 5-Star, HighLimits.
        </p>

<div className="mt-8 flex flex-wrap justify-center items-center gap-6 animate-fade-in-up [animation-delay:0.8s]">
  <img
    src="https://media-assets.pcnaid.com/Smoke%20Lab%20Smoke%20Shop%20Logo-art.png"
    alt="Smoke Lab"
    className="h-[80px] sm:h-[90px] md:h-[100px] w-auto object-contain brand-logo"
    decoding="async"
    loading="lazy"
  />
  <img
    src="https://media-assets.pcnaid.com/Smoke%20Box%20Smoke%20Shop%20Logo-art.png"
    alt="Smoke Box"
    className="h-[80px] sm:h-[90px] md:h-[100px] w-auto object-contain brand-logo"
    decoding="async"
    loading="lazy"
  />
  <img
    src="https://media-assets.pcnaid.com/High%20Limits%20Smoke%20Shop%20Logo-art.png"
    alt="High Limits Smoke Shop"
    className="h-[80px] sm:h-[90px] md:h-[100px] w-auto object-contain brand-logo"
    decoding="async"
    loading="lazy"
  />
  <img
    src="https://media-assets.pcnaid.com/Blazy%20Vape%20Shop%20Logo-art.png"
    alt="Blazy Vape"
    className="h-[80px] sm:h-[90px] md:h-[100px] w-auto object-contain brand-logo"
    decoding="async"
    loading="lazy"
  />
  <img
    src="https://media-assets.pcnaid.com/5-Star%20Smoke%20Shop%20Logo-art.png"
    alt="5 Star Smoke Shop & CBD"
    className="h-[80px] sm:h-[90px] md:h-[100px] w-auto object-contain brand-logo"
    decoding="async"
    loading="lazy"
  />
</div>

        
        <a 
          href="#locations"
          className="mt-8 inline-block bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-xl hover:bg-amber-400 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/40 animate-fade-in-up [animation-delay:0.7s] animate-pulse-glow"
        >
          Find a Shop
        </a>
      </div>
    </section>
  );
};

export default Hero;

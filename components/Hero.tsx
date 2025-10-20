
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


import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white">About High Limits</h2>
        <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto rounded"></div>
        <p className="mt-8 max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          Founded in 2015, High Limits started as a small shop with a big dream: to create a welcoming space for enthusiasts to find the highest quality smoke and vape products. We believe in community, quality, and expertise. Our staff are passionate about our products and are here to guide you, whether you're a seasoned connoisseur or just starting your journey. We're more than just a shop; we're a part of the neighborhood.
        </p>
      </div>
    </section>
  );
};

export default About;
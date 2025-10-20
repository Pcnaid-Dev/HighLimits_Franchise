import React from 'react';
import { StarIcon } from './icons';

const testimonials = [
  { name: 'Alex J.', quote: 'This is my go-to spot! The staff is incredibly knowledgeable and friendly. They always have the best selection in town.' },
  { name: 'Samantha P.', quote: 'I was new to vaping and they walked me through everything. No pressure, just helpful advice. Highly recommend Greenway Corner!'},
  { name: 'Mike R.', quote: 'The best prices and the coolest glass pieces. I drive 30 minutes just to come to the Downtown Haze location. Worth it every time.'},
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-heading text-white tracking-wider">What Our Customers Say</h2>
          <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/10">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5" />)}
              </div>
              <p className="text-gray-300 flex-grow">"{testimonial.quote}"</p>
              <p className="mt-6 font-bold text-white text-right">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Submitting...');
    // Simulate form submission
    setTimeout(() => {
      setStatus('Thank you for your message! We will get back to you soon.');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus(''), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-heading text-white tracking-wider">Get In Touch</h2>
          <p className="mt-2 text-gray-400">Have a question or want to work with us? Drop a line.</p>
          <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto rounded"></div>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg shadow-lg space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required className="w-full bg-gray-800 border border-gray-700 text-white rounded-md p-3 focus:ring-amber-500 focus:border-amber-500 transition"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input type="email" id="email" name="email" placeholder="you@example.com" required className="w-full bg-gray-800 border border-gray-700 text-white rounded-md p-3 focus:ring-amber-500 focus:border-amber-500 transition"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="How can we help?" required className="w-full bg-gray-800 border border-gray-700 text-white rounded-md p-3 focus:ring-amber-500 focus:border-amber-500 transition"></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-xl hover:bg-amber-400 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/40"
              >
                Send Message
              </button>
            </div>
            {status && <p className="text-center text-amber-400 mt-4">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
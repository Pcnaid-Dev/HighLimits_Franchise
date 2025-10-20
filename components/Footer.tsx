import React, { useState } from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './icons';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate API call
    setMessage('Thank you for subscribing!');
    setEmail('');
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 text-center md:text-left">
            <a href="#home" className="text-3xl font-heading text-white tracking-wider transition-opacity hover:opacity-80">
              <span className="text-amber-400">High</span> Limits
            </a>
          </div>
          <div className="md:col-span-1">
             <div className="max-w-md mx-auto">
                <h3 className="font-bold text-lg text-white text-center">Join Our Newsletter</h3>
                <p className="text-sm text-gray-400 text-center mt-1 mb-4">Get the latest on new products and promotions.</p>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-gray-700 border border-gray-600 text-white rounded-md p-2 focus:ring-amber-500 focus:border-amber-500 transition placeholder-gray-400"
                        placeholder="Enter your email"
                    />
                    <button
                        type="submit"
                        className="bg-amber-500 text-gray-900 font-bold py-2 px-6 rounded-md transition-all duration-300 shadow-lg hover:bg-amber-400 hover:scale-105"
                    >
                        Subscribe
                    </button>
                </form>
                 {message && <p className="text-center text-amber-400 mt-3 text-sm">{message}</p>}
            </div>
          </div>
          <div className="md:col-span-1 flex justify-center md:justify-end mt-6 md:mt-0">
             <div className="flex space-x-6">
                <div className="relative group">
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-300 hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.7)]">
                    <span className="sr-only">Facebook</span>
                    <FacebookIcon className="h-6 w-6" />
                  </a>
                  <div className="absolute bottom-full mb-2 w-auto -translate-x-1/2 left-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-gray-700 shadow-lg rounded-md">Facebook</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-700 mx-auto"></div>
                  </div>
                </div>
                <div className="relative group">
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-300 hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.7)]">
                    <span className="sr-only">Instagram</span>
                    <InstagramIcon className="h-6 w-6" />
                  </a>
                  <div className="absolute bottom-full mb-2 w-auto -translate-x-1/2 left-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-gray-700 shadow-lg rounded-md">Instagram</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-700 mx-auto"></div>
                  </div>
                </div>
                <div className="relative group">
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-300 hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.7)]">
                    <span className="sr-only">Twitter</span>
                    <TwitterIcon className="h-6 w-6" />
                  </a>
                  <div className="absolute bottom-full mb-2 w-auto -translate-x-1/2 left-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-gray-700 shadow-lg rounded-md">Twitter</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-700 mx-auto"></div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} High Limits. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
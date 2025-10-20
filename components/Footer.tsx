
import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} High Limits. All Rights Reserved.</p>
          <div className="flex mt-4 sm:mt-0 space-x-6">
            <a href="#" className="text-gray-400 hover:text-amber-400 transition duration-300">
              <span className="sr-only">Facebook</span>
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition duration-300">
              <span className="sr-only">Instagram</span>
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition duration-300">
              <span className="sr-only">Twitter</span>
              <TwitterIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
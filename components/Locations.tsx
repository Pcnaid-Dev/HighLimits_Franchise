
import React, { useState } from 'react';
import { LOCATIONS } from '../constants';
import type { Location } from '../types';
import { MapPinIcon, PhoneIcon, ClockIcon, InstagramIcon, FacebookIcon } from './icons';

const Locations: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location>(LOCATIONS[0]);

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(selectedLocation.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="locations" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Our Locations</h2>
          <p className="mt-2 text-gray-400">Seven convenient locations to serve you.</p>
          <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto rounded"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Location List */}
          <div className="lg:w-1/3">
            <div className="space-y-3">
              {LOCATIONS.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 transform ${
                    selectedLocation.id === location.id
                      ? 'bg-amber-500 text-gray-900 shadow-lg scale-105'
                      : 'bg-gray-800 text-white hover:bg-gray-700 hover:-translate-y-1'
                  }`}
                >
                  <h3 className="font-bold text-lg">{location.name}</h3>
                  <p className={`text-sm ${selectedLocation.id === location.id ? 'text-gray-800' : 'text-gray-400'}`}>
                    {location.address.split(',')[1].trim()}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Location Details and Map */}
          <div className="lg:w-2/3">
            <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-6">{selectedLocation.name}</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start">
                    <MapPinIcon className="w-6 h-6 mr-4 mt-1 text-amber-400 flex-shrink-0" />
                    <span>{selectedLocation.address}</span>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="w-6 h-6 mr-4 text-amber-400 flex-shrink-0" />
                    <span>{selectedLocation.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <ClockIcon className="w-6 h-6 mr-4 mt-1 text-amber-400 flex-shrink-0" />
                    <div>
                      <p><span className="font-semibold text-gray-200">Weekdays:</span> {selectedLocation.hours.weekdays}</p>
                      <p><span className="font-semibold text-gray-200">Weekends:</span> {selectedLocation.hours.weekend}</p>
                    </div>
                  </div>
                  {selectedLocation.socials && (
                    <div className="flex items-center pt-2">
                       <span className="text-amber-400 font-semibold mr-4">Follow Us:</span>
                       <div className="flex space-x-4">
                         <a href={selectedLocation.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition duration-300">
                            <span className="sr-only">Instagram</span>
                            <InstagramIcon className="h-6 w-6" />
                         </a>
                         <a href={selectedLocation.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition duration-300">
                            <span className="sr-only">Facebook</span>
                            <FacebookIcon className="h-6 w-6" />
                         </a>
                       </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="h-80 lg:h-96 w-full">
                <iframe
                  key={selectedLocation.id}
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[50%] invert-[90%] contrast-[1.2]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;

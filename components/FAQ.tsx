
import React, { useState } from 'react';
import { ChevronDownIcon } from './icons';

const faqs = [
  { q: 'What are your store hours?', a: 'Our hours vary by location. Please select a specific location from our "Locations" section to see detailed hours for weekdays and weekends.' },
  { q: 'Do you need to be a certain age to enter?', a: 'Yes, you must be 21 years or older with a valid government-issued ID to enter any of our stores and make a purchase. We strictly enforce this policy.' },
  { q: 'What kind of products do you sell?', a: 'We offer a wide range of products including glassware, vapes and e-liquids, rolling papers, CBD products, edibles, and various smoking accessories. Check out our Featured Categories for a glimpse!' },
  { q: 'Do you offer returns or exchanges?', a: 'All sales are final. However, if you receive a defective electronic product, please bring it back with the receipt within 48 hours for an exchange.' },
  { q: 'Are you hiring?', a: 'We are always looking for passionate and knowledgeable people to join our team! Please use the contact form on this page to send us your resume and we will get back to you if there is an opening.' },
];

const FaqItem: React.FC<{ faq: {q: string, a: string}, isOpen: boolean, onClick: () => void }> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700">
      <button onClick={onClick} className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none transition-colors duration-200 hover:bg-gray-700/40">
        <span className="text-lg font-medium text-white">{faq.q}</span>
        <ChevronDownIcon className={`w-6 h-6 text-amber-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="p-6 pt-0 text-gray-300">{faq.a}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Frequently Asked Questions</h2>
          <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto rounded"></div>
        </div>
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

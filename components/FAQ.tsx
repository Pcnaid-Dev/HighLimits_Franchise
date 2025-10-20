import React, { useState } from 'react';
import { ChevronDownIcon, ClockIcon, UserCircleIcon, CubeIcon, ArrowPathIcon, BriefcaseIcon } from './icons';

const faqs = [
  { q: 'What are your store hours?', a: 'Our hours vary by location. Please select a specific location from our "Locations" section to see detailed hours for weekdays and weekends.', icon: ClockIcon, tooltip: 'Store Hours' },
  { q: 'Do you need to be a certain age to enter?', a: 'Yes, you must be 21 years or older with a valid government-issued ID to enter any of our stores and make a purchase. We strictly enforce this policy.', icon: UserCircleIcon, tooltip: 'Age Policy' },
  { q: 'What kind of products do you sell?', a: 'We offer a wide range of products including glassware, vapes and e-liquids, rolling papers, CBD products, edibles, and various smoking accessories. Check out our Featured Categories for a glimpse!', icon: CubeIcon, tooltip: 'Product Range' },
  { q: 'Do you offer returns or exchanges?', a: 'All sales are final. However, if you receive a defective electronic product, please bring it back with the receipt within 48 hours for an exchange.', icon: ArrowPathIcon, tooltip: 'Return Policy' },
  { q: 'Are you hiring?', a: 'We are always looking for passionate and knowledgeable people to join our team! Please use the contact form on this page to send us your resume and we will get back to you if there is an opening.', icon: BriefcaseIcon, tooltip: 'Careers' },
];

type FaqItemProps = {
  faq: {
    q: string;
    a: string;
    icon: React.FC<{className?: string}>;
    tooltip: string;
  };
  isOpen: boolean;
  onClick: () => void;
};

const FaqItem: React.FC<FaqItemProps> = ({ faq, isOpen, onClick }) => {
  const Icon = faq.icon;
  return (
    <div className="border-b border-gray-700">
      <button onClick={onClick} className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none transition-colors duration-200 hover:bg-gray-700/40">
        <div className="flex items-center">
          <div className="relative group">
            <Icon className="w-6 h-6 mr-4 text-amber-400 flex-shrink-0" />
            <div className="absolute bottom-full mb-2 w-auto min-w-max -translate-x-1/2 left-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-gray-700 shadow-lg rounded-md">{faq.tooltip}</span>
              <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-700 mx-auto"></div>
            </div>
          </div>
          <span className="text-lg font-medium text-white">{faq.q}</span>
        </div>
        <ChevronDownIcon className={`w-6 h-6 text-amber-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="p-6 pt-0 pl-16 text-gray-300">{faq.a}</p>
        </div>
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
          <h2 className="text-5xl font-heading text-white tracking-wider">Frequently Asked Questions</h2>
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
import React from 'react';

const categories = [
  { name: 'Glassware', image: 'https://images.unsplash.com/photo-1618231221543-ee378b2a305b?q=80&w=800' },
  { name: 'Vapes', image: 'https://images.unsplash.com/photo-1611280324223-86435c24a6e4?q=80&w=800' },
  { name: 'Rolling Papers', image: 'https://images.unsplash.com/photo-1627885793297-42211f42a2e4?q=80&w=800' },
  { name: 'CBD & Edibles', image: 'https://images.unsplash.com/photo-1598623326124-e49b82875a64?q=80&w=800' },
  { name: 'Apparel', image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=800' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1599833912141-38d58c67aa41?q=80&w=800' },
];

const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Featured Categories</h2>
          <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={`${category.image}&auto=format&fit=crop&w=800&h=600`} alt={category.name} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white tracking-wider">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

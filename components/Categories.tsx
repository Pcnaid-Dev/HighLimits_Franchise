import React from 'react';

const categories = [
  { name: 'Glassware', image: 'https://lifeflowerdispensary.com/wp-content/uploads/2021/01/blog_img4.jpg' },
  { name: 'Vapes', image: 'https://www.cloud9smokeco.com/cdn/shop/files/Disposable_vapes_Mod_600x600.png?v=1747076671' },
  { name: 'Rolling Papers', image: 'https://i0.wp.com/www.dallassmokeandvape.com/wp-content/uploads/2019/03/IMG_2842.jpeg?fit=1568%2C1131&ssl=1' },
  { name: 'CBD & Edibles', image: 'https://rhodeislandcurrent.com/wp-content/uploads/2025/06/20250606_193033-1-scaled-1-1536x1152.webp' },
  { name: 'Tobacco', image: 'https://www.buypipetobacco.com/blog/wp-content/uploads/2023/07/best-tobacco-products-online-1280x640.png' },
  { name: 'Accessories', image: 'https://i0.wp.com/arlingtonsmokeandvape.com/wp-content/uploads/2022/08/IMG_4061.jpeg?fit=1568%2C1176&ssl=1' },
];

const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-heading text-white tracking-wider">Featured Categories</h2>
          <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={category.image} alt={category.name} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-60">
                <h3 className="text-3xl font-heading text-white tracking-widest transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
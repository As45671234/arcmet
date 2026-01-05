'use client';

import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

export default function CatalogClient({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter((p) => p.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              filter === cat 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
            <div className="h-48 bg-gray-200 relative">
               <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="text-xs font-bold text-orange-500 mb-2 uppercase tracking-wide">{product.category}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-bold text-lg">{product.price}</span>
                <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors text-sm">
                  Купить
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

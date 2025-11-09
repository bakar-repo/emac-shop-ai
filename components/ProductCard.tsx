
import React, { useState } from 'react';
import { Product } from '../types';
import Icon from './Icon';

interface ProductCardProps {
  product: Product;
  onQuickView: () => void;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
        <div 
          className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center space-x-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <button 
            onClick={onQuickView} 
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
            aria-label="Quick view"
          >
            <Icon name="eye" className="h-6 w-6" />
          </button>
          <button 
            onClick={onAddToCart} 
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
            aria-label="Add to cart"
          >
            <Icon name="cart" className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{product.category}</p>
        <p className="text-xl font-bold text-gray-900 mt-4">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;

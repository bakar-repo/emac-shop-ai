
import React, { useState } from 'react';
import { Product } from '../types';
import Icon from './Icon';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCartClick = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10">
          <Icon name="close" className="h-6 w-6" />
        </button>

        <div className="md:w-1/2">
          <img src={product.imageUrl} alt={product.name} className="w-full h-64 md:h-full object-cover"/>
        </div>

        <div className="md:w-1/2 p-8 flex flex-col justify-center overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
          <p className="text-gray-500 text-sm mt-2">{product.category}</p>
          <p className="text-3xl font-light text-blue-600 my-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
          
          <div className="mt-8 flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-l-md">-</button>
              <span className="px-4 py-2 font-semibold">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-r-md">+</button>
            </div>
            <button
              onClick={handleAddToCartClick}
              className="flex-1 bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;


import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onQuickView, onAddToCart }) => {
  if (products.length === 0) {
    return <div className="text-center py-16 text-gray-500">No products found. Try adjusting your filters.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product}
          onQuickView={() => onQuickView(product)}
          onAddToCart={() => onAddToCart(product)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;

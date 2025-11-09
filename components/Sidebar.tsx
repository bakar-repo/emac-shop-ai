
import React from 'react';
import PriceRangeSlider from './PriceRangeSlider';
import { MAX_PRICE } from '../constants';

interface SidebarProps {
  sortOption: string;
  onSortChange: (option: string) => void;
  priceRange: { min: number; max: number };
  onPriceChange: (range: { min: number; max: number }) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sortOption, onSortChange, priceRange, onPriceChange }) => {
  return (
    <aside className="lg:w-1/4 xl:w-1/5 space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Sort By</h3>
        <select
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">Filter by Price</h3>
        <PriceRangeSlider
          min={0}
          max={MAX_PRICE}
          value={priceRange}
          onChange={onPriceChange}
        />
      </div>
    </aside>
  );
};

export default Sidebar;

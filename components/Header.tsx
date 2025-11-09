
import React from 'react';
import Icon from './Icon';

interface HeaderProps {
  onSearch: (term: string) => void;
  onCartClick: () => void;
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onCartClick, cartItemCount }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-gray-900 tracking-wider">
              emac-shop
            </a>
          </div>

          <div className="hidden md:flex flex-1 justify-center px-8 lg:px-16">
            <div className="relative w-full max-w-lg">
              <input
                type="search"
                placeholder="Search products..."
                onChange={(e) => onSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icon name="search" className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-gray-900 focus:outline-none transition-colors"
              aria-label="Open cart"
            >
              <Icon name="cart" className="h-7 w-7" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-blue-600 text-white text-xs font-medium flex items-center justify-center transform translate-x-1/3 -translate-y-1/3">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

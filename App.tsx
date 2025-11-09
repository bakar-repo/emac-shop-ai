import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Product, CartItem } from './types';
import { PRODUCTS, MAX_PRICE, PRODUCTS_PER_PAGE } from './constants';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import Pagination from './components/Pagination';
import QuickViewModal from './components/QuickViewModal';
import CartSidebar from './components/CartSidebar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [priceRange, setPriceRange] = useState({ min: 0, max: MAX_PRICE });
  const [currentPage, setCurrentPage] = useState(1);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setCurrentPage(1); // Reset to page 1 on new search
    }, 300); // 300ms delay

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const filteredAndSortedProducts = useMemo(() => {
    let products = PRODUCTS.filter(product =>
      product.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) &&
      product.price >= priceRange.min &&
      product.price <= priceRange.max
    );

    switch (sortOption) {
      case 'price-asc':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        products.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return products;
  }, [debouncedSearchTerm, sortOption, priceRange]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return filteredAndSortedProducts.slice(startIndex, endIndex);
  }, [filteredAndSortedProducts, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / PRODUCTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  const handleAddToCart = useCallback((product: Product, quantity: number = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  }, []);

  const handleUpdateCartQuantity = useCallback((productId: number, quantity: number) => {
    setCartItems(prevItems => {
      if (quantity === 0) {
        return prevItems.filter(item => item.id !== productId);
      }
      return prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      );
    });
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const totalCartItems = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  return (
    <div className="font-sans text-gray-800">
      <Header 
        onSearch={setSearchTerm} 
        onCartClick={() => setIsCartOpen(true)}
        cartItemCount={totalCartItems}
      />
      <main>
        <HeroSlider />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <Sidebar
              sortOption={sortOption}
              onSortChange={setSortOption}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
            />
            <div className="w-full">
              <ProductGrid 
                products={paginatedProducts} 
                onQuickView={setQuickViewProduct}
                onAddToCart={handleAddToCart}
              />
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </main>

      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
      
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onClearCart={clearCart}
      />
    </div>
  );
}

export default App;

import React, { useMemo } from 'react';
import { CartItem } from '../types';
import Icon from './Icon';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onClearCart: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, cartItems, onUpdateQuantity, onClearCart }) => {
  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold">Shopping Cart</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
              <Icon name="close" className="h-6 w-6" />
            </button>
          </div>
          
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
              <Icon name="cart" className="h-20 w-20 text-gray-300 mb-4" />
              <h3 className="text-lg font-semibold">Your cart is empty</h3>
              <p className="text-gray-500 mt-1">Looks like you haven't added anything yet.</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-start space-x-4">
                    <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md"/>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>
                      <div className="flex items-center border border-gray-200 rounded-md mt-2 w-fit">
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-l-md">-</button>
                        <span className="px-3 py-1 text-sm font-semibold">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-r-md">+</button>
                      </div>
                    </div>
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="p-6 border-t bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Subtotal</span>
                  <span className="text-xl font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors">
                  Proceed to Checkout
                </button>
                 <button onClick={onClearCart} className="w-full text-center text-red-500 font-semibold py-2 mt-2 rounded-md hover:bg-red-50 transition-colors text-sm">
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;

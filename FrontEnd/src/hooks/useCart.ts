import { useState } from 'react';
import { CartItem, Product } from '../types';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getCartTotal = (currency: 'USD' | 'LKR') => {
    return cartItems.reduce((total, item) => {
      const price = currency === 'USD' ? item.product.price.usd : item.product.price.lkr;
      return total + (price * item.quantity);
    }, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    isOpen,
    setIsOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    clearCart,
    itemCount: cartItems.reduce((total, item) => total + item.quantity, 0)
  };
};
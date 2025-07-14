import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { products } from '../data/products';
import { Product, Currency } from '../types';

interface ShopProps {
  id?: string;
  onAddToCart: (product: Product, quantity: number) => void;
  currency: Currency;
  onCurrencyToggle: () => void;
}

const Shop: React.FC<ShopProps> = ({ id, onAddToCart, currency, onCurrencyToggle }) => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [showToast, setShowToast] = useState(false);

  const updateQuantity = (productId: string, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, quantity)
    }));
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1;
    onAddToCart(product, quantity);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(currency.code === 'USD' ? 'en-US' : 'en-LK', {
      style: 'currency',
      currency: currency.code,
      minimumFractionDigits: 2
    }).format(price);
  };

  return (
    <section id={id || "shop"} className="py-20 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/30 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-lime-400 to-yellow-400 bg-clip-text text-transparent">
            Shop ElixirX
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Choose your perfect vitality companion. Each bottle is crafted with care for your wellness journey.
          </p>
          
          {/* Currency Toggle */}
          <div className="flex justify-center mb-8">
            <button
              onClick={onCurrencyToggle}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
            >
              Currency: {currency.code} {currency.symbol}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-lime-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-lime-400/20"
            >
              <div className="text-center">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <h3 className="text-2xl font-serif mb-2 text-lime-400 group-hover:text-yellow-400 transition-colors duration-300">
                  {product.name}
                </h3>
                
                <p className="text-white/70 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="text-white/60 mb-4">
                  Volume: {product.volume}
                </div>
                
                <div className="text-3xl font-bold mb-6 text-yellow-400">
                  {formatPrice(currency.code === 'USD' ? product.price.usd : product.price.lkr)}
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <button
                    onClick={() => updateQuantity(product.id, (quantities[product.id] || 1) - 1)}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  >
                    <Minus className="w-4 h-4 text-white" />
                  </button>
                  <span className="text-xl font-bold text-white min-w-[3rem] text-center">
                    {quantities[product.id] || 1}
                  </span>
                  <button
                    onClick={() => updateQuantity(product.id, (quantities[product.id] || 1) + 1)}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full py-4 bg-gradient-to-r from-lime-400 to-yellow-400 text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-lime-400 to-yellow-400 text-black px-6 py-4 rounded-full shadow-lg animate-pulse">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">✓</span>
            </div>
            <span className="font-bold">ElixirX added to your cart!</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Shop;
import React from 'react';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { CartItem, Currency } from '../types';

interface CartWidgetProps {
  cartItems: CartItem[];
  isOpen: boolean;
  onToggle: () => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  currency: Currency;
  total: number;
}

const CartWidget: React.FC<CartWidgetProps> = ({
  cartItems,
  isOpen,
  onToggle,
  onUpdateQuantity,
  onRemoveItem,
  currency,
  total
}) => {
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(currency.code === 'USD' ? 'en-US' : 'en-LK', {
      style: 'currency',
      currency: currency.code,
      minimumFractionDigits: 2
    }).format(price);
  };

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-lime-400 to-yellow-400 text-black rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-40 flex items-center justify-center border-4 border-white/20"
      >
        <ShoppingCart className="w-6 h-6" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
            {itemCount}
          </span>
        )}
      </button>

      {/* Cart Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full bg-gradient-to-br from-green-900/90 to-black/90 rounded-3xl p-8 border border-lime-400/30 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-serif text-lime-400">Your Cart</h3>
              <button
                onClick={onToggle}
                className="w-10 h-10 bg-lime-400/20 rounded-full flex items-center justify-center hover:bg-lime-400/40 transition-colors duration-300"
              >
                <X className="w-6 h-6 text-lime-400" />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="w-16 h-16 text-white/40 mx-auto mb-4" />
                <p className="text-white/60 text-lg">Your cart is empty</p>
                <p className="text-white/40">Add some ElixirX to get started!</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="text-lime-400 font-semibold">{item.product.name}</h4>
                        <p className="text-white/60 text-sm">{item.product.volume}</p>
                        <p className="text-yellow-400 font-bold">
                          {formatPrice(currency.code === 'USD' ? item.product.price.usd : item.product.price.lkr)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                        >
                          <Minus className="w-4 h-4 text-white" />
                        </button>
                        <span className="text-white font-bold min-w-[2rem] text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                        >
                          <Plus className="w-4 h-4 text-white" />
                        </button>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center hover:bg-red-500/40 transition-colors duration-300 ml-2"
                        >
                          <X className="w-4 h-4 text-red-400" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/20 pt-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-semibold text-white">Total:</span>
                    <span className="text-2xl font-bold text-yellow-400">
                      {formatPrice(total)}
                    </span>
                  </div>
                  <button className="w-full py-4 bg-gradient-to-r from-lime-400 to-yellow-400 text-black font-bold rounded-full hover:scale-105 transition-transform duration-300">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CartWidget;
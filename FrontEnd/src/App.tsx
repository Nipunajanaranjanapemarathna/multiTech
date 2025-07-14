import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Ingredients from './components/Ingredients';
import Shop from './components/Shop';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import CartWidget from './components/CartWidget';
import { useCart } from './hooks/useCart';
import { Currency } from './types';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const cart = useCart();
  const [currency, setCurrency] = useState<Currency>({
    code: 'USD',
    symbol: '$',
    rate: 1
  });

  const toggleCurrency = () => {
    setCurrency(prev => ({
      code: prev.code === 'USD' ? 'LKR' : 'USD',
      symbol: prev.code === 'USD' ? 'Rs.' : '$',
      rate: prev.code === 'USD' ? 327 : 1
    }));
  };

  const scrollToShop = () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection('shop');
  };

  const handleNavigate = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-black">
      <Navigation onNavigate={handleNavigate} activeSection={activeSection} />
      
      <div id="hero">
        <Hero onScrollToShop={scrollToShop} />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="ingredients">
        <Ingredients />
      </div>
      <Shop 
        id="shop"
        onAddToCart={cart.addToCart}
        currency={currency}
        onCurrencyToggle={toggleCurrency}
      />
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      
      {/* Floating Widgets */}
      <ChatBot />
      <CartWidget
        cartItems={cart.cartItems}
        isOpen={cart.isOpen}
        onToggle={() => cart.setIsOpen(!cart.isOpen)}
        onUpdateQuantity={cart.updateQuantity}
        onRemoveItem={cart.removeFromCart}
        currency={currency}
        total={cart.getCartTotal(currency.code)}
      />
    </div>
  );
}

export default App;
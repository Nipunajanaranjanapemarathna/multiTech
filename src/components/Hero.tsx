import React from 'react';
import { ChevronDown, Play, Sparkles } from 'lucide-react';

interface HeroProps {
  onScrollToShop: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToShop }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
   <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-[rgb(84,30,74)] to-[rgb(72,21,21)]">
  <div className="absolute inset-0 bg-[url('/hero2.jpg')] bg-cover bg-center opacity-20"></div>
  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
</div>



      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-lime-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Sparkles className="w-16 h-16 text-lime-400 animate-pulse" />
            <div className="absolute inset-0 bg-lime-400/20 rounded-full blur-lg animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-4 bg-gradient-to-r from-lime-400 via-yellow-400 to-lime-400 bg-clip-text text-transparent animate-pulse">
          ElixirX
        </h1>
        
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif mb-6 text-white/90">
          Your King Vitality Elixir
        </h2>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
          Discover the ancient secret of Ceylon's King Coconut, enhanced with tropical botanicals for ultimate vitality and wellness.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={onScrollToShop}
            className="group relative px-8 py-4 bg-gradient-to-r from-lime-400 to-yellow-400 text-black font-bold rounded-full text-lg hover:shadow-lg hover:shadow-lime-400/50 transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10">Discover ElixirX</span>
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={onScrollToShop}
            className="group relative px-8 py-4 border-2 border-lime-400 text-lime-400 font-bold rounded-full text-lg hover:bg-lime-400 hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10">Shop Now</span>
            <div className="absolute inset-0 bg-lime-400/20 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
          </button>
        </div>

        <div className="flex justify-center">
          <ChevronDown className="w-8 h-8 text-lime-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
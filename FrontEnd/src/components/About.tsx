import React from 'react';
import { Leaf, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/30 to-black"></div>
      
      {/* Coconut Tree Silhouette */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-green-900/20 to-transparent opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-lime-400 to-yellow-400 bg-clip-text text-transparent">
            About ElixirX
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Born from the ancient wisdom of Ceylon's tropical paradise, ElixirX is more than just a drink—it's a celebration of vitality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10">
            <div className="mb-8">
              <h3 className="text-2xl font-serif mb-4 text-lime-400">Our Mission</h3>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                We believe that nature holds the key to ultimate wellness. Our journey began in the lush coconut groves of Sri Lanka, where we discovered the extraordinary power of the King Coconut—a treasure that has nourished island communities for centuries.
              </p>
              <p className="text-white/80 leading-relaxed">
                Every bottle of ElixirX is crafted with reverence for tradition and innovation, bringing you the purest essence of tropical vitality in every sip.
              </p>
            </div>

            {/* Founder Quote */}
            <div className="border-l-4 border-lime-400 pl-6 relative">
              <p className="text-white/90 italic text-lg mb-4">
                "ElixirX represents our commitment to sharing Sri Lanka's natural bounty with the world. Each drop carries the energy of our tropical paradise."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">A</span>
                </div>
                <div>
                  <p className="text-lime-400 font-semibold">Arjun Perera</p>
                  <p className="text-white/60 text-sm">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-8">
            <div className="group backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-lime-400/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-xl font-semibold text-lime-400">Natural Purity</h4>
              </div>
              <p className="text-white/80">
                100% natural ingredients, no artificial additives or preservatives. Just pure tropical goodness.
              </p>
            </div>

            <div className="group backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-lime-400/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-xl font-semibold text-lime-400">Wellness Focused</h4>
              </div>
              <p className="text-white/80">
                Every ingredient is chosen for its health benefits, creating a synergy that nourishes your body and soul.
              </p>
            </div>

            <div className="group backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-lime-400/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-xl font-semibold text-lime-400">Energy & Vitality</h4>
              </div>
              <p className="text-white/80">
                Feel the difference with sustained energy that comes from nature's most powerful sources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
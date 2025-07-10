import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const pressLogos = [
    'TechCrunch', 'Forbes', 'Wellness Today', 'Natural Health', 'Tropical Living'
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/20 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-lime-400 to-yellow-400 bg-clip-text text-transparent">
            What People Say
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their wellness journey with ElixirX.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-16">
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < testimonials[currentIndex].rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].comment}"
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-lime-400"
                />
                <div className="text-left">
                  <p className="text-lime-400 font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-white/60">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-lime-400" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6 text-lime-400" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-lime-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Press Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-serif mb-8 text-lime-400">Featured In</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {pressLogos.map((logo, index) => (
              <div
                key={index}
                className="px-6 py-4 text-white/40 font-bold text-lg hover:text-lime-400 transition-colors duration-300 cursor-pointer"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
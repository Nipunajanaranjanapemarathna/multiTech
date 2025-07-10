import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ingredients } from '../data/ingredients';

const Ingredients: React.FC = () => {
  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(null);

  const openModal = (id: string) => {
    setSelectedIngredient(id);
  };

  const closeModal = () => {
    setSelectedIngredient(null);
  };

  const selectedData = ingredients.find(ing => ing.id === selectedIngredient);

  return (
    <section className="py-20 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/20 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-lime-400 to-yellow-400 bg-clip-text text-transparent">
            Premium Ingredients
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Carefully selected tropical treasures that create the perfect harmony of taste and wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.id}
              onClick={() => openModal(ingredient.id)}
              className="group relative cursor-pointer"
            >
              <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-lime-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-lime-400/20">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div 
                      className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                      style={{ backgroundColor: ingredient.color }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div 
                        className="w-24 h-24 rounded-full border-4 group-hover:scale-110 transition-transform duration-500"
                        style={{ borderColor: ingredient.color }}
                      ></div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-serif mb-4 text-lime-400 group-hover:text-yellow-400 transition-colors duration-300">
                    {ingredient.name}
                  </h3>
                  
                  <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    Click to explore the incredible benefits of this tropical superfood
                  </p>
                </div>

                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ backgroundColor: ingredient.color + '20' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedIngredient && selectedData && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full bg-gradient-to-br from-green-900/90 to-black/90 rounded-3xl p-8 border border-lime-400/30">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-lime-400/20 rounded-full flex items-center justify-center hover:bg-lime-400/40 transition-colors duration-300"
            >
              <X className="w-6 h-6 text-lime-400" />
            </button>

            <div className="text-center mb-8">
              <div 
                className="w-24 h-24 mx-auto mb-6 rounded-full border-4 animate-pulse"
                style={{ borderColor: selectedData.color }}
              ></div>
              <h3 className="text-3xl font-serif mb-4 text-lime-400">
                {selectedData.name}
              </h3>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-yellow-400 mb-4">Health Benefits:</h4>
              <ul className="space-y-3">
                {selectedData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: selectedData.color }}
                    ></div>
                    <span className="text-white/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={closeModal}
                className="px-8 py-3 bg-gradient-to-r from-lime-400 to-yellow-400 text-black font-bold rounded-full hover:scale-105 transition-transform duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Ingredients;
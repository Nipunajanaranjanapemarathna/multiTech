import React, { useState } from 'react';
import { Mail, MapPin, Phone, Instagram, Twitter, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/30 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-lime-400 to-yellow-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to start your vitality journey? We're here to help you discover the perfect ElixirX experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-serif mb-6 text-lime-400">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-lime-400/50 transition-colors duration-300"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-lime-400/50 transition-colors duration-300"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-lime-400/50 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your wellness goals..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-lime-400 to-yellow-400 text-black font-bold rounded-full hover:scale-105 transition-transform duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-serif mb-6 text-lime-400">Connect With Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-yellow-400 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-white/80 font-semibold">Email</p>
                    <p className="text-white/60">hello@elixirx.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-yellow-400 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-white/80 font-semibold">Phone</p>
                    <p className="text-white/60">+94 77 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-yellow-400 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-white/80 font-semibold">Location</p>
                    <p className="text-white/60">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-serif mb-6 text-lime-400">Follow Our Journey</h3>
              
              <div className="flex gap-4">
                <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-lime-400 hover:to-yellow-400 hover:text-black transition-all duration-300 group">
                  <Instagram className="w-6 h-6 text-lime-400 group-hover:text-black" />
                </button>
                
                <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-lime-400 hover:to-yellow-400 hover:text-black transition-all duration-300 group">
                  <Twitter className="w-6 h-6 text-lime-400 group-hover:text-black" />
                </button>
                
                <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-lime-400 hover:to-yellow-400 hover:text-black transition-all duration-300 group">
                  <Youtube className="w-6 h-6 text-lime-400 group-hover:text-black" />
                </button>
              </div>
              
              <p className="text-white/60 mt-4 text-sm">
                Join our community and stay updated on the latest wellness tips and ElixirX news!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
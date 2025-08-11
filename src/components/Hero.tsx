import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-mint to-white flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <MapPin className="text-warm-gray mr-2" size={20} />
            <span className="font-lato text-warm-gray text-xs sm:text-sm uppercase tracking-widest">
              Nairobi, Kenya
            </span>
          </div>
          
          <h1 className="font-bebas text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal mb-6 tracking-wider">
            MILES & STRIDES
          </h1>
          
          <p className="font-lato text-lg sm:text-xl md:text-2xl text-charcoal mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Kenya's premier running club where champions are made. 
            Join our community of passionate runners conquering distances together.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 px-4">
            <button className="bg-charcoal text-white px-6 sm:px-8 py-3 sm:py-4 font-lato font-bold uppercase tracking-wider hover:bg-warm-gray transition-colors duration-300 flex items-center justify-center text-sm sm:text-base">
              Join Our Pack
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-charcoal text-charcoal px-6 sm:px-8 py-3 sm:py-4 font-lato font-bold uppercase tracking-wider hover:bg-charcoal hover:text-white transition-all duration-300 text-sm sm:text-base">
              View Events
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
            <div className="text-center">
              <h3 className="font-bebas text-2xl sm:text-3xl text-charcoal mb-2">500+</h3>
              <p className="font-lato text-warm-gray uppercase text-xs sm:text-sm tracking-widest">Active Members</p>
            </div>
            <div className="text-center">
              <h3 className="font-bebas text-2xl sm:text-3xl text-charcoal mb-2">24</h3>
              <p className="font-lato text-warm-gray uppercase text-xs sm:text-sm tracking-widest">Events Per Year</p>
            </div>
            <div className="text-center">
              <h3 className="font-bebas text-2xl sm:text-3xl text-charcoal mb-2">12</h3>
              <p className="font-lato text-warm-gray uppercase text-xs sm:text-sm tracking-widest">Years Running</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
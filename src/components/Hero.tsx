import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 relative"
      style={{
        backgroundImage: 'url(/run.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center relative z-10">
          <div className="flex justify-center items-center mb-6">
            <MapPin className="text-white mr-2" size={20} />
            <span className="font-lato text-white text-xs sm:text-sm uppercase tracking-widest">
              Nairobi, Kenya
            </span>
          </div>
          
          <h1 className="font-bebas text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wider drop-shadow-lg">
            MILES & STRIDES
          </h1>
          
          <p className="font-lato text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-md">
            Kenya's premier running club where champions are made. 
            Join our community of passionate runners conquering distances together.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 px-4">
            <button className="bg-white text-charcoal px-6 sm:px-8 py-3 sm:py-4 font-lato font-bold uppercase tracking-wider hover:bg-mint transition-colors duration-300 flex items-center justify-center text-sm sm:text-base">
              Join Our Pack
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 font-lato font-bold uppercase tracking-wider hover:bg-white hover:text-charcoal transition-all duration-300 text-sm sm:text-base">
              View Events
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
            <div className="text-center">
              <h3 className="font-bebas text-2xl sm:text-3xl text-white mb-2 drop-shadow-md">500+</h3>
              <p className="font-lato text-white uppercase text-xs sm:text-sm tracking-widest drop-shadow-sm">Active Members</p>
            </div>
            <div className="text-center">
              <h3 className="font-bebas text-2xl sm:text-3xl text-white mb-2 drop-shadow-md">24</h3>
              <p className="font-lato text-white uppercase text-xs sm:text-sm tracking-widest drop-shadow-sm">Events Per Year</p>
            </div>
            <div className="text-center">
              <h3 className="font-bebas text-2xl sm:text-3xl text-white mb-2 drop-shadow-md">12</h3>
              <p className="font-lato text-white uppercase text-xs sm:text-sm tracking-widest drop-shadow-sm">Years Running</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
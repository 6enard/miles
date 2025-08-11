import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bebas text-2xl sm:text-3xl mb-4 tracking-wider">
              MILES & STRIDES
            </h3>
            <p className="font-lato text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Kenya's premier running club where champions are made. Join our community 
              of passionate runners conquering distances together across Nairobi's 
              most beautiful landscapes.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="mr-3 flex-shrink-0" size={18} />
                <span className="font-lato text-sm">Uhuru Park, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 flex-shrink-0" size={18} />
                <span className="font-lato text-sm">+254 700 123 456</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 flex-shrink-0" size={18} />
                <span className="font-lato text-sm">info@milesandstrides.ke</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bebas text-lg sm:text-xl mb-4 tracking-wider">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              <li><a href="#home" className="font-lato text-gray-300 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="font-lato text-gray-300 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#events" className="font-lato text-gray-300 hover:text-white transition-colors text-sm">Events</a></li>
              <li><a href="#membership" className="font-lato text-gray-300 hover:text-white transition-colors text-sm">Membership</a></li>
              <li><a href="#contact" className="font-lato text-gray-300 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Training Schedule */}
          <div>
            <h4 className="font-bebas text-lg sm:text-xl mb-4 tracking-wider">
              TRAINING HOURS
            </h4>
            <ul className="space-y-2 font-lato text-gray-300 text-sm">
              <li>Monday - Friday</li>
              <li>6:00 AM & 6:00 PM</li>
              <li className="pt-2">Saturday - Sunday</li>
              <li>6:00 AM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-gray mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="font-lato text-gray-300 text-sm">
            © 2025 Miles & Strides Running Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
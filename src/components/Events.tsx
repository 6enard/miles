import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Nairobi Marathon Training",
      date: "Every Saturday",
      time: "6:00 AM",
      location: "Uhuru Park",
      participants: "50+ runners",
      type: "Training",
      description: "Join our weekly long run training sessions preparing for the Nairobi Marathon."
    },
    {
      title: "Rift Valley 10K Challenge",
      date: "March 15, 2025",
      time: "7:00 AM",
      location: "Nakuru, Kenya",
      participants: "200+ expected",
      type: "Race",
      description: "Annual 10K race through the scenic Rift Valley with stunning lake views."
    },
    {
      title: "Speed Work Sessions",
      date: "Tuesdays & Thursdays",
      time: "6:00 PM",
      location: "City Stadium",
      participants: "30+ runners",
      type: "Training",
      description: "Track-based interval training to improve speed and running efficiency."
    },
    {
      title: "Trail Running Adventure",
      date: "April 20, 2025",
      time: "6:30 AM",
      location: "Ngong Hills",
      participants: "40+ expected",
      type: "Adventure",
      description: "Explore the beautiful Ngong Hills trails with experienced guides."
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Race': return 'bg-charcoal text-white';
      case 'Training': return 'bg-mint text-charcoal';
      case 'Adventure': return 'bg-warm-gray text-white';
      default: return 'bg-mint text-charcoal';
    }
  };

  return (
    <section id="events" className="py-20 bg-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-3xl sm:text-5xl md:text-6xl text-charcoal mb-6 tracking-wider px-4">
            UPCOMING EVENTS
          </h2>
          <p className="font-lato text-lg sm:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed px-4">
            Join us for exciting races, training sessions, and adventures that bring our 
            running community together while exploring Kenya's beautiful landscapes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bebas text-xl sm:text-2xl text-charcoal tracking-wide flex-1 mr-2">
                    {event.title}
                  </h3>
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-lato font-bold uppercase tracking-wider flex-shrink-0 ${getTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
                
                <p className="font-lato text-sm sm:text-base text-warm-gray mb-6 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-charcoal">
                    <Calendar className="mr-3 flex-shrink-0" size={18} />
                    <span className="font-lato text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-charcoal">
                    <Clock className="mr-3 flex-shrink-0" size={18} />
                    <span className="font-lato text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-charcoal">
                    <MapPin className="mr-3 flex-shrink-0" size={18} />
                    <span className="font-lato text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-charcoal">
                    <Users className="mr-3 flex-shrink-0" size={18} />
                    <span className="font-lato text-sm">{event.participants}</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-charcoal text-white px-4 sm:px-6 py-3 font-lato font-bold uppercase tracking-wider hover:bg-warm-gray transition-colors duration-300 text-sm sm:text-base">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-charcoal px-6 sm:px-8 py-3 sm:py-4 font-lato font-bold uppercase tracking-wider hover:bg-charcoal hover:text-white transition-all duration-300 border-2 border-charcoal text-sm sm:text-base">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
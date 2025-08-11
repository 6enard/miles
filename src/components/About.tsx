import React from 'react';
import { Users, Trophy, MapPin, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="text-charcoal" size={32} />,
      title: "Community First",
      description: "Join a supportive community of runners from all backgrounds and skill levels, united by our passion for running."
    },
    {
      icon: <Trophy className="text-charcoal" size={32} />,
      title: "Competitive Excellence",
      description: "Train with Kenya's finest runners and coaches. Our members regularly compete in national and international events."
    },
    {
      icon: <MapPin className="text-charcoal" size={32} />,
      title: "Scenic Routes",
      description: "Explore Nairobi's most beautiful running trails, from urban paths to highland escarpments with breathtaking views."
    },
    {
      icon: <Clock className="text-charcoal" size={32} />,
      title: "Flexible Training",
      description: "Multiple training sessions throughout the week to fit your schedule, from early morning to evening groups."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-3xl sm:text-5xl md:text-6xl text-charcoal mb-6 tracking-wider px-4">
            ABOUT OUR CLUB
          </h2>
          <p className="font-lato text-lg sm:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed px-4">
            Founded in the heart of Kenya's running culture, Miles and Strides brings together 
            passionate runners who believe that every stride tells a story of determination, 
            community, and achievement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="px-4">
            <h3 className="font-bebas text-2xl sm:text-3xl text-charcoal mb-6 tracking-wider">
              OUR MISSION
            </h3>
            <p className="font-lato text-sm sm:text-base text-warm-gray mb-6 leading-relaxed">
              To foster a vibrant running community that celebrates the spirit of Kenyan athletics 
              while welcoming runners of all abilities. We believe running is more than exercise—it's 
              a journey of personal growth, friendship, and collective achievement.
            </p>
            <p className="font-lato text-sm sm:text-base text-warm-gray leading-relaxed">
              Whether you're training for your first 5K or preparing for an ultramarathon, 
              our experienced coaches and supportive community will help you reach your goals 
              while having fun every step of the way.
            </p>
          </div>
          <div className="bg-mint p-4 sm:p-8 rounded-lg mx-4 lg:mx-0">
            <img 
              src="https://images.pexels.com/photos/2402926/pexels-photo-2402926.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Group of runners in Kenya" 
              className="w-full h-48 sm:h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-4 sm:p-6 hover:bg-mint transition-colors duration-300 rounded-lg">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="font-bebas text-lg sm:text-xl text-charcoal mb-3 tracking-wide">
                {feature.title}
              </h4>
              <p className="font-lato text-warm-gray text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
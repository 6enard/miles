import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="text-charcoal" size={24} />,
      title: "Location",
      details: [
        "Uhuru Park, Nairobi",
        "Kenya"
      ]
    },
    {
      icon: <Phone className="text-charcoal" size={24} />,
      title: "Phone",
      details: [
        "+254 700 123 456",
        "+254 20 123 4567"
      ]
    },
    {
      icon: <Mail className="text-charcoal" size={24} />,
      title: "Email",
      details: [
        "info@milesandstrides.ke",
        "coaching@milesandstrides.ke"
      ]
    },
    {
      icon: <Clock className="text-charcoal" size={24} />,
      title: "Training Hours",
      details: [
        "Mon-Fri: 6:00 AM & 6:00 PM",
        "Sat-Sun: 6:00 AM"
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={24} />, platform: "Facebook", href: "#" },
    { icon: <Instagram size={24} />, platform: "Instagram", href: "#" },
    { icon: <Twitter size={24} />, platform: "Twitter", href: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-3xl sm:text-5xl md:text-6xl text-charcoal mb-6 tracking-wider px-4">
            GET IN TOUCH
          </h2>
          <p className="font-lato text-lg sm:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed px-4">
            Ready to join Kenya's premier running community? Contact us to learn more 
            about membership, upcoming events, or to schedule a trial run with our group.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4">
          {/* Contact Information */}
          <div>
            <h3 className="font-bebas text-2xl sm:text-3xl text-charcoal mb-6 sm:mb-8 tracking-wider">
              CONTACT INFORMATION
            </h3>
            <div className="space-y-6 sm:space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-lato font-bold text-charcoal mb-2 text-sm sm:text-base">
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="font-lato text-warm-gray text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-12">
              <h4 className="font-bebas text-lg sm:text-xl text-charcoal mb-4 tracking-wider">
                FOLLOW US
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-white text-charcoal p-3 rounded-lg hover:bg-charcoal hover:text-white transition-colors duration-300"
                    aria-label={social.platform}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg mt-8 lg:mt-0">
            <h3 className="font-bebas text-2xl sm:text-3xl text-charcoal mb-6 sm:mb-8 tracking-wider">
              SEND US A MESSAGE
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block font-lato text-charcoal text-sm font-bold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-mint focus:outline-none focus:border-charcoal transition-colors duration-300 rounded text-sm sm:text-base"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block font-lato text-charcoal text-sm font-bold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-mint focus:outline-none focus:border-charcoal transition-colors duration-300 rounded text-sm sm:text-base"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-lato text-charcoal text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-mint focus:outline-none focus:border-charcoal transition-colors duration-300 rounded text-sm sm:text-base"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label className="block font-lato text-charcoal text-sm font-bold mb-2">
                  Subject
                </label>
                <select className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-mint focus:outline-none focus:border-charcoal transition-colors duration-300 rounded text-sm sm:text-base">
                  <option>General Inquiry</option>
                  <option>Membership Information</option>
                  <option>Event Registration</option>
                  <option>Coaching Services</option>
                </select>
              </div>
              
              <div>
                <label className="block font-lato text-charcoal text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-mint focus:outline-none focus:border-charcoal transition-colors duration-300 rounded resize-none text-sm sm:text-base"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-charcoal text-white px-4 sm:px-6 py-3 sm:py-4 font-lato font-bold uppercase tracking-wider hover:bg-warm-gray transition-colors duration-300 text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
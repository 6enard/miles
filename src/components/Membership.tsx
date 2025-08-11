import React from 'react';
import { Check, Star } from 'lucide-react';

const Membership = () => {
  const plans = [
    {
      name: "Basic Runner",
      price: "KSh 2,000",
      period: "per month",
      features: [
        "Access to group training sessions",
        "Weekly coaching tips",
        "Club running gear discount",
        "Community forum access",
        "Basic fitness assessments"
      ],
      popular: false
    },
    {
      name: "Elite Athlete",
      price: "KSh 4,500",
      period: "per month",
      features: [
        "All Basic Runner benefits",
        "Personal coaching sessions",
        "Advanced performance tracking",
        "Nutrition planning assistance",
        "Priority event registration",
        "Recovery and injury prevention support",
        "Access to elite training camps"
      ],
      popular: true
    },
    {
      name: "Family Pack",
      price: "KSh 6,000",
      period: "per month",
      features: [
        "Coverage for up to 4 family members",
        "All Basic Runner benefits for everyone",
        "Family-friendly training sessions",
        "Youth development programs",
        "Special family event discounts",
        "Flexible scheduling options"
      ],
      popular: false
    }
  ];

  return (
    <section id="membership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-3xl sm:text-5xl md:text-6xl text-charcoal mb-6 tracking-wider px-4">
            MEMBERSHIP PLANS
          </h2>
          <p className="font-lato text-lg sm:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed px-4">
            Choose the membership plan that fits your running goals and lifestyle. 
            All plans include access to our supportive community and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 px-4">
          {plans.map((plan, index) => (
            <div key={index} className={`rounded-lg shadow-lg overflow-hidden relative ${plan.popular ? 'ring-4 ring-charcoal' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-charcoal text-white px-4 py-1 rounded-full flex items-center">
                    <Star className="mr-1" size={16} />
                    <span className="font-lato text-xs font-bold uppercase tracking-wider">Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className={`p-4 sm:p-6 lg:p-8 ${plan.popular ? 'bg-mint' : 'bg-white border border-mint'}`}>
                <h3 className="font-bebas text-xl sm:text-2xl text-charcoal mb-2 tracking-wider">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="font-bebas text-2xl sm:text-3xl lg:text-4xl text-charcoal">{plan.price}</span>
                  <span className="font-lato text-warm-gray text-sm ml-2">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="text-charcoal mr-3 mt-0.5 flex-shrink-0" size={18} />
                      <span className="font-lato text-warm-gray text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full px-4 sm:px-6 py-3 sm:py-4 font-lato font-bold uppercase tracking-wider transition-all duration-300 text-sm sm:text-base ${
                  plan.popular 
                    ? 'bg-charcoal text-white hover:bg-warm-gray' 
                    : 'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
                }`}>
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-mint p-6 sm:p-8 rounded-lg text-center mx-4">
          <h3 className="font-bebas text-2xl sm:text-3xl text-charcoal mb-4 tracking-wider">
            NEW MEMBER SPECIAL
          </h3>
          <p className="font-lato text-sm sm:text-base text-warm-gray mb-6 leading-relaxed">
            Join Miles and Strides today and get your first month at 50% off any membership plan. 
            Plus, receive a complimentary club running shirt and water bottle!
          </p>
          <button className="bg-charcoal text-white px-6 sm:px-8 py-3 sm:py-4 font-lato font-bold uppercase tracking-wider hover:bg-warm-gray transition-colors duration-300 text-sm sm:text-base">
            Claim Your Discount
          </button>
        </div>
      </div>
    </section>
  );
};

export default Membership;
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Quick Launch Pack',
    price: '₹4,999',
    oldPrice: '₹7,000',
    period: 'one-time',
    badge: 'Save 28%',
    description: '🚀 Launch your business online in 7 days! Limited-time promotional offer for startups & small businesses.',
    features: [
      'Professional Website (up to 5 pages)',
      'Mobile-first Responsive Design',
      'Local SEO Setup & Google Maps',
      'Free SSL Security Certificate',
      'Social Media Integration',
      '3 Months Free Support'
    ],
    gradient: 'from-blue-500 to-cyan-500',
    popular: false
  },
  {
    name: 'Growth Accelerator',
    price: '₹11,000',
    oldPrice: '₹15,000',
    period: 'one-time',
    badge: 'Save ₹4,000',
    description: '🔥 Premium package with advanced features. Special launch discount - Limited spots available!',
    features: [
      'Premium Website (up to 10 pages)',
      'Advanced UI/UX Design & Animations',
      'Complete E-commerce Setup',
      'SEO-optimized Product Catalog',
      'Priority Support (12 months)',
      'Express Delivery (7-10 days)',
    ],
    gradient: 'from-purple-500 to-pink-500',
    popular: true
  }
];

const Pricing = () => {
  const handleSelectPlan = (planName) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const nameInput = document.querySelector('textarea[name="message"]');
      if (nameInput) {
        nameInput.value = `Hi! I'm interested in the ${planName} plan. Please tell me more!`;
        nameInput.focus();
      }
    }
  };

  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Special Launch Offers 🚀
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Limited Time Only! Get your professional website at our lowest prices ever. 
            <span className="block mt-2 text-blue-600 font-semibold">Save up to ₹4,000 on our premium packages!</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`relative bg-white rounded-2xl border-2 ${plan.popular ? 'border-purple-500 shadow-2xl' : 'border-slate-200 shadow-lg'} p-8 h-full flex flex-col`}>
                {plan.badge && (
                  <div className="absolute -top-3 -right-3">
                    <div className={`bg-gradient-to-r ${plan.gradient} text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg`}>
                      {plan.badge}
                    </div>
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${plan.gradient} p-4 mb-6`}>
                  <div className="w-full h-full bg-white rounded-lg" />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                <p className="text-slate-600 mb-6 min-h-[3rem] text-sm">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex flex-col items-center">
                    {plan.oldPrice && (
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg text-slate-400 line-through">{plan.oldPrice}</span>
                        <span className="text-xs text-red-500 font-semibold">LIMITED TIME OFFER</span>
                      </div>
                    )}
                    <div className="flex items-baseline">
                      <span className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <span className="text-slate-500 ml-2">/ {plan.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 bg-gradient-to-r ${plan.gradient} text-white rounded-full p-0.5`} />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full py-6 text-lg rounded-xl ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                      : `bg-gradient-to-r ${plan.gradient} hover:opacity-90`
                  } text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 text-lg">
            Need a custom mobile app or enterprise solution? <button onClick={() => handleSelectPlan('Custom')} className="text-blue-600 font-semibold hover:underline">Contact us</button> for a personalized quote!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
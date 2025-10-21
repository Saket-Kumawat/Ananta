import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Coffee, Rocket, Smartphone, CheckCircle } from 'lucide-react';

const serviceCategories = [
  {
    icon: Utensils,
    categoryTitle: 'Restaurant Websites',
    gradient: 'from-orange-500 to-red-500',
    services: ['Beautiful Online Menus', 'Online Ordering & Delivery', 'Table Reservation System', 'Customer Reviews'],
    highlight: true,
  },
  {
    icon: Coffee,
    categoryTitle: 'Cafe & Shop Websites',
    gradient: 'from-yellow-500 to-orange-500',
    services: ['E-commerce for Products', 'Photo Galleries', 'Loyalty Programs', 'Local SEO for Foot Traffic'],
    highlight: true,
  },
  {
    icon: Rocket,
    categoryTitle: 'Startup Websites',
    gradient: 'from-purple-500 to-pink-500',
    services: ['High-Impact Landing Pages', 'Investor-Ready Pitch Decks', 'Fast & Scalable', 'Lead Generation Forms'],
    highlight: true,
  },
  {
    icon: Smartphone,
    categoryTitle: 'Mobile App Development',
    gradient: 'from-green-500 to-teal-500',
    services: ['Android & iOS Apps', 'Food Delivery Apps', 'Booking & Service Apps', 'Push Notifications'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent" />
      
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
              Solutions for Your Business
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We create digital experiences that your customers will love.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-10`} />
              
              <div className={`relative bg-white p-8 rounded-2xl border ${category.highlight ? 'border-purple-300' : 'border-slate-200'} shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col`}>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} p-4 mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{category.categoryTitle}</h3>
                
                <ul className="space-y-3 flex-grow">
                  {category.services.map((service, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-slate-600 leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Pencil, Rocket, PartyPopper } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Step 1: Discovery Call',
    description: 'We start with a free call to understand your vision, goals, and what your business needs to succeed online.',
  },
  {
    icon: Pencil,
    title: 'Step 2: Design & Develop',
    description: 'Our team designs a beautiful, user-friendly concept and then brings it to life with clean, efficient code.',
  },
  {
    icon: Rocket,
    title: 'Step 3: Launch & SEO',
    description: 'We launch your new website, optimize it for Google, and make sure local customers can find you easily.',
  },
  {
    icon: PartyPopper,
    title: 'Step 4: Grow & Support',
    description: 'Your website is live! We provide 24/7 support and maintenance to help you grow and keep everything running smoothly.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Simple, Fast, Effective
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our process is designed to get you online and attracting customers in no time.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 hidden md:block" />
          {steps.map((step, index) => (
            <div key={index} className="relative mb-12 md:mb-20 flex items-center w-full">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-md" />
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`w-full md:w-1/2 p-6 bg-white rounded-2xl shadow-xl border border-slate-200 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:ml-auto md:pl-16 md:text-left'}`}
              >
                <div className={`mb-4 inline-block p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl ${index % 2 === 0 ? 'md:float-right md:ml-4' : 'md:float-left md:mr-4'}`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
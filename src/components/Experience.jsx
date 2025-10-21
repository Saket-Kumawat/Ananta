import React from 'react';
import { motion } from 'framer-motion';
import { Package, Clock, Wrench } from 'lucide-react';

const companies = [
  {
    name: 'Aryavrath',
    role: 'Web Development Partner',
    logo: '🏢',
  },
  {
    name: 'Code Clause',
    role: 'Software Solutions Provider',
    logo: '🔷',
  },
  {
    name: 'Code Alpha',
    role: 'App Development Consultant',
    logo: '⚡',
  },
  {
    name: 'AadharX',
    role: 'Tech Stack Integration',
    logo: '⚙️',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden bg-white">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Elite Team with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Proven Experience</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our developers have collaborated with innovative tech companies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="relative bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300 h-full text-center">
                <div className={`text-6xl mb-4 inline-block transform group-hover:scale-110 transition-transform duration-300`}>
                  {company.logo}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{company.name}</h3>
                <p className="text-blue-600">{company.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Package, label: 'Projects Delivered', value: '15+' },
            { icon: Clock, label: '24 Hours Support', value: 'Always On' },
            { icon: Wrench, label: 'Free Maintenance', value: '24/7 Service' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-slate-200"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-blue-600" />
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
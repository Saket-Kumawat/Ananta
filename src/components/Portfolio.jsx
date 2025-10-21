import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { toast } from '../components/ui/use-toast';
import { Eye } from 'lucide-react';

const projects = [
  {
    title: 'The Daily Grind Cafe',
    category: 'Cafe Website',
    description: 'An elegant website with an online ordering system and a beautiful gallery.',
  },
  {
    title: 'Jaipur Spice House',
    category: 'Restaurant Website',
    description: 'A vibrant site featuring an interactive menu and table reservation functionality.',
  },
  {
    title: 'Innovate Startup',
    category: 'Startup Landing Page',
    description: 'A sleek, modern landing page designed to capture leads and impress investors.',
  },
  {
    title: 'City Architects Jaipur',
    category: 'Portfolio Website',
    description: 'A visually stunning portfolio for an architecture firm to showcase their best work.',
  },
  {
    title: 'Royal Heritage Hotel',
    category: 'Hotel Booking Website',
    description: 'A comprehensive booking platform with real-time availability and secure payments.',
  },
  {
    title: 'QuickEats Delivery App',
    category: 'Mobile Application',
    description: 'A user-friendly food delivery app for a local startup, built for Android.',
  },
];

const Portfolio = () => {
  const handleViewProject = () => {
    toast({
      title: "🚧 Our Case Studies Are Coming Soon!",
      description: "We're busy writing up the amazing results we've achieved for our clients. Stay tuned!",
    });
  };

  return (
    <section id="portfolio" className="py-24 px-4 bg-white">
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
              Success Stories in Jaipur
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See how we've helped local businesses like yours shine online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200"
            >
              <div className="p-8">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-4">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{project.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{project.description}</p>
                <Button variant="outline" onClick={handleViewProject}>
                  <Eye className="mr-2 h-4 w-4" /> View Project
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

const Hero = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                For Jaipur's Local Businesses
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Get Your Business
              </span>
              <br />
              <span className="text-slate-900">
                Online, Beautifully.
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              We build stunning, affordable websites and apps for restaurants, cafes, and startups in Jaipur. Let's attract more customers together!
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button 
                onClick={() => handleScrollTo('contact')}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <a href="tel:+919928219988" className="call-now-button relative inline-flex items-center justify-center p-0.5 rounded-xl overflow-hidden group">
                <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="relative inline-flex items-center gap-3 bg-white text-slate-800 px-6 py-4 rounded-lg group-hover:bg-opacity-90 transition-all duration-200">
                  <PhoneCall className="w-5 h-5 text-blue-600" />
                  <div className="text-left">
                    <span className="block text-xs text-slate-500">Growth starts with a call.</span>
                    <span className="font-semibold">CALL NOW</span>
                  </div>
                </span>
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">15+</div>
                <div className="text-sm text-slate-600">Happy Local Clients</div>
              </div>
              <div className="w-px h-12 bg-slate-300" />
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-slate-600">Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-slate-300" />
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-slate-600">Support</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-30 animate-pulse" />
              <img class="relative rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500" alt="A vibrant cafe in Jaipur with customers enjoying their time" src="https://images.unsplash.com/photo-1679025902816-3428b9e52013" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { Target, DollarSign, Clock, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Perfectionist Approach',
    description: 'We obsess over every detail. Your project gets our complete dedication until it\'s absolutely perfect for your customers.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: DollarSign,
    title: 'Affordable for Jaipur',
    description: 'Premium quality doesn\'t mean premium prices. We offer the best rates for local businesses without compromising on excellence.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your time and deadlines. Our proven process ensures we launch your project on schedule, every single time.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Local Support',
    description: '24/7 professional maintenance and support. As a local partner, we\'re always here when you need us.',
    color: 'from-purple-500 to-pink-500'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="absolute inset-0 opacity-30">
        <div className={`absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl`} />
        <div className={`absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl`} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Local Partner
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Ananta Studio?
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We combine world-class expertise with a deep understanding of the Jaipur market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 h-full">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-4 mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Commitment to You</h3>
              <p className="text-blue-100 mb-6 text-lg">
                We don't just build websites. We build lasting partnerships to ensure your digital success for years to come.
              </p>
              <div className="space-y-3">
                {[
                  'Free consultation and project planning',
                  'Transparent pricing with no hidden costs',
                  'Regular updates throughout development',
                  'Post-launch support and training'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-300 flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img class="rounded-2xl shadow-2xl w-full h-auto" alt="Two professionals shaking hands in a modern office" src="https://images.unsplash.com/photo-1686771416282-3888ddaf249b" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
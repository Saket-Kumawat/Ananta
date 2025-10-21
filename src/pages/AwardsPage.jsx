import React from 'react';

const awards = [
  {
    title: 'Top Web Studio in Jaipur 2025',
    org: 'Jaipur Business Awards',
    desc: 'Recognized for outstanding results and client satisfaction.'
  },
  {
    title: 'Best Customer Support',
    org: 'India Digital Excellence',
    desc: 'Awarded for our 24/7 dedication to client success.'
  },
  {
    title: 'Fastest Project Delivery',
    org: 'Startup India',
    desc: 'Honored for launching high-quality sites in record time.'
  }
];

const AwardsPage = () => (
  <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-blue-100 min-h-screen">
    <div className="container mx-auto max-w-3xl text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-purple-900">Our Awards & Recognition</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {awards.map((a, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <div className="text-2xl font-bold text-purple-700 mb-2">🏆</div>
            <div className="font-bold text-lg text-purple-800 mb-1">{a.title}</div>
            <div className="text-slate-600 mb-1">{a.org}</div>
            <div className="text-slate-500 text-sm">{a.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AwardsPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageSquare } from 'lucide-react';

const Footer = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Ananta Studio</h3>
            <p className="text-slate-400">
              At Ananta, we specialize in website development in Jaipur, providing complete solutions for both websites and mobile app design to grow your business.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => handleScrollTo('services')} className="hover:text-white transition-colors">Restaurant Websites</button></li>
              <li><button onClick={() => handleScrollTo('services')} className="hover:text-white transition-colors">Cafe & Shop Websites</button></li>
              <li><button onClick={() => handleScrollTo('services')} className="hover:text-white transition-colors">Startup Websites</button></li>
              <li><button onClick={() => handleScrollTo('services')} className="hover:text-white transition-colors">Mobile App Development</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => handleScrollTo('why-choose-us')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => handleScrollTo('portfolio')} className="hover:text-white transition-colors">Portfolio</button></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><button onClick={() => handleScrollTo('contact')} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="mailto:team@anantastudio.space" className="hover:text-white transition-colors">team@anantastudio.space</a></li>
              <li><a href="tel:+919928219988" className="hover:text-white transition-colors">+91 99282 19988</a></li>
              <li>Jaipur, Rajasthan, India</li>
            </ul>
            <a 
              href="https://wa.me/919928219988?text=Hello%20Ananta%20Studio!%20I'm%20interested%20in%20your%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> in India
          </p>
          <p className="text-slate-500 text-sm mt-2">
            © {new Date().getFullYear()} Ananta Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
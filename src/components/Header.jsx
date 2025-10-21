import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { cn } from "../lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      // Navigate to home and then scroll
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' },
  ];

  const MobileMenu = () => (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-40"
        >
          <div className="container mx-auto flex flex-col items-start gap-4 p-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleScrollTo(link.id)}
                className="font-semibold text-slate-700 hover:text-blue-600 transition-colors w-full text-left py-2"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleScrollTo('contact')}
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            >
              Get a Free Quote
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled || isMenuOpen ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" onClick={() => handleScrollTo('hero')} className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ananta Studio
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleScrollTo(link.id)}
                className="font-semibold text-slate-700 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+919928219988" className="flex items-center gap-2 font-semibold text-slate-700">
              <Phone className="w-4 h-4 text-blue-600" />
              <div className="text-sm">
                <span className="block text-slate-500 text-xs">Free Consultation</span>
                +91 99282 19988
              </div>
            </a>
            <Button
              onClick={() => handleScrollTo('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              Get a Free Quote
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-800">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      <MobileMenu />
    </header>
  );
};

export default Header;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from './ui/use-toast';
    
import { Mail, Phone, MapPin, Send } from 'lucide-react';
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [messages, setMessages] = useLocalStorage('contactMessages', []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form fields
    if (!formData.name.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your name.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Message Required",
        description: "Please enter your message.",
        variant: "destructive"
      });
      return;
    }

    // Show loading toast
    toast({
      title: "Sending...",
      description: "Please wait while we process your message."
    });

    try {
      // Save to local storage
      const newMessage = {
        ...formData,
        id: Date.now(),
        submittedAt: new Date().toISOString()
      };
      setMessages([...messages, newMessage]);

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Show success message
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "We'll get back to you within 24 hours.",
        variant: "default"
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Let's build something amazing together. Get in touch with us today for a free, no-obligation quote!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">Full Name *</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="bg-white/10 border-white/20 text-white placeholder:text-slate-400" required />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">Email Address</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" className="bg-white/10 border-white/20 text-white placeholder:text-slate-400" />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white mb-2 block">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="bg-white/10 border-white/20 text-white placeholder:text-slate-400" />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">Your Message *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your restaurant, cafe, or startup idea..." rows={5} className="bg-white/10 border-white/20 text-white placeholder:text-slate-400" required />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  disabled={!formData.name || !formData.email || !formData.message}
                >
                  {formData.name && formData.email && formData.message ? (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  ) : (
                    <>
                      Please Fill Required Fields
                      <span className="ml-2">*</span>
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 p-3 flex-shrink-0">
                    <Mail className="w-full h-full text-white" />
                  </div>
                  <div>
                    <div className="text-slate-300 text-sm mb-1">Email Us</div>
                    <a href="mailto:team@anantastudio.space" className="text-white font-semibold hover:text-blue-300 transition-colors">team@anantastudio.space</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-3 flex-shrink-0">
                    <Phone className="w-full h-full text-white" />
                  </div>
                  <div>
                    <div className="text-slate-300 text-sm mb-1">Call Us</div>
                    <a href="tel:+919928219988" className="text-white font-semibold hover:text-purple-300 transition-colors">+91 99282 19988</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 p-3 flex-shrink-0">
                    <MapPin className="w-full h-full text-white" />
                  </div>
                  <div>
                    <div className="text-slate-300 text-sm mb-1">Visit Us</div>
                    <p className="text-white font-semibold">Jaipur, Rajasthan, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Why Work With Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Free initial consultation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>24-hour response time</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Transparent project timeline</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Dedicated project manager</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
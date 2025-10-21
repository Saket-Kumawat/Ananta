
import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppBubble = () => {
  const phoneNumber = '+919928219988'; // Replace with your WhatsApp number
  const message = "Hello Ananta Studio! I'm interested in your services."; // Optional pre-filled message

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={openWhatsApp}
      className="fixed bottom-8 right-8 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg cursor-pointer z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    </motion.div>
  );
};

export default WhatsAppBubble;

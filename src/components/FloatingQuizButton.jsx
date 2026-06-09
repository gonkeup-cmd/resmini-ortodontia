import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

const FloatingQuizButton = () => {
  const whatsappNumber = "5553984746894";
  const message = "Olá! Gostaria de agendar uma consulta para avaliar meu alinhamento de dentes.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const handleWhatsAppRedirect = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[9999]"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
    >
      {/* Pulse Effect Ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366] pointer-events-none"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Button */}
      <motion.button
        id="floatingWhatsAppButton"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleWhatsAppRedirect}
        className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#25D366] text-white shadow-2xl hover:shadow-3xl transition-shadow border-2 border-white/20 cursor-pointer active:scale-95"
        aria-label="Avaliar meu alinhamento"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <HelpCircle className="w-8 h-8 md:w-10 md:h-10 stroke-[2.5px]" />
        
        {/* Subtle inner glow/gradient overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-white/20 pointer-events-none" />
      </motion.button>
    </motion.div>
  );
};

export default FloatingQuizButton;
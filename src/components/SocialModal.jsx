import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.9999 12.2452C21.9999 11.4927 21.9363 10.7852 21.8238 10.1045H12.2188V14.072H17.7563C17.5513 15.2977 16.9238 16.3627 15.9963 17.022L16.0213 17.0045L18.9138 19.3495L18.9488 19.3364C20.8813 17.5595 21.9999 15.0995 21.9999 12.2452Z" fill="#4285F4"/>
    <path d="M12.2188 22.0002C15.1413 22.0002 17.6113 21.0114 19.3488 19.3364L16.0213 17.0045C15.0413 17.647 13.7263 18.0614 12.2188 18.0614C9.40375 18.0614 7.02875 16.1514 6.18375 13.6827L6.08625 13.6932L3.08125 16.1245L3.06375 16.142C4.79375 19.5552 8.24125 22.0002 12.2188 22.0002Z" fill="#34A853"/>
    <path d="M6.18375 13.6825C5.95375 12.9818 5.82125 12.2386 5.82125 11.4748C5.82125 10.711 5.95375 9.96775 6.17625 9.267L6.17125 9.25325L3.10625 6.79325L3.06375 6.811C2.38875 8.1695 2 9.7545 2 11.4748C2 13.195 2.38875 14.78 3.06375 16.142L6.18375 13.6825Z" fill="#FBBC05"/>
    <path d="M12.2188 5.93864C13.8038 5.93864 15.2413 6.48614 16.4213 7.59591L19.4113 4.60591C17.6038 2.91864 15.1413 2 12.2188 2C8.24125 2 4.79375 4.445 3.06375 6.811L6.17625 9.267C7.02875 6.79818 9.40375 5.93864 12.2188 5.93864Z" fill="#EA4335"/>
  </svg>
);


const SocialModal = ({ isOpen, onClose }) => {
  const googleMapsUrl = "https://www.google.com/maps/place/Dentista+Matheus+Resmini+Ortodontia+Rio+Grande/@-32.0339075,-52.0989882,17z/data=!3m1!4b1!4m6!3m5!1s0x95119d72105801ef:0x8f0d058a6fee30de!8m2!3d-32.0339121!4d-52.0964133!16s%2Fg%2F11fnw0wrwf?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D";
  const instagramUrl = "https://www.instagram.com/resminiortodontia/";

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 rounded-full text-gray-400 hover:text-gray-800 hover:bg-gray-100"
              onClick={onClose}
            >
              <X size={24} />
            </Button>
            
            <h2 className="text-2xl font-bold text-dark mb-2">Onde você quer nos encontrar?</h2>
            <p className="text-text-secondary mb-8">Escolha uma opção para continuar.</p>

            <div className="flex flex-col gap-4">
                {/* Google Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleLinkClick(googleMapsUrl)}
                  className="group relative w-full h-14 px-6 text-lg font-semibold text-white rounded-full overflow-hidden"
                >
                  <motion.div className="absolute inset-0 bg-gray-800" />
                  <motion.div className="absolute inset-0 flex items-center justify-center">
                    <GoogleIcon />
                    <span className="ml-2">Ver no Google Maps</span>
                  </motion.div>
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                    whileHover={{ clipPath: 'circle(150% at 50% 50%)' }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute w-1/2 h-full bg-[#4285F4] left-0"></div>
                    <div className="absolute w-1/2 h-full bg-[#34A853] left-1/2"></div>
                    <div className="absolute w-1/2 h-1/2 bg-[#FBBC05] top-0 left-0"></div>
                    <div className="absolute w-1/2 h-1/2 bg-[#EA4335] top-1/2 left-1/2"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin className="mr-2" />
                      <span>Ver no Google Maps</span>
                    </div>
                  </motion.div>
                </motion.button>
              
                {/* Instagram Button */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleLinkClick(instagramUrl)}
                  className="w-full h-14 px-6 text-lg font-semibold text-white rounded-full instagram-gradient"
                >
                  <div className="flex items-center justify-center">
                    <Instagram className="mr-2" />
                    <span>Seguir no Instagram</span>
                  </div>
                </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialModal;
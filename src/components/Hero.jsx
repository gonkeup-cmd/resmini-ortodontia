import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronDown, Award } from 'lucide-react';
import { useQuiz } from '@/contexts/QuizContext';

const Hero = () => {
  const { openQuiz } = useQuiz();

  return (
    <>
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1694185752018-2ff397cb99b4"
            alt="Paciente sorrindo com tratamento ortodôntico moderno"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#00BCD4]/90 via-[#2563EB]/80 to-[#1E40AF]/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 flex flex-col items-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30 max-w-[90vw]"
            >
              <Award className="w-5 h-5 flex-shrink-0" />
              <span className="text-base font-semibold text-center leading-tight">
                20+ anos de experiência em Ortodontia
              </span>
            </motion.div>

            {/* SEO Optimized H1 */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Alinhamento de Dentes<br className="hidden md:block"/> Perfeito e Definitivo
            </h1>

            {/* SEO Optimized Tagline */}
            <p className="text-lg md:text-2xl text-white/95 font-light max-w-3xl mx-auto">
              Transforme seu sorriso com a segurança de quem já atendeu mais de 2.000 pacientes. Tecnologia de ponta com aparelho invisível ou fixo.
            </p>

            {/* CTA Button - Single Action */}
            <div className="flex justify-center pt-8 w-full">
              <div className="flex flex-col gap-2 w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openQuiz}
                  className="px-8 py-5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg font-bold rounded-xl shadow-2xl transition-all duration-200 w-full sm:min-w-[320px]"
                >
                  Avaliar meu alinhamento
                </motion.button>
                <span className="text-white/90 text-sm font-medium drop-shadow-md">✨ Teste 100% gratuito e rápido</span>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
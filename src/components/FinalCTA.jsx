import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useQuiz } from '@/contexts/QuizContext';

const FinalCTA = () => {
  const { openQuiz } = useQuiz();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#00BCD4] via-[#2563EB] to-[#1E40AF] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Pronto para transformar
            <br />
            seu sorriso?
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
            Não adie mais o sorriso dos seus sonhos. Descubra agora qual o tratamento ideal para você sem compromisso.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center pt-6 gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openQuiz}
              className="px-12 py-6 bg-white text-[#2563EB] text-xl font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-200 w-full sm:w-auto flex items-center justify-center gap-2 min-w-[300px]"
            >
              <Sparkles className="w-6 h-6" />
              Avaliar meu alinhamento
            </motion.button>
            
            <p className="text-white/80 text-sm font-medium">
              🔒 Análise segura e sem compromisso
            </p>
          </div>

          {/* Trust Badge */}
          <div className="pt-8 border-t border-white/20 mt-8">
            <p className="text-white/90 font-medium text-base">
              Junte-se a mais de 2.000 pacientes satisfeitos em Rio Grande/RS
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
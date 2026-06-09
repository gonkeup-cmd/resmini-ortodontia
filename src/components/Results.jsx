import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Results = () => {
  const benefits = [
    'Melhora da autoestima',
    'Correção da mordida',
    'Prevenção de problemas futuros',
    'Alinhamento estético',
    'Facilita higienização',
    'Reduz dores na ATM'
  ];

  return (
    <section id="resultados" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B2838] mb-4">
            Benefícios do Tratamento Ortodôntico
          </h2>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
            Descubra as vantagens de um sorriso alinhado e saudável para sua vida.
            Transforme sua saúde bucal e sua autoestima!
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Before/After Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              className="w-full h-full object-cover"
              alt="Comparação antes e depois do tratamento ortodôntico"
             src="https://images.unsplash.com/photo-1620775997780-a01e050a9db4" />
          </motion.div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-[#1B2838] mb-8">
              Descubra o que um sorriso alinhado pode fazer por você
            </h3>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00BFA6] to-[#2E6BFF] flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#1B2838] font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Results;
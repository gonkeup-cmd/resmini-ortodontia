import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, ScanFace, Wrench, SmilePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsApp } from '@/utils/whatsapp';

const TreatmentProcess = () => {

  const steps = [
    {
      icon: ClipboardList,
      title: "1. Avaliação Gratuita",
      description: "Entendemos sua necessidade e realizamos o exame clínico inicial.",
    },
    {
      icon: ScanFace,
      title: "2. Planejamento Digital",
      description: "Escaneamento 3D para traçar o plano perfeito para seu sorriso.",
    },
    {
      icon: Wrench,
      title: "3. Instalação",
      description: "Colocação do aparelho fixo ou entrega dos seus alinhadores.",
    },
    {
      icon: SmilePlus,
      title: "4. Sorriso Novo",
      description: "Acompanhamento até o resultado final e sua satisfação total.",
    }
  ];

  return (
    <section id="processo" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como funciona?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Simples, rápido e organizado. Veja como será sua jornada.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 text-[#00BCD4] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-xl">{step.title}</h3>
                <p className="text-gray-500 leading-snug">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={WhatsApp.openAgendar}
            className="px-10 py-6 rounded-xl text-lg font-bold bg-[#2563EB] hover:bg-[#1d4ed8] text-white shadow-lg hover:shadow-xl transition-all min-w-[280px]"
          >
            Avaliar meu alinhamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentProcess;
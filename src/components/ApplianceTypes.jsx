import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsApp } from '@/utils/whatsapp';

const ApplianceTypes = () => {

  const appliances = [
    {
      title: "Alinhador Invisível",
      description: "Discreto, removível e confortável. A melhor tecnologia mundial para quem exige estética máxima.",
      benefits: ["Transparente e imperceptível", "Remova para comer", "Sem fios machucando"],
      duration: "6 a 18 meses",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlight: true
    },
    {
      title: "Aparelho Estético",
      description: "A eficiência do aparelho fixo com a discrição da porcelana/safira que se camufla no dente.",
      benefits: ["Alta resistência", "Não mancha", "Excelente custo-benefício"],
      duration: "12 a 24 meses",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlight: false
    },
    {
      title: "Aparelho Fixo Metálico",
      description: "O modelo clássico, robusto e extremamente eficiente para correções de alta complexidade.",
      benefits: ["Máxima durabilidade", "Menor investimento", "Resultado garantido"],
      duration: "18 a 30 meses",
      image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-white" id="tipos-aparelho">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Opções de Tratamento
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trabalhamos apenas com materiais de primeira linha para garantir seu resultado.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {appliances.map((appliance, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`rounded-2xl overflow-hidden border ${appliance.highlight ? 'border-[#00BCD4] shadow-xl ring-2 ring-[#00BCD4]/20' : 'border-gray-200 shadow-lg'} bg-white flex flex-col h-full`}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={appliance.image} 
                  alt={appliance.title}
                  className="w-full h-full object-cover"
                />
                {appliance.highlight && (
                  <div className="absolute top-4 right-4 bg-[#00BCD4] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    MAIS PROCURADO
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{appliance.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{appliance.description}</p>
                
                <div className="mb-6 space-y-2 flex-grow">
                  {appliance.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00BCD4] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100">
                  <Button 
                    onClick={WhatsApp.openAgendar}
                    variant={appliance.highlight ? "default" : "outline"}
                    className={`w-full py-6 text-base font-bold ${appliance.highlight ? 'bg-gradient-to-r from-[#00BCD4] to-[#2563EB] hover:opacity-90 text-white border-0' : 'border-2 border-[#00BCD4] text-[#00BCD4] hover:bg-[#00BCD4]/5'}`}
                  >
                    Agendar avaliação gratuita
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplianceTypes;
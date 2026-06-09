import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, HeartHandshake, Users } from 'lucide-react';

const WhyChooseResmini = () => {
  const features = [
    {
      icon: Award,
      title: "20+ Anos de Experiência",
      description: "Segurança total no seu tratamento com quem é referência em ortodontia há mais de duas décadas."
    },
    {
      icon: Users,
      title: "2.000+ Sorrisos Transformados",
      description: "Milhares de casos de sucesso comprovados. Sua satisfação é nossa prioridade absoluta."
    },
    {
      icon: Zap,
      title: "Tecnologia de Ponta",
      description: "Planejamento 100% digital e escaneamento 3D para resultados mais rápidos e precisos."
    },
    {
      icon: HeartHandshake,
      title: "Atendimento Humanizado",
      description: "Você não é apenas um número. Cuidamos de você com atenção, respeito e exclusividade."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Por que Escolher a Resmini?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Não entregue seu sorriso para qualquer um. Escolha experiência, tecnologia e resultado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 shadow-sm">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseResmini;
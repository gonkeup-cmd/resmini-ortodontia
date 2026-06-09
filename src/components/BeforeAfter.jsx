import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const BeforeAfter = () => {
  const cases = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1562330743-d471dd7e6fff',
      title: 'Alinhamento com Aparelho de Safira',
      description: 'Correção de apinhamento dental com resultados em 18 meses'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1620775997780-a01e050a9db4',
      title: 'Alinhadores Invisíveis',
      description: 'Tratamento discreto com transformação completa em 12 meses'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1619987614890-4797e713fb03',
      title: 'Correção de Mordida',
      description: 'Melhora funcional e estética com ortodontia moderna'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00BCD4]/10 rounded-full mb-4">
            <Star className="w-5 h-5 text-[#00BCD4] fill-[#00BCD4]" />
            <span className="text-[#00BCD4] font-semibold text-sm">
              Resultados Comprovados
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transformações Reais
          </h2>
          <p className="text-xl text-gray-600">
            Veja os resultados alcançados por nossos pacientes
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    {caseItem.title}
                  </h3>
                  <p className="text-sm text-white/90">
                    {caseItem.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-[#00BCD4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-600 mt-12 text-lg"
        >
          * Resultados reais dos nossos pacientes. Cada caso é único e os resultados podem variar.
        </motion.p>
      </div>
    </section>
  );
};

export default BeforeAfter;
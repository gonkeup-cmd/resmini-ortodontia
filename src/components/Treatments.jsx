import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gem, Grid3x3, Baby, Smile, ShieldCheck, Star } from 'lucide-react';

const Treatments = () => {
  const treatments = [
    {
      id: 1,
      icon: Sparkles,
      title: 'Alinhadores Invisíveis',
      description: 'O que há de mais moderno na ortodontia. Alinhadores transparentes, removíveis e digitais. Ideal para quem busca estética absoluta e conforto.',
      featured: true,
      color: '#00BCD4'
    },
    {
      id: 2,
      icon: Gem,
      title: 'Aparelho Estético de Safira',
      description: 'Brackets de porcelana ou safira que se misturam à cor do dente. Alta resistência com discrição superior aos aparelhos metálicos.',
      featured: true,
      color: '#2563EB'
    },
    {
      id: 3,
      icon: Grid3x3,
      title: 'Aparelho Fixo Metálico',
      description: 'O modelo tradicional, robusto e eficiente para todos os tipos de maloclusão. Excelente custo-benefício para correções complexas.',
      featured: false,
      color: '#6B7280'
    },
    {
      id: 4,
      icon: Baby,
      title: 'Ortopedia Funcional',
      description: 'Tratamento preventivo e interceptativo para crianças, guiando o crescimento ósseo facial para evitar problemas futuros.',
      featured: false,
      color: '#F59E0B'
    },
    {
      id: 5,
      icon: Smile,
      title: 'Clareamento Dental',
      description: 'Procedimento seguro para deixar seus dentes mais brancos e radiantes após ou durante o tratamento ortodôntico.',
      featured: false,
      color: '#10B981'
    },
    {
      id: 6,
      icon: ShieldCheck,
      title: 'Profilaxia e Prevenção',
      description: 'Limpeza profissional e acompanhamento para manter sua saúde bucal impecável durante todo o uso do aparelho.',
      featured: false,
      color: '#8B5CF6'
    }
  ];

  return (
    <section id="tratamentos" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#00BCD4] font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Tratamentos Ortodônticos Disponíveis
          </h2>
          <p className="text-xl text-gray-600">
            Soluções personalizadas em aparelho invisível, estético e fixo para transformar seu sorriso.
          </p>
        </motion.div>

        {/* Treatment Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group ${
                treatment.featured 
                  ? 'md:col-span-1 lg:col-span-1' 
                  : ''
              }`}
            >
              <div
                className={`h-full p-8 rounded-2xl transition-all duration-300 ${
                  treatment.featured
                    ? 'bg-gradient-to-br from-white to-gray-50 border-2 shadow-2xl hover:shadow-3xl'
                    : 'bg-white border border-gray-200 shadow-lg hover:shadow-2xl'
                }`}
                style={{
                  borderColor: treatment.featured ? treatment.color : undefined
                }}
              >
                {/* Featured Badge */}
                {treatment.featured && (
                  <div className="absolute -top-3 -right-3">
                    <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-[#00BCD4] to-[#2563EB] text-white text-xs font-bold rounded-full shadow-lg">
                      <Star className="w-3 h-3" />
                      DESTAQUE
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${treatment.color}20` }}
                >
                  <treatment.icon className="w-8 h-8" style={{ color: treatment.color }} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {treatment.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {treatment.description}
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <a href="#tipos-aparelho" className="text-sm font-semibold hover:underline flex items-center gap-1" style={{ color: treatment.color }}>
                    Saiba mais <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
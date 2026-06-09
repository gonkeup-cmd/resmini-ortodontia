import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Nossa Missão',
      description: 'Promover saúde bucal e autoestima através de tratamentos ortodônticos de excelência.'
    },
    {
      icon: Eye,
      title: 'Nossa Visão',
      description: 'Ser referência regional em ortodontia, reconhecida pela qualidade e inovação.'
    },
    {
      icon: Heart,
      title: 'Nossos Valores',
      description: 'Ética, compromisso, inovação e respeito em cada atendimento.'
    },
    {
      icon: Users,
      title: 'Nossa Equipe',
      description: 'Profissionais especializados, atualizados e dedicados ao seu sorriso.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-slate-50">
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
            Cuidando de Sorrisos há Mais de 15 Anos
          </h2>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
            A Resmini Ortodontia nasceu do sonho de transformar vidas através do sorriso, 
            unindo tecnologia moderna e atendimento acolhedor.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              className="w-full h-full object-cover"
              alt="Consultório odontológico moderno da Resmini Ortodontia"
             src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-[#1B2838] mb-6">
              Excelência em Ortodontia e Odontologia
            </h3>
            <p className="text-[#64748B] mb-6 leading-relaxed">
              Com mais de 15 anos de experiência, nossa clínica se dedica a oferecer 
              tratamentos ortodônticos de alta qualidade, combinando especialização técnica 
              com um atendimento verdadeiramente humanizado.
            </p>
            <p className="text-[#64748B] mb-8 leading-relaxed">
              Cada paciente é único, e por isso desenvolvemos planos de tratamento 
              personalizados que respeitam suas necessidades, expectativas e estilo de vida.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00BFA6] to-[#2E6BFF] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <span className="font-semibold text-[#1B2838] block">Tecnologia de Ponta</span>
                  <span className="text-[#64748B] text-sm">Equipamentos modernos para diagnósticos precisos e tratamentos eficazes</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00BFA6] to-[#2E6BFF] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <span className="font-semibold text-[#1B2838] block">Atendimento Humanizado</span>
                  <span className="text-[#64748B] text-sm">Cuidado personalizado e acolhedor em todas as etapas do tratamento</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00BFA6] to-[#2E6BFF] flex items-center justify-center mb-4">
                <value.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h4 className="font-semibold text-lg text-[#1B2838] mb-2">{value.title}</h4>
              <p className="text-[#64748B] text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
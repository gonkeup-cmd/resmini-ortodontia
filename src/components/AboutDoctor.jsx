import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Heart, Users } from 'lucide-react';

const AboutDoctor = () => {
  const badges = [
    { icon: Award, label: 'CRO-RS 15394', color: '#00BCD4' },
    { icon: GraduationCap, label: 'Especialista em Ortodontia', color: '#2563EB' },
    { icon: Users, label: '20+ anos de experiência', color: '#00BCD4' },
    { icon: Heart, label: '2000+ sorrisos transformados', color: '#2563EB' }
  ];

  return (
    <section id="about-doctor" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://horizons-cdn.hostinger.com/a1852232-cb5b-424b-b6b1-2ece7b11a5af/2ce97406cd4460b969a3e16a87c3e993.webp"
                alt="Dr. Matheus Resmini em jaleco branco em frente ao logo da clínica Resmini"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00BCD4]/20 to-transparent" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#00BCD4]/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <span className="text-[#00BCD4] font-semibold text-sm uppercase tracking-wider">
                Conheça o especialista
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                Dr. Matheus Resmini
              </h2>
            </div>

            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Especialista em Ortodontia desde 2008, dedico-me exclusivamente a transformar sorrisos há mais de 15 anos. 
              </p>
              <p>
                Formado pela UFPel em 2005, acredito que cada sorriso é único e merece um tratamento personalizado. 
                A gente trabalha com tecnologia de ponta, mas o mais importante é você se sentir acolhido e bem cuidado durante toda a jornada.
              </p>
              <p>
                Vamos juntos encontrar a melhor solução para o seu sorriso? Seja com alinhadores invisíveis, aparelhos estéticos ou ortodontia tradicional, 
                o importante é você se sentir confiante e feliz com o resultado!
              </p>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md border border-gray-100"
                >
                  <badge.icon className="w-6 h-6" style={{ color: badge.color }} />
                  <span className="text-sm font-medium text-gray-700">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
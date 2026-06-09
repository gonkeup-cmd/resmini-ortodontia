import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      rating: 5,
      text: 'Dr. Matheus é incrível! Tratamento com alinhadores invisíveis foi perfeito. Atendimento humanizado e resultados além das minhas expectativas. Recomendo muito!',
      date: '2 meses atrás'
    },
    {
      id: 2,
      name: 'João Santos',
      rating: 5,
      text: 'Profissional extremamente competente e atencioso. Fiz meu tratamento ortodôntico com aparelho de safira e o resultado ficou excelente. Equipe nota 10!',
      date: '4 meses atrás'
    },
    {
      id: 3,
      name: 'Ana Paula Costa',
      rating: 5,
      text: 'Melhor ortodontista de Rio Grande! Dr. Matheus explica tudo com clareza e sempre está disponível para tirar dúvidas. Meu sorriso transformou completamente!',
      date: '6 meses atrás'
    },
    {
      id: 4,
      name: 'Carlos Oliveira',
      rating: 5,
      text: 'Excelente profissional! Tratamento impecável do início ao fim. Clínica moderna, equipamentos de ponta e um atendimento que faz toda diferença. Super recomendo!',
      date: '1 ano atrás'
    },
    {
      id: 5,
      name: 'Fernanda Lima',
      rating: 5,
      text: 'Dr. Matheus é muito atencioso e cuidadoso. Fiz ortodontia para minha filha e o resultado foi maravilhoso. Profissional dedicado que realmente se importa com os pacientes!',
      date: '8 meses atrás'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#00BCD4]/5 to-[#2563EB]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-gray-700 font-semibold ml-2">5.0 no Google</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O que nossos pacientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Avaliações reais de quem já transformou o sorriso conosco
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].date}
                  </p>
                </div>

                {/* Google Badge */}
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Google</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-[#00BCD4]' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
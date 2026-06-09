import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuiz } from '@/contexts/QuizContext';

const LocationInfo = () => {
  const { openQuiz } = useQuiz();
  
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 flex flex-col justify-center bg-white p-8 rounded-2xl shadow-sm"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visite nossa Clínica</h2>
              <div className="flex items-center gap-2 text-green-600 font-medium mb-6">
                 <CheckCircle className="w-5 h-5" />
                 <span>Estacionamento próximo e fácil acesso</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Endereço</h3>
                  <p className="text-gray-600">R. Conde de Porto Alegre, 383 – Centro<br />Rio Grande – RS</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Horário</h3>
                  <p className="text-gray-600">Seg a Sex: 08:00–11:30, 13:30–18:30<br/>Sábado: Sob agendamento</p>
                </div>
              </div>

              <div className="pt-2">
                <Button 
                  onClick={openQuiz}
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-6 rounded-xl text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all w-full justify-center"
                >
                  Avaliar meu alinhamento
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="min-h-[350px] w-full rounded-2xl overflow-hidden shadow-md border border-gray-200"
          >
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.364716757138!2d-52.09873992440964!3d-32.034604973847285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95119cb239922c21%3A0x6291350a47d2f440!2sR.%20Conde%20de%20Porto%20Alegre%2C%20383%20-%20Centro%2C%20Rio%20Grande%20-%20RS%2C%2096200-330!5e0!3m2!1spt-BR!2sbr!4v1709664589253!5m2!1spt-BR!2sbr" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Mapa de Localização Resmini Ortodontia"
             ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LocationInfo;
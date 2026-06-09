import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuiz } from '@/contexts/QuizContext';

const Contact = () => {
  const { openQuiz } = useQuiz();
  
  const contactInfo = [
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@resminiortodontia',
      link: 'https://instagram.com/resminiortodontia',
      color: 'bg-gradient-to-tr from-yellow-500 to-purple-600'
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'clinicaresmini@yahoo.com.br',
      link: 'mailto:clinicaresmini@yahoo.com.br',
      color: 'bg-blue-500'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B2838] mb-4">
            Fale Conosco
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Estamos prontos para atender você. Escolha seu canal preferido.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
           {contactInfo.map((info, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all"
             >
                <div className={`w-14 h-14 mx-auto rounded-full ${info.color} flex items-center justify-center mb-4 shadow-md`}>
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.label}</h3>
                
                <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline text-sm break-all">
                  {info.value}
                </a>
             </motion.div>
           ))}
        </div>

        <div className="text-center">
           <Button
             onClick={openQuiz}
             className="w-full md:w-auto px-10 py-6 gradient-primary text-white hover:opacity-90 rounded-xl text-lg font-bold shadow-xl"
           >
             Avaliar meu alinhamento
           </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
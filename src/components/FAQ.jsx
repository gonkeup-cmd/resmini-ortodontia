import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Quanto custa um aparelho ortodôntico?",
      answer: "O valor varia conforme a complexidade e o tipo de aparelho (fixo ou invisível). Na Resmini, priorizamos condições acessíveis e transparentes. Agende sua avaliação gratuita para receber um orçamento personalizado."
    },
    {
      question: "Quanto tempo vou usar aparelho?",
      answer: "A média é de 12 à 30 meses, mas com nossos alinhadores digitais e planejamento 3D, muitos casos são resolvidos mais rápido. Sua avaliação inicial nos dará uma previsão precisa."
    },
    {
      question: "Aceitam convênios?",
      answer: "Trabalhamos com sistema de reembolso e condições facilitadas de pagamento direto. Entre em contato pelo WhatsApp para verificar as opções disponíveis para o seu caso."
    },
    {
      question: "O tratamento dói?",
      answer: "A ortodontia moderna é muito confortável. Pode haver leve pressão nos primeiros dias de ajuste, mas nada comparado aos aparelhos antigos. Nossos alinhadores invisíveis são extremamente suaves."
    },
    {
      question: "Qual a idade mínima e máxima?",
      answer: "Atendemos crianças a partir de 7 anos para prevenção, e não há limite de idade para adultos. Nunca é tarde para conquistar o sorriso que você merece."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Tira-dúvidas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dúvidas Frequentes
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8 text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
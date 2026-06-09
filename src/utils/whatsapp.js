import React from 'react';
import config from '@/config';

const { phone, messages } = config.whatsApp;

/**
 * Função privada que apenas abre o WhatsApp.
 * REMOVIDO: Disparo automático de window.dataLayer.push('whatsapp_interaction').
 * O evento 'whatsapp_interaction' agora é disparado EXCLUSIVAMENTE no final do Quiz (QuizModal.jsx/QuizContext.jsx).
 * 
 * @param {string} message - A mensagem a ser enviada.
 */
const openWhatsAppLink = (message = '') => {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phone}?text=${encodedMessage}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Objeto exportado com métodos para cada tipo de ação do WhatsApp.
 * Estes métodos agora apenas abrem o link, sem tracking automático.
 */
export const WhatsApp = {
  openAgendar: () => openWhatsAppLink(messages.agendar),
  openContatoGeral: () => openWhatsAppLink(messages.contatoGeral),
  openSuporte: () => openWhatsAppLink(messages.suporte),
  openContatoRodape: () => openWhatsAppLink(messages.contatoRodape)
};
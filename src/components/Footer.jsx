import React from 'react';
import { MapPin, Phone, Instagram, Mail, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#00BCD4]">
              Resmini Ortodontia
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Mais de 2.000 sorrisos transformados com a segurança e a expertise de 20 anos de mercado.
            </p>
            <div className="flex items-center gap-2 text-yellow-500 font-semibold text-sm">
              <Award className="w-4 h-4" />
              <span>Referência em Rio Grande/RS</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00BCD4] flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm">
                  R. Conde de Porto Alegre, 383<br />Centro, Rio Grande/RS
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00BCD4] flex-shrink-0" />
                <a href="tel:5353984746894" className="text-gray-300 text-sm hover:text-[#00BCD4]">
                  (53) 98474-6894
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00BCD4] flex-shrink-0" />
                <a href="mailto:clinicaresmini@yahoo.com.br" className="text-gray-300 text-sm hover:text-[#00BCD4]">
                  clinicaresmini@yahoo.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              <button onClick={() => scrollToSection('#inicio')} className="block text-gray-300 text-sm hover:text-[#00BCD4] text-left">Início</button>
              <button onClick={() => scrollToSection('#tipos-aparelho')} className="block text-gray-300 text-sm hover:text-[#00BCD4] text-left">Tipos de Aparelho</button>
              <button onClick={() => scrollToSection('#faq')} className="block text-gray-300 text-sm hover:text-[#00BCD4] text-left">Dúvidas Frequentes</button>
              <button onClick={() => scrollToSection('#contato')} className="block text-gray-300 text-sm hover:text-[#00BCD4] text-left">Agendar Consulta</button>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <a 
              href="https://instagram.com/resminiortodontia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-[#00BCD4] transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@resminiortodontia</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Resmini Ortodontia. Responsável Técnico: Dr. Matheus Resmini - CRO/RS 13352
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
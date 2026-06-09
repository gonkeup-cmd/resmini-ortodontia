import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuiz } from '@/contexts/QuizContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openQuiz } = useQuiz();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Aparelhos', href: '#tipos-aparelho' },
    { label: 'Processo', href: '#processo' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Sobre', href: '#about-doctor' },
    { label: 'Contato', href: '#contato' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const headerClasses = isScrolled ? 'bg-white shadow-lg' : 'bg-transparent';
  const linkClasses = isScrolled ? 'text-[#64748B] hover:text-[#2E6BFF]' : 'text-white/90 hover:text-white';
  const logoTextClasses = isScrolled ? 'text-[#1B2838]' : 'text-white';
  const mobileMenuButtonClasses = isScrolled ? 'text-[#1B2838]' : 'text-white';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[60px] md:h-20">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#2E6BFF] to-[#00BFA6] flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-base md:text-lg">R</span>
            </div>
            <div>
              <span className={`font-poppins font-semibold text-sm md:text-lg transition-colors duration-300 leading-tight block ${logoTextClasses}`}>
                Resmini Ortodontia
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors duration-300 font-medium ${linkClasses}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={openQuiz}
              className="gradient-primary text-white hover:opacity-90 transition-opacity rounded-full px-6 shadow-md hover:shadow-lg font-bold"
            >
              Avaliar meu alinhamento
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-1 ${mobileMenuButtonClasses}`}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 bg-white shadow-xl rounded-b-2xl border-t border-gray-100"
          >
            <nav className="flex flex-col gap-2 pt-2">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[#64748B] hover:text-[#2E6BFF] hover:bg-gray-50 transition-all font-medium text-left px-4 py-3 border-b border-gray-50 last:border-none"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-3 pb-2">
                <Button
                  onClick={openQuiz}
                  className="gradient-primary text-white hover:opacity-90 transition-opacity rounded-full w-full h-12 font-bold text-lg"
                >
                  Avaliar meu alinhamento
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
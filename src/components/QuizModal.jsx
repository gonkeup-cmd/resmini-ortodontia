import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useQuiz, QUIZ_DATA } from '@/contexts/QuizContext';

const QuizModal = () => {
  const {
    isOpen,
    closeQuiz,
    resetQuiz,
    currentQuestion,
    completed,
    filterPassed,
    handleFilterAnswer,
    handleAnswer,
    getResult,
    trackWhatsAppClick,
    trackInstagramClick
  } = useQuiz();

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const totalQuestions = QUIZ_DATA.questions.length + 1; // +1 for filter question
  const progress = ((currentQuestion) / totalQuestions) * 100;

  const handleClose = () => {
    closeQuiz();
    resetQuiz();
  };

  const handleCTAClick = (result) => {
    if (result.isInstagram) {
      trackInstagramClick();
    } else {
      trackWhatsAppClick(result.type);
    }
    window.open(result.ctaLink, '_blank');
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-sm md:max-w-2xl bg-white rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
      >
        {/* FIXED HEADER SECTION */}
        <div className="flex-none bg-white z-20 border-b border-gray-100 px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-900 text-lg md:text-xl leading-none">
              Teste de Alinhamento
            </h3>
            <button
              onClick={handleClose}
              className="p-1 -mr-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600 cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="space-y-1">
            <div className="h-1.5 md:h-2 bg-gray-100 rounded-full overflow-hidden w-full">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00BCD4] to-[#2563EB]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            {!completed && (
              <p className="text-[10px] md:text-xs text-gray-400 text-right font-medium">
                Passo {currentQuestion} de {totalQuestions}
              </p>
            )}
          </div>
        </div>

        {/* SCROLLABLE CONTENT SECTION */}
        <div className="flex-1 overflow-y-auto p-5 md:p-8 scroll-smooth">
          <AnimatePresence mode="wait">
            {!completed ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="pb-2"
              >
                {/* Filter Question (Question 0) */}
                {currentQuestion === 0 && (
                  <div className="space-y-6">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 leading-tight">
                      {QUIZ_DATA.filter.question}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {QUIZ_DATA.filter.options.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleFilterAnswer(option)}
                          className="p-4 md:p-5 text-left border border-gray-200 rounded-xl hover:border-[#00BCD4] hover:bg-[#00BCD4]/5 active:bg-[#00BCD4]/10 transition-all duration-200 group w-full shadow-sm hover:shadow-md"
                        >
                          <span className="text-xs md:text-sm font-bold text-[#00BCD4] mb-1 block">
                            {option.id}
                          </span>
                          <span className="text-base md:text-lg font-medium text-gray-900 group-hover:text-[#00BCD4] transition-colors leading-snug">
                            {option.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Regular Questions (1-4) */}
                {currentQuestion > 0 && currentQuestion <= QUIZ_DATA.questions.length && (
                  <div className="space-y-6">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 leading-tight">
                      {QUIZ_DATA.questions[currentQuestion - 1].question}
                    </h2>

                    <div className="space-y-3">
                      {QUIZ_DATA.questions[currentQuestion - 1].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswer(index)}
                          className="w-full p-4 md:p-5 text-left border border-gray-200 rounded-xl hover:border-[#2563EB] hover:bg-[#2563EB]/5 active:bg-[#2563EB]/10 transition-all duration-200 group shadow-sm hover:shadow-md"
                        >
                          <span className="text-base md:text-lg font-medium text-gray-900 group-hover:text-[#2563EB] transition-colors">
                            {option.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              /* Result Screen */
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-2"
              >
                {(() => {
                  const result = getResult();
                  return (
                    <>
                      <div className="text-6xl md:text-7xl mb-2 animate-bounce">{result.emoji}</div>
                      <h2 className="text-2xl md:text-4xl font-bold leading-tight" style={{ color: result.color }}>
                        {result.title}
                      </h2>
                      <p className="text-base md:text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
                        {result.message}
                      </p>

                      <div className="pt-4 space-y-3">
                        <button
                          onClick={() => handleCTAClick(result)}
                          className="w-full px-6 py-4 rounded-xl font-bold text-white text-base md:text-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
                          style={{ 
                            backgroundColor: result.isInstagram ? '#E4405F' : '#25D366'
                          }}
                        >
                          {result.cta}
                        </button>

                        <button
                          onClick={handleClose}
                          className="w-full px-6 py-3 border border-gray-300 rounded-xl font-semibold text-gray-600 text-sm md:text-base hover:bg-gray-50 active:bg-gray-100 transition-all duration-200"
                        >
                          Fechar
                        </button>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default QuizModal;
import React, { createContext, useContext, useState, useEffect } from 'react';

const QuizContext = createContext();

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within QuizProvider');
  }
  return context;
};

// Quiz questions and options configuration
export const QUIZ_DATA = {
  filter: {
    question: "O que você está procurando hoje?",
    options: [
      { id: 'A', label: 'Alinhar os dentes', continueQuiz: true },
      { id: 'B', label: 'Corrigir mordida', continueQuiz: true },
      { id: 'C', label: 'Melhorar estética do sorriso', continueQuiz: true },
      { id: 'D', label: 'Tratamento para criança/adolescente', continueQuiz: true },
      { id: 'E', label: 'Ortopedia funcional', continueQuiz: true },
      { id: 'F', label: 'Manutenção ortodôntica', continueQuiz: true },
      { id: 'G', label: 'Implante dentário', continueQuiz: false, redirectToInstagram: true },
      { id: 'H', label: 'Extração de dente', continueQuiz: false, redirectToInstagram: true }
    ]
  },
  questions: [
    {
      id: 1,
      question: "Você tem alguma insatisfação com seu sorriso?",
      options: [
        { label: 'Sim, muito incomodado(a)', points: 4 },
        { label: 'Sim, um pouco', points: 2 },
        { label: 'Não muito', points: 1 },
        { label: 'Não tenho insatisfação', points: 0 }
      ]
    },
    {
      id: 2,
      question: "Você sente dores na face ou dificuldade para mastigar?",
      options: [
        { label: 'Sim, frequentemente', points: 4 },
        { label: 'Às vezes', points: 2 },
        { label: 'Raramente', points: 1 },
        { label: 'Não', points: 0 }
      ]
    },
    {
      id: 3,
      question: "Quando você pensa em fazer tratamento ortodôntico?",
      options: [
        { label: 'Quero começar o mais rápido possível', points: 4 },
        { label: 'Nos próximos 3 meses', points: 3 },
        { label: 'Nos próximos 6 meses', points: 2 },
        { label: 'Ainda estou pesquisando', points: 1 }
      ]
    },
    {
      id: 4,
      question: "Qual aspecto é mais importante para você no tratamento?",
      options: [
        { label: 'Resultado final perfeito', points: 3 },
        { label: 'Conforto durante o tratamento', points: 2 },
        { label: 'Custo-benefício', points: 2 },
        { label: 'Discrição (aparelho invisível)', points: 3 }
      ]
    }
  ]
};

export const QuizProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [filterPassed, setFilterPassed] = useState(false);

  // Load quiz state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem('quizState');
    if (savedState) {
      try {
        const state = JSON.parse(savedState);
        setCurrentQuestion(state.currentQuestion || 0);
        setAnswers(state.answers || []);
        setScore(state.score || 0);
        setCompleted(state.completed || false);
        setFilterPassed(state.filterPassed || false);
      } catch (error) {
        console.error('Error loading quiz state:', error);
      }
    }
  }, []);

  // Save quiz state to localStorage whenever it changes
  useEffect(() => {
    const state = {
      currentQuestion,
      answers,
      score,
      completed,
      filterPassed
    };
    localStorage.setItem('quizState', JSON.stringify(state));
  }, [currentQuestion, answers, score, completed, filterPassed]);

  const openQuiz = () => {
    setIsOpen(true);
    // EVENTO ATIVO: Disparado ao abrir o quiz
    if (window.gtag) {
      window.gtag('event', 'quiz_start', {
        event_category: 'Quiz',
        event_label: 'Quiz Started'
      });
    }
  };

  const closeQuiz = () => {
    setIsOpen(false);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setScore(0);
    setCompleted(false);
    setFilterPassed(false);
    localStorage.removeItem('quizState');
  };

  const handleFilterAnswer = (option) => {
    if (option.continueQuiz) {
      setFilterPassed(true);
      setCurrentQuestion(1);
      setAnswers([option.id]);
    } else if (option.redirectToInstagram) {
      // EVENTO ATIVO: Disparado ao ser redirecionado para Instagram pelo filtro
      if (window.gtag) {
        window.gtag('event', 'instagram_click', {
          event_category: 'Quiz',
          event_label: 'Instagram Redirect from Filter'
        });
      }
      window.open('https://instagram.com/resminiortodontia', '_blank');
      closeQuiz();
      resetQuiz();
    }
  };

  const handleAnswer = (optionIndex) => {
    const currentQ = QUIZ_DATA.questions[currentQuestion - 1];
    const selectedOption = currentQ.options[optionIndex];
    
    // Update answers and score
    setAnswers([...answers, optionIndex]);
    setScore(score + selectedOption.points);

    // Move to next question or complete quiz
    if (currentQuestion < QUIZ_DATA.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
      // EVENTO ATIVO: Disparado ao completar o quiz
      if (window.gtag) {
        window.gtag('event', 'quiz_complete', {
          event_category: 'Quiz',
          event_label: 'Quiz Completed',
          value: score + selectedOption.points
        });
      }
    }
  };

  const getResult = () => {
    const finalScore = score;
    if (finalScore >= 9) {
      return {
        type: 'hot',
        emoji: '🔥',
        title: 'VOCÊ ESTÁ PRONTO!',
        message: 'Seu perfil indica alta necessidade de tratamento ortodôntico. Vamos agendar uma avaliação personalizada?',
        cta: 'Agendar Avaliação',
        ctaLink: 'https://wa.me/5353984746894?text=Olá! Fiz o teste no site e gostaria de agendar uma avaliação ortodôntica.',
        color: '#EF4444'
      };
    } else if (finalScore >= 5) {
      return {
        type: 'warm',
        emoji: '😊',
        title: 'VAMOS CONVERSAR?',
        message: 'Você tem boas chances de se beneficiar da ortodontia. Que tal tirar suas dúvidas com o Dr. Matheus?',
        cta: 'Tirar Dúvidas',
        ctaLink: 'https://wa.me/5353984746894?text=Olá! Fiz o teste no site e gostaria de saber mais sobre ortodontia.',
        color: '#F59E0B'
      };
    } else {
      return {
        type: 'cold',
        emoji: '❄️',
        title: 'CONHECIMENTO É PODER!',
        message: 'Continue acompanhando! Siga no Instagram para dicas e informações sobre saúde bucal.',
        cta: 'Seguir no Instagram',
        ctaLink: 'https://instagram.com/resminiortodontia',
        isInstagram: true,
        color: '#3B82F6'
      };
    }
  };

  // EVENTO ATIVO: whatsapp_interaction
  // Disparado APENAS no clique do botão final do quiz (Hot ou Warm).
  const trackWhatsAppClick = (resultType) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'whatsapp_interaction',
      quiz_result: resultType // 'hot' ou 'warm'
    });
  };

  // EVENTO ATIVO: instagram_click
  // Disparado no clique do botão final do quiz (Cold).
  const trackInstagramClick = () => {
    if (window.gtag) {
      window.gtag('event', 'instagram_click', {
        event_category: 'Quiz',
        event_label: 'Instagram Click from Quiz Result'
      });
    }
  };

  const value = {
    isOpen,
    openQuiz,
    closeQuiz,
    resetQuiz,
    currentQuestion,
    answers,
    score,
    completed,
    filterPassed,
    handleFilterAnswer,
    handleAnswer,
    getResult,
    trackWhatsAppClick,
    trackInstagramClick
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
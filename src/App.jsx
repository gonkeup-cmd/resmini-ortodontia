import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ApplianceTypes from '@/components/ApplianceTypes';
import TreatmentProcess from '@/components/TreatmentProcess';
import AboutDoctor from '@/components/AboutDoctor';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Contact from '@/components/Contact';
import LocationInfo from '@/components/LocationInfo';
import Footer from '@/components/Footer';
import FloatingQuizButton from '@/components/FloatingQuizButton';
import { Toaster } from '@/components/ui/toaster';

// Unused components commented out to optimize bundle and conversion flow
// import WhyChooseResmini from '@/components/WhyChooseResmini';
// import Treatments from '@/components/Treatments';
// import BeforeAfter from '@/components/BeforeAfter';
// import Testimonials from '@/components/Testimonials';

function App() {
  return (
    <>
      <Helmet>
        <title>Ortodontia em Rio Grande | Alinhamento de Dentes | Resmini</title>
        <meta 
          name="description" 
          content="Descubra se você precisa de aparelho. Teste gratuito de alinhamento. Ortodontia moderna com 20+ anos de experiência e mais de 2.000 sorrisos transformados." 
        />
        <style>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </Helmet>
      
      <div className="min-h-screen bg-white font-sans">
        <Header />
        <main>
          <Hero />
          <ApplianceTypes />
          <TreatmentProcess />
          <FAQ />
          <AboutDoctor />
          <Contact />
          <FinalCTA />
          <LocationInfo />
        </main>
        <Footer />
        <FloatingQuizButton />
        <Toaster />
      </div>
    </>
  );
}

export default App;
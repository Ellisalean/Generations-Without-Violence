import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/sections/Home';
import WhyThisMatters from './components/sections/WhyThisMatters';
import PastoralProtocols from './components/sections/PastoralProtocols';
import Training from './components/sections/Training';
import EmergencyGuide from './components/sections/EmergencyGuide';
import PolicyTemplates from './components/sections/PolicyTemplates';
import Resources from './components/sections/Resources';
import AboutUs from './components/sections/AboutUs';
import Contact from './components/sections/Contact';
import AnimatedSection from './components/AnimatedSection';
import BackToTopButton from './components/BackToTopButton';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-white">
        <Header />
        <main>
          <Home />
          <AnimatedSection><WhyThisMatters /></AnimatedSection>
          <AnimatedSection><PastoralProtocols /></AnimatedSection>
          <AnimatedSection><Training /></AnimatedSection>
          <AnimatedSection><EmergencyGuide /></AnimatedSection>
          <AnimatedSection><PolicyTemplates /></AnimatedSection>
          <AnimatedSection><Resources /></AnimatedSection>
          <AnimatedSection><AboutUs /></AnimatedSection>
          <AnimatedSection><Contact /></AnimatedSection>
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </LanguageProvider>
  );
}

export default App;

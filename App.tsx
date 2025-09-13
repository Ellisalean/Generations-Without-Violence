
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

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Home />
          <WhyThisMatters />
          <PastoralProtocols />
          <Training />
          <EmergencyGuide />
          <PolicyTemplates />
          <Resources />
          <AboutUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;

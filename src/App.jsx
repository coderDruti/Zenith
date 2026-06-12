import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeTab from './components/HomeTab';
import AboutTab from './components/AboutTab';
import ServicesTab from './components/ServicesTab';
import EventsTab from './components/EventsTab';
import MilestonesTab from './components/MilestonesTab';
import ContactTab from './components/ContactTab';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [glow, setGlow] = useState(false);

  // Dynamic glow effect on tab transition
  useEffect(() => {
    setGlow(true);
    const timer = setTimeout(() => setGlow(false), 800);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="app-wrapper">
      {/* Header component containing the company logo, tagline, and navigation capsules */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Container mirroring the wireframe outlined section */}
      <main className="main-viewport">
        <div className={`wireframe-container ${glow ? 'active-glowing' : ''}`}>
          <div className={activeTab === 'home' ? 'tab-visible' : 'tab-hidden'}>
            <HomeTab setActiveTab={setActiveTab} />
          </div>
          <div className={activeTab === 'about' ? 'tab-visible' : 'tab-hidden'}>
            <AboutTab setActiveTab={setActiveTab} />
          </div>
          <div className={activeTab === 'services' ? 'tab-visible' : 'tab-hidden'}>
            <ServicesTab />
          </div>
          <div className={activeTab === 'events' ? 'tab-visible' : 'tab-hidden'}>
            <EventsTab />
          </div>
          <div className={activeTab === 'portfolio' ? 'tab-visible' : 'tab-hidden'}>
            <MilestonesTab />
          </div>
          <div className={activeTab === 'contact' ? 'tab-visible' : 'tab-hidden'}>
            <ContactTab />
          </div>
        </div>
      </main>

      {/* Floating WhatsApp chat widget simulator */}
      <WhatsAppWidget />

      {/* Corporate details and copyright footer */}
      <Footer />
    </div>
  );
}

export default App;

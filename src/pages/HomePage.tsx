import React, { useState, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ActivityMap from '../components/ActivityMap';
import ActivityList from '../components/ActivityList';
import AboutSection from '../components/AboutSection';

const HomePage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>('1');

  const handleSelect = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFBFA] text-[#0B3D2E] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ActivityMap selectedId={selectedId} onSelect={handleSelect} />
        <ActivityList onSelect={handleSelect} />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

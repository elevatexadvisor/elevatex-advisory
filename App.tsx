import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [modalPreselectedService, setModalPreselectedService] = useState<string | undefined>();
  const [modalPreselectedLocation, setModalPreselectedLocation] = useState<'mumbai' | 'ahmedabad' | 'virtual' | undefined>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleOpenConsultation = (serviceName?: string, locationName?: 'mumbai' | 'ahmedabad' | 'virtual') => {
    setModalPreselectedService(serviceName);
    setModalPreselectedLocation(locationName);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0A2540] font-sans selection:bg-[#D4AF37] selection:text-[#0A2540]">
      {/* Fixed Navigation Header */}
      <Header
        activeSection={activeSection}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      <main>
        {/* Hero Section */}
        <HeroSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Practice Area Services Section */}
        <ServicesSection
          onSelectService={(title) => handleOpenConsultation(title)}
        />

        {/* About Us Section */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedService={modalPreselectedService}
        preselectedLocation={modalPreselectedLocation}
      />
    </div>
  );
}

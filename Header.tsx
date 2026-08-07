import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  activeSection: string;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (id === 'contact') {
      onOpenConsultation();
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#082846]/95 backdrop-blur-md shadow-lg py-3 border-b border-[#123E66]'
          : 'bg-[#082846] py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="group cursor-pointer"
        >
          <Logo />
        </a>

        {/* Desktop Navigation Links & Button */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id || (activeSection === '' && link.id === 'home');
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-semibold transition-all relative py-1 ${
                    isActive
                      ? 'text-[#E5B228] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#E5B228]'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Book a Consultation Button */}
          <button
            onClick={onOpenConsultation}
            className="px-6 py-2.5 rounded-full bg-[#E5B228] hover:bg-[#f0bd30] active:scale-[0.98] text-[#082846] font-bold text-sm transition-all shadow-md cursor-pointer"
          >
            Book a Consultation
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="px-4 py-1.5 text-xs font-bold rounded-full bg-[#E5B228] text-[#082846] cursor-pointer"
          >
            Book
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-200 hover:text-white focus:outline-none rounded-xl"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#061D33] border-b border-[#123E66] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                activeSection === link.id
                  ? 'text-[#E5B228] bg-white/10 font-bold'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-700">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 rounded-full font-bold text-sm text-[#082846] bg-[#E5B228] text-center cursor-pointer"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

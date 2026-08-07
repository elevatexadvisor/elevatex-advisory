import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToSection = (id: string) => {
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
    <footer className="bg-[#0A2E4D] text-[#BACAD6] pt-16 pb-16 border-t border-[#123E66]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Brand Col - 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <div className="cursor-pointer" onClick={() => scrollToSection('home')}>
              <Logo />
            </div>

            <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed">
              Simplifying finance and empowering decision-making for businesses and individuals across India.
            </p>

            {/* Category Pill */}
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-[#2A3F29] border border-[#3E5C3C] text-[#E5B228] text-xs font-bold tracking-wide">
                Financial &amp; Technology Advisory
              </span>
            </div>
          </div>

          {/* Navigation Col - 3 cols */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#E5B228] uppercase tracking-wider font-sans">
              NAVIGATION
            </h4>
            <ul className="space-y-3 text-sm text-slate-200 font-medium">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Col - 4 cols */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-[#E5B228] uppercase tracking-wider font-sans">
              CONTACT
            </h4>
            <ul className="space-y-4 text-sm text-slate-200">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:elevatexadvisor@gmail.com" className="hover:text-white transition-colors text-xs sm:text-sm">
                  elevatexadvisor@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm leading-snug">
                  Mumbai &amp; Ahmedabad, India
                </span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
};

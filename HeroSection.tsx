import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-[#082846] text-white">
      {/* Subtle Dot Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Main Hero Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28 md:pt-20 md:pb-36 relative z-10">
        <div className="max-w-3xl space-y-6">
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Elevating Your Business Growth
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-2xl leading-relaxed pt-2">
            Comprehensive Financial, Technology &amp; Business Advisory Services
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#E5B228] hover:bg-[#f0bd30] active:scale-[0.98] text-[#082846] font-bold text-base transition-all shadow-md cursor-pointer"
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5 text-[#082846]" />
            </button>

            <button
              onClick={() => scrollToSection('services')}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0F385F] hover:bg-[#144575] border border-slate-500/40 text-white font-semibold text-base transition-all cursor-pointer"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Curved Wave Transition */}
      <div className="relative w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-12 sm:h-16 md:h-20 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Stats Counter Row (Sitting on the white background section) */}
      <div className="bg-white text-slate-800 py-8 border-b border-slate-100 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 text-center">
            
            {/* Stat 1 */}
            <div className="space-y-1 md:border-r md:border-slate-200 px-4">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-[#082846] tracking-tight">
                300<span className="text-[#E5B228]">+</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Clients Served
              </p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-1 md:border-r md:border-slate-200 px-4">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-[#082846] tracking-tight">
                4<span className="text-[#E5B228]">+</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Years Experience
              </p>
            </div>

            {/* Stat 3 */}
            <div className="space-y-1 md:border-r md:border-slate-200 px-4">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-[#082846] tracking-tight">
                2
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Service Cities
              </p>
            </div>

            {/* Stat 4 */}
            <div className="space-y-1 px-4">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-[#082846] tracking-tight">
                98<span className="text-[#E5B228]">%</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Client Retention
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

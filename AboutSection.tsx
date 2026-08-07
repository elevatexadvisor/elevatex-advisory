import React, { useState } from 'react';
import { ArrowRight, Check, Award, ChevronUp } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section id="about" className="bg-[#F8FAFC] text-[#0A2540] py-20 lg:py-28 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HOMEPAGE COMPACT ABOUT SECTION (2-Column Grid as in screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-600 font-sans">
                ABOUT US
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#082846] tracking-tight leading-[1.15]">
                Simplifying Finance. <br />
                Empowering Decisions.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Elevatex Advisor is a Financial &amp; Technology Advisory firm serving businesses and individuals across Mumbai and Ahmedabad. We provide reliable, transparent, and personalized advisory services to help clients achieve sustainable growth.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setShowFullStory(!showFullStory)}
                className="group inline-flex items-center gap-2.5 text-sm sm:text-base font-extrabold text-[#082846] hover:text-[#E5B228] transition-colors cursor-pointer"
              >
                <span>{showFullStory ? 'Hide detailed story' : 'Learn more about us'}</span>
                {showFullStory ? (
                  <ChevronUp className="w-4 h-4 text-[#082846] group-hover:text-[#E5B228] transition-transform" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-[#082846] group-hover:text-[#E5B228] group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: 3 Stacked Feature Cards */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Card 01 */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 rounded-xl bg-slate-100/90 text-[#082846] font-bold text-sm sm:text-base flex items-center justify-center shrink-0 font-mono">
                01
              </div>
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#082846] tracking-tight">
                  Finance &amp; Tech Expertise
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  A Financial &amp; Technology Advisory firm with deep expertise across tax, audit, CFO advisory, and digital systems — serving Mumbai and Ahmedabad.
                </p>
              </div>
            </div>

            {/* Card 02 */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 rounded-xl bg-slate-100/90 text-[#082846] font-bold text-sm sm:text-base flex items-center justify-center shrink-0 font-mono">
                02
              </div>
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#082846] tracking-tight">
                  Tailored Solutions
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  No two clients are alike. We craft personalized strategies for startups, SMEs, and corporates — solutions that fit your specific goals.
                </p>
              </div>
            </div>

            {/* Card 03 */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 rounded-xl bg-slate-100/90 text-[#082846] font-bold text-sm sm:text-base flex items-center justify-center shrink-0 font-mono">
                03
              </div>
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#082846] tracking-tight">
                  Integrity &amp; Accuracy
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Unwavering commitment to transparency, ethical practice, and precision. Your financial future deserves nothing less than absolute accuracy.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* EXTENDED DETAILED STORY (Shown when 'Learn more about us' is toggled) */}
      {showFullStory && (
        <div className="mt-20 border-t border-slate-200/80 pt-16 bg-white transition-all animate-fadeIn">
          
          {/* 1. HERO BANNER HEADER: Our Story */}
          <div className="bg-[#082846] text-white py-16 px-4 sm:px-6 lg:px-8 relative rounded-3xl max-w-7xl mx-auto mb-16 overflow-hidden">
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                backgroundSize: '24px 24px'
              }}
            />

            <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5B228]">
                OUR STORY
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
                Built on Integrity. Driven by Expertise.
              </h2>
              <p className="text-base sm:text-lg text-blue-100/90 max-w-3xl mx-auto font-normal leading-relaxed">
                Elevatex Advisor was founded with a singular vision — to make professional financial and technology guidance accessible, transparent, and genuinely impactful for every client.
              </p>
            </div>
          </div>

          {/* 2. STATS COUNTER BAR */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pb-12 border-b border-slate-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#082846] tracking-tight">
                  500+
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500">
                  Clients Served
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#082846] tracking-tight">
                  15+
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500">
                  Years Experience
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#082846] tracking-tight">
                  2
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500">
                  Office Cities
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#082846] tracking-tight">
                  98%
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500">
                  Client Retention
                </div>
              </div>

            </div>
          </div>

          {/* 3. FOUNDER & MISSION SECTION */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Founder Description & Checklist */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                    OUR FOUNDER
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-[#082846] tracking-tight">
                    Founder &amp; Principal Advisor
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-emerald-600">
                    Financial &amp; Technology Advisory
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Elevatex Advisor is a Financial &amp; Technology Advisory firm serving businesses and individuals across Mumbai and Ahmedabad. With deep expertise spanning finance, strategy, and technology, our team brings a rare combination of technical precision and strategic thinking to every client engagement — from growing startups to established enterprises.
                </p>

                <ul className="space-y-3 pt-2">
                  {[
                    'Financial & Technology Advisory expertise',
                    'Serving clients in Mumbai & Ahmedabad',
                    'Tax, Audit, CFO Advisory & Tech Systems',
                    '15+ years of professional experience'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Mission Card */}
              <div className="lg:col-span-5">
                <div className="bg-[#082846] text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[320px]">
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#E5B228] mb-6">
                      <Award className="w-7 h-7" />
                    </div>

                    <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                      Our Mission
                    </h4>

                    <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
                      To simplify finance and empower decision-making by delivering reliable, transparent, and personalized advisory services that help our clients achieve sustainable growth and financial clarity.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 4. OUR CORE VALUES SECTION */}
          <div className="bg-slate-50/70 border-t border-slate-100 py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  WHAT WE STAND FOR
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#082846] tracking-tight">
                  Our Core Values
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Integrity */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
                  <div className="w-1.5 h-8 bg-[#082846] rounded-full mb-4" />
                  <h4 className="text-xl font-extrabold text-[#082846] mb-3 tracking-tight">
                    Integrity
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    We hold ourselves to the highest ethical standards. Every recommendation we make is in the genuine best interest of our clients — no conflicts, no shortcuts.
                  </p>
                </div>

                {/* Accuracy */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
                  <div className="w-1.5 h-8 bg-emerald-500 rounded-full mb-4" />
                  <h4 className="text-xl font-extrabold text-[#082846] mb-3 tracking-tight">
                    Accuracy
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Financial decisions are only as good as the data behind them. We are meticulous in our work, ensuring every figure, filing, and report is precise and reliable.
                  </p>
                </div>

                {/* Client Success */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
                  <div className="w-1.5 h-8 bg-[#E5B228] rounded-full mb-4" />
                  <h4 className="text-xl font-extrabold text-[#082846] mb-3 tracking-tight">
                    Client Success
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Your success is our success. We measure our performance by the outcomes we create for clients — growth achieved, risks mitigated, and goals reached.
                  </p>
                </div>

                {/* Clarity */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
                  <div className="w-1.5 h-8 bg-[#082846] rounded-full mb-4" />
                  <h4 className="text-xl font-extrabold text-[#082846] mb-3 tracking-tight">
                    Clarity
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Finance shouldn't be intimidating. We communicate complex concepts in plain language, ensuring you always understand your financial position and options.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      )}

    </section>
  );
};


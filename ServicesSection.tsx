import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';
import { 
  Building2, TrendingUp, FileCheck2, Cpu, Wallet, PieChart, 
  Check, ArrowRight, Shield, BarChart3, Briefcase, CheckCircle2, X 
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  // Exact descriptions from screenshot
  const homeDescriptions: Record<string, string> = {
    'company-incorporation': 'End-to-end company setup in India — Private Limited, LLP, OPC, Section 8, MSME, Startup India registration, DSC & DIN. Fast, compliant, and hassle-free.',
    'cfo-advisory': 'CFO-level financial oversight without the full-time cost. Monthly reviews, budgeting, investor reporting, and strategic decision support for growing businesses.',
    'financial-reporting-compliance': 'Accurate financial statements, regulatory compliance support, audit preparation, and performance dashboards — keeping you transparent and audit-ready.',
    'tech-systems-support': 'Custom dashboards, API integrations, finance system setup, and process automation — helping businesses modernize their financial operations through technology.',
    'wealth-management': 'Personalized investment portfolio design, risk management, retirement planning, and asset allocation for long-term financial security and growth.',
    'income-planning-advisory': 'Tax-efficient income strategies, salary structuring, passive income planning, and personalized financial roadmaps to maximize income and minimize tax burdens.'
  };

  // Helper icon renderer matching screenshot styles
  const renderCardIcon = (serviceId: string) => {
    const iconClasses = "w-5 h-5 text-[#082846]";
    switch (serviceId) {
      case 'company-incorporation': return <TrendingUp className={iconClasses} />;
      case 'cfo-advisory': return <Briefcase className={iconClasses} />;
      case 'financial-reporting-compliance': return <Shield className={iconClasses} />;
      case 'tech-systems-support': return <BarChart3 className={iconClasses} />;
      case 'wealth-management': return <CheckCircle2 className={iconClasses} />;
      case 'income-planning-advisory': return <CheckCircle2 className={iconClasses} />;
      default: return <Building2 className={iconClasses} />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FFFFFF] text-[#0A2540]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 lg:mb-20">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-600 font-sans">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#082846] tracking-tight">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-normal">
            Financial, technology, and business advisory expertise tailored to your needs
          </p>
        </div>

        {/* Core Service Cards Grid (Matching exact screenshot layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => {
            const description = homeDescriptions[service.id] || service.shortDescription;

            return (
              <div
                key={service.id}
                onClick={() => setActiveModalService(service)}
                className="group bg-white hover:bg-slate-50/80 transition-all duration-300 rounded-2xl p-7 lg:p-8 border border-slate-200/80 shadow-2xs hover:shadow-md flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-11 h-11 rounded-xl bg-slate-100/80 border border-slate-200/60 flex items-center justify-center mb-6">
                    {renderCardIcon(service.id)}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#082846] tracking-tight mb-3">
                    {service.title}
                  </h3>

                  {/* Summary Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="mt-8 pt-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalService(service);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Detailed Modal Window for Service Deliverables */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-200">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#082846] flex items-center justify-center p-2.5">
                {renderCardIcon(activeModalService.id)}
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  {activeModalService.categoryGroup}
                </span>
                <h3 className="text-2xl font-extrabold text-[#082846] tracking-tight mt-1">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
              {activeModalService.detailedDescription || activeModalService.shortDescription}
            </p>

            {/* Deliverables Checklist */}
            <div className="space-y-2 mb-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Full Scope &amp; Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeModalService.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Audience Pill */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-6 text-xs text-[#082846]">
              <span className="font-bold text-[#082846]">Ideal for: </span>
              <span className="text-slate-600">{activeModalService.bestFor}</span>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  onSelectService(title);
                }}
                className="px-6 py-2.5 rounded-full bg-[#082846] text-white text-xs font-bold hover:bg-[#123E66] transition-colors shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <span>Book Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};


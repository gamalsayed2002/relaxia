import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../ui/SectionHeader';

export const Faq = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0); // Open first by default

  const toggleAccordion = (index) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#0B0B0B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t.faq.badge}
          heading={t.faq.heading}
          subheading={t.faq.subheading}
          align="center"
        />

        {/* Accordion List */}
        <div className="space-y-4">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-sm bg-[#131313] border border-[#D4AF37]/20 transition-all duration-300 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left rtl:text-right hover:bg-[#181818] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-[#FBF9F5] font-medium leading-snug">
                    {item.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#D4AF37] text-black" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-2 text-xs sm:text-sm text-[#A8A398] leading-relaxed border-t border-[#D4AF37]/10 font-light">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

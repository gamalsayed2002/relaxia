import React from 'react';
import { Moon, ShieldCheck, Sparkles, Leaf } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../ui/SectionHeader';

export const WhyUs = () => {
  const { t } = useLanguage();

  const iconMap = {
    Moon: Moon,
    ShieldCheck: ShieldCheck,
    Sparkles: Sparkles,
    Leaf: Leaf,
  };

  return (
    <section id="why-us" className="relative py-24 md:py-32 bg-[#0B0B0B] border-y border-[#D4AF37]/15 overflow-hidden">
      {/* Background Decorative Gold Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#D4AF37]/5 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-[#D4AF37]/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t.whyUs.badge}
          heading={t.whyUs.heading}
          subheading={t.whyUs.subheading}
          align="center"
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyUs.cards.map((card, idx) => {
            const Icon = iconMap[card.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="group relative bg-[#131313]/90 border border-[#D4AF37]/20 p-8 rounded-sm hover:border-[#D4AF37]/60 hover:bg-[#181818] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent corner line */}
                <div className="absolute top-0 right-0 w-8 h-[1px] bg-gradient-to-l from-[#D4AF37] to-transparent"></div>
                <div className="absolute top-0 right-0 h-8 w-[1px] bg-gradient-to-b from-[#D4AF37] to-transparent"></div>

                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 group-hover:shadow-gold-glow transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-medium text-[#FBF9F5] mb-3 group-hover:text-gold-gradient transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#9E998E] leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="w-6 h-[1.5px] bg-[#D4AF37]/30 mt-6 group-hover:w-12 group-hover:bg-[#D4AF37] transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

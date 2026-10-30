import React from 'react';
import { ShieldCheck, UserCheck, Sparkles, Feather } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../ui/SectionHeader';

export const About = () => {
  const { t, isRTL } = useLanguage();

  const pillarIcons = [ShieldCheck, UserCheck, Feather, Sparkles];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#0C0C0C] overflow-hidden">
      {/* Subtle gold accent light */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Luxury Decorative Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold border frame */}
              <div className="absolute -inset-3 sm:-inset-4 border border-[#D4AF37]/30 rounded-sm -z-10 translate-x-2 translate-y-2"></div>
              
              {/* Main Image */}
              <div className="relative rounded-sm overflow-hidden shadow-2xl border border-[#D4AF37]/25 aspect-[4/3] sm:aspect-[4/5] lg:aspect-[3/4]">
                <img
                  src="/images/about-spa.webp"
                  alt="Relaxia Spa Sanctuary Architecture"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                {/* Subtle dark vignette on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>

              {/* Floating Luxury Glass Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 rtl:-right-auto rtl:-left-4 sm:rtl:-left-6 bg-[#161616]/90 border border-[#D4AF37]/40 backdrop-blur-md p-4 rounded-sm shadow-xl max-w-[220px]">
                <span className="block font-serif text-2xl text-gold-gradient font-bold">
                  100% Private
                </span>
                <span className="text-[11px] text-[#A39E93] leading-snug block mt-0.5 font-light">
                  {isRTL ? "أجنحة خاصة بالكامل لعزلة تامة وراحة لا تُضاهى" : "Fully soundproof secluded suites for uninterrupted stillness."}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionHeader
              badge={t.about.badge}
              heading={t.about.heading}
              subheading={t.about.subheading}
              align="left"
              className="mb-8"
            />

            <div className="space-y-4 text-sm sm:text-base text-[#D0CBC0] leading-relaxed font-light mb-10">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {t.about.pillars.map((pillar, idx) => {
                const IconComponent = pillarIcons[idx % pillarIcons.length];
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-sm bg-[#141414] border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-serif font-semibold text-[#FBF9F5]">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#9E998E] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Signature Note */}
            <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
              <span className="text-xs sm:text-sm font-serif italic text-[#D4AF37]">
                "{t.about.signatureNote}"
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

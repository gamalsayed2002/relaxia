import React from 'react';
import { Clock, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

export const Services = ({ onSelectService, onBookService }) => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#090909]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t.services.badge}
          heading={t.services.heading}
          subheading={t.services.subheading}
          align="center"
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {t.services.items.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#131313] border border-[#D4AF37]/20 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-[#D4AF37]/50 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/30 to-black/40"></div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-[#D4AF37]/40 text-[#F7E6A9] text-xs font-medium backdrop-blur-md">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#FBF9F5] mb-1 group-hover:text-gold-gradient transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-[#D4AF37] uppercase tracking-wider mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-[#A8A398] leading-relaxed font-light mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-[#E8D8B0] hover:text-[#D4AF37] transition-colors cursor-pointer group/link"
                  >
                    <span>{t.services.discoverMore}</span>
                    {isRTL ? (
                      <ArrowLeft className="w-3.5 h-3.5 mr-1.5 transition-transform group-hover/link:-translate-x-1" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/link:translate-x-1" />
                    )}
                  </button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onBookService(service.title)}
                    className="text-xs"
                  >
                    {t.nav.bookNow}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

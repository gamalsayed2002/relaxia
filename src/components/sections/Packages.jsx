import React from 'react';
import { Check, Sparkles, Clock, Crown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

export const Packages = ({ onSelectPackage }) => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="packages" className="relative py-24 md:py-32 bg-[#090909]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D4AF37]/5 blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t.packages.badge}
          heading={t.packages.heading}
          subheading={t.packages.subheading}
          align="center"
        />

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {t.packages.items.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-sm flex flex-col justify-between transition-all duration-500 ${
                  isPopular
                    ? "bg-[#141414] border-2 border-[#D4AF37] shadow-gold-glow-lg -translate-y-2 lg:-translate-y-4"
                    : "bg-[#121212] border border-[#D4AF37]/25 hover:border-[#D4AF37]/50"
                } p-8 sm:p-10`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                    <Crown className="w-3.5 h-3.5" />
                    <span>{t.packages.popularBadge}</span>
                  </div>
                )}

                <div>
                  {/* Duration Badge */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] tracking-wider uppercase mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{pkg.duration}</span>
                  </div>

                  {/* Package Title */}
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#FBF9F5] mb-3">
                    {pkg.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#9E998E] leading-relaxed mb-6 font-light">
                    {pkg.desc}
                  </p>

                  {/* Pricing Placeholder Note */}
                  <div className="py-3 px-4 rounded-sm bg-[#0A0A0A] border border-[#D4AF37]/20 text-center mb-8">
                    <span className="text-xs uppercase tracking-widest text-[#F7E6A9] font-medium">
                      {t.packages.pricingNote}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] uppercase tracking-wider text-[#736E65] font-bold block mb-2">
                      {isRTL ? "تشمل الباقة:" : "Package Includes:"}
                    </span>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#D4AF37]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#D4AF37]" />
                        </div>
                        <span className="text-xs sm:text-sm text-[#DDD8CE]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Button */}
                <Button
                  variant={isPopular ? "primary" : "secondary"}
                  size="md"
                  onClick={() => onSelectPackage(pkg.name)}
                  className="w-full uppercase tracking-wider"
                >
                  {pkg.cta}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

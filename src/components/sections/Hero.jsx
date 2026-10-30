import React from 'react';
import { ChevronDown, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';

export const Hero = ({ onOpenBooking }) => {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background Hero Image with Slow Parallax / Zoom effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-spa.webp"
          alt="Relaxia Luxury Spa Interior"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow brightness-90"
        />
        {/* Layered cinematic dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-black/75"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/85 via-transparent to-[#0A0A0A]/85"></div>
        <div className="absolute inset-0 bg-dark-radial"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center flex flex-col items-center">
        {/* Luxury Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[#181818]/80 border border-[#D4AF37]/40 backdrop-blur-md shadow-gold-glow animate-fade-in">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#F7E6A9] font-medium">
            {t.hero.badge}
          </span>
        </div>

        {/* Large Elegant Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light tracking-tight text-[#FBF9F5] leading-[1.15] mb-6">
          <span className="block">{t.hero.titleLine1}</span>
          <span className="block font-medium text-gold-gradient italic">
            {t.hero.titleLine2}
          </span>
        </h1>

        {/* Subhead Description */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#DCD8CF] font-light leading-relaxed mb-10">
          {t.hero.description}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenBooking}
            className="w-full sm:w-auto text-sm font-semibold uppercase tracking-wider"
          >
            {t.hero.ctaPrimary}
          </Button>

          <a href="#services" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-sm font-medium uppercase tracking-wider"
            >
              <span>{t.hero.ctaSecondary}</span>
              {isRTL ? (
                <ArrowLeft className="w-4 h-4 ml-2" />
              ) : (
                <ArrowRight className="w-4 h-4 ml-2" />
              )}
            </Button>
          </a>
        </div>

        {/* Stats / Credentials Bar */}
        <div className="grid grid-cols-3 gap-4 sm:gap-12 pt-6 border-t border-[#D4AF37]/20 w-full max-w-2xl">
          {t.hero.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-xl sm:text-3xl font-serif text-[#D4AF37] font-semibold">
                {stat.value}
              </span>
              <span className="text-[11px] sm:text-xs text-[#A39E93] uppercase tracking-wider mt-1 text-center font-light">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-[#E8D8B0]/70 hover:text-[#D4AF37] transition-colors group cursor-pointer"
        aria-label="Scroll Down"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-light mb-1.5 opacity-80 group-hover:opacity-100">
          {t.hero.scrollHint}
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
      </a>
    </section>
  );
};

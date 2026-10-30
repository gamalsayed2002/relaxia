import React from 'react';
import { MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { businessConfig } from '../../data/config';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';

export const BookingCta = ({ onOpenBooking }) => {
  const { t, isRTL } = useLanguage();

  const handleDirectWhatsApp = () => {
    const text = isRTL
      ? "مرحباً ريلاكسيا سبا، أود الاستفسار وحجز جلسة في الجناح الخاص."
      : "Hello Relaxia Spa, I would like to inquire and reserve a private session.";
    window.open(`https://wa.me/${businessConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/booking-bg.webp"
          alt="Relaxia Spa Evening Sanctuary"
          className="w-full h-full object-cover object-center brightness-[0.35]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/70 to-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-dark-radial"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F7E6A9] text-xs uppercase tracking-widest font-semibold backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{t.bookingCta.badge}</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#FBF9F5] leading-tight mb-6">
          {t.bookingCta.title}
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-[#D2CEC4] max-w-2xl font-light leading-relaxed mb-10">
          {t.bookingCta.subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenBooking}
            className="w-full sm:w-auto uppercase tracking-wider font-semibold"
            icon={Calendar}
          >
            {t.bookingCta.bookOnline}
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={handleDirectWhatsApp}
            className="w-full sm:w-auto uppercase tracking-wider"
            icon={MessageCircle}
          >
            {t.bookingCta.bookWhatsApp}
          </Button>
        </div>
      </div>
    </section>
  );
};

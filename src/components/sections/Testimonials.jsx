import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../ui/SectionHeader';

export const Testimonials = () => {
  const { t, isRTL } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = t.testimonials.items;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="relative py-24 md:py-32 bg-[#090909] border-t border-[#D4AF37]/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t.testimonials.badge}
          heading={t.testimonials.heading}
          subheading={t.testimonials.subheading}
          align="center"
        />

        {/* Testimonial Card Carousel */}
        <div className="relative bg-[#131313] border border-[#D4AF37]/25 rounded-sm p-8 sm:p-12 md:p-16 shadow-2xl">
          {/* Subtle gold quote mark watermark */}
          <div className="absolute top-6 right-6 rtl:right-auto rtl:left-6 text-[#D4AF37]/10 pointer-events-none">
            <Quote className="w-20 h-20 rotate-180" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* 5 Golden Stars */}
            <div className="flex items-center gap-1.5 mb-6 text-[#D4AF37]">
              {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-base sm:text-xl md:text-2xl font-serif text-[#ECE8DE] leading-relaxed max-w-3xl mb-8 font-light italic">
              "{reviews[activeIndex].text}"
            </p>

            {/* Author */}
            <div className="flex flex-col items-center">
              <span className="font-serif text-lg font-semibold text-gold-gradient">
                {reviews[activeIndex].name}
              </span>
              <span className="text-xs text-[#9E998E] uppercase tracking-wider mt-0.5">
                {reviews[activeIndex].title} • {reviews[activeIndex].date}
              </span>
            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#D4AF37]/15">
            <button
              onClick={isRTL ? handleNext : handlePrev}
              className="p-2.5 rounded-full border border-[#D4AF37]/25 text-[#E8D8B0] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 transition-all rounded-full cursor-pointer ${
                    activeIndex === idx
                      ? "w-8 bg-[#D4AF37]"
                      : "w-2 bg-[#D4AF37]/25 hover:bg-[#D4AF37]/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={isRTL ? handlePrev : handleNext}
              className="p-2.5 rounded-full border border-[#D4AF37]/25 text-[#E8D8B0] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Transparency note */}
        <p className="text-center text-[11px] text-[#706C64] uppercase tracking-wider mt-6 font-light">
          * {t.testimonials.sampleNote}
        </p>
      </div>
    </section>
  );
};

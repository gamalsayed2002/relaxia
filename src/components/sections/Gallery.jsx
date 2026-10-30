import React from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../ui/SectionHeader';

export const Gallery = ({ onOpenLightbox }) => {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t.gallery.badge}
          heading={t.gallery.heading}
          subheading={t.gallery.subheading}
          align="center"
        />

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.gallery.images.map((img, idx) => {
            // Apply different heights/spans for editorial feel
            const isWide = idx === 0 || idx === 5;
            return (
              <div
                key={idx}
                onClick={() => onOpenLightbox(idx)}
                className={`group relative overflow-hidden rounded-sm border border-[#D4AF37]/20 bg-[#121212] cursor-pointer ${
                  isWide ? "sm:col-span-2 lg:col-span-1 h-80 lg:h-96" : "h-80 lg:h-96"
                }`}
              >
                {/* Image */}
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Hover Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-90 group-hover:opacity-100 transition-opacity">
                  <div className="flex justify-end">
                    <div className="w-9 h-9 rounded-full bg-black/60 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D4AF37] block mb-1">
                      {img.category}
                    </span>
                    <h4 className="text-lg sm:text-xl font-serif text-[#FBF9F5] font-medium leading-snug">
                      {img.title}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

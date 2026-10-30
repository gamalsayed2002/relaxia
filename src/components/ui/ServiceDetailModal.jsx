import React from 'react';
import { X, Clock, Check, Sparkles, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from './Button';

export const ServiceDetailModal = ({
  isOpen,
  service,
  onClose,
  onBookNow
}) => {
  const { t, isRTL } = useLanguage();

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#141414] border border-[#D4AF37]/35 rounded-sm overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-20 p-2 text-[#E8D8B0] hover:text-white bg-black/60 rounded-full border border-[#D4AF37]/30 transition-all hover:bg-[#D4AF37]/20"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Header */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden flex-shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent"></div>
          
          <div className="absolute bottom-4 left-6 right-6 rtl:left-6 rtl:right-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F7E6A9] backdrop-blur-sm">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{service.duration}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#FBF9F5]">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#D4AF37] font-medium mt-0.5">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Content Body (scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#A39E93] mb-2 font-semibold">
              {t.modal.serviceDetails}
            </h4>
            <p className="text-sm sm:text-base text-[#DCD8CF] leading-relaxed font-light">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Benefits */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#A39E93] mb-3 font-semibold">
              {t.modal.benefitsTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-sm bg-[#1A1A1A] border border-[#D4AF37]/15"
                >
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#ECE8DE]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended For */}
          {service.idealFor && (
            <div className="p-3.5 rounded-sm bg-[#D4AF37]/5 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#D4AF37]">
              <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold block mb-1">
                {t.modal.idealForTitle}
              </span>
              <p className="text-xs sm:text-sm text-[#DCD8CF] italic">
                {service.idealFor}
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#0E0E0E] border-t border-[#D4AF37]/20 flex flex-col sm:flex-row gap-3">
          <Button
            variant="primary"
            className="flex-1"
            onClick={() => {
              onClose();
              onBookNow(service.title);
            }}
          >
            {t.hero.ctaPrimary}
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
          >
            {t.modal.close}
          </Button>
        </div>
      </div>
    </div>
  );
};

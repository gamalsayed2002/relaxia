import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const LightboxModal = ({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onPrev,
  onNext,
  isRTL = false
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') isRTL ? onNext() : onPrev();
      if (e.key === 'ArrowRight') isRTL ? onPrev() : onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext, isRTL]);

  if (!isOpen || !images.length) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-300">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2.5 text-[#E8D8B0] hover:text-white bg-[#1A1A1A]/80 border border-[#D4AF37]/30 rounded-full transition-all hover:bg-[#D4AF37]/20 cursor-pointer"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={isRTL ? onNext : onPrev}
        className="absolute left-4 md:left-8 z-40 p-3 text-[#E8D8B0] hover:text-[#D4AF37] bg-[#141414]/70 border border-[#D4AF37]/25 rounded-full transition-all hover:bg-[#202020] hover:scale-110 cursor-pointer"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main image container */}
      <div className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center overflow-hidden">
        <img
          src={currentImage.src}
          alt={currentImage.title}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-sm shadow-2xl border border-[#D4AF37]/20"
        />
        {/* Caption */}
        <div className="mt-4 text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#D4AF37]">
            {currentImage.category}
          </span>
          <h4 className="text-lg md:text-xl font-serif text-[#FBF9F5] mt-1">
            {currentImage.title}
          </h4>
          <p className="text-xs text-[#9E998E] mt-0.5">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>

      {/* Next button */}
      <button
        onClick={isRTL ? onPrev : onNext}
        className="absolute right-4 md:right-8 z-40 p-3 text-[#E8D8B0] hover:text-[#D4AF37] bg-[#141414]/70 border border-[#D4AF37]/25 rounded-full transition-all hover:bg-[#202020] hover:scale-110 cursor-pointer"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

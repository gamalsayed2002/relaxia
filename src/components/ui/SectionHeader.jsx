import React from 'react';

export const SectionHeader = ({
  badge,
  heading,
  subheading,
  align = 'center', // 'center', 'left', 'right'
  className = '',
}) => {
  const alignClasses = {
    center: 'text-center items-center mx-auto',
    left: 'text-left items-start rtl:text-right rtl:items-start',
    right: 'text-right items-end rtl:text-left rtl:items-start',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignClasses[align]} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F7E6A9]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}

      {heading && (
        <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-[#FBF9F5] leading-tight mb-4">
          {heading}
        </h2>
      )}

      {/* Decorative luxury line with center diamond */}
      <div className="flex items-center justify-center gap-3 w-28 my-2">
        <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]"></span>
        <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]"></span>
        <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]"></span>
      </div>

      {subheading && (
        <p className="mt-4 text-base md:text-lg text-[#A39E93] leading-relaxed max-w-2xl font-light">
          {subheading}
        </p>
      )}
    </div>
  );
};

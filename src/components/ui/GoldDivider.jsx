import React from 'react';

export const GoldDivider = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center w-full py-4 ${className}`}>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent"></div>
      <div className="absolute flex items-center justify-center px-3 bg-[#0A0A0A]">
        <span className="w-2 h-2 rotate-45 border border-[#D4AF37] bg-[#0A0A0A]"></span>
      </div>
    </div>
  );
};

import React from 'react';

export const Button = ({
  children,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'ghost'
  size = 'md', // 'sm', 'md', 'lg'
  className = '',
  onClick,
  type = 'button',
  icon: Icon,
  disabled = false,
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-sm cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base tracking-wider",
  };

  const variants = {
    primary: "bg-gold-gradient text-[#0A0A0A] font-semibold hover:shadow-gold-glow hover:brightness-105 active:scale-[0.98]",
    secondary: "bg-[#181818] text-[#F7E6A9] border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#202020] hover:text-[#FFF0BD] active:scale-[0.98]",
    outline: "bg-transparent text-[#D4AF37] border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] active:scale-[0.98]",
    ghost: "bg-transparent text-[#E8D8B0] hover:text-[#D4AF37] hover:bg-white/5",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />}
      <span>{children}</span>
    </button>
  );
};

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';

export const Navbar = ({ onOpenBooking }) => {
  const { t, isRTL, toggleLanguage, lang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#why-us", label: t.nav.whyUs },
    { href: "#packages", label: t.nav.packages },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#D4AF37]/25 py-3 shadow-lg"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-[#D4AF37]/40 shadow-gold-glow group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                <img
                  src="/LOGO.png"
                  alt="Relaxia Spa Logo"
                  className="w-full h-full object-cover"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="flex flex-col text-left rtl:text-right">
                <span className="font-serif text-xl md:text-2xl font-semibold tracking-wider text-gold-gradient leading-none">
                  Relaxia
                </span>
                <span className="text-[10px] md:text-xs font-serif tracking-[0.25em] text-[#E8D8B0] uppercase mt-0.5">
                  ريلاكسيا سبا
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-[#D6D1C4] hover:text-[#D4AF37] transition-colors duration-200 font-medium py-1 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#D4AF37] to-[#F7E6A9] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Actions: Language Switch & Book CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-[#D4AF37]/30 bg-[#161616]/60 text-xs font-medium text-[#E8D8B0] hover:border-[#D4AF37] hover:text-white transition-all cursor-pointer"
                title={lang === 'en' ? "التحويل للغة العربية" : "Switch to English"}
              >
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t.nav.langSwitch}</span>
              </button>

              {/* Book Now Button */}
              <Button
                variant="primary"
                size="sm"
                onClick={onOpenBooking}
                className="font-semibold uppercase tracking-wider"
              >
                {t.nav.bookNow}
              </Button>
            </div>

            {/* Mobile Menu & Language Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-sm border border-[#D4AF37]/30 bg-[#161616] text-xs text-[#E8D8B0]"
              >
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-semibold">{t.nav.langSwitch}</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-[#E8D8B0] hover:text-white bg-[#141414] border border-[#D4AF37]/30 rounded-sm cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Drawer Content */}
          <div className="fixed top-0 bottom-0 right-0 rtl:right-auto rtl:left-0 w-80 max-w-[85vw] bg-[#0E0E0E] border-l rtl:border-l-0 rtl:border-r border-[#D4AF37]/30 p-6 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Top Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#D4AF37]/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37]">
                    <img src="/LOGO.png" alt="Relaxia" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-serif text-lg text-gold-gradient font-bold">
                    Relaxia
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#A39E93] hover:text-[#D4AF37]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Links */}
              <div className="py-6 flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm uppercase tracking-wider text-[#DCD8CF] hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#D4AF37]/20 flex flex-col gap-3">
              <Button
                variant="primary"
                size="md"
                className="w-full uppercase tracking-wider"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
              >
                {t.nav.bookNow}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

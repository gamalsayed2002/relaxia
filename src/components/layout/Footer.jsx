import React from 'react';
import { Phone, Mail, Clock, MessageCircle, ArrowUp } from 'lucide-react';
import { businessConfig } from '../../data/config';
import { useLanguage } from '../../context/LanguageContext';
import { GoldDivider } from '../ui/GoldDivider';

export const Footer = () => {
  const { t, isRTL, lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070707] text-[#A39E93] border-t border-[#D4AF37]/25 pt-16 pb-12 overflow-hidden">
      {/* Subtle gold radial background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#D4AF37]/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-[#D4AF37]/50 shadow-gold-glow flex-shrink-0">
                <img src="/LOGO.png" alt="Relaxia Spa" className="w-full h-full object-cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <span className="block font-serif text-2xl text-gold-gradient font-bold leading-tight">
                  Relaxia
                </span>
                <span className="text-xs font-serif text-[#D4AF37] tracking-[0.2em] uppercase">
                  {lang === 'ar' ? 'ريلاكسيا سبا' : 'Luxury Spa & Wellness'}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#8E8A80] leading-relaxed pt-2 font-light">
              {t.footer.description}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-sm bg-[#121212] border border-[#D4AF37]/25 flex items-center justify-center text-[#E8D8B0] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={businessConfig.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-sm bg-[#121212] border border-[#D4AF37]/25 flex items-center justify-center text-[#E8D8B0] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={businessConfig.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-sm bg-[#121212] border border-[#D4AF37]/25 flex items-center justify-center text-[#E8D8B0] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
                aria-label="Twitter / X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={businessConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-sm bg-[#121212] border border-[#D4AF37]/25 flex items-center justify-center text-[#E8D8B0] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.657 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs uppercase font-semibold tracking-widest text-[#FBF9F5] mb-5 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#D4AF37] pl-3 rtl:pl-0 rtl:pr-3">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">{t.nav.about}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">{t.nav.services}</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#D4AF37] transition-colors">{t.nav.whyUs}</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#D4AF37] transition-colors">{t.nav.packages}</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">{t.nav.gallery}</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#D4AF37] transition-colors">{t.nav.reviews}</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D4AF37] transition-colors">{t.nav.faq}</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div>
            <h4 className="text-xs uppercase font-semibold tracking-widest text-[#FBF9F5] mb-5 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#D4AF37] pl-3 rtl:pl-0 rtl:pr-3">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {t.services.items.map((item) => (
                <li key={item.id}>
                  <a href="#services" className="hover:text-[#D4AF37] transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <span className="text-[11px] text-[#D4AF37]/80">{item.duration}</span>
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#packages" className="text-[#D4AF37] hover:underline text-xs tracking-wider uppercase font-semibold">
                  + {t.packages.badge}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-semibold tracking-widest text-[#FBF9F5] mb-5 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#D4AF37] pl-3 rtl:pl-0 rtl:pr-3">
              {t.footer.contactTitle}
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>{lang === 'ar' ? businessConfig.hoursAr : businessConfig.hoursEn}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href={`tel:${businessConfig.phone}`} className="hover:text-[#D4AF37]" dir="ltr">
                  {businessConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href={`mailto:${businessConfig.email}`} className="hover:text-[#D4AF37]">
                  {businessConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <GoldDivider className="my-6 opacity-40" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A766D] gap-4">
          <p>{t.footer.allRights}</p>
          
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#D4AF37] transition-colors">{t.footer.privacyPolicy}</a>
            <span>•</span>
            <a href="#terms" className="hover:text-[#D4AF37] transition-colors">{t.footer.termsOfService}</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#141414] border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all ml-4 cursor-pointer"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

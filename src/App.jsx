import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { WhyUs } from './components/sections/WhyUs';
import { Packages } from './components/sections/Packages';
import { Gallery } from './components/sections/Gallery';
import { Testimonials } from './components/sections/Testimonials';
import { BookingCta } from './components/sections/BookingCta';
import { Faq } from './components/sections/Faq';
import { Contact } from './components/sections/Contact';
import { BookingModal } from './components/ui/BookingModal';
import { ServiceDetailModal } from './components/ui/ServiceDetailModal';
import { LightboxModal } from './components/ui/LightboxModal';

const MainLandingPage = () => {
  const { t, isRTL } = useLanguage();

  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState('');

  // Service Details Modal State
  const [selectedServiceDetail, setSelectedServiceDetail] = useState(null);

  // Gallery Lightbox Modal State
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenBooking = (serviceName = '') => {
    setBookingService(serviceName);
    setIsBookingOpen(true);
  };

  const handleOpenServiceDetail = (service) => {
    setSelectedServiceDetail(service);
  };

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#FBF9F5] flex flex-col justify-between selection:bg-[#D4AF37]/30 selection:text-[#F7E6A9]">
      {/* Top Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <About />
        <Services
          onSelectService={handleOpenServiceDetail}
          onBookService={(name) => handleOpenBooking(name)}
        />
        <WhyUs />
        <Packages onSelectPackage={(pkgName) => handleOpenBooking(pkgName)} />
        <Gallery onOpenLightbox={handleOpenLightbox} />
        <Testimonials />
        <BookingCta onOpenBooking={() => handleOpenBooking()} />
        <Faq />
        <Contact />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={bookingService}
      />

      {/* Service In-Depth Detail Modal */}
      <ServiceDetailModal
        isOpen={!!selectedServiceDetail}
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
        onBookNow={(name) => handleOpenBooking(name)}
      />

      {/* Fullscreen Gallery Lightbox */}
      <LightboxModal
        isOpen={isLightboxOpen}
        images={t.gallery.images}
        currentIndex={lightboxIndex}
        onClose={() => setIsLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev === 0 ? t.gallery.images.length - 1 : prev - 1))}
        onNext={() => setLightboxIndex((prev) => (prev === t.gallery.images.length - 1 ? 0 : prev + 1))}
        isRTL={isRTL}
      />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <MainLandingPage />
    </LanguageProvider>
  );
}

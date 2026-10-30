import React, { useState } from 'react';
import { X, Calendar, Clock, Sparkles, CheckCircle2, UserCheck, Globe2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from './Button';

export const BookingModal = ({ isOpen, onClose, preselectedService = '' }) => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: preselectedService || 'Swedish Massage',
    therapistGender: 'any',
    therapistNationality: 'any',
    date: '',
    time: '14:00',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#141414] border border-[#D4AF37]/35 rounded-sm p-6 md:p-8 shadow-2xl my-8">
        {/* Close button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 text-[#A39E93] hover:text-[#D4AF37] transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-[#FBF9F5] mb-2">
              {isRTL ? "تم استلام طلب الحجز بنجاح" : "Reservation Request Received"}
            </h3>
            <p className="text-sm text-[#A39E93] max-w-sm mb-6 leading-relaxed font-light">
              {isRTL
                ? "سيتواصل معك فريق الاستقبال فوراً لتأكيد توقيت جناحك الخاص والمعالج المختار."
                : "Our concierge team will contact you shortly to confirm your private suite, preferred time, and requested therapist."}
            </p>
            <Button variant="primary" onClick={resetAndClose}>
              {isRTL ? "إغلاق" : "Close"}
            </Button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-2 text-xs font-semibold tracking-widest uppercase rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#F7E6A9]">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{isRTL ? "ريلاكسيا سبا" : "Relaxia Sanctuary"}</span>
              </div>
              <h3 className="text-2xl font-serif text-[#FBF9F5]">
                {t.modal.quickBookingTitle}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A39E93] mb-1.5 font-medium">
                  {t.contact.fullName} *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={isRTL ? "مثال: عبدالله الشريف" : "e.g. Jonathan Wright"}
                  className="w-full bg-[#0D0D0D] border border-[#D4AF37]/20 rounded-sm px-3.5 py-2.5 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A39E93] mb-1.5 font-medium">
                  {t.contact.phone} *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+966 5x xxx xxxx"
                  className="w-full bg-[#0D0D0D] border border-[#D4AF37]/20 rounded-sm px-3.5 py-2.5 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              {/* Service Select */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A39E93] mb-1.5 font-medium">
                  {t.contact.serviceSelect}
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-[#0D0D0D] border border-[#D4AF37]/20 rounded-sm px-3.5 py-2.5 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
                >
                  <option value="Swedish Massage">{isRTL ? "المساج السويدي (Swedish)" : "Swedish Massage (60/90m)"}</option>
                  <option value="Deep Tissue Massage">{isRTL ? "مساج الأنسجة العميقة (Deep Tissue)" : "Deep Tissue Massage (60/90m)"}</option>
                  <option value="Hot Stone Therapy">{isRTL ? "مساج الأحجار الساخنة (Hot Stone)" : "Hot Stone Therapy (75/90m)"}</option>
                  <option value="Aromatherapy Massage">{isRTL ? "المساج العطري (Aromatherapy)" : "Aromatherapy Massage (60/90m)"}</option>
                  <option value="Signature Experience">{isRTL ? "باقة ريلاكسيا التوقيعية (Signature)" : "Signature Experience (100m)"}</option>
                  <option value="Ultimate Luxury Package">{isRTL ? "باقة الفخامة المطلقة (Ultimate Luxury)" : "Ultimate Luxury Package (135m)"}</option>
                </select>
              </div>

              {/* Therapist Gender & Nationality Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Gender */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A39E93] mb-1.5 font-medium flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{t.modal.therapistGender}</span>
                  </label>
                  <select
                    name="therapistGender"
                    value={formData.therapistGender}
                    onChange={handleChange}
                    className="w-full bg-[#0D0D0D] border border-[#D4AF37]/20 rounded-sm px-3 py-2.5 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    <option value="any">{t.modal.genderAny}</option>
                    <option value="female">{t.modal.genderFemale}</option>
                    <option value="male">{t.modal.genderMale}</option>
                  </select>
                </div>

                {/* Nationality */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A39E93] mb-1.5 font-medium flex items-center gap-1.5">
                    <Globe2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{t.modal.therapistNationality}</span>
                  </label>
                  <select
                    name="therapistNationality"
                    value={formData.therapistNationality}
                    onChange={handleChange}
                    className="w-full bg-[#0D0D0D] border border-[#D4AF37]/20 rounded-sm px-3 py-2.5 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    <option value="any">{t.modal.nationalityAny}</option>
                    <option value="egypt">{t.modal.nationalities.egypt}</option>
                    <option value="lebanon">{t.modal.nationalities.lebanon}</option>
                    <option value="syria">{t.modal.nationalities.syria}</option>
                    <option value="ukraine">{t.modal.nationalities.ukraine}</option>
                    <option value="russia">{t.modal.nationalities.russia}</option>
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A39E93] mb-1.5 font-medium flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#D4AF37]" />
                    <span>{t.contact.preferredDate}</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-[#0D0D0D] border border-[#D4AF37]/20 rounded-sm px-3 py-2.5 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A39E93] mb-1.5 font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    <span>{t.contact.preferredTime}</span>
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-[#0D0D0D] border border-[#D4AF37]/20 rounded-sm px-3 py-2.5 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                    <option value="09:00 PM">09:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A39E93] mb-1.5 font-medium">
                  {t.contact.specialNotes}
                </label>
                <textarea
                  name="notes"
                  rows="2"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder={isRTL ? "أي تفضيلات خاصة بالضغط أو نوع الزيت..." : "Any focus areas or preferences..."}
                  className="w-full bg-[#0D0D0D] border border-[#D4AF37]/20 rounded-sm px-3.5 py-2 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#D4AF37] resize-none"
                ></textarea>
              </div>

              {/* Single Primary Action Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full uppercase tracking-wider font-semibold py-3.5 text-sm"
                >
                  {t.modal.confirmBooking || t.contact.submitButton}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

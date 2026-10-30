import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, Send, CheckCircle2, Sparkles, UserCheck, Globe2 } from 'lucide-react';
import { businessConfig } from '../../data/config';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

export const Contact = () => {
  const { t, isRTL, lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    therapistGender: 'any',
    therapistNationality: 'any',
    date: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t.contact.badge}
          heading={t.contact.heading}
          subheading={t.contact.subheading}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact & Concierge Service */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <a
                href={`tel:${businessConfig.phone}`}
                className="p-5 rounded-sm bg-[#131313] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all flex flex-col justify-between group"
              >
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#9E998E] font-semibold block">
                    {t.contact.callUs}
                  </span>
                  <span className="text-sm font-semibold text-[#FBF9F5] mt-1 block" dir="ltr">
                    {businessConfig.phone}
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={businessConfig.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-sm bg-[#131313] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all flex flex-col justify-between group"
              >
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#9E998E] font-semibold block">
                    {t.contact.chatWhatsApp}
                  </span>
                  <span className="text-sm font-semibold text-[#FBF9F5] mt-1 block" dir="ltr">
                    {businessConfig.phone}
                  </span>
                </div>
              </a>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 rounded-sm bg-[#131313] border border-[#D4AF37]/20">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-xs uppercase tracking-wider text-[#9E998E] font-semibold">
                  {t.contact.operatingHours}
                </span>
              </div>
              <p className="text-base text-[#ECE8DE] font-medium">
                {lang === 'ar' ? businessConfig.hoursAr : businessConfig.hoursEn}
              </p>
              <p className="text-xs text-[#8E8A80] mt-2 font-light">
                {isRTL
                  ? "فريق الاستقبال في خدمتكم لتنسيق الحجوزات الخاصة والاستفسار طوال ساعات العمل."
                  : "Our concierge team is available throughout the day for private reservations and inquiries."}
              </p>
            </div>

            {/* VIP Concierge Guarantee Card */}
            <div className="p-6 rounded-sm bg-[#141414] border border-[#D4AF37]/35 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <h4 className="text-sm font-serif font-semibold text-gold-gradient">
                  {isRTL ? "خدمة الكونسيرج والخصوصية التامة" : "VIP Concierge & Privacy Guarantee"}
                </h4>
              </div>
              <p className="text-xs text-[#A8A398] leading-relaxed font-light">
                {isRTL
                  ? "نوفر لك خيارات مخصصة بالكامل لاختيار جنس المعالج وجنسيته لتنعم بأعلى درجات الراحة النفسية والجسدية في جناحك الخاص."
                  : "We offer tailored options to select therapist gender and nationality for your absolute comfort and peace of mind."}
              </p>
            </div>
          </div>

          {/* Right Column: Reservation Request Form */}
          <div className="lg:col-span-7 bg-[#131313] border border-[#D4AF37]/25 p-8 sm:p-10 rounded-sm">
            <h3 className="text-2xl font-serif text-[#FBF9F5] mb-2">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#A39E93] mb-8 font-light">
              {t.contact.formSub}
            </p>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-serif text-[#FBF9F5] mb-2">
                  {isRTL ? "تم استلام طلبك بنجاح" : "Request Sent Successfully"}
                </h4>
                <p className="text-xs sm:text-sm text-[#A39E93] max-w-sm mb-6">
                  {t.contact.successMsg}
                </p>
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                  {isRTL ? "إرسال طلب آخر" : "Submit Another Request"}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      placeholder={isRTL ? "الاسم الكريم" : "Your Name"}
                      className="w-full bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-sm px-4 py-3 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

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
                      className="w-full bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-sm px-4 py-3 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A39E93] mb-1.5 font-medium">
                      {t.contact.serviceSelect}
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-sm px-4 py-3 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      <option value="">{t.contact.selectPlaceholder}</option>
                      <option value="Swedish Massage">{isRTL ? "المساج السويدي (Swedish)" : "Swedish Massage"}</option>
                      <option value="Deep Tissue Massage">{isRTL ? "مساج الأنسجة العميقة (Deep Tissue)" : "Deep Tissue Massage"}</option>
                      <option value="Hot Stone Therapy">{isRTL ? "مساج الأحجار الساخنة (Hot Stone)" : "Hot Stone Therapy"}</option>
                      <option value="Aromatherapy Massage">{isRTL ? "المساج العطري (Aromatherapy)" : "Aromatherapy Massage"}</option>
                      <option value="Signature Experience">{isRTL ? "باقة ريلاكسيا التوقيعية (Signature)" : "Signature Experience"}</option>
                      <option value="Ultimate Luxury Package">{isRTL ? "باقة الفخامة المطلقة (Ultimate Luxury)" : "Ultimate Luxury Package"}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A39E93] mb-1.5 font-medium">
                      {t.contact.preferredDate}
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-sm px-4 py-3 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                {/* Therapist Gender & Nationality Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A39E93] mb-1.5 font-medium">
                      {t.modal.therapistGender}
                    </label>
                    <select
                      name="therapistGender"
                      value={formData.therapistGender}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-sm px-4 py-3 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      <option value="any">{t.modal.genderAny}</option>
                      <option value="female">{t.modal.genderFemale}</option>
                      <option value="male">{t.modal.genderMale}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A39E93] mb-1.5 font-medium">
                      {t.modal.therapistNationality}
                    </label>
                    <select
                      name="therapistNationality"
                      value={formData.therapistNationality}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-sm px-4 py-3 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
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

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A39E93] mb-1.5 font-medium">
                    {t.contact.specialNotes}
                  </label>
                  <textarea
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder={isRTL ? "أي استفسار أو تفضيل خاص لجلستك..." : "Any questions or special requests for your session..."}
                    className="w-full bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-sm px-4 py-3 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full uppercase tracking-wider font-semibold"
                    icon={Send}
                  >
                    {t.contact.submitButton}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

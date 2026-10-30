export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      whyUs: "Why Relaxia",
      packages: "Packages",
      gallery: "Gallery",
      reviews: "Reviews",
      faq: "FAQ",
      contact: "Contact",
      bookNow: "Book Now",
      langSwitch: "العربية",
    },
    hero: {
      badge: "Private Five-Star Sanctuary",
      titleLine1: "Escape the Ordinary.",
      titleLine2: "Embrace Relaxation.",
      description: "Immerse your senses in an elevated sanctuary of tailored therapeutic touch, warm golden ambiance, and restorative tranquility.",
      ctaPrimary: "Book Your Experience",
      ctaSecondary: "Explore Services",
      scrollHint: "Discover The Journey",
      stats: [
        { value: "100%", label: "Private Suites" },
        { value: "5-Star", label: "Luxury Standards" },
        { value: "Master", label: "Certified Therapists" },
      ]
    },
    about: {
      badge: "The Art of Serenity",
      heading: "Welcome to Relaxia",
      subheading: "Where mindful wellness meets bespoke indulgence.",
      p1: "At Relaxia Spa, we believe authentic relaxation is not merely a luxury—it is an art of restoring balance to the mind, body, and spirit. Every detail in our sanctuary is conceived to evoke a deep sense of stillness and renewal.",
      p2: "Step into secluded treatment suites bathed in soft golden warmth and ambient acoustics. Our master wellness artisans curate each touch using custom botanical elixirs, organic oils, and time-honored therapeutic rituals.",
      pillars: [
        {
          title: "Absolute Privacy",
          desc: "Independent sound-insulated private suites designed for uninterrupted peace and discretion."
        },
        {
          title: "Certified Master Artisans",
          desc: "Experienced therapists trained in international biomechanics and anatomical tension relief."
        },
        {
          title: "Pure Organic Botanicals",
          desc: "Bespoke therapeutic oils infused with rare blossoms, herbal extracts, and warm minerals."
        },
        {
          title: "Bespoke Treatment Rituals",
          desc: "Personal consultations ensuring pressure, aromas, and focus areas suit your unique body."
        }
      ],
      signatureNote: "An unforgettable sanctuary designed around you."
    },
    services: {
      badge: "Signature Therapies",
      heading: "Our Curated Treatments",
      subheading: "Handcrafted therapies designed to dissolve tension and restore inner harmony.",
      discoverMore: "Discover Ritual",
      durationPrefix: "Session Length",
      items: [
        {
          id: "swedish",
          title: "Swedish Massage",
          subtitle: "Classic Gentle Harmony & Circulation",
          image: "/images/swedish-massage.webp",
          duration: "60 / 90 Minutes",
          shortDesc: "A timeless full-body therapy utilizing rhythmic long gliding strokes and gentle kneads to boost circulation and relieve stress.",
          fullDesc: "Our Swedish ritual combines long fluid strokes (effleurage), gentle muscle kneading, and light friction. Using warm golden almond oil, this restorative experience eases nervous tension, supports cellular circulation, and leaves you in a serene state of quiet bliss.",
          benefits: ["Improves blood flow & lymphatic drainage", "Relieves superficial muscle stiffness", "Induces deep mental calm", "Rebalances energy levels"],
          idealFor: "Ideal for first-time guests or those seeking whole-body restoration after busy weeks."
        },
        {
          id: "deep-tissue",
          title: "Deep Tissue Massage",
          subtitle: "Targeted Chronic Tension Release",
          image: "/images/deep-tissue.webp",
          duration: "60 / 90 Minutes",
          shortDesc: "Deliberate slow strokes and concentrated deep pressure addressing persistent knots, myofascial strain, and postural tension.",
          fullDesc: "Conducted by our senior biomechanical therapists, this intensive treatment penetrates the sub-layer of musculature and connective fascia. Concentrated finger, palm, and forearm techniques release chronic knots, lower back stiffness, and upper shoulder fatigue.",
          benefits: ["Releases chronic postural knots & tightness", "Breaks down muscle adhesions", "Alleviates persistent neck & lower-back fatigue", "Accelerates physical recovery"],
          idealFor: "Perfect for active individuals, athletes, and desk executives dealing with stubborn tension."
        },
        {
          id: "hot-stone",
          title: "Hot Stone Therapy",
          subtitle: "Volcanic Basalt Heat Therapy",
          image: "/images/hot-stone.webp",
          duration: "75 / 90 Minutes",
          shortDesc: "Smooth, heated volcanic basalt stones glide with herbal elixirs across muscle meridians, melting away stiffness.",
          fullDesc: "Harvested from ancient riverbeds, smoothed volcanic basalt stones retain deep therapeutic warmth. Positioned strategically along key spinal and energy meridians, the radiating thermal energy penetrates deeply into muscle bellies, loosening tight fibers without aggressive force.",
          benefits: ["Deep thermal muscle relaxation", "Stimulates microcirculation", "Reduces stress hormones", "Deep grounding sensation for the nervous system"],
          idealFor: "Sublime for cold days, deep relaxation seekers, and those craving gentle yet profound thermal therapy."
        },
        {
          id: "aromatherapy",
          title: "Aromatherapy Massage",
          subtitle: "Sensory Essential Oil Alchemy",
          image: "/images/aromatherapy.webp",
          duration: "60 / 90 Minutes",
          shortDesc: "Custom-blended pure botanical essential oils paired with rhythmic fluid massage to nurture physical and emotional calm.",
          fullDesc: "Before your session, inhale our signature botanical essences: French lavender for serenity, organic eucalyptus for vitality, or warm sandalwood for grounding. Master hands diffuse these nutrient-rich essences directly into the skin, nurturing both emotional calm and muscular ease.",
          benefits: ["Sensory nervous system decompression", "Deep cellular skin hydration", "Enhances sleep quality and emotional wellbeing", "Relieves tension headaches"],
          idealFor: "Recommended for anyone seeking emotional release, sensory indulgence, and radiant skin."
        }
      ]
    },
    whyUs: {
      badge: "The Relaxia Standard",
      heading: "Why Choose Relaxia",
      subheading: "An uncompromising commitment to luxury, purity, and personalized hospitality.",
      cards: [
        {
          icon: "Moon",
          title: "Peaceful Atmosphere",
          desc: "Curated ambient lighting, acoustic isolation, and natural aromas immerse you in complete tranquil stillness."
        },
        {
          icon: "ShieldCheck",
          title: "Professional Care",
          desc: "Internationally qualified therapists adhering to strict hygiene protocols and personalized anatomy assessments."
        },
        {
          icon: "Sparkles",
          title: "Comfort & Privacy",
          desc: "Private changing lounges, en-suite marble showers, and absolute personal confidentiality at every step."
        },
        {
          icon: "Leaf",
          title: "Premium Wellness Experience",
          desc: "Organic botanical oils, heated ergonomic memory-foam tables, and post-session herbal tea ceremonies."
        }
      ]
    },
    packages: {
      badge: "Exclusive Packages",
      heading: "Curated Wellness Journeys",
      subheading: "Elevate your self-care with harmoniously bundled sessions and sensory rituals.",
      popularBadge: "Most Popular Experience",
      pricingNote: "Contact for Pricing & Customization",
      items: [
        {
          id: "pkg-essential",
          name: "Essential Relaxation",
          duration: "75 Minutes Total",
          desc: "A focused, revitalizing escape designed for weekly wellness maintenance and instant mental refreshment.",
          features: [
            "60-Min Swedish or Deep Tissue Massage",
            "Welcome Organic Herbal Infusion",
            "Targeted Scalp or Foot Pressure Acupressure",
            "Warm Botanical Towel Compress",
            "Private Suite Amenities"
          ],
          cta: "Inquire This Package"
        },
        {
          id: "pkg-signature",
          name: "Signature Experience",
          duration: "100 Minutes Total",
          popular: true,
          desc: "Our most acclaimed sensory ritual combining deep muscular therapy with comforting heated thermal basalt stones.",
          features: [
            "75-Min Swedish & Hot Stone Fusion",
            "Personalized Aromatherapy Oil Selection",
            "Detoxifying Thermal Back Compress",
            "Signature Warm Lavender Foot Cleansing Ritual",
            "Post-Treatment Gold Leaf Herbal Tea & Fruits"
          ],
          cta: "Reserve Signature Experience"
        },
        {
          id: "pkg-luxury",
          name: "Ultimate Luxury",
          duration: "135 Minutes Total",
          desc: "The pinnacle of royal indulgence. An immersive multi-step retreat that transforms tension into absolute bliss.",
          features: [
            "90-Min Full Body Hot Stone & Deep Tissue",
            "Revitalizing Botanical Body Exfoliation",
            "Hydrating Facial & Pressure Point Acupressure",
            "Private Marble Jacuzzi Access (Optional)",
            "Exclusive VIP Suite & Bespoke Refreshments"
          ],
          cta: "Book Ultimate Luxury"
        }
      ]
    },
    gallery: {
      badge: "Visual Sanctuary",
      heading: "Step Inside Relaxia",
      subheading: "A photographic glimpse into our private suites, calming architectural textures, and tranquil aesthetics.",
      viewFull: "View Fullscreen",
      images: [
        { src: "/images/gallery-01.webp", title: "Private Treatment Suite", category: "Suites" },
        { src: "/images/gallery-02.webp", title: "Grand Reception & Welcome Lounge", category: "Lobby" },
        { src: "/images/gallery-03.webp", title: "Botanical Oils & Luxury Linens", category: "Details" },
        { src: "/images/gallery-04.webp", title: "Tranquil Post-Session Lounge", category: "Sanctuary" },
        { src: "/images/gallery-05.webp", title: "Holistic Wellness Therapy Room", category: "Suites" },
        { src: "/images/gallery-06.webp", title: "Architectural Interior & Pool Serenity", category: "Architecture" },
      ]
    },
    testimonials: {
      badge: "Guest Impressions",
      heading: "Words From Our Valued Guests",
      subheading: "Reflections from clients who made Relaxia their sanctuary of choice.",
      sampleNote: "Sample feedback reflecting our five-star standards",
      items: [
        {
          name: "Alexander M.",
          title: "Executive Director",
          rating: 5,
          text: "Relaxia is in a league of its own. The atmosphere from the moment you step through the door transports you into pure tranquility. The Deep Tissue treatment dissolved weeks of corporate tension with incredible precision.",
          date: "Recent Guest"
        },
        {
          name: "Dr. Sarah Al-Khatib",
          title: "Consultant Physician",
          rating: 5,
          text: "As someone who understands the importance of neuromuscular health, I was immensely impressed by the therapists’ anatomical knowledge. The private suites are immaculate and luxurious in every nuance.",
          date: "Recent Guest"
        },
        {
          name: "Marcus Vance",
          title: "Architectural Designer",
          rating: 5,
          text: "The architectural lighting, warm stone textures, and heated basalt stones create a truly cinematic sensory experience. It is the finest spa visit I have experienced internationally.",
          date: "Recent Guest"
        }
      ]
    },
    bookingCta: {
      badge: "Reserve Your Sanctuary",
      title: "Your Moment of Relaxation Awaits.",
      subtitle: "Allow our master therapists to revitalize your mind and body. Advance reservations are recommended to secure your preferred private suite and time.",
      bookOnline: "Book Your Session",
      bookWhatsApp: "Reserve via WhatsApp",
      directPhone: "Direct Concierge Line"
    },
    faq: {
      badge: "Guest Inquiries",
      heading: "Frequently Asked Questions",
      subheading: "Helpful insights to prepare you for a seamless and peaceful visit.",
      items: [
        {
          q: "How do I book an appointment at Relaxia?",
          a: "You can book easily online through our instant booking modal, directly via our concierge WhatsApp, or by calling our desk. We advise booking at least 24 hours in advance to secure your preferred therapist and private suite."
        },
        {
          q: "Which massage treatment should I choose?",
          a: "If you want gentle whole-body relaxation, choose our Swedish Massage. For persistent muscular tension, posture strain, or athletic recovery, Deep Tissue is best. If you enjoy soothing warmth, our Hot Stone therapy is sublime. Our concierge can also customize a bespoke blend during check-in."
        },
        {
          q: "What session durations are offered?",
          a: "Our standard massage rituals are available in 60-minute, 75-minute, and 90-minute sessions. Extended multi-service packages run from 100 to 135 minutes."
        },
        {
          q: "What is your cancellation and rescheduling policy?",
          a: "We kindly request a minimum of 6 hours' notice for cancellations or appointment adjustments, allowing us to accommodate guests on our waitlist."
        },
        {
          q: "How should I prepare for my session?",
          a: "We recommend arriving 15 minutes before your scheduled appointment to enjoy a welcome herbal tonic and consult with your therapist. Please avoid heavy meals immediately prior to treatment. All plush robes, slippers, and private shower amenities are provided."
        }
      ]
    },
    contact: {
      badge: "Get in Touch",
      heading: "Location & Concierge",
      subheading: "We invite you to reach out for appointments, bespoke packages, or special requests.",
      callUs: "Phone Concierge",
      chatWhatsApp: "Instant WhatsApp",
      visitUs: "Sanctuary Location",
      operatingHours: "Operating Hours",
      formTitle: "Request a Reservation",
      formSub: "Fill in your details, and our concierge will confirm your session shortly.",
      fullName: "Full Name",
      phone: "Phone / WhatsApp",
      serviceSelect: "Select Treatment",
      selectPlaceholder: "-- Choose a Treatment --",
      preferredDate: "Preferred Date",
      preferredTime: "Preferred Time",
      specialNotes: "Special Notes or Focus Areas",
      submitButton: "Send Booking Request",
      successMsg: "Thank you. Your reservation request has been submitted to our concierge."
    },
    modal: {
      close: "Close",
      bookViaWhatsApp: "Confirm via WhatsApp",
      quickBookingTitle: "Reserve Your Private Suite",
      serviceDetails: "Ritual Details & Benefits",
      duration: "Duration",
      benefitsTitle: "Key Therapeutic Benefits",
      idealForTitle: "Recommended For",
      therapistGender: "Therapist Gender",
      genderAny: "No Preference (Any)",
      genderFemale: "Female Therapist",
      genderMale: "Male Therapist",
      therapistNationality: "Therapist Nationality",
      nationalityAny: "Any Nationality",
      nationalities: {
        egypt: "Egypt (Egyptian)",
        lebanon: "Lebanon (Lebanese)",
        syria: "Syria (Syrian)",
        ukraine: "Ukraine (Ukrainian)",
        russia: "Russia (Russian)"
      },
      confirmBooking: "Confirm Booking Request"
    },
    footer: {
      description: "Relaxia Spa (ريلاكسيا) is a private five-star massage and wellness retreat crafted for those who value ultimate privacy, bespoke restorative touch, and timeless serenity.",
      quickLinks: "Quick Navigation",
      servicesTitle: "Therapeutic Services",
      hoursTitle: "Sanctuary Hours",
      contactTitle: "Concierge Contact",
      allRights: "All rights reserved. Relaxia Spa © 2026.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن ريلاكسيا",
      services: "خدماتنا",
      whyUs: "لماذا ريلاكسيا",
      packages: "الباقات",
      gallery: "المعرض",
      reviews: "آراء الضيوف",
      faq: "الأسئلة الشائعة",
      contact: "اتصل بنا",
      bookNow: "احجز الآن",
      langSwitch: "English",
    },
    hero: {
      badge: "ملاذ النخبة الخاص — تجربة خمس نجوم",
      titleLine1: "اهرب من صخب الحياة.",
      titleLine2: "عِش تجربة الاسترخاء الفاخرة.",
      description: "انغمس بحواسك في واحة استثنائية تجمع بين فنون التدليك العلاجي المتخصص، والأجواء الذهبية الدافئة، والسكينة المطلقة التي تعيد لجسدك وروحك حيويتهما.",
      ctaPrimary: "احجز تجربتك الفاخرة",
      ctaSecondary: "استكشف خدماتنا",
      scrollHint: "اكتشف رحلة الاسترخاء",
      stats: [
        { value: "100%", label: "أجنحة خاصة بالكامل" },
        { value: "5 نجوم", label: "معايير الضيافة الفارهة" },
        { value: "خبراء", label: "معالجون معتمدون دولياً" },
      ]
    },
    about: {
      badge: "فن السكينة الملكي",
      heading: "مرحباً بكم في ريلاكسيا",
      subheading: "حيث يلتقي الاسترخاء الواعي بأرقى معايير الرفاهية والراحة.",
      p1: "في ريلاكسيا سبا، نؤمن بأن الاسترخاء ليس مجرد رفاهية عابرة، بل هو فن متكامل لإعادة التناغم والصفاء للجسد والذهن. لقد صُممت كل زاوية في ملاذنا لتمنحك شعوراً فورياً بالهدوء والخصوصية العالية.",
      p2: "ادخل إلى أجنحة علاجية خاصة تتميز بإضاءة ذهبية دافئة وهندسة صوتية مانعة للضوضاء. يقدّم خبراؤنا معالجات مصممة خصيصاً لاحتياجاتك باستخدام أنقى الزيوت العضوية ومستخلصات الزهور النادرة وتقنيات الضغط المدروسة.",
      pillars: [
        {
          title: "خصوصية مطلقة",
          desc: "أجنحة علاجية مستقلة ومعزولة صوتياً تضمن لك أعلى درجات الراحة والهدوء والسرية التامة."
        },
        {
          title: "خبراء معالجون معتمدون",
          desc: "فريق من المعالجين ذوي الخبرة العالمية في ميكانيكا العضلات وتخفيف التوتر والإجهاد العضلي."
        },
        {
          title: "زيوت نباتية عضوية 100%",
          desc: "تركيبات زيتية طبيعية فاخرة غنية بخلاصات اللافندر والأوكالبتوس وخشب الصندل الدافئ."
        },
        {
          title: "جلسات مخصصة لجسمك",
          desc: "استشارة فردية مسبقة لضبط مستوى الضغط ونوع الزيوت ومناطق التركيز المناسبة لجسدك."
        }
      ],
      signatureNote: "تجربة ضيافة استثنائية صُممت لتلبي تطلعاتك."
    },
    services: {
      badge: "معالجاتنا الاستثنائية",
      heading: "خدمات المساج والعناية الفاخرة",
      subheading: "جلسات علاجية مدروسة بعناية لإذابة التوتر وإعادة التوازن الطبيعي لحواسك.",
      discoverMore: "اكتشف الجلسة",
      durationPrefix: "مدة الجلسة",
      items: [
        {
          id: "swedish",
          title: "المساج السويدي",
          subtitle: "تناغم كلاسيكي، راحة عضلية، وتنشيط للدورة الدموية",
          image: "/images/swedish-massage.webp",
          duration: "60 / 90 دقيقة",
          shortDesc: "جلسة كلاسيكية شاملة تعتمد على حركات انسيابية متناغمة وضغط لطيف لتخفيف إجهاد الجسم وتنشيط الحيوية.",
          fullDesc: "تجمع هذه الجلسة الكلاسيكية الشهيرة بين الحركات الطولية الانسيابية، التدليك الخفيف، وحركات العجن الدقيقة لكامل الجسم. باستخدام زيت اللوز الذهبي الدافئ، تعمل هذه الجلسة على إزالة التوتر العصبي وتنشيط الدورة الدموية لتحظى براحة ذهنية وعضلية فريدة.",
          benefits: ["تحسين تدفق الدم والتصريف اللمفاوي", "تخفيف تيبس العضلات السطحي", "منح الذهن هدوءاً عميقاً", "استعادة النشاط والحيوية"],
          idealFor: "الخيار الأمثل للزيارة الأولى ولمن يبحثون عن استرخاء كامل للجسم بعد أسبوع عمل حافل."
        },
        {
          id: "deep-tissue",
          title: "مساج الأنسجة العميقة",
          subtitle: "معالجة مكثفة لشد العضلات المزمن والعقد التيبسية",
          image: "/images/deep-tissue.webp",
          duration: "60 / 90 دقيقة",
          shortDesc: "ضغط عميق ودقيق يستهدف الطبقات الداخلية للعضلات لإزالة العقد المزمنة وآلام الظهر والرقبة.",
          fullDesc: "يقوم خبراؤنا المتخصصون في علاج الأنسجة بتطبيق ضغط بطيء ومكثف باستخدام الأصابع وراحة اليد والساعد لاختراق الطبقات العميقة من العضلات والأغشية اللفافية، مما يفكك التصلبات في عضلات الظهر، الأكتاف، والرقبة.",
          benefits: ["تفكيك العقد العضلية وتخفيف التشنجات المزمنة", "إعادة مرونة الأنسجة العضلية", "علاج إجهاد الرقبة وأسفل الظهر لبيئات العمل المكتبية", "تسريع التعافي الرياضي"],
          idealFor: "مثالي للرياضيين وموظفي المكاتب ولمن يعانون من آلام مستمرة وتيبس في العضلات."
        },
        {
          id: "hot-stone",
          title: "مساج الأحجار الساخنة",
          subtitle: "علاج حراري بأحجار البازلت البركانية الدافئة",
          image: "/images/hot-stone.webp",
          duration: "75 / 90 دقيقة",
          shortDesc: "أحجار بركانية ملساء دافئة تنساب على مسارات الطاقة والظهر لتذيب التوتر بفضل الدفء العميق.",
          fullDesc: "تتميز أحجار البازلت البركانية بقدرتها الفائقة على الاحتفاظ بالحرارة العلاجية. يقوم المعالج بتوزيع الأحجار الساخنة المدهونة بالزيوت العطرية على طول العمود الفقري ومراكز الطاقة، لتتسلل الحرارة برفق لأعماق العضلات وتذيب التشنج بسلاسة.",
          benefits: ["استرخاء حراري عميق للأنسجة دون ضغط قاسي", "تنشيط الدورة الدموية وتوسيع الأوعية", "تقليل مستويات هرمون التوتر والإجهاد", "شعور متناهٍ بالدفء والسكينة الداخلية"],
          idealFor: "رائع في الأيام الباردة ولمن يرغبون بتجربة استرخاء حرارية ناعمة وعميقة التأثير."
        },
        {
          id: "aromatherapy",
          title: "المساج العطري (الأروماثيرابي)",
          subtitle: "سيمفونية حسية بالزيوت الطبيعية النقية",
          image: "/images/aromatherapy.webp",
          duration: "60 / 90 دقيقة",
          shortDesc: "مزيج فاخر من الزيوت العطرية النقية وحركات التدليك الهادئة لتغذية البشرة والارتقاء بالمزاج.",
          fullDesc: "قبل بدء جلستك، يتم اختيار مزيجك الخاص من بين زيوتنا العضوية الفاخرة: لافندر بروفانس المهدئ، الأوكالبتوس المنعش، أو خشب الصندل الدافئ. تعمل أيدي المعالج الانسيابية على امتصاص البشرة لهذه الزيوت النقية، مما يعيد توازن الحواس والنوم الهانئ.",
          benefits: ["تهدئة عميقة للجهاز العصبي الحسي", "ترطيب وتغذية مكثفة للبشرة بالزيوت الطبيعية", "تحسين جودة النوم ومحاربة الأرق", "تخفيف الصداع الناتج عن الإجهاد العصبي"],
          idealFor: "مناسب جداً للباحثين عن الصفاء الذهني والاسترخاء الحسي الفاخر وتحسين المزاج."
        }
      ]
    },
    whyUs: {
      badge: "معايير ريلاكسيا",
      heading: "لماذا يفضل النخبة ريلاكسيا",
      subheading: "التزام راسخ بالجودة المطلقة، أعلى درجات الخصوصية، والخدمة الفندقية الراقية.",
      cards: [
        {
          icon: "Moon",
          title: "أجواء ملهمة للسكينة",
          desc: "إضاءة هادئة مدروسة، عزل صوتي متطور، وروائح عطرية طبيعية تنقلك لعالم بعيد عن الضغوطات."
        },
        {
          icon: "ShieldCheck",
          title: "رعاية وعناية احترافية",
          desc: "أخصائيون معتمدون دولياً يتبعون أعلى معايير النظافة والتعقيم والتقييم العضلي الدقيق."
        },
        {
          icon: "Sparkles",
          title: "أعلى درجات الخصوصية والراحة",
          desc: "أجنحة خاصة بالكامل مع شاور رخامي مستقل وغرف تبديل تضمن سرية تامة وراحة لا تضاهى."
        },
        {
          icon: "Leaf",
          title: "تجربة عافية ملكية متكاملة",
          desc: "زيوت عضوية نقية، أسرّة مساج تدفئة مريحة تدعم الظهر، وضيافة شاي الأعشاب الطبيعي الفاخر."
        }
      ]
    },
    packages: {
      badge: "باقات متكاملة",
      heading: "رحلات العافية المختارة",
      subheading: "ارتقِ بروتين عنايتك مع باقات علاجية متناغمة تمنحك أقصى درجات التجدد.",
      popularBadge: "الباقة الأكثر طلباً",
      pricingNote: "تواصل معنا للاستفسار وتنسيق الباقة",
      items: [
        {
          id: "pkg-essential",
          name: "باقة الاسترخاء الأساسي",
          duration: "75 دقيقة إجمالية",
          desc: "جلسة مركزة صُممت للحفاظ على التوازن الدوري واستعادة الطاقة الذهنية والنشاط اليومي.",
          features: [
            "جلسة مساج سويدي أو أنسجة عميقة (60 دقيقة)",
            "مشروب الأعشاب العضوي الترحيبي",
            "تدليك نقطي مهدئ لفروة الرأس أو القدمين",
            "كمادات مناشف عطرية دافئة",
            "استخدام مرافق الجناح الخاص"
          ],
          cta: "استفسر عن هذه الباقة"
        },
        {
          id: "pkg-signature",
          name: "تجربة ريلاكسيا التوقيعية",
          duration: "100 دقيقة إجمالية",
          popular: true,
          desc: "تجربتنا الأكثر تميزاً وإشادة، تجمع بين التدليك العضلي ودفء الأحجار البركانية العلاجية.",
          features: [
            "مساج مدمج سويدي وأحجار بركانية ساخنة (75 دقيقة)",
            "اختيار شخصي مسبق لمزيج الزيوت العطرية",
            "كمادة ظهر دافئة بالأعشاب الطبيعية",
            "طقوس تنظيف القدمين برغوة اللافندر الدافئة",
            "شاي الأعشاب الفاخر مع لمسات الفاكهة المجففة"
          ],
          cta: "احجز التجربة التوقيعية"
        },
        {
          id: "pkg-luxury",
          name: "باقة الفخامة المطلقة",
          duration: "135 دقيقة إجمالية",
          desc: "قمة التدليل الملكي. رحلة حسية متعددة المراحل تحول أي إجهاد إلى استرخاء كامل لا يُنسى.",
          features: [
            "مساج شامل بالأحجار الساخنة والأنسجة العميقة (90 دقيقة)",
            "جلسة تقشير طبيعي للجسم بالمستخلصات العطرية",
            "عناية مرطبة للوجه مع تدليك نقاط الضغط",
            "استمتاع خاص بالجاكوزي الرخامي (اختياري)",
            "جناح كبار الشخصيات VIP مع ضيافة استثنائية"
          ],
          cta: "احجز باقة الفخامة المطلقة"
        }
      ]
    },
    gallery: {
      badge: "معرض الصور",
      heading: "جولة في ملاذ ريلاكسيا",
      subheading: "لقطات توثق روعة الأجنحة الخاصة، التفاصيل المعمارية، والأجواء الهادئة.",
      viewFull: "عرض بالحجم الكامل",
      images: [
        { src: "/images/gallery-01.webp", title: "جناح المساج الخاص الفاخر", category: "الأجنحة" },
        { src: "/images/gallery-02.webp", title: "صالة الاستقبال الملكية الفارهة", category: "الاستقبال" },
        { src: "/images/gallery-03.webp", title: "الزيوت العطرية والمناشف الفاخرة", category: "التفاصيل" },
        { src: "/images/gallery-04.webp", title: "لاونج الاسترخاء بعد الجلسة", category: "الملاذ" },
        { src: "/images/gallery-05.webp", title: "غرفة العلاج والعافية المتكاملة", category: "الأجنحة" },
        { src: "/images/gallery-06.webp", title: "الهندسة المعمارية وأجواء السبا", category: "العمارة" },
      ]
    },
    testimonials: {
      badge: "انطباعات الضيوف",
      heading: "ما يقوله ضيوفنا الكرام",
      subheading: "شهادات من عملاء جعلوا من ريلاكسيا وجهتهم الأولى للراحة والهدوء.",
      sampleNote: "آراء نموذجية تعكس معايير الخدمة ذات الخمس نجوم",
      items: [
        {
          name: "أحمد مجدي",
          title: "مهندس ديكور",
          rating: 5,
          text: "المكان بجد في حتة تانية خالص! من أول ما بتدخل بتحس إنك فصلت تماماً عن دوشة اليوم والزحمة وضغط الشغل. مساج الأنسجة العميقة فرق معايا جداً وفك كل تشنجات ضهري ورجعلي نشاطي. نظافة واهتمام 10 على 10 تسلم إيديكم بجد.",
          date: "عميل دائم"
        },
        {
          name: "مروة عبد الرحمن",
          title: "أخصائية تسويق",
          rating: 5,
          text: "أحلى وأرقى مساج جربته بجد! الخصوصية عندهم فوق الممتازة والجناح مجهز ومريح جداً وريحته تجنن. مساج الأحجار الساخنة مع الزيوت العطرية خلاني نمت من كتر الاسترخاء، تجربة راقية وتستاهل كل مليم.",
          date: "ضيفة حديثة"
        },
        {
          name: "كريم الشناوي",
          title: "رائد أعمال",
          rating: 5,
          text: "مكان شيك جداً ومرتب لأبعد حد، والناس هناك فاهمين شغلهم بجد ومحترفين جداً في المساج. الإضاءة الهادية والموسيقى بتخليك في مود تاني خالص. من أحسن الأماكن اللي زرتها وبقت وجهتي الأساسية أول ما أحتاج أفصل.",
          date: "عميل مستمر"
        }
      ]
    },
    bookingCta: {
      badge: "احجز ملاذك الخاص",
      title: "لحظتك الخاصة من الاسترخاء بانتظارك.",
      subtitle: "دع خبراء ريلاكسيا يعيدون لجسدك الراحة ولذهنك الصفاء. نوصي بالحجز المسبق لضمان اختيار الجناح والتوقيت المفضل لديك.",
      bookOnline: "احجز جلستك الآن",
      bookWhatsApp: "الحجز المباشر عبر واتساب",
      directPhone: "خط الاستقبال المباشر"
    },
    faq: {
      badge: "الأسئلة الشائعة",
      heading: "كل ما تود معرفته عن زيارتك",
      subheading: "إجابات واضحة تساعدك في التخطيط لزيارة مريحة وسلسة إلى ريلاكسيا.",
      items: [
        {
          q: "كيف يمكنني حجز موعد في ريلاكسيا؟",
          a: "يمكنك الحجز بسهولة عبر نموذج الحجز في الموقع، أو مباشرة عن طريق محادثة الواتساب مع موظف الاستقبال، أو بالاتصال الهاتفي. نفضل الحجز قبل 24 ساعة لضمان توفر أجنحتنا الخاصة."
        },
        {
          q: "ما هي الجلسة الأنسب لاحتياجي الشخصي؟",
          a: "إذا كنت تبحث عن استرخاء عام وهدوء للجسم، ننصحك بالمساج السويدي. أما إذا كنت تعاني من تيبس وتشنج في الرقبة والظهر، فمساج الأنسجة العميقة هو الأنسب. وإذا أردت الدفء الشديد وإذابة الإجهاد دون ضغط قوي، فجلسة الأحجار الساخنة هي الاختيار الأمثل."
        },
        {
          q: "كم تبلغ مدة الجلسات المتاحة؟",
          a: "تتراوح جلساتنا الفردية بين 60، 75، و 90 دقيقة. بينما تستغرق باقات الاسترخاء الشاملة ما بين 100 إلى 135 دقيقة لضمان تجربة متكاملة غير مستعجلة."
        },
        {
          q: "ما هي سياسة الإلغاء أو تعديل الموعد؟",
          a: "نرجو إشعارنا قبل 6 ساعات على الأقل في حال رغبتك بتعديل أو إلغاء موعدك، لنتمكن من خدمة الضيوف المسجلين على قائمة الانتظار."
        },
        {
          q: "ما الذي يجب عليّ تحضيره قبل القدوم للجلسة؟",
          a: "نوصي بالوصول قبل 15 دقيقة من الموعد للاستمتاع بمشروب الاستقبال واستشارة المعالج. يفضل تجنب الوجبات الثقيلة قبل الجلسة مباشرة. نوفر لك في جناحك كافة الأرواب الفاخرة والمناشف ومستلزمات الاستحمام بالكامل."
        }
      ]
    },
    contact: {
      badge: "تواصل معنا",
      heading: "معلومات التواصل والكونسيرج",
      subheading: "يسعدنا الرد على استفساراتكم وحجز مواعيدكم وتنسيق الباقات الخاصة على مدار الأسبوع.",
      callUs: "اتصال هاتفي",
      chatWhatsApp: "محادثة فورية واتساب",
      visitUs: "موقع المركز",
      operatingHours: "ساعات العمل",
      formTitle: "طلب حجز موعد",
      formSub: "أدخل بياناتك وسيتواصل معك فريق الاستقبال لتأكيد توقيت جلستك.",
      fullName: "الاسم الكامل",
      phone: "رقم الجوال / الواتساب",
      serviceSelect: "نوع الجلسة المطلوبة",
      selectPlaceholder: "-- اختر الخدمة المطلوبة --",
      preferredDate: "التاريخ المفضل",
      preferredTime: "الوقت المفضل",
      specialNotes: "ملاحظات إضافية أو تركيز على منطقة معينة",
      submitButton: "إرسال طلب الحجز",
      successMsg: "شكراً لك. تم إرسال طلب الحجز بنجاح وسيتواصل معك فريق الاستقبال فوراً."
    },
    modal: {
      close: "إغلاق",
      bookViaWhatsApp: "تأكيد عبر واتساب",
      quickBookingTitle: "حجز موعد في جناح ريلاكسيا الخاص",
      serviceDetails: "تفاصيل وفوائد الجلسة",
      duration: "المدة",
      benefitsTitle: "الفوائد العلاجية الرئيسية",
      idealForTitle: "الجلسة مثالية لـ",
      therapistGender: "جنس المدلك",
      genderAny: "لا يوجد تفضيل (حسب المتاح)",
      genderFemale: "أنثى (معالجة)",
      genderMale: "ذكر (معالج)",
      therapistNationality: "جنسية المدلك",
      nationalityAny: "أي جنسية متاحة",
      nationalities: {
        egypt: "مصر",
        lebanon: "لبنان",
        syria: "سوريا",
        ukraine: "أوكرانيا",
        russia: "روسيا"
      },
      confirmBooking: "تأكيد طلب الحجز"
    },
    footer: {
      description: "ريلاكسيا سبا (Relaxia Spa) ملاذ خمس نجوم فاخر للتدليك والعافية، صُمم خصيصاً لمن يقدرون الخصوصية العالية، اللمسة العلاجية المتخصصة، والسكينة الدائمة.",
      quickLinks: "روابط سريعة",
      servicesTitle: "الخدمات العلاجية",
      hoursTitle: "أوقات العمل والزيارة",
      contactTitle: "التواصل والحجز",
      allRights: "جميع الحقوق محفوظة. ريلاكسيا سبا © 2026.",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "الشروط والأحكام"
    }
  }
};

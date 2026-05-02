import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import PageHero from '../components/PageHero';

const pageLocal: Record<string, any> = {
  tr: {
    story: {
      p1: '1977 yılında temelleri atılan ESMAKSAN Makine, yarım asra yaklaşan deneyimiyle ağır iş makineleri sektöründe güvenin, kalitenin ve mühendislik başarısının simgesi haline gelmiştir.',
      p2: 'Kuruluşundan bugüne kadar geçen sürede edindiği bilgi birikimiyle; genel inşaat, madencilik, karayolu yapımı ve altyapı projelerinde kullanılan ekipmanlara yönelik yüksek kaliteli yedek parça üretimi ve satışı gerçekleştirmektedir.',
      p3: 'Dünya çapında tanınan Caterpillar, Komatsu, Kawasaki, Volvo, Clark, Hitachi, Sumitomo, Allison, Furukawa ve ZF gibi markalara uygun yedek parçalar, Ankara’daki modern ve ileri teknoloji ile donatılmış üretim tesislerimizde, titizlikle ve uluslararası kalite standartlarına uygun şekilde üretilmektedir.',
      p4: 'Bugün, 2.500’ü aşkın ürün çeşidini barındıran geniş portföyümüz; güçlü mühendislik altyapımız, son teknoloji makine parkurumuz ve uzman kadromuzla birleşerek hem yurt içindeki hem de küresel pazarlardaki iş ortaklarımıza dayanıklılık, güven ve uzun vadeli performans sunmaktadır.',
      p5: 'Müşteri odaklı hizmet anlayışımızla, yalnızca yedek parça temin etmekle kalmıyor; aynı zamanda teknik destek, satış sonrası hizmetler ve ihtiyaçlara özel mühendislik çözümleri sunarak iş ortaklarımıza gerçek anlamda değer katıyoruz.'
    },
    global: {
      title: 'KÜRESEL <br/> GÜCÜMÜZ',
      desc1: 'ESMAKSAN olarak sadece Türkiye pazarında değil, Avrupa, Orta Doğu, Afrika, Asya ve Güney Amerika başta olmak üzere dünyanın birçok bölgesinde tercih edilen bir markayız.',
      desc2: '30’dan fazla ülkeye ihracat ulaştırıyoruz.',
      countries: ['ABD', 'ALMANYA', 'İTALYA', 'İSPANYA', 'MISIR', 'SUUDİ ARABİSTAN', 'BAE', 'CEZAYİR', 'FAS', 'İRAN', 'RUSYA', 'HİNDİSTAN', 'BELÇİKA', 'KAZAKİSTAN', 'ŞİLİ', 'BREZİLYA']
    },
    defense: {
      tag: 'Stratejik Vizyon',
      title: 'SAVUNMA SANAYİİNDE <br/> <span className="text-brand">MİLLİ MÜHENDİSLİK</span> VE ÜRETİM',
      p1: 'Yüksek mühendislik kabiliyetimiz, üretim gücümüz ve kalite odaklı yaklaşımımızla, Türk savunma sanayii için stratejik bir çözüm ortağı olma hedefiyle çalışmalarımıza yön veriyoruz.',
      p2: 'ESMAKSAN olarak, savunma sanayiinde yer almak sadece bir ticari hedef değil; ülkemizin teknolojik bağımsızlığına katkı sunma misyonudur.',
      p3: 'Yedek parça üretiminde edindiğimiz yarım asırlık deneyimi, askeri araçlar, zırhlı sistemler, lojistik destek ekipmanları ve kritik bileşen üretimi gibi alanlara taşımak üzere yatırımlarımızı artırıyoruz.'
    }
  },
  en: {
    story: {
      p1: 'Founded in 1977, ESMAKSAN Machinery has become a symbol of trust, quality, and engineering success in the heavy construction machinery sector with nearly half a century of experience.',
      p2: 'With the knowledge it has acquired since its establishment; it manufactures and sells high-quality spare parts for equipment used in general construction, mining, road construction, and infrastructure projects.',
      p3: 'Spare parts suitable for globally recognized brands such as Caterpillar, Komatsu, Kawasaki, Volvo, Clark, Hitachi, Sumitomo, Allison, Furukawa, and ZF are meticulously produced in our modern and high-tech production facilities in Ankara in accordance with international quality standards.',
      p4: 'Today, our extensive portfolio containing more than 2,500 product lines, combined with our strong engineering infrastructure, state-of-the-art machinery park, and expert staff, offers durability, trust, and long-term performance to our business partners in both domestic and global markets.',
      p5: 'With our customer-oriented service approach, we not only provide spare parts but also add real value to our business partners by offering technical support, after-sales services, and customized engineering solutions.'
    },
    global: {
      title: 'OUR GLOBAL <br/> POWER',
      desc1: 'As ESMAKSAN, we are a preferred brand not only in the Turkish market but also in many regions of the world, especially in Europe, the Middle East, Africa, Asia, and South America.',
      desc2: 'We export to more than 30 countries.',
      countries: ['USA', 'GERMANY', 'ITALY', 'SPAIN', 'EGYPT', 'SAUDI ARABIA', 'UAE', 'ALGERIA', 'MOROCCO', 'IRAN', 'RUSSIA', 'INDIA', 'BELGIUM', 'KAZAKHSTAN', 'CHILE', 'BRAZIL']
    },
    defense: {
      tag: 'Strategic Vision',
      title: 'NATIONAL ENGINEERING <br/> AND PRODUCTION IN THE <span className="text-brand">DEFENSE INDUSTRY</span>',
      p1: 'With our high engineering capability, production power, and quality-oriented approach, we direct our work with the aim of being a strategic solution partner for the Turkish defense industry.',
      p2: 'As ESMAKSAN, taking part in the defense industry is not just a commercial goal; it is a mission to contribute to our country\'s technological independence.',
      p3: 'We are increasing our investments to transfer our half-century of experience in spare parts production to areas such as military vehicles, armored systems, logistical support equipment, and critical component production.'
    }
  },
  ru: {
    story: {
      p1: 'Основанная в 1977 году компания ESMAKSAN Machinery стала символом доверия, качества и инженерного успеха в секторе тяжелой строительной техники благодаря почти полувековому опыту.',
      p2: 'Обладая знаниями, накопленными с момента основания, компания производит и продает высококачественные запасные части для оборудования, используемого в гражданском строительстве, горнодобывающей промышленности, дорожном строительстве и инфраструктурных проектах.',
      p3: 'Запасные части, подходящие для всемирно известных брендов, таких как Caterpillar, Komatsu, Kawasaki, Volvo, Clark, Hitachi, Sumitomo, Allison, Furukawa и ZF, тщательно производятся на наших современных и высокотехнологичных производственных площадках в Анкаре в соответствии с международными стандартами качества.',
      p4: 'Сегодня наше обширное портфолио, включающее более 2500 видов продукции, в сочетании с мощной инженерной инфраструктурой, самым современным парком оборудования и квалифицированным персоналом, обеспечивает долговечность, доверие и долгосрочную производительность для наших деловых партнеров как на внутреннем, так и на мировом рынках.',
      p5: 'Благодаря клиентоориентированному подходу к обслуживанию мы не только поставляем запасные части, но и создаем реальную ценность для наших деловых партнеров, предлагая техническую поддержку, послепродажное обслуживание и индивидуальные инженерные решения.'
    },
    global: {
      title: 'НАША ГЛОБАЛЬНАЯ <br/> СИЛА',
      desc1: 'Как ESMAKSAN, мы являемся предпочтительным брендом не только на турецком рынке, но и во многих регионах мира, особенно в Европе, на Ближнем Востоке, в Африке, Азии и Южной Америке.',
      desc2: 'Мы экспортируем в более чем 30 стран.',
      countries: ['США', 'ГЕРМАНИЯ', 'ИТАЛИЯ', 'ИСПАНИЯ', 'ЕГИПЕТ', 'САУДОВСКАЯ АРАВИЯ', 'ОАЭ', 'АЛЖИР', 'МАРОККО', 'ИРАН', 'РОССИЯ', 'ИНДИЯ', 'БЕЛЬГИЯ', 'КАЗАХСТАН', 'ЧИЛИ', 'БРАЗИЛИЯ']
    },
    defense: {
      tag: 'Стратегическое видение',
      title: 'НАЦИОНАЛЬНАЯ ИНЖЕНЕРИЯ <br/> И ПРОИЗВОДСТВО В <span className="text-brand">ОБОРОННОЙ ПРОМЫШЛЕННОСТИ</span>',
      p1: 'Обладая высокими инженерными возможностями, производственными мощностями и ориентированным на качество подходом, мы направляем нашу работу на то, чтобы стать стратегическим партнером по решениям для турецкой оборонной промышленности.',
      p2: 'Для ESMAKSAN участие в оборонной промышленности - это не просто коммерческая цель; это миссия по внесению вклада в технологическую независимость нашей страны.',
      p3: 'Мы увеличиваем наши инвестиции, чтобы перенести наш полувековой опыт производства запасных частей на такие сферы, как военная техника, бронированные системы, оборудование для логистической поддержки и производство критически важных компонентов.'
    }
  },
  ar: {
    story: {
      p1: 'منذ تأسيسها في عام 1977، أصبحت ESMAKSAN Machinery رمزًا للثقة والجودة والنجاح الهندسي في قطاع آلات البناء الثقيلة بخبرة تقارب نصف قرن.',
      p2: 'بفضل المعرفة التي اكتسبتها منذ تأسيسها؛ تقوم بتصنيع وبيع قطع غيار عالية الجودة للمعدات المستخدمة في البناء العام والتعدين وبناء الطرق ومشاريع البنية التحتية.',
      p3: 'يتم إنتاج قطع الغيار المناسبة للعلامات التجارية المعترف بها عالميًا مثل كاترپيلار وكوماتسو وكاواساكي وفولفو وكلارك وهيتاشي وسوميتومو وأليسون وفوروكاوا وZF بدقة في مرافق الإنتاج الحديثة وذات التكنولوجيا العالية لدينا في أنقرة وفقًا لمعايير الجودة الدولية.',
      p4: 'اليوم، تقدم محفظتنا الواسعة التي تحتوي على أكثر من 2500 خط إنتاج، جنبًا إلى جنب مع بنيتنا التحتية الهندسية القوية وأحدث الآلات والموظفين الخبراء، المتانة والثقة والأداء طويل الأجل لشركائنا التجاريين في كل من الأسواق المحلية والعالمية.',
      p5: 'من خلال نهج الخدمة الموجه نحو العملاء، فإننا لا نقدم قطع الغيار فحسب، بل نضيف أيضًا قيمة حقيقية لشركائنا التجاريين من خلال تقديم الدعم الفني وخدمات ما بعد البيع والحلول الهندسية المخصصة.'
    },
    global: {
      title: 'قوتنا <br/> العالمية',
      desc1: 'بصفتنا ESMAKSAN، نحن علامة تجارية مفضلة ليس فقط في السوق التركية ولكن أيضًا في العديد من مناطق العالم، وخاصة في أوروبا والشرق الأوسط وأفريقيا وآسيا وأمريكا الجنوبية.',
      desc2: 'نقوم بالتصدير إلى أكثر من 30 دولة.',
      countries: ['الولايات المتحدة', 'ألمانيا', 'إيطاليا', 'إسبانيا', 'مصر', 'المملكة العربية السعودية', 'الإمارات العربية المتحدة', 'الجزائر', 'المغرب', 'إيران', 'روسيا', 'الهند', 'بلجيكا', 'كازاخستان', 'تشيلي', 'البرازيل']
    },
    defense: {
      tag: 'رؤية استراتيجية',
      title: 'الهندسة الوطنية <br/> والإنتاج في <span className="text-brand">صناعة الدفاع</span>',
      p1: 'بفضل قدرتنا الهندسية العالية وقوتنا الإنتاجية ونهجنا الموجه نحو الجودة، فإننا نوجه عملنا بهدف أن نكون شريك حل استراتيجي لصناعة الدفاع التركية.',
      p2: 'بصفتنا ESMAKSAN، فإن المشاركة في صناعة الدفاع ليس مجرد هدف تجاري؛ إنها مهمة للمساهمة في الاستقلال التكنولوجي لبلدنا.',
      p3: 'نحن نزيد استثماراتنا لنقل خبرتنا التي نصف قرن في إنتاج قطع الغيار إلى مجالات مثل المركبات العسكرية والأنظمة المدرعة ومعدات الدعم اللوجستي وإنتاج المكونات الهامة.'
    }
  }
};

const About: React.FC = () => {
  const { t, isRTL, language } = useLanguage();
  const PAGE = pageLocal[language] || pageLocal.tr;

  const statValues: Record<string, string> = {
    tr: "Hakkımızda",
    en: "About Us",
    ru: "О нас",
    ar: "من نحن"
  };

  const statDescMap: Record<string, { year: string, default: string }> = {
    tr: { year: 'Endüstriyel tecrübe ve güven', default: 'Hassas ve kaliteli üretim' },
    en: { year: 'Industrial experience and trust', default: 'Precision and quality production' },
    ru: { year: 'Промышленный опыт и доверие', default: 'Точное и качественное производство' },
    ar: { year: 'الخبرة الصناعية والثقة', default: 'إنتاج دقيق وعالي الجودة' }
  };

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden">
      
      <PageHero 
        tag={t.about.hero.tag}
        title={t.about.hero.title}
        highlight={t.about.hero.highlight}
        statValue={statValues[language] || "Hakkımızda"}
        statIcon={
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />

      {/* Subtle background ambient glow */}
      <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] bg-[#FACC15]/5 blur-[120px] rounded-full pointer-events-none" />
</svg>
        }
      />

      {/* Main Company Story Section */}
      <section className="py-24 industrial-grid overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/3 shrink-0"
            >
              <h2 className="text-sm font-black text-brand tracking-[0.3em] uppercase mb-6 drop-shadow-sm">1977 - 2025</h2>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.1] uppercase tracking-tighter">
                ESMAKSAN <br/>
                <span className="text-brand">MAKİNE SANAYİ</span> <br/>
                TİCARET LTD. ŞTİ.
              </h1>
              <div className="w-20 h-2 bg-brand mt-10" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 space-y-10"
            >
              <p className="text-xl md:text-2xl text-white font-bold leading-tight tracking-tight border-l-4 border-brand/20 pl-8">
                {PAGE.story.p1}
              </p>
              
              <div className="columns-1 md:columns-2 gap-12 text-white/70 text-base leading-relaxed font-medium space-y-6">
                <p>{PAGE.story.p2}</p>
                <p>{PAGE.story.p3}</p>
                <p>{PAGE.story.p4}</p>
                <p>{PAGE.story.p5}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Strength Section */}
      <section className="py-32 bg-ink text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/5 -skew-x-12 translate-x-32" />
        <div className="max-w-[1600px] mx-auto px-6 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className={`flex-1 space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className={`inline-flex items-center gap-4 text-brand ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="w-12 h-px bg-current" />
                <span className="text-sm font-black tracking-widest uppercase">Global Network</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none" dangerouslySetInnerHTML={{ __html: PAGE.global.title }}></h2>
              <p className="text-white/70 text-lg leading-relaxed font-medium max-w-2xl">
                {PAGE.global.desc1}
                <span className="text-brand block mt-4 font-bold text-2xl tracking-tight italic">{PAGE.global.desc2}</span>
              </p>
              <div className={`flex flex-wrap gap-x-6 gap-y-3 pt-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                {PAGE.global.countries.map((country: string) => (
                  <span key={country} className="text-[10px] md:text-xs font-black text-white/30 hover:text-[#FACC15] transition-colors cursor-default tracking-widest">
                    {country}
                  </span>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-[500px] aspect-square relative border border-white/10 p-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800" 
                alt="Global Shipping" 
                className="w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-brand -translate-x-2 -translate-y-2" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Defense Industry Vision */}
      <section className="py-32 industrial-grid">
        <div className="max-w-[1600px] mx-auto px-6 md:px-8">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[40px] p-12 md:p-24 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <span className="inline-block py-2 px-6 bg-ink text-white text-[10px] font-black tracking-[0.4em] uppercase mb-10 rounded-full">
                {PAGE.defense.tag}
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-12" dangerouslySetInnerHTML={{ __html: PAGE.defense.title }}></h2>
              <div className="h-px w-32 bg-brand/30 mx-auto mb-12" />
              <div className="space-y-8 text-white/70 text-lg leading-relaxed font-medium">
                <p>{PAGE.defense.p1}</p>
                <p className="text-white font-bold">{PAGE.defense.p2}</p>
                <p>{PAGE.defense.p3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Vision/Mission Section */}
      <section className="py-32 bg-[#050505] relative overflow-hidden border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-8">
          <div className={`flex flex-col ${isRTL ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-24 items-center`}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex-1 min-w-0"
            >
              <div className={`aspect-square bg-[#050505] overflow-hidden ${isRTL ? 'border-r-8' : 'border-l-8'} border-brand shadow-2xl`}>
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200" 
                  alt="Factory" 
                  className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-all duration-1000"
                />
              </div>
              <div className={`absolute -bottom-12 ${isRTL ? '-left-12' : '-right-12'} w-64 h-64 bg-brand p-12 hidden md:flex flex-col justify-end shadow-xl`}>
                 <p className="text-white font-black text-4xl leading-none tracking-tighter uppercase">{t.about.quality.title.split(' ')[0]} <br/> {t.about.quality.title.split(' ')[1]}</p>
              </div>
            </motion.div>

            <div className={`flex-1 min-w-0 space-y-12 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="space-y-6">
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter">{t.about.vision.title}</h2>
                <p className="text-white/60 text-lg leading-relaxed font-medium">
                  {t.about.vision.desc}
                </p>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter">{t.about.mission.title}</h2>
                <p className="text-white/60 text-lg leading-relaxed font-medium">
                  {t.about.mission.desc}
                </p>
              </div>

              <div className="pt-8 grid grid-cols-2 gap-8">
                <div className="p-8 bg-white/[0.02] backdrop-blur-xl border border-white/5 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-brand font-black text-xl mb-2">ISO 9001:2015</p>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{t.about.quality.subtitle}</p>
                </div>
                <div className="p-8 bg-white/[0.02] backdrop-blur-xl border border-white/5 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-brand font-black text-xl mb-2">{t.about.quality.ceCertified}</p>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{t.about.quality.europeanStandards}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-[#050505] relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter">{t.about.journey.title}</h2>
            <div className="h-1 w-24 bg-brand mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.about.journey.items.map((item: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative p-12 bg-[#050505] relative overflow-hidden border-t-4 border-brand shadow-xl"
              >
                <span className={`text-6xl font-black text-white/5 absolute top-4 ${isRTL ? 'left-8' : 'right-8'}`}>{item.year}</span>
                <p className="text-brand font-black text-2xl mb-4 relative z-10">{item.year}</p>
                <h3 className="text-xl font-black text-white uppercase mb-4 relative z-10">{item.title}</h3>
                <p className="text-white/60 font-medium text-sm leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Footer Section - Moved to bottom */}
      <div className="py-32 px-6 md:px-8 max-w-[1600px] mx-auto bg-white">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          {t.about.stats.map((stat: any, idx: number) => (
            <motion.div 
              key={idx} 
              className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-2">
                {stat.value}
              </h2>
              <div className="h-2 bg-brand mb-6 w-12" />
              <h3 className="font-extrabold text-sm text-white uppercase tracking-widest mb-2">{stat.label}</h3>
              <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">
                {idx === 2 ? (statDescMap[language] || statDescMap.en).year : (statDescMap[language] || statDescMap.en).default}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

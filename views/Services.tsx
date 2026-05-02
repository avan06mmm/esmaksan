import React from 'react';
import { motion } from 'motion/react';
import PageHero from '../components/PageHero';
import { useLanguage } from '../LanguageContext';

const pageLocal: Record<string, any> = {
  tr: {
    tag: 'HİZMETLERİMİZ',
    title: 'ESMAKSAN MAKİNE',
    highlight: 'HİZMETLERİMİZ',
    statValue: '3+',
    intro: 'Yarım asra yaklaşan köklü tecrübemiz ve yenilikçi mühendislik anlayışımızla, üretim süreçlerinizi kusursuz ve en yüksek verimlilikte sürdürebilmeniz için 360 derece hizmet çözümleri sunuyoruz. Sadece bir makine üreticisi değil, endüstriyel başarı yolculuğunuzda daima yanınızda olan güvenilir bir çözüm ortağıyız.',
    services: [
      {
        id: 'tech-support',
        title: 'Teknik Destek',
        desc: 'Uzman mühendis kadromuzla üretim ve makine süreçlerinizde 7/24 kesintisiz teknik destek sağlıyoruz. Amacımız, olası duruş sürelerini minimuma indirmektir.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        features: [
          '7/24 Kesintisiz Destek',
          'Yerinde Arıza Tespiti ve Hızlı Onarım',
          'Makine Parkuru Verimlilik Analizleri',
          'Uzaktan Teşhis ve Çözüm Hizmetleri'
        ]
      },
      {
        id: 'after-sales',
        title: 'Satış Sonrası Hizmetler',
        desc: 'Müşteri memnuniyetini en üst seviyede tutarak, yedek parça temini ve periyodik bakım aşamalarında sürekli yanınızdayız.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        features: [
          'Orijinal Yedek Parça Temini',
          'Periyodik Bakım ve Onarım Anlaşmaları',
          'Kullanıcı Eğitimleri ve Sertifikalandırma',
          'Kapsamlı Garanti Süreci Yönetimi'
        ]
      },
      {
        id: 'custom-production',
        title: 'İhtiyaca Özel Üretim',
        desc: 'Özel projeleriniz ve teknik talepleriniz doğrultusunda, spesifikasyonlarınıza uygun yüksek hassasiyetli tasarım ve üretim çözümleri sunuyoruz.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        ),
        features: [
          'Tersine Mühendislik Uygulamaları',
          'Ar-Ge ve Hızlı Prototip Geliştirme',
          'Savunma Sanayi ve Hassas Parça Üretimi',
          'Özel Fikstür ve Aparat Tasarımı'
        ]
      }
    ]
  },
  en: {
    tag: 'OUR SERVICES',
    title: 'ESMAKSAN MACHINE',
    highlight: 'SERVICES',
    statValue: '3+',
    intro: 'With nearly half a century of deep-rooted experience and an innovative engineering approach, we provide comprehensive 360-degree service solutions to ensure your production processes run flawlessly and at maximum efficiency. We are not just a machinery manufacturer, but a reliable solution partner always standing by you in your journey to industrial success.',
    services: [
      {
        id: 'tech-support',
        title: 'Technical Support',
        desc: 'We provide 24/7 uninterrupted technical support in your production and machinery processes with our expert engineering staff. Our goal is to minimize possible downtimes.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        features: [
          '24/7 Uninterrupted Support',
          'On-site Fault Detection and Quick Repair',
          'Machinery Park Efficiency Analysis',
          'Remote Diagnosis and Resolution Services'
        ]
      },
      {
        id: 'after-sales',
        title: 'After Sales Services',
        desc: 'Keeping customer satisfaction at the highest level, we are always by your side during spare parts supply and periodic maintenance phases.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        features: [
          'Original Spare Parts Supply',
          'Periodic Maintenance and Repair Agreements',
          'User Training and Certification',
          'Comprehensive Warranty Process Management'
        ]
      },
      {
        id: 'custom-production',
        title: 'Custom Production',
        desc: 'In line with your special projects and technical demands, we offer high-precision design and manufacturing solutions suitable for your specifications.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        ),
        features: [
          'Reverse Engineering Applications',
          'R&D and Rapid Prototype Development',
          'Defense Industry and Precision Parts Production',
          'Custom Fixture and Apparatus Design'
        ]
      }
    ]
  },
  ru: {
    tag: 'НАШИ УСЛУГИ',
    title: 'ESMAKSAN MACHINE',
    highlight: 'УСЛУГИ',
    statValue: '3+',
    intro: 'Опираясь на почти полувековой опыт и инновационный инженерный подход, мы предоставляем комплексные решения, чтобы ваши производственные процессы протекали безупречно и с максимальной эффективностью. Мы не просто производитель оборудования, а надежный партнер по решениям, который всегда поддерживает вас на пути к промышленному успеху.',
    services: [
      {
        id: 'tech-support',
        title: 'Техническая поддержка',
        desc: 'Мы обеспечиваем круглосуточную бесперебойную техническую поддержку ваших производственных процессов с помощью нашего экспертного инженерного персонала.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        features: [
          'Круглосуточная поддержка',
          'Обнаружение неисправностей на месте и быстрый ремонт',
          'Анализ эффективности машинного парка',
          'Услуги удаленной диагностики'
        ]
      },
      {
        id: 'after-sales',
        title: 'Послепродажное обслуживание',
        desc: 'Поддерживая удовлетворенность клиентов на самом высоком уровне, мы всегда рядом с вами на этапах поставки запасных частей и периодического технического обслуживания.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        features: [
          'Поставка оригинальных запасных частей',
          'Соглашения о периодическом техническом обслуживании',
          'Обучение пользователей и сертификация',
          'Комплексное управление гарантийным процессом'
        ]
      },
      {
        id: 'custom-production',
        title: 'Производство по индивидуальному заказу',
        desc: 'В соответствии с вашими специальными проектами и техническими требованиями, мы предлагаем высокоточные решения для проектирования и производства.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        ),
        features: [
          'Применение обратного инжиниринга',
          'НИОКР и быстрая разработка прототипов',
          'Производство точных деталей для оборонной промышленности',
          'Проектирование специальных приспособлений'
        ]
      }
    ]
  },
  ar: {
    tag: 'خدماتنا',
    title: 'ESMAKSAN MACHINE',
    highlight: 'خدماتنا',
    statValue: '3+',
    intro: 'مع خبرة راسخة تقارب نصف قرن ونهج هندسي مبتكر، نقدم حلول خدمة شاملة لضمان سير عمليات الإنتاج الخاصة بك بشكل لا تشوبه شائبة وبأقصى قدر من الكفاءة. نحن لسنا مجرد شركة تصنيع آلات، بل نحن شريك حلول موثوق يقف دائمًا بجانبك في رحلة نجاحك الصناعي.',
    services: [
      {
        id: 'tech-support',
        title: 'الدعم الفني',
        desc: 'نحن نقدم دعمًا فنيًا مستمرًا على مدار الساعة طوال أيام الأسبوع في عمليات الإنتاج والآلات الخاصة بك من خلال طاقم العمل الهندسي الخبير لدينا.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        features: [
          'دعم مستمر 24/7',
          'اكتشاف الأعطال في الموقع والإصلاح السريع',
          'تحليل كفاءة الآلات',
          'خدمات التشخيص عن بعد'
        ]
      },
      {
        id: 'after-sales',
        title: 'خدمات ما بعد البيع',
        desc: 'نحافظ على رضا العملاء على أعلى مستوى، ونحن دائمًا بجانبك خلال مراحل توريد قطع الغيار والصيانة الدورية.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        features: [
          'توريد قطع الغيار الأصلية',
          'اتفاقيات الصيانة والإصلاح الدورية',
          'تدريب المستخدمين ومنح الشهادات',
          'إدارة شاملة لعملية الضمان'
        ]
      },
      {
        id: 'custom-production',
        title: 'إنتاج مخصص حسب الحاجة',
        desc: 'تماشيًا مع مشاريعك الخاصة ومطالبك الفنية، نقدم حلول تصميم وتصنيع عالية الدقة مناسبة لمواصفاتك.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        ),
        features: [
          'تطبيقات الهندسة العكسية',
          'البحث والتطوير وتطوير النماذج الأولية',
          'إنتاج الأجزاء الدقيقة للصناعات الدفاعية',
          'تصميم تركيبات وأجهزة خاصة'
        ]
      }
    ]
  }
};

const Services: React.FC = () => {
  const { language } = useLanguage();
  const P = pageLocal[language] || pageLocal.tr;
  
  return (
    <div className="min-h-screen bg-[#050505] pb-24 relative overflow-hidden">
      <PageHero
        tag={P.tag}
        title={P.title}
        highlight={P.highlight}
        statValue={P.statValue}
        statIcon={
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        }
      />

      {/* Subtle background ambient glow */}
      <div className="absolute top-[40vh] left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] bg-[#FACC15]/5 blur-[120px] rounded-full pointer-events-none" />

      <section className="px-6 md:px-8 max-w-[1600px] mx-auto mt-12 mb-16 relative z-10">
        <div className={`flex flex-col gap-6 mb-16 ${language === 'ar' ? 'items-end text-right' : 'items-start text-left'}`}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-8 h-[2px] bg-[#FACC15] ${language === 'ar' ? 'order-last' : ''}`} />
              <span className="text-[11px] font-bold tracking-widest uppercase text-white/50 font-mono">Esmaksan</span>
            </div>
            <p className="text-[14px] md:text-[15px] font-medium tracking-wide leading-relaxed text-white/80">
              {P.intro}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
          {P.services.map((service: any, idx: number) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/[0.02] backdrop-blur-xl rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] hover:-translate-y-2 transition-all duration-500 flex flex-col min-h-[460px] relative overflow-hidden group cursor-default"
            >
              {/* Ambient Glow on Hover */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-[#FACC15]/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 ease-out pointer-events-none" />
              
              {/* Top Row: Number & Icon */}
              <div className={`flex justify-between items-start relative z-10 ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'} mb-8`}>
                <span className="text-[15px] font-bold text-white/30 font-mono tracking-widest group-hover:text-white/60 transition-colors duration-500">
                  /0{idx + 1}
                </span>
                
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/50 group-hover:bg-[#FACC15] group-hover:text-black transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] group-hover:-rotate-6 group-hover:scale-110 border border-white/5 group-hover:border-transparent">
                  <div className="w-6 h-6">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Middle Content */}
              <div className={`relative z-10 flex-grow ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <h3 className="text-[22px] font-bold tracking-tight mb-4 text-white group-hover:text-[#FACC15] transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                
                {/* Animated Expanding Line */}
                <div className="relative h-[2px] w-full bg-white/10 mb-5 overflow-hidden rounded-full">
                  <div className={`absolute top-0 bottom-0 ${language === 'ar' ? 'right-0' : 'left-0'} w-12 bg-[#FACC15] rounded-full group-hover:w-full transition-all duration-700 ease-[0.22,1,0.36,1]`} />
                </div>

                <p className="text-[14px] text-white/50 font-medium leading-relaxed group-hover:text-white/70 transition-colors duration-300 mb-8">
                  {service.desc}
                </p>
              </div>

              {/* Bottom Feature List */}
              <div className={`relative z-10 pt-6 border-t border-white/10 mt-auto ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <ul className="space-y-4">
                  {service.features.map((feature: string, fIdx: number) => (
                    <li key={fIdx} className={`flex items-start gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <div className="mt-1 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FACC15] transition-colors duration-300 group-hover:text-black text-white/50">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[14px] font-medium text-white/70 leading-snug group-hover:text-white transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;

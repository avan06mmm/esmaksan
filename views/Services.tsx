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
    intro: 'ESMAKSAN olarak, üretim süreçlerinizi kesintisiz ve en yüksek verimlilikte sürdürebilmeniz için kapsamlı hizmet çözümleri sunuyoruz.',
    services: [
      {
        id: 'tech-support',
        title: 'Teknik Destek',
        desc: 'Uzman mühendis kadromuzla üretim ve makine süreçlerinizde 7/24 kesintisiz teknik destek sağlıyoruz. Amacımız, olası duruş sürelerini minimuma indirmektir.',
        icon: (
          <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    intro: 'At ESMAKSAN, we provide comprehensive service solutions so you can maintain your production processes uninterrupted and with maximum efficiency.',
    services: [
      {
        id: 'tech-support',
        title: 'Technical Support',
        desc: 'We provide 24/7 uninterrupted technical support in your production and machinery processes with our expert engineering staff. Our goal is to minimize possible downtimes.',
        icon: (
          <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    intro: 'В ESMAKSAN мы предоставляем комплексные сервисные решения, чтобы вы могли поддерживать свои производственные процессы бесперебойно и с максимальной эффективностью.',
    services: [
      {
        id: 'tech-support',
        title: 'Техническая поддержка',
        desc: 'Мы обеспечиваем круглосуточную бесперебойную техническую поддержку ваших производственных процессов с помощью нашего экспертного инженерного персонала.',
        icon: (
          <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    intro: 'في ESMAKSAN، نقدم حلول خدمة شاملة حتى تتمكن من الحفاظ على عمليات الإنتاج الخاصة بك دون انقطاع وبأقصى قدر من الكفاءة.',
    services: [
      {
        id: 'tech-support',
        title: 'الدعم الفني',
        desc: 'نحن نقدم دعمًا فنيًا مستمرًا على مدار الساعة طوال أيام الأسبوع في عمليات الإنتاج والآلات الخاصة بك من خلال طاقم العمل الهندسي الخبير لدينا.',
        icon: (
          <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    <div className="min-h-screen bg-paper pb-20">
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

      <section className="px-6 md:px-8 max-w-[1600px] mx-auto mt-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl border-l-4 border-brand pl-6 md:pl-8 mb-16"
        >
          <p className="text-xl md:text-2xl text-ink/80 font-medium leading-relaxed">
            {P.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {P.services.map((service: any, idx: number) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-ink/5 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col"
            >
              {/* Decorative Background Blur */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand/10 rounded-full blur-3xl group-hover:bg-brand/20 transition-all duration-500"></div>
              
              <div className="relative z-10 flex-grow">
                <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-black mb-4 text-ink tracking-tight">{service.title}</h3>
                
                <p className="text-ink/70 leading-relaxed font-medium mb-8 text-[15px]">
                  {service.desc}
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-ink/10 mt-auto">
                <ul className="space-y-4">
                  {service.features.map((feature: string, fIdx: number) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-ink/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 transition-colors duration-300">
                        <svg className="w-3 h-3 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm font-bold text-ink/80 leading-snug">{feature}</span>
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

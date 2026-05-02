import React from 'react';
import { motion } from 'motion/react';
import PageHero from '../components/PageHero';
import { useLanguage } from '../LanguageContext';

const pageLocal: Record<string, any> = {
  tr: {
    tag: '',
    title: 'ÇEVRE YÖNETİM SİSTEMİ',
    highlight: 'ISO 14001',
    statValue: 'ÇYS',
    pdfDownloadLabel: 'BELGEYİ İNDİR (PDF)',
    viewFullScreen: 'TAM EKRAN GÖRÜNTÜLE',
    approvalLabel: 'Standardizasyon',
    managementLabel: 'ÇEVRE BİLİNCİ',
    intro1: '<strong className="text-white">ESMAKSAN Makine</strong> olarak; faaliyet gösterdiğimiz savunma sanayii ve makine üretimi alanlarında doğaya olan sorumluluğumuzun farkındayız. Bu doğrultuda, <strong className="text-white">ISO 14001 Çevre Yönetim Sistemi</strong> kurarak çevreye duyarlı bir üretim modelini benimsedik.',
    intro2: 'Gelecek nesillere daha sağlıklı bir dünya bırakabilmek için, kirliliğin kaynağında önlenmesi, atıkların minimize edilmesi ve doğal kaynak kullanımının optimize edilmesi iş süreçlerimizin en önemli kriterlerinden biridir.',
    intro3: 'Çevre yönetim politikamızın temel ilkeleri şunlardır:',
    sections: [
      {
        roman: 'I.',
        title: 'Sürdürülebilirlik',
        items: [
          'Faaliyetlerimizin çevresel etkilerini önceden belirlemek ve en aza indirmek.',
          'Gelecek nesillere daha yaşanabilir bir çevre bırakmak için sürdürülebilirlik ilkelerini üretim süreçlerimize entegre etmek.',
        ],
      },
      {
        roman: 'II.',
        title: 'Atık Yönetimi ve Geri Dönüşüm',
        items: [
          'Üretim esnasında oluşan atıkları kaynağında azaltmak.',
          'Teknolojik altyapıyı kullanarak geri dönüştürülebilir atıkları ekonomiye kazandırmak.',
        ],
      },
      {
        roman: 'III.',
        title: 'Kaynak Verimliliği',
        items: [
          'Doğal kaynakların (enerji, su, hammadde vb.) verimli kullanılmasını sağlamak.',
          'Enerji verimliliği yüksek, çevre dostu teknolojilere yatırım yapmak.',
        ],
      },
      {
        roman: 'IV.',
        title: 'Mevzuata Uyum',
        items: [
          'Ulusal ve uluslararası tüm çevre yasalarına, mevzuat ve standartlarına eksiksiz uymak.',
          'Çevre ile ilgili yasal düzenlemelerdeki gelişmeleri yakından takip ederek sisteme hızla adapte etmek.',
        ],
      },
    ],
    closing1: 'Üretim süreçlerimizin her detayında doğayı koruma vizyonumuzu benimsiyoruz. <strong className="text-white">ISO 14001 sertifikamız</strong> çevreye olan taahhüdümüzün ve sürdürülebilir kalite anlayışımızın resmi bir kanıtıdır.',
    closing2: 'İşletmemiz, sadece bugüne değil yarına da yatırım yapma ilkesiyle yeşil üretim süreçlerini kurum kültürünün ayrılmaz bir parçası olarak görür.'
  },
  en: {
    tag: '',
    title: 'ENVIRONMENTAL MANAGEMENT',
    highlight: 'ISO 14001',
    statValue: 'EMS',
    pdfDownloadLabel: 'DOWNLOAD DOCUMENT',
    viewFullScreen: 'VIEW FULL SCREEN',
    approvalLabel: 'Standardization',
    managementLabel: 'ECO AWARENESS',
    intro1: 'As <strong className="text-white">ESMAKSAN Machinery</strong>, we are aware of our responsibility towards nature in the defense industry and machinery production sectors where we operate. In this direction, we have adopted an environmentally friendly production model by establishing the <strong className="text-white">ISO 14001 Environmental Management System</strong>.',
    intro2: 'In order to leave a healthier world to future generations, preventing pollution at its source, minimizing waste, and optimizing the use of natural resources is one of the most important criteria of our business processes.',
    intro3: 'The basic principles of our environmental management policy are:',
    sections: [
      {
        roman: 'I.',
        title: 'Sustainability',
        items: [
          'To proactively identify and minimize the environmental impacts of our activities.',
          'To integrate sustainability principles into our production processes to leave a more livable environment for future generations.',
        ],
      },
      {
        roman: 'II.',
        title: 'Waste Management and Recycling',
        items: [
          'To reduce waste generated during production at its source.',
          'To bring recyclable waste into the economy by utilizing technological infrastructure.',
        ],
      },
      {
        roman: 'III.',
        title: 'Resource Efficiency',
        items: [
          'To ensure the efficient use of natural resources (energy, water, raw materials, etc.).',
          'To invest in eco-friendly technologies with high energy efficiency.',
        ],
      },
      {
        roman: 'IV.',
        title: 'Regulatory Compliance',
        items: [
          'To fully comply with all national and international environmental laws, regulations, and standards.',
          'To closely follow developments in environmental legal regulations and adapt them rapidly to our system.',
        ],
      },
    ],
    closing1: 'We adopt our vision of protecting nature in every detail of our production processes. Our <strong className="text-white">ISO 14001 certificate</strong> is official proof of our commitment to the environment and our understanding of sustainable quality.',
    closing2: 'With the principle of investing not only for today but also for tomorrow, our company considers green production processes as an integral part of its corporate culture.'
  },
  ru: {
    tag: '',
    title: 'СИСТЕМА ЭКОЛОГИЧЕСКОГО МЕНЕДЖМЕНТА',
    highlight: 'ISO 14001',
    statValue: 'СЭМ',
    pdfDownloadLabel: 'СКАЧАТЬ ДОКУМЕНТ',
    viewFullScreen: 'ПОЛНОЭКРАННЫЙ РЕЖИМ',
    approvalLabel: 'Стандартизация',
    managementLabel: 'ЭКО-ОСОЗНАННОСТЬ',
    intro1: 'Как <strong className="text-white">ESMAKSAN Machinery</strong>, мы осознаем свою ответственность перед природой в сферах оборонной промышленности и машиностроения, в которых мы работаем. В этом направлении мы внедрили экологически чистую модель производства, создав <strong className="text-white">Систему экологического менеджмента ISO 14001</strong>.',
    intro2: 'Чтобы оставить будущим поколениям более здоровый мир, предотвращение загрязнения в его источнике, минимизация отходов и оптимизация использования природных ресурсов являются одними из важнейших критериев наших бизнес-процессов.',
    intro3: 'Основные принципы нашей политики экологического менеджмента:',
    sections: [
      {
        roman: 'I.',
        title: 'Устойчивое развитие',
        items: [
          'Заблаговременно выявлять и минимизировать воздействие нашей деятельности на окружающую среду.',
          'Интегрировать принципы устойчивого развития в наши производственные процессы, чтобы оставить будущим поколениям пригодную для жизни среду.',
        ],
      },
      {
        roman: 'II.',
        title: 'Управление отходами и переработка',
        items: [
          'Сокращать количество отходов, образующихся в процессе производства, в самом источнике.',
          'Возвращать перерабатываемые отходы в экономику, используя технологическую инфраструктуру.',
        ],
      },
      {
        roman: 'III.',
        title: 'Ресурсоэффективность',
        items: [
          'Обеспечивать эффективное использование природных ресурсов (энергия, вода, сырье и т.д.).',
          'Инвестировать в экологически чистые технологии с высокой энергоэффективностью.',
        ],
      },
      {
        roman: 'IV.',
        title: 'Соблюдение нормативных требований',
        items: [
          'Полностью соблюдать все национальные и международные экологические законы, нормы и стандарты.',
          'Внимательно следить за изменениями в экологическом законодательстве и быстро адаптировать к ним нашу систему.',
        ],
      },
    ],
    closing1: 'Мы придерживаемся нашего видения защиты природы в каждой детали наших производственных процессов. Наш <strong className="text-white">сертификат ISO 14001</strong> является официальным подтверждением нашей приверженности окружающей среде и нашего понимания устойчивого качества.',
    closing2: 'Руководствуясь принципом инвестирования не только в сегодняшний, но и в завтрашний день, наша компания рассматривает зеленые производственные процессы как неотъемлемую часть своей корпоративной культуры.'
  },
  ar: {
    tag: '',
    title: 'نظام الإدارة البيئية',
    highlight: 'ISO 14001',
    statValue: 'EMS',
    pdfDownloadLabel: 'تحميل المستند',
    viewFullScreen: 'عرض بملء الشاشة',
    approvalLabel: 'المعايرة',
    managementLabel: 'الوعي البيئي',
    intro1: 'بصفتنا <strong className="text-white">ESMAKSAN Machinery</strong>، نحن ندرك مسؤوليتنا تجاه الطبيعة في قطاعات الصناعات الدفاعية وإنتاج الآلات التي نعمل فيها. في هذا الاتجاه، اعتمدنا نموذج إنتاج صديق للبيئة من خلال إنشاء <strong className="text-white">نظام الإدارة البيئية ISO 14001</strong>.',
    intro2: 'من أجل ترك عالم أكثر صحة للأجيال القادمة، فإن منع التلوث من مصدره، وتقليل النفايات، وتحسين استخدام الموارد الطبيعية هو أحد أهم معايير عملياتنا التجارية.',
    intro3: 'المبادئ الأساسية لسياسة الإدارة البيئية لدينا هي:',
    sections: [
      {
        roman: 'I.',
        title: 'الاستدامة',
        items: [
          'التحديد الاستباقي للآثار البيئية لأنشطتنا وتقليلها.',
          'دمج مبادئ الاستدامة في عمليات الإنتاج لدينا لترك بيئة أكثر قابلية للعيش للأجيال القادمة.',
        ],
      },
      {
        roman: 'II.',
        title: 'إدارة النفايات وإعادة التدوير',
        items: [
          'تقليل النفايات المتولدة أثناء الإنتاج من مصدرها.',
          'إعادة النفايات القابلة لإعادة التدوير إلى الاقتصاد باستخدام البنية التحتية التكنولوجية.',
        ],
      },
      {
        roman: 'III.',
        title: 'كفاءة الموارد',
        items: [
          'ضمان الاستخدام الفعال للموارد الطبيعية (الطاقة والمياه والمواد الخام وما إلى ذلك).',
          'الاستثمار في التقنيات الصديقة للبيئة ذات الكفاءة العالية في استخدام الطاقة.',
        ],
      },
      {
        roman: 'IV.',
        title: 'الامتثال التنظيمي',
        items: [
          'الامتثال التام لجميع القوانين والتشريعات والمعايير البيئية الوطنية والدولية.',
          'المتابعة الوثيقة للتطورات في اللوائح القانونية البيئية وتكييفها بسرعة مع نظامنا.',
        ],
      },
    ],
    closing1: 'نحن نتبنى رؤيتنا لحماية الطبيعة في كل تفاصيل عمليات الإنتاج لدينا. تُعد <strong className="text-white">شهادة ISO 14001</strong> الخاصة بنا دليلاً رسميًا على التزامنا تجاه البيئة وفهمنا للجودة المستدامة.',
    closing2: 'مع مبدأ الاستثمار ليس فقط من أجل اليوم ولكن أيضًا من أجل الغد، تعتبر شركتنا عمليات الإنتاج الخضراء جزءًا لا يتجزأ من ثقافة شركتها.'
  },
};

const pdfUrl = "/ESMAKSAN MAKİNA 14001.pdf";

const EnvironmentalManagement: React.FC = () => {
  const { language } = useLanguage();
  const P = pageLocal[language] || pageLocal.tr;
  const sections = P.sections;

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden">
      <PageHero
        tag={P.tag}
        title={P.title}
        highlight={P.highlight}
        statValue={P.statValue}
        statIcon={
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />

      {/* Subtle background ambient glow */}
      <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] bg-[#FACC15]/5 blur-[120px] rounded-full pointer-events-none" />

          </svg>
        }
      />

      {/* Intro Text with Compact PDF Preview */}
      <section className="px-6 md:px-8 max-w-[1600px] mx-auto mb-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <div className="border-l-4 border-brand pl-8 space-y-6 max-w-4xl">
              <p className="text-white/70 text-lg leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: P.intro1 }}></p>
              <p className="text-white/70 text-lg leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: P.intro2 }}></p>
              <p className="text-white/80 text-base leading-relaxed font-semibold" dangerouslySetInnerHTML={{ __html: P.intro3 }}></p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-[320px] shrink-0 pt-4"
          >
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded- overflow-hidden shadow-xl shadow-ink/5 group">
              <div className="aspect-[1/1.4] relative bg-white/[]">
                <iframe 
                  src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full pointer-events-none"
                  title="ISO 14001 Certificate"
                />
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                   <a 
                    href={pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg transform scale-90 group-hover:scale-100 transition-all"
                  >
                    {P.viewFullScreen}
                  </a>
                </div>
              </div>
            </div>
            
            <a 
              href={pdfUrl} 
              download 
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-ink text-white rounded-lg font-bold hover:bg-brand transition-all duration-300 uppercase tracking-wider text-[11px] shadow-md shadow-ink/5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {P.pdfDownloadLabel}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Commitments Grid */}
      <section className="pb-16 industrial-grid">
        <div className="max-w-[1600px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {sections.map((section: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/[0.02] backdrop-blur-sm border border-white/8 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-5xl font-black text-brand/30 leading-none select-none">
                    {section.roman}
                  </span>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mt-2">
                    {section.title}
                  </h3>
                </div>
                <div className="h-px bg-white/10 mb-6" />
                <ul className="space-y-3">
                  {section.items.map((item: string, iIdx: number) => (
                    <li key={iIdx} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-brand" />
                      <span className="text-white/70 text-sm font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Closing / Approval Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="border border-brand/20 rounded-2xl p-8 bg-brand/[0.03] backdrop-blur-sm flex flex-col justify-between lg:col-span-2"
            >
              <div className="space-y-4 text-white/70 text-sm leading-relaxed font-medium">
                <p dangerouslySetInnerHTML={{ __html: P.closing1 }}></p>
                <p className="text-white font-bold" dangerouslySetInnerHTML={{ __html: P.closing2 }}></p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">{P.approvalLabel}</p>
                  <p className="text-xl font-black text-white tracking-tight">ISO 14001:2015</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-0.5 bg-brand" />
                  <p className="text-xs font-extrabold text-white uppercase tracking-widest">{P.managementLabel}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentalManagement;

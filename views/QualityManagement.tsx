import React from 'react';
import { motion } from 'motion/react';
import PageHero from '../components/PageHero';
import { useLanguage } from '../LanguageContext';

const pageLocal: Record<string, any> = {
  tr: {
    tag: '',
    title: 'KALİTE YÖNETİM SİSTEMİ',
    highlight: 'ISO 9001',
    statValue: 'KYS',
    pdfDownloadLabel: 'BELGEYİ İNDİR (PDF)',
    viewFullScreen: 'TAM EKRAN GÖRÜNTÜLE',
    approvalLabel: 'Standardizasyon',
    managementLabel: 'ESMAKSAN KALİTESİ',
    intro1: '<strong className="text-white">ESMAKSAN Makine</strong>, üretim sahasında sıfır hata prensibini güvence altına almak için <strong className="text-white">ISO 9001 Kalite Yönetim Sistemi</strong> standartlarını tam kapasiteyle uygulamaktadır. Müşteri memnuniyetini maksimize eden bu standart; üretim, test ve nakliye süreçlerini kapsayan entegre bir yapıdır.',
    intro2: 'Gelişmiş CMM cihazlarımız ve alanında uzman kalite kontrol ekibimiz, ürünlerimizin her bir aşamasında ISO 9001 standartlarının gerektirdiği ölçümleri hatasız bir şekilde gerçekleştirir.',
    intro3: 'Kalite yönetim süreçlerimizde dayandığımız temel prensipler:',
    sections: [
      {
        roman: 'I.',
        title: 'Müşteri Odaklılık',
        items: [
          'Müşterilerimizin mevcut ve gelecekteki beklentilerini analiz etmek ve kusursuz üretim gerçekleştirmek.',
          'Savunma sanayii ve yedek parça pazarında müşteri memnuniyetinin sürekli ölçümünü ve gelişimini sağlamak.',
        ],
      },
      {
        roman: 'II.',
        title: 'Liderlik ve Katılım',
        items: [
          'Sürdürülebilir bir kalite anlayışını vizyon edinerek hedefleri net bir şekilde belirlemek.',
          'Tüm ESMAKSAN personelinin eğitimlerle desteklenerek kalite süreçlerine aktif katılımını güvence altına almak.',
        ],
      },
      {
        roman: 'III.',
        title: 'Süreç Odaklı Yaklaşım',
        items: [
          'Faaliyetleri bağımsız bölümler halinde değil, birbirleriyle etkileşimli süreçler olarak ele almak.',
          'Kaynak tahsisini doğru biçimde planlayarak üretim verimliliğini maksimize etmek.',
        ],
      },
      {
        roman: 'IV.',
        title: 'Sürekli İyileştirme',
        items: [
          'Üretim hata oranlarını minimize etmek için süreçleri uluslararası normlarda sürekli test ve revize etmek.',
          'Kararların somut verilere dayalı alınmasını sağlayarak önleyici faaliyet planlamaları geliştirmek.',
        ],
      },
    ],
    closing1: 'Biz, rekabet gücümüzü artırırken <strong className="text-white">ISO 9001 sertifikamızın</strong> sağladığı global güvenilirlik ile yerli ve yabancı pazarda sürdürülebilirlik ilkelerine sadık kalıyoruz.',
    closing2: 'Sektördeki 23 yıllık tecrübemiz ve dinamik üretim felsefemiz ile hizmet standardımızı daima bir adım öteye taşıyacağımızı taahhüt ederiz.'
  },
  en: {
    tag: '',
    title: 'QUALITY MANAGEMENT SYSTEM',
    highlight: 'ISO 9001',
    statValue: 'QMS',
    pdfDownloadLabel: 'DOWNLOAD DOCUMENT',
    viewFullScreen: 'VIEW FULL SCREEN',
    approvalLabel: 'Standardization',
    managementLabel: 'ESMAKSAN QUALITY',
    intro1: '<strong className="text-white">ESMAKSAN Machinery</strong> fully implements the <strong className="text-white">ISO 9001 Quality Management System</strong> standards to ensure the principle of zero defects in the production field. This standard, which maximizes customer satisfaction, is an integrated structure covering production, testing, and shipping processes.',
    intro2: 'Our advanced CMM devices and expert quality control team flawlessly perform the measurements required by ISO 9001 standards at every stage of our products.',
    intro3: 'The basic principles we rely on in our quality management processes are:',
    sections: [
      {
        roman: 'I.',
        title: 'Customer Focus',
        items: [
          'To analyze the current and future expectations of our customers and perform flawless production.',
          'To ensure continuous measurement and improvement of customer satisfaction in the defense industry and spare parts market.',
        ],
      },
      {
        roman: 'II.',
        title: 'Leadership and Participation',
        items: [
          'To set goals clearly by adopting a sustainable quality understanding as a vision.',
          'To ensure the active participation of all ESMAKSAN personnel in quality processes by supporting them with training.',
        ],
      },
      {
        roman: 'III.',
        title: 'Process-Oriented Approach',
        items: [
          'To handle activities not as independent departments but as interactive processes.',
          'To maximize production efficiency by planning resource allocation correctly.',
        ],
      },
      {
        roman: 'IV.',
        title: 'Continuous Improvement',
        items: [
          'To continuously test and revise processes according to international norms to minimize production error rates.',
          'To develop preventive action plans by ensuring that decisions are made based on concrete data.',
        ],
      },
    ],
    closing1: 'While increasing our competitiveness, we remain loyal to sustainability principles in domestic and foreign markets with the global reliability provided by our <strong className="text-white">ISO 9001 certificate</strong>.',
    closing2: 'With our 23 years of experience in the sector and our dynamic production philosophy, we commit to always carrying our service standard one step further.'
  },
  ru: {
    tag: '',
    title: 'СИСТЕМА МЕНЕДЖМЕНТА КАЧЕСТВА',
    highlight: 'ISO 9001',
    statValue: 'СМК',
    pdfDownloadLabel: 'СКАЧАТЬ ДОКУМЕНТ',
    viewFullScreen: 'ПОЛНОЭКРАННЫЙ РЕЖИМ',
    approvalLabel: 'Стандартизация',
    managementLabel: 'КАЧЕСТВО ESMAKSAN',
    intro1: '<strong className="text-white">ESMAKSAN Machinery</strong> полностью применяет стандарты <strong className="text-white">Системы менеджмента качества ISO 9001</strong> для обеспечения принципа отсутствия дефектов в сфере производства. Этот стандарт, максимизирующий удовлетворенность клиентов, представляет собой интегрированную структуру, охватывающую процессы производства, тестирования и доставки.',
    intro2: 'Наши передовые координатно-измерительные машины (CMM) и команда экспертов по контролю качества безупречно выполняют измерения, требуемые стандартами ISO 9001, на каждом этапе производства нашей продукции.',
    intro3: 'Основные принципы, на которые мы опираемся в наших процессах менеджмента качества:',
    sections: [
      {
        roman: 'I.',
        title: 'Ориентация на клиента',
        items: [
          'Анализировать текущие и будущие ожидания наших клиентов и осуществлять безупречное производство.',
          'Обеспечивать непрерывное измерение и повышение удовлетворенности клиентов на рынке оборонной промышленности и запасных частей.',
        ],
      },
      {
        roman: 'II.',
        title: 'Лидерство и участие',
        items: [
          'Четко определять цели, принимая устойчивое понимание качества в качестве видения.',
          'Обеспечивать активное участие всего персонала ESMAKSAN в процессах качества, поддерживая их обучением.',
        ],
      },
      {
        roman: 'III.',
        title: 'Процессный подход',
        items: [
          'Рассматривать деятельность не как независимые отделы, а как взаимосвязанные процессы.',
          'Максимизировать эффективность производства путем правильного планирования распределения ресурсов.',
        ],
      },
      {
        roman: 'IV.',
        title: 'Постоянное улучшение',
        items: [
          'Постоянно тестировать и пересматривать процессы в соответствии с международными нормами для минимизации процента производственного брака.',
          'Разрабатывать планы превентивных действий, гарантируя, что решения принимаются на основе конкретных данных.',
        ],
      },
    ],
    closing1: 'Повышая нашу конкурентоспособность, мы остаемся верными принципам устойчивого развития на внутреннем и внешнем рынках благодаря глобальной надежности, обеспечиваемой нашим <strong className="text-white">сертификатом ISO 9001</strong>.',
    closing2: 'Обладая 23-летним опытом работы в отрасли и динамичной философией производства, мы обязуемся всегда поднимать наш стандарт обслуживания на шаг вперед.'
  },
  ar: {
    tag: '',
    title: 'نظام إدارة الجودة',
    highlight: 'ISO 9001',
    statValue: 'QMS',
    pdfDownloadLabel: 'تحميل المستند',
    viewFullScreen: 'عرض بملء الشاشة',
    approvalLabel: 'المعايرة',
    managementLabel: 'جودة ESMAKSAN',
    intro1: 'تطبق <strong className="text-white">ESMAKSAN Machinery</strong> معايير <strong className="text-white">نظام إدارة الجودة ISO 9001</strong> بكامل طاقتها لضمان مبدأ عدم وجود عيوب في مجال الإنتاج. هذا المعيار، الذي يزيد من رضا العملاء، هو هيكل متكامل يغطي عمليات الإنتاج والاختبار والشحن.',
    intro2: 'تقوم أجهزة CMM المتقدمة لدينا وفريق مراقبة الجودة الخبير بإجراء القياسات التي تتطلبها معايير ISO 9001 بلا عيب في كل مرحلة من منتجاتنا.',
    intro3: 'المبادئ الأساسية التي نعتمد عليها في عمليات إدارة الجودة لدينا هي:',
    sections: [
      {
        roman: 'I.',
        title: 'التركيز على العميل',
        items: [
          'تحليل التوقعات الحالية والمستقبلية لعملائنا وأداء إنتاج لا تشوبه شائبة.',
          'ضمان القياس المستمر والتحسين لرضا العملاء في صناعة الدفاع وسوق قطع الغيار.',
        ],
      },
      {
        roman: 'II.',
        title: 'القيادة والمشاركة',
        items: [
          'تحديد الأهداف بوضوح من خلال تبني فهم الجودة المستدامة كرؤية.',
          'ضمان المشاركة النشطة لجميع موظفي ESMAKSAN في عمليات الجودة من خلال دعمهم بالتدريب.',
        ],
      },
      {
        roman: 'III.',
        title: 'نهج موجه نحو العملية',
        items: [
          'التعامل مع الأنشطة ليس كأقسام مستقلة ولكن كعمليات تفاعلية.',
          'تعظيم كفاءة الإنتاج من خلال التخطيط الصحيح لتخصيص الموارد.',
        ],
      },
      {
        roman: 'IV.',
        title: 'التحسين المستمر',
        items: [
          'اختبار ومراجعة العمليات باستمرار وفقًا للمعايير الدولية لتقليل معدلات أخطاء الإنتاج.',
          'تطوير خطط العمل الوقائية من خلال ضمان اتخاذ القرارات بناءً على بيانات ملموسة.',
        ],
      },
    ],
    closing1: 'مع زيادة قدرتنا التنافسية، نظل مخلصين لمبادئ الاستدامة في الأسواق المحلية والخارجية من خلال الموثوقية العالمية التي توفرها <strong className="text-white">شهادة ISO 9001</strong> الخاصة بنا.',
    closing2: 'مع خبرتنا التي تبلغ 23 عامًا في هذا القطاع وفلسفة الإنتاج الديناميكية لدينا، نلتزم دائمًا بأخذ معايير الخدمة لدينا خطوة إلى الأمام.'
  },
};

const pdfUrl = "/ESMAKSAN MAKİNA 9001.pdf";

const QualityManagement: React.FC = () => {
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />

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
                  title="ISO 9001 Certificate"
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
                  <p className="text-xl font-black text-white tracking-tight">ISO 9001:2015</p>
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

export default QualityManagement;

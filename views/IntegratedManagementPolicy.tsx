import React from 'react';
import { motion } from 'motion/react';
import PageHero from '../components/PageHero';
import { useLanguage } from '../LanguageContext';

const pageLocal: Record<string, any> = {
  tr: {
    tag: '',
    title: 'ENTEGRE YÖNETİM',
    highlight: 'POLİTİKASI',
    statValue: 'EYS',
    pdfDownloadLabel: 'POLİTİKAYI İNDİR (PDF)',
    viewFullScreen: 'TAM EKRAN GÖRÜNTÜLE',
    approvalLabel: 'Onay',
    managementLabel: 'ESMAKSAN Yönetimi',
    intro1: '<strong className="text-ink">ESMAKSAN Makine Yedek Parça ve Savunma</strong> olarak; savunma sanayii, makine yedek parça ve talaşlı imalat alanlarında faaliyet gösterirken, ulusal güvenliğe katkı sağlama bilinciyle hareket ederiz. Bu plan, Entegre Yönetim Politikası doğrultusunda belirlenen kalite, çevre ve İSG hedeflerinin gerçekleştirilmesi amacıyla hazırlanmıştır.',
    intro2: 'Entegre Yönetim Sistemimizin temelinde; <strong className="text-ink">kalite, çevre ve iş sağlığı ve güvenliği performansını</strong> birlikte yönetmek ve sürekli iyileştirmek yer alır.',
    intro3: 'Kuruluşumuz; ISO 9001 Kalite Yönetim Sistemi, ISO 14001 Çevre Yönetim Sistemi ve ISO 45001 İş Sağlığı ve Güvenliği Yönetim Sistemi standartlarının şartlarına uygun olarak Entegre Yönetim Sistemini kurmuş, uygulamakta ve sürekli iyileştirmektedir.',
    intro4: 'Bu kapsamda aşağıdaki taahhütleri yerine getirmeyi taahhüt ederiz:',
    sections: [
      {
        roman: 'I.',
        title: 'Kalite Yönetimi Taahhütleri',
        items: [
          'Müşteri beklentileri, sözleşme şartları ve teknik gereklilikleri eksiksiz karşılamak',
          'Savunma sanayii ve hassas parça üretiminde sıfır hata ve yüksek hassasiyet prensibiyle çalışmak',
          'Süreç performanslarını izleyerek kaliteyi sürekli iyileştirmek',
          'Tedarikçileri kalite kriterlerine göre değerlendirmek ve izlemek',
        ],
      },
      {
        roman: 'II.',
        title: 'Çevre Yönetimi Taahhütleri',
        items: [
          'Çevre kirliliğinin önlenmesi ve çevresel etkilerin azaltılması',
          'Doğal kaynakların verimli kullanılması, atıkların azaltılması ve geri dönüşümün desteklenmesi',
          'İlgili çevre mevzuatı ve yasal şartlara tam uyum sağlanması',
          'Çevresel risk ve fırsatların belirlenerek kontrol altına alınması',
        ],
      },
      {
        roman: 'III.',
        title: 'İş Sağlığı ve Güvenliği Taahhütleri',
        items: [
          'Güvenli ve sağlıklı çalışma ortamı sağlamak',
          'İş kazaları ve meslek hastalıklarının önlenmesi',
          'Tehlikelerin ortadan kaldırılması ve risklerin azaltılması',
          'Çalışanların katılımını sağlamak ve İSG farkındalığını artırmak',
        ],
      },
      {
        roman: 'IV.',
        title: 'Risk Temelli Yaklaşım ve Sürekli İyileştirme',
        items: [
          'Entegre Yönetim Sistemi kapsamında risk ve fırsatları belirlemek',
          'Önleyici ve iyileştirici faaliyetleri etkin şekilde uygulamak',
          'Sistem performansını düzenli olarak izlemek ve değerlendirmek',
        ],
      },
      {
        roman: 'V.',
        title: 'Çalışan Yetkinliği ve Farkındalık',
        items: [
          'Çalışanların bilgi, beceri ve yetkinliklerini artırmaya yönelik eğitimleri sağlamak',
          'Entegre Yönetim Sistemi bilincini tüm çalışanlara yaymak',
        ],
      },
    ],
    closing1: 'Bu politika doğrultusunda kalite, çevre ve İSG hedefleri belirlenir, izlenir ve <strong className="text-ink">Yönetimin Gözden Geçirmesi toplantılarında</strong> değerlendirilir.',
    closing2: 'Entegre Yönetim Politikası; tüm çalışanlara duyurulmuş olup anlaşılması sağlanır ve ilgili tarafların erişimine açıktır.',
    closing3: 'ESMAKSAN Yönetimi olarak, bu politikanın uygulanmasını, sürdürülmesini ve sürekli iyileştirilmesini taahhüt ederiz.'
  },
  en: {
    tag: '',
    title: 'INTEGRATED MANAGEMENT',
    highlight: 'POLICY',
    statValue: 'IMS',
    pdfDownloadLabel: 'DOWNLOAD POLICY (PDF)',
    viewFullScreen: 'VIEW FULL SCREEN',
    approvalLabel: 'Approval',
    managementLabel: 'ESMAKSAN Management',
    intro1: 'As <strong className="text-ink">ESMAKSAN Machinery Spare Parts and Defense</strong>, we act with the awareness of contributing to national security while operating in the fields of the defense industry, machinery spare parts, and machining. This plan has been prepared to achieve the quality, environment, and OHS goals determined in line with the Integrated Management Policy.',
    intro2: 'At the core of our Integrated Management System is the goal to jointly manage and continuously improve <strong className="text-ink">quality, environment, and occupational health and safety performance</strong>.',
    intro3: 'Our organization has established, implements, and continuously improves the Integrated Management System in accordance with the requirements of ISO 9001 Quality Management System, ISO 14001 Environmental Management System, and ISO 45001 Occupational Health and Safety Management System standards.',
    intro4: 'In this context, we commit to fulfilling the following commitments:',
    sections: [
      {
        roman: 'I.',
        title: 'Quality Management Commitments',
        items: [
          'To fully meet customer expectations, contract terms, and technical requirements',
          'To work with the principle of zero defects and high precision in the defense industry and precision parts production',
          'To continuously improve quality by monitoring process performances',
          'To evaluate and monitor suppliers according to quality criteria',
        ],
      },
      {
        roman: 'II.',
        title: 'Environmental Management Commitments',
        items: [
          'Prevention of environmental pollution and reduction of environmental impacts',
          'Efficient use of natural resources, reduction of waste, and support for recycling',
          'Full compliance with relevant environmental legislation and legal requirements',
          'Determining and controlling environmental risks and opportunities',
        ],
      },
      {
        roman: 'III.',
        title: 'Occupational Health and Safety Commitments',
        items: [
          'Providing a safe and healthy working environment',
          'Prevention of occupational accidents and occupational diseases',
          'Elimination of hazards and reduction of risks',
          'Enabling employee participation and increasing OHS awareness',
        ],
      },
      {
        roman: 'IV.',
        title: 'Risk-Based Approach and Continuous Improvement',
        items: [
          'Determining risks and opportunities within the scope of the Integrated Management System',
          'Effectively implementing preventive and corrective actions',
          'Regularly monitoring and evaluating system performance',
        ],
      },
      {
        roman: 'V.',
        title: 'Employee Competence and Awareness',
        items: [
          'Providing training to increase the knowledge, skills, and competencies of employees',
          'Spreading the awareness of the Integrated Management System to all employees',
        ],
      },
    ],
    closing1: 'In line with this policy, quality, environment, and OHS targets are determined, monitored, and evaluated in <strong className="text-ink">Management Review meetings</strong>.',
    closing2: 'The Integrated Management Policy has been announced to all employees to ensure understanding and is accessible to relevant parties.',
    closing3: 'As ESMAKSAN Management, we commit to the implementation, maintenance, and continuous improvement of this policy.'
  },
  ru: {
    tag: '',
    title: 'ИНТЕГРИРОВАННАЯ СИСТЕМА',
    highlight: 'УПРАВЛЕНИЯ',
    statValue: 'ИСМ',
    pdfDownloadLabel: 'СКАЧАТЬ ПОЛИТИКУ (PDF)',
    viewFullScreen: 'ПОЛНОЭКРАННЫЙ РЕЖИМ',
    approvalLabel: 'Утверждение',
    managementLabel: 'Руководство ESMAKSAN',
    intro1: 'Как <strong className="text-ink">ESMAKSAN Machinery Spare Parts and Defense</strong>, мы действуем с осознанием своего вклада в национальную безопасность, работая в сфере оборонной промышленности, производства запасных частей для машин и механообработки. Этот план был подготовлен для достижения целей в области качества, экологии и охраны труда, определенных в соответствии с Политикой интегрированного управления.',
    intro2: 'В основе нашей Интегрированной системы управления лежит совместное управление и постоянное улучшение <strong className="text-ink">показателей качества, экологии, а также охраны здоровья и безопасности труда</strong>.',
    intro3: 'Наша организация создала, внедряет и постоянно совершенствует Интегрированную систему управления в соответствии с требованиями стандартов Системы менеджмента качества ISO 9001, Системы экологического менеджмента ISO 14001 и Системы менеджмента охраны труда и техники безопасности ISO 45001.',
    intro4: 'В этом контексте мы обязуемся выполнять следующие обязательства:',
    sections: [
      {
        roman: 'I.',
        title: 'Обязательства по управлению качеством',
        items: [
          'Полностью соответствовать ожиданиям клиентов, условиям контрактов и техническим требованиям',
          'Работать по принципу нулевого брака и высокой точности в оборонной промышленности и производстве точных деталей',
          'Постоянно улучшать качество путем мониторинга показателей процессов',
          'Оценивать и контролировать поставщиков в соответствии с критериями качества',
        ],
      },
      {
        roman: 'II.',
        title: 'Обязательства по экологическому менеджменту',
        items: [
          'Предотвращение загрязнения окружающей среды и снижение воздействия на нее',
          'Эффективное использование природных ресурсов, сокращение отходов и поддержка переработки',
          'Полное соблюдение применимого экологического законодательства и правовых требований',
          'Определение и контроль экологических рисков и возможностей',
        ],
      },
      {
        roman: 'III.',
        title: 'Обязательства в области охраны труда и техники безопасности',
        items: [
          'Обеспечение безопасной и здоровой рабочей среды',
          'Предотвращение несчастных случаев на производстве и профессиональных заболеваний',
          'Устранение опасностей и снижение рисков',
          'Обеспечение участия сотрудников и повышение осведомленности в области ОТ и ТБ',
        ],
      },
      {
        roman: 'IV.',
        title: 'Риск-ориентированный подход и постоянное улучшение',
        items: [
          'Определение рисков и возможностей в рамках Интегрированной системы управления',
          'Эффективная реализация превентивных и корректирующих действий',
          'Регулярный мониторинг и оценка эффективности системы',
        ],
      },
      {
        roman: 'V.',
        title: 'Компетентность и осведомленность сотрудников',
        items: [
          'Предоставление обучения для повышения знаний, навыков и компетенций сотрудников',
          'Распространение знаний об Интегрированной системе управления среди всех сотрудников',
        ],
      },
    ],
    closing1: 'В соответствии с этой политикой определяются, контролируются и оцениваются на <strong className="text-ink">собраниях руководства</strong> цели в области качества, экологии и ОТ и ТБ.',
    closing2: 'Политика интегрированного управления была доведена до сведения всех сотрудников для обеспечения ее понимания и доступна для заинтересованных сторон.',
    closing3: 'Руководство ESMAKSAN обязуется внедрять, поддерживать и постоянно совершенствовать эту политику.'
  },
  ar: {
    tag: '',
    title: 'الإدارة المتكاملة',
    highlight: 'السياسة',
    statValue: 'نظام',
    pdfDownloadLabel: 'تحميل السياسة (PDF)',
    viewFullScreen: 'عرض بملء الشاشة',
    approvalLabel: 'موافقة',
    managementLabel: 'إدارة ESMAKSAN',
    intro1: 'بصفتنا <strong className="text-ink">ESMAKSAN لقطع غيار الآلات والدفاع</strong>، فإننا نتصرف بوعي للمساهمة في الأمن القومي أثناء العمل في مجالات الصناعة الدفاعية وقطع غيار الآلات والتشغيل الآلي. تم إعداد هذه الخطة لتمكين أهداف الجودة والبيئة والصحة والسلامة المهنية المحددة بما يتماشى مع سياسة الإدارة المتكاملة.',
    intro2: 'يكمن أساس نظام الإدارة المتكاملة لدينا في الإدارة المشتركة والتحسين المستمر لـ <strong className="text-ink">أداء الجودة والبيئة والصحة والسلامة المهنية</strong>.',
    intro3: 'أنشأت منظمتنا وتنفذ وتحسن باستمرار نظام الإدارة المتكاملة وفقًا لمتطلبات معايير نظام إدارة الجودة ISO 9001، ونظام الإدارة البيئية ISO 14001، ونظام إدارة الصحة والسلامة المهنية ISO 45001.',
    intro4: 'في هذا السياق، نلتزم بالوفاء بالالتزامات التالية:',
    sections: [
      {
        roman: 'I.',
        title: 'التزامات إدارة الجودة',
        items: [
          'التلبية الكاملة لتوقعات العملاء وشروط العقد والمتطلبات الفنية',
          'العمل بمبدأ عدم وجود عيوب والدقة العالية في صناعة الدفاع وإنتاج الأجزاء الدقيقة',
          'التحسين المستمر للجودة من خلال مراقبة أداء العمليات',
          'تقييم ومراقبة الموردين وفقًا لمعايير الجودة',
        ],
      },
      {
        roman: 'II.',
        title: 'التزامات الإدارة البيئية',
        items: [
          'منع التلوث البيئي والحد من الآثار البيئية',
          'الاستخدام الفعال للموارد الطبيعية وتقليل النفايات ودعم إعادة التدوير',
          'الامتثال التام للتشريعات البيئية والمتطلبات القانونية ذات الصلة',
          'تحديد المخاطر والفرص البيئية والسيطرة عليها',
        ],
      },
      {
        roman: 'III.',
        title: 'التزامات الصحة والسلامة المهنية',
        items: [
          'توفير بيئة عمل آمنة وصحية',
          'الوقاية من حوادث العمل والأمراض المهنية',
          'القضاء على المخاطر وتقليل الأخطار',
          'تمكين مشاركة الموظفين وزيادة الوعي بالصحة والسلامة المهنية',
        ],
      },
      {
        roman: 'IV.',
        title: 'نهج قائم على المخاطر والتحسين المستمر',
        items: [
          'تحديد المخاطر والفرص ضمن نطاق نظام الإدارة المتكاملة',
          'التنفيذ الفعال للإجراءات الوقائية والتصحيحية',
          'المراقبة والتقييم المنتظم لأداء النظام',
        ],
      },
      {
        roman: 'V.',
        title: 'كفاءة الموظفين ووعيهم',
        items: [
          'توفير التدريب لزيادة معارف ومهارات وكفاءات الموظفين',
          'نشر الوعي بنظام الإدارة المتكاملة لجميع الموظفين',
        ],
      },
    ],
    closing1: 'تماشيًا مع هذه السياسة، يتم تحديد ومراقبة وتقييم أهداف الجودة والبيئة والصحة والسلامة المهنية في <strong className="text-ink">اجتماعات مراجعة الإدارة</strong>.',
    closing2: 'تم الإعلان عن سياسة الإدارة المتكاملة لجميع الموظفين لضمان فهمها وهي متاحة للأطراف ذات الصلة.',
    closing3: 'تلتزم إدارة ESMAKSAN بتنفيذ هذه السياسة والحفاظ عليها وتحسينها باستمرار.'
  },
};

const pdfUrl = "/POL.01.Entegre Yönetim Politikası.pdf";

const IntegratedManagementPolicy: React.FC = () => {
  const { language } = useLanguage();
  const P = pageLocal[language] || pageLocal.tr;
  const sections = P.sections;

  return (
    <div className="min-h-screen bg-paper">
      <PageHero
        tag={P.tag}
        title={P.title}
        highlight={P.highlight}
        statValue={P.statValue}
        statIcon={
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
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
              <p className="text-ink/70 text-lg leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: P.intro1 }}></p>
              <p className="text-ink/70 text-lg leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: P.intro2 }}></p>
              <p className="text-ink/70 text-lg leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: P.intro3 }}></p>
              <p className="text-ink/80 text-base leading-relaxed font-semibold" dangerouslySetInnerHTML={{ __html: P.intro4 }}></p>
            </div>
          </motion.div>

          {/* Compact PDF Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-[320px] shrink-0 pt-4"
          >
            <div className="bg-white rounded-xl border border-ink/10 overflow-hidden shadow-xl shadow-ink/5 group">
              <div className="aspect-[1/1.3] relative bg-ink/[0.02]">
                <iframe 
                  src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full pointer-events-none"
                  title="Policy PDF Preview"
                />
                <div className="absolute inset-0 bg-ink/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                   <a 
                    href={pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-ink px-4 py-2 rounded-full text-xs font-bold shadow-lg transform scale-90 group-hover:scale-100 transition-all"
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

      {/* Commitment Sections Grid */}
      <section className="pb-16 industrial-grid">
        <div className="max-w-[1600px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* First 4 Sections */}
            {sections.slice(0, 4).map((section: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/60 backdrop-blur-sm border border-ink/8 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-5xl font-black text-brand/30 leading-none select-none">
                    {section.roman}
                  </span>
                  <h3 className="text-xl font-black text-ink uppercase tracking-tight mt-2">
                    {section.title}
                  </h3>
                </div>
                <div className="h-px bg-ink/10 mb-6" />
                <ul className="space-y-3">
                  {section.items.map((item: string, iIdx: number) => (
                    <li key={iIdx} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-brand" />
                      <span className="text-ink/70 text-sm font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Section V and Closing Statement in the same row */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/60 backdrop-blur-sm border border-ink/8 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-5xl font-black text-brand/30 leading-none select-none">
                  {sections[4].roman}
                </span>
                <h3 className="text-xl font-black text-ink uppercase tracking-tight mt-2">
                  {sections[4].title}
                </h3>
              </div>
              <div className="h-px bg-ink/10 mb-6" />
              <ul className="space-y-3">
                {sections[4].items.map((item: string, iIdx: number) => (
                  <li key={iIdx} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-brand" />
                    <span className="text-ink/70 text-sm font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Closing / Approval Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="border border-brand/20 rounded-2xl p-8 bg-brand/[0.03] backdrop-blur-sm flex flex-col justify-between"
            >
              <div className="space-y-4 text-ink/70 text-sm leading-relaxed font-medium">
                <p dangerouslySetInnerHTML={{ __html: P.closing1 }}></p>
                <p dangerouslySetInnerHTML={{ __html: P.closing2 }}></p>
                <p className="text-ink font-bold" dangerouslySetInnerHTML={{ __html: P.closing3 }}></p>
              </div>

              <div className="mt-8 pt-6 border-t border-ink/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-[10px] text-ink/40 uppercase tracking-widest font-bold mb-1">{P.approvalLabel}</p>
                  <p className="text-xl font-black text-ink tracking-tight">16.10.2025</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-0.5 bg-brand" />
                  <p className="text-xs font-extrabold text-ink uppercase tracking-widest">{P.managementLabel}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntegratedManagementPolicy;

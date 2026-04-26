import React from 'react';
import { motion } from 'motion/react';
import PageHero from '../components/PageHero';
import { useLanguage } from '../LanguageContext';

const pageLocal: Record<string, any> = {
  tr: {
    tag: '',
    title: 'İSG YÖNETİM SİSTEMİ',
    highlight: 'ISO 45001',
    statValue: 'İSG',
    pdfDownloadLabel: 'BELGEYİ İNDİR (PDF)',
    viewFullScreen: 'TAM EKRAN GÖRÜNTÜLE',
    approvalLabel: 'Standardizasyon',
    managementLabel: 'GÜVENLİ ÜRETİM',
    intro1: '<strong className="text-ink">ESMAKSAN Makine</strong>, en değerli kaynağının "insan" olduğunun bilinciyle, <strong className="text-ink">ISO 45001 İş Sağlığı ve Güvenliği Yönetim Sistemi</strong>\'ni tüm tesislerinde ve operasyonlarında ödünsüz şekilde uygulamaktadır.',
    intro2: 'Endüstriyel imalat ve talaşlı üretim gibi potansiyel risk barındıran faaliyetlerimizde, çalışanlarımızın can güvenliği her şeyden önce gelir. Amacımız sadece kurallara uymak değil, proaktif yaklaşımlarla sıfır kaza kültürünü şirket DNA\'sına işlemektir.',
    intro3: 'İş Sağlığı ve Güvenliği taahhütlerimiz şunlardır:',
    sections: [
      {
        roman: 'I.',
        title: 'Güvenli Çalışma Ortamı',
        items: [
          'Tüm çalışanlarımıza, taşeronlarımıza ve ziyaretçilerimize mesleki hastalıklardan ve iş kazalarından arındırılmış güvenli bir tesis sağlamak.',
          'Sıfır iş kazası hedefini benimseyerek tehlikeli durum ve davranışları kaynağında yok etmek.',
        ],
      },
      {
        roman: 'II.',
        title: 'Risk Değerlendirmesi',
        items: [
          'İşletme bünyesindeki tüm faaliyetlerin OHSAS/İSG risk analizlerini proaktif bir yaklaşımla gerçekleştirmek.',
          'Olası acil durumlara karşı hazırlıklı olmak ve eylem planlarını sürekli güncel tutmak.',
        ],
      },
      {
        roman: 'III.',
        title: 'Çalışan Katılımı ve Eğitim',
        items: [
          'İş sağlığı ve güvenliği kültürünü tüm personelde içselleştirmek amacıyla periyodik farkındalık eğitimleri düzenlemek.',
          'Karar alma süreçlerinde çalışanların ve çalışan temsilcilerinin görüşlerine yer vererek katılımcı bir kültür inşa etmek.',
        ],
      },
      {
        roman: 'IV.',
        title: 'Yasal Uyum ve İyileştirme',
        items: [
          'İş sağlığı ve güvenliği ile ilgili tüm ulusal ve uluslararası yasal mevzuatlara tam uygunluk sağlamak.',
          'Periyodik denetimler ve performans ölçümleri ile sistemin sürekli iyileştirilmesini taahhüt etmek.',
        ],
      },
    ],
    closing1: 'Üretim süreçlerimizin devamlılığını ancak güvenli bir çalışma ortamıyla koruyabiliriz. <strong className="text-ink">ISO 45001 sertifikamız</strong> bu çabalarımızın ve çalışanımıza verdiğimiz değerin resmi bir göstergesidir.',
    closing2: 'Birlikte üretiyor, birlikte korunuyoruz felsefesi ile daha güvenli ve sağlıklı bir çalışma kültürü inşa etmek en büyük taahhüdümüzdür.'
  },
  en: {
    tag: '',
    title: 'OHS MANAGEMENT',
    highlight: 'ISO 45001',
    statValue: 'OHS',
    pdfDownloadLabel: 'DOWNLOAD DOCUMENT',
    viewFullScreen: 'VIEW FULL SCREEN',
    approvalLabel: 'Standardization',
    managementLabel: 'SAFE PRODUCTION',
    intro1: 'With the awareness that its most valuable resource is "human", <strong className="text-ink">ESMAKSAN Machinery</strong> implements the <strong className="text-ink">ISO 45001 Occupational Health and Safety Management System</strong> uncompromisingly in all its facilities and operations.',
    intro2: 'In our activities involving potential risks such as industrial manufacturing and machining, the life safety of our employees comes first. Our goal is not only to comply with the rules but to embed a zero-accident culture into the company DNA with proactive approaches.',
    intro3: 'Our Occupational Health and Safety commitments are:',
    sections: [
      {
        roman: 'I.',
        title: 'Safe Working Environment',
        items: [
          'To provide a safe facility free from occupational diseases and workplace accidents for all our employees, subcontractors, and visitors.',
          'To eliminate dangerous situations and behaviors at their source by adopting a zero workplace accident goal.',
        ],
      },
      {
        roman: 'II.',
        title: 'Risk Assessment',
        items: [
          'To carry out OHS risk analyses of all activities within the enterprise with a proactive approach.',
          'To be prepared for possible emergencies and keep action plans constantly updated.',
        ],
      },
      {
        roman: 'III.',
        title: 'Employee Participation and Training',
        items: [
          'To organize periodic awareness training in order to internalize the occupational health and safety culture in all personnel.',
          'To build a participatory culture by including the views of employees and employee representatives in decision-making processes.',
        ],
      },
      {
        roman: 'IV.',
        title: 'Legal Compliance and Improvement',
        items: [
          'To ensure full compliance with all national and international legal regulations regarding occupational health and safety.',
          'To commit to continuous improvement of the system through periodic audits and performance measurements.',
        ],
      },
    ],
    closing1: 'We can only maintain the continuity of our production processes with a safe working environment. Our <strong className="text-ink">ISO 45001 certificate</strong> is an official indicator of our efforts and the value we place on our employees.',
    closing2: 'With the philosophy of "we produce together, we are protected together", building a safer and healthier working culture is our greatest commitment.'
  },
  ru: {
    tag: '',
    title: 'СИСТЕМА МЕНЕДЖМЕНТА ОТ И ТБ',
    highlight: 'ISO 45001',
    statValue: 'ОТ и ТБ',
    pdfDownloadLabel: 'СКАЧАТЬ ДОКУМЕНТ',
    viewFullScreen: 'ПОЛНОЭКРАННЫЙ РЕЖИМ',
    approvalLabel: 'Стандартизация',
    managementLabel: 'БЕЗОПАСНОЕ ПРОИЗВОДСТВО',
    intro1: 'Осознавая, что самым ценным ресурсом является "человек", <strong className="text-ink">ESMAKSAN Machinery</strong> бескомпромиссно внедряет <strong className="text-ink">Систему менеджмента охраны труда и техники безопасности ISO 45001</strong> на всех своих объектах и в операциях.',
    intro2: 'В нашей деятельности, связанной с потенциальными рисками, такой как промышленное производство и механическая обработка, безопасность жизни наших сотрудников стоит на первом месте. Наша цель - не просто соблюдать правила, но и внедрить культуру нулевого травматизма в ДНК компании с помощью проактивных подходов.',
    intro3: 'Наши обязательства в области охраны труда и техники безопасности:',
    sections: [
      {
        roman: 'I.',
        title: 'Безопасная рабочая среда',
        items: [
          'Обеспечить безопасные условия труда, свободные от профессиональных заболеваний и несчастных случаев на производстве, для всех наших сотрудников, субподрядчиков и посетителей.',
          'Устранять опасные ситуации и поведение в их источнике, принимая цель нулевого травматизма на рабочем месте.',
        ],
      },
      {
        roman: 'II.',
        title: 'Оценка рисков',
        items: [
          'Проводить анализ рисков охраны труда для всех видов деятельности на предприятии с проактивным подходом.',
          'Быть готовыми к возможным чрезвычайным ситуациям и постоянно обновлять планы действий.',
        ],
      },
      {
        roman: 'III.',
        title: 'Участие и обучение сотрудников',
        items: [
          'Организовывать периодическое обучение для повышения осведомленности с целью интернализации культуры охраны труда всем персоналом.',
          'Строить культуру участия, учитывая мнения сотрудников и их представителей в процессах принятия решений.',
        ],
      },
      {
        roman: 'IV.',
        title: 'Соблюдение нормативных требований и улучшение',
        items: [
          'Обеспечить полное соответствие всем национальным и международным правовым нормам в области охраны труда.',
          'Гарантировать постоянное улучшение системы посредством периодических аудитов и измерений эффективности.',
        ],
      },
    ],
    closing1: 'Мы можем поддерживать непрерывность наших производственных процессов только при наличии безопасной рабочей среды. Наш <strong className="text-ink">сертификат ISO 45001</strong> является официальным показателем наших усилий и той ценности, которую мы придаем нашим сотрудникам.',
    closing2: 'Руководствуясь философией "мы производим вместе, мы защищены вместе", создание более безопасной и здоровой культуры труда является нашим главным обязательством.'
  },
  ar: {
    tag: '',
    title: 'نظام إدارة الصحة والسلامة',
    highlight: 'ISO 45001',
    statValue: 'OHS',
    pdfDownloadLabel: 'تحميل المستند',
    viewFullScreen: 'عرض بملء الشاشة',
    approvalLabel: 'المعايرة',
    managementLabel: 'الإنتاج الآمن',
    intro1: 'إدراكاً منها أن أثمن مواردها هو "الإنسان"، تطبق <strong className="text-ink">ESMAKSAN Machinery</strong> <strong className="text-ink">نظام إدارة الصحة والسلامة المهنية ISO 45001</strong> بصرامة في جميع مرافقها وعملياتها.',
    intro2: 'في أنشطتنا التي تنطوي على مخاطر محتملة مثل التصنيع الصناعي والآلي، تأتي سلامة حياة موظفينا في المقام الأول. هدفنا ليس فقط الامتثال للقواعد ولكن دمج ثقافة خالية من الحوادث في الحمض النووي للشركة من خلال الأساليب الاستباقية.',
    intro3: 'التزاماتنا في مجال الصحة والسلامة المهنية هي:',
    sections: [
      {
        roman: 'I.',
        title: 'بيئة عمل آمنة',
        items: [
          'توفير منشأة آمنة خالية من الأمراض المهنية وحوادث العمل لجميع موظفينا ومقاولينا من الباطن وزوارنا.',
          'القضاء على المواقف والسلوكيات الخطرة من مصدرها من خلال تبني هدف خلو حوادث العمل.',
        ],
      },
      {
        roman: 'II.',
        title: 'تقييم المخاطر',
        items: [
          'إجراء تحليلات مخاطر الصحة والسلامة المهنية لجميع الأنشطة داخل المؤسسة بنهج استباقي.',
          'الاستعداد لحالات الطوارئ المحتملة وتحديث خطط العمل باستمرار.',
        ],
      },
      {
        roman: 'III.',
        title: 'مشاركة الموظفين والتدريب',
        items: [
          'تنظيم تدريب توعوي دوري من أجل استيعاب ثقافة الصحة والسلامة المهنية لدى جميع الموظفين.',
          'بناء ثقافة تشاركية من خلال إشراك آراء الموظفين وممثليهم في عمليات صنع القرار.',
        ],
      },
      {
        roman: 'IV.',
        title: 'الامتثال القانوني والتحسين',
        items: [
          'ضمان الامتثال التام لجميع اللوائح القانونية الوطنية والدولية المتعلقة بالصحة والسلامة المهنية.',
          'الالتزام بالتحسين المستمر للنظام من خلال عمليات التدقيق الدورية وقياسات الأداء.',
        ],
      },
    ],
    closing1: 'لا يمكننا الحفاظ على استمرارية عمليات الإنتاج لدينا إلا من خلال بيئة عمل آمنة. تعتبر <strong className="text-ink">شهادة ISO 45001</strong> الخاصة بنا مؤشرًا رسميًا على جهودنا والقيمة التي نوليها لموظفينا.',
    closing2: 'مع فلسفة "نُنتج معًا، ونُحمى معًا"، فإن بناء ثقافة عمل أكثر أمانًا وصحة هو التزامنا الأكبر.'
  },
};

const pdfUrl = "/ESMAKSAN MAKİNA 45001.pdf";

const OhsManagement: React.FC = () => {
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
              <p className="text-ink/80 text-base leading-relaxed font-semibold" dangerouslySetInnerHTML={{ __html: P.intro3 }}></p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-[320px] shrink-0 pt-4"
          >
            <div className="bg-white rounded-xl border border-ink/10 overflow-hidden shadow-xl shadow-ink/5 group">
              <div className="aspect-[1/1.4] relative bg-ink/[0.02]">
                <iframe 
                  src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full pointer-events-none"
                  title="ISO 45001 Certificate"
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

            {/* Closing / Approval Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="border border-brand/20 rounded-2xl p-8 bg-brand/[0.03] backdrop-blur-sm flex flex-col justify-between lg:col-span-2"
            >
              <div className="space-y-4 text-ink/70 text-sm leading-relaxed font-medium">
                <p dangerouslySetInnerHTML={{ __html: P.closing1 }}></p>
                <p className="text-ink font-bold" dangerouslySetInnerHTML={{ __html: P.closing2 }}></p>
              </div>

              <div className="mt-8 pt-6 border-t border-ink/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-[10px] text-ink/40 uppercase tracking-widest font-bold mb-1">{P.approvalLabel}</p>
                  <p className="text-xl font-black text-ink tracking-tight">ISO 45001:2018</p>
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

export default OhsManagement;

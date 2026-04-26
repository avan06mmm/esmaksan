import React from 'react';
import { motion } from 'motion/react';
import PageHero from '../components/PageHero';
import { useLanguage } from '../LanguageContext';

const InformationSecurity: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-paper">
      <PageHero
        tag="BGYS"
        title="BİLGİ"
        highlight="GÜVENLİĞİ"
        statValue="2020"
        statIcon={
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        }
      />
      <section className="px-6 md:px-8 max-w-[1600px] mx-auto mb-16 mt-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-ink/5"
        >
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tight text-ink">2020'den Bu Yana Süregelen Başarı</h2>
              <div className="w-20 h-1.5 bg-brand rounded-full"></div>
              <p className="text-ink/70 text-lg leading-relaxed font-medium">
                ESMAKSAN olarak, bilgi güvenliğini kurumsal kültürümüzün temel bir parçası olarak kabul ediyoruz. Bilgi Güvenliği Yönetim Sistemi (BGYS) standartlarına uyum sağlayarak, hem kurumumuzun hem de paydaşlarımızın verilerini en yüksek standartlarda koruyoruz.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  'Gizlilik, Bütünlük ve Erişilebilirlik ilkelerine tam uyum',
                  'Bilgi varlıklarının risk analizlerinin düzenli yapılması',
                  'Sürekli eğitimlerle personel farkındalığının artırılması',
                  'Yasal şartlara ve ilgili mevzuatlara eksiksiz riayet edilmesi'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-ink/80 font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/3 flex flex-col justify-center">
              <div className="bg-ink/5 rounded-2xl p-8 border border-ink/10 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <svg className="w-16 h-16 mx-auto mb-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="text-xl font-bold uppercase tracking-wider mb-2">ISO 27001</h3>
                <p className="text-ink/60 text-sm font-medium">Bilgi Güvenliği Yönetim Sistemi Sertifikalı Kurum</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default InformationSecurity;


export type Language = 'tr' | 'en' | 'ru' | 'ar';

export interface Translation {
  nav: {
    home: string;
    products: string;
    about: string;
    production: string;
    quality: string;
    contact: string;
    getQuote: string;
    partsProduction: string;
    categories: { 
      label: string; 
      value: string; 
      subCategories?: { label: string; value: string }[] 
    }[];
  };
  hero: {
    brand: string;
    slides: {
      title: string;
      highlight: string;
      desc: string;
      stats: { val: string; label: string };
    }[];
    viewProducts: string;
  };
  specs: {
    items: { title: string; desc: string; icon: string }[];
  };
  featured: {
    title: string;
    subtitle: string;
    viewAll: string;
  };
  about: {
    hero: {
      tag: string;
      title: string;
      highlight: string;
      desc: string;
    };
    stats: { label: string; value: string; unit: string }[];
    vision: {
      title: string;
      desc: string;
    };
    mission: {
      title: string;
      desc: string;
    };
    quality: {
      title: string;
      subtitle: string;
      ceCertified: string;
      europeanStandards: string;
    };
    journey: {
      title: string;
      items: { year: string; title: string; desc: string }[];
    };
  };
  products: {
    hero: {
      tag: string;
      title: string;
      highlight: string;
      desc: string;
      totalLabel: string;
    };
    filterAll: string;
    addToQuote: string;
    noProducts: string;
    cta: {
      title: string;
      desc: string;
      button: string;
    };
    items: {
      id: number;
      name: string;
      category: string;
      subCategory?: string;
      description: string;
      image: string;
      specs: string[];
    }[];
  };
  contact: {
    hero: {
      tag: string;
      title: string;
      highlight: string;
      desc: string;
    };
    form: {
      title: string;
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
      subjects: string[];
    };
    info: {
      addressLabel: string;
      address: string;
      phoneLabel: string;
      emailLabel: string;
      hoursLabel: string;
      hours: string;
      viewMap: string;
      socialLabel: string;
    };
  };
  production: {
    hero: {
      tag: string;
      title: string;
      highlight: string;
      desc: string;
    };
    expertise: {
      title: string;
      desc: string;
    };
    capabilities: {
      title: string;
      desc: string;
      items: string[];
    };
    team: {
      title: string;
      desc: string;
      cta: string;
    };
  };
  qualityControl: {
    hero: {
      tag: string;
      title: string;
      highlight: string;
      desc: string;
    };
    inspection: {
      title: string;
      desc: string;
      items: string[];
    };
  };
  footer: {
    brandSuffix: string;
    brandDesc: string;
    navTitle: string;
    categoriesTitle: string;
    categories: string[];
    newsletterTitle: string;
    newsletterDesc: string;
    emailPlaceholder: string;
    subscribeButton: string;
    privacyPolicy: string;
    kvkk: string;
    systemStatusLabel: string;
    operationalLabel: string;
  };
  whatsapp: string;
}

export const translations: Record<Language, Translation> = {
  tr: {
    nav: {
      home: 'Anasayfa',
      products: 'Ürün Gruplarımız',
      about: 'Hakkımızda',
      production: 'Üretim',
      quality: 'Kalite Kontrol',
      contact: 'İletişim',
      getQuote: 'TEKLİF ALIN',
      partsProduction: 'YEDEK PARÇA ÜRETİMİ',
      categories: [
        { 
          label: 'TORK', 
          value: 'torque',
          subCategories: [
            { label: 'CAT', value: 'cat' },
            { label: 'KOMATSU', value: 'komatsu' },
            { label: 'KAWASAKI', value: 'kawasaki' },
            { label: 'FURUKAWA', value: 'furukawa' },
            { label: 'CLARK', value: 'clark' },
            { label: 'VOLVO', value: 'volvo' },
            { label: 'ALLISSON', value: 'allisson' }
          ]
        },
        { 
          label: 'ŞANZIMAN', 
          value: 'transmission',
          subCategories: [
            { label: 'CAT', value: 'cat' },
            { label: 'KOMATSU', value: 'komatsu' },
            { label: 'KAWASAKI', value: 'kawasaki' }
          ]
        },
        { 
          label: 'POMPA', 
          value: 'pump',
          subCategories: [
            { label: 'CAT', value: 'cat' },
            { label: 'KOMATSU', value: 'komatsu' },
            { label: 'KAWASAKI', value: 'kawasaki' },
            { label: 'FURUKAWA', value: 'furukawa' },
            { label: 'CLARK', value: 'clark' },
            { label: 'VOLVO', value: 'volvo' },
            { label: 'ALLISSON', value: 'allisson' },
            { label: 'ZF', value: 'zf' }
          ]
        },
        { label: 'CER GRUBU', value: 'final-drive' },
        { label: 'ÖZEL İMALATLAR', value: 'custom' },
        { label: 'YENİ ÜRÜNLER', value: 'new' }
      ],
    },
    hero: {
      brand: 'ESMAKSAN MÜHENDİSLİK',
      slides: [
        {
          title: "Ağır İş Makinaları İçin",
          highlight: "Hassas Çözümler",
          desc: "Caterpillar, Komatsu ve Volvo grubu için OEM standartlarında, yüksek mukavemetli pim ve burç imalatı yapıyoruz.",
          stats: { val: "0.01mm", label: "Tolerans Payı" }
        },
        {
          title: "Türkiye'den Dünyaya",
          highlight: "Global İhracat",
          desc: "Ankara'daki modern tesislerimizde ürettiğimiz yedek parçaları 32'den fazla ülkeye güvenle ihraç ediyoruz.",
          stats: { val: "32+", label: "İhracat Ülkesi" }
        },
        {
          title: "Mükemmel Dayanıklılık",
          highlight: "İleri Isıl İşlem",
          desc: "Parçalarımızın ömrünü uzatan sementasyon ve indüksiyon sertleştirme süreçleri uzman kadromuzla gerçekleşir.",
          stats: { val: "62 HRC", label: "Maksimum Sertlik" }
        }
      ],
      viewProducts: 'Ürünleri İnceleyin',
    },
    specs: {
      items: [
        { title: "Yüksek Hassasiyet", desc: "Mikron düzeyinde işleme kapasitemizle hatasız üretim sağlıyoruz.", icon: "01" },
        { title: "Sertifikalı Çelik", desc: "Sadece Avrupa menşeli ve sertifikalı alaşımlı çelikler kullanıyoruz.", icon: "02" },
        { title: "Hızlı Teslimat", desc: "Geniş stok ağımız sayesinde acil parça ihtiyaçlarınıza anında yanıt veriyoruz.", icon: "03" }
      ]
    },
    featured: {
      title: 'ÜRÜN GRUPLARIMIZ',
      subtitle: 'KATALOG ÖNİZLEME',
      viewAll: 'TÜMÜNÜ GÖR',
    },
    about: {
      hero: {
        tag: 'KURUMSAL PROFİL',
        title: 'YARIM ASRA YAKLAŞAN',
        highlight: 'TECRÜBE, KESİNTİSİZ GÜÇ: ESMAKSAN',
        desc: '1977 yılında temelleri atılan ESMAKSAN Makine Sanayi Ticaret LTD. ŞTİ., iş makinaları yedek parça sektöründe güvenin ve kalitenin simgesi olmayı sürdürüyor. Ankara’daki yüksek teknolojili tesisimizde; inşaat, madencilik, karayolu ve altyapı sektörlerinin can damarı olan dev markalara (Caterpillar, Komatsu, Volvo, Hitachi ve daha fazlası) kusursuz uyum sağlayan çözümler üretiyoruz.',
      },
      stats: [
        { label: 'Ürün Çeşidi', value: '2500+', unit: 'Parça' },
        { label: 'İhracat Ülkesi', value: '32+', unit: 'Ülke' },
        { label: 'Kuruluş Yılı', value: '1977', unit: 'Yıl' },
        { label: 'Müşteri Memnuniyeti', value: '%99', unit: 'Oran' },
      ],
      vision: {
        title: 'VİZYONUMUZ',
        desc: 'Deneyimli kadromuzla, üretimden pazarlamaya, satıştan satış sonrası teknik desteğe kadar uçtan uca bir hizmet anlayışı benimsiyoruz. Portföyümüzde yer alan 2500’ü aşkın nitelikli yedek parçayı, en güncel teknolojik donanımlarla işleyerek hem yurt içinde hem de küresel pazarda çözüm ortaklarımıza sunuyoruz.',
      },
      mission: {
        title: 'MİSYONUMUZ',
        desc: 'Bizim için her parça, müşterilerimizin kesintisiz çalışma sözüdür. En yüksek dayanıklılıkta ve hassasiyette yedek parça çözümleri sunarak, iş süreçlerinin kesintisiz devam etmesini sağlamak ve Ar-Ge yatırımlarımızla sektöre yön vermek temel görevimizdir.',
      },
      quality: {
        title: 'KALİTE ODAKLI',
        subtitle: 'Kalite Yönetim Sistemi',
        ceCertified: 'CE SERTİFİKALI',
        europeanStandards: 'Avrupa Standartları',
      },
      journey: {
        title: 'YOLCULUĞUMUZ',
        items: [
          { year: '2004', title: 'Kuruluş', desc: 'Küçük bir atölyede başlayan mühendislik serüveni.' },
          { year: '2012', title: 'Globalleşme', desc: 'İlk ihracat operasyonları ve Avrupa pazarına giriş.' },
          { year: '2024', title: 'Teknoloji', desc: 'Tam otomatize üretim hattı ve Ar-Ge merkezi açılışı.' },
        ],
      },
    },
    products: {
      hero: {
        tag: 'TEKNİK KATALOG',
        title: 'ÜRETİM',
        highlight: 'YELPAZEMİZ',
        desc: 'İş makinalarınızın performansını zirveye taşıyan, OEM standartlarında üretilmiş yüksek hassasiyetli yedek parça gruplarımız.',
        totalLabel: 'TOPLAM ÜRÜN GRUBU',
      },
      filterAll: 'Hepsi',
      addToQuote: 'TEKLİF LİSTESİNE EKLE',
      noProducts: 'BU KATEGORİDE ÜRÜN BULUNAMADI',
      cta: {
        title: 'ÖZEL İMALAT ÇÖZÜMLERİ',
        desc: 'Binlerce parçadan oluşan geniş stok ağımız ve teknik çizim veritabanımız ile ihtiyacınız olan her türlü özel imalat parçayı üretebiliriz.',
        button: 'TEKNİK DESTEK ALIN',
      },
      items: [
        {
          id: 1,
          name: 'Caterpillar Pim ve Burç Grubu',
          category: 'torque',
          subCategory: 'cat',
          description: 'Caterpillar iş makinaları için OEM standartlarında, yüksek aşınma dirençli sementasyon çeliğinden üretilmiş pim ve burç takımları.',
          image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000',
          specs: ['Malzeme: SAE 8620 / 4140', 'Isıl İşlem: İndüksiyon Sertleştirme', 'Hassasiyet: Mikron Düzeyi']
        },
        {
          id: 2,
          name: 'Komatsu Yürüyüş Takımları',
          category: 'transmission',
          subCategory: 'komatsu',
          description: 'Komatsu ekskavatör ve dozerler için dayanıklılığı artırılmış, zorlu arazi koşullarına uygun yedek parça çözümleri.',
          image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000',
          specs: ['Yüksek Tork Dayanımı', 'Aşınmaya Karşı Direnç', 'Tam Uyumluluk']
        },
        {
          id: 3,
          name: 'Volvo Şanzıman Parçaları',
          category: 'pump',
          subCategory: 'volvo',
          description: 'Volvo iş makinaları şanzıman ve diferansiyel grupları için hassas diş açılmış, taşlanmış ve ısıl işlem görmüş dişli takımları.',
          image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1000',
          specs: ['Dişli Tipi: Helisel', 'Sertlik: 58-62 HRC', 'Taşlanmış Yüzey']
        },
        {
          id: 4,
          name: 'Hassas İşlenmiş Pimler',
          category: 'final-drive',
          description: 'Her marka ve model iş makinası için teknik resme uygun, yüksek mukavemetli çelikten imal edilen pimler.',
          image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1000',
          specs: ['Tolerans: f7 / h6', 'Krom Kaplama Opsiyonu', 'OEM Kalitesi']
        },
        {
          id: 5,
          name: 'Özel Alaşımlı Bronz Burçlar',
          category: 'final-drive',
          description: 'Yüksek yük taşıma kapasiteli, yağ kanallı veya kendinden yağlamalı özel alaşımlı bronz burç imalatı.',
          image: 'https://images.unsplash.com/photo-1565151443-32198d423621?auto=format&fit=crop&q=80&w=1000',
          specs: ['Malzeme: GZ-CuSn12', 'Yağ Kanalı Tasarımı', 'Sürtünme Önleyici Yapı']
        },
        {
          id: 6,
          name: 'Ayna Mahruti Takımları',
          category: 'transmission',
          description: 'Diferansiyel grubu için yüksek hassasiyetli taşlanmış dişli takımları. Sessiz ve uzun ömürlü çalışma garantisi.',
          image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000',
          specs: ['Hipoid Tasarım', 'Yüksek Tork Kapasitesi', 'Sertifikalı Çelik']
        },
        {
          id: 7,
          name: 'Teknik Resme Göre Özel İmalat',
          category: 'custom',
          description: 'Müşterilerimizden gelen teknik resim veya numuneye göre, CNC işleme merkezlerimizde özel parça üretimi.',
          image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1000',
          specs: ['CNC Torna & Freze', 'Tersine Mühendislik', 'Prototip ve Seri Üretim']
        }
      ]
    },
    contact: {
      hero: {
        tag: 'İLETİŞİM MERKEZİ',
        title: 'BİZE',
        highlight: 'ULAŞIN',
        desc: 'Teknik destek, teklif talepleri veya iş birliği için uzman ekibimizle iletişime geçin.',
      },
      form: {
        title: 'MESAJ GÖNDERİN',
        name: 'Adınız Soyadınız',
        email: 'E-posta Adresiniz',
        subject: 'Konu',
        message: 'Mesajınız',
        submit: 'MESAJI GÖNDER',
        subjects: ['Teknik Destek', 'Fiyat Teklifi', 'İş Birliği', 'Diğer'],
      },
      info: {
        addressLabel: 'ADRES',
        address: 'Ostim OSB, 1234. Sokak No: 56, Ankara, Türkiye',
        phoneLabel: 'TELEFON',
        emailLabel: 'E-POSTA',
        hoursLabel: 'ÇALIŞMA SAATLERİ',
        hours: 'Pzt - Cmt: 08:30 - 19:00',
        viewMap: 'HARİTADA GÖR',
        socialLabel: 'SOSYAL MEDYA',
      }
    },
    production: {
      hero: {
        tag: 'ÜRETİM VE TEKNOLOJİ',
        title: 'MÜKEMMELİYETİN',
        highlight: 'MERKEZİ',
        desc: 'ESMAKSAN Makine Sanayi, iş makinaları sektöründeki kritik operasyonlar için sadece parça üretmez; yüksek mühendislik disipliniyle üretim, kalite kontrol, montaj ve revizyon süreçlerini tek bir çatı altında birleştirir.',
      },
      expertise: {
        title: 'Sektörel Uzmanlık ve Özel Çözümler',
        desc: 'Global iş makinası devlerine sunduğumuz standart hizmetlerin yanı sıra, iş ortaklarımızın spesifik ihtiyaçlarına yönelik özel ürün taleplerine (custom manufacturing) inovatif çözümler geliştiriyoruz. Esnek üretim kabiliyetimiz sayesinde, projenizin gerektirdiği en zorlu teknik detayları gerçeğe dönüştürüyoruz.',
      },
      capabilities: {
        title: 'İleri Teknoloji ve Dijital Dönüşüm',
        desc: 'Üretimde başarının anahtarının teknolojik dönüşüm olduğuna inanıyoruz. Bu vizyonla modern altyapımızı sürekli güncelliyoruz.',
        items: [
          'Modern Makine Parkuru: Sürekli güncellenen, son teknolojiye sahip CNC ve üretim ekipmanları.',
          'Hata Payı Sıfır: Üretimin her aşamasında uygulanan titiz kalite kontrol protokolleri.',
          'Dinamik Altyapı: Değişen teknolojiye anında adaptasyon sağlayan çevik üretim hattı.'
        ],
      },
      team: {
        title: 'Uzman Kadro, Nitelikli İşçilik',
        desc: 'Teknolojiye yaptığımız yatırımı, insan kaynağımızla taçlandırıyoruz. Alanında akademik ve teknik eğitimlerini tamamlamış, sektör tecrübesi yüksek uzman kadromuzla; ham madde girişinden son montaja kadar her adımda "ESMAKSAN Kalitesini" garanti altına alıyoruz.',
        cta: 'Sektördeki hızınıza, en yeni teknolojimiz ve uzman ekibimizle eşlik ediyoruz.',
      },
    },
    qualityControl: {
      hero: {
        tag: 'KALİTE KONTROL',
        title: 'SIKI DENETİM',
        highlight: 'KALİTE STANDARTLARI',
        desc: 'Üretimin her aşamasında titiz denetimler ve gelişmiş laboratuvar testleri ile her parçanın kalitesini garanti ediyoruz.',
      },
      inspection: {
        title: 'DENETİM VE TEST SÜREÇLERİ',
        desc: 'Ürettiğimiz her yedek parça, OEM standartlarına tam uyum sağlamak için gelişmiş ölçüm araçları kullanılarak titizlikle incelenir.',
        items: [
          'Mikron Düzeyinde Boyutsal Ölçüm',
          'Yüzey Sertlik Testi (HRC)',
          'Malzeme Yapı Analizi',
          'Aşınma ve Dayanıklılık Testleri'
        ],
      },
    },
    footer: {
      brandSuffix: 'MAKİNA',
      brandDesc: '1995\'ten beri iş makinaları yedek parça sektöründe yüksek hassasiyetli üretim ve global tedarik çözümleri sunuyoruz.',
      navTitle: 'NAVİGASYON',
      categoriesTitle: 'ÜRÜN GRUPLARI',
      categories: ['Pim & Burç Grubu', 'Ayna Mahruti', 'Şanzıman Parçaları', 'Diferansiyel', 'Özel İmalat'],
      newsletterTitle: 'BÜLTEN ABONELİĞİ',
      newsletterDesc: 'Yeni ürün grupları ve teknik güncellemelerden haberdar olun.',
      emailPlaceholder: 'E-posta adresi',
      subscribeButton: 'KAYIT',
      privacyPolicy: 'GİZLİLİK POLİTİKASI',
      kvkk: 'KVKK',
      systemStatusLabel: 'SİSTEM DURUMU:',
      operationalLabel: 'OPERASYONEL',
    },
    whatsapp: 'WhatsApp Destek',
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      about: 'About Us',
      production: 'Production',
      quality: 'Quality Control',
      contact: 'Contact',
      getQuote: 'GET A QUOTE',
      partsProduction: 'PARTS PRODUCTION',
      categories: [
        { 
          label: 'TORQUE', 
          value: 'torque',
          subCategories: [
            { label: 'CAT', value: 'cat' },
            { label: 'KOMATSU', value: 'komatsu' },
            { label: 'KAWASAKI', value: 'kawasaki' },
            { label: 'FURUKAWA', value: 'furukawa' },
            { label: 'CLARK', value: 'clark' },
            { label: 'VOLVO', value: 'volvo' },
            { label: 'ALLISSON', value: 'allisson' }
          ]
        },
        { 
          label: 'TRANSMISSION', 
          value: 'transmission',
          subCategories: [
            { label: 'CAT', value: 'cat' },
            { label: 'KOMATSU', value: 'komatsu' },
            { label: 'KAWASAKI', value: 'kawasaki' }
          ]
        },
        { 
          label: 'PUMP', 
          value: 'pump',
          subCategories: [
            { label: 'CAT', value: 'cat' },
            { label: 'KOMATSU', value: 'komatsu' },
            { label: 'KAWASAKI', value: 'kawasaki' },
            { label: 'FURUKAWA', value: 'furukawa' },
            { label: 'CLARK', value: 'clark' },
            { label: 'VOLVO', value: 'volvo' },
            { label: 'ALLISSON', value: 'allisson' },
            { label: 'ZF', value: 'zf' }
          ]
        },
        { label: 'FINAL DRIVE GROUP', value: 'final-drive' },
        { label: 'CUSTOM MANUFACTURING', value: 'custom' },
        { label: 'NEW PRODUCTS', value: 'new' }
      ],
    },
    hero: {
      brand: 'ESMAKSAN ENGINEERING',
      slides: [
        {
          title: "Precision Solutions for",
          highlight: "Heavy Machinery",
          desc: "We manufacture high-strength pins and bushings at OEM standards for Caterpillar, Komatsu, and Volvo groups.",
          stats: { val: "0.01mm", label: "Tolerance Margin" }
        },
        {
          title: "From Turkey to the",
          highlight: "World",
          desc: "We safely export the spare parts produced in our modern facilities in Ankara to more than 32 countries.",
          stats: { val: "32+", label: "Export Countries" }
        },
        {
          title: "Excellent Durability",
          highlight: "Advanced Heat Treatment",
          desc: "Cementation and induction hardening processes that extend the life of our parts are carried out by our expert staff.",
          stats: { val: "62 HRC", label: "Maximum Hardness" }
        }
      ],
      viewProducts: 'View Products',
    },
    specs: {
      items: [
        { title: "High Precision", desc: "We provide error-free production with our micron-level processing capacity.", icon: "01" },
        { title: "Certified Steel", desc: "We only use European-origin and certified alloy steels.", icon: "02" },
        { title: "Fast Delivery", desc: "We respond instantly to your urgent part needs thanks to our wide stock network.", icon: "03" }
      ]
    },
    featured: {
      title: 'OUR PRODUCT GROUPS',
      subtitle: 'CATALOG PREVIEW',
      viewAll: 'VIEW ALL',
    },
    about: {
      hero: {
        tag: 'CORPORATE PROFILE',
        title: 'NEARLY HALF A CENTURY OF',
        highlight: 'EXPERIENCE, UNINTERRUPTED POWER: ESMAKSAN',
        desc: 'Founded in 1977, ESMAKSAN Makine Sanayi Ticaret LTD. ŞTİ. continues to be the symbol of trust and quality in the construction machinery spare parts sector. In our high-tech facility in Ankara, we produce solutions that perfectly fit giant brands (Caterpillar, Komatsu, Volvo, Hitachi and more) which are the lifeblood of the construction, mining, highway and infrastructure sectors.',
      },
      stats: [
        { label: 'Product Range', value: '2500+', unit: 'Parts' },
        { label: 'Export Countries', value: '32+', unit: 'Countries' },
        { label: 'Founded', value: '1977', unit: 'Year' },
        { label: 'Customer Satisfaction', value: '99%', unit: 'Rate' },
      ],
      vision: {
        title: 'OUR VISION',
        desc: 'With our experienced staff, we adopt an end-to-end service approach from production to marketing, from sales to after-sales technical support. We offer more than 2500 qualified spare parts in our portfolio to our solution partners both domestically and in the global market.',
      },
      mission: {
        title: 'OUR MISSION',
        desc: 'For us, every part is a promise of uninterrupted operation for our customers. Our core mission is to ensure the uninterrupted continuation of business processes by providing spare part solutions with the highest durability and precision.',
      },
      quality: {
        title: 'QUALITY FOCUSED',
        subtitle: 'Quality Management System',
        ceCertified: 'CE CERTIFIED',
        europeanStandards: 'European Standards',
      },
      journey: {
        title: 'OUR JOURNEY',
        items: [
          { year: '1977', title: 'Foundation', desc: 'An engineering adventure that started in a small workshop in Ankara.' },
          { year: '2012', title: 'Globalization', desc: 'First export operations and entry into the European market.' },
          { year: '2026', title: 'Technology', desc: 'Opening of fully automated production line and R&D center.' },
        ],
      },
    },
    products: {
      hero: {
        tag: 'TECHNICAL CATALOG',
        title: 'OUR PRODUCTION',
        highlight: 'RANGE',
        desc: 'Our high-precision spare part groups produced at OEM standards, taking the performance of your construction machinery to the top.',
        totalLabel: 'TOTAL PRODUCT GROUPS',
      },
      filterAll: 'All',
      addToQuote: 'ADD TO QUOTE LIST',
      noProducts: 'NO PRODUCTS FOUND IN THIS CATEGORY',
      cta: {
        title: 'CUSTOM MANUFACTURING SOLUTIONS',
        desc: 'With our wide stock network consisting of thousands of parts and our technical drawing database, we can produce all kinds of special manufacturing parts you need.',
        button: 'GET TECHNICAL SUPPORT',
      },
      items: [
        {
          id: 1,
          name: 'Caterpillar Pin and Bushing Group',
          category: 'torque',
          subCategory: 'cat',
          description: 'Pin and bushing sets produced from high wear-resistant cementation steel at OEM standards for Caterpillar construction machinery.',
          image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000',
          specs: ['Material: SAE 8620 / 4140', 'Heat Treatment: Induction Hardening', 'Precision: Micron Level']
        },
        {
          id: 2,
          name: 'Komatsu Undercarriage Parts',
          category: 'transmission',
          subCategory: 'komatsu',
          description: 'Spare part solutions with increased durability suitable for harsh terrain conditions for Komatsu excavators and dozers.',
          image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000',
          specs: ['High Torque Resistance', 'Wear Resistance', 'Full Compatibility']
        },
        {
          id: 3,
          name: 'Volvo Transmission Parts',
          category: 'pump',
          subCategory: 'volvo',
          description: 'Precision cut, ground, and heat-treated gear sets for Volvo construction machinery transmission and differential groups.',
          image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1000',
          specs: ['Gear Type: Helical', 'Hardness: 58-62 HRC', 'Ground Surface']
        },
        {
          id: 4,
          name: 'Precision Machined Pins',
          category: 'final-drive',
          description: 'Pins manufactured from high-strength steel in accordance with technical drawings for every brand and model of construction machinery.',
          image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1000',
          specs: ['Tolerance: f7 / h6', 'Chrome Plating Option', 'OEM Quality']
        },
        {
          id: 5,
          name: 'Special Alloy Bronze Bushings',
          category: 'final-drive',
          description: 'Special alloy bronze bushing manufacturing with high load-carrying capacity, oil-channeled or self-lubricating.',
          image: 'https://images.unsplash.com/photo-1565151443-32198d423621?auto=format&fit=crop&q=80&w=1000',
          specs: ['Material: GZ-CuSn12', 'Oil Channel Design', 'Anti-Friction Structure']
        },
        {
          id: 6,
          name: 'Crown Wheel and Pinion Sets',
          category: 'transmission',
          description: 'High-precision ground gear sets for the differential group. Silent and long-life operation guarantee.',
          image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000',
          specs: ['Hypoid Design', 'High Torque Capacity', 'Certified Steel']
        },
        {
          id: 7,
          name: 'Custom Manufacturing by Drawing',
          category: 'custom',
          description: 'Special part production in our CNC machining centers according to technical drawings or samples from our customers.',
          image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1000',
          specs: ['CNC Turning & Milling', 'Reverse Engineering', 'Prototype and Mass Production']
        }
      ]
    },
    contact: {
      hero: {
        tag: 'CONTACT CENTER',
        title: 'GET IN',
        highlight: 'TOUCH',
        desc: 'Contact our expert team for technical support, quote requests, or collaboration.',
      },
      form: {
        title: 'SEND A MESSAGE',
        name: 'Full Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Your Message',
        submit: 'SEND MESSAGE',
        subjects: ['Technical Support', 'Price Quote', 'Collaboration', 'Other'],
      },
      info: {
        addressLabel: 'ADDRESS',
        address: 'Ostim OSB, 1234. St. No: 56, Ankara, Turkey',
        phoneLabel: 'PHONE',
        emailLabel: 'EMAIL',
        hoursLabel: 'WORKING HOURS',
        hours: 'Mon - Sat: 08:30 - 19:00',
        viewMap: 'VIEW ON MAP',
        socialLabel: 'SOCIAL MEDIA',
      }
    },
    production: {
      hero: {
        tag: 'PRODUCTION AND TECHNOLOGY',
        title: 'CENTER OF',
        highlight: 'EXCELLENCE',
        desc: 'ESMAKSAN Machine Industry does not just produce parts for critical operations in the construction machinery sector; it combines production, quality control, assembly, and revision processes under one roof with high engineering discipline.',
      },
      expertise: {
        title: 'Sectoral Expertise and Special Solutions',
        desc: 'In addition to the standard services we offer to global construction machinery giants, we develop innovative solutions for the specific product demands (custom manufacturing) of our business partners. Thanks to our flexible production capability, we turn the most challenging technical details required by your project into reality.',
      },
      capabilities: {
        title: 'Advanced Technology and Digital Transformation',
        desc: 'We believe that the key to success in production is technological transformation. With this vision, we constantly update our modern infrastructure.',
        items: [
          'Modern Machine Park: Constantly updated, state-of-the-art CNC and production equipment.',
          'Zero Margin of Error: Meticulous quality control protocols applied at every stage of production.',
          'Dynamic Infrastructure: Agile production line providing instant adaptation to changing technology.'
        ],
      },
      team: {
        title: 'Expert Staff, Qualified Workmanship',
        desc: 'We crown our investment in technology with our human resources. With our expert staff who have completed their academic and technical training and have high sector experience, we guarantee "ESMAKSAN Quality" at every step.',
        cta: 'We accompany your speed in the sector with our latest technology and expert team.',
      },
    },
    qualityControl: {
      hero: {
        tag: 'QUALITY CONTROL',
        title: 'STRICT',
        highlight: 'QUALITY STANDARDS',
        desc: 'We ensure the quality of every part through rigorous inspections and advanced laboratory tests at every stage of production.',
      },
      inspection: {
        title: 'INSPECTION & TESTING',
        desc: 'Every spare part we produce is meticulously inspected using advanced measuring tools to ensure full compliance with OEM standards.',
        items: [
          'Micron-Level Dimensional Measurement',
          'Surface Hardness Testing (HRC)',
          'Material Structure Analysis',
          'Wear and Durability Tests'
        ],
      },
    },
    footer: {
      brandSuffix: 'MACHINERY',
      brandDesc: 'Since 1995, we have been offering high-precision production and global supply solutions in the construction machinery spare parts sector.',
      navTitle: 'NAVIGATION',
      categoriesTitle: 'PRODUCT GROUPS',
      categories: ['Pin & Bushing Group', 'Crown Wheel & Pinion', 'Transmission Parts', 'Differential', 'Custom Manufacturing'],
      newsletterTitle: 'NEWSLETTER SUBSCRIPTION',
      newsletterDesc: 'Be informed about new product groups and technical updates.',
      emailPlaceholder: 'Email address',
      subscribeButton: 'SUBSCRIBE',
      privacyPolicy: 'PRIVACY POLICY',
      kvkk: 'KVKK',
      systemStatusLabel: 'SYSTEM STATUS:',
      operationalLabel: 'OPERATIONAL',
    },
    whatsapp: 'WhatsApp Support',
  },
  ru: {
    nav: {
      home: 'Главная',
      products: 'Продукция',
      about: 'О нас',
      production: 'Производство',
      quality: 'Контроль качества',
      contact: 'Контакты',
      getQuote: 'ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ',
      partsProduction: 'ПРОИЗВОДСТВО ЗАПЧАСТЕЙ',
      categories: [
        { 
          label: 'ТОРК', 
          value: 'torque',
          subCategories: [
            { label: 'CAT', value: 'cat' },
            { label: 'KOMATSU', value: 'komatsu' },
            { label: 'KAWASAKI', value: 'kawasaki' },
            { label: 'FURUKAWA', value: 'furukawa' },
            { label: 'CLARK', value: 'clark' },
            { label: 'VOLVO', value: 'volvo' },
            { label: 'ALLISSON', value: 'allisson' }
          ]
        },
        { 
          label: 'ТРАНСМИССИЯ', 
          value: 'transmission',
          subCategories: [
            { label: 'CAT', value: 'cat' },
            { label: 'KOMATSU', value: 'komatsu' },
            { label: 'KAWASAKI', value: 'kawasaki' }
          ]
        },
        { 
          label: 'НАСОС', 
          value: 'pump',
          subCategories: [
            { label: 'CAT', value: 'cat' },
            { label: 'KOMATSU', value: 'komatsu' },
            { label: 'KAWASAKI', value: 'kawasaki' },
            { label: 'FURUKAWA', value: 'furukawa' },
            { label: 'CLARK', value: 'clark' },
            { label: 'VOLVO', value: 'volvo' },
            { label: 'ALLISSON', value: 'allisson' },
            { label: 'ZF', value: 'zf' }
          ]
        },
        { label: 'БОРТОВОЙ РЕДУКТОР', value: 'final-drive' },
        { label: 'СПЕЦИАЛЬНОЕ ПРОИЗВОДСТВО', value: 'custom' },
        { label: 'НОВЫЕ ПРОДУКТЫ', value: 'new' }
      ],
    },
    hero: {
      brand: 'ESMAKSAN ENGINEERING',
      slides: [
        {
          title: "Прецизионные решения для",
          highlight: "Тяжелой техники",
          desc: "Мы производим высокопрочные пальцы и втулки по стандартам OEM для групп Caterpillar, Komatsu и Volvo.",
          stats: { val: "0.01мм", label: "Допуск" }
        },
        {
          title: "Из Турции во",
          highlight: "Весь мир",
          desc: "Мы надежно экспортируем запасные части, произведенные на наших современных предприятиях в Анкаре, более чем в 32 страны.",
          stats: { val: "32+", label: "Страны экспорта" }
        },
        {
          title: "Отличная долговечность",
          highlight: "Термообработка",
          desc: "Процессы цементации и индукционной закалки, продлевающие срок службы наших деталей, выполняются нашими специалистами.",
          stats: { val: "62 HRC", label: "Макс. твердость" }
        }
      ],
      viewProducts: 'Посмотреть продукцию',
    },
    specs: {
      items: [
        { title: "Высокая точность", desc: "Мы обеспечиваем безошибочное производство благодаря нашим мощностям по микрообработке.", icon: "01" },
        { title: "Сертифицированная сталь", desc: "Мы используем только сертифицированные легированные стали европейского происхождения.", icon: "02" },
        { title: "Быстрая доставка", desc: "Мы мгновенно реагируем на ваши срочные потребности в деталях благодаря нашей широкой складской сети.", icon: "03" }
      ]
    },
    featured: {
      title: 'НАШИ ГРУППЫ ТОВАРОВ',
      subtitle: 'ПРЕДПРОСМОТР КАТАЛОГА',
      viewAll: 'ПОСМОТРЕТЬ ВСЕ',
    },
    about: {
      hero: {
        tag: 'КОРПОРАТИВНЫЙ ПРОФИЛЬ',
        title: 'ПОЧТИ ПОЛВЕКА',
        highlight: 'ОПЫТА, БЕСПЕРЕБОЙНАЯ МОЩНОСТЬ: ESMAKSAN',
        desc: 'Основанная в 1977 году, компания ESMAKSAN Makine Sanayi Ticaret LTD. ŞTİ. продолжает оставаться символом доверия и качества в секторе запасных частей для строительной техники. На нашем высокотехнологичном предприятии в Анкаре мы производим решения, которые идеально подходят для таких гигантских брендов (Caterpillar, Komatsu, Volvo, Hitachi и др.), являющихся жизненной силой строительного, горнодобывающего, дорожного и инфраструктурного секторов.',
      },
      stats: [
        { label: 'Ассортимент', value: '2500+', unit: 'Деталей' },
        { label: 'Страны экспорта', value: '32+', unit: 'Стран' },
        { label: 'Основан', value: '1977', unit: 'Год' },
        { label: 'Удовлетворенность', value: '99%', unit: 'Рейтинг' },
      ],
      vision: {
        title: 'НАШЕ ВИДЕНИЕ',
        desc: 'Благодаря нашему опытному персоналу мы применяем комплексный подход к обслуживанию — от производства до маркетинга, от продаж до послепродажной технической поддержки. Мы предлагаем более 2500 квалифицированных запасных частей в нашем портфеле нашим партнерам.',
      },
      mission: {
        title: 'НАША МИССИЯ',
        desc: 'Для нас каждая деталь — это залог бесперебойной работы наших клиентов. Наша основная миссия — обеспечить бесперебойное продолжение бизнес-процессов, предоставляя решения по запасным частям с высочайшей долговечностью и точностью.',
      },
      quality: {
        title: 'КАЧЕСТВО ПРЕЖДЕ ВСЕГО',
        subtitle: 'Система менеджмента качества',
        ceCertified: 'СЕРТИФИЦИРОВАНО CE',
        europeanStandards: 'Европейские стандарты',
      },
      journey: {
        title: 'НАШ ПУТЬ',
        items: [
          { year: '1977', title: 'Основание', desc: 'Инженерное приключение, начавшееся в небольшой мастерской в Анкаре.' },
          { year: '2012', title: 'Глобализация', desc: 'Первые экспортные операции и выход на европейский рынок.' },
          { year: '2026', title: 'Технологии', desc: 'Открытие полностью автоматизированной производственной линии и центра НИОКР.' },
        ],
      },
    },
    products: {
      hero: {
        tag: 'ТЕХНИЧЕСКИЙ КАТАЛОГ',
        title: 'НАШЕ',
        highlight: 'ПРОИЗВОДСТВО',
        desc: 'Наши высокоточные группы запасных частей, произведенные по стандартам OEM, поднимают производительность вашей строительной техники на вершину.',
        totalLabel: 'ВСЕГО ГРУПП ТОВАРОВ',
      },
      filterAll: 'Все',
      addToQuote: 'ДОБАВИТЬ В СПИСОК ЗАПРОСА',
      noProducts: 'ТОВАРЫ В ЭТОЙ КАТЕГОРИИ НЕ НАЙДЕНЫ',
      cta: {
        title: 'ИНДИВИДУАЛЬНОЕ ПРОИЗВОДСТВО',
        desc: 'Благодаря нашей широкой складской сети, состоящей из тысяч деталей, и нашей базе технических чертежей, мы можем изготовить любые специальные детали, которые вам необходимы.',
        button: 'ПОЛУЧИТЬ ТЕХПОДДЕРЖКУ',
      },
      items: [
        {
          id: 1,
          name: 'Группа пальцев и втулок Caterpillar',
          category: 'torque',
          subCategory: 'cat',
          description: 'Комплекты пальцев и втулок, изготовленные из высокоизносостойкой цементационной стали по стандартам OEM для строительной техники Caterpillar.',
          image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000',
          specs: ['Материал: SAE 8620 / 4140', 'Термообработка: Индукционная закалка', 'Точность: Микронный уровень']
        },
        {
          id: 2,
          name: 'Детали ходовой части Komatsu',
          category: 'transmission',
          subCategory: 'komatsu',
          description: 'Решения по запасным частям с повышенной долговечностью, подходящие для суровых условий бездорожья для экскаваторов и бульдозеров Komatsu.',
          image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000',
          specs: ['Высокое сопротивление крутящему моменту', 'Износостойкость', 'Полная совместимость']
        },
        {
          id: 3,
          name: 'Детали трансмиссии Volvo',
          category: 'pump',
          subCategory: 'volvo',
          description: 'Прецизионно нарезанные, шлифованные и термообработанные наборы шестерен для трансмиссий и дифференциалов строительной техники Volvo.',
          image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1000',
          specs: ['Тип шестерни: Косозубая', 'Твердость: 58-62 HRC', 'Шлифованная поверхность']
        },
        {
          id: 4,
          name: 'Прецизионно обработанные пальцы',
          category: 'final-drive',
          description: 'Пальцы, изготовленные из высокопрочной стали в соответствии с техническими чертежами для строительной техники любых марок и моделей.',
          image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1000',
          specs: ['Допуск: f7 / h6', 'Вариант хромирования', 'Качество OEM']
        },
        {
          id: 5,
          name: 'Специальные втулки из легированной бронзы',
          category: 'final-drive',
          description: 'Изготовление втулок из специальной легированной бронзы с высокой несущей способностью, с масляными каналами или самосмазывающихся.',
          image: 'https://images.unsplash.com/photo-1565151443-32198d423621?auto=format&fit=crop&q=80&w=1000',
          specs: ['Материал: GZ-CuSn12', 'Дизайн масляных каналов', 'Антифрикционная структура']
        },
        {
          id: 6,
          name: 'Комплекты главной пары',
          category: 'transmission',
          description: 'Высокоточные шлифованные наборы шестерен для дифференциала. Гарантия бесшумной и долговечной работы.',
          image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000',
          specs: ['Гипоидная конструкция', 'Высокий крутящий момент', 'Сертифицированная сталь']
        },
        {
          id: 7,
          name: 'Индивидуальное производство по чертежам',
          category: 'Индивидуальное производство',
          description: 'Производство специальных деталей в наших центрах обработки с ЧПУ по техническим чертежам или образцам наших клиентов.',
          image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1000',
          specs: ['ЧПУ токарная и фрезерная обработка', 'Реверс-инжиниринг', 'Прототипирование и серийное производство']
        }
      ]
    },
    contact: {
      hero: {
        tag: 'КОНТАКТНЫЙ ЦЕНТР',
        title: 'СВЯЖИТЕСЬ',
        highlight: 'С НАМИ',
        desc: 'Свяжитесь с нашей командой экспертов для получения техподдержки, запроса предложений или сотрудничества.',
      },
      form: {
        title: 'ОТПРАВИТЬ СООБЩЕНИЕ',
        name: 'ФИО',
        email: 'Электронная почта',
        subject: 'Тема',
        message: 'Ваше сообщение',
        submit: 'ОТПРАВИТЬ СООБЩЕНИЕ',
        subjects: ['Техническая поддержка', 'Ценовое предложение', 'Сотрудничество', 'Другое'],
      },
      info: {
        addressLabel: 'АДРЕС',
        address: 'Ostim OSB, 1234. St. No: 56, Анкара, Турция',
        phoneLabel: 'ТЕЛЕФОН',
        emailLabel: 'EMAIL',
        hoursLabel: 'РАБОЧИЕ ЧАСЫ',
        hours: 'Пн - Сб: 08:30 - 19:00',
        viewMap: 'ПОСМОТРЕТЬ НА КАРТЕ',
        socialLabel: 'СОЦИАЛЬНЫЕ СЕТИ',
      }
    },
    production: {
      hero: {
        tag: 'ПРОИЗВОДСТВО И ТЕХНОЛОГИИ',
        title: 'ЦЕНТР',
        highlight: 'СОВЕРШЕНСТВА',
        desc: 'ESMAKSAN Makine Sanayi не просто производит детали для критически важных операций в секторе строительной техники; компания объединяет процессы производства, контроля качества, сборки и капитального ремонта под одной крышей.',
      },
      expertise: {
        title: 'Отраслевая экспертиза и специальные решения',
        desc: 'Помимо стандартных услуг, мы разрабатываем инновационные решения для специфических запросов на продукцию (индивидуальное производство). Благодаря нашим гибким производственным возможностям мы воплощаем в жизнь самые сложные технические детали.',
      },
      capabilities: {
        title: 'Передовые технологии и цифровая трансформация',
        desc: 'Мы верим, что ключом к успеху в производстве является технологическая трансформация.',
        items: [
          'Современный машинный парк: Постоянно обновляемое оборудование с ЧПУ.',
          'Нулевая погрешность: Тщательные протоколы контроля качества.',
          'Динамичная инфраструктура: Гибкая производственная линия.'
        ],
      },
      team: {
        title: 'Экспертный персонал, квалифицированное мастерство',
        desc: 'Мы венчаем наши инвестиции в технологии нашими человеческими ресурсами. С нашим экспертным персоналом мы гарантируем «Качество ESMAKSAN» на каждом этапе.',
        cta: 'Мы сопровождаем вашу скорость в отрасли с помощью наших новейших технологий и экспертной команды.',
      },
    },
    qualityControl: {
      hero: {
        tag: 'КОНТРОЛЬ КАЧЕСТВА',
        title: 'СТРОГИЕ',
        highlight: 'СТАНДАРТЫ КАЧЕСТВА',
        desc: 'Мы гарантируем качество каждой детали посредством тщательных проверок и передовых лабораторных испытаний на каждом этапе производства.',
      },
      inspection: {
        title: 'ИНСПЕКЦИЯ И ТЕСТИРОВАНИЕ',
        desc: 'Каждая производимая нами запасная часть тщательно проверяется с использованием современных измерительных инструментов для обеспечения полного соответствия стандартам OEM.',
        items: [
          'Размерное измерение на микронном уровне',
          'Тестирование твердости поверхности (HRC)',
          'Анализ структуры материала',
          'Испытания на износ и долговечность'
        ],
      },
    },
    footer: {
      brandSuffix: 'МАШИНЫ',
      brandDesc: 'С 1995 года мы предлагаем высокоточные производственные и глобальные решения по поставкам в секторе запасных частей для строительной техники.',
      navTitle: 'НАВИГАЦИЯ',
      categoriesTitle: 'ГРУППЫ ТОВАРОВ',
      categories: ['Пальцы и втулки', 'Главная пара', 'Детали трансмиссии', 'Дифференциал', 'Индивидуальное производство'],
      newsletterTitle: 'ПОДПИСКА НА НОВОСТИ',
      newsletterDesc: 'Будьте в курсе новых групп товаров и технических обновлений.',
      emailPlaceholder: 'Электронная почта',
      subscribeButton: 'ПОДПИСАТЬСЯ',
      privacyPolicy: 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ',
      kvkk: 'KVKK',
      systemStatusLabel: 'СТАТУС СИСТЕМЫ:',
      operationalLabel: 'ОПЕРАЦИОННЫЙ',
    },
    whatsapp: 'Поддержка WhatsApp',
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      products: 'منتجاتنا',
      about: 'من نحن',
      production: 'الإنتاج',
      quality: 'مراقبة الجودة',
      contact: 'اتصل بنا',
      getQuote: 'احصل على عرض سعر',
      partsProduction: 'إنتاج قطع الغيار',
      categories: [
        { 
          label: 'تورك', 
          value: 'torque',
          subCategories: [
            { label: 'CAT', value: 'cat' },
            { label: 'KOMATSU', value: 'komatsu' },
            { label: 'KAWASAKI', value: 'kawasaki' },
            { label: 'FURUKAWA', value: 'furukawa' },
            { label: 'CLARK', value: 'clark' },
            { label: 'VOLVO', value: 'volvo' },
            { label: 'ALLISSON', value: 'allisson' }
          ]
        },
        { 
          label: 'ناقل الحركة', 
          value: 'transmission',
          subCategories: [
            { label: 'CAT', value: 'cat' },
            { label: 'KOMATSU', value: 'komatsu' },
            { label: 'KAWASAKI', value: 'kawasaki' }
          ]
        },
        { 
          label: 'مضخة', 
          value: 'pump',
          subCategories: [
            { label: 'CAT', value: 'cat' },
            { label: 'KOMATSU', value: 'komatsu' },
            { label: 'KAWASAKI', value: 'kawasaki' },
            { label: 'FURUKAWA', value: 'furukawa' },
            { label: 'CLARK', value: 'clark' },
            { label: 'VOLVO', value: 'volvo' },
            { label: 'ALLISSON', value: 'allisson' },
            { label: 'ZF', value: 'zf' }
          ]
        },
        { label: 'مجموعة المحرك النهائي', value: 'final-drive' },
        { label: 'تصنيع مخصص', value: 'custom' },
        { label: 'منتجات جديدة', value: 'new' }
      ],
    },
    hero: {
      brand: 'إسماكسان للهندسة',
      slides: [
        {
          title: "حلول دقيقة لـ",
          highlight: "المعدات الثقيلة",
          desc: "نقوم بتصنيع المسامير والجلب عالية القوة بمعايير OEM لمجموعات Caterpillar و Komatsu و Volvo.",
          stats: { val: "0.01مم", label: "هامش التسامح" }
        },
        {
          title: "من تركيا إلى",
          highlight: "العالم",
          desc: "نصدر قطع الغيار المصنعة في منشآتنا الحديثة في أنقرة بأمان إلى أكثر من 32 دولة.",
          stats: { val: "32+", label: "دولة تصدير" }
        },
        {
          title: "متانة ممتازة",
          highlight: "معالجة حرارية متقدمة",
          desc: "يتم تنفيذ عمليات التقسية والتقسية بالتحريض التي تطيل عمر أجزائنا من قبل طاقمنا الخبير.",
          stats: { val: "62 HRC", label: "أقصى صلابة" }
        }
      ],
      viewProducts: 'تصفح المنتجات',
    },
    specs: {
      items: [
        { title: "دقة عالية", desc: "نحن نقدم إنتاجًا خاليًا من الأخطاء من خلال قدرتنا على المعالجة على مستوى الميكرون.", icon: "01" },
        { title: "فولاذ معتمد", desc: "نحن نستخدم فقط سبائك الفولاذ المعتمدة وذات الأصل الأوروبي.", icon: "02" },
        { title: "تسليم سريع", desc: "نستجيب فوراً لاحتياجاتك العاجلة من القطع بفضل شبكة مخزوننا الواسعة.", icon: "03" }
      ]
    },
    featured: {
      title: 'مجموعات منتجاتنا',
      subtitle: 'معاينة الكتالوج',
      viewAll: 'عرض الكل',
    },
    about: {
      hero: {
        tag: 'الملف التعريفي للشركة',
        title: 'ما يقرب من نصف قرن من',
        highlight: 'الخبرة، قوة غير منقطعة: ESMAKSAN',
        desc: 'تأسست شركة ESMAKSAN Makine Sanayi Ticaret LTD. ŞTİ. في عام 1977، وتستمر في كونها رمزاً للثقة والجودة في قطاع قطع غيار معدات البناء. في منشأتنا عالية التقنية في أنقرة، ننتج حلولاً تتناسب تماماً مع العلامات التجارية العملاقة (Caterpillar وKomatsu وVolvo وHitachi وغيرها) والتي تعد شريان الحياة لقطاعات البناء والتعدين والطرق والبنية التحتية.',
      },
      stats: [
        { label: 'مجموعة المنتجات', value: '2500+', unit: 'قطعة' },
        { label: 'دولة تصدير', value: '32+', unit: 'دولة' },
        { label: 'سنة التأسيس', value: '1977', unit: 'سنة' },
        { label: 'رضا العملاء', value: '99%', unit: 'معدل' },
      ],
      vision: {
        title: 'رؤيتنا',
        desc: 'من خلال طاقمنا ذو الخبرة، نتبنى نهج خدمة شاملاً من الإنتاج إلى التسويق، ومن المبيعات إلى الدعم الفني بعد البيع. نحن نقدم أكثر من 2500 قطعة غيار مؤهلة في محفظتنا لشركائنا في الحلول محلياً وفي السوق العالمية.',
      },
      mission: {
        title: 'مهمتنا',
        desc: 'بالنسبة لنا، كل قطعة هي وعد بالتشغيل المستمر لعملائنا. مهمتنا الأساسية هي ضمان استمرار العمليات التجارية دون انقطاع من خلال تقديم حلول قطع الغيار بأعلى مستويات المتانة والدقة.',
      },
      quality: {
        title: 'التركيز على الجودة',
        subtitle: 'نظام إدارة الجودة',
        ceCertified: 'شهادة CE',
        europeanStandards: 'المعايير الأوروبية',
      },
      journey: {
        title: 'رحلتنا',
        items: [
          { year: '1977', title: 'التأسيس', desc: 'مغامرة هندسية بدأت في ورشة صغيرة في أنقرة.' },
          { year: '2012', title: 'العولمة', desc: 'أولى عمليات التصدير والدخول إلى السوق الأوروبية.' },
          { year: '2026', title: 'التكنولوجيا', desc: 'افتتاح خط إنتاج مؤتمت بالكامل ومركز للبحث والتطوير.' },
        ],
      },
    },
    products: {
      hero: {
        tag: 'الكتالوج التقني',
        title: 'نطاق',
        highlight: 'إنتاجنا',
        desc: 'مجموعات قطع الغيار عالية الدقة المصنعة بمعايير OEM، والتي ترتقي بأداء معدات البناء الخاصة بك إلى القمة.',
        totalLabel: 'إجمالي مجموعات المنتجات',
      },
      filterAll: 'الكل',
      addToQuote: 'أضف إلى قائمة الطلب',
      noProducts: 'لم يتم العثور على منتجات في هذه الفئة',
      cta: {
        title: 'حلول التصنيع المخصصة',
        desc: 'بفضل شبكة مخزوننا الواسعة التي تتكون من آلاف القطع وقاعدة بيانات الرسوم التقنية لدينا، يمكننا إنتاج جميع أنواع قطع التصنيع الخاصة التي تحتاجها.',
        button: 'احصل على دعم تقني',
      },
      items: [
        {
          id: 1,
          name: 'مجموعة المسامير والجلب لـ Caterpillar',
          category: 'torque',
          subCategory: 'cat',
          description: 'أطقم المسامير والجلب المصنعة من فولاذ التقسية عالي المقاومة للتآكل بمعايير OEM لمعدات بناء Caterpillar.',
          image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000',
          specs: ['المادة: SAE 8620 / 4140', 'المعالجة الحرارية: التقسية بالتحريض', 'الدقة: مستوى الميكرون']
        },
        {
          id: 2,
          name: 'أجزاء الهيكل السفلي لـ Komatsu',
          category: 'transmission',
          subCategory: 'komatsu',
          description: 'حلول قطع غيار بمتانة متزايدة مناسبة لظروف التضاريس القاسية لحفارات وجرافات Komatsu.',
          image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000',
          specs: ['مقاومة عالية للعزم', 'مقاومة التآكل', 'توافق تام']
        },
        {
          id: 3,
          name: 'أجزاء ناقل الحركة لـ Volvo',
          category: 'pump',
          subCategory: 'volvo',
          description: 'أطقم تروس مقطوعة بدقة ومجلوخة ومعالجة حرارياً لمجموعات ناقل الحركة والتروس التفاضلية لمعدات بناء Volvo.',
          image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1000',
          specs: ['نوع الترس: حلزوني', 'الصلابة: 58-62 HRC', 'سطح مجلوخ']
        },
        {
          id: 4,
          name: 'مسامير مشغولة بدقة',
          category: 'final-drive',
          description: 'مسامير مصنعة من فولاذ عالي القوة وفقاً للرسوم التقنية لكل علامة تجارية وطراز من معدات البناء.',
          image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1000',
          specs: ['التسامح: f7 / h6', 'خيار طلاء الكروم', 'جودة OEM']
        },
        {
          id: 5,
          name: 'جلب برونزية بسبائك خاصة',
          category: 'final-drive',
          description: 'تصنيع جلب برونزية بسبائك خاصة ذات قدرة تحمل عالية للأحمال، مع قنوات زيت أو ذاتية التشحيم.',
          image: 'https://images.unsplash.com/photo-1565151443-32198d423621?auto=format&fit=crop&q=80&w=1000',
          specs: ['المادة: GZ-CuSn12', 'تصميم قنوات الزيت', 'هيكل مضاد للاحتكاك']
        },
        {
          id: 6,
          name: 'أطقم التروس التاجية والتروس الصغيرة',
          category: 'transmission',
          description: 'أطقم تروس مجلوخة عالية الدقة للمجموعة التفاضلية. ضمان تشغيل صامت وطويل العمر.',
          image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000',
          specs: ['تصميم هيبويد', 'قدرة عزم عالية', 'فولاذ معتمد']
        },
        {
          id: 7,
          name: 'تصنيع مخصص حسب الرسم',
          category: 'تصنيع مخصص',
          description: 'إنتاج قطع خاصة في مراكز التصنيع باستخدام الحاسب الآلي لدينا وفقاً للرسوم التقنية أو العينات من عملائنا.',
          image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1000',
          specs: ['خرط وفريزة CNC', 'الهندسة العكسية', 'النماذج الأولية والإنتاج الضخم']
        }
      ]
    },
    contact: {
      hero: {
        tag: 'مركز الاتصال',
        title: 'تواصل',
        highlight: 'معنا',
        desc: 'اتصل بفريق خبرائنا للحصول على دعم تقني، أو طلبات عروض أسعار، أو تعاون.',
      },
      form: {
        title: 'أرسل رسالة',
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        subject: 'الموضوع',
        message: 'رسالتك',
        submit: 'إرسال الرسالة',
        subjects: ['الدعم الفني', 'طلب عرض سعر', 'التعاون', 'أخرى'],
      },
      info: {
        addressLabel: 'العنوان',
        address: 'Ostim OSB, 1234. St. No: 56, أنقرة، تركيا',
        phoneLabel: 'الهاتف',
        emailLabel: 'البريد الإلكتروني',
        hoursLabel: 'ساعات العمل',
        hours: 'الاثنين - السبت: 08:30 - 19:00',
        viewMap: 'عرض على الخريطة',
        socialLabel: 'وسائل التواصل الاجتماعي',
      }
    },
    production: {
      hero: {
        tag: 'الإنتاج والتكنولوجيا',
        title: 'مركز',
        highlight: 'التميز',
        desc: 'لا تكتفي شركة ESMAKSAN Makine Sanayi بإنتاج قطع غيار للعمليات الحرجة في قطاع آلات البناء؛ بل تجمع بين عمليات الإنتاج ومراقبة الجودة والتجميع والمراجعة تحت سقف واحد بانضباط هندسي عالٍ.',
      },
      expertise: {
        title: 'الخبرة القطاعية والحلول الخاصة',
        desc: 'بالإضافة إلى الخدمات القياسية، نقوم بتطوير حلول مبتكرة لطلبات المنتجات الخاصة (التصنيع المخصص) لشركائنا في العمل. بفضل قدرتنا الإنتاجية المرنة، نحول التفاصيل الفنية الأكثر تحدياً إلى واقع ملموس.',
      },
      capabilities: {
        title: 'التكنولوجيا المتقدمة والتحول الرقمي',
        desc: 'نؤمن بأن مفتاح النجاح في الإنتاج هو التحول التكنولوجي.',
        items: [
          'حديقة الماكينات الحديثة: معدات إنتاج وCNC متطورة ومحدثة باستمرار.',
          'هامش خطأ صفر: بروتوكولات مراقبة جودة دقيقة.',
          'بنية تحتية ديناميكية: خط إنتاج رشيق.'
        ],
      },
      team: {
        title: 'طاقم خبير، صنعة مؤهلة',
        desc: 'نتوج استثمارنا في التكنولوجيا بمواردنا البشرية. مع طاقمنا الخبير، نضمن "جودة ESMAKSAN" في كل خطوة من دخول المواد الخام إلى التجميع النهائي.',
        cta: 'نحن نواكب سرعتك في هذا القطاع بأحدث تقنياتنا وفريقنا الخبير.',
      },
    },
    qualityControl: {
      hero: {
        tag: 'مراقبة الجودة',
        title: 'معايير',
        highlight: 'الجودة الصارمة',
        desc: 'نحن نضمن جودة كل قطعة من خلال عمليات تفتيش صارمة واختبارات معملية متقدمة في كل مرحلة من مراحل الإنتاج.',
      },
      inspection: {
        title: 'عمليات التفتيش والاختبار',
        desc: 'يتم فحص كل قطعة غيار ننتجها بدقة باستخدام أدوات قياس متطورة لضمان توافقها التام مع معايير OEM.',
        items: [
          'قياس الأبعاد بمستوى الميكرون',
          'اختبار صلابة السطح (HRC)',
          'تحليل هيكل المواد',
          'اختبارات التآكل والمتانة'
        ],
      },
    },
    footer: {
      brandSuffix: 'ماكينة',
      brandDesc: 'منذ عام 1995، نحن نقدم حلول إنتاج عالية الدقة وتوريد عالمي في قطاع قطع غيار معدات البناء.',
      navTitle: 'التنقل',
      categoriesTitle: 'مجموعات المنتجات',
      categories: ['مجموعة المسامير والجلب', 'التروس التاجية والصغيرة', 'أجزاء ناقل الحركة', 'التروس التفاضلية', 'التصنيع المخصص'],
      newsletterTitle: 'الاشتراك في النشرة الإخبارية',
      newsletterDesc: 'كن على علم بمجموعات المنتجات الجديدة والتحديثات التقنية.',
      emailPlaceholder: 'البريد الإلكتروني',
      subscribeButton: 'اشتراك',
      privacyPolicy: 'سياسة الخصوصية',
      kvkk: 'KVKK',
      systemStatusLabel: 'حالة النظام:',
      operationalLabel: 'تشغيلي',
    },
    whatsapp: 'دعم واتساب',
  },
};


export type Language = 'tr' | 'en' | 'ru' | 'ar';

export interface Translation {
  nav: {
    home: string;
    corporate: string;
    services: string;
    catalog: string;
    certificates: string;
    watermark: string;
    informationSecurity: string;
    qualityCertificates: string;
    products: string;
    about: string;
    production: string;
    quality: string;
    integratedPolicy: string;
    qualityManagement: string;
    environmentalManagement: string;
    ohsManagement: string;
    contact: string;
    getQuote: string;
    partsProduction: string;
    machinery: string;
    machineryModels: string[];
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
    subCategoryLabel: string;
    clearFilter: string;
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
      description?: string;
      image: string;
      specs?: string[];
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
    corporateTitle: string;
    certificatesTitle: string;
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
  machinery: {
    hero: {
      tag: string;
      title: string;
      highlight: string;
      desc: string;
    };
    ui: {
      viewDetails: string;
      techSpecs: string;
      close: string;
    };
    items: {
      title: string;
      desc: string;
      image: string;
      specs: string[];
      details?: {
        group: string;
        items: { label: string; value: string }[];
      }[];
    }[];
  };
}

export const translations: Record<Language, Translation> = {
  tr: {
    nav: {
      home: 'Anasayfa',
      corporate: 'Kurumsal',
      services: 'Hizmetler',
      catalog: 'Katalog',
      certificates: 'Sertifikalar',
      watermark: 'TECRÜBE, İSTİKRAR, KESİNTİSİZ ÜRETİM',
      informationSecurity: 'Bilgi Güvenliği',
      qualityCertificates: 'Kalite Politikamız ve Sertifikalar',
      products: 'Ürün Grupları',
      about: 'Hakkımızda',
      production: 'Üretim Tesisimiz',
      quality: 'Kalite Kontrol',
      integratedPolicy: 'Entegre Yönetim Politikası',
      qualityManagement: 'Kalite Yönetim Sistemi',
      environmentalManagement: 'Çevre Yönetim Sistemi',
      ohsManagement: 'İSG Yönetim Sistemi',
      contact: 'İletişim',
      getQuote: 'TEKLİF ALIN',
      partsProduction: 'YEDEK PARÇA ÜRETİMİ',
      machinery: 'Makine Parkuru',
      machineryModels: [
        'VICTOR V-TURN 36', 'SPINNER TC-600', 'HWACHEAN H-TECH 300', 
        'DOOSAN PUMA 240-C', 'YOUJI YV 600', 'MAKINO A77', 
        'MAZAK NEXUS 350M', 'Mazak QT25', 'Mazak QT28', 
        'HARDINGE VMC 1000II', 'SPINNER U1520', 'JUNKER EJ29', 
        'ABERLINK HALO L2000'
      ],
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
        desc: 'Sektördeki yarım asırlık tecrübemiz ve uzman kadromuzla; üretimden pazarlamaya, satıştan satış sonrası teknik desteğe kadar uçtan uca, kesintisiz bir hizmet anlayışı benimsiyoruz. En güncel teknolojik donanımlara sahip üretim bantlarımızda işlediğimiz 2500’ü aşkın nitelikli yedek parçayı, sadece yurt içinde değil, dünyanın dört bir yanındaki çözüm ortaklarımıza aynı yüksek kalite standartlarıyla sunuyoruz. İnovasyon ve dayanıklılığı merkeze alarak, iş makinalarının kalbinde yer alan her bir parçayı ustalıkla üretiyor, global endüstrinin gücüne güç katıyoruz.',
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
      subCategoryLabel: 'ALT GRUP:',
      clearFilter: 'TEMİZLE',
      noProducts: 'BU KATEGORİDE ÜRÜN BULUNAMADI',
      cta: {
        title: 'ÖZEL İMALAT ÇÖZÜMLERİ',
        desc: 'Binlerce parçadan oluşan geniş stok ağımız ve teknik çizim veritabanımız ile ihtiyacınız olan her türlü özel imalat parçayı üretebiliriz.',
        button: 'TEKNİK DESTEK ALIN',
      },
      items: [
        { id: 1001, name: "7T-8001", category: "final-drive", image: "/urunler/Cer%20Grubu/7T-8001.jpg" },
        { id: 1002, name: "8E-4281", category: "final-drive", image: "/urunler/Cer%20Grubu/8E-4281.jpg" },
        { id: 1003, name: "AYNA-MAHRUTI", category: "final-drive", image: "/urunler/Cer%20Grubu/AYNA-MAHRUTI.jpg" },
        { id: 1004, name: "D-8", category: "final-drive", image: "/urunler/Cer%20Grubu/D-8.jpg" },
        { id: 1005, name: "SA2_5898", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5898.jpg" },
        { id: 1006, name: "SA2_5899", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5899.jpg" },
        { id: 1007, name: "SA2_5902", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5902.jpg" },
        { id: 1008, name: "SA2_5903", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5903.jpg" },
        { id: 1009, name: "SA2_5914", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5914.jpg" },
        { id: 1010, name: "SA2_5919", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5919.jpg" },
        { id: 1011, name: "SA2_5920", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5920.jpg" },
        { id: 1012, name: "SA2_5934", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5934.jpg" },
        { id: 1013, name: "SA2_5944", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5944.jpg" },
        { id: 1014, name: "SA2_5949", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5949.jpg" },
        { id: 1015, name: "SA2_5953_1", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5953_1.jpg" },
        { id: 1016, name: "SA2_5956", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5956.jpg" },
        { id: 1017, name: "SA2_5957", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5957.jpg" },
        { id: 1018, name: "SA2_5976", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5976.jpg" },
        { id: 1019, name: "SA2_5981", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5981.jpg" },
        { id: 1020, name: "SA2_5984", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5984.jpg" },
        { id: 1021, name: "SA2_5993", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5993.jpg" },
        { id: 1022, name: "SA2_5994", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5994.jpg" },
        { id: 1023, name: "SA2_6006", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6006.jpg" },
        { id: 1024, name: "SA2_6015", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6015.jpg" },
        { id: 1025, name: "SA2_6017", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6017.jpg" },
        { id: 1026, name: "SA2_6018", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6018.jpg" },
        { id: 1027, name: "SA2_6023", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6023.jpg" },
        { id: 1028, name: "SA2_6024", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6024.jpg" },
        { id: 1029, name: "volvo-3602", category: "final-drive", image: "/urunler/Cer%20Grubu/volvo-3602.jpg" },
        { id: 1030, name: "zp-280", category: "final-drive", image: "/urunler/Cer%20Grubu/zp-280.jpg" },
        { id: 1031, name: "6880125-23018418", category: "pump", subCategory: "allisson", image: "/urunler/Pompa/Allisson/6880125-23018418.jpg" },
        { id: 1032, name: "73058801-645-P", category: "pump", subCategory: "allisson", image: "/urunler/Pompa/Allisson/73058801-645-P.jpg" },
        { id: 1033, name: "745-FR-20", category: "pump", subCategory: "allisson", image: "/urunler/Pompa/Allisson/745-FR-20.jpg" },
        { id: 1034, name: "1360529", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/1360529.jpg" },
        { id: 1035, name: "241-8686", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/241-8686.jpg" },
        { id: 1036, name: "292-9964", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/292-9964.jpg" },
        { id: 1037, name: "293645", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/293645.jpg" },
        { id: 1038, name: "3G-9891", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/3G-9891.jpg" },
        { id: 1039, name: "6I3524", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/6I3524.jpg" },
        { id: 1040, name: "6Y-8764", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/6Y-8764.jpg" },
        { id: 1041, name: "7G-4856-950-B", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/7G-4856-950-B.jpg" },
        { id: 1042, name: "8J-1383", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/8J-1383.jpg" },
        { id: 1043, name: "cat-pompa", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/cat-pompa.jpg" },
        { id: 1044, name: "KAW-70-KISABOY", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/KAW-70-KISABOY.jpg" },
        { id: 1045, name: "235045", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/235045.jpg" },
        { id: 1046, name: "238111", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/238111.jpg" },
        { id: 1047, name: "238131", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/238131.jpg" },
        { id: 1048, name: "450230", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/450230.jpg" },
        { id: 1049, name: "455872", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/455872.jpg" },
        { id: 1050, name: "CLARK-FORKLIFT-POMPASI", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/CLARK-FORKLIFT-POMPASI.jpg" },
        { id: 1051, name: "D58190", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/D58190.jpg" },
        { id: 1052, name: "furukova-230-direksiyon", category: "pump", subCategory: "furukawa", image: "/urunler/Pompa/Furukawa/furukova-230-direksiyon.jpg" },
        { id: 1053, name: "furukova-230-hidrolik", category: "pump", subCategory: "furukawa", image: "/urunler/Pompa/Furukawa/furukova-230-hidrolik.jpg" },
        { id: 1054, name: "furukova-230", category: "pump", subCategory: "furukawa", image: "/urunler/Pompa/Furukawa/furukova-230.jpg" },
        { id: 1055, name: "30725-20030_KAW-95", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/30725-20030_KAW-95.jpg" },
        { id: 1056, name: "705-56-34040", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/705-56-34040.jpg" },
        { id: 1057, name: "KAW-70-TRANSMISION", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-70-TRANSMISION.jpg" },
        { id: 1058, name: "kaw-70z-1h", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/kaw-70z-1h.jpg" },
        { id: 1059, name: "KAW-70_1", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-70_1.jpg" },
        { id: 1060, name: "KAW-80", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-80.jpg" },
        { id: 1061, name: "KAW-8025_", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-8025_.jpg" },
        { id: 1062, name: "KAW-85-TEK-KADEME", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-85-TEK-KADEME.jpg" },
        { id: 1063, name: "KAW-85-YURUYUS", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-85-YURUYUS.jpg" },
        { id: 1064, name: "KAW-85-Z11", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-85-Z11.jpg" },
        { id: 1065, name: "kaw-85Z5", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/kaw-85Z5.jpg" },
        { id: 1066, name: "kaw-90Z", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/kaw-90Z.jpg" },
        { id: 1067, name: "KAW-95211_", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-95211_.jpg" },
        { id: 1068, name: "kaw-95z5", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/kaw-95z5.jpg" },
        { id: 1069, name: "kaw-95ZV", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/kaw-95ZV.jpg" },
        { id: 1070, name: "07432-71203", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/07432-71203.jpg" },
        { id: 1071, name: "07446-66104", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/07446-66104.jpg" },
        { id: 1072, name: "175-13-23500", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/175-13-23500.jpg" },
        { id: 1073, name: "785-TRUCK", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/785-TRUCK.jpg" },
        { id: 1074, name: "D-155-CARTER-", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/D-155-CARTER-.jpg" },
        { id: 1075, name: "D155-c-k-p", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/D155-c-k-p.jpg" },
        { id: 1076, name: "fd-70-SA2_6887", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/fd-70-SA2_6887.jpg" },
        { id: 1077, name: "KOMATSU-fORKLIFT", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/KOMATSU-fORKLIFT.jpg" },
        { id: 1078, name: "KOMATSU-POMPA", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/KOMATSU-POMPA.jpg" },
        { id: 1079, name: "SANJUMAN-POMP", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/SANJUMAN-POMP.jpg" },
        { id: 1080, name: "volvo-150-pompa", category: "pump", subCategory: "volvo", image: "/urunler/Pompa/Volvo/volvo-150-pompa.jpg" },
        { id: 1081, name: "volvo-160", category: "pump", subCategory: "volvo", image: "/urunler/Pompa/Volvo/volvo-160.jpg" },
        { id: 1082, name: "ZF-120", category: "pump", subCategory: "zf", image: "/urunler/Pompa/Zf/ZF-120.jpg" },
        { id: 1083, name: "zf-150", category: "pump", subCategory: "zf", image: "/urunler/Pompa/Zf/zf-150.jpg" },
        { id: 1084, name: "ZF-180", category: "pump", subCategory: "zf", image: "/urunler/Pompa/Zf/ZF-180.jpg" },
        { id: 1085, name: "ZF-200", category: "pump", subCategory: "zf", image: "/urunler/Pompa/Zf/ZF-200.jpg" },
        { id: 1086, name: "23015420", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/23015420.jpg" },
        { id: 1087, name: "29503848-38", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/29503848-38.jpg" },
        { id: 1088, name: "545-HAUSING", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/545-HAUSING.jpg" },
        { id: 1089, name: "545-STATOR", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/545-STATOR.jpg" },
        { id: 1090, name: "545-TURBUN", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/545-TURBUN.jpg" },
        { id: 1091, name: "645-cember", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/645-cember.jpg" },
        { id: 1092, name: "645-HAUSING", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/645-HAUSING.jpg" },
        { id: 1093, name: "645-st", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/645-st.jpg" },
        { id: 1094, name: "645-TURBUN", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/645-TURBUN.jpg" },
        { id: 1095, name: "6770886-y", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6770886-y.jpg" },
        { id: 1096, name: "6771381", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6771381.jpg" },
        { id: 1097, name: "6830599_33 (1)", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6830599_33%20(1).jpg" },
        { id: 1098, name: "6830599_33", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6830599_33.jpg" },
        { id: 1099, name: "6835759", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6835759.jpg" },
        { id: 1100, name: "6836093-y", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6836093-y.jpg" },
        { id: 1101, name: "745--st", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/745--st.jpg" },
        { id: 1102, name: "745-HAUSING", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/745-HAUSING.jpg" },
        { id: 1103, name: "745-TRUBUN", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/745-TRUBUN.jpg" },
        { id: 1104, name: "AT--26041-545", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/AT--26041-545.jpg" },
        { id: 1105, name: "108-8377", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/108-8377.jpg" },
        { id: 1106, name: "146-3338-966F", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/146-3338-966F.jpg" },
        { id: 1107, name: "1T-0436", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-0436.jpg" },
        { id: 1108, name: "1T-0611", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-0611.jpg" },
        { id: 1109, name: "1T-1045", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1045.jpg" },
        { id: 1110, name: "1T-1056", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1056.jpg" },
        { id: 1111, name: "1T-1082", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1082.jpg" },
        { id: 1112, name: "1T-1091", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1091.jpg" },
        { id: 1113, name: "1T-1226", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1226.jpg" },
        { id: 1114, name: "1T-1255", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1255.jpg" },
        { id: 1115, name: "1T-1314", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1314.jpg" },
        { id: 1116, name: "1T-1332", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1332.jpg" },
        { id: 1117, name: "1T-1335", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1335.jpg" },
        { id: 1118, name: "1T-1339", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1339.jpg" },
        { id: 1119, name: "1T-1348", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1348.jpg" },
        { id: 1120, name: "1T-1349", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1349.jpg" },
        { id: 1121, name: "1T-1389", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1389.jpg" },
        { id: 1122, name: "1T-1393", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1393.jpg" },
        { id: 1123, name: "1T-1396", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1396.jpg" },
        { id: 1124, name: "1T-1397", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1397.jpg" },
        { id: 1125, name: "1T-1423", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1423.jpg" },
        { id: 1126, name: "1T-1440", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1440.jpg" },
        { id: 1127, name: "1T-1444", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1444.jpg" },
        { id: 1128, name: "1T-1446", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1446.jpg" },
        { id: 1129, name: "1T-1448", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1448.jpg" },
        { id: 1130, name: "1T-1480", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1480.jpg" },
        { id: 1131, name: "1T-1505", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1505.jpg" },
        { id: 1132, name: "1T-1519-910", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1519-910.jpg" },
        { id: 1133, name: "1T-1562", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1562.jpg" },
        { id: 1134, name: "1T-1618", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1618.jpg" },
        { id: 1135, name: "1T-1631", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1631.jpg" },
        { id: 1136, name: "1T-1647", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1647.jpg" },
        { id: 1137, name: "1T-1657", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1657.jpg" },
        { id: 1138, name: "1T-1674", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1674.jpg" },
        { id: 1139, name: "1T-1744", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1744.jpg" },
        { id: 1140, name: "1T-1752", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1752.jpg" },
        { id: 1141, name: "1T-1782", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1782.jpg" },
        { id: 1142, name: "1T-1815", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1815.jpg" },
        { id: 1143, name: "1T-1908", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1908.jpg" },
        { id: 1144, name: "1T-2023", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-2023.jpg" },
        { id: 1145, name: "1T-2047", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-2047.jpg" },
        { id: 1146, name: "1T-209", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-209.jpg" },
        { id: 1147, name: "1T-22", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-22.jpg" },
        { id: 1148, name: "1T-24", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-24.jpg" },
        { id: 1149, name: "1T-292", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-292.jpg" },
        { id: 1150, name: "1T-407", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-407.jpg" },
        { id: 1151, name: "1T-421", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-421.jpg" },
        { id: 1152, name: "1T-437", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-437.jpg" },
        { id: 1153, name: "1T-438", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-438.jpg" },
        { id: 1154, name: "1T-51", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-51.jpg" },
        { id: 1155, name: "1T-52", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-52.jpg" },
        { id: 1156, name: "1T-535", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-535.jpg" },
        { id: 1157, name: "1T-541", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-541.jpg" },
        { id: 1158, name: "1T-555", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-555.jpg" },
        { id: 1159, name: "1T-595", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-595.jpg" },
        { id: 1160, name: "1T-628", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-628.jpg" },
        { id: 1161, name: "1T-633", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-633.jpg" },
        { id: 1162, name: "1T-660", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-660.jpg" },
        { id: 1163, name: "1T-662", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-662.jpg" },
        { id: 1164, name: "1T-699", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-699.jpg" },
        { id: 1165, name: "1T-709", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-709.jpg" },
        { id: 1166, name: "1T-711", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-711.jpg" },
        { id: 1167, name: "1T-727", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-727.jpg" },
        { id: 1168, name: "1T-753", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-753.jpg" },
        { id: 1169, name: "1T-757", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-757.jpg" },
        { id: 1170, name: "1T-759", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-759.jpg" },
        { id: 1171, name: "1T-771", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-771.jpg" },
        { id: 1172, name: "1T-774", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-774.jpg" },
        { id: 1173, name: "1T-792", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-792.jpg" },
        { id: 1174, name: "1T-826", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-826.jpg" },
        { id: 1175, name: "1T-841", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-841.jpg" },
        { id: 1176, name: "1T-842", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-842.jpg" },
        { id: 1177, name: "1T-910", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-910.jpg" },
        { id: 1178, name: "1T-930", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-930.jpg" },
        { id: 1179, name: "1T-945", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-945.jpg" },
        { id: 1180, name: "1T-949", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-949.jpg" },
        { id: 1181, name: "1T-972", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-972.jpg" },
        { id: 1182, name: "1T-989", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-989.jpg" },
        { id: 1183, name: "216-794", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/216-794.jpg" },
        { id: 1184, name: "2P-4470", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/2P-4470.jpg" },
        { id: 1185, name: "2P-5680", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/2P-5680.jpg" },
        { id: 1186, name: "2P-5715", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/2P-5715.jpg" },
        { id: 1187, name: "3T-3347", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/3T-3347.jpg" },
        { id: 1188, name: "3T-4009", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/3T-4009.jpg" },
        { id: 1189, name: "3T-5100", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/3T-5100.jpg" },
        { id: 1190, name: "3T-5419", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/3T-5419.jpg" },
        { id: 1191, name: "3T-5421", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/3T-5421.jpg" },
        { id: 1192, name: "4S-5946", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/4S-5946.jpg" },
        { id: 1193, name: "6P-6556", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/6P-6556.jpg" },
        { id: 1194, name: "6P-6927", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/6P-6927.jpg" },
        { id: 1195, name: "6P-7564", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/6P-7564.jpg" },
        { id: 1196, name: "6T-3318-24", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/6T-3318-24.jpg" },
        { id: 1197, name: "6Y-3148", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/6Y-3148.jpg" },
        { id: 1198, name: "7T-4308", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/7T-4308.jpg" },
        { id: 1199, name: "7T-4752", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/7T-4752.jpg" },
        { id: 1200, name: "7T-5525", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/7T-5525.jpg" },
        { id: 1201, name: "7T-9275", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/7T-9275.jpg" },
        { id: 1202, name: "8E-6298-tork", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/8E-6298-tork.jpg" },
        { id: 1203, name: "8F-1600_5X-3534", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/8F-1600_5X-3534.jpg" },
        { id: 1204, name: "8P-0953", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/8P-0953.jpg" },
        { id: 1205, name: "8P-5242", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/8P-5242.jpg" },
        { id: 1206, name: "8P9266", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/8P9266.jpg" },
        { id: 1207, name: "950-B-1T-1735", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/950-B-1T-1735.jpg" },
        { id: 1208, name: "966-S-1T-408", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/966-S-1T-408.jpg" },
        { id: 1209, name: "9G-2413", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9G-2413.jpg" },
        { id: 1210, name: "9P-4889", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9P-4889.jpg" },
        { id: 1211, name: "9P-4890", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9P-4890.jpg" },
        { id: 1212, name: "9P-6476-77---Y", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9P-6476-77---Y.jpg" },
        { id: 1213, name: "9P-9507", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9P-9507.jpg" },
        { id: 1214, name: "9U-9067", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9U-9067.jpg" },
        { id: 1215, name: "9W-1564", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9W-1564.jpg" },
        { id: 1216, name: "9W-1567", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9W-1567.jpg" },
        { id: 1217, name: "9W-5278", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9W-5278.jpg" },
        { id: 1218, name: "9W-6433", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9W-6433.jpg" },
        { id: 1219, name: "219074", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/219074.jpg" },
        { id: 1220, name: "226330-", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/226330-.jpg" },
        { id: 1221, name: "229537", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/229537.jpg" },
        { id: 1222, name: "229585 (1)", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/229585%20(1).jpg" },
        { id: 1223, name: "229585", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/229585.jpg" },
        { id: 1224, name: "230758-ST", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/230758-ST.jpg" },
        { id: 1225, name: "232043", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/232043.jpg" },
        { id: 1226, name: "2342078-Y", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/2342078-Y.jpg" },
        { id: 1227, name: "234238R", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/234238R.jpg" },
        { id: 1228, name: "234503", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/234503.jpg" },
        { id: 1229, name: "235214", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/235214.jpg" },
        { id: 1230, name: "235685-356318", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/235685-356318.jpg" },
        { id: 1231, name: "236275", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/236275.jpg" },
        { id: 1232, name: "236277", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/236277.jpg" },
        { id: 1233, name: "236757", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/236757.jpg" },
        { id: 1234, name: "236758-y", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/236758-y.jpg" },
        { id: 1235, name: "237875", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/237875.jpg" },
        { id: 1236, name: "239774", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/239774.jpg" },
        { id: 1237, name: "254242", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/254242.jpg" },
        { id: 1238, name: "289775", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/289775.jpg" },
        { id: 1239, name: "Chmpion-740", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/Chmpion-740.jpg" },
        { id: 1240, name: "SERIAL-28000", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/SERIAL-28000.jpg" },
        { id: 1241, name: "series--28000", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/series--28000.jpg" },
        { id: 1242, name: "341221-12360", category: "torque", subCategory: "furukawa", image: "/urunler/Tork/Furukawa/341221-12360.jpg" },
        { id: 1243, name: "FR-220", category: "torque", subCategory: "furukawa", image: "/urunler/Tork/Furukawa/FR-220.jpg" },
        { id: 1244, name: "furukaova-230-tork", category: "torque", subCategory: "furukawa", image: "/urunler/Tork/Furukawa/furukaova-230-tork.jpg" },
        { id: 1245, name: "furukoa-230-turbine", category: "torque", subCategory: "furukawa", image: "/urunler/Tork/Furukawa/furukoa-230-turbine.jpg" },
        { id: 1246, name: "furukova-330-tork", category: "torque", subCategory: "furukawa", image: "/urunler/Tork/Furukawa/furukova-330-tork.jpg" },
        { id: 1247, name: "KAW--110", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW--110.jpg" },
        { id: 1248, name: "KAW-110-IMP", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-110-IMP.jpg" },
        { id: 1249, name: "KAW-110-TRBUN", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-110-TRBUN.jpg" },
        { id: 1250, name: "kaw-70-i", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-70-i.jpg" },
        { id: 1251, name: "KAW-70-imp-y", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-70-imp-y.jpg" },
        { id: 1252, name: "KAW-70-T", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-70-T.jpg" },
        { id: 1253, name: "KAW-70", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-70.jpg" },
        { id: 1254, name: "KAW-80-B--imp-y", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-B--imp-y.jpg" },
        { id: 1255, name: "KAW-80-B-T", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-B-T.jpg" },
        { id: 1256, name: "KAW-80-B", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-B.jpg" },
        { id: 1257, name: "KAW-80-Y", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-Y.jpg" },
        { id: 1258, name: "KAW-80-YI", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-YI.jpg" },
        { id: 1259, name: "KAW-80-ZB", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-ZB.jpg" },
        { id: 1260, name: "KAW-80", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80.jpg" },
        { id: 1261, name: "kaw-80b", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-80b.jpg" },
        { id: 1262, name: "kaw-80z5-tork", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-80z5-tork.jpg" },
        { id: 1263, name: "KAW-85-95-a", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-85-95-a.jpg" },
        { id: 1264, name: "KAW-85-95-b", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-85-95-b.jpg" },
        { id: 1265, name: "KAW-85-95-c", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-85-95-c.jpg" },
        { id: 1266, name: "KAW-85-imp-y", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-85-imp-y.jpg" },
        { id: 1267, name: "kaw-85-tork", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-85-tork.jpg" },
        { id: 1268, name: "kaw-85z3-tork", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-85z3-tork.jpg" },
        { id: 1269, name: "KAW-95-2T-4", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-95-2T-4.jpg" },
        { id: 1270, name: "kaw-97-z-i", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-97-z-i.jpg" },
        { id: 1271, name: "kaw-97z-stator", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-97z-stator.jpg" },
        { id: 1272, name: "kaw-97z-turbin", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-97z-turbin.jpg" },
        { id: 1273, name: "YK-1162504501", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/YK-1162504501.jpg" },
        { id: 1274, name: "YK-117110-1001", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/YK-117110-1001.jpg" },
        { id: 1275, name: "YK-1172504600", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/YK-1172504600.jpg" },
        { id: 1276, name: "144-13-00020", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-00020.jpg" },
        { id: 1277, name: "144-13-11522-", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-11522-.jpg" },
        { id: 1278, name: "144-13-1203-D-75", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-1203-D-75.jpg" },
        { id: 1279, name: "144-13-12302-D75 (1)", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-12302-D75%20(1).jpg" },
        { id: 1280, name: "144-13-12302-D75", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-12302-D75.jpg" },
        { id: 1281, name: "144-13-12520-D-65-ESKI-MODEL", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-12520-D-65-ESKI-MODEL.jpg" },
        { id: 1282, name: "144-13-12523-D-65", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-12523-D-65.jpg" },
        { id: 1283, name: "145-13-31122", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/145-13-31122.jpg" },
        { id: 1284, name: "154-13-42110", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/154-13-42110.jpg" },
        { id: 1285, name: "175-13-00300", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/175-13-00300.jpg" },
        { id: 1286, name: "175-13-21005", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/175-13-21005.jpg" },
        { id: 1287, name: "175-13-21124-y", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/175-13-21124-y.jpg" },
        { id: 1288, name: "175-13-21522-Y", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/175-13-21522-Y.jpg" },
        { id: 1289, name: "175-13-620", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/175-13-620.jpg" },
        { id: 1290, name: "195-13-11005", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/195-13-11005.jpg" },
        { id: 1291, name: "195-13-11124-26--Y", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/195-13-11124-26--Y.jpg" },
        { id: 1292, name: "195-13-11522--Y", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/195-13-11522--Y.jpg" },
        { id: 1293, name: "208811", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/208811.jpg" },
        { id: 1294, name: "320-1", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/320-1.jpg" },
        { id: 1295, name: "320-3", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/320-3.jpg" },
        { id: 1296, name: "320-711-52-12110", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/320-711-52-12110.jpg" },
        { id: 1297, name: "420-3", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/420-3.jpg" },
        { id: 1298, name: "420-ST", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/420-ST.jpg" },
        { id: 1299, name: "470-ST", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/470-ST.jpg" },
        { id: 1300, name: "711-14-12110", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-14-12110.jpg" },
        { id: 1301, name: "711-47-31120-03", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-47-31120-03.jpg" },
        { id: 1302, name: "711-49-11120--------04", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-49-11120--------04.jpg" },
        { id: 1303, name: "711-49-11520---------03", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-49-11520---------03.jpg" },
        { id: 1304, name: "711-49-21190-KOMATSU", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-49-21190-KOMATSU.jpg" },
        { id: 1305, name: "711-50-11120", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-50-11120.jpg" },
        { id: 1306, name: "711-50-11520-W-380", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-50-11520-W-380.jpg" },
        { id: 1307, name: "711-50-12110", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-50-12110.jpg" },
        { id: 1308, name: "711-52-11620-HF1-121A--03", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-52-11620-HF1-121A--03.jpg" },
        { id: 1309, name: "711-55-12522", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-55-12522.jpg" },
        { id: 1310, name: "785-", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/785-.jpg" },
        { id: 1311, name: "d-155", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/d-155.jpg" },
        { id: 1312, name: "D-355---", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/D-355---.jpg" },
        { id: 1313, name: "D-355", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/D-355.jpg" },
        { id: 1314, name: "D-75-", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/D-75-.jpg" },
        { id: 1315, name: "d155---_DSC0450", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/d155---_DSC0450.jpg" },
        { id: 1316, name: "d65--_SA17379", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/d65--_SA17379.jpg" },
        { id: 1317, name: "KOMATSU-HUB", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/KOMATSU-HUB.jpg" },
        { id: 1318, name: "_SA17528", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/_SA17528.jpg" },
        { id: 1319, name: "4166305006", category: "torque", subCategory: "volvo", image: "/urunler/Tork/Volvo/4166305006.jpg" },
        { id: 1320, name: "4VG-45", category: "torque", subCategory: "volvo", image: "/urunler/Tork/Volvo/4VG-45.jpg" },
        { id: 1321, name: "621182-1-y", category: "torque", subCategory: "volvo", image: "/urunler/Tork/Volvo/621182-1-y.jpg" },
        { id: 1322, name: "VOLVO-SAFT", category: "torque", subCategory: "volvo", image: "/urunler/Tork/Volvo/VOLVO-SAFT.jpg" },
        { id: 1323, name: "1T-0611", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-0611.jpg" },
        { id: 1324, name: "1T-1045", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-1045.jpg" },
        { id: 1325, name: "1T-1255", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-1255.jpg" },
        { id: 1326, name: "1T-1335", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-1335.jpg" },
        { id: 1327, name: "1T-1440", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-1440.jpg" },
        { id: 1328, name: "1T-1448", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-1448.jpg" },
        { id: 1329, name: "1T-209", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-209.jpg" },
        { id: 1330, name: "1T-910", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-910.jpg" },
        { id: 1331, name: "1T-930", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-930.jpg" },
        { id: 1332, name: "110-5157", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/110-5157.jpg" },
        { id: 1333, name: "161-7055", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/161-7055.jpg" },
        { id: 1334, name: "73058798", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/73058798.jpg" },
        { id: 1335, name: "kaw-70z4-tork", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/kaw-70z4-tork.jpg" },
        { id: 1336, name: "KAW-85-Z-CONTROL-VALVE", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/KAW-85-Z-CONTROL-VALVE.jpg" },
        { id: 1337, name: "komatsu-forklift-torku", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/komatsu-forklift-torku.jpg" },
        { id: 1338, name: "komatsu-forklift-torku2", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/komatsu-forklift-torku2.jpg" },
        { id: 1339, name: "volvo-kamyon-torku", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/volvo-kamyon-torku.jpg" },
        { id: 1340, name: "159-8168", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/159-8168.jpg" },
        { id: 1341, name: "159-8169", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/159-8169.jpg" },
        { id: 1342, name: "2P-5752", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/2P-5752.jpg" },
        { id: 1343, name: "2V-7092", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/2V-7092.jpg" },
        { id: 1344, name: "2W-2895", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/2W-2895.jpg" },
        { id: 1345, name: "3P2768", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3P2768.jpg" },
        { id: 1346, name: "3T-3057", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3T-3057.jpg" },
        { id: 1347, name: "3T-4224", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3T-4224.jpg" },
        { id: 1348, name: "3T-4410", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3T-4410.jpg" },
        { id: 1349, name: "3V-4046", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3V-4046.jpg" },
        { id: 1350, name: "3W-5424", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3W-5424.jpg" },
        { id: 1351, name: "4T-9311", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/4T-9311.jpg" },
        { id: 1352, name: "5M-8003", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/5M-8003.jpg" },
        { id: 1353, name: "5S-7887", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/5S-7887.jpg" },
        { id: 1354, name: "6-G-6241", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6-G-6241.jpg" },
        { id: 1355, name: "6G-1538", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6G-1538.jpg" },
        { id: 1356, name: "6G-1541", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6G-1541.jpg" },
        { id: 1357, name: "6G-5532", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6G-5532.jpg" },
        { id: 1358, name: "6G-5533", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6G-5533.jpg" },
        { id: 1359, name: "6G-5842", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6G-5842.jpg" },
        { id: 1360, name: "6S-9666", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6S-9666.jpg" },
        { id: 1361, name: "6T-1706", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6T-1706.jpg" },
        { id: 1362, name: "6T-3009", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6T-3009.jpg" },
        { id: 1363, name: "6W3620", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6W3620.jpg" },
        { id: 1364, name: "6y-4819", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6y-4819.jpg" },
        { id: 1365, name: "7f-6269", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7f-6269.jpg" },
        { id: 1366, name: "7G--7724", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G--7724.jpg" },
        { id: 1367, name: "7G-3708", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-3708.jpg" },
        { id: 1368, name: "7G-3713", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-3713.jpg" },
        { id: 1369, name: "7G-4306", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-4306.jpg" },
        { id: 1370, name: "7G-4311", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-4311.jpg" },
        { id: 1371, name: "7G-5393", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-5393.jpg" },
        { id: 1372, name: "7G-5444", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-5444.jpg" },
        { id: 1373, name: "7G-5622", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-5622.jpg" },
        { id: 1374, name: "7S-3034", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7S-3034.jpg" },
        { id: 1375, name: "7S-4493", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7S-4493.jpg" },
        { id: 1376, name: "7T-3950", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7T-3950.jpg" },
        { id: 1377, name: "7V-4189", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7V-4189.jpg" },
        { id: 1378, name: "8D-5344", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8D-5344.jpg" },
        { id: 1379, name: "8D-7890", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8D-7890.jpg" },
        { id: 1380, name: "8E-1707", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8E-1707.jpg" },
        { id: 1381, name: "8E-7447", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8E-7447.jpg" },
        { id: 1382, name: "8E-7986", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8E-7986.jpg" },
        { id: 1383, name: "8K-2685", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8K-2685.jpg" },
        { id: 1384, name: "8N-6184", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8N-6184.jpg" },
        { id: 1385, name: "8P-0026", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8P-0026.jpg" },
        { id: 1386, name: "8P-7787-Y", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8P-7787-Y.jpg" },
        { id: 1387, name: "8P-9507", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8P-9507.jpg" },
        { id: 1388, name: "8T-2523", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8T-2523.jpg" },
        { id: 1389, name: "8w-8147", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8w-8147.jpg" },
        { id: 1390, name: "9d-5746", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9d-5746.jpg" },
        { id: 1391, name: "9G-1918", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9G-1918.jpg" },
        { id: 1392, name: "9G-281", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9G-281.jpg" },
        { id: 1393, name: "9G-290", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9G-290.jpg" },
        { id: 1394, name: "9G-5842", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9G-5842.jpg" },
        { id: 1395, name: "9P-3229", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9P-3229.jpg" },
        { id: 1396, name: "9P-3471", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9P-3471.jpg" },
        { id: 1397, name: "9P-8521", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9P-8521.jpg" },
        { id: 1398, name: "9P-8614", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9P-8614.jpg" },
        { id: 1399, name: "9P-8626", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9P-8626.jpg" },
        { id: 1400, name: "9W-2976", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9W-2976.jpg" },
        { id: 1401, name: "9W-6099", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9W-6099.jpg" },
        { id: 1402, name: "9W-7481", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9W-7481.jpg" },
        { id: 1403, name: "9W-7889", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9W-7889.jpg" },
        { id: 1404, name: "9W-9396", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9W-9396.jpg" },
        { id: 1405, name: "kaw-105-m.k.p", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-105-m.k.p.jpg" },
        { id: 1406, name: "kaw-70-24-yoke", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-70-24-yoke.jpg" },
        { id: 1407, name: "kaw-70-piston", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-70-piston.jpg" },
        { id: 1408, name: "KAW-70-PMP-SAFT", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/KAW-70-PMP-SAFT.jpg" },
        { id: 1409, name: "KAW-70-tekerlek-carrier", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/KAW-70-tekerlek-carrier.jpg" },
        { id: 1410, name: "kaw-70-tekerlek", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-70-tekerlek.jpg" },
        { id: 1411, name: "KAW-80-B_1", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/KAW-80-B_1.jpg" },
        { id: 1412, name: "kaw-80-drum", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-80-drum.jpg" },
        { id: 1413, name: "kaw-80-piston", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-80-piston.jpg" },
        { id: 1414, name: "kaw-80b-15cm-drum", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-80b-15cm-drum.jpg" },
        { id: 1415, name: "kaw-80b-kisa_drum", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-80b-kisa_drum.jpg" },
        { id: 1416, name: "kaw-80b-piston", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-80b-piston.jpg" },
        { id: 1417, name: "KAW-85-HOUSING-", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/KAW-85-HOUSING-.jpg" },
        { id: 1418, name: "kaw-85-shaft", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-85-shaft.jpg" },
        { id: 1419, name: "KAW-85-SU-MANIFOLT", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/KAW-85-SU-MANIFOLT.jpg" },
        { id: 1420, name: "kaw-85-su-manifoltu", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-85-su-manifoltu.jpg" },
        { id: 1421, name: "kaw-8523-fren-pistonu", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-8523-fren-pistonu.jpg" },
        { id: 1422, name: "kaw-85s.c.t", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-85s.c.t.jpg" },
        { id: 1423, name: "kaw-8s-diferansiyel", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-8s-diferansiyel.jpg" },
        { id: 1424, name: "kaw-8s-z4-yoke", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-8s-z4-yoke.jpg" },
        { id: 1425, name: "kaw-90-z-fren-pistonu", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-90-z-fren-pistonu.jpg" },
        { id: 1426, name: "kaw-9s-z4-yoke", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-9s-z4-yoke.jpg" },
        { id: 1427, name: "YK-1188031503", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/YK-1188031503.jpg" },
        { id: 1428, name: "YK-1188031603", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/YK-1188031603.jpg" },
        { id: 1429, name: "175-24-31233", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/175-24-31233.jpg" },
        { id: 1430, name: "178-15---13240-5", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/178-15---13240-5.jpg" },
        { id: 1431, name: "205-00-71440", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/205-00-71440.jpg" },
        { id: 1432, name: "424-15-11130", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/424-15-11130.jpg" },
        { id: 1433, name: "424-15-11181", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/424-15-11181.jpg" },
        { id: 1434, name: "6127-61-2113BCD", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/6127-61-2113BCD.jpg" },
        { id: 1435, name: "komatsu-110-m.k.p", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/komatsu-110-m.k.p.jpg" }
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
        tag: '',
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
      corporateTitle: 'KURUMSAL',
      certificatesTitle: 'SERTİFİKALAR',
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
    machinery: {
      hero: {
        tag: 'TEKNOLOJİK ALTYAPI',
        title: 'MODERN',
        highlight: 'MAKİNE PARKURU',
        desc: 'Üretim süreçlerimizde kullandığımız son teknoloji CNC tezgahlar ve hassas işleme ekipmanları ile hata payını minimuma indiriyoruz.'
      },
      ui: {
        viewDetails: 'İncele',
        techSpecs: 'Teknik Detaylar',
        close: 'Kapat',
      },
      items: [
        {
          title: 'VICTOR V-TURN 36',
          desc: 'Ağır hizmet tipi CNC torna tezgahı, yüksek tork ve hassasiyet sunar. C ekseni ve canlı takım özellikleri ile frezeleme kabiliyetine sahiptir.',
          image: '/urunler/MakineParkuru/VICTOR_V_TURN36.jpg',
          specs: ['36 inch Çap', 'C Ekseni', 'Canlı Takım'],
          details: [
            {
              group: 'GENEL BİLGİ',
              items: [
                { label: 'Marka / Model', value: 'Victor V-TURN 36' },
                { label: 'Üretim Yılı', value: '2004' },
                { label: 'Makine Tipi', value: 'CNC Yatay Torna + Freze' },
                { label: 'Üretici', value: 'Victor Taichung (Taiwan)' },
                { label: 'Konfigürasyon', value: 'C ekseni + Canlı Takım' }
              ]
            },
            {
              group: 'SPINDLE & C EKSENİ',
              items: [
                { label: 'Maks. Spindle Devri', value: '2500 rpm' },
                { label: 'Motor Gücü', value: '22 kW' },
                { label: 'C Ekseni Pozisyonlama', value: 'Sürekli 360°' },
                { label: 'Çözünürlük', value: '0.001°' }
              ]
            },
            {
              group: 'CANLI TAKIM (LIVE TOOLING)',
              items: [
                { label: 'Taret İstasyonu', value: '10-12 Pozisyon' },
                { label: 'Canlı Takım Devri', value: '3000-4000 rpm' },
                { label: 'Motor Gücü', value: '5.5 kW' }
              ]
            },
            {
              group: 'İŞLEME KAPASİTESİ',
              items: [
                { label: 'Maks. Tornalama Çapı', value: '550 mm' },
                { label: 'Merkezler Arası Mesafe', value: '855 mm' },
                { label: 'X Ekseni Strok', value: '305 mm' },
                { label: 'Z Ekseni Strok', value: '855 mm' }
              ]
            },
            {
              group: 'FİZİKSEL ÖZELLİKLER',
              items: [
                { label: 'Makine Ağırlığı', value: '9.000 kg' },
                { label: 'Ölçüler', value: '4700 × 2000 × 2200 mm' }
              ]
            }
          ]
        },
        {
          title: 'SPINNER TC-600',
          desc: 'Yüksek hassasiyetli evrensel torna tezgahı.',
          image: '/urunler/MakineParkuru/SPINNER_TC600.png',
          specs: ['Yüksek Hassasiyet', 'Üstün Yüzey Kalitesi', 'Kompakt Tasarım'],
          details: [
            {
              group: 'GENEL ÖZELLİKLER',
              items: [
                { label: 'Dönüş Çapı', value: '400 mm' },
                { label: 'Dönme Uzunluğu', value: '650 mm' },
                { label: 'Çubuk Geçişi', value: '65 mm' }
              ]
            },
            {
              group: 'EKSEN HAREKETLERİ',
              items: [
                { label: 'X Ekseni Strok (Kontur)', value: '275 mm' },
                { label: 'Y Ekseni Strok', value: '90 mm' },
                { label: 'Z Ekseni Strok', value: '700 mm' }
              ]
            },
            {
              group: 'İŞ MİLİ & ÇALIŞMA BÖLGESİ',
              items: [
                { label: 'İş Mili Maks. Hızı', value: '5.000 RPM' },
                { label: 'Motorlu Konum Sayısı', value: '16' }
              ]
            }
          ]
        },
        {
          title: 'HWACHEAN H-TECH 300',
          desc: 'Modern teknoloji ile donatılmış verimli torna merkezi.',
          image: '/urunler/MakineParkuru/HWACHEAN_H-TECH300.jpg',
          specs: ['Yüksek Hız', 'Termal Kararlılık', 'Kolay Kullanım'],
          details: [
            {
              group: 'KAPASİTE & ÖLÇÜLER',
              items: [
                { label: 'Bar Kapasitesi', value: '76 mm' },
                { label: 'Mandren Boyutu', value: '315 mm (12")' },
                { label: 'Maks. Kesme Çapı', value: '380 mm' },
                { label: 'Maks. Kesme Uz.', value: '800 mm' },
                { label: 'Salıncak', value: '600 mm' }
              ]
            },
            {
              group: 'İŞ MİLİ & TARET',
              items: [
                { label: 'Mil Motor Gücü', value: '22 / 18.5 kW' },
                { label: 'Mil Hızı', value: '3200 RPM' },
                { label: 'Mil Ucu', value: 'A2-8' },
                { label: 'Taret Pozisyonları', value: '12 İstasyon' },
                { label: 'Takım', value: 'VDI40' }
              ]
            },
            {
              group: 'FREZELEME',
              items: [
                { label: 'Freze Motor Gücü', value: '7.5 / 5.5 kW' },
                { label: 'Frezeleme Devri', value: '4000 RPM' },
                { label: 'Hızlı İlerleme', value: '20 m/dak' }
              ]
            },
            {
              group: 'PUNTA & FİZİKSEL ÖZEL.',
              items: [
                { label: 'Punta Strok', value: '120 mm' },
                { label: 'Punta Konik', value: 'MT #5' },
                { label: 'Ebatlar', value: '3300×1960×2150 mm' },
                { label: 'Ağırlık', value: '8500 kg' }
              ]
            }
          ]
        },
        {
          title: 'DOOSAN PUMA 240-C',
          desc: 'Kritik parçaların üretimi için güvenilir ve güçlü torna.',
          image: '/urunler/MakineParkuru/DOOSAN_PUMA240-C.png',
          specs: ['Geniş İşleme Kapasitesi', 'Rijit Yapı', 'Performans Odaklı'],
          details: [
            {
              group: 'GENEL & ÇALIŞMA ÖLÇÜLERİ',
              items: [
                { label: 'Maks. Tornalama Boyu', value: '513 mm' },
                { label: 'Maks. Tornalama Çapı', value: '300 mm' },
                { label: 'Maks. Yatak Üstü Tornalama Çapı', value: '550 mm' },
                { label: 'Çapraz Kızak Üstü Çap', value: '390 mm' },
                { label: 'Merkezler Arası Mesafe', value: '501 mm' }
              ]
            },
            {
              group: 'EKSEN & KONTROL',
              items: [
                { label: 'CNC Çeşidi', value: 'FANUC' },
                { label: 'X Ekseni', value: '205 mm' },
                { label: 'Z Ekseni', value: '580 mm' }
              ]
            },
            {
              group: 'İŞ MİLİ & TARET',
              items: [
                { label: 'İş Mili Delik Çapı', value: '88.9 mm' },
                { label: 'Dönüş Hızı', value: '4500 RPM' },
                { label: 'İş Mili Motor Gücü', value: '15 kW' },
                { label: 'Taret Sayısı', value: '1' },
                { label: 'Taretteki İstasyon Sayısı', value: '12' },
                { label: 'Motorlu (Dönen) Takım Sayısı', value: '12' }
              ]
            },
            {
              group: 'FİZİKSEL ÖZELLİKLER',
              items: [
                { label: 'Ebatlar (U x G x Y)', value: '3997.0 × 1592.0 × 1740.0 mm' },
                { label: 'Ağırlık', value: '4140 kg' }
              ]
            }
          ]
        },
        {
          title: 'YOUJI YV 600',
          desc: 'Büyük çaplı parçalar için dikey torna tezgahı.',
          image: '/urunler/MakineParkuru/YOUJI_YV600.png',
          specs: ['Dikey İşleme', 'Büyük Çap Kapasitesi', 'Kararlı Kesim'],
          details: [
            {
              group: 'GENEL BİLGİLER',
              items: [
                { label: 'Model', value: 'YV-600 ATC-C (2013)' },
                { label: 'Makine Kontrol', value: 'Fanuc OiT-D' },
                { label: 'Makine Ağırlığı', value: '34,000 lbs' },
                { label: 'Zemin Alanı', value: '141"x83"x130"' }
              ]
            },
            {
              group: 'KAPASİTE',
              items: [
                { label: 'Maks. Dönüş Çapı', value: '33.5"' },
                { label: 'Maks. Kesme Yük.', value: '25.6"' },
                { label: 'Ayna Boyutu', value: '24" Hidrolik' }
              ]
            },
            {
              group: 'İŞ MİLİ & EKSEN',
              items: [
                { label: 'İş Mili Motoru', value: '30 HP' },
                { label: 'İş Mili Hızı', value: '1.500 RPM' },
                { label: 'X/Z Hareketi', value: '-1.97"~+22.4" / 31.5"' },
                { label: 'C Ekseni Dönüş', value: '0.001°' }
              ]
            },
            {
              group: 'CANLI TAKIM',
              items: [
                { label: 'Şarjör Kp.', value: '12 ATC' },
                { label: 'C. Takım Hız / G.', value: '2.400 RPM/10HP' },
                { label: 'Mil Konik', value: '#50' }
              ]
            }
          ]
        },
        {
          title: 'MAKINO A77',
          desc: 'Yatay işleme merkezi, seri üretimde yüksek performans.',
          image: '/urunler/MakineParkuru/MAKINO_A77.jpg',
          specs: ['Yatay İşleme', 'Yüksek Hız', 'Otomatik Palet Değiştirme'],
          details: [
            {
              group: 'GENEL & EKSEN HAREKETLERİ',
              items: [
                { label: 'Kontrol Tipi', value: 'Fanuc PRO-3' },
                { label: 'X / Y / Z Ekseni', value: '800 / 750 / 770 mm' },
                { label: 'Hızlı Geçiş', value: '35 m/dak' }
              ]
            },
            {
              group: 'İŞ MİLİ & TAKIM',
              items: [
                { label: 'Düşüş Hızları', value: '10.000 U/dak' },
                { label: 'Güç Kapasitesi', value: '30 kW' },
                { label: 'Takım Değiştirici', value: '90 Pozisyon' },
                { label: 'Mil İçi Soğutma', value: '70 bar' }
              ]
            },
            {
              group: 'PALET VE TABLA',
              items: [
                { label: 'Palet Boyutu', value: '630 x 630 mm' },
                { label: 'Tabla Yükü', value: '1200 kg' },
                { label: 'Palet Değ.', value: '2 Tür' },
                { label: 'Döner Tabla Eğ.', value: '1 Derece' }
              ]
            },
            {
              group: 'FİZİKSEL ÖZELLİKLER',
              items: [
                { label: 'Makine Ağırlığı', value: '15 Ton' }
              ]
            }
          ]
        },
        {
          title: 'MAZAK NEXUS 350M',
          desc: 'Frezeleme kabiliyetine sahip gelişmiş torna merkezi.',
          image: '/urunler/MakineParkuru/MAZAK_NEXUS 350M.jpg',
          specs: ['Canlı Takım', 'Yüksek Verimlilik', 'M-Serisi'],
          details: [
            {
              group: 'ANA MİL',
              items: [
                { label: 'Mil Gücü / Hızı', value: '30 kW / 3.300 RPM' },
                { label: 'Maks. Çubuk / Tor. Çapı', value: '102 mm / 420 mm' },
                { label: 'İş Mili Ucu', value: 'A2-8' },
                { label: 'C Eksen Hss.', value: '0,001°' }
              ]
            },
            {
              group: 'TARET & CANLI TAKIM',
              items: [
                { label: 'Pozisyon', value: '12 / 12 (Motorlu)' },
                { label: 'X/Z Strok', value: '260 / 1605 mm' },
                { label: 'Canlı Tk. Hızı', value: '25-4000 RPM' }
              ]
            },
            {
              group: 'PUNTA & GÜÇ',
              items: [
                { label: 'Merkezler Arası', value: '1.500 mm' },
                { label: 'Elektrik / Güç', value: '400 V / 55 kVA' }
              ]
            },
            {
              group: 'AĞIRLIK VE BOYUTLAR',
              items: [
                { label: 'Taban Alanı', value: '4.270 x 2.050 mm' },
                { label: 'Ağırlık', value: '7.500 kg' }
              ]
            }
          ]
        },
        {
          title: 'Mazak QT25',
          desc: 'Quick Turn serisi, hızlı ve hassas parçalar için ideal.',
          image: '/urunler/MakineParkuru/Mazak_QT25.jpg',
          specs: ['Hızlı Çevrim', ' Hassas İşleme', 'Güvenilirlik'],
          details: [
            {
              group: 'GENEL KONTROL VE KAPASİTE',
              items: [
                { label: 'Kontrol', value: 'MAZATROL T2' },
                { label: 'Mandren', value: '10″ Hidrolik' },
                { label: 'Maks. Dönüş', value: '320 mm' },
                { label: 'Uzunluk', value: '1010 mm' },
                { label: 'Çubuk Kps.', value: '70 mm' }
              ]
            },
            {
              group: 'İŞ MİLİ & EKSEN',
              items: [
                { label: 'Mil Gücü', value: '18 kW' },
                { label: 'Mil Hızı', value: '30 – 3000 RPM' },
                { label: 'X/Z Ekseni', value: '200 / 1018 mm' }
              ]
            },
            {
              group: 'TARET & PUNTA',
              items: [
                { label: 'Taret', value: '16 Katlı' },
                { label: 'Hızlı İlerleme X/Z', value: '12000/24000 mm/dak' }
              ]
            },
            {
              group: 'FİZİKSEL ÖZELLİKLER',
              items: [
                { label: 'Ebatlar', value: '3250 × 1800 × 1850 mm' },
                { label: 'Ağırlık', value: '4600 kg' }
              ]
            }
          ]
        },
        {
          title: 'Mazak QT28',
          desc: 'Üstün performanslı Quick Turn serisi genişletilmiş kapasite.',
          image: '/urunler/MakineParkuru/MAZAK_QT28.jpg',
          specs: ['Ekstra Kapasite', 'Rijit Gövde', 'Mazatrol Kontrol'],
          details: [
            {
              group: 'KAPASİTE',
              items: [
                { label: 'Tornalama Çapı', value: '310 mm' },
                { label: 'Salınım Çapı', value: '510 mm' },
                { label: 'Dönme Uzunluğu', value: '1010 mm' }
              ]
            },
            {
              group: 'HAREKET & KONTROL',
              items: [
                { label: 'Kontrol', value: 'Mazatrol T32-2' },
                { label: 'X/Z Seyahat', value: '265 mm / 1020 mm' },
                { label: 'Hızlı X/Z', value: '18 / 24 m/dak' }
              ]
            },
            {
              group: 'İŞ MİLİ & TARET',
              items: [
                { label: 'Devir Sayısı', value: '30-3000 RPM' },
                { label: 'Alet Kulesi', value: '12 Yer (2x6)' }
              ]
            },
            {
              group: 'FİZİKSEL ÖZELLİKLER',
              items: [
                { label: 'Makine Boyutları', value: '3.6 × 2.0 × 2.0 m' },
                { label: 'Ağırlık', value: '6.3 Ton' }
              ]
            }
          ]
        },
        {
          title: 'HARDINGE VMC 1000II',
          desc: 'Yüksek hızlarda bile yüksek stabilite sunan dikey işleme merkezi.',
          image: '/urunler/MakineParkuru/HARDINGE_VMC_1000II.jpg',
          specs: ['Dikey İşleme', '1000mm Tabla', 'Yüksek Devir'],
          details: [
            {
              group: 'Genel Bilgiler ve Tabla',
              items: [
                { label: 'CNC Çeşidi', value: 'Siemens 810' },
                { label: 'Tabla Uzunluğu x Genişliği', value: '1200 x 450 mm' },
                { label: 'Maksimum İş Parçası Ağırlığı', value: '700 kg' },
                { label: 'Döner Tabla (4. Eksen)', value: 'Hayır' }
              ]
            },
            {
              group: 'Eksen Hareketleri',
              items: [
                { label: 'X Eksen Hareketi', value: '1000 mm' },
                { label: 'Y Eksen Hareketi', value: '510 mm' },
                { label: 'Z Eksen Hareketi', value: '510 mm' }
              ]
            },
            {
              group: 'İş Mili ve Takım',
              items: [
                { label: 'İş Mili Koniği', value: 'BT40' },
                { label: 'Maksimum İş Mili Hızı', value: '8000 rpm' },
                { label: 'İş Mili Motor Gücü', value: '13 kW' },
                { label: 'Pot Sayısı', value: '20' }
              ]
            },
            {
              group: 'Fiziksel Özellikler',
              items: [
                { label: 'Uzunluk x Genişlik x Yükseklik', value: '2768 x 2184 x 2565 mm' },
                { label: 'Ağırlık', value: '4640 kg' }
              ]
            }
          ]
        },
        {
          title: 'SPINNER U1520',
          desc: 'Evrensel 5 eksenli işleme merkezi ile karmaşık geometriler.',
          image: '/urunler/MakineParkuru/SPINNER_U1520.jpg',
          specs: ['5 Eksen', 'Karmaşık Parça İşleme', 'Geniş Çalışma Alanı'],
          details: [
            {
              group: 'GENEL BİLGİLER',
              items: [
                { label: 'Model Yılı / Saat', value: '2013 / 5000 S' },
                { label: 'Kontrol', value: 'Siemens Sinumerik' },
                { label: 'Eksen', value: '5 Eksen (4 Sürekli+1)' }
              ]
            },
            {
              group: 'İŞ MİLİ & EKSEN',
              items: [
                { label: 'İş Mili Hızı', value: '12000 RPM' },
                { label: 'X / Y / Z Ekseni', value: '1500 / 500 / 600 mm' }
              ]
            },
            {
              group: 'TAKIM & TABLA',
              items: [
                { label: 'Takım Tutucu', value: 'SK40, 40 BT/ISO/HSK' },
                { label: 'Takım Sayısı', value: '32 Adet' },
                { label: 'Tabla – Palet', value: '650 mm Çap' }
              ]
            },
            {
              group: 'SOĞUTMA VE BASINÇ',
              items: [
                { label: 'İş Mili Soğutma', value: 'Evet (80 Bar)' }
              ]
            }
          ]
        },
        {
          title: 'JUNKER EJ29',
          desc: 'Hassas taşlama çözümleri ile mükemmel yüzey kalitesi.',
          image: '/urunler/MakineParkuru/JUNKER_EJ29.jpg',
          specs: ['Hassas Taşlama', 'Ölçeklenebilirlik', 'Alman Teknolojisi'],
          details: [
            {
              group: 'GENEL BİLGİLER',
              items: [
                { label: 'Üretim Yılı', value: '2002' },
                { label: 'Makine Tipi', value: 'Silindirik Taşlama' },
                { label: 'Kontrol', value: 'FANUC 21i-T' }
              ]
            },
            {
              group: 'KAPASİTE & ÖZELLİKLER',
              items: [
                { label: 'Taşlama Taşı', value: '400 mm Çap' },
                { label: 'Maks. Taşlama Çap', value: '280 mm' },
                { label: 'Maks. Taşlama Boyu', value: '600 mm' },
                { label: 'İş Mili Hızı', value: '1000 RPM' }
              ]
            },
            {
              group: 'FİZİKSEL ÖZELLİKLER',
              items: [
                { label: 'Ölçüler (D x G x Y)', value: '3340 × 1960 × 2050 mm' },
                { label: 'Ağırlık', value: '5000 kg' }
              ]
            }
          ]
        },
        {
          title: 'ABERLINK HALO L2000',
          desc: 'Gelişmiş CMM ölçüm cihazı ile kalite kontrol güvencesi.',
          image: '/urunler/MakineParkuru/ABERLINK_HALO_L2000.png',
          specs: ['3 Boyutlu Ölçüm', 'Yüksek Doğruluk', 'Hızlı Raporlama'],
          details: [
            {
              group: 'Hareket ve Boyut (Halo L)',
              items: [
                { label: 'Eksen Hareketi (X/Y/Z)', value: '1000 / 1200, 2000 / 800 mm' },
                { label: 'Toplam Boyut (X/Y/Z)', value: '1603 / 1830, 2630 / 2987, 3037 mm' },
                { label: 'Tablo Yük Kapasitesi', value: '1000 kg' },
                { label: 'Masa Yapımı', value: 'Katı Granit' }
              ]
            },
            {
              group: 'Performans ve Doğruluk',
              items: [
                { label: 'Ölçek Çözünürlüğü', value: '0,1 µm' },
                { label: 'Maksimum Hız Vektörü', value: '1000 mm/sn' },
                { label: 'Maksimum İvme Vektörü', value: '1000 mm/sn²' },
                { label: 'Hacimsel Doğruluk', value: 'TP20: 2,1µm + L/250mm' }
              ]
            },
            {
              group: 'Çalışma Koşulları',
              items: [
                { label: 'Yapı / Hareket', value: 'Köprü / CNC' },
                { label: 'Gerekli Hava Basıncı', value: '7 bar (100 psi) - 100 l/dak' },
                { label: 'Çalışma Sıcaklık Aralığı', value: '5 - 45°C (Opt. 18-22°C)' },
                { label: 'Uygun Ortam', value: 'Kontrol Odası / Üretim Ortamı' }
              ]
            }
          ]
        }
      ]
    },
    whatsapp: 'WhatsApp Destek',
  },
  en: {
    nav: {
      home: 'Home',
      corporate: 'Corporate',
      services: 'Services',
      catalog: 'Catalog',
      certificates: 'Certificates',
      watermark: 'EXPERIENCE, STABILITY, UNINTERRUPTED PRODUCTION',
      informationSecurity: 'Information Security',
      qualityCertificates: 'Quality Policy & Certificates',
      products: 'Products',
      about: 'About Us',
      production: 'Our Production Facility',
      quality: 'Quality Control',
      integratedPolicy: 'Integrated Management Policy',
      qualityManagement: 'Quality Management System',
      environmentalManagement: 'Environmental Management System',
      ohsManagement: 'OHS Management System',
      contact: 'Contact',
      getQuote: 'GET A QUOTE',
      partsProduction: 'PARTS PRODUCTION',
      machinery: 'Machine Park',
      machineryModels: [
        'VICTOR V-TURN 36', 'SPINNER TC-600', 'HWACHEAN H-TECH 300', 
        'DOOSAN PUMA 240-C', 'YOUJI YV 600', 'MAKINO A77', 
        'MAZAK NEXUS 350M', 'Mazak QT25', 'Mazak QT28', 
        'HARDINGE VMC 1000II', 'SPINNER U1520', 'JUNKER EJ29', 
        'ABERLINK HALO L2000'
      ],
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
        desc: 'With nearly half a century of industry experience and our expert team, we adopt an end-to-end, uninterrupted service approach from production to marketing, and from sales to after-sales technical support. We offer over 2,500 highly qualified spare parts, meticulously processed on our production lines equipped with the latest technology, not only domestically but to our solution partners worldwide with the same high quality standards. By putting innovation and durability at the center, we masterfully produce every part at the heart of heavy machinery, empowering the global industry.',
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
      subCategoryLabel: 'SUB-CATEGORY:',
      clearFilter: 'CLEAR',
      noProducts: 'NO PRODUCTS FOUND IN THIS CATEGORY',
      cta: {
        title: 'CUSTOM MANUFACTURING SOLUTIONS',
        desc: 'With our wide stock network consisting of thousands of parts and our technical drawing database, we can produce all kinds of special manufacturing parts you need.',
        button: 'GET TECHNICAL SUPPORT',
      },
      items: [
        { id: 1001, name: "7T-8001", category: "final-drive", image: "/urunler/Cer%20Grubu/7T-8001.jpg" },
        { id: 1002, name: "8E-4281", category: "final-drive", image: "/urunler/Cer%20Grubu/8E-4281.jpg" },
        { id: 1003, name: "AYNA-MAHRUTI", category: "final-drive", image: "/urunler/Cer%20Grubu/AYNA-MAHRUTI.jpg" },
        { id: 1004, name: "D-8", category: "final-drive", image: "/urunler/Cer%20Grubu/D-8.jpg" },
        { id: 1005, name: "SA2_5898", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5898.jpg" },
        { id: 1006, name: "SA2_5899", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5899.jpg" },
        { id: 1007, name: "SA2_5902", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5902.jpg" },
        { id: 1008, name: "SA2_5903", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5903.jpg" },
        { id: 1009, name: "SA2_5914", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5914.jpg" },
        { id: 1010, name: "SA2_5919", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5919.jpg" },
        { id: 1011, name: "SA2_5920", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5920.jpg" },
        { id: 1012, name: "SA2_5934", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5934.jpg" },
        { id: 1013, name: "SA2_5944", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5944.jpg" },
        { id: 1014, name: "SA2_5949", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5949.jpg" },
        { id: 1015, name: "SA2_5953_1", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5953_1.jpg" },
        { id: 1016, name: "SA2_5956", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5956.jpg" },
        { id: 1017, name: "SA2_5957", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5957.jpg" },
        { id: 1018, name: "SA2_5976", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5976.jpg" },
        { id: 1019, name: "SA2_5981", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5981.jpg" },
        { id: 1020, name: "SA2_5984", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5984.jpg" },
        { id: 1021, name: "SA2_5993", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5993.jpg" },
        { id: 1022, name: "SA2_5994", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5994.jpg" },
        { id: 1023, name: "SA2_6006", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6006.jpg" },
        { id: 1024, name: "SA2_6015", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6015.jpg" },
        { id: 1025, name: "SA2_6017", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6017.jpg" },
        { id: 1026, name: "SA2_6018", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6018.jpg" },
        { id: 1027, name: "SA2_6023", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6023.jpg" },
        { id: 1028, name: "SA2_6024", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6024.jpg" },
        { id: 1029, name: "volvo-3602", category: "final-drive", image: "/urunler/Cer%20Grubu/volvo-3602.jpg" },
        { id: 1030, name: "zp-280", category: "final-drive", image: "/urunler/Cer%20Grubu/zp-280.jpg" },
        { id: 1031, name: "6880125-23018418", category: "pump", subCategory: "allisson", image: "/urunler/Pompa/Allisson/6880125-23018418.jpg" },
        { id: 1032, name: "73058801-645-P", category: "pump", subCategory: "allisson", image: "/urunler/Pompa/Allisson/73058801-645-P.jpg" },
        { id: 1033, name: "745-FR-20", category: "pump", subCategory: "allisson", image: "/urunler/Pompa/Allisson/745-FR-20.jpg" },
        { id: 1034, name: "1360529", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/1360529.jpg" },
        { id: 1035, name: "241-8686", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/241-8686.jpg" },
        { id: 1036, name: "292-9964", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/292-9964.jpg" },
        { id: 1037, name: "293645", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/293645.jpg" },
        { id: 1038, name: "3G-9891", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/3G-9891.jpg" },
        { id: 1039, name: "6I3524", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/6I3524.jpg" },
        { id: 1040, name: "6Y-8764", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/6Y-8764.jpg" },
        { id: 1041, name: "7G-4856-950-B", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/7G-4856-950-B.jpg" },
        { id: 1042, name: "8J-1383", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/8J-1383.jpg" },
        { id: 1043, name: "cat-pompa", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/cat-pompa.jpg" },
        { id: 1044, name: "KAW-70-KISABOY", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/KAW-70-KISABOY.jpg" },
        { id: 1045, name: "235045", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/235045.jpg" },
        { id: 1046, name: "238111", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/238111.jpg" },
        { id: 1047, name: "238131", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/238131.jpg" },
        { id: 1048, name: "450230", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/450230.jpg" },
        { id: 1049, name: "455872", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/455872.jpg" },
        { id: 1050, name: "CLARK-FORKLIFT-POMPASI", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/CLARK-FORKLIFT-POMPASI.jpg" },
        { id: 1051, name: "D58190", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/D58190.jpg" },
        { id: 1052, name: "furukova-230-direksiyon", category: "pump", subCategory: "furukawa", image: "/urunler/Pompa/Furukawa/furukova-230-direksiyon.jpg" },
        { id: 1053, name: "furukova-230-hidrolik", category: "pump", subCategory: "furukawa", image: "/urunler/Pompa/Furukawa/furukova-230-hidrolik.jpg" },
        { id: 1054, name: "furukova-230", category: "pump", subCategory: "furukawa", image: "/urunler/Pompa/Furukawa/furukova-230.jpg" },
        { id: 1055, name: "30725-20030_KAW-95", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/30725-20030_KAW-95.jpg" },
        { id: 1056, name: "705-56-34040", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/705-56-34040.jpg" },
        { id: 1057, name: "KAW-70-TRANSMISION", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-70-TRANSMISION.jpg" },
        { id: 1058, name: "kaw-70z-1h", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/kaw-70z-1h.jpg" },
        { id: 1059, name: "KAW-70_1", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-70_1.jpg" },
        { id: 1060, name: "KAW-80", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-80.jpg" },
        { id: 1061, name: "KAW-8025_", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-8025_.jpg" },
        { id: 1062, name: "KAW-85-TEK-KADEME", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-85-TEK-KADEME.jpg" },
        { id: 1063, name: "KAW-85-YURUYUS", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-85-YURUYUS.jpg" },
        { id: 1064, name: "KAW-85-Z11", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-85-Z11.jpg" },
        { id: 1065, name: "kaw-85Z5", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/kaw-85Z5.jpg" },
        { id: 1066, name: "kaw-90Z", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/kaw-90Z.jpg" },
        { id: 1067, name: "KAW-95211_", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-95211_.jpg" },
        { id: 1068, name: "kaw-95z5", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/kaw-95z5.jpg" },
        { id: 1069, name: "kaw-95ZV", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/kaw-95ZV.jpg" },
        { id: 1070, name: "07432-71203", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/07432-71203.jpg" },
        { id: 1071, name: "07446-66104", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/07446-66104.jpg" },
        { id: 1072, name: "175-13-23500", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/175-13-23500.jpg" },
        { id: 1073, name: "785-TRUCK", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/785-TRUCK.jpg" },
        { id: 1074, name: "D-155-CARTER-", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/D-155-CARTER-.jpg" },
        { id: 1075, name: "D155-c-k-p", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/D155-c-k-p.jpg" },
        { id: 1076, name: "fd-70-SA2_6887", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/fd-70-SA2_6887.jpg" },
        { id: 1077, name: "KOMATSU-fORKLIFT", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/KOMATSU-fORKLIFT.jpg" },
        { id: 1078, name: "KOMATSU-POMPA", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/KOMATSU-POMPA.jpg" },
        { id: 1079, name: "SANJUMAN-POMP", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/SANJUMAN-POMP.jpg" },
        { id: 1080, name: "volvo-150-pompa", category: "pump", subCategory: "volvo", image: "/urunler/Pompa/Volvo/volvo-150-pompa.jpg" },
        { id: 1081, name: "volvo-160", category: "pump", subCategory: "volvo", image: "/urunler/Pompa/Volvo/volvo-160.jpg" },
        { id: 1082, name: "ZF-120", category: "pump", subCategory: "zf", image: "/urunler/Pompa/Zf/ZF-120.jpg" },
        { id: 1083, name: "zf-150", category: "pump", subCategory: "zf", image: "/urunler/Pompa/Zf/zf-150.jpg" },
        { id: 1084, name: "ZF-180", category: "pump", subCategory: "zf", image: "/urunler/Pompa/Zf/ZF-180.jpg" },
        { id: 1085, name: "ZF-200", category: "pump", subCategory: "zf", image: "/urunler/Pompa/Zf/ZF-200.jpg" },
        { id: 1086, name: "23015420", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/23015420.jpg" },
        { id: 1087, name: "29503848-38", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/29503848-38.jpg" },
        { id: 1088, name: "545-HAUSING", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/545-HAUSING.jpg" },
        { id: 1089, name: "545-STATOR", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/545-STATOR.jpg" },
        { id: 1090, name: "545-TURBUN", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/545-TURBUN.jpg" },
        { id: 1091, name: "645-cember", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/645-cember.jpg" },
        { id: 1092, name: "645-HAUSING", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/645-HAUSING.jpg" },
        { id: 1093, name: "645-st", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/645-st.jpg" },
        { id: 1094, name: "645-TURBUN", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/645-TURBUN.jpg" },
        { id: 1095, name: "6770886-y", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6770886-y.jpg" },
        { id: 1096, name: "6771381", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6771381.jpg" },
        { id: 1097, name: "6830599_33 (1)", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6830599_33%20(1).jpg" },
        { id: 1098, name: "6830599_33", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6830599_33.jpg" },
        { id: 1099, name: "6835759", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6835759.jpg" },
        { id: 1100, name: "6836093-y", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6836093-y.jpg" },
        { id: 1101, name: "745--st", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/745--st.jpg" },
        { id: 1102, name: "745-HAUSING", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/745-HAUSING.jpg" },
        { id: 1103, name: "745-TRUBUN", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/745-TRUBUN.jpg" },
        { id: 1104, name: "AT--26041-545", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/AT--26041-545.jpg" },
        { id: 1105, name: "108-8377", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/108-8377.jpg" },
        { id: 1106, name: "146-3338-966F", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/146-3338-966F.jpg" },
        { id: 1107, name: "1T-0436", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-0436.jpg" },
        { id: 1108, name: "1T-0611", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-0611.jpg" },
        { id: 1109, name: "1T-1045", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1045.jpg" },
        { id: 1110, name: "1T-1056", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1056.jpg" },
        { id: 1111, name: "1T-1082", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1082.jpg" },
        { id: 1112, name: "1T-1091", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1091.jpg" },
        { id: 1113, name: "1T-1226", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1226.jpg" },
        { id: 1114, name: "1T-1255", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1255.jpg" },
        { id: 1115, name: "1T-1314", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1314.jpg" },
        { id: 1116, name: "1T-1332", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1332.jpg" },
        { id: 1117, name: "1T-1335", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1335.jpg" },
        { id: 1118, name: "1T-1339", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1339.jpg" },
        { id: 1119, name: "1T-1348", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1348.jpg" },
        { id: 1120, name: "1T-1349", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1349.jpg" },
        { id: 1121, name: "1T-1389", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1389.jpg" },
        { id: 1122, name: "1T-1393", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1393.jpg" },
        { id: 1123, name: "1T-1396", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1396.jpg" },
        { id: 1124, name: "1T-1397", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1397.jpg" },
        { id: 1125, name: "1T-1423", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1423.jpg" },
        { id: 1126, name: "1T-1440", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1440.jpg" },
        { id: 1127, name: "1T-1444", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1444.jpg" },
        { id: 1128, name: "1T-1446", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1446.jpg" },
        { id: 1129, name: "1T-1448", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1448.jpg" },
        { id: 1130, name: "1T-1480", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1480.jpg" },
        { id: 1131, name: "1T-1505", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1505.jpg" },
        { id: 1132, name: "1T-1519-910", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1519-910.jpg" },
        { id: 1133, name: "1T-1562", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1562.jpg" },
        { id: 1134, name: "1T-1618", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1618.jpg" },
        { id: 1135, name: "1T-1631", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1631.jpg" },
        { id: 1136, name: "1T-1647", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1647.jpg" },
        { id: 1137, name: "1T-1657", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1657.jpg" },
        { id: 1138, name: "1T-1674", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1674.jpg" },
        { id: 1139, name: "1T-1744", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1744.jpg" },
        { id: 1140, name: "1T-1752", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1752.jpg" },
        { id: 1141, name: "1T-1782", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1782.jpg" },
        { id: 1142, name: "1T-1815", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1815.jpg" },
        { id: 1143, name: "1T-1908", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1908.jpg" },
        { id: 1144, name: "1T-2023", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-2023.jpg" },
        { id: 1145, name: "1T-2047", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-2047.jpg" },
        { id: 1146, name: "1T-209", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-209.jpg" },
        { id: 1147, name: "1T-22", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-22.jpg" },
        { id: 1148, name: "1T-24", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-24.jpg" },
        { id: 1149, name: "1T-292", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-292.jpg" },
        { id: 1150, name: "1T-407", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-407.jpg" },
        { id: 1151, name: "1T-421", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-421.jpg" },
        { id: 1152, name: "1T-437", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-437.jpg" },
        { id: 1153, name: "1T-438", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-438.jpg" },
        { id: 1154, name: "1T-51", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-51.jpg" },
        { id: 1155, name: "1T-52", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-52.jpg" },
        { id: 1156, name: "1T-535", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-535.jpg" },
        { id: 1157, name: "1T-541", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-541.jpg" },
        { id: 1158, name: "1T-555", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-555.jpg" },
        { id: 1159, name: "1T-595", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-595.jpg" },
        { id: 1160, name: "1T-628", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-628.jpg" },
        { id: 1161, name: "1T-633", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-633.jpg" },
        { id: 1162, name: "1T-660", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-660.jpg" },
        { id: 1163, name: "1T-662", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-662.jpg" },
        { id: 1164, name: "1T-699", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-699.jpg" },
        { id: 1165, name: "1T-709", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-709.jpg" },
        { id: 1166, name: "1T-711", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-711.jpg" },
        { id: 1167, name: "1T-727", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-727.jpg" },
        { id: 1168, name: "1T-753", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-753.jpg" },
        { id: 1169, name: "1T-757", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-757.jpg" },
        { id: 1170, name: "1T-759", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-759.jpg" },
        { id: 1171, name: "1T-771", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-771.jpg" },
        { id: 1172, name: "1T-774", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-774.jpg" },
        { id: 1173, name: "1T-792", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-792.jpg" },
        { id: 1174, name: "1T-826", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-826.jpg" },
        { id: 1175, name: "1T-841", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-841.jpg" },
        { id: 1176, name: "1T-842", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-842.jpg" },
        { id: 1177, name: "1T-910", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-910.jpg" },
        { id: 1178, name: "1T-930", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-930.jpg" },
        { id: 1179, name: "1T-945", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-945.jpg" },
        { id: 1180, name: "1T-949", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-949.jpg" },
        { id: 1181, name: "1T-972", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-972.jpg" },
        { id: 1182, name: "1T-989", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-989.jpg" },
        { id: 1183, name: "216-794", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/216-794.jpg" },
        { id: 1184, name: "2P-4470", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/2P-4470.jpg" },
        { id: 1185, name: "2P-5680", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/2P-5680.jpg" },
        { id: 1186, name: "2P-5715", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/2P-5715.jpg" },
        { id: 1187, name: "3T-3347", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/3T-3347.jpg" },
        { id: 1188, name: "3T-4009", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/3T-4009.jpg" },
        { id: 1189, name: "3T-5100", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/3T-5100.jpg" },
        { id: 1190, name: "3T-5419", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/3T-5419.jpg" },
        { id: 1191, name: "3T-5421", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/3T-5421.jpg" },
        { id: 1192, name: "4S-5946", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/4S-5946.jpg" },
        { id: 1193, name: "6P-6556", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/6P-6556.jpg" },
        { id: 1194, name: "6P-6927", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/6P-6927.jpg" },
        { id: 1195, name: "6P-7564", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/6P-7564.jpg" },
        { id: 1196, name: "6T-3318-24", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/6T-3318-24.jpg" },
        { id: 1197, name: "6Y-3148", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/6Y-3148.jpg" },
        { id: 1198, name: "7T-4308", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/7T-4308.jpg" },
        { id: 1199, name: "7T-4752", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/7T-4752.jpg" },
        { id: 1200, name: "7T-5525", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/7T-5525.jpg" },
        { id: 1201, name: "7T-9275", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/7T-9275.jpg" },
        { id: 1202, name: "8E-6298-tork", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/8E-6298-tork.jpg" },
        { id: 1203, name: "8F-1600_5X-3534", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/8F-1600_5X-3534.jpg" },
        { id: 1204, name: "8P-0953", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/8P-0953.jpg" },
        { id: 1205, name: "8P-5242", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/8P-5242.jpg" },
        { id: 1206, name: "8P9266", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/8P9266.jpg" },
        { id: 1207, name: "950-B-1T-1735", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/950-B-1T-1735.jpg" },
        { id: 1208, name: "966-S-1T-408", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/966-S-1T-408.jpg" },
        { id: 1209, name: "9G-2413", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9G-2413.jpg" },
        { id: 1210, name: "9P-4889", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9P-4889.jpg" },
        { id: 1211, name: "9P-4890", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9P-4890.jpg" },
        { id: 1212, name: "9P-6476-77---Y", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9P-6476-77---Y.jpg" },
        { id: 1213, name: "9P-9507", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9P-9507.jpg" },
        { id: 1214, name: "9U-9067", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9U-9067.jpg" },
        { id: 1215, name: "9W-1564", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9W-1564.jpg" },
        { id: 1216, name: "9W-1567", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9W-1567.jpg" },
        { id: 1217, name: "9W-5278", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9W-5278.jpg" },
        { id: 1218, name: "9W-6433", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9W-6433.jpg" },
        { id: 1219, name: "219074", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/219074.jpg" },
        { id: 1220, name: "226330-", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/226330-.jpg" },
        { id: 1221, name: "229537", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/229537.jpg" },
        { id: 1222, name: "229585 (1)", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/229585%20(1).jpg" },
        { id: 1223, name: "229585", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/229585.jpg" },
        { id: 1224, name: "230758-ST", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/230758-ST.jpg" },
        { id: 1225, name: "232043", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/232043.jpg" },
        { id: 1226, name: "2342078-Y", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/2342078-Y.jpg" },
        { id: 1227, name: "234238R", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/234238R.jpg" },
        { id: 1228, name: "234503", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/234503.jpg" },
        { id: 1229, name: "235214", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/235214.jpg" },
        { id: 1230, name: "235685-356318", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/235685-356318.jpg" },
        { id: 1231, name: "236275", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/236275.jpg" },
        { id: 1232, name: "236277", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/236277.jpg" },
        { id: 1233, name: "236757", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/236757.jpg" },
        { id: 1234, name: "236758-y", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/236758-y.jpg" },
        { id: 1235, name: "237875", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/237875.jpg" },
        { id: 1236, name: "239774", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/239774.jpg" },
        { id: 1237, name: "254242", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/254242.jpg" },
        { id: 1238, name: "289775", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/289775.jpg" },
        { id: 1239, name: "Chmpion-740", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/Chmpion-740.jpg" },
        { id: 1240, name: "SERIAL-28000", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/SERIAL-28000.jpg" },
        { id: 1241, name: "series--28000", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/series--28000.jpg" },
        { id: 1242, name: "341221-12360", category: "torque", subCategory: "furukawa", image: "/urunler/Tork/Furukawa/341221-12360.jpg" },
        { id: 1243, name: "FR-220", category: "torque", subCategory: "furukawa", image: "/urunler/Tork/Furukawa/FR-220.jpg" },
        { id: 1244, name: "furukaova-230-tork", category: "torque", subCategory: "furukawa", image: "/urunler/Tork/Furukawa/furukaova-230-tork.jpg" },
        { id: 1245, name: "furukoa-230-turbine", category: "torque", subCategory: "furukawa", image: "/urunler/Tork/Furukawa/furukoa-230-turbine.jpg" },
        { id: 1246, name: "furukova-330-tork", category: "torque", subCategory: "furukawa", image: "/urunler/Tork/Furukawa/furukova-330-tork.jpg" },
        { id: 1247, name: "KAW--110", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW--110.jpg" },
        { id: 1248, name: "KAW-110-IMP", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-110-IMP.jpg" },
        { id: 1249, name: "KAW-110-TRBUN", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-110-TRBUN.jpg" },
        { id: 1250, name: "kaw-70-i", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-70-i.jpg" },
        { id: 1251, name: "KAW-70-imp-y", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-70-imp-y.jpg" },
        { id: 1252, name: "KAW-70-T", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-70-T.jpg" },
        { id: 1253, name: "KAW-70", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-70.jpg" },
        { id: 1254, name: "KAW-80-B--imp-y", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-B--imp-y.jpg" },
        { id: 1255, name: "KAW-80-B-T", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-B-T.jpg" },
        { id: 1256, name: "KAW-80-B", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-B.jpg" },
        { id: 1257, name: "KAW-80-Y", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-Y.jpg" },
        { id: 1258, name: "KAW-80-YI", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-YI.jpg" },
        { id: 1259, name: "KAW-80-ZB", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-ZB.jpg" },
        { id: 1260, name: "KAW-80", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80.jpg" },
        { id: 1261, name: "kaw-80b", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-80b.jpg" },
        { id: 1262, name: "kaw-80z5-tork", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-80z5-tork.jpg" },
        { id: 1263, name: "KAW-85-95-a", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-85-95-a.jpg" },
        { id: 1264, name: "KAW-85-95-b", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-85-95-b.jpg" },
        { id: 1265, name: "KAW-85-95-c", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-85-95-c.jpg" },
        { id: 1266, name: "KAW-85-imp-y", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-85-imp-y.jpg" },
        { id: 1267, name: "kaw-85-tork", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-85-tork.jpg" },
        { id: 1268, name: "kaw-85z3-tork", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-85z3-tork.jpg" },
        { id: 1269, name: "KAW-95-2T-4", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-95-2T-4.jpg" },
        { id: 1270, name: "kaw-97-z-i", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-97-z-i.jpg" },
        { id: 1271, name: "kaw-97z-stator", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-97z-stator.jpg" },
        { id: 1272, name: "kaw-97z-turbin", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-97z-turbin.jpg" },
        { id: 1273, name: "YK-1162504501", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/YK-1162504501.jpg" },
        { id: 1274, name: "YK-117110-1001", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/YK-117110-1001.jpg" },
        { id: 1275, name: "YK-1172504600", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/YK-1172504600.jpg" },
        { id: 1276, name: "144-13-00020", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-00020.jpg" },
        { id: 1277, name: "144-13-11522-", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-11522-.jpg" },
        { id: 1278, name: "144-13-1203-D-75", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-1203-D-75.jpg" },
        { id: 1279, name: "144-13-12302-D75 (1)", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-12302-D75%20(1).jpg" },
        { id: 1280, name: "144-13-12302-D75", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-12302-D75.jpg" },
        { id: 1281, name: "144-13-12520-D-65-ESKI-MODEL", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-12520-D-65-ESKI-MODEL.jpg" },
        { id: 1282, name: "144-13-12523-D-65", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-12523-D-65.jpg" },
        { id: 1283, name: "145-13-31122", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/145-13-31122.jpg" },
        { id: 1284, name: "154-13-42110", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/154-13-42110.jpg" },
        { id: 1285, name: "175-13-00300", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/175-13-00300.jpg" },
        { id: 1286, name: "175-13-21005", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/175-13-21005.jpg" },
        { id: 1287, name: "175-13-21124-y", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/175-13-21124-y.jpg" },
        { id: 1288, name: "175-13-21522-Y", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/175-13-21522-Y.jpg" },
        { id: 1289, name: "175-13-620", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/175-13-620.jpg" },
        { id: 1290, name: "195-13-11005", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/195-13-11005.jpg" },
        { id: 1291, name: "195-13-11124-26--Y", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/195-13-11124-26--Y.jpg" },
        { id: 1292, name: "195-13-11522--Y", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/195-13-11522--Y.jpg" },
        { id: 1293, name: "208811", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/208811.jpg" },
        { id: 1294, name: "320-1", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/320-1.jpg" },
        { id: 1295, name: "320-3", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/320-3.jpg" },
        { id: 1296, name: "320-711-52-12110", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/320-711-52-12110.jpg" },
        { id: 1297, name: "420-3", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/420-3.jpg" },
        { id: 1298, name: "420-ST", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/420-ST.jpg" },
        { id: 1299, name: "470-ST", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/470-ST.jpg" },
        { id: 1300, name: "711-14-12110", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-14-12110.jpg" },
        { id: 1301, name: "711-47-31120-03", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-47-31120-03.jpg" },
        { id: 1302, name: "711-49-11120--------04", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-49-11120--------04.jpg" },
        { id: 1303, name: "711-49-11520---------03", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-49-11520---------03.jpg" },
        { id: 1304, name: "711-49-21190-KOMATSU", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-49-21190-KOMATSU.jpg" },
        { id: 1305, name: "711-50-11120", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-50-11120.jpg" },
        { id: 1306, name: "711-50-11520-W-380", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-50-11520-W-380.jpg" },
        { id: 1307, name: "711-50-12110", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-50-12110.jpg" },
        { id: 1308, name: "711-52-11620-HF1-121A--03", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-52-11620-HF1-121A--03.jpg" },
        { id: 1309, name: "711-55-12522", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-55-12522.jpg" },
        { id: 1310, name: "785-", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/785-.jpg" },
        { id: 1311, name: "d-155", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/d-155.jpg" },
        { id: 1312, name: "D-355---", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/D-355---.jpg" },
        { id: 1313, name: "D-355", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/D-355.jpg" },
        { id: 1314, name: "D-75-", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/D-75-.jpg" },
        { id: 1315, name: "d155---_DSC0450", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/d155---_DSC0450.jpg" },
        { id: 1316, name: "d65--_SA17379", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/d65--_SA17379.jpg" },
        { id: 1317, name: "KOMATSU-HUB", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/KOMATSU-HUB.jpg" },
        { id: 1318, name: "_SA17528", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/_SA17528.jpg" },
        { id: 1319, name: "4166305006", category: "torque", subCategory: "volvo", image: "/urunler/Tork/Volvo/4166305006.jpg" },
        { id: 1320, name: "4VG-45", category: "torque", subCategory: "volvo", image: "/urunler/Tork/Volvo/4VG-45.jpg" },
        { id: 1321, name: "621182-1-y", category: "torque", subCategory: "volvo", image: "/urunler/Tork/Volvo/621182-1-y.jpg" },
        { id: 1322, name: "VOLVO-SAFT", category: "torque", subCategory: "volvo", image: "/urunler/Tork/Volvo/VOLVO-SAFT.jpg" },
        { id: 1323, name: "1T-0611", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-0611.jpg" },
        { id: 1324, name: "1T-1045", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-1045.jpg" },
        { id: 1325, name: "1T-1255", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-1255.jpg" },
        { id: 1326, name: "1T-1335", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-1335.jpg" },
        { id: 1327, name: "1T-1440", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-1440.jpg" },
        { id: 1328, name: "1T-1448", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-1448.jpg" },
        { id: 1329, name: "1T-209", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-209.jpg" },
        { id: 1330, name: "1T-910", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-910.jpg" },
        { id: 1331, name: "1T-930", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-930.jpg" },
        { id: 1332, name: "110-5157", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/110-5157.jpg" },
        { id: 1333, name: "161-7055", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/161-7055.jpg" },
        { id: 1334, name: "73058798", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/73058798.jpg" },
        { id: 1335, name: "kaw-70z4-tork", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/kaw-70z4-tork.jpg" },
        { id: 1336, name: "KAW-85-Z-CONTROL-VALVE", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/KAW-85-Z-CONTROL-VALVE.jpg" },
        { id: 1337, name: "komatsu-forklift-torku", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/komatsu-forklift-torku.jpg" },
        { id: 1338, name: "komatsu-forklift-torku2", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/komatsu-forklift-torku2.jpg" },
        { id: 1339, name: "volvo-kamyon-torku", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/volvo-kamyon-torku.jpg" },
        { id: 1340, name: "159-8168", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/159-8168.jpg" },
        { id: 1341, name: "159-8169", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/159-8169.jpg" },
        { id: 1342, name: "2P-5752", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/2P-5752.jpg" },
        { id: 1343, name: "2V-7092", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/2V-7092.jpg" },
        { id: 1344, name: "2W-2895", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/2W-2895.jpg" },
        { id: 1345, name: "3P2768", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3P2768.jpg" },
        { id: 1346, name: "3T-3057", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3T-3057.jpg" },
        { id: 1347, name: "3T-4224", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3T-4224.jpg" },
        { id: 1348, name: "3T-4410", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3T-4410.jpg" },
        { id: 1349, name: "3V-4046", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3V-4046.jpg" },
        { id: 1350, name: "3W-5424", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3W-5424.jpg" },
        { id: 1351, name: "4T-9311", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/4T-9311.jpg" },
        { id: 1352, name: "5M-8003", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/5M-8003.jpg" },
        { id: 1353, name: "5S-7887", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/5S-7887.jpg" },
        { id: 1354, name: "6-G-6241", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6-G-6241.jpg" },
        { id: 1355, name: "6G-1538", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6G-1538.jpg" },
        { id: 1356, name: "6G-1541", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6G-1541.jpg" },
        { id: 1357, name: "6G-5532", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6G-5532.jpg" },
        { id: 1358, name: "6G-5533", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6G-5533.jpg" },
        { id: 1359, name: "6G-5842", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6G-5842.jpg" },
        { id: 1360, name: "6S-9666", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6S-9666.jpg" },
        { id: 1361, name: "6T-1706", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6T-1706.jpg" },
        { id: 1362, name: "6T-3009", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6T-3009.jpg" },
        { id: 1363, name: "6W3620", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6W3620.jpg" },
        { id: 1364, name: "6y-4819", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6y-4819.jpg" },
        { id: 1365, name: "7f-6269", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7f-6269.jpg" },
        { id: 1366, name: "7G--7724", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G--7724.jpg" },
        { id: 1367, name: "7G-3708", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-3708.jpg" },
        { id: 1368, name: "7G-3713", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-3713.jpg" },
        { id: 1369, name: "7G-4306", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-4306.jpg" },
        { id: 1370, name: "7G-4311", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-4311.jpg" },
        { id: 1371, name: "7G-5393", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-5393.jpg" },
        { id: 1372, name: "7G-5444", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-5444.jpg" },
        { id: 1373, name: "7G-5622", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-5622.jpg" },
        { id: 1374, name: "7S-3034", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7S-3034.jpg" },
        { id: 1375, name: "7S-4493", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7S-4493.jpg" },
        { id: 1376, name: "7T-3950", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7T-3950.jpg" },
        { id: 1377, name: "7V-4189", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7V-4189.jpg" },
        { id: 1378, name: "8D-5344", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8D-5344.jpg" },
        { id: 1379, name: "8D-7890", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8D-7890.jpg" },
        { id: 1380, name: "8E-1707", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8E-1707.jpg" },
        { id: 1381, name: "8E-7447", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8E-7447.jpg" },
        { id: 1382, name: "8E-7986", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8E-7986.jpg" },
        { id: 1383, name: "8K-2685", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8K-2685.jpg" },
        { id: 1384, name: "8N-6184", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8N-6184.jpg" },
        { id: 1385, name: "8P-0026", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8P-0026.jpg" },
        { id: 1386, name: "8P-7787-Y", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8P-7787-Y.jpg" },
        { id: 1387, name: "8P-9507", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8P-9507.jpg" },
        { id: 1388, name: "8T-2523", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8T-2523.jpg" },
        { id: 1389, name: "8w-8147", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8w-8147.jpg" },
        { id: 1390, name: "9d-5746", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9d-5746.jpg" },
        { id: 1391, name: "9G-1918", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9G-1918.jpg" },
        { id: 1392, name: "9G-281", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9G-281.jpg" },
        { id: 1393, name: "9G-290", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9G-290.jpg" },
        { id: 1394, name: "9G-5842", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9G-5842.jpg" },
        { id: 1395, name: "9P-3229", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9P-3229.jpg" },
        { id: 1396, name: "9P-3471", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9P-3471.jpg" },
        { id: 1397, name: "9P-8521", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9P-8521.jpg" },
        { id: 1398, name: "9P-8614", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9P-8614.jpg" },
        { id: 1399, name: "9P-8626", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9P-8626.jpg" },
        { id: 1400, name: "9W-2976", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9W-2976.jpg" },
        { id: 1401, name: "9W-6099", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9W-6099.jpg" },
        { id: 1402, name: "9W-7481", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9W-7481.jpg" },
        { id: 1403, name: "9W-7889", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9W-7889.jpg" },
        { id: 1404, name: "9W-9396", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9W-9396.jpg" },
        { id: 1405, name: "kaw-105-m.k.p", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-105-m.k.p.jpg" },
        { id: 1406, name: "kaw-70-24-yoke", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-70-24-yoke.jpg" },
        { id: 1407, name: "kaw-70-piston", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-70-piston.jpg" },
        { id: 1408, name: "KAW-70-PMP-SAFT", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/KAW-70-PMP-SAFT.jpg" },
        { id: 1409, name: "KAW-70-tekerlek-carrier", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/KAW-70-tekerlek-carrier.jpg" },
        { id: 1410, name: "kaw-70-tekerlek", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-70-tekerlek.jpg" },
        { id: 1411, name: "KAW-80-B_1", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/KAW-80-B_1.jpg" },
        { id: 1412, name: "kaw-80-drum", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-80-drum.jpg" },
        { id: 1413, name: "kaw-80-piston", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-80-piston.jpg" },
        { id: 1414, name: "kaw-80b-15cm-drum", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-80b-15cm-drum.jpg" },
        { id: 1415, name: "kaw-80b-kisa_drum", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-80b-kisa_drum.jpg" },
        { id: 1416, name: "kaw-80b-piston", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-80b-piston.jpg" },
        { id: 1417, name: "KAW-85-HOUSING-", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/KAW-85-HOUSING-.jpg" },
        { id: 1418, name: "kaw-85-shaft", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-85-shaft.jpg" },
        { id: 1419, name: "KAW-85-SU-MANIFOLT", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/KAW-85-SU-MANIFOLT.jpg" },
        { id: 1420, name: "kaw-85-su-manifoltu", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-85-su-manifoltu.jpg" },
        { id: 1421, name: "kaw-8523-fren-pistonu", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-8523-fren-pistonu.jpg" },
        { id: 1422, name: "kaw-85s.c.t", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-85s.c.t.jpg" },
        { id: 1423, name: "kaw-8s-diferansiyel", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-8s-diferansiyel.jpg" },
        { id: 1424, name: "kaw-8s-z4-yoke", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-8s-z4-yoke.jpg" },
        { id: 1425, name: "kaw-90-z-fren-pistonu", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-90-z-fren-pistonu.jpg" },
        { id: 1426, name: "kaw-9s-z4-yoke", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-9s-z4-yoke.jpg" },
        { id: 1427, name: "YK-1188031503", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/YK-1188031503.jpg" },
        { id: 1428, name: "YK-1188031603", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/YK-1188031603.jpg" },
        { id: 1429, name: "175-24-31233", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/175-24-31233.jpg" },
        { id: 1430, name: "178-15---13240-5", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/178-15---13240-5.jpg" },
        { id: 1431, name: "205-00-71440", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/205-00-71440.jpg" },
        { id: 1432, name: "424-15-11130", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/424-15-11130.jpg" },
        { id: 1433, name: "424-15-11181", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/424-15-11181.jpg" },
        { id: 1434, name: "6127-61-2113BCD", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/6127-61-2113BCD.jpg" },
        { id: 1435, name: "komatsu-110-m.k.p", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/komatsu-110-m.k.p.jpg" }
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
      corporateTitle: 'CORPORATE',
      certificatesTitle: 'CERTIFICATES',
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
    machinery: {
      hero: {
        tag: 'TECHNOLOGICAL INFRASTRUCTURE',
        title: 'MODERN',
        highlight: 'MACHINE PARK',
        desc: 'We minimize the margin of error with the latest technology CNC machines and precision processing equipment we use in our production processes.'
      },
      ui: {
        viewDetails: 'View Details',
        techSpecs: 'Technical Specifications',
        close: 'Close',
      },
      items: [
        {
          title: 'VICTOR V-TURN 36',
          desc: 'Heavy-duty CNC lathe offering high torque and precision. Equipped with C-axis and live tooling for milling capabilities.',
          image: '/urunler/MakineParkuru/VICTOR_V_TURN36.jpg',
          specs: ['36 inch Diameter', 'C-Axis', 'Live Tooling'],
          details: [
            {
              group: 'GENERAL INFORMATION',
              items: [
                { label: 'Brand / Model', value: 'Victor V-TURN 36' },
                { label: 'Year of Manufacture', value: '2004' },
                { label: 'Machine Type', value: 'CNC Horizontal Lathe + Milling' },
                { label: 'Manufacturer', value: 'Victor Taichung (Taiwan)' },
                { label: 'Configuration', value: 'C-axis + Live Tooling' }
              ]
            },
            {
              group: 'SPINDLE & C-AXIS',
              items: [
                { label: 'Max Spindle Speed', value: '2500 rpm' },
                { label: 'Motor Power', value: '22 kW' },
                { label: 'C-Axis Positioning', value: 'Continuous 360°' },
                { label: 'Resolution', value: '0.001°' }
              ]
            },
            {
              group: 'LIVE TOOLING',
              items: [
                { label: 'Turret Station', value: '10-12 Positions' },
                { label: 'Live Tool Speed', value: '3000-4000 rpm' },
                { label: 'Motor Power', value: '5.5 kW' }
              ]
            },
            {
              group: 'MACHINING CAPACITY',
              items: [
                { label: 'Max Turning Diameter', value: '550 mm' },
                { label: 'Distance Between Centers', value: '855 mm' },
                { label: 'X-Axis Stroke', value: '305 mm' },
                { label: 'Z-Axis Stroke', value: '855 mm' }
              ]
            },
            {
              group: 'PHYSICAL PROPERTIES',
              items: [
                { label: 'Machine Weight', value: '9,000 kg' },
                { label: 'Dimensions', value: '4700 × 2000 × 2200 mm' }
              ]
            }
          ]
        },
        {
          title: 'SPINNER TC-600',
          desc: 'High-precision universal lathe.',
          image: '/urunler/MakineParkuru/SPINNER_TC600.png',
          specs: ['High Precision', 'Superior Surface Quality', 'Compact Design'],
          details: [
            {
              group: 'GENERAL SPECIFICATIONS',
              items: [
                { label: 'Turning Diameter', value: '400 mm' },
                { label: 'Turning Length', value: '650 mm' },
                { label: 'Bar Capacity', value: '65 mm' }
              ]
            },
            {
              group: 'AXIS TRAVELS',
              items: [
                { label: 'X-Axis Stroke (Contour)', value: '275 mm' },
                { label: 'Y-Axis Stroke', value: '90 mm' },
                { label: 'Z-Axis Stroke', value: '700 mm' }
              ]
            },
            {
              group: 'SPINDLE & TOOLING',
              items: [
                { label: 'Max Spindle Speed', value: '5,000 RPM' },
                { label: 'Driven Tool Positions', value: '16' }
              ]
            }
          ]
        },
        {
          title: 'HWACHEAN H-TECH 300',
          desc: 'Efficient turning center equipped with modern technology.',
          image: '/urunler/MakineParkuru/HWACHEAN_H-TECH300.jpg',
          specs: ['High Speed', 'Thermal Stability', 'Easy Operation'],
          details: [
            {
              group: 'CAPACITY & DIMENSIONS',
              items: [
                { label: 'Bar Capacity', value: '76 mm' },
                { label: 'Chuck Size', value: '315 mm (12")' },
                { label: 'Max. Cutting Dia.', value: '380 mm' },
                { label: 'Max. Cutting Length', value: '800 mm' },
                { label: 'Swing', value: '600 mm' }
              ]
            },
            {
              group: 'SPINDLE & TURRET',
              items: [
                { label: 'Spindle Motor Power', value: '22 / 18.5 kW' },
                { label: 'Spindle Speed', value: '3200 RPM' },
                { label: 'Spindle Nose', value: 'A2-8' },
                { label: 'Turret Positions', value: '12 Stations' },
                { label: 'Tool Configuration', value: 'VDI40' }
              ]
            },
            {
              group: 'MILLING & AXIS',
              items: [
                { label: 'Milling Motor Power', value: '7.5 / 5.5 kW' },
                { label: 'Milling Speed', value: '4000 RPM' },
                { label: 'Rapid Traverse', value: '20 m/min' }
              ]
            },
            {
              group: 'TAILSTOCK & PHYSICAL',
              items: [
                { label: 'Tailstock Quill Stroke', value: '120 mm' },
                { label: 'Tailstock Taper', value: 'MT #5' },
                { label: 'Dimensions', value: '3300×1960×2150 mm' },
                { label: 'Weight', value: '8500 kg' }
              ]
            }
          ]
        },
        {
          title: 'DOOSAN PUMA 240-C',
          desc: 'Reliable and powerful lathe for critical part production.',
          image: '/urunler/MakineParkuru/DOOSAN_PUMA240-C.png',
          specs: ['Wide Machining Capacity', 'Rigid Structure', 'Performance Oriented'],
          details: [
            {
              group: 'GENERAL & WORKING DIMENSIONS',
              items: [
                { label: 'Max Turning Length', value: '513 mm' },
                { label: 'Max Turning Diameter', value: '300 mm' },
                { label: 'Max Turning Dia. over Bed', value: '550 mm' },
                { label: 'Diameter above Transversing Slide', value: '390 mm' },
                { label: 'Distance Between Centers', value: '501 mm' }
              ]
            },
            {
              group: 'AXIS & CONTROL',
              items: [
                { label: 'CNC Type', value: 'FANUC' },
                { label: 'X-Axis Travel', value: '205 mm' },
                { label: 'Z-Axis Travel', value: '580 mm' }
              ]
            },
            {
              group: 'SPINDLE & TURRET',
              items: [
                { label: 'Spindle Bore Diameter', value: '88.9 mm' },
                { label: 'Spindle Speed', value: '4500 RPM' },
                { label: 'Spindle Motor Power', value: '15 kW' },
                { label: 'Number of Turrets', value: '1' },
                { label: 'Turret Stations', value: '12' },
                { label: 'Rotating Tools', value: '12' }
              ]
            },
            {
              group: 'PHYSICAL PROPERTIES',
              items: [
                { label: 'Dimensions (L x W x H)', value: '3997.0 × 1592.0 × 1740.0 mm' },
                { label: 'Weight', value: '4140 kg' }
              ]
            }
          ]
        },
        {
          title: 'YOUJI YV 600',
          desc: 'Vertical lathe for large diameter parts.',
          image: '/urunler/MakineParkuru/YOUJI_YV600.png',
          specs: ['Vertical Machining', 'Large Diameter Capacity', 'Stable Cutting'],
          details: [
            {
              group: 'GENERAL INFO',
              items: [
                { label: 'Model', value: 'YV-600 ATC-C (2013)' },
                { label: 'Control', value: 'Fanuc OiT-D' },
                { label: 'Machine Weight', value: '34,000 lbs' },
                { label: 'Floor Space', value: '141"x83"x130"' }
              ]
            },
            {
              group: 'CAPACITY',
              items: [
                { label: 'Max. Swing Dia.', value: '33.5"' },
                { label: 'Max. Turning Dia.', value: '33.5"' },
                { label: 'Max. Cutting Height', value: '25.6"' },
                { label: 'Chuck Size', value: '24" Hydraulic' }
              ]
            },
            {
              group: 'SPINDLE & AXIS',
              items: [
                { label: 'Spindle Motor', value: '30 HP' },
                { label: 'Spindle Speed', value: '1,500 RPM' },
                { label: 'Spindle Taper / Nose', value: '#7 MT / A2-11"' },
                { label: 'X/Z Axis Travel', value: '-1.97"~+22.4" / 31.5"' },
                { label: 'Rapid Traverse', value: '787 ipm' },
                { label: 'C Axis', value: '0.001°' }
              ]
            },
            {
              group: 'LIVE TOOLING',
              items: [
                { label: 'Magazine Cap.', value: '12 ATC' },
                { label: 'Live Tool Speed', value: '2,400 RPM / 10HP' },
                { label: 'Spindle Taper', value: '#50' }
              ]
            }
          ]
        },
        {
          title: 'MAKINO A77',
          desc: 'Horizontal machining center, high performance in mass production.',
          image: '/urunler/MakineParkuru/MAKINO_A77.jpg',
          specs: ['Horizontal Machining', 'High Speed', 'Automatic Pallet Changer'],
          details: [
            {
              group: 'GENERAL & AXIS TRAVEL',
              items: [
                { label: 'Control', value: 'Fanuc PRO-3' },
                { label: 'X / Y / Z Axis', value: '800 / 750 / 770 mm' },
                { label: 'Rapid Traverse', value: '35 m/min' }
              ]
            },
            {
              group: 'SPINDLE & TOOLING',
              items: [
                { label: 'Speed Range', value: '10,000 RPM' },
                { label: 'Power Cap.', value: '30 kW' },
                { label: 'Tool Taper', value: 'HSK 100' },
                { label: 'Tool Changer', value: '90 Positions' },
                { label: 'Coolant Thru Spindle', value: '70 bar' }
              ]
            },
            {
              group: 'PALLET & TABLE',
              items: [
                { label: 'Pallet Size', value: '630 x 630 mm' },
                { label: 'Table Load', value: '1200 kg' },
                { label: 'Pallet Changer', value: '2 Types' },
                { label: 'Rotary Table Tilt', value: '1 Degree' }
              ]
            },
            {
              group: 'PHYSICAL PROPERTIES',
              items: [
                { label: 'Weight', value: '15 Ton' }
              ]
            }
          ]
        },
        {
          title: 'MAZAK NEXUS 350M',
          desc: 'Advanced turning center with milling capability.',
          image: '/urunler/MakineParkuru/MAZAK_NEXUS 350M.jpg',
          specs: ['Live Tooling', 'High Efficiency', 'M-Series'],
          details: [
            {
              group: 'MAIN SPINDLE',
              items: [
                { label: 'Spindle Power / Speed', value: '30 kW / 3,300 RPM' },
                { label: 'Max. Bar Dia.', value: '102 mm' },
                { label: 'Max. Turn Dia.', value: '420 mm' },
                { label: 'Max. Swing Dia.', value: '750 mm' },
                { label: 'Spindle Nose', value: 'A2-8' },
                { label: 'C Axis Index', value: '0.001°' }
              ]
            },
            {
              group: 'TURRET & LIVE TOOLING',
              items: [
                { label: 'Positions', value: '12 / 12 (Motorized)' },
                { label: 'X/Z Stroke', value: '260 / 1605 mm' },
                { label: 'Tool Type', value: 'VDI 50' },
                { label: 'Live Tool Speed', value: '25-4000 RPM / 7.5kW' }
              ]
            },
            {
              group: 'TAILSTOCK & POWER',
              items: [
                { label: 'Tailstock Type / Taper', value: 'Numérique / CM4' },
                { label: 'Distance Bet. Centers', value: '1,500 mm' },
                { label: 'Power Supply', value: '400V / 55kVA' }
              ]
            },
            {
              group: 'WEIGHT & DIMS',
              items: [
                { label: 'Floor Space', value: '4,270 x 2,050 mm' },
                { label: 'Height', value: '2,000 mm' },
                { label: 'Weight', value: '7,500 kg' }
              ]
            }
          ]
        },
        {
          title: 'Mazak QT25',
          desc: 'Quick Turn series, ideal for fast and precise parts.',
          image: '/urunler/MakineParkuru/Mazak_QT25.jpg',
          specs: ['Fast Cycle', 'Precise Machining', 'Reliability'],
          details: [
            {
              group: 'GENERAL & CAPACITY',
              items: [
                { label: 'Control', value: 'MAZATROL T2' },
                { label: 'Chuck', value: '10″ Hydraulic' },
                { label: 'Max. Swing / Turn Dia.', value: '510 mm / 320 mm' },
                { label: 'Max. Turn Length', value: '1010 mm' },
                { label: 'Bar Capacity', value: '70 mm' }
              ]
            },
            {
              group: 'SPINDLE & AXIS',
              items: [
                { label: 'Power', value: '18 kW' },
                { label: 'Spindle Nose / Bore', value: 'A2-8 / 80 mm' },
                { label: 'Spindle Speed', value: '30 – 3000 RPM' },
                { label: 'X / Z Axis Travel', value: '200 mm / 1018 mm' }
              ]
            },
            {
              group: 'TURRET & TAILSTOCK',
              items: [
                { label: 'Turret', value: '16 Stations' },
                { label: 'Rapid Traverse X/Z', value: '12000/24000 mm/min' },
                { label: 'Spindle / Tailstock Trv.', value: '130 mm / 32.9 mm' }
              ]
            },
            {
              group: 'PHYSICAL PROPERTIES',
              items: [
                { label: 'Dimensions (LxWxH)', value: '3250 × 1800 × 1850 mm' },
                { label: 'Weight', value: '4600 kg' }
              ]
            }
          ]
        },
        {
          title: 'Mazak QT28',
          desc: 'High performance Quick Turn series with expanded capacity.',
          image: '/urunler/MakineParkuru/MAZAK_QT28.jpg',
          specs: ['Extra Capacity', 'Rigid Body', 'Mazatrol Control'],
          details: [
            {
              group: 'CAPACITY',
              items: [
                { label: 'Turn Diameter', value: '310 mm' },
                { label: 'Swing Diameter', value: '510 mm' },
                { label: 'Turn Length', value: '1010 mm' },
                { label: 'Bar Diameter', value: '70 mm' }
              ]
            },
            {
              group: 'TRAVEL & CONTROL',
              items: [
                { label: 'Control', value: 'Mazatrol T32-2' },
                { label: 'X/Z Travel', value: '265 mm / 1020 mm' },
                { label: 'Rapid Traverse X/Z', value: '18 / 24 m/min' }
              ]
            },
            {
              group: 'SPINDLE & TURRET',
              items: [
                { label: 'Spindle Speed', value: '30-3000 RPM' },
                { label: 'Turret Stations', value: '12 (2x6)' }
              ]
            },
            {
              group: 'PHYSICAL PROPERTIES',
              items: [
                { label: 'Total Power Req.', value: '41 kVA' },
                { label: 'Dimensions', value: '3.6 × 2.0 × 2.0 m' },
                { label: 'Weight', value: '6.3 Ton' }
              ]
            }
          ]
        },
        {
          title: 'HARDINGE VMC 1000II',
          desc: 'Vertical machining center offering high stability even at high speeds.',
          image: '/urunler/MakineParkuru/HARDINGE_VMC_1000II.jpg',
          specs: ['Vertical Machining', '1000mm Table', 'High RPM'],
          details: [
            {
              group: 'General & Table',
              items: [
                { label: 'CNC Controller', value: 'Siemens 810' },
                { label: 'Table Length x Width', value: '1200 x 450 mm' },
                { label: 'Max Workpiece Weight', value: '700 kg' },
                { label: 'Rotary Table (4th axis)', value: 'No' }
              ]
            },
            {
              group: 'Travel',
              items: [
                { label: 'X-Axis Travel', value: '1000 mm' },
                { label: 'Y-Axis Travel', value: '510 mm' },
                { label: 'Z-Axis Travel', value: '510 mm' }
              ]
            },
            {
              group: 'Spindle & Tooling',
              items: [
                { label: 'Spindle Taper', value: 'BT40' },
                { label: 'Max Spindle Speed', value: '8000 rpm' },
                { label: 'Spindle Motor Power', value: '13 kW' },
                { label: 'Tool Magazine', value: '20 Positions' }
              ]
            },
            {
              group: 'Physical Data',
              items: [
                { label: 'Dimensions (LxWxH)', value: '2768 x 2184 x 2565 mm' },
                { label: 'Weight', value: '4640 kg' }
              ]
            }
          ]
        },
        {
          title: 'SPINNER U1520',
          desc: 'Universal 5-axis machining center for complex geometries.',
          image: '/urunler/MakineParkuru/SPINNER_U1520.jpg',
          specs: ['5-Axis', 'Complex Part Machining', 'Wide Work Area'],
          details: [
            {
              group: 'GENERAL INFO',
              items: [
                { label: 'Model Year / Hours', value: '2013 / 5000 h' },
                { label: 'Control', value: 'Siemens Sinumerik' },
                { label: 'Axis Config.', value: '5 Axis (4 Cont.+1)' }
              ]
            },
            {
              group: 'SPINDLE & AXIS',
              items: [
                { label: 'Spindle Speed', value: '12000 RPM' },
                { label: 'X / Y / Z Axis', value: '1500 / 500 / 600 mm' }
              ]
            },
            {
              group: 'TOOLING & TABLE',
              items: [
                { label: 'Tool Holder', value: 'SK40, 40 BT/ISO/HSK' },
                { label: 'Tool Capacity', value: '32 Tools' },
                { label: 'Table – Pallet', value: '650 mm Dia.' }
              ]
            },
            {
              group: 'COOLING & PRESSURE',
              items: [
                { label: 'Coolant Thru Spindle', value: 'Yes (80 Bar)' },
                { label: 'Air Thru Spindle', value: 'Yes' }
              ]
            }
          ]
        },
        {
          title: 'JUNKER EJ29',
          desc: 'Perfect surface quality with precision grinding solutions.',
          image: '/urunler/MakineParkuru/JUNKER_EJ29.jpg',
          specs: ['Precision Grinding', 'Scalability', 'German Technology'],
          details: [
            {
              group: 'GENERAL INFO',
              items: [
                { label: 'Year of Mfg.', value: '2002' },
                { label: 'Machine Type', value: 'Cylindrical Grinding' },
                { label: 'Control', value: 'FANUC 21i-T' }
              ]
            },
            {
              group: 'CAPACITY & FEATURES',
              items: [
                { label: 'Grinding Wheel Dia.', value: '400 mm' },
                { label: 'Max. Grinding Dia.', value: '280 mm' },
                { label: 'Max. Grinding Length', value: '600 mm' },
                { label: 'Spindle Speed', value: '1000 RPM' },
                { label: 'Motor Power', value: '4.5 kW' }
              ]
            },
            {
              group: 'PHYSICAL PROPERTIES',
              items: [
                { label: 'Dimensions (LxWxH)', value: '3340 × 1960 × 2050 mm' },
                { label: 'Weight', value: '5000 kg' }
              ]
            }
          ]
        },
        {
          title: 'ABERLINK HALO L2000',
          desc: 'Quality control assurance with advanced CMM measurement device.',
          image: '/urunler/MakineParkuru/ABERLINK_HALO_L2000.png',
          specs: ['3D Measurement', 'High Accuracy', 'Fast Reporting'],
          details: [
            {
              group: 'Travel & Dimensions (Halo L)',
              items: [
                { label: 'Axis Travel (X/Y/Z)', value: '1000 / 1200, 2000 / 800 mm' },
                { label: 'Total Dimensions (X/Y/Z)', value: '1603 / 1830, 2630 / 2987, 3037 mm' },
                { label: 'Table Load Capacity', value: '1000 kg' },
                { label: 'Table Construction', value: 'Solid Granite' }
              ]
            },
            {
              group: 'Performance & Accuracy',
              items: [
                { label: 'Scale Resolution', value: '0.1 µm' },
                { label: 'Max Speed Vector', value: '1000 mm/sec' },
                { label: 'Max Acceleration Vector', value: '1000 mm/sec²' },
                { label: 'Volumetric Accuracy', value: 'TP20: 2.1µm + L/250mm' }
              ]
            },
            {
              group: 'Operating Conditions',
              items: [
                { label: 'Structure / Control', value: 'Bridge / CNC' },
                { label: 'Air Pressure Required', value: '7 bar (100 psi) - 100 l/min' },
                { label: 'Operating Temp Range', value: '5 - 45°C (Opt. 18-22°C)' },
                { label: 'Environment', value: 'Control Room / Production Environment' }
              ]
            }
          ]
        }
      ]
    },
    whatsapp: 'WhatsApp Support',
  },
  ru: {
    nav: {
      home: 'Главная',
      corporate: 'Корпоративный',
      services: 'Услуги',
      catalog: 'Каталог',
      certificates: 'Сертификаты',
      watermark: 'ОПЫТ, СТАБИЛЬНОСТЬ, БЕСПЕРЕБОЙНОЕ ПРОИЗВОДСТВО',
      informationSecurity: 'Информационная Безопасность',
      qualityCertificates: 'Политика Качества и Сертификаты',
      products: 'Продукция',
      about: 'О нас',
      production: 'Наше производство',
      quality: 'Контроль качества',
      integratedPolicy: 'Интегрированная политика управления',
      qualityManagement: 'Система менеджмента качества',
      environmentalManagement: 'Система экологического менеджмента',
      ohsManagement: 'Система менеджмента ОТ и ТБ',
      contact: 'Контакты',
      getQuote: 'ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ',
      partsProduction: 'ПРОИЗВОДСТВО ЗАПЧАСТЕЙ',
      machinery: 'Станочный парк',
      machineryModels: [
        'VICTOR V-TURN 36', 'SPINNER TC-600', 'HWACHEAN H-TECH 300', 
        'DOOSAN PUMA 240-C', 'YOUJI YV 600', 'MAKINO A77', 
        'MAZAK NEXUS 350M', 'Mazak QT25', 'Mazak QT28', 
        'HARDINGE VMC 1000II', 'SPINNER U1520', 'JUNKER EJ29', 
        'ABERLINK HALO L2000'
      ],
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
        desc: 'Обладая почти полувековым опытом работы в отрасли и командой экспертов, мы применяем комплексный, бесперебойный подход к обслуживанию: от производства до маркетинга, от продаж до послепродажной технической поддержки. Более 2500 наименований высококачественных запасных частей, тщательно обработанных на наших производственных линиях, оснащенных по последнему слову техники, мы поставляем не только на внутренний рынок, но и нашим партнерам по всему миру с соблюдением единых высоких стандартов качества. Ставя во главу угла инновации и надежность, мы мастерски производим каждую деталь, лежащую в основе тяжелой техники, укрепляя мощь мировой индустрии.',
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
      subCategoryLabel: 'ПОДКАТЕГОРИЯ:',
      clearFilter: 'ОЧИСТИТЬ',
      noProducts: 'ТОВАРЫ В ЭТОЙ КАТЕГОРИИ НЕ НАЙДЕНЫ',
      cta: {
        title: 'ИНДИВИДУАЛЬНОЕ ПРОИЗВОДСТВО',
        desc: 'Благодаря нашей широкой складской сети, состоящей из тысяч деталей, и нашей базе технических чертежей, мы можем изготовить любые специальные детали, которые вам необходимы.',
        button: 'ПОЛУЧИТЬ ТЕХПОДДЕРЖКУ',
      },
      items: [
        { id: 1001, name: "7T-8001", category: "final-drive", image: "/urunler/Cer%20Grubu/7T-8001.jpg" },
        { id: 1002, name: "8E-4281", category: "final-drive", image: "/urunler/Cer%20Grubu/8E-4281.jpg" },
        { id: 1003, name: "AYNA-MAHRUTI", category: "final-drive", image: "/urunler/Cer%20Grubu/AYNA-MAHRUTI.jpg" },
        { id: 1004, name: "D-8", category: "final-drive", image: "/urunler/Cer%20Grubu/D-8.jpg" },
        { id: 1005, name: "SA2_5898", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5898.jpg" },
        { id: 1006, name: "SA2_5899", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5899.jpg" },
        { id: 1007, name: "SA2_5902", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5902.jpg" },
        { id: 1008, name: "SA2_5903", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5903.jpg" },
        { id: 1009, name: "SA2_5914", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5914.jpg" },
        { id: 1010, name: "SA2_5919", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5919.jpg" },
        { id: 1011, name: "SA2_5920", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5920.jpg" },
        { id: 1012, name: "SA2_5934", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5934.jpg" },
        { id: 1013, name: "SA2_5944", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5944.jpg" },
        { id: 1014, name: "SA2_5949", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5949.jpg" },
        { id: 1015, name: "SA2_5953_1", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5953_1.jpg" },
        { id: 1016, name: "SA2_5956", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5956.jpg" },
        { id: 1017, name: "SA2_5957", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5957.jpg" },
        { id: 1018, name: "SA2_5976", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5976.jpg" },
        { id: 1019, name: "SA2_5981", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5981.jpg" },
        { id: 1020, name: "SA2_5984", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5984.jpg" },
        { id: 1021, name: "SA2_5993", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5993.jpg" },
        { id: 1022, name: "SA2_5994", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5994.jpg" },
        { id: 1023, name: "SA2_6006", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6006.jpg" },
        { id: 1024, name: "SA2_6015", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6015.jpg" },
        { id: 1025, name: "SA2_6017", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6017.jpg" },
        { id: 1026, name: "SA2_6018", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6018.jpg" },
        { id: 1027, name: "SA2_6023", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6023.jpg" },
        { id: 1028, name: "SA2_6024", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6024.jpg" },
        { id: 1029, name: "volvo-3602", category: "final-drive", image: "/urunler/Cer%20Grubu/volvo-3602.jpg" },
        { id: 1030, name: "zp-280", category: "final-drive", image: "/urunler/Cer%20Grubu/zp-280.jpg" },
        { id: 1031, name: "6880125-23018418", category: "pump", subCategory: "allisson", image: "/urunler/Pompa/Allisson/6880125-23018418.jpg" },
        { id: 1032, name: "73058801-645-P", category: "pump", subCategory: "allisson", image: "/urunler/Pompa/Allisson/73058801-645-P.jpg" },
        { id: 1033, name: "745-FR-20", category: "pump", subCategory: "allisson", image: "/urunler/Pompa/Allisson/745-FR-20.jpg" },
        { id: 1034, name: "1360529", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/1360529.jpg" },
        { id: 1035, name: "241-8686", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/241-8686.jpg" },
        { id: 1036, name: "292-9964", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/292-9964.jpg" },
        { id: 1037, name: "293645", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/293645.jpg" },
        { id: 1038, name: "3G-9891", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/3G-9891.jpg" },
        { id: 1039, name: "6I3524", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/6I3524.jpg" },
        { id: 1040, name: "6Y-8764", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/6Y-8764.jpg" },
        { id: 1041, name: "7G-4856-950-B", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/7G-4856-950-B.jpg" },
        { id: 1042, name: "8J-1383", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/8J-1383.jpg" },
        { id: 1043, name: "cat-pompa", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/cat-pompa.jpg" },
        { id: 1044, name: "KAW-70-KISABOY", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/KAW-70-KISABOY.jpg" },
        { id: 1045, name: "235045", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/235045.jpg" },
        { id: 1046, name: "238111", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/238111.jpg" },
        { id: 1047, name: "238131", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/238131.jpg" },
        { id: 1048, name: "450230", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/450230.jpg" },
        { id: 1049, name: "455872", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/455872.jpg" },
        { id: 1050, name: "CLARK-FORKLIFT-POMPASI", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/CLARK-FORKLIFT-POMPASI.jpg" },
        { id: 1051, name: "D58190", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/D58190.jpg" },
        { id: 1052, name: "furukova-230-direksiyon", category: "pump", subCategory: "furukawa", image: "/urunler/Pompa/Furukawa/furukova-230-direksiyon.jpg" },
        { id: 1053, name: "furukova-230-hidrolik", category: "pump", subCategory: "furukawa", image: "/urunler/Pompa/Furukawa/furukova-230-hidrolik.jpg" },
        { id: 1054, name: "furukova-230", category: "pump", subCategory: "furukawa", image: "/urunler/Pompa/Furukawa/furukova-230.jpg" },
        { id: 1055, name: "30725-20030_KAW-95", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/30725-20030_KAW-95.jpg" },
        { id: 1056, name: "705-56-34040", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/705-56-34040.jpg" },
        { id: 1057, name: "KAW-70-TRANSMISION", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-70-TRANSMISION.jpg" },
        { id: 1058, name: "kaw-70z-1h", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/kaw-70z-1h.jpg" },
        { id: 1059, name: "KAW-70_1", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-70_1.jpg" },
        { id: 1060, name: "KAW-80", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-80.jpg" },
        { id: 1061, name: "KAW-8025_", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-8025_.jpg" },
        { id: 1062, name: "KAW-85-TEK-KADEME", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-85-TEK-KADEME.jpg" },
        { id: 1063, name: "KAW-85-YURUYUS", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-85-YURUYUS.jpg" },
        { id: 1064, name: "KAW-85-Z11", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-85-Z11.jpg" },
        { id: 1065, name: "kaw-85Z5", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/kaw-85Z5.jpg" },
        { id: 1066, name: "kaw-90Z", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/kaw-90Z.jpg" },
        { id: 1067, name: "KAW-95211_", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-95211_.jpg" },
        { id: 1068, name: "kaw-95z5", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/kaw-95z5.jpg" },
        { id: 1069, name: "kaw-95ZV", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/kaw-95ZV.jpg" },
        { id: 1070, name: "07432-71203", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/07432-71203.jpg" },
        { id: 1071, name: "07446-66104", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/07446-66104.jpg" },
        { id: 1072, name: "175-13-23500", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/175-13-23500.jpg" },
        { id: 1073, name: "785-TRUCK", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/785-TRUCK.jpg" },
        { id: 1074, name: "D-155-CARTER-", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/D-155-CARTER-.jpg" },
        { id: 1075, name: "D155-c-k-p", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/D155-c-k-p.jpg" },
        { id: 1076, name: "fd-70-SA2_6887", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/fd-70-SA2_6887.jpg" },
        { id: 1077, name: "KOMATSU-fORKLIFT", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/KOMATSU-fORKLIFT.jpg" },
        { id: 1078, name: "KOMATSU-POMPA", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/KOMATSU-POMPA.jpg" },
        { id: 1079, name: "SANJUMAN-POMP", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/SANJUMAN-POMP.jpg" },
        { id: 1080, name: "volvo-150-pompa", category: "pump", subCategory: "volvo", image: "/urunler/Pompa/Volvo/volvo-150-pompa.jpg" },
        { id: 1081, name: "volvo-160", category: "pump", subCategory: "volvo", image: "/urunler/Pompa/Volvo/volvo-160.jpg" },
        { id: 1082, name: "ZF-120", category: "pump", subCategory: "zf", image: "/urunler/Pompa/Zf/ZF-120.jpg" },
        { id: 1083, name: "zf-150", category: "pump", subCategory: "zf", image: "/urunler/Pompa/Zf/zf-150.jpg" },
        { id: 1084, name: "ZF-180", category: "pump", subCategory: "zf", image: "/urunler/Pompa/Zf/ZF-180.jpg" },
        { id: 1085, name: "ZF-200", category: "pump", subCategory: "zf", image: "/urunler/Pompa/Zf/ZF-200.jpg" },
        { id: 1086, name: "23015420", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/23015420.jpg" },
        { id: 1087, name: "29503848-38", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/29503848-38.jpg" },
        { id: 1088, name: "545-HAUSING", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/545-HAUSING.jpg" },
        { id: 1089, name: "545-STATOR", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/545-STATOR.jpg" },
        { id: 1090, name: "545-TURBUN", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/545-TURBUN.jpg" },
        { id: 1091, name: "645-cember", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/645-cember.jpg" },
        { id: 1092, name: "645-HAUSING", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/645-HAUSING.jpg" },
        { id: 1093, name: "645-st", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/645-st.jpg" },
        { id: 1094, name: "645-TURBUN", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/645-TURBUN.jpg" },
        { id: 1095, name: "6770886-y", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6770886-y.jpg" },
        { id: 1096, name: "6771381", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6771381.jpg" },
        { id: 1097, name: "6830599_33 (1)", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6830599_33%20(1).jpg" },
        { id: 1098, name: "6830599_33", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6830599_33.jpg" },
        { id: 1099, name: "6835759", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6835759.jpg" },
        { id: 1100, name: "6836093-y", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6836093-y.jpg" },
        { id: 1101, name: "745--st", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/745--st.jpg" },
        { id: 1102, name: "745-HAUSING", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/745-HAUSING.jpg" },
        { id: 1103, name: "745-TRUBUN", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/745-TRUBUN.jpg" },
        { id: 1104, name: "AT--26041-545", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/AT--26041-545.jpg" },
        { id: 1105, name: "108-8377", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/108-8377.jpg" },
        { id: 1106, name: "146-3338-966F", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/146-3338-966F.jpg" },
        { id: 1107, name: "1T-0436", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-0436.jpg" },
        { id: 1108, name: "1T-0611", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-0611.jpg" },
        { id: 1109, name: "1T-1045", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1045.jpg" },
        { id: 1110, name: "1T-1056", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1056.jpg" },
        { id: 1111, name: "1T-1082", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1082.jpg" },
        { id: 1112, name: "1T-1091", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1091.jpg" },
        { id: 1113, name: "1T-1226", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1226.jpg" },
        { id: 1114, name: "1T-1255", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1255.jpg" },
        { id: 1115, name: "1T-1314", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1314.jpg" },
        { id: 1116, name: "1T-1332", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1332.jpg" },
        { id: 1117, name: "1T-1335", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1335.jpg" },
        { id: 1118, name: "1T-1339", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1339.jpg" },
        { id: 1119, name: "1T-1348", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1348.jpg" },
        { id: 1120, name: "1T-1349", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1349.jpg" },
        { id: 1121, name: "1T-1389", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1389.jpg" },
        { id: 1122, name: "1T-1393", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1393.jpg" },
        { id: 1123, name: "1T-1396", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1396.jpg" },
        { id: 1124, name: "1T-1397", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1397.jpg" },
        { id: 1125, name: "1T-1423", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1423.jpg" },
        { id: 1126, name: "1T-1440", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1440.jpg" },
        { id: 1127, name: "1T-1444", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1444.jpg" },
        { id: 1128, name: "1T-1446", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1446.jpg" },
        { id: 1129, name: "1T-1448", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1448.jpg" },
        { id: 1130, name: "1T-1480", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1480.jpg" },
        { id: 1131, name: "1T-1505", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1505.jpg" },
        { id: 1132, name: "1T-1519-910", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1519-910.jpg" },
        { id: 1133, name: "1T-1562", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1562.jpg" },
        { id: 1134, name: "1T-1618", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1618.jpg" },
        { id: 1135, name: "1T-1631", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1631.jpg" },
        { id: 1136, name: "1T-1647", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1647.jpg" },
        { id: 1137, name: "1T-1657", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1657.jpg" },
        { id: 1138, name: "1T-1674", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1674.jpg" },
        { id: 1139, name: "1T-1744", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1744.jpg" },
        { id: 1140, name: "1T-1752", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1752.jpg" },
        { id: 1141, name: "1T-1782", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1782.jpg" },
        { id: 1142, name: "1T-1815", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1815.jpg" },
        { id: 1143, name: "1T-1908", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1908.jpg" },
        { id: 1144, name: "1T-2023", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-2023.jpg" },
        { id: 1145, name: "1T-2047", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-2047.jpg" },
        { id: 1146, name: "1T-209", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-209.jpg" },
        { id: 1147, name: "1T-22", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-22.jpg" },
        { id: 1148, name: "1T-24", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-24.jpg" },
        { id: 1149, name: "1T-292", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-292.jpg" },
        { id: 1150, name: "1T-407", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-407.jpg" },
        { id: 1151, name: "1T-421", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-421.jpg" },
        { id: 1152, name: "1T-437", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-437.jpg" },
        { id: 1153, name: "1T-438", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-438.jpg" },
        { id: 1154, name: "1T-51", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-51.jpg" },
        { id: 1155, name: "1T-52", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-52.jpg" },
        { id: 1156, name: "1T-535", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-535.jpg" },
        { id: 1157, name: "1T-541", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-541.jpg" },
        { id: 1158, name: "1T-555", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-555.jpg" },
        { id: 1159, name: "1T-595", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-595.jpg" },
        { id: 1160, name: "1T-628", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-628.jpg" },
        { id: 1161, name: "1T-633", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-633.jpg" },
        { id: 1162, name: "1T-660", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-660.jpg" },
        { id: 1163, name: "1T-662", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-662.jpg" },
        { id: 1164, name: "1T-699", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-699.jpg" },
        { id: 1165, name: "1T-709", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-709.jpg" },
        { id: 1166, name: "1T-711", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-711.jpg" },
        { id: 1167, name: "1T-727", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-727.jpg" },
        { id: 1168, name: "1T-753", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-753.jpg" },
        { id: 1169, name: "1T-757", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-757.jpg" },
        { id: 1170, name: "1T-759", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-759.jpg" },
        { id: 1171, name: "1T-771", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-771.jpg" },
        { id: 1172, name: "1T-774", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-774.jpg" },
        { id: 1173, name: "1T-792", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-792.jpg" },
        { id: 1174, name: "1T-826", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-826.jpg" },
        { id: 1175, name: "1T-841", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-841.jpg" },
        { id: 1176, name: "1T-842", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-842.jpg" },
        { id: 1177, name: "1T-910", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-910.jpg" },
        { id: 1178, name: "1T-930", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-930.jpg" },
        { id: 1179, name: "1T-945", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-945.jpg" },
        { id: 1180, name: "1T-949", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-949.jpg" },
        { id: 1181, name: "1T-972", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-972.jpg" },
        { id: 1182, name: "1T-989", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-989.jpg" },
        { id: 1183, name: "216-794", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/216-794.jpg" },
        { id: 1184, name: "2P-4470", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/2P-4470.jpg" },
        { id: 1185, name: "2P-5680", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/2P-5680.jpg" },
        { id: 1186, name: "2P-5715", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/2P-5715.jpg" },
        { id: 1187, name: "3T-3347", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/3T-3347.jpg" },
        { id: 1188, name: "3T-4009", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/3T-4009.jpg" },
        { id: 1189, name: "3T-5100", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/3T-5100.jpg" },
        { id: 1190, name: "3T-5419", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/3T-5419.jpg" },
        { id: 1191, name: "3T-5421", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/3T-5421.jpg" },
        { id: 1192, name: "4S-5946", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/4S-5946.jpg" },
        { id: 1193, name: "6P-6556", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/6P-6556.jpg" },
        { id: 1194, name: "6P-6927", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/6P-6927.jpg" },
        { id: 1195, name: "6P-7564", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/6P-7564.jpg" },
        { id: 1196, name: "6T-3318-24", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/6T-3318-24.jpg" },
        { id: 1197, name: "6Y-3148", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/6Y-3148.jpg" },
        { id: 1198, name: "7T-4308", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/7T-4308.jpg" },
        { id: 1199, name: "7T-4752", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/7T-4752.jpg" },
        { id: 1200, name: "7T-5525", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/7T-5525.jpg" },
        { id: 1201, name: "7T-9275", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/7T-9275.jpg" },
        { id: 1202, name: "8E-6298-tork", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/8E-6298-tork.jpg" },
        { id: 1203, name: "8F-1600_5X-3534", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/8F-1600_5X-3534.jpg" },
        { id: 1204, name: "8P-0953", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/8P-0953.jpg" },
        { id: 1205, name: "8P-5242", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/8P-5242.jpg" },
        { id: 1206, name: "8P9266", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/8P9266.jpg" },
        { id: 1207, name: "950-B-1T-1735", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/950-B-1T-1735.jpg" },
        { id: 1208, name: "966-S-1T-408", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/966-S-1T-408.jpg" },
        { id: 1209, name: "9G-2413", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9G-2413.jpg" },
        { id: 1210, name: "9P-4889", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9P-4889.jpg" },
        { id: 1211, name: "9P-4890", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9P-4890.jpg" },
        { id: 1212, name: "9P-6476-77---Y", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9P-6476-77---Y.jpg" },
        { id: 1213, name: "9P-9507", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9P-9507.jpg" },
        { id: 1214, name: "9U-9067", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9U-9067.jpg" },
        { id: 1215, name: "9W-1564", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9W-1564.jpg" },
        { id: 1216, name: "9W-1567", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9W-1567.jpg" },
        { id: 1217, name: "9W-5278", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9W-5278.jpg" },
        { id: 1218, name: "9W-6433", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9W-6433.jpg" },
        { id: 1219, name: "219074", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/219074.jpg" },
        { id: 1220, name: "226330-", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/226330-.jpg" },
        { id: 1221, name: "229537", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/229537.jpg" },
        { id: 1222, name: "229585 (1)", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/229585%20(1).jpg" },
        { id: 1223, name: "229585", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/229585.jpg" },
        { id: 1224, name: "230758-ST", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/230758-ST.jpg" },
        { id: 1225, name: "232043", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/232043.jpg" },
        { id: 1226, name: "2342078-Y", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/2342078-Y.jpg" },
        { id: 1227, name: "234238R", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/234238R.jpg" },
        { id: 1228, name: "234503", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/234503.jpg" },
        { id: 1229, name: "235214", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/235214.jpg" },
        { id: 1230, name: "235685-356318", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/235685-356318.jpg" },
        { id: 1231, name: "236275", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/236275.jpg" },
        { id: 1232, name: "236277", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/236277.jpg" },
        { id: 1233, name: "236757", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/236757.jpg" },
        { id: 1234, name: "236758-y", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/236758-y.jpg" },
        { id: 1235, name: "237875", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/237875.jpg" },
        { id: 1236, name: "239774", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/239774.jpg" },
        { id: 1237, name: "254242", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/254242.jpg" },
        { id: 1238, name: "289775", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/289775.jpg" },
        { id: 1239, name: "Chmpion-740", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/Chmpion-740.jpg" },
        { id: 1240, name: "SERIAL-28000", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/SERIAL-28000.jpg" },
        { id: 1241, name: "series--28000", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/series--28000.jpg" },
        { id: 1242, name: "341221-12360", category: "torque", subCategory: "furukawa", image: "/urunler/Tork/Furukawa/341221-12360.jpg" },
        { id: 1243, name: "FR-220", category: "torque", subCategory: "furukawa", image: "/urunler/Tork/Furukawa/FR-220.jpg" },
        { id: 1244, name: "furukaova-230-tork", category: "torque", subCategory: "furukawa", image: "/urunler/Tork/Furukawa/furukaova-230-tork.jpg" },
        { id: 1245, name: "furukoa-230-turbine", category: "torque", subCategory: "furukawa", image: "/urunler/Tork/Furukawa/furukoa-230-turbine.jpg" },
        { id: 1246, name: "furukova-330-tork", category: "torque", subCategory: "furukawa", image: "/urunler/Tork/Furukawa/furukova-330-tork.jpg" },
        { id: 1247, name: "KAW--110", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW--110.jpg" },
        { id: 1248, name: "KAW-110-IMP", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-110-IMP.jpg" },
        { id: 1249, name: "KAW-110-TRBUN", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-110-TRBUN.jpg" },
        { id: 1250, name: "kaw-70-i", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-70-i.jpg" },
        { id: 1251, name: "KAW-70-imp-y", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-70-imp-y.jpg" },
        { id: 1252, name: "KAW-70-T", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-70-T.jpg" },
        { id: 1253, name: "KAW-70", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-70.jpg" },
        { id: 1254, name: "KAW-80-B--imp-y", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-B--imp-y.jpg" },
        { id: 1255, name: "KAW-80-B-T", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-B-T.jpg" },
        { id: 1256, name: "KAW-80-B", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-B.jpg" },
        { id: 1257, name: "KAW-80-Y", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-Y.jpg" },
        { id: 1258, name: "KAW-80-YI", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-YI.jpg" },
        { id: 1259, name: "KAW-80-ZB", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-ZB.jpg" },
        { id: 1260, name: "KAW-80", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80.jpg" },
        { id: 1261, name: "kaw-80b", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-80b.jpg" },
        { id: 1262, name: "kaw-80z5-tork", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-80z5-tork.jpg" },
        { id: 1263, name: "KAW-85-95-a", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-85-95-a.jpg" },
        { id: 1264, name: "KAW-85-95-b", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-85-95-b.jpg" },
        { id: 1265, name: "KAW-85-95-c", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-85-95-c.jpg" },
        { id: 1266, name: "KAW-85-imp-y", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-85-imp-y.jpg" },
        { id: 1267, name: "kaw-85-tork", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-85-tork.jpg" },
        { id: 1268, name: "kaw-85z3-tork", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-85z3-tork.jpg" },
        { id: 1269, name: "KAW-95-2T-4", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-95-2T-4.jpg" },
        { id: 1270, name: "kaw-97-z-i", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-97-z-i.jpg" },
        { id: 1271, name: "kaw-97z-stator", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-97z-stator.jpg" },
        { id: 1272, name: "kaw-97z-turbin", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-97z-turbin.jpg" },
        { id: 1273, name: "YK-1162504501", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/YK-1162504501.jpg" },
        { id: 1274, name: "YK-117110-1001", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/YK-117110-1001.jpg" },
        { id: 1275, name: "YK-1172504600", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/YK-1172504600.jpg" },
        { id: 1276, name: "144-13-00020", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-00020.jpg" },
        { id: 1277, name: "144-13-11522-", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-11522-.jpg" },
        { id: 1278, name: "144-13-1203-D-75", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-1203-D-75.jpg" },
        { id: 1279, name: "144-13-12302-D75 (1)", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-12302-D75%20(1).jpg" },
        { id: 1280, name: "144-13-12302-D75", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-12302-D75.jpg" },
        { id: 1281, name: "144-13-12520-D-65-ESKI-MODEL", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-12520-D-65-ESKI-MODEL.jpg" },
        { id: 1282, name: "144-13-12523-D-65", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-12523-D-65.jpg" },
        { id: 1283, name: "145-13-31122", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/145-13-31122.jpg" },
        { id: 1284, name: "154-13-42110", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/154-13-42110.jpg" },
        { id: 1285, name: "175-13-00300", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/175-13-00300.jpg" },
        { id: 1286, name: "175-13-21005", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/175-13-21005.jpg" },
        { id: 1287, name: "175-13-21124-y", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/175-13-21124-y.jpg" },
        { id: 1288, name: "175-13-21522-Y", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/175-13-21522-Y.jpg" },
        { id: 1289, name: "175-13-620", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/175-13-620.jpg" },
        { id: 1290, name: "195-13-11005", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/195-13-11005.jpg" },
        { id: 1291, name: "195-13-11124-26--Y", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/195-13-11124-26--Y.jpg" },
        { id: 1292, name: "195-13-11522--Y", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/195-13-11522--Y.jpg" },
        { id: 1293, name: "208811", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/208811.jpg" },
        { id: 1294, name: "320-1", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/320-1.jpg" },
        { id: 1295, name: "320-3", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/320-3.jpg" },
        { id: 1296, name: "320-711-52-12110", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/320-711-52-12110.jpg" },
        { id: 1297, name: "420-3", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/420-3.jpg" },
        { id: 1298, name: "420-ST", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/420-ST.jpg" },
        { id: 1299, name: "470-ST", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/470-ST.jpg" },
        { id: 1300, name: "711-14-12110", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-14-12110.jpg" },
        { id: 1301, name: "711-47-31120-03", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-47-31120-03.jpg" },
        { id: 1302, name: "711-49-11120--------04", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-49-11120--------04.jpg" },
        { id: 1303, name: "711-49-11520---------03", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-49-11520---------03.jpg" },
        { id: 1304, name: "711-49-21190-KOMATSU", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-49-21190-KOMATSU.jpg" },
        { id: 1305, name: "711-50-11120", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-50-11120.jpg" },
        { id: 1306, name: "711-50-11520-W-380", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-50-11520-W-380.jpg" },
        { id: 1307, name: "711-50-12110", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-50-12110.jpg" },
        { id: 1308, name: "711-52-11620-HF1-121A--03", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-52-11620-HF1-121A--03.jpg" },
        { id: 1309, name: "711-55-12522", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-55-12522.jpg" },
        { id: 1310, name: "785-", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/785-.jpg" },
        { id: 1311, name: "d-155", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/d-155.jpg" },
        { id: 1312, name: "D-355---", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/D-355---.jpg" },
        { id: 1313, name: "D-355", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/D-355.jpg" },
        { id: 1314, name: "D-75-", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/D-75-.jpg" },
        { id: 1315, name: "d155---_DSC0450", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/d155---_DSC0450.jpg" },
        { id: 1316, name: "d65--_SA17379", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/d65--_SA17379.jpg" },
        { id: 1317, name: "KOMATSU-HUB", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/KOMATSU-HUB.jpg" },
        { id: 1318, name: "_SA17528", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/_SA17528.jpg" },
        { id: 1319, name: "4166305006", category: "torque", subCategory: "volvo", image: "/urunler/Tork/Volvo/4166305006.jpg" },
        { id: 1320, name: "4VG-45", category: "torque", subCategory: "volvo", image: "/urunler/Tork/Volvo/4VG-45.jpg" },
        { id: 1321, name: "621182-1-y", category: "torque", subCategory: "volvo", image: "/urunler/Tork/Volvo/621182-1-y.jpg" },
        { id: 1322, name: "VOLVO-SAFT", category: "torque", subCategory: "volvo", image: "/urunler/Tork/Volvo/VOLVO-SAFT.jpg" },
        { id: 1323, name: "1T-0611", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-0611.jpg" },
        { id: 1324, name: "1T-1045", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-1045.jpg" },
        { id: 1325, name: "1T-1255", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-1255.jpg" },
        { id: 1326, name: "1T-1335", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-1335.jpg" },
        { id: 1327, name: "1T-1440", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-1440.jpg" },
        { id: 1328, name: "1T-1448", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-1448.jpg" },
        { id: 1329, name: "1T-209", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-209.jpg" },
        { id: 1330, name: "1T-910", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-910.jpg" },
        { id: 1331, name: "1T-930", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-930.jpg" },
        { id: 1332, name: "110-5157", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/110-5157.jpg" },
        { id: 1333, name: "161-7055", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/161-7055.jpg" },
        { id: 1334, name: "73058798", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/73058798.jpg" },
        { id: 1335, name: "kaw-70z4-tork", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/kaw-70z4-tork.jpg" },
        { id: 1336, name: "KAW-85-Z-CONTROL-VALVE", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/KAW-85-Z-CONTROL-VALVE.jpg" },
        { id: 1337, name: "komatsu-forklift-torku", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/komatsu-forklift-torku.jpg" },
        { id: 1338, name: "komatsu-forklift-torku2", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/komatsu-forklift-torku2.jpg" },
        { id: 1339, name: "volvo-kamyon-torku", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/volvo-kamyon-torku.jpg" },
        { id: 1340, name: "159-8168", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/159-8168.jpg" },
        { id: 1341, name: "159-8169", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/159-8169.jpg" },
        { id: 1342, name: "2P-5752", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/2P-5752.jpg" },
        { id: 1343, name: "2V-7092", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/2V-7092.jpg" },
        { id: 1344, name: "2W-2895", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/2W-2895.jpg" },
        { id: 1345, name: "3P2768", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3P2768.jpg" },
        { id: 1346, name: "3T-3057", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3T-3057.jpg" },
        { id: 1347, name: "3T-4224", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3T-4224.jpg" },
        { id: 1348, name: "3T-4410", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3T-4410.jpg" },
        { id: 1349, name: "3V-4046", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3V-4046.jpg" },
        { id: 1350, name: "3W-5424", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3W-5424.jpg" },
        { id: 1351, name: "4T-9311", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/4T-9311.jpg" },
        { id: 1352, name: "5M-8003", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/5M-8003.jpg" },
        { id: 1353, name: "5S-7887", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/5S-7887.jpg" },
        { id: 1354, name: "6-G-6241", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6-G-6241.jpg" },
        { id: 1355, name: "6G-1538", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6G-1538.jpg" },
        { id: 1356, name: "6G-1541", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6G-1541.jpg" },
        { id: 1357, name: "6G-5532", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6G-5532.jpg" },
        { id: 1358, name: "6G-5533", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6G-5533.jpg" },
        { id: 1359, name: "6G-5842", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6G-5842.jpg" },
        { id: 1360, name: "6S-9666", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6S-9666.jpg" },
        { id: 1361, name: "6T-1706", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6T-1706.jpg" },
        { id: 1362, name: "6T-3009", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6T-3009.jpg" },
        { id: 1363, name: "6W3620", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6W3620.jpg" },
        { id: 1364, name: "6y-4819", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6y-4819.jpg" },
        { id: 1365, name: "7f-6269", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7f-6269.jpg" },
        { id: 1366, name: "7G--7724", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G--7724.jpg" },
        { id: 1367, name: "7G-3708", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-3708.jpg" },
        { id: 1368, name: "7G-3713", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-3713.jpg" },
        { id: 1369, name: "7G-4306", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-4306.jpg" },
        { id: 1370, name: "7G-4311", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-4311.jpg" },
        { id: 1371, name: "7G-5393", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-5393.jpg" },
        { id: 1372, name: "7G-5444", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-5444.jpg" },
        { id: 1373, name: "7G-5622", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-5622.jpg" },
        { id: 1374, name: "7S-3034", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7S-3034.jpg" },
        { id: 1375, name: "7S-4493", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7S-4493.jpg" },
        { id: 1376, name: "7T-3950", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7T-3950.jpg" },
        { id: 1377, name: "7V-4189", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7V-4189.jpg" },
        { id: 1378, name: "8D-5344", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8D-5344.jpg" },
        { id: 1379, name: "8D-7890", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8D-7890.jpg" },
        { id: 1380, name: "8E-1707", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8E-1707.jpg" },
        { id: 1381, name: "8E-7447", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8E-7447.jpg" },
        { id: 1382, name: "8E-7986", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8E-7986.jpg" },
        { id: 1383, name: "8K-2685", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8K-2685.jpg" },
        { id: 1384, name: "8N-6184", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8N-6184.jpg" },
        { id: 1385, name: "8P-0026", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8P-0026.jpg" },
        { id: 1386, name: "8P-7787-Y", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8P-7787-Y.jpg" },
        { id: 1387, name: "8P-9507", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8P-9507.jpg" },
        { id: 1388, name: "8T-2523", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8T-2523.jpg" },
        { id: 1389, name: "8w-8147", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8w-8147.jpg" },
        { id: 1390, name: "9d-5746", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9d-5746.jpg" },
        { id: 1391, name: "9G-1918", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9G-1918.jpg" },
        { id: 1392, name: "9G-281", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9G-281.jpg" },
        { id: 1393, name: "9G-290", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9G-290.jpg" },
        { id: 1394, name: "9G-5842", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9G-5842.jpg" },
        { id: 1395, name: "9P-3229", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9P-3229.jpg" },
        { id: 1396, name: "9P-3471", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9P-3471.jpg" },
        { id: 1397, name: "9P-8521", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9P-8521.jpg" },
        { id: 1398, name: "9P-8614", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9P-8614.jpg" },
        { id: 1399, name: "9P-8626", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9P-8626.jpg" },
        { id: 1400, name: "9W-2976", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9W-2976.jpg" },
        { id: 1401, name: "9W-6099", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9W-6099.jpg" },
        { id: 1402, name: "9W-7481", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9W-7481.jpg" },
        { id: 1403, name: "9W-7889", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9W-7889.jpg" },
        { id: 1404, name: "9W-9396", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9W-9396.jpg" },
        { id: 1405, name: "kaw-105-m.k.p", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-105-m.k.p.jpg" },
        { id: 1406, name: "kaw-70-24-yoke", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-70-24-yoke.jpg" },
        { id: 1407, name: "kaw-70-piston", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-70-piston.jpg" },
        { id: 1408, name: "KAW-70-PMP-SAFT", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/KAW-70-PMP-SAFT.jpg" },
        { id: 1409, name: "KAW-70-tekerlek-carrier", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/KAW-70-tekerlek-carrier.jpg" },
        { id: 1410, name: "kaw-70-tekerlek", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-70-tekerlek.jpg" },
        { id: 1411, name: "KAW-80-B_1", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/KAW-80-B_1.jpg" },
        { id: 1412, name: "kaw-80-drum", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-80-drum.jpg" },
        { id: 1413, name: "kaw-80-piston", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-80-piston.jpg" },
        { id: 1414, name: "kaw-80b-15cm-drum", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-80b-15cm-drum.jpg" },
        { id: 1415, name: "kaw-80b-kisa_drum", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-80b-kisa_drum.jpg" },
        { id: 1416, name: "kaw-80b-piston", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-80b-piston.jpg" },
        { id: 1417, name: "KAW-85-HOUSING-", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/KAW-85-HOUSING-.jpg" },
        { id: 1418, name: "kaw-85-shaft", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-85-shaft.jpg" },
        { id: 1419, name: "KAW-85-SU-MANIFOLT", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/KAW-85-SU-MANIFOLT.jpg" },
        { id: 1420, name: "kaw-85-su-manifoltu", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-85-su-manifoltu.jpg" },
        { id: 1421, name: "kaw-8523-fren-pistonu", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-8523-fren-pistonu.jpg" },
        { id: 1422, name: "kaw-85s.c.t", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-85s.c.t.jpg" },
        { id: 1423, name: "kaw-8s-diferansiyel", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-8s-diferansiyel.jpg" },
        { id: 1424, name: "kaw-8s-z4-yoke", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-8s-z4-yoke.jpg" },
        { id: 1425, name: "kaw-90-z-fren-pistonu", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-90-z-fren-pistonu.jpg" },
        { id: 1426, name: "kaw-9s-z4-yoke", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-9s-z4-yoke.jpg" },
        { id: 1427, name: "YK-1188031503", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/YK-1188031503.jpg" },
        { id: 1428, name: "YK-1188031603", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/YK-1188031603.jpg" },
        { id: 1429, name: "175-24-31233", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/175-24-31233.jpg" },
        { id: 1430, name: "178-15---13240-5", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/178-15---13240-5.jpg" },
        { id: 1431, name: "205-00-71440", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/205-00-71440.jpg" },
        { id: 1432, name: "424-15-11130", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/424-15-11130.jpg" },
        { id: 1433, name: "424-15-11181", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/424-15-11181.jpg" },
        { id: 1434, name: "6127-61-2113BCD", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/6127-61-2113BCD.jpg" },
        { id: 1435, name: "komatsu-110-m.k.p", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/komatsu-110-m.k.p.jpg" }
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
      corporateTitle: 'КОРПОРАТИВНЫЙ',
      certificatesTitle: 'СЕРТИФИКАТЫ',
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
    machinery: {
      hero: {
        tag: 'ТЕХНОЛОГИЧЕСКАЯ ИНФРАСТРУКТУРА',
        title: 'СОВРЕМЕННЫЙ',
        highlight: 'СТАНОЧНЫЙ ПАРК',
        desc: 'Мы сводим к минимуму погрешность благодаря новейшим станкам с ЧПУ и оборудованию для прецизионной обработки, которые мы используем в наших производственных процессах.'
      },
      ui: {
        viewDetails: 'Подробнее',
        techSpecs: 'Технические характеристики',
        close: 'Закрыть',
      },
      items: [
        {
          title: 'VICTOR V-TURN 36',
          desc: 'Высокопроизводительный токарный станок с ЧПУ для тяжелых условий эксплуатации, обеспечивающий высокий крутящий момент и точность. Оснащен осью C и приводным инструментом для фрезерования.',
          image: '/urunler/MakineParkuru/VICTOR_V_TURN36.jpg',
          specs: ['Диаметр 36 дюймов', 'Ось C', 'Приводной инструмент'],
          details: [
            {
              group: 'ОБЩАЯ ИНФОРМАЦИЯ',
              items: [
                { label: 'Марка / Модель', value: 'Victor V-TURN 36' },
                { label: 'Год выпуска', value: '2004' },
                { label: 'Тип станка', value: 'ЧПУ горизонтальный токарно-фрезерный' },
                { label: 'Производитель', value: 'Victor Taichung (Taiwan)' },
                { label: 'Конфигурация', value: 'Ось C + приводной инструмент' }
              ]
            },
            {
              group: 'ШПИНДЕЛЬ И ОСЬ C',
              items: [
                { label: 'Макс. скорость шпинделя', value: '2500 об/мин' },
                { label: 'Мощность двигателя', value: '22 кВт' },
                { label: 'Позиционирование оси C', value: 'Непрерывное 360°' },
                { label: 'Разрешение', value: '0.001°' }
              ]
            },
            {
              group: 'ПРИВОДНОЙ ИНСТРУМЕНТ',
              items: [
                { label: 'Револьверная головка', value: '10-12 позиций' },
                { label: 'Скорость инструмента', value: '3000-4000 об/мин' },
                { label: 'Мощность двигателя', value: '5.5 кВт' }
              ]
            },
            {
              group: 'ПРОИЗВОДСТВЕННАЯ МОЩНОСТЬ',
              items: [
                { label: 'Макс. диаметр точения', value: '550 мм' },
                { label: 'Расстояние между центрами', value: '855 мм' },
                { label: 'Ход по оси X', value: '305 мм' },
                { label: 'Ход по оси Z', value: '855 мм' }
              ]
            },
            {
              group: 'ФИЗИЧЕСКИЕ ХАРАКТЕРИСТИКИ',
              items: [
                { label: 'Вес станка', value: '9 000 кг' },
                { label: 'Размеры', value: '4700 × 2000 × 2200 мм' }
              ]
            }
          ]
        },
        {
          title: 'SPINNER TC-600',
          desc: 'Высокоточный универсальный токарный станок.',
          image: '/urunler/MakineParkuru/SPINNER_TC600.png',
          specs: ['Высокая точность', 'Превосходное качество поверхности', 'Компактный дизайн'],
          details: [
            {
              group: 'ОБЩИЕ ХАРАКТЕРИСТИКИ',
              items: [
                { label: 'Диаметр точения', value: '400 мм' },
                { label: 'Длина точения', value: '650 мм' },
                { label: 'Проход прутка', value: '65 мм' }
              ]
            },
            {
              group: 'ХОД ПО ОСЯМ',
              items: [
                { label: 'Ход по оси X', value: '275 мм' },
                { label: 'Ход по оси Y', value: '90 мм' },
                { label: 'Ход по оси Z', value: '700 мм' }
              ]
            },
            {
              group: 'ШПИНДЕЛЬ И ИНСТРУМЕНТ',
              items: [
                { label: 'Макс. скорость шпинделя', value: '5.000 об/мин' },
                { label: 'Приводные позиции', value: '16' }
              ]
            }
          ]
        },
        {
          title: 'HWACHEAN H-TECH 300',
          desc: 'Эффективный токарный центр, оснащенный современными технологиями.',
          image: '/urunler/MakineParkuru/HWACHEAN_H-TECH300.jpg',
          specs: ['Высокая скорость', 'Тепловая стабильность', 'Простое управление'],
          details: [
            {
              group: 'ОСНОВНЫЕ ХАРАКТЕРИСТИКИ',
              items: [
                { label: 'Диаметр прутка', value: '76 мм' },
                { label: 'Размер патрона', value: '315 мм (12")' },
                { label: 'Макс. диаметр резания', value: '380 мм' },
                { label: 'Макс. длина резания', value: '800 мм' },
                { label: 'Качели', value: '600 мм' }
              ]
            },
            {
              group: 'ШПИНДЕЛЬ И РЕВОЛЬВЕРНАЯ ГОЛОВКА',
              items: [
                { label: 'Мощность мотора шпинделя', value: '22 / 18.5 кВт' },
                { label: 'Скорость вращения', value: '3200 об/мин' },
                { label: 'Конец шпинделя', value: 'A2-8' },
                { label: 'Кол-во позиций', value: '12 позиций' },
                { label: 'Конфигурация инструмента', value: 'VDI40' }
              ]
            },
            {
              group: 'ФРЕЗЕРОВАНИЕ',
              items: [
                { label: 'Мощность фрезерования', value: '7.5 / 5.5 кВт' },
                { label: 'Обороты фрезерования', value: '4000 об/мин' },
                { label: 'Ускоренный ход', value: '20 м/мин' }
              ]
            },
            {
              group: 'ГАБАРИТЫ И МАССА',
              items: [
                { label: 'Ход пиноли задней бабки', value: '120 мм' },
                { label: 'Конус', value: 'MT #5' },
                { label: 'Габариты', value: '3300×1960×2150 мм' },
                { label: 'Вес', value: '8500 кг' }
              ]
            }
          ]
        },
        {
          title: 'DOOSAN PUMA 240-C',
          desc: 'Надежный и мощный токарный станок для производства критически важных деталей.',
          image: '/urunler/MakineParkuru/DOOSAN_PUMA240-C.png',
          specs: ['Широкие возможности обработки', 'Жесткая конструкция', 'Ориентирован на производительность'],
          details: [
            {
              group: 'ОБЩИЕ ХАРАКТЕРИСТИКИ',
              items: [
                { label: 'Макс. длина точения', value: '513 мм' },
                { label: 'Макс. диаметр точения', value: '300 мм' },
                { label: 'Макс. диаметр над станиной', value: '550 мм' },
                { label: 'Диаметр над поперечным суппортом', value: '390 мм' },
                { label: 'Расстояние между центрами', value: '501 мм' }
              ]
            },
            {
              group: 'ОСИ И УПРАВЛЕНИЕ',
              items: [
                { label: 'Система ЧПУ', value: 'FANUC' },
                { label: 'Ход по оси X', value: '205 мм' },
                { label: 'Ход по оси Z', value: '580 мм' }
              ]
            },
            {
              group: 'ШПИНДЕЛЬ И РЕВОЛЬВЕРНАЯ ГОЛОВКА',
              items: [
                { label: 'Диаметр отверстия шпинделя', value: '88.9 мм' },
                { label: 'Скорость шпинделя', value: '4500 об/мин' },
                { label: 'Мощность двигателя шпинделя', value: '15 кВт' },
                { label: 'Количество револьверных головок', value: '1' },
                { label: 'Позиции револьверной головки', value: '12' },
                { label: 'Вращающиеся инструменты', value: '12' }
              ]
            },
            {
              group: 'ФИЗИЧЕСКИЕ ХАРАКТЕРИСТИКИ',
              items: [
                { label: 'Габариты (Д x Ш x В)', value: '3997.0 × 1592.0 × 1740.0 мм' },
                { label: 'Вес', value: '4140 кг' }
              ]
            }
          ]
        },
        {
          title: 'YOUJI YV 600',
          desc: 'Вертикально-токарный станок для деталей большого диаметра.',
          image: '/urunler/MakineParkuru/YOUJI_YV600.png',
          specs: ['Вертикальная обработка', 'Возможность работы с большими диаметрами', 'Стабильная резка'],
          details: [
            {
              group: 'ОБЩАЯ ИНФОРМАЦИЯ',
              items: [
                { label: 'Модель', value: 'YV-600 ATC-C (2013)' },
                { label: 'ЧПУ', value: 'Fanuc OiT-D' },
                { label: 'Вес машины', value: '34,000 фунтов' },
                { label: 'Занимаемая площадь', value: '141"x83"x130"' }
              ]
            },
            {
              group: 'ГАБАРИТЫ ОБРАБОТКИ',
              items: [
                { label: 'Макс. поворот', value: '33.5"' },
                { label: 'Макс. диаметр резания', value: '33.5"' },
                { label: 'Макс. высота резания', value: '25.6"' },
                { label: 'Размер патрона', value: '24" (гидравлический)' }
              ]
            },
            {
              group: 'ШПИНДЕЛЬ И ОСИ',
              items: [
                { label: 'Мощность', value: '30 л.с.' },
                { label: 'Крокодиловая скорость', value: '1,500 об/мин' },
                { label: 'Конус / Нос шпинделя', value: '#7 MT / A2-11"' },
                { label: 'X/Z ход', value: '-1.97"~+22.4" / 31.5"' },
                { label: 'Ускоренный ход', value: '787 ipm' },
                { label: 'Вращение оси C', value: '0.001°' }
              ]
            },
            {
              group: 'ИНСТРУМЕНТ',
              items: [
                { label: 'Емкость магазина', value: '12 ATC' },
                { label: 'Скорость / Мощность', value: '2,400 об/мин / 10 л.с.' },
                { label: 'Конус шпинделя', value: '#50' }
              ]
            }
          ]
        },
        {
          title: 'MAKINO A77',
          desc: 'Горизонтальный обрабатывающий центр, высокая производительность в массовом производстве.',
          image: '/urunler/MakineParkuru/MAKINO_A77.jpg',
          specs: ['Горизонтальная обработка', 'Высокая скорость', 'Автоматическая смена паллет'],
          details: [
            {
              group: 'ОБЩИЕ ДАННЫЕ И ОСИ',
              items: [
                { label: 'Стойка ЧПУ', value: 'Fanuc PRO-3' },
                { label: 'Перемещения X / Y / Z', value: '800 / 750 / 770 мм' },
                { label: 'Ускоренные перемещения', value: '35 м/мин' }
              ]
            },
            {
              group: 'ШПИНДЕЛЬ И ИНСТРУМЕНТ',
              items: [
                { label: 'Частота вращения', value: '10,000 об/мин' },
                { label: 'Мощность', value: '30 кВт' },
                { label: 'Конус инструмента', value: 'HSK 100' },
                { label: 'Магазин инструментов', value: '90 Позиций' },
                { label: 'Охлаждение через шп.', value: '70 бар' }
              ]
            },
            {
              group: 'ПАЛЛЕТЫ',
              items: [
                { label: 'Размер паллеты', value: '630 x 630 мм' },
                { label: 'Нагрузка на стол', value: '1200 кг' },
                { label: 'Устройство смены паллет', value: '2 Типа' },
                { label: 'Наклон поворот. стола', value: '1 Градус' }
              ]
            },
            {
              group: 'ГРУЗОПОДЪЕМНОСТЬ',
              items: [
                { label: 'Вес станка', value: '15 Тонн' }
              ]
            }
          ]
        },
        {
          title: 'MAZAK NEXUS 350M',
          desc: 'Усовершенствованный токарный центр с возможностью фрезерования.',
          image: '/urunler/MakineParkuru/MAZAK_NEXUS 350M.jpg',
          specs: ['Приводной инструмент', 'Высокая эффективность', 'Серия Nexus'],
          details: [
            {
              group: 'ГЛАВНЫЙ ШПИНДЕЛЬ',
              items: [
                { label: 'Мощность / Обороты', value: '30 кВт / 3,300 об/мин' },
                { label: 'Диаметр прутка', value: '102 мм' },
                { label: 'Макс. диаметр точения', value: '420 мм' },
                { label: 'Поворотный диаметр', value: '750 мм' },
                { label: 'Конец шпинделя', value: 'A2-8' },
                { label: 'Ось C', value: '0.001°' }
              ]
            },
            {
              group: 'РЕВОЛЬВЕРНАЯ ГОЛОВКА',
              items: [
                { label: 'Кол-во позиций', value: '12 / 12 (Приводные)' },
                { label: 'Ход X/Z', value: '260 / 1605 мм' },
                { label: 'Тип крепления', value: 'VDI 50' },
                { label: 'Скорость/Мощность', value: '25-4000 об/мин / 7.5 кВт' }
              ]
            },
            {
              group: 'ЗАДНЯЯ БАБКА И ПИТАНИЕ',
              items: [
                { label: 'Задняя бабка / Конус', value: 'Numérique / CM4' },
                { label: 'Расстояние между центрами', value: '1,500 мм' },
                { label: 'Питание', value: '400В / 55кВА' }
              ]
            },
            {
              group: 'ВЕС И РАЗМЕРЫ',
              items: [
                { label: 'Занимаемая площадь', value: '4,270 x 2,050 мм' },
                { label: 'Высота', value: '2,000 мм' },
                { label: 'Вес', value: '7,500 кг' }
              ]
            }
          ]
        },
        {
          title: 'Mazak QT25',
          desc: 'Серия Quick Turn, идеально подходит для быстрого и точного изготовления деталей.',
          image: '/urunler/MakineParkuru/Mazak_QT25.jpg',
          specs: ['Быстрый цикл', 'Прецизионная обработка', 'Надежность'],
          details: [
            {
              group: 'ГЛАВНЫЕ ДАННЫЕ',
              items: [
                { label: 'Стойка ЧПУ', value: 'MAZATROL T2' },
                { label: 'Патрон', value: '10″ гидравлический' },
                { label: 'Макс. диам. точения/обр.', value: '320 мм / 510 мм' },
                { label: 'Макс. длина точения', value: '1010 мм' },
                { label: 'Вместимость прутка', value: '70 мм' }
              ]
            },
            {
              group: 'ШПИНДЕЛЬ И ОСИ',
              items: [
                { label: 'Мощность', value: '18 кВт' },
                { label: 'Отверстие', value: '80 мм' },
                { label: 'Скорость', value: '30 – 3000 об/мин' },
                { label: 'Ход X / Z', value: '200 / 1018 мм' }
              ]
            },
            {
              group: 'ИНСТРУМЕНТЫ',
              items: [
                { label: 'Кол-во позиций', value: '16' },
                { label: 'Быстрый ход X/Z', value: '12000/24000 мм/мин' },
                { label: 'Ход пиноли', value: '32.9 мм' }
              ]
            },
            {
              group: 'ФИЗИЧЕСКИЕ ДАННЫЕ',
              items: [
                { label: 'Габариты (ДхШхВ)', value: '3250 × 1800 × 1850 мм' },
                { label: 'Вес', value: '4600 кг' }
              ]
            }
          ]
        },
        {
          title: 'Mazak QT28',
          desc: 'Высокопроизводительная серия Quick Turn с увеличенной мощностью.',
          image: '/urunler/MakineParkuru/MAZAK_QT28.jpg',
          specs: ['Дополнительная емкость', 'Жесткий корпус', 'Управление Mazatrol'],
          details: [
            {
              group: 'ЕМКОСТЬ',
              items: [
                { label: 'Диаметр точения', value: '310 мм' },
                { label: 'Диаметр поворота', value: '510 мм' },
                { label: 'Длина резания', value: '1010 мм' },
                { label: 'Диаметр прутка', value: '70 мм' }
              ]
            },
            {
              group: 'ДВИЖЕНИЯ',
              items: [
                { label: 'Стойка ЧПУ', value: 'Mazatrol T32-2' },
                { label: 'Ход X/Z', value: '265 мм / 1020 мм' },
                { label: 'Быстрый ход X/Z', value: '18 / 24 м/мин' }
              ]
            },
            {
              group: 'ШПИНДЕЛЬ',
              items: [
                { label: 'Обороты', value: '30-3000 об/мин' },
                { label: 'Позиции инструмента', value: '12 (2x6)' }
              ]
            },
            {
              group: 'ФИЗИЧЕСКИЕ ДАННЫЕ',
              items: [
                { label: 'Мощность', value: '41 кВА' },
                { label: 'Габариты', value: '3.6 × 2.0 × 2.0 м' },
                { label: 'Вес', value: '6.3 Тонн' }
              ]
            }
          ]
        },
        {
          title: 'HARDINGE VMC 1000II',
          desc: 'Вертикальный обрабатывающий центр, обеспечивающий высокую стабильность даже на высоких скоростях.',
          image: '/urunler/MakineParkuru/HARDINGE_VMC_1000II.jpg',
          specs: ['Вертикальная обработка', 'Стол 1000 мм', 'Высокие обороты'],
          details: [
            {
              group: 'Общие данные и стол',
              items: [
                { label: 'ЧПУ', value: 'Siemens 810' },
                { label: 'Размер стола', value: '1200 x 450 мм' },
                { label: 'Макс. вес заготовки', value: '700 кг' },
                { label: 'Поворотный стол (4-я ось)', value: 'Нет' }
              ]
            },
            {
              group: 'Оси',
              items: [
                { label: 'Ход по оси X', value: '1000 мм' },
                { label: 'Ход по оси Y', value: '510 мм' },
                { label: 'Ход по оси Z', value: '510 мм' }
              ]
            },
            {
              group: 'Шпиндель и инструмент',
              items: [
                { label: 'Конус шпинделя', value: 'BT40' },
                { label: 'Макс. обороты', value: '8000 об/мин' },
                { label: 'Мощность', value: '13 кВт' },
                { label: 'Кол-во инструментов', value: '20' }
              ]
            },
            {
              group: 'Габариты',
              items: [
                { label: 'Размеры (ДxШxВ)', value: '2768 x 2184 x 2565 мм' },
                { label: 'Вес', value: '4640 кг' }
              ]
            }
          ]
        },
        {
          title: 'SPINNER U1520',
          desc: 'Универсальный 5-осевой обрабатывающий центр для сложных геометрических форм.',
          image: '/urunler/MakineParkuru/SPINNER_U1520.jpg',
          specs: ['5 осей', 'Сложная обработка деталей', 'Широкая рабочая зона'],
          details: [
            {
              group: 'ГЛАВНЫЕ ДАННЫЕ',
              items: [
                { label: 'Год / Часы', value: '2013 / 5000 ч' },
                { label: 'Стойка ЧПУ', value: 'Siemens Sinumerik' },
                { label: 'Оси', value: '5 Осей (4 непр.+1)' }
              ]
            },
            {
              group: 'ШПИНДЕЛЬ И ОСИ',
              items: [
                { label: 'Скорость', value: '12000 об/мин' },
                { label: 'Оси X / Y / Z', value: '1500 / 500 / 600 мм' }
              ]
            },
            {
              group: 'ИНСТРУМЕНТ И СТОЛ',
              items: [
                { label: 'Держатель', value: 'SK40, 40 BT/ISO/HSK' },
                { label: 'Кол-во инструментов', value: '32 шт.' },
                { label: 'Стол', value: '650 мм диам.' }
              ]
            },
            {
              group: 'ОХЛАЖДЕНИЕ',
              items: [
                { label: 'Охлаждение через шпиндель', value: 'Да (80 бар)' },
                { label: 'Воздух', value: 'Да' }
              ]
            }
          ]
        },
        {
          title: 'JUNKER EJ29',
          desc: 'Идеальное качество поверхности благодаря прецизионным шлифовальным решениям.',
          image: '/urunler/MakineParkuru/JUNKER_EJ29.jpg',
          specs: ['Прецизионное шлифование', 'Масштабируемость', 'Немецкие технологии'],
          details: [
            {
              group: 'ГЛАВНЫЕ ДАННЫЕ',
              items: [
                { label: 'Год выпуска', value: '2002' },
                { label: 'Тип', value: 'Цилиндрическое шлифование' },
                { label: 'ЧПУ', value: 'FANUC 21i-T' }
              ]
            },
            {
              group: 'ХАРАКТЕРИСТИКИ',
              items: [
                { label: 'Диам. шлиф. круга', value: '400 мм' },
                { label: 'Макс. диам. шлиф.', value: '280 мм' },
                { label: 'Макс. длина шлиф.', value: '600 мм' },
                { label: 'Обороты', value: '1000 об/мин' },
                { label: 'Мощность', value: '4.5 кВт' }
              ]
            },
            {
              group: 'ФИЗИЧЕСКИЕ ДАННЫЕ',
              items: [
                { label: 'Габариты', value: '3340 × 1960 × 2050 мм' },
                { label: 'Вес', value: '5000 кг' }
              ]
            }
          ]
        },
        {
          title: 'ABERLINK HALO L2000',
          desc: 'Обеспечение контроля качества с помощью усовершенствованного измерительного КИМ-устройства.',
          image: '/urunler/MakineParkuru/ABERLINK_HALO_L2000.png',
          specs: ['3D измерение', 'Высокая точность', 'Быстрая отчетность'],
          details: [
            {
              group: 'Перемещение и размеры (Halo L)',
              items: [
                { label: 'Ход по осям (X/Y/Z)', value: '1000 / 1200, 2000 / 800 мм' },
                { label: 'Габариты (X/Y/Z)', value: '1603 / 1830, 2630 / 2987, 3037 мм' },
                { label: 'Грузоподъемность стола', value: '1000 кг' },
                { label: 'Конструкция стола', value: 'Твердый гранит' }
              ]
            },
            {
              group: 'Производительность и точность',
              items: [
                { label: 'Разрешение шкалы', value: '0,1 мкм' },
                { label: 'Макс. скорость', value: '1000 мм/с' },
                { label: 'Макс. ускорение', value: '1000 мм/с²' },
                { label: 'Объемная точность', value: 'TP20: 2,1 мкм + L/250мм' }
              ]
            },
            {
              group: 'Условия эксплуатации',
              items: [
                { label: 'Структура / Управление', value: 'Портал / ЧПУ' },
                { label: 'Давление воздуха', value: '7 бар (100 psi) - 100 л/мин' },
                { label: 'Рабочая температура', value: '5 - 45°C (Опт. 18-22°C)' },
                { label: 'Среда', value: 'Контрольная комната / Производство' }
              ]
            }
          ]
        }
      ]
    },
    whatsapp: 'Поддержка WhatsApp',
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      corporate: 'مؤسسي',
      services: 'الخدمات',
      catalog: 'كتالوج',
      certificates: 'الشهادات',
      watermark: 'الخبرة، الاستقرار، الإنتاج المستمر',
      informationSecurity: 'أمن المعلومات',
      qualityCertificates: 'سياسة الجودة والشهادات',
      products: 'منتجاتنا',
      about: 'من نحن',
      production: 'مرفق الإنتاج لدينا',
      quality: 'مراقبة الجودة',
      integratedPolicy: 'سياسة الإدارة المتكاملة',
      qualityManagement: 'نظام إدارة الجودة',
      environmentalManagement: 'نظام الإدارة البيئية',
      ohsManagement: 'نظام إدارة الصحة والسلامة المهنية',
      contact: 'اتصل بنا',
      getQuote: 'احصل على عرض سعر',
      partsProduction: 'إنتاج قطع الغيار',
      machinery: 'أسطول الماكينات',
      machineryModels: [
        'VICTOR V-TURN 36', 'SPINNER TC-600', 'HWACHEAN H-TECH 300', 
        'DOOSAN PUMA 240-C', 'YOUJI YV 600', 'MAKINO A77', 
        'MAZAK NEXUS 350M', 'Mazak QT25', 'Mazak QT28', 
        'HARDINGE VMC 1000II', 'SPINNER U1520', 'JUNKER EJ29', 
        'ABERLINK HALO L2000'
      ],
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
        desc: 'من خلال خبرتنا التي تقارب نصف قرن في هذه الصناعة وفريقنا الخبير، نعتمد نهج خدمة شامل وغير منقطع من الإنتاج إلى التسويق، ومن المبيعات إلى الدعم الفني لما بعد البيع. نقدم أكثر من 2500 قطعة غيار عالية الجودة، تتم معالجتها بدقة على خطوط إنتاجنا المجهزة بأحدث التقنيات، ليس فقط محليًا بل لشركاء الحلول في جميع أنحاء العالم بنفس معايير الجودة العالية. من خلال وضع الابتكار والمتانة في المركز، ننتج ببراعة كل قطعة في قلب الآلات الثقيلة، مما يعزز قوة الصناعة العالمية.',
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
      subCategoryLabel: 'الفئة الفرعية:',
      clearFilter: 'مسح',
      noProducts: 'لم يتم العثور على منتجات في هذه الفئة',
      cta: {
        title: 'حلول التصنيع المخصصة',
        desc: 'بفضل شبكة مخزوننا الواسعة التي تتكون من آلاف القطع وقاعدة بيانات الرسوم التقنية لدينا، يمكننا إنتاج جميع أنواع قطع التصنيع الخاصة التي تحتاجها.',
        button: 'احصل على دعم تقني',
      },
      items: [
        { id: 1001, name: "7T-8001", category: "final-drive", image: "/urunler/Cer%20Grubu/7T-8001.jpg" },
        { id: 1002, name: "8E-4281", category: "final-drive", image: "/urunler/Cer%20Grubu/8E-4281.jpg" },
        { id: 1003, name: "AYNA-MAHRUTI", category: "final-drive", image: "/urunler/Cer%20Grubu/AYNA-MAHRUTI.jpg" },
        { id: 1004, name: "D-8", category: "final-drive", image: "/urunler/Cer%20Grubu/D-8.jpg" },
        { id: 1005, name: "SA2_5898", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5898.jpg" },
        { id: 1006, name: "SA2_5899", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5899.jpg" },
        { id: 1007, name: "SA2_5902", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5902.jpg" },
        { id: 1008, name: "SA2_5903", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5903.jpg" },
        { id: 1009, name: "SA2_5914", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5914.jpg" },
        { id: 1010, name: "SA2_5919", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5919.jpg" },
        { id: 1011, name: "SA2_5920", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5920.jpg" },
        { id: 1012, name: "SA2_5934", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5934.jpg" },
        { id: 1013, name: "SA2_5944", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5944.jpg" },
        { id: 1014, name: "SA2_5949", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5949.jpg" },
        { id: 1015, name: "SA2_5953_1", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5953_1.jpg" },
        { id: 1016, name: "SA2_5956", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5956.jpg" },
        { id: 1017, name: "SA2_5957", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5957.jpg" },
        { id: 1018, name: "SA2_5976", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5976.jpg" },
        { id: 1019, name: "SA2_5981", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5981.jpg" },
        { id: 1020, name: "SA2_5984", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5984.jpg" },
        { id: 1021, name: "SA2_5993", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5993.jpg" },
        { id: 1022, name: "SA2_5994", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_5994.jpg" },
        { id: 1023, name: "SA2_6006", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6006.jpg" },
        { id: 1024, name: "SA2_6015", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6015.jpg" },
        { id: 1025, name: "SA2_6017", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6017.jpg" },
        { id: 1026, name: "SA2_6018", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6018.jpg" },
        { id: 1027, name: "SA2_6023", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6023.jpg" },
        { id: 1028, name: "SA2_6024", category: "final-drive", image: "/urunler/Cer%20Grubu/SA2_6024.jpg" },
        { id: 1029, name: "volvo-3602", category: "final-drive", image: "/urunler/Cer%20Grubu/volvo-3602.jpg" },
        { id: 1030, name: "zp-280", category: "final-drive", image: "/urunler/Cer%20Grubu/zp-280.jpg" },
        { id: 1031, name: "6880125-23018418", category: "pump", subCategory: "allisson", image: "/urunler/Pompa/Allisson/6880125-23018418.jpg" },
        { id: 1032, name: "73058801-645-P", category: "pump", subCategory: "allisson", image: "/urunler/Pompa/Allisson/73058801-645-P.jpg" },
        { id: 1033, name: "745-FR-20", category: "pump", subCategory: "allisson", image: "/urunler/Pompa/Allisson/745-FR-20.jpg" },
        { id: 1034, name: "1360529", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/1360529.jpg" },
        { id: 1035, name: "241-8686", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/241-8686.jpg" },
        { id: 1036, name: "292-9964", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/292-9964.jpg" },
        { id: 1037, name: "293645", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/293645.jpg" },
        { id: 1038, name: "3G-9891", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/3G-9891.jpg" },
        { id: 1039, name: "6I3524", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/6I3524.jpg" },
        { id: 1040, name: "6Y-8764", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/6Y-8764.jpg" },
        { id: 1041, name: "7G-4856-950-B", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/7G-4856-950-B.jpg" },
        { id: 1042, name: "8J-1383", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/8J-1383.jpg" },
        { id: 1043, name: "cat-pompa", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/cat-pompa.jpg" },
        { id: 1044, name: "KAW-70-KISABOY", category: "pump", subCategory: "cat", image: "/urunler/Pompa/Cat/KAW-70-KISABOY.jpg" },
        { id: 1045, name: "235045", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/235045.jpg" },
        { id: 1046, name: "238111", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/238111.jpg" },
        { id: 1047, name: "238131", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/238131.jpg" },
        { id: 1048, name: "450230", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/450230.jpg" },
        { id: 1049, name: "455872", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/455872.jpg" },
        { id: 1050, name: "CLARK-FORKLIFT-POMPASI", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/CLARK-FORKLIFT-POMPASI.jpg" },
        { id: 1051, name: "D58190", category: "pump", subCategory: "clark", image: "/urunler/Pompa/Clark/D58190.jpg" },
        { id: 1052, name: "furukova-230-direksiyon", category: "pump", subCategory: "furukawa", image: "/urunler/Pompa/Furukawa/furukova-230-direksiyon.jpg" },
        { id: 1053, name: "furukova-230-hidrolik", category: "pump", subCategory: "furukawa", image: "/urunler/Pompa/Furukawa/furukova-230-hidrolik.jpg" },
        { id: 1054, name: "furukova-230", category: "pump", subCategory: "furukawa", image: "/urunler/Pompa/Furukawa/furukova-230.jpg" },
        { id: 1055, name: "30725-20030_KAW-95", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/30725-20030_KAW-95.jpg" },
        { id: 1056, name: "705-56-34040", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/705-56-34040.jpg" },
        { id: 1057, name: "KAW-70-TRANSMISION", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-70-TRANSMISION.jpg" },
        { id: 1058, name: "kaw-70z-1h", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/kaw-70z-1h.jpg" },
        { id: 1059, name: "KAW-70_1", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-70_1.jpg" },
        { id: 1060, name: "KAW-80", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-80.jpg" },
        { id: 1061, name: "KAW-8025_", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-8025_.jpg" },
        { id: 1062, name: "KAW-85-TEK-KADEME", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-85-TEK-KADEME.jpg" },
        { id: 1063, name: "KAW-85-YURUYUS", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-85-YURUYUS.jpg" },
        { id: 1064, name: "KAW-85-Z11", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-85-Z11.jpg" },
        { id: 1065, name: "kaw-85Z5", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/kaw-85Z5.jpg" },
        { id: 1066, name: "kaw-90Z", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/kaw-90Z.jpg" },
        { id: 1067, name: "KAW-95211_", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/KAW-95211_.jpg" },
        { id: 1068, name: "kaw-95z5", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/kaw-95z5.jpg" },
        { id: 1069, name: "kaw-95ZV", category: "pump", subCategory: "kawasaki", image: "/urunler/Pompa/Kawasaki/kaw-95ZV.jpg" },
        { id: 1070, name: "07432-71203", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/07432-71203.jpg" },
        { id: 1071, name: "07446-66104", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/07446-66104.jpg" },
        { id: 1072, name: "175-13-23500", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/175-13-23500.jpg" },
        { id: 1073, name: "785-TRUCK", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/785-TRUCK.jpg" },
        { id: 1074, name: "D-155-CARTER-", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/D-155-CARTER-.jpg" },
        { id: 1075, name: "D155-c-k-p", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/D155-c-k-p.jpg" },
        { id: 1076, name: "fd-70-SA2_6887", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/fd-70-SA2_6887.jpg" },
        { id: 1077, name: "KOMATSU-fORKLIFT", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/KOMATSU-fORKLIFT.jpg" },
        { id: 1078, name: "KOMATSU-POMPA", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/KOMATSU-POMPA.jpg" },
        { id: 1079, name: "SANJUMAN-POMP", category: "pump", subCategory: "komatsu", image: "/urunler/Pompa/Komatsu/SANJUMAN-POMP.jpg" },
        { id: 1080, name: "volvo-150-pompa", category: "pump", subCategory: "volvo", image: "/urunler/Pompa/Volvo/volvo-150-pompa.jpg" },
        { id: 1081, name: "volvo-160", category: "pump", subCategory: "volvo", image: "/urunler/Pompa/Volvo/volvo-160.jpg" },
        { id: 1082, name: "ZF-120", category: "pump", subCategory: "zf", image: "/urunler/Pompa/Zf/ZF-120.jpg" },
        { id: 1083, name: "zf-150", category: "pump", subCategory: "zf", image: "/urunler/Pompa/Zf/zf-150.jpg" },
        { id: 1084, name: "ZF-180", category: "pump", subCategory: "zf", image: "/urunler/Pompa/Zf/ZF-180.jpg" },
        { id: 1085, name: "ZF-200", category: "pump", subCategory: "zf", image: "/urunler/Pompa/Zf/ZF-200.jpg" },
        { id: 1086, name: "23015420", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/23015420.jpg" },
        { id: 1087, name: "29503848-38", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/29503848-38.jpg" },
        { id: 1088, name: "545-HAUSING", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/545-HAUSING.jpg" },
        { id: 1089, name: "545-STATOR", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/545-STATOR.jpg" },
        { id: 1090, name: "545-TURBUN", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/545-TURBUN.jpg" },
        { id: 1091, name: "645-cember", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/645-cember.jpg" },
        { id: 1092, name: "645-HAUSING", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/645-HAUSING.jpg" },
        { id: 1093, name: "645-st", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/645-st.jpg" },
        { id: 1094, name: "645-TURBUN", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/645-TURBUN.jpg" },
        { id: 1095, name: "6770886-y", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6770886-y.jpg" },
        { id: 1096, name: "6771381", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6771381.jpg" },
        { id: 1097, name: "6830599_33 (1)", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6830599_33%20(1).jpg" },
        { id: 1098, name: "6830599_33", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6830599_33.jpg" },
        { id: 1099, name: "6835759", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6835759.jpg" },
        { id: 1100, name: "6836093-y", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/6836093-y.jpg" },
        { id: 1101, name: "745--st", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/745--st.jpg" },
        { id: 1102, name: "745-HAUSING", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/745-HAUSING.jpg" },
        { id: 1103, name: "745-TRUBUN", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/745-TRUBUN.jpg" },
        { id: 1104, name: "AT--26041-545", category: "torque", subCategory: "allisson", image: "/urunler/Tork/Allisson/AT--26041-545.jpg" },
        { id: 1105, name: "108-8377", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/108-8377.jpg" },
        { id: 1106, name: "146-3338-966F", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/146-3338-966F.jpg" },
        { id: 1107, name: "1T-0436", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-0436.jpg" },
        { id: 1108, name: "1T-0611", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-0611.jpg" },
        { id: 1109, name: "1T-1045", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1045.jpg" },
        { id: 1110, name: "1T-1056", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1056.jpg" },
        { id: 1111, name: "1T-1082", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1082.jpg" },
        { id: 1112, name: "1T-1091", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1091.jpg" },
        { id: 1113, name: "1T-1226", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1226.jpg" },
        { id: 1114, name: "1T-1255", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1255.jpg" },
        { id: 1115, name: "1T-1314", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1314.jpg" },
        { id: 1116, name: "1T-1332", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1332.jpg" },
        { id: 1117, name: "1T-1335", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1335.jpg" },
        { id: 1118, name: "1T-1339", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1339.jpg" },
        { id: 1119, name: "1T-1348", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1348.jpg" },
        { id: 1120, name: "1T-1349", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1349.jpg" },
        { id: 1121, name: "1T-1389", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1389.jpg" },
        { id: 1122, name: "1T-1393", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1393.jpg" },
        { id: 1123, name: "1T-1396", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1396.jpg" },
        { id: 1124, name: "1T-1397", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1397.jpg" },
        { id: 1125, name: "1T-1423", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1423.jpg" },
        { id: 1126, name: "1T-1440", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1440.jpg" },
        { id: 1127, name: "1T-1444", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1444.jpg" },
        { id: 1128, name: "1T-1446", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1446.jpg" },
        { id: 1129, name: "1T-1448", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1448.jpg" },
        { id: 1130, name: "1T-1480", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1480.jpg" },
        { id: 1131, name: "1T-1505", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1505.jpg" },
        { id: 1132, name: "1T-1519-910", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1519-910.jpg" },
        { id: 1133, name: "1T-1562", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1562.jpg" },
        { id: 1134, name: "1T-1618", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1618.jpg" },
        { id: 1135, name: "1T-1631", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1631.jpg" },
        { id: 1136, name: "1T-1647", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1647.jpg" },
        { id: 1137, name: "1T-1657", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1657.jpg" },
        { id: 1138, name: "1T-1674", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1674.jpg" },
        { id: 1139, name: "1T-1744", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1744.jpg" },
        { id: 1140, name: "1T-1752", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1752.jpg" },
        { id: 1141, name: "1T-1782", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1782.jpg" },
        { id: 1142, name: "1T-1815", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1815.jpg" },
        { id: 1143, name: "1T-1908", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-1908.jpg" },
        { id: 1144, name: "1T-2023", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-2023.jpg" },
        { id: 1145, name: "1T-2047", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-2047.jpg" },
        { id: 1146, name: "1T-209", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-209.jpg" },
        { id: 1147, name: "1T-22", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-22.jpg" },
        { id: 1148, name: "1T-24", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-24.jpg" },
        { id: 1149, name: "1T-292", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-292.jpg" },
        { id: 1150, name: "1T-407", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-407.jpg" },
        { id: 1151, name: "1T-421", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-421.jpg" },
        { id: 1152, name: "1T-437", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-437.jpg" },
        { id: 1153, name: "1T-438", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-438.jpg" },
        { id: 1154, name: "1T-51", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-51.jpg" },
        { id: 1155, name: "1T-52", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-52.jpg" },
        { id: 1156, name: "1T-535", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-535.jpg" },
        { id: 1157, name: "1T-541", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-541.jpg" },
        { id: 1158, name: "1T-555", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-555.jpg" },
        { id: 1159, name: "1T-595", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-595.jpg" },
        { id: 1160, name: "1T-628", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-628.jpg" },
        { id: 1161, name: "1T-633", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-633.jpg" },
        { id: 1162, name: "1T-660", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-660.jpg" },
        { id: 1163, name: "1T-662", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-662.jpg" },
        { id: 1164, name: "1T-699", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-699.jpg" },
        { id: 1165, name: "1T-709", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-709.jpg" },
        { id: 1166, name: "1T-711", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-711.jpg" },
        { id: 1167, name: "1T-727", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-727.jpg" },
        { id: 1168, name: "1T-753", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-753.jpg" },
        { id: 1169, name: "1T-757", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-757.jpg" },
        { id: 1170, name: "1T-759", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-759.jpg" },
        { id: 1171, name: "1T-771", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-771.jpg" },
        { id: 1172, name: "1T-774", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-774.jpg" },
        { id: 1173, name: "1T-792", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-792.jpg" },
        { id: 1174, name: "1T-826", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-826.jpg" },
        { id: 1175, name: "1T-841", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-841.jpg" },
        { id: 1176, name: "1T-842", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-842.jpg" },
        { id: 1177, name: "1T-910", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-910.jpg" },
        { id: 1178, name: "1T-930", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-930.jpg" },
        { id: 1179, name: "1T-945", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-945.jpg" },
        { id: 1180, name: "1T-949", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-949.jpg" },
        { id: 1181, name: "1T-972", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-972.jpg" },
        { id: 1182, name: "1T-989", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/1T-989.jpg" },
        { id: 1183, name: "216-794", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/216-794.jpg" },
        { id: 1184, name: "2P-4470", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/2P-4470.jpg" },
        { id: 1185, name: "2P-5680", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/2P-5680.jpg" },
        { id: 1186, name: "2P-5715", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/2P-5715.jpg" },
        { id: 1187, name: "3T-3347", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/3T-3347.jpg" },
        { id: 1188, name: "3T-4009", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/3T-4009.jpg" },
        { id: 1189, name: "3T-5100", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/3T-5100.jpg" },
        { id: 1190, name: "3T-5419", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/3T-5419.jpg" },
        { id: 1191, name: "3T-5421", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/3T-5421.jpg" },
        { id: 1192, name: "4S-5946", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/4S-5946.jpg" },
        { id: 1193, name: "6P-6556", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/6P-6556.jpg" },
        { id: 1194, name: "6P-6927", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/6P-6927.jpg" },
        { id: 1195, name: "6P-7564", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/6P-7564.jpg" },
        { id: 1196, name: "6T-3318-24", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/6T-3318-24.jpg" },
        { id: 1197, name: "6Y-3148", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/6Y-3148.jpg" },
        { id: 1198, name: "7T-4308", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/7T-4308.jpg" },
        { id: 1199, name: "7T-4752", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/7T-4752.jpg" },
        { id: 1200, name: "7T-5525", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/7T-5525.jpg" },
        { id: 1201, name: "7T-9275", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/7T-9275.jpg" },
        { id: 1202, name: "8E-6298-tork", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/8E-6298-tork.jpg" },
        { id: 1203, name: "8F-1600_5X-3534", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/8F-1600_5X-3534.jpg" },
        { id: 1204, name: "8P-0953", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/8P-0953.jpg" },
        { id: 1205, name: "8P-5242", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/8P-5242.jpg" },
        { id: 1206, name: "8P9266", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/8P9266.jpg" },
        { id: 1207, name: "950-B-1T-1735", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/950-B-1T-1735.jpg" },
        { id: 1208, name: "966-S-1T-408", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/966-S-1T-408.jpg" },
        { id: 1209, name: "9G-2413", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9G-2413.jpg" },
        { id: 1210, name: "9P-4889", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9P-4889.jpg" },
        { id: 1211, name: "9P-4890", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9P-4890.jpg" },
        { id: 1212, name: "9P-6476-77---Y", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9P-6476-77---Y.jpg" },
        { id: 1213, name: "9P-9507", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9P-9507.jpg" },
        { id: 1214, name: "9U-9067", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9U-9067.jpg" },
        { id: 1215, name: "9W-1564", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9W-1564.jpg" },
        { id: 1216, name: "9W-1567", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9W-1567.jpg" },
        { id: 1217, name: "9W-5278", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9W-5278.jpg" },
        { id: 1218, name: "9W-6433", category: "torque", subCategory: "cat", image: "/urunler/Tork/Cat/9W-6433.jpg" },
        { id: 1219, name: "219074", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/219074.jpg" },
        { id: 1220, name: "226330-", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/226330-.jpg" },
        { id: 1221, name: "229537", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/229537.jpg" },
        { id: 1222, name: "229585 (1)", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/229585%20(1).jpg" },
        { id: 1223, name: "229585", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/229585.jpg" },
        { id: 1224, name: "230758-ST", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/230758-ST.jpg" },
        { id: 1225, name: "232043", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/232043.jpg" },
        { id: 1226, name: "2342078-Y", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/2342078-Y.jpg" },
        { id: 1227, name: "234238R", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/234238R.jpg" },
        { id: 1228, name: "234503", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/234503.jpg" },
        { id: 1229, name: "235214", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/235214.jpg" },
        { id: 1230, name: "235685-356318", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/235685-356318.jpg" },
        { id: 1231, name: "236275", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/236275.jpg" },
        { id: 1232, name: "236277", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/236277.jpg" },
        { id: 1233, name: "236757", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/236757.jpg" },
        { id: 1234, name: "236758-y", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/236758-y.jpg" },
        { id: 1235, name: "237875", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/237875.jpg" },
        { id: 1236, name: "239774", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/239774.jpg" },
        { id: 1237, name: "254242", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/254242.jpg" },
        { id: 1238, name: "289775", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/289775.jpg" },
        { id: 1239, name: "Chmpion-740", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/Chmpion-740.jpg" },
        { id: 1240, name: "SERIAL-28000", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/SERIAL-28000.jpg" },
        { id: 1241, name: "series--28000", category: "torque", subCategory: "clark", image: "/urunler/Tork/Clark/series--28000.jpg" },
        { id: 1242, name: "341221-12360", category: "torque", subCategory: "furukawa", image: "/urunler/Tork/Furukawa/341221-12360.jpg" },
        { id: 1243, name: "FR-220", category: "torque", subCategory: "furukawa", image: "/urunler/Tork/Furukawa/FR-220.jpg" },
        { id: 1244, name: "furukaova-230-tork", category: "torque", subCategory: "furukawa", image: "/urunler/Tork/Furukawa/furukaova-230-tork.jpg" },
        { id: 1245, name: "furukoa-230-turbine", category: "torque", subCategory: "furukawa", image: "/urunler/Tork/Furukawa/furukoa-230-turbine.jpg" },
        { id: 1246, name: "furukova-330-tork", category: "torque", subCategory: "furukawa", image: "/urunler/Tork/Furukawa/furukova-330-tork.jpg" },
        { id: 1247, name: "KAW--110", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW--110.jpg" },
        { id: 1248, name: "KAW-110-IMP", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-110-IMP.jpg" },
        { id: 1249, name: "KAW-110-TRBUN", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-110-TRBUN.jpg" },
        { id: 1250, name: "kaw-70-i", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-70-i.jpg" },
        { id: 1251, name: "KAW-70-imp-y", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-70-imp-y.jpg" },
        { id: 1252, name: "KAW-70-T", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-70-T.jpg" },
        { id: 1253, name: "KAW-70", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-70.jpg" },
        { id: 1254, name: "KAW-80-B--imp-y", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-B--imp-y.jpg" },
        { id: 1255, name: "KAW-80-B-T", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-B-T.jpg" },
        { id: 1256, name: "KAW-80-B", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-B.jpg" },
        { id: 1257, name: "KAW-80-Y", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-Y.jpg" },
        { id: 1258, name: "KAW-80-YI", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-YI.jpg" },
        { id: 1259, name: "KAW-80-ZB", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80-ZB.jpg" },
        { id: 1260, name: "KAW-80", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-80.jpg" },
        { id: 1261, name: "kaw-80b", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-80b.jpg" },
        { id: 1262, name: "kaw-80z5-tork", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-80z5-tork.jpg" },
        { id: 1263, name: "KAW-85-95-a", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-85-95-a.jpg" },
        { id: 1264, name: "KAW-85-95-b", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-85-95-b.jpg" },
        { id: 1265, name: "KAW-85-95-c", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-85-95-c.jpg" },
        { id: 1266, name: "KAW-85-imp-y", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-85-imp-y.jpg" },
        { id: 1267, name: "kaw-85-tork", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-85-tork.jpg" },
        { id: 1268, name: "kaw-85z3-tork", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-85z3-tork.jpg" },
        { id: 1269, name: "KAW-95-2T-4", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/KAW-95-2T-4.jpg" },
        { id: 1270, name: "kaw-97-z-i", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-97-z-i.jpg" },
        { id: 1271, name: "kaw-97z-stator", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-97z-stator.jpg" },
        { id: 1272, name: "kaw-97z-turbin", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/kaw-97z-turbin.jpg" },
        { id: 1273, name: "YK-1162504501", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/YK-1162504501.jpg" },
        { id: 1274, name: "YK-117110-1001", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/YK-117110-1001.jpg" },
        { id: 1275, name: "YK-1172504600", category: "torque", subCategory: "kawasaki", image: "/urunler/Tork/Kawasaki/YK-1172504600.jpg" },
        { id: 1276, name: "144-13-00020", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-00020.jpg" },
        { id: 1277, name: "144-13-11522-", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-11522-.jpg" },
        { id: 1278, name: "144-13-1203-D-75", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-1203-D-75.jpg" },
        { id: 1279, name: "144-13-12302-D75 (1)", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-12302-D75%20(1).jpg" },
        { id: 1280, name: "144-13-12302-D75", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-12302-D75.jpg" },
        { id: 1281, name: "144-13-12520-D-65-ESKI-MODEL", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-12520-D-65-ESKI-MODEL.jpg" },
        { id: 1282, name: "144-13-12523-D-65", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/144-13-12523-D-65.jpg" },
        { id: 1283, name: "145-13-31122", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/145-13-31122.jpg" },
        { id: 1284, name: "154-13-42110", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/154-13-42110.jpg" },
        { id: 1285, name: "175-13-00300", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/175-13-00300.jpg" },
        { id: 1286, name: "175-13-21005", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/175-13-21005.jpg" },
        { id: 1287, name: "175-13-21124-y", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/175-13-21124-y.jpg" },
        { id: 1288, name: "175-13-21522-Y", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/175-13-21522-Y.jpg" },
        { id: 1289, name: "175-13-620", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/175-13-620.jpg" },
        { id: 1290, name: "195-13-11005", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/195-13-11005.jpg" },
        { id: 1291, name: "195-13-11124-26--Y", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/195-13-11124-26--Y.jpg" },
        { id: 1292, name: "195-13-11522--Y", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/195-13-11522--Y.jpg" },
        { id: 1293, name: "208811", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/208811.jpg" },
        { id: 1294, name: "320-1", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/320-1.jpg" },
        { id: 1295, name: "320-3", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/320-3.jpg" },
        { id: 1296, name: "320-711-52-12110", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/320-711-52-12110.jpg" },
        { id: 1297, name: "420-3", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/420-3.jpg" },
        { id: 1298, name: "420-ST", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/420-ST.jpg" },
        { id: 1299, name: "470-ST", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/470-ST.jpg" },
        { id: 1300, name: "711-14-12110", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-14-12110.jpg" },
        { id: 1301, name: "711-47-31120-03", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-47-31120-03.jpg" },
        { id: 1302, name: "711-49-11120--------04", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-49-11120--------04.jpg" },
        { id: 1303, name: "711-49-11520---------03", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-49-11520---------03.jpg" },
        { id: 1304, name: "711-49-21190-KOMATSU", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-49-21190-KOMATSU.jpg" },
        { id: 1305, name: "711-50-11120", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-50-11120.jpg" },
        { id: 1306, name: "711-50-11520-W-380", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-50-11520-W-380.jpg" },
        { id: 1307, name: "711-50-12110", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-50-12110.jpg" },
        { id: 1308, name: "711-52-11620-HF1-121A--03", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-52-11620-HF1-121A--03.jpg" },
        { id: 1309, name: "711-55-12522", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/711-55-12522.jpg" },
        { id: 1310, name: "785-", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/785-.jpg" },
        { id: 1311, name: "d-155", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/d-155.jpg" },
        { id: 1312, name: "D-355---", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/D-355---.jpg" },
        { id: 1313, name: "D-355", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/D-355.jpg" },
        { id: 1314, name: "D-75-", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/D-75-.jpg" },
        { id: 1315, name: "d155---_DSC0450", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/d155---_DSC0450.jpg" },
        { id: 1316, name: "d65--_SA17379", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/d65--_SA17379.jpg" },
        { id: 1317, name: "KOMATSU-HUB", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/KOMATSU-HUB.jpg" },
        { id: 1318, name: "_SA17528", category: "torque", subCategory: "komatsu", image: "/urunler/Tork/Komatsu/_SA17528.jpg" },
        { id: 1319, name: "4166305006", category: "torque", subCategory: "volvo", image: "/urunler/Tork/Volvo/4166305006.jpg" },
        { id: 1320, name: "4VG-45", category: "torque", subCategory: "volvo", image: "/urunler/Tork/Volvo/4VG-45.jpg" },
        { id: 1321, name: "621182-1-y", category: "torque", subCategory: "volvo", image: "/urunler/Tork/Volvo/621182-1-y.jpg" },
        { id: 1322, name: "VOLVO-SAFT", category: "torque", subCategory: "volvo", image: "/urunler/Tork/Volvo/VOLVO-SAFT.jpg" },
        { id: 1323, name: "1T-0611", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-0611.jpg" },
        { id: 1324, name: "1T-1045", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-1045.jpg" },
        { id: 1325, name: "1T-1255", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-1255.jpg" },
        { id: 1326, name: "1T-1335", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-1335.jpg" },
        { id: 1327, name: "1T-1440", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-1440.jpg" },
        { id: 1328, name: "1T-1448", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-1448.jpg" },
        { id: 1329, name: "1T-209", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-209.jpg" },
        { id: 1330, name: "1T-910", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-910.jpg" },
        { id: 1331, name: "1T-930", category: "new", image: "/urunler/Yeni%20%C3%9Cr%C3%BCnler/1T-930.jpg" },
        { id: 1332, name: "110-5157", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/110-5157.jpg" },
        { id: 1333, name: "161-7055", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/161-7055.jpg" },
        { id: 1334, name: "73058798", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/73058798.jpg" },
        { id: 1335, name: "kaw-70z4-tork", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/kaw-70z4-tork.jpg" },
        { id: 1336, name: "KAW-85-Z-CONTROL-VALVE", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/KAW-85-Z-CONTROL-VALVE.jpg" },
        { id: 1337, name: "komatsu-forklift-torku", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/komatsu-forklift-torku.jpg" },
        { id: 1338, name: "komatsu-forklift-torku2", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/komatsu-forklift-torku2.jpg" },
        { id: 1339, name: "volvo-kamyon-torku", category: "custom", image: "/urunler/%C3%96zel%20%C4%B0malatlar/volvo-kamyon-torku.jpg" },
        { id: 1340, name: "159-8168", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/159-8168.jpg" },
        { id: 1341, name: "159-8169", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/159-8169.jpg" },
        { id: 1342, name: "2P-5752", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/2P-5752.jpg" },
        { id: 1343, name: "2V-7092", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/2V-7092.jpg" },
        { id: 1344, name: "2W-2895", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/2W-2895.jpg" },
        { id: 1345, name: "3P2768", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3P2768.jpg" },
        { id: 1346, name: "3T-3057", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3T-3057.jpg" },
        { id: 1347, name: "3T-4224", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3T-4224.jpg" },
        { id: 1348, name: "3T-4410", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3T-4410.jpg" },
        { id: 1349, name: "3V-4046", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3V-4046.jpg" },
        { id: 1350, name: "3W-5424", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/3W-5424.jpg" },
        { id: 1351, name: "4T-9311", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/4T-9311.jpg" },
        { id: 1352, name: "5M-8003", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/5M-8003.jpg" },
        { id: 1353, name: "5S-7887", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/5S-7887.jpg" },
        { id: 1354, name: "6-G-6241", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6-G-6241.jpg" },
        { id: 1355, name: "6G-1538", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6G-1538.jpg" },
        { id: 1356, name: "6G-1541", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6G-1541.jpg" },
        { id: 1357, name: "6G-5532", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6G-5532.jpg" },
        { id: 1358, name: "6G-5533", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6G-5533.jpg" },
        { id: 1359, name: "6G-5842", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6G-5842.jpg" },
        { id: 1360, name: "6S-9666", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6S-9666.jpg" },
        { id: 1361, name: "6T-1706", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6T-1706.jpg" },
        { id: 1362, name: "6T-3009", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6T-3009.jpg" },
        { id: 1363, name: "6W3620", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6W3620.jpg" },
        { id: 1364, name: "6y-4819", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/6y-4819.jpg" },
        { id: 1365, name: "7f-6269", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7f-6269.jpg" },
        { id: 1366, name: "7G--7724", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G--7724.jpg" },
        { id: 1367, name: "7G-3708", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-3708.jpg" },
        { id: 1368, name: "7G-3713", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-3713.jpg" },
        { id: 1369, name: "7G-4306", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-4306.jpg" },
        { id: 1370, name: "7G-4311", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-4311.jpg" },
        { id: 1371, name: "7G-5393", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-5393.jpg" },
        { id: 1372, name: "7G-5444", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-5444.jpg" },
        { id: 1373, name: "7G-5622", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7G-5622.jpg" },
        { id: 1374, name: "7S-3034", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7S-3034.jpg" },
        { id: 1375, name: "7S-4493", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7S-4493.jpg" },
        { id: 1376, name: "7T-3950", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7T-3950.jpg" },
        { id: 1377, name: "7V-4189", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/7V-4189.jpg" },
        { id: 1378, name: "8D-5344", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8D-5344.jpg" },
        { id: 1379, name: "8D-7890", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8D-7890.jpg" },
        { id: 1380, name: "8E-1707", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8E-1707.jpg" },
        { id: 1381, name: "8E-7447", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8E-7447.jpg" },
        { id: 1382, name: "8E-7986", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8E-7986.jpg" },
        { id: 1383, name: "8K-2685", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8K-2685.jpg" },
        { id: 1384, name: "8N-6184", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8N-6184.jpg" },
        { id: 1385, name: "8P-0026", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8P-0026.jpg" },
        { id: 1386, name: "8P-7787-Y", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8P-7787-Y.jpg" },
        { id: 1387, name: "8P-9507", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8P-9507.jpg" },
        { id: 1388, name: "8T-2523", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8T-2523.jpg" },
        { id: 1389, name: "8w-8147", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/8w-8147.jpg" },
        { id: 1390, name: "9d-5746", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9d-5746.jpg" },
        { id: 1391, name: "9G-1918", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9G-1918.jpg" },
        { id: 1392, name: "9G-281", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9G-281.jpg" },
        { id: 1393, name: "9G-290", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9G-290.jpg" },
        { id: 1394, name: "9G-5842", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9G-5842.jpg" },
        { id: 1395, name: "9P-3229", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9P-3229.jpg" },
        { id: 1396, name: "9P-3471", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9P-3471.jpg" },
        { id: 1397, name: "9P-8521", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9P-8521.jpg" },
        { id: 1398, name: "9P-8614", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9P-8614.jpg" },
        { id: 1399, name: "9P-8626", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9P-8626.jpg" },
        { id: 1400, name: "9W-2976", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9W-2976.jpg" },
        { id: 1401, name: "9W-6099", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9W-6099.jpg" },
        { id: 1402, name: "9W-7481", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9W-7481.jpg" },
        { id: 1403, name: "9W-7889", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9W-7889.jpg" },
        { id: 1404, name: "9W-9396", category: "transmission", subCategory: "cat", image: "/urunler/%C5%9Eanz%C4%B1man/Cat/9W-9396.jpg" },
        { id: 1405, name: "kaw-105-m.k.p", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-105-m.k.p.jpg" },
        { id: 1406, name: "kaw-70-24-yoke", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-70-24-yoke.jpg" },
        { id: 1407, name: "kaw-70-piston", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-70-piston.jpg" },
        { id: 1408, name: "KAW-70-PMP-SAFT", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/KAW-70-PMP-SAFT.jpg" },
        { id: 1409, name: "KAW-70-tekerlek-carrier", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/KAW-70-tekerlek-carrier.jpg" },
        { id: 1410, name: "kaw-70-tekerlek", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-70-tekerlek.jpg" },
        { id: 1411, name: "KAW-80-B_1", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/KAW-80-B_1.jpg" },
        { id: 1412, name: "kaw-80-drum", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-80-drum.jpg" },
        { id: 1413, name: "kaw-80-piston", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-80-piston.jpg" },
        { id: 1414, name: "kaw-80b-15cm-drum", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-80b-15cm-drum.jpg" },
        { id: 1415, name: "kaw-80b-kisa_drum", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-80b-kisa_drum.jpg" },
        { id: 1416, name: "kaw-80b-piston", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-80b-piston.jpg" },
        { id: 1417, name: "KAW-85-HOUSING-", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/KAW-85-HOUSING-.jpg" },
        { id: 1418, name: "kaw-85-shaft", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-85-shaft.jpg" },
        { id: 1419, name: "KAW-85-SU-MANIFOLT", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/KAW-85-SU-MANIFOLT.jpg" },
        { id: 1420, name: "kaw-85-su-manifoltu", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-85-su-manifoltu.jpg" },
        { id: 1421, name: "kaw-8523-fren-pistonu", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-8523-fren-pistonu.jpg" },
        { id: 1422, name: "kaw-85s.c.t", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-85s.c.t.jpg" },
        { id: 1423, name: "kaw-8s-diferansiyel", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-8s-diferansiyel.jpg" },
        { id: 1424, name: "kaw-8s-z4-yoke", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-8s-z4-yoke.jpg" },
        { id: 1425, name: "kaw-90-z-fren-pistonu", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-90-z-fren-pistonu.jpg" },
        { id: 1426, name: "kaw-9s-z4-yoke", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/kaw-9s-z4-yoke.jpg" },
        { id: 1427, name: "YK-1188031503", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/YK-1188031503.jpg" },
        { id: 1428, name: "YK-1188031603", category: "transmission", subCategory: "kawasaki", image: "/urunler/%C5%9Eanz%C4%B1man/Kawasaki/YK-1188031603.jpg" },
        { id: 1429, name: "175-24-31233", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/175-24-31233.jpg" },
        { id: 1430, name: "178-15---13240-5", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/178-15---13240-5.jpg" },
        { id: 1431, name: "205-00-71440", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/205-00-71440.jpg" },
        { id: 1432, name: "424-15-11130", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/424-15-11130.jpg" },
        { id: 1433, name: "424-15-11181", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/424-15-11181.jpg" },
        { id: 1434, name: "6127-61-2113BCD", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/6127-61-2113BCD.jpg" },
        { id: 1435, name: "komatsu-110-m.k.p", category: "transmission", subCategory: "komatsu", image: "/urunler/%C5%9Eanz%C4%B1man/Komatsu/komatsu-110-m.k.p.jpg" }
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
      corporateTitle: 'الشركة',
      certificatesTitle: 'الشهادات',
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
    machinery: {
      hero: {
        tag: 'البنية التحتية التكنولوجية',
        title: 'أسطول',
        highlight: 'ماكينات حديث',
        desc: 'نحن نقلل من هامش الخطأ باستخدام أحدث ماكينات CNC ومعدات المعالجة الدقيقة التي نستخدمها في عمليات الإنتاج لدينا.'
      },
      ui: {
        viewDetails: 'عرض التفاصيل',
        techSpecs: 'المواصفات الفنية',
        close: 'إغلاق',
      },
      items: [
        {
          title: 'VICTOR V-TURN 36',
          desc: 'ماكينة خراطة CNC شديدة التحمل توفر عزم دوران عالٍ ودقة فائقة. مجهزة بمحور C وأدوات حية لقدرات التفريز.',
          image: '/urunler/MakineParkuru/VICTOR_V_TURN36.jpg',
          specs: ['قطر 36 بوصة', 'المحور C', 'أدوات حية'],
          details: [
            {
              group: 'معلومات عامة',
              items: [
                { label: 'العلامة التجارية / الموديل', value: 'Victor V-TURN 36' },
                { label: 'سنة الصنع', value: '2004' },
                { label: 'نوع الماكينة', value: 'مخرطة CNC أفقية + تفريز' },
                { label: 'الشركة المصنعة', value: 'Victor Taichung (Taiwan)' },
                { label: 'التكوين', value: 'محور C + أدوات حية' }
              ]
            },
            {
              group: 'المغزل والمحور C',
              items: [
                { label: 'أقصى سرعة للمغزل', value: '2500 دورة في الدقيقة' },
                { label: 'قوة المحرك', value: '22 كيلو واط' },
                { label: 'تموضع المحور C', value: 'مستمر 360 درجة' },
                { label: 'الدقة', value: '0.001 درجة' }
              ]
            },
            {
              group: 'الأدوات الحية',
              items: [
                { label: 'محطة البرج', value: '10-12 وضعية' },
                { label: 'سرعة الأدوات الحية', value: '3000-4000 دورة في الدقيقة' },
                { label: 'قوة المحرك', value: '5.5 كيلو واط' }
              ]
            },
            {
              group: 'قدرة المعالجة',
              items: [
                { label: 'أقصى قطر للخراطة', value: '550 مم' },
                { label: 'المسافة بين المراكز', value: '855 مم' },
                { label: 'شوط المحور X', value: '305 مم' },
                { label: 'شوط المحور Z', value: '855 مم' }
              ]
            },
            {
              group: 'الخصائص الفيزيائية',
              items: [
                { label: 'وزن الماكينة', value: '9000 كجم' },
                { label: 'الأبعاد', value: '4700 × 2000 × 2200 مم' }
              ]
            }
          ]
        },
        {
          title: 'SPINNER TC-600',
          desc: 'ماكينة خراطة عالمية عالية الدقة.',
          image: '/urunler/MakineParkuru/SPINNER_TC600.png',
          specs: ['دقة عالية', 'جودة سطح ممتازة', 'تصميم مدمج'],
          details: [
            {
              group: 'المواصفات العامة',
              items: [
                { label: 'قطر الدوران', value: '400 مم' },
                { label: 'طول الدوران', value: '650 مم' },
                { label: 'مرور القضيب', value: '65 مم' }
              ]
            },
            {
              group: 'محاور الحركة',
              items: [
                { label: 'شوط محور X', value: '275 مم' },
                { label: 'شوط محور Y', value: '90 مم' },
                { label: 'شوط محور Z', value: '700 مم' }
              ]
            },
            {
              group: 'المغزل والأدوات',
              items: [
                { label: 'أقصى سرعة للمغزل', value: '5,000 دورة/دقيقة' },
                { label: 'مواقع الأدوات الحية', value: '16' }
              ]
            }
          ]
        },
        {
          title: 'HWACHEAN H-TECH 300',
          desc: 'مركز خراطة فعال مجهز بتكنولوجيا حديثة.',
          image: '/urunler/MakineParkuru/HWACHEAN_H-TECH300.jpg',
          specs: ['سرعة عالية', 'استقرار حراري', 'سهولة التشغيل'],
          details: [
            {
              group: 'السعة والأبعاد',
              items: [
                { label: 'سعة القضيب', value: '76 مم' },
                { label: 'حجم الظرف', value: '315 مم (12 بوصة)' },
                { label: 'أقصى قطر قطع', value: '380 مم' },
                { label: 'أقصى طول قطع', value: '800 مم' },
                { label: 'التأرجح', value: '600 مم' }
              ]
            },
            {
              group: 'المغزل والبرج',
              items: [
                { label: 'قوة محرك المغزل', value: '22 / 18.5 كيلو واط' },
                { label: 'سرعة المغزل', value: '3200 دورة/دقيقة' },
                { label: 'أنف المغزل', value: 'A2-8' },
                { label: 'مواقع البرج', value: '12 محطة' },
                { label: 'تكوين الأداة', value: 'VDI40' }
              ]
            },
            {
              group: 'التفريز والمحاور',
              items: [
                { label: 'قوة محرك التفريز', value: '7.5 / 5.5 كيلو واط' },
                { label: 'سرعة التفريز', value: '4000 دورة/دقيقة' },
                { label: 'الاجتياز السريع', value: '20 م/دقيقة' }
              ]
            },
            {
              group: 'الغراب الخلفي والخصائص',
              items: [
                { label: 'شوط الغراب الخلفي', value: '120 مم' },
                { label: 'مخروط الغراب', value: 'MT #5' },
                { label: 'الأبعاد', value: '3300 × 1960 × 2150 مم' },
                { label: 'الوزن', value: '8500 كجم' }
              ]
            }
          ]
        },
        {
          title: 'DOOSAN PUMA 240-C',
          desc: 'ماكينة خراطة موثوقة وقوية لإنتاج الأجزاء الحيوية.',
          image: '/urunler/MakineParkuru/DOOSAN_PUMA240-C.png',
          specs: ['سعة معالجة واسعة', 'هيكل صلب', 'موجه نحو الأداء'],
          details: [
            {
              group: 'الأبعاد العامة وأبعاد التشغيل',
              items: [
                { label: 'أقصى طول للخراطة', value: '513 مم' },
                { label: 'أقصى قطر للخراطة', value: '300 مم' },
                { label: 'أقصى قطر للخراطة فوق السرير', value: '550 مم' },
                { label: 'القطر فوق الزلاقة العرضية', value: '390 مم' },
                { label: 'المسافة بين المراكز', value: '501 مم' }
              ]
            },
            {
              group: 'المحاور ونظام التحكم',
              items: [
                { label: 'نوع CNC', value: 'FANUC' },
                { label: 'حركة المحور X', value: '205 مم' },
                { label: 'حركة المحور Z', value: '580 مم' }
              ]
            },
            {
              group: 'المغزل والبرج',
              items: [
                { label: 'قطر ثقب المغزل', value: '88.9 مم' },
                { label: 'سرعة المغزل', value: '4500 دورة/دقيقة' },
                { label: 'قوة محرك المغزل', value: '15 كيلو واط' },
                { label: 'عدد الأبراج', value: '1' },
                { label: 'محطات البرج', value: '12' },
                { label: 'الأدوات الدوارة', value: '12' }
              ]
            },
            {
              group: 'الخصائص الفيزيائية',
              items: [
                { label: 'الأبعاد (الطول × العرض × الارتفاع)', value: '3997.0 × 1592.0 × 1740.0 مم' },
                { label: 'الوزن', value: '4140 كجم' }
              ]
            }
          ]
        },
        {
          title: 'YOUJI YV 600',
          desc: 'ماكينة خراطة عمودية للأجزاء ذات الأقطار الكبيرة.',
          image: '/urunler/MakineParkuru/YOUJI_YV600.png',
          specs: ['معالجة عمودية', 'سعة أقطار كبيرة', 'قطع مستقر'],
          details: [
            {
              group: 'معلومات عامة',
              items: [
                { label: 'الموديل', value: 'YV-600 ATC-C (2013)' },
                { label: 'نظام التحكم', value: 'Fanuc OiT-D' },
                { label: 'وزن الماكينة', value: '34,000 باوند' },
                { label: 'مساحة الأرضية', value: '141"x83"x130"' }
              ]
            },
            {
              group: 'السعة',
              items: [
                { label: 'أقصى دوران', value: '33.5"' },
                { label: 'أقصى قطر دوران', value: '33.5"' },
                { label: 'أقصى ارتفاع للقطع', value: '25.6"' },
                { label: 'حجم الظرف', value: '24" هيدروليكي' }
              ]
            },
            {
              group: 'المغزل والمحاور',
              items: [
                { label: 'محرك المغزل', value: '30 حصان' },
                { label: 'سرعة المغزل', value: '1,500 دورة/دقيقة' },
                { label: 'مخروط / أنف المغزل', value: '#7 MT / A2-11"' },
                { label: 'مسار المحور X/Z', value: '-1.97"~+22.4" / 31.5"' },
                { label: 'الاجتياز السريع', value: '787 ipm' },
                { label: 'دوران المحور C', value: '0.001°' }
              ]
            },
            {
              group: 'الأدوات الحية',
              items: [
                { label: 'سعة المجلة', value: '12 ATC' },
                { label: 'سرعة / قوة الأداة الحية', value: '2,400 دورة/دقيقة / 10 حصان' },
                { label: 'مخروط شريط المغزل', value: '#50' }
              ]
            }
          ]
        },
        {
          title: 'MAKINO A77',
          desc: 'مركز معالجة أفقي، أداء عالٍ في الإنتاج المتسلسل.',
          image: '/urunler/MakineParkuru/MAKINO_A77.jpg',
          specs: ['معالجة أفقية', 'سرعة عالية', 'مغير منصات تلقائي'],
          details: [
            {
              group: 'البيانات العامة وحركة المحاور',
              items: [
                { label: 'نظام التحكم', value: 'Fanuc PRO-3' },
                { label: 'المحور X / Y / Z', value: '800 / 750 / 770 مم' },
                { label: 'العبور السريع', value: '35 م/دقيقة' }
              ]
            },
            {
              group: 'المغزل والأدوات',
              items: [
                { label: 'نطاق السرعة', value: '10,000 دورة/دقيقة' },
                { label: 'قوة المغزل', value: '30 كيلو واط' },
                { label: 'مستدق الأداة', value: 'HSK 100' },
                { label: 'مغير الأدوات', value: '90 موقع' },
                { label: 'نظام التبريد عبر المغزل', value: '70 بار' }
              ]
            },
            {
              group: 'المنصات والطاولة',
              items: [
                { label: 'حجم المنصة', value: '630 × 630 مم' },
                { label: 'حمولة الطاولة', value: '1200 كجم' },
                { label: 'مغير المنصات', value: 'نوعان' },
                { label: 'إمالة الطاولة الدوارة', value: '1 درجة' }
              ]
            },
            {
              group: 'الخصائص الفيزيائية',
              items: [
                { label: 'وزن الماكينة', value: '15 طن' }
              ]
            }
          ]
        },
        {
          title: 'MAZAK NEXUS 350M',
          desc: 'مركز خراطة متقدم مع قدرة على التفريز.',
          image: '/urunler/MakineParkuru/MAZAK_NEXUS 350M.jpg',
          specs: ['أدوات حية', 'كفاءة عالية', 'سلسلة Nexus'],
          details: [
            {
              group: 'المغزل الرئيسي',
              items: [
                { label: 'قوة / سرعة المغزل', value: '30 كيلو واط / 3,300 دورة/دقيقة' },
                { label: 'أقصى قطر للقضيب', value: '102 مم' },
                { label: 'أقصى قطر للخراطة', value: '420 مم' },
                { label: 'قطر التأرجح', value: '750 مم' },
                { label: 'أنف المغزل', value: 'A2-8' },
                { label: 'مؤشر المحور C', value: '0.001°' }
              ]
            },
            {
              group: 'البرج والأدوات الحية',
              items: [
                { label: 'المواقع', value: '12 / 12 (آلية)' },
                { label: 'شوط X/Z', value: '260 / 1605 مم' },
                { label: 'نوع الأداة', value: 'VDI 50' },
                { label: 'سرعة الأداة الحية', value: '25-4000 دورة/دقيقة / 7.5kW' }
              ]
            },
            {
              group: 'الغراب الخلفي والطاقة',
              items: [
                { label: 'نوع / مخروط الغراب', value: 'Numérique / CM4' },
                { label: 'المسافة بين المراكز', value: '1,500 مم' },
                { label: 'إمداد الطاقة', value: '400V / 55kVA' }
              ]
            },
            {
              group: 'الوزن والأبعاد',
              items: [
                { label: 'مساحة الأرضية', value: '4,270 × 2,050 مم' },
                { label: 'الارتفاع', value: '2,000 مم' },
                { label: 'الوزن', value: '7,500 كجم' }
              ]
            }
          ]
        },
        {
          title: 'Mazak QT25',
          desc: 'سلسلة Quick Turn، مثالية للأجزاء السريعة والدقيقة.',
          image: '/urunler/MakineParkuru/Mazak_QT25.jpg',
          specs: ['دورة سريعة', 'معالجة دقيقة', 'وثوقية'],
          details: [
            {
              group: 'البيانات العامة',
              items: [
                { label: 'التحكم', value: 'MAZATROL T2' },
                { label: 'الظرف', value: '10″ هيدروليكي' },
                { label: 'أقصى تأرجح / قطر دوران', value: '510 مم / 320 مم' },
                { label: 'أقصى طول دوران', value: '1010 مم' },
                { label: 'سعة الشريط', value: '70 مم' }
              ]
            },
            {
              group: 'المغزل والمحاور',
              items: [
                { label: 'القوة', value: '18 كيلو واط' },
                { label: 'أنف المغزل / التجويف', value: 'A2-8 / 80 مم' },
                { label: 'سرعة المغزل', value: '30 – 3000 دورة/دقيقة' },
                { label: 'حركة المحور X / Z', value: '200 مم / 1018 مم' }
              ]
            },
            {
              group: 'البرج والغراب الخلفي',
              items: [
                { label: 'البرج', value: '16 محطة' },
                { label: 'العبور السريع X/Z', value: '12000/24000 مم/دقيقة' },
                { label: 'حركة المغزل / الغراب', value: '130 مم / 32.9 مم' }
              ]
            },
            {
              group: 'الخصائص الفيزيائية',
              items: [
                { label: 'الأبعاد (ط×ع×ا)', value: '3250 × 1800 × 1850 مم' },
                { label: 'الوزن', value: '4600 كجم' }
              ]
            }
          ]
        },
        {
          title: 'Mazak QT28',
          desc: 'سلسلة Quick Turn عالية الأداء مع قدرة موسعة.',
          image: '/urunler/MakineParkuru/MAZAK_QT28.jpg',
          specs: ['سعة إضافية', 'جسم صلب', 'تحكم Mazatrol'],
          details: [
            {
              group: 'السعة',
              items: [
                { label: 'قطر الخراطة', value: '310 مم' },
                { label: 'قطر التأرجح', value: '510 مم' },
                { label: 'طول الخراطة', value: '1010 مم' },
                { label: 'قطر القضيب', value: '70 مم' }
              ]
            },
            {
              group: 'الحركة والتحكم',
              items: [
                { label: 'التحكم', value: 'Mazatrol T32-2' },
                { label: 'مسار X/Z', value: '265 مم / 1020 مم' },
                { label: 'العبور السريع X/Z', value: '18 / 24 م/دقيقة' }
              ]
            },
            {
              group: 'المغزل والبرج',
              items: [
                { label: 'سرعة المغزل', value: '30-3000 دورة/دقيقة' },
                { label: 'محطات البرج', value: '12 (2x6)' }
              ]
            },
            {
              group: 'الخصائص الفيزيائية',
              items: [
                { label: 'متطلبات الطاقة', value: '41 kVA' },
                { label: 'الأبعاد', value: '3.6 × 2.0 × 2.0 م' },
                { label: 'الوزن', value: '6.3 طن' }
              ]
            }
          ]
        },
        {
          title: 'HARDINGE VMC 1000II',
          desc: 'مركز معالجة عمودي يوفر ثباتاً عالياً حتى في السرعات العالية.',
          image: '/urunler/MakineParkuru/HARDINGE_VMC_1000II.jpg',
          specs: ['معالجة عمودية', 'طاولة 1000 مم', 'دوران عالٍ'],
          details: [
            {
              group: 'معلومات عامة والطاولة',
              items: [
                { label: 'نوع نظام التحكم (CNC)', value: 'Siemens 810' },
                { label: 'طول × عرض الطاولة', value: '1200 × 450 مم' },
                { label: 'أقصى وزن لقطعة العمل', value: '700 كجم' },
                { label: 'طاولة دوارة (المحور الرابع)', value: 'لا' }
              ]
            },
            {
              group: 'حركة المحاور',
              items: [
                { label: 'حركة المحور X', value: '1000 مم' },
                { label: 'حركة المحور Y', value: '510 مم' },
                { label: 'حركة المحور Z', value: '510 مم' }
              ]
            },
            {
              group: 'المغزل والأدوات',
              items: [
                { label: 'مخروط المغزل', value: 'BT40' },
                { label: 'السرعة القصوى للمغزل', value: '8000 دورة/دقيقة' },
                { label: 'قوة محرك المغزل', value: '13 كيلو واط' },
                { label: 'عدد الأدوات', value: '20' }
              ]
            },
            {
              group: 'الخصائص الفيزيائية',
              items: [
                { label: 'الأبعاد (الطول×العرض×الارتفاع)', value: '2768 × 2184 × 2565 مم' },
                { label: 'الوزن', value: '4640 كجم' }
              ]
            }
          ]
        },
        {
          title: 'SPINNER U1520',
          desc: 'مركز معالجة عالمي بـ 5 محاور للأشكال الهندسية المعقدة.',
          image: '/urunler/MakineParkuru/SPINNER_U1520.jpg',
          specs: ['5 محاور', 'معالجة أجزاء معقدة', 'منطقة عمل واسعة'],
          details: [
            {
              group: 'معلومات عامة',
              items: [
                { label: 'سنة الموديل / ساعات', value: '2013 / 5000 ساعة' },
                { label: 'نظام التحكم', value: 'Siemens Sinumerik' },
                { label: 'تكوين المحاور', value: '5 محاور (4 مستمرة+1)' }
              ]
            },
            {
              group: 'المغزل والمحاور',
              items: [
                { label: 'سرعة المغزل', value: '12000 دورة/دقيقة' },
                { label: 'المحور X / Y / Z', value: '1500 / 500 / 600 مم' }
              ]
            },
            {
              group: 'الأدوات والطاولة',
              items: [
                { label: 'حامل الأداة', value: 'SK40, 40 BT/ISO/HSK' },
                { label: 'سعة الأدوات', value: '32 أداة' },
                { label: 'الطاولة – المنصة', value: 'قطر 650 مم' }
              ]
            },
            {
              group: 'التبريد والضغط',
              items: [
                { label: 'التبريد عبر المغزل', value: 'نعم (80 بار)' },
                { label: 'الهواء عبر المغزل', value: 'نعم' }
              ]
            }
          ]
        },
        {
          title: 'JUNKER EJ29',
          desc: 'جودة سطح مثالية مع حلول التجليخ الدقيقة.',
          image: '/urunler/MakineParkuru/JUNKER_EJ29.jpg',
          specs: ['تجليخ دقيق', 'قابلية للتوسع', 'تكنولوجيا ألمانية'],
          details: [
            {
              group: 'معلومات عامة',
              items: [
                { label: 'سنة الصنع', value: '2002' },
                { label: 'نوع الماكينة', value: 'تجليخ أسطواني' },
                { label: 'التحكم', value: 'FANUC 21i-T' }
              ]
            },
            {
              group: 'الميزات والسعة',
              items: [
                { label: 'قطر عجلة التجليخ', value: '400 مم' },
                { label: 'أقصى قطر تجليخ', value: '280 مم' },
                { label: 'أقصى طول تجليخ', value: '600 مم' },
                { label: 'سرعة المغزل', value: '1000 دورة/دقيقة' },
                { label: 'قوة المحرك', value: '4.5 كيلو واط' }
              ]
            },
            {
              group: 'الخصائص الفيزيائية',
              items: [
                { label: 'الأبعاد (الطول×العرض×الارتفاع)', value: '3340 × 1960 × 2050 مم' },
                { label: 'الوزن', value: '5000 كجم' }
              ]
            }
          ]
        },
        {
          title: 'ABERLINK HALO L2000',
          desc: 'ضمان مراقبة الجودة مع جهاز قياس CMM المتقدم.',
          image: '/urunler/MakineParkuru/ABERLINK_HALO_L2000.png',
          specs: ['قياس ثلاثي الأبعاد', 'دقة عالية', 'تقارير سريعة'],
          details: [
            {
              group: 'الحركة والأبعاد (Halo L)',
              items: [
                { label: 'حركة المحاور (X/Y/Z)', value: '1000 / 1200, 2000 / 800 مم' },
                { label: 'الأبعاد الكلية (X/Y/Z)', value: '1603 / 1830, 2630 / 2987, 3037 مم' },
                { label: 'القدرة الاستيعابية للطاولة', value: '1000 كجم' },
                { label: 'بناء الطاولة', value: 'جرانيت صلب' }
              ]
            },
            {
              group: 'الأداء والدقة',
              items: [
                { label: 'دقة المقياس', value: '0.1 ميكرومتر' },
                { label: 'السرعة القصوى', value: '1000 مم/ث' },
                { label: 'التسارع الأقصى', value: '1000 مم/ث²' },
                { label: 'الدقة الحجمية', value: 'TP20: 2.1µm + L/250mm' }
              ]
            },
            {
              group: 'ظروف التشغيل',
              items: [
                { label: 'الهيكل / التحكم', value: 'جسر / CNC' },
                { label: 'ضغط الهواء المطلوب', value: '7 بار (100 psi) - 100 لتر/دقيقة' },
                { label: 'نطاق درجة الحرارة', value: '5 - 45°C (المثالي 18-22°C)' },
                { label: 'البيئة الملائمة', value: 'غرفة التحكم / بيئة الإنتاج' }
              ]
            }
          ]
        }
      ]
    },
    whatsapp: 'دعم واتساب',
  },
};

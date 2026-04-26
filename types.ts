
export interface Machine {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
}

export type View = 'home' | 'products' | 'about' | 'production' | 'machinery' | 'quality' | 'integratedPolicy' | 'qualityManagement' | 'environmentalManagement' | 'ohsManagement' | 'informationSecurity' | 'services' | 'catalog' | 'certificates' | 'contact';

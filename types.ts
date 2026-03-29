
export interface Machine {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
}

export type View = 'home' | 'products' | 'about' | 'production' | 'quality' | 'contact';

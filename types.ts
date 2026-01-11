
export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  image?: string;
  description: string;
}

export interface Business {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
}
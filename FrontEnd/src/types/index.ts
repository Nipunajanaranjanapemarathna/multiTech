export interface Product {
  id: string;
  name: string;
  price: {
    usd: number;
    lkr: number;
  };
  image: string;
  description: string;
  volume: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  image: string;
}

export interface Ingredient {
  id: string;
  name: string;
  benefits: string[];
  image: string;
  color: string;
}

export interface Currency {
  code: 'USD' | 'LKR';
  symbol: string;
  rate: number;
}
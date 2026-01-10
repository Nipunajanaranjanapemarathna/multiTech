import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'ElixirX Original',
    price: {
      usd: 24.99,
      lkr: 8150
    },
    image: 'https://images.pexels.com/photos/5946064/pexels-photo-5946064.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Pure King Coconut water with natural tropical essence',
    volume: '500ml',
    inStock: true
  },
  {
    id: '2',
    name: 'ElixirX Premium',
    price: {
      usd: 34.99,
      lkr: 11450
    },
    image: 'https://images.pexels.com/photos/5946111/pexels-photo-5946111.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Enhanced with ginger and pineapple extracts',
    volume: '750ml',
    inStock: true
  },
  {
    id: '3',
    name: 'ElixirX Royal',
    price: {
      usd: 49.99,
      lkr: 16350
    },
    image: 'https://images.pexels.com/photos/5946115/pexels-photo-5946115.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Ultimate vitality blend with rare tropical botanicals',
    volume: '1L',
    inStock: true
  }
];
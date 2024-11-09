import { Product } from './product.types';

export type Collection = {
  id: number;
  name: string;
  slug: string;
  description: string;
  createdAt: string; // datetime
  collectionsProducts: {
    products: Product;
  }[];
};

import { ProductCardData } from './product.types';

export type Collection = {
  id: number;
  name: string;
  slug: string;
  description: string;
  products: ProductCardData[];
};

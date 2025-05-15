import { ProductCardData } from './product.types';

export type Collection = {
  id: string;
  name: string;
  slug: string;
  description: string;
  products: ProductCardData[];
};

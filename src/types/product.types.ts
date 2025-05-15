import { PaginationQuery } from './api.types';

export type ProductMediaType = 'IMAGE' | 'VIDEO';

export type ProductMedia = {
  id: string;
  url: string;
  caption: string;
  type: ProductMediaType;
  createdAt: string;
  updatedAt: string;
};

export type ProductCardData = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  quantity: number;
  medias: ProductMedia[];
  createdAt: string; // datetime
  updatedAt: string;
  categoryId: string | null;
  productTypeId: string;
  collectionId: string | null;
};

export type AttributeType = 'OPTION' | 'TEXT' | 'RICH_TEXT' | 'SWATCH';

export type Attribute = {
  id: string;
  name: string;
  code: string;
  type: AttributeType;
  isRequired: boolean;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ProductAttribute = {
  id: string;
  attribute: Attribute;
  value: string;
};

export type ProductVariant = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  weightInKg: number | null;
  productId: string;
  isDefault: boolean;
};

export type Product = ProductCardData & {
  productAttributes: ProductAttribute[];
  productVariants: ProductVariant[];
  avgReviewRating: number | null;
  reviewCount: number;
};

export type FetchProductSortBy = 'createdAt' | 'price' | 'name';
export type FetchProductQuery = PaginationQuery &
  Partial<{
    search: string;
    sortBy: FetchProductSortBy;
    categoryId: string;
  }>;

export type CartItemData = {
  product: Product;
  selectedQuantity: number;
};

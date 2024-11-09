export type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  images: string[];
  createdAt: string; // datetime
  categoryId: number | null;
};

export type CartItemData = {
  product: Product;
  selectedQuantity: number;
};

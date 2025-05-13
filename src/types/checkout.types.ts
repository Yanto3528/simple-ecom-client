import { ProductCardData } from './product.types';

export type CheckoutSessionStatus = 'ACTIVE' | 'COMPLETE' | 'EXPIRED';

export type CheckoutSessionItem = {
  id: string;
  sessionId: string;
  productId: string;
  quantity: number;
  price: number;
  total: number;
  product: ProductCardData;
};

export type CheckoutSession = {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  expiresAt: string;
  status: CheckoutSessionStatus;
  subtotal: number;
  total: number;
  currency: string;
  paymentIntentClientSecret: string;
  items: CheckoutSessionItem[];
};

export type CreateCheckoutSessionPayload = {
  items: {
    productId: string;
    quantity: number;
  }[];
};

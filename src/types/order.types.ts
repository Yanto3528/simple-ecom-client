import { ProductCardData } from './product.types';

export type CreateOrderPayload = {
  checkoutSessionId: string;
  shippingInfo: {
    name: string;
    address: {
      city: string;
      country: string;
      line1: string;
      line2: string | null;
      postal_code: string;
      state: string;
    };
  };
};

export type OrderStatus = 'PROCESSING' | 'IN_DELIVERY' | 'DELIVERED' | 'CANCELLED';
export type OrderPaymentStatus = 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';
export type OrderItem = {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  total: number;
  product: ProductCardData;
};

export type Order = {
  id: string;
  userId: string;
  checkoutSessionId: string;
  createdAt: string;
  updatedAt: string;
  status: OrderStatus;
  paymentStatus: OrderPaymentStatus;
  subtotal: number;
  total: number;
  currency: string;
  shippingInfo: {
    name: string;
    address: {
      city: string;
      line1: string;
      line2: string | null;
      state: string;
      country: string;
      postal_code: string;
    };
  };
  items: OrderItem[];
};

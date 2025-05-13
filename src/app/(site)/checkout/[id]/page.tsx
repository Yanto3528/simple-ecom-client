import { CheckoutForm } from '@/page-components/checkout/CheckoutForm';
import { OrderSummary } from '@/page-components/checkout/OrderSummary';
import { fetchCheckoutSession } from '@/services/checkout-sessions.service';
import { DynamicPageProps } from '@/types/page.types';

type CheckoutPageProps = {
  id: string;
};

export default async function CheckoutPage({ params }: DynamicPageProps<CheckoutPageProps>) {
  const { id } = await params;
  const checkoutSession = await fetchCheckoutSession(id);

  return (
    <div className="flex gap-6 items-start relative pb-20">
      <div className="flex-1">
        <h1 className="ts-heading-base mb-4">Checkout</h1>
        <CheckoutForm clientSecret={checkoutSession.paymentIntentClientSecret} />
      </div>
      <OrderSummary data={checkoutSession} />
    </div>
  );
}

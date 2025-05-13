import { FormEventHandler, useState } from 'react';

import { PaymentElement, useStripe, useElements, AddressElement } from '@stripe/react-stripe-js';
import { AlertCircle } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/Button';
import { Spinner } from '@/components/ui/Spinner';
import { useCreateOrderMutation } from '@/hooks/services/orders.service.hook';
import { CreateOrderPayload } from '@/types/order.types';

export function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { id } = useParams();
  const router = useRouter();

  const [message, setMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [isStripeLoading, setIsStripeLoading] = useState(true);

  const { mutateAsync: createOrder } = useCreateOrderMutation();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const address = elements.getElement('address');
    let shippingInfo: CreateOrderPayload['shippingInfo'] | undefined;
    if (address) {
      const { complete, value } = await address.getValue();
      if (complete) {
        shippingInfo = value;
      }
    }

    if (!shippingInfo) {
      setMessage('No shipping info provided! Please enter your shipping info');
      setIsLoading(false);
      return;
    }

    const order = await createOrder({
      checkoutSessionId: id as string,
      shippingInfo,
    });

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/orders/${order.id}`,
      },
      redirect: 'if_required',
    });

    setIsLoading(false);
    if (!error) {
      router.push(`/orders/${order.id}`);
      return;
    }

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative min-h-56 flex flex-col gap-10">
        <div>
          {!isStripeLoading && <h2 className="mb-2 ts-heading-xs">Shipping Information</h2>}
          <AddressElement options={{ mode: 'shipping' }} />
        </div>
        <div>
          {!isStripeLoading && <h2 className="ts-heading-xs mb-2">Payment</h2>}
          <PaymentElement
            onReady={() => {
              setIsStripeLoading(false);
            }}
            options={{ layout: 'tabs' }}
          />
        </div>
        {isStripeLoading && (
          <div className="absolute inset-0 bg-white bg-opacity-30 flex items-center justify-center">
            <Spinner />
          </div>
        )}
      </div>
      {!isStripeLoading && (
        <Button type="submit" className="w-full mt-4" loading={isLoading}>
          Pay now
        </Button>
      )}
      {/* Show any error or success messages */}
      {message && (
        <div className="text-danger font-semibold mt-3 bg-danger-light p-4 rounded-md flex items-center gap-2">
          <AlertCircle />
          <span>An unexpected error occurred.</span>
        </div>
      )}
    </form>
  );
}

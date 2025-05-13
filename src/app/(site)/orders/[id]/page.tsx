import { fetchOrderById } from '@/services/orders.service';
import { DynamicPageProps } from '@/types/page.types';

type OrderSuccessPageProps = {
  id: string;
};

export default async function OrderSuccessPage({
  params,
}: DynamicPageProps<OrderSuccessPageProps>) {
  const { id } = await params;
  const order = await fetchOrderById(id);

  return (
    <div className="flex gap-6 items-start relative pb-20">
      <h1>Order successful</h1>
      <p>{order.id}</p>
    </div>
  );
}

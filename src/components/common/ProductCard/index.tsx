import {
  Card,
  CardBody,
  CardDescription,
  CardImage,
  CardSubtitle,
  CardTitle,
} from '@/components/ui/Card';
import { formatPrice } from '@/lib/number.utils';
import { Product } from '@/types/product.types';

type ProductCardProps = {
  data: Product;
};

const images = [
  'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export function ProductCard({ data }: ProductCardProps) {
  const { name, category, description, price } = data;

  return (
    <Card className="h-full">
      <CardImage
        className="overflow-hidden"
        imageProps={{
          src: images[0],
          alt: name,
          className: 'hover:scale-110 transition-all duration-500',
        }}
      />
      <CardBody className="flex flex-col">
        <div className="flex-1">
          <CardSubtitle>{category}</CardSubtitle>
          <CardTitle>{name}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </div>
        <p className="ts-body-base font-medium mt-3">{formatPrice(price)}</p>
      </CardBody>
    </Card>
  );
}

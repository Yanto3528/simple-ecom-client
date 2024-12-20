import { FeaturedProducts } from '@/page-components/home/FeaturedProducts';
import { Hero } from '@/page-components/home/Hero';
import { PopularProducts } from '@/page-components/home/PopularProducts';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <PopularProducts />
    </>
  );
}

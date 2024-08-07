import { ProductCard } from '@/components/common/ProductCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevNext,
} from '@/components/ui/Carousel';

const products = [
  {
    id: 1,
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Extra spicy Burger',
    category: 'Food',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestiae?',
    price: 9.99,
  },
  {
    id: 2,
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Double Cheese Burger',
    category: 'Food',
    description: 'Lorem ipsum dolor sit',
    price: 19.99,
  },
  {
    id: 3,
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Beef Burger',
    category: 'Food',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestiae?',
    price: 39.99,
  },
  {
    id: 4,
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Chicken Cheese Burger',
    category: 'Food',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    price: 14.99,
  },
  {
    id: 5,
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Big Mac',
    category: 'Food',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestiae?',
    price: 24.99,
  },
  {
    id: 6,
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Fish Burger',
    category: 'Food',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestiae?',
    price: 29.99,
  },
  {
    id: 7,
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Jumbo Double Beef Burger',
    category: 'Food',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestiae?',
    price: 9.99,
  },
  {
    id: 8,
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'King of Burger',
    category: 'Food',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestiae?',
    price: 119.99,
  },
];

export function PopularProducts() {
  return (
    <div className="pb-20">
      <Carousel opts={{ slidesToScroll: 3 }}>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="ts-heading-sm">Popular Menu</h2>
            <p className="text-foreground-subtle">Recommended by other users</p>
          </div>
          <CarouselPrevNext position="static" />
        </div>
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem className="basis-[30%]" key={product.id}>
              <ProductCard data={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

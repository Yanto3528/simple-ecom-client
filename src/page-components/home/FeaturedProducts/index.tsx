import { ProductCard } from '@/components/common/ProductCard';

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

export function FeaturedProducts() {
  return (
    <div className="pb-20">
      <div className="flex flex-col items-center gap-2 mb-10">
        <h2 className="ts-heading-lg">Featured Menu</h2>
        <p className="text-foreground-subtle">Newly created menu to satisfy you</p>
      </div>
      <div className="grid grid-cols-home-grid-products gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export const paths = {
  home: () => '/',
  products: {
    index: () => `/products`,
    details: (slug: string) => `/products/${slug}`,
  },
  search: () => `/search`,
  categories: {
    details: (slug: string) => `/categories/${slug}`,
  },
  checkout: (id: string) => `/checkout/${id}`,
};

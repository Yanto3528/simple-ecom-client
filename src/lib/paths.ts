export const paths = {
  home: () => '/',
  products: {
    details: (slug: string) => `/products/${slug}`,
  },
  checkout: (id: string) => `/checkout/${id}`,
};

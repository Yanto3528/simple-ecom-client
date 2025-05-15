export type DynamicPageProps<
  T extends Record<string, string>,
  K extends Record<string, string> = {},
> = {
  params: Promise<T>;
  searchParams?: Promise<K>;
};

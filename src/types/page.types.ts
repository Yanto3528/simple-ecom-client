export type DynamicPageProps<T extends Record<string, string>> = {
  params: Promise<T>;
};

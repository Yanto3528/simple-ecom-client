import { useRouter, useSearchParams } from 'next/navigation';

type QueryParamsArgs = {
  key: string;
  value: string;
};

export function useUpdateQueryParams() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQueryParams = (params: QueryParamsArgs[]) => {
    const newSearchParams = new URLSearchParams(searchParams);
    params.forEach(({ key, value }) => {
      newSearchParams.set(key, value);
    });
    router.push(`?${newSearchParams.toString()}`, { scroll: false });
  };

  return { updateQueryParams };
}

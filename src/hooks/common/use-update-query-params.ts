import { useRouter, useSearchParams } from 'next/navigation';

type QueryParamsArgs = {
  key: string;
  value: string;
};

export function useUpdateQueryParams() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQueryParams = (params: QueryParamsArgs[], url = '') => {
    const newSearchParams = new URLSearchParams(searchParams);
    params.forEach(({ key, value }) => {
      if (!value) {
        newSearchParams.delete(key);
      } else {
        newSearchParams.set(key, value);
      }
    });
    router.push(`${url}?${newSearchParams.toString()}`, { scroll: false });
  };

  return { updateQueryParams };
}

'use client';

import { useState } from 'react';

import { Combobox } from '@/components/ui/Combobox';
import { useUpdateQueryParams } from '@/hooks/common/use-update-query-params';
import { SortOrder } from '@/types/api.types';
import { FetchProductSortBy } from '@/types/product.types';

const sortOptions = [
  {
    label: 'Alphabetically, A-Z',
    value: 'name-asc',
  },
  {
    label: 'Alphabetically, Z-A',
    value: 'name-desc',
  },
  {
    label: 'Price, low to high',
    value: 'price-asc',
  },
  {
    label: 'Price, high to low',
    value: 'price-desc',
  },
  {
    label: 'Newest',
    value: 'createdAt-desc',
  },
  {
    label: 'Oldest',
    value: 'createdAt-asc',
  },
];

type Props = {
  sortBy: FetchProductSortBy;
  sortOrder: SortOrder;
};

export function SelectSort({ sortBy, sortOrder }: Props) {
  const [selectedSort, setSelectedSort] = useState(() => {
    const sortValue = `${sortBy}-${sortOrder}`;
    const sortOption = sortOptions.find((option) => option.value === sortValue);
    return sortOption ? sortOption.value : sortOptions[0].value;
  });
  const { updateQueryParams } = useUpdateQueryParams();

  const handleChange = (value: string) => {
    const [sortByValue, sortOrderValue] = value.split('-');
    setSelectedSort(value);
    updateQueryParams([
      {
        key: 'sortBy',
        value: sortByValue,
      },
      {
        key: 'sortOrder',
        value: sortOrderValue,
      },
    ]);
  };

  return (
    <div className="sm:w-[20%]">
      <Combobox options={sortOptions} value={selectedSort} onChange={handleChange} />
    </div>
  );
}

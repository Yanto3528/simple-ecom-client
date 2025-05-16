'use client';

import { useState } from 'react';

import { InputSearch } from '@/components/ui/InputSearch';
import { useUpdateQueryParams } from '@/hooks/common/use-update-query-params';

export function Searchbar() {
  const [searchValue, setSearchValue] = useState('');
  const { updateQueryParams } = useUpdateQueryParams();

  const handleSearch = (query: string) => {
    if (!query) return;

    updateQueryParams(
      [
        {
          key: 'q',
          value: query,
        },
      ],
      '/search'
    );
  };

  return (
    <div className="max-w-[400px] flex-1">
      <InputSearch
        value={searchValue}
        onChange={setSearchValue}
        onSearch={handleSearch}
        placeholder="Search product..."
      />
    </div>
  );
}

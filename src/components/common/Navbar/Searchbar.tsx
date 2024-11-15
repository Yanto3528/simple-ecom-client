'use client';

import { useState } from 'react';

import { InputSearch } from '@/components/ui/InputSearch';

export function Searchbar() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="max-w-[400px] flex-1">
      <InputSearch value={searchValue} onChange={setSearchValue} placeholder="Search product..." />
    </div>
  );
}

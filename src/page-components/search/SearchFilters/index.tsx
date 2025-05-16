'use client';

import { useState } from 'react';

import { PriceFilterSlider } from '@/components/common/PriceFilterSlider';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { useUpdateQueryParams } from '@/hooks/common/use-update-query-params';
import { Category } from '@/types/category.types';

type PriceState = [number, number];
type CategoryState = Record<string, boolean>;
type Props = {
  minPrice: number;
  maxPrice: number;
  categories: Category[];
};

export function SearchFilters({ categories, minPrice = 0, maxPrice = 7000 }: Props) {
  const [priceSlider, setPriceSlider] = useState<PriceState>([minPrice, maxPrice]);
  const [selectedCategories, setSelectedCategories] = useState<CategoryState>({});
  const { updateQueryParams } = useUpdateQueryParams();

  const handleApplyFilters = () => {
    const categoryParams = Object.entries(selectedCategories).reduce((acc, [key, value]) => {
      if (value) {
        acc.push(key);
      }

      return acc;
    }, [] as string[]);

    const searchParamsPayload = [
      {
        key: 'minPrice',
        value: String(priceSlider[0]),
      },
      {
        key: 'maxPrice',
        value: String(priceSlider[1]),
      },
      {
        key: 'categoryIds',
        value: String(categoryParams),
      },
    ];

    updateQueryParams(searchParamsPayload);
  };

  const handleCheckboxChange = (id: string) => (value: boolean) => {
    setSelectedCategories((prevSelectedCategories) => ({
      ...prevSelectedCategories,
      [id]: value,
    }));
  };

  return (
    <div>
      <h2 className="ts-body-lg uppercase pb-2 border-b border-border">Filters</h2>
      <div className="mb-6">
        <div className="py-4 border-b border-border">
          <span className="ts-body-sm uppercase font-bold mb-2 block">Category</span>
          <div className="flex flex-col gap-2">
            {categories.map((category) => (
              <Checkbox
                key={category.id}
                label={category.name}
                checked={selectedCategories[category.id]}
                onChange={handleCheckboxChange(category.id)}
                id={category.id}
              />
            ))}
          </div>
        </div>
        <PriceFilterSlider
          value={priceSlider}
          onChange={setPriceSlider}
          min={0}
          max={10000}
          step={10}
        />
      </div>
      <Button className="w-full" onClick={handleApplyFilters}>
        Apply filter
      </Button>
    </div>
  );
}

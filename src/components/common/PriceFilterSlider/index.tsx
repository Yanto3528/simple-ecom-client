'use client';

import { Slider } from '@/components/ui/Slider';
import { formatPrice } from '@/utils/number.utils';

type State = [number, number];
type Props = {
  value: State;
  onChange: (val: State) => void;
  min: number;
  max: number;
  step: number;
};

export function PriceFilterSlider({ value, min, max, step, onChange }: Props) {
  return (
    <div className="py-4 border-b border-border">
      <span className="uppercase font-bold mb-2 block ts-body-sm">Price</span>
      <Slider value={value} onChange={onChange} min={min} max={max} step={step} />
      <p className="mt-2 ts-body-sm">
        Price:{' '}
        <span className="font-semibold">
          {formatPrice(value[0])} - {formatPrice(value[1])}
        </span>
      </p>
    </div>
  );
}

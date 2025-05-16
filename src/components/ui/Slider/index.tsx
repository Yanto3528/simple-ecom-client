'use client';

import { Root, Track, Range, Thumb } from '@radix-ui/react-slider';

type Props = {
  value: [number, number];
  max: number;
  min: number;
  step: number;
  onChange: (value: [number, number]) => void;
};

export function Slider({ value, min, max, step, onChange }: Props) {
  return (
    <Root
      className="relative flex h-5 w-full touch-none select-none items-center"
      value={value}
      min={min}
      max={max}
      step={step}
      onValueChange={onChange}
      minStepsBetweenThumbs={step}
    >
      <Track className="relative h-[3px] grow rounded-full bg-primary-light cursor-pointer">
        <Range className="absolute h-full rounded-full bg-primary" />
      </Track>
      <Thumb
        className="block size-5 rounded-full bg-white shadow-md border-2 border-primary outline-none cursor-pointer"
        aria-label="Price Min"
      />
      <Thumb
        className="block size-5 rounded-full bg-white shadow-md border-2 border-primary outline-none cursor-pointer"
        aria-label="Price Max"
      />
    </Root>
  );
}

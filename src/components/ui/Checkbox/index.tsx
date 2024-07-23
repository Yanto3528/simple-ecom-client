import { forwardRef } from 'react';

import { Root, Indicator, CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

import { FormLabel } from '../FormLabel';

export interface CheckboxProps extends Omit<RadixCheckboxProps, 'onCheckedChange' | 'onChange'> {
  label?: string;
  checkedLabel?: string;
  onChange?: (checked: boolean) => void;
  wrapperClassName?: string;
  labelClassName?: string;
  indicatorClassName?: string;
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      id,
      label,
      checkedLabel,
      onChange,
      checked,
      className,
      wrapperClassName,
      labelClassName,
      indicatorClassName,
      ...props
    },
    ref
  ) => {
    const displayLabel = checked ? checkedLabel || label : label;

    return (
      <div className={twMerge('flex items-center gap-2 cursor-pointer', wrapperClassName)}>
        <Root
          className={twMerge(
            'aspect-square w-4 rounded-sm border border-input-border bg-input transition-all hover:border-primary data-[state=checked]:border-primary data-[state=checked]:bg-primary',
            className
          )}
          id={id}
          onCheckedChange={onChange}
          checked={checked}
          ref={ref}
          {...props}
        >
          <Indicator
            className={twMerge(
              'flex items-center justify-center text-white transition-all data-[state=checked]:animate-scale-in data-[state=unchecked]:animate-scale-out',
              indicatorClassName
            )}
          >
            <CheckIcon size={12} />
          </Indicator>
        </Root>
        {displayLabel && (
          <FormLabel
            className={twMerge('mb-0 font-normal cursor-pointer', labelClassName)}
            htmlFor={id}
          >
            {displayLabel}
          </FormLabel>
        )}
      </div>
    );
  }
);

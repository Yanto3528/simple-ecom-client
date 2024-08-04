'use client';

import {
  ComponentPropsWithoutRef,
  ReactNode,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { ChevronsUpDown, Search } from 'lucide-react';

import { cn } from '@/lib/utils';
import { FormElementProps } from '@/types/form.types';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../Command';
import { elementWrapperStyles } from '../FormElementWrapper/FormElementWrapper.styles';
import { FormErrorMessage } from '../FormErrorMessage';
import { FormLabel } from '../FormLabel';
import { inputIconStyles, inputStyles } from '../Input/Input.styles';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';

export type ComboboxOption = {
  value: string;
  label: string;
};

export type ComboboxProps = Omit<ComponentPropsWithoutRef<'button'>, 'onChange'> &
  FormElementProps & {
    options?: ComboboxOption[];
    value?: string;
    placeholder?: string;
    searchable?: boolean;
    emptyData?: ReactNode;
    onChange?: (selectedValue: string) => void;
  };

const normalizeOptions = (options: ComboboxOption[] | undefined) => {
  if (!options) return {};

  return options.reduce(
    (accum, option) => {
      accum[option.value] = option;
      return accum;
    },
    {} as Record<string, ComboboxOption>
  );
};

export const Combobox = forwardRef<HTMLButtonElement, ComboboxProps>(
  (
    {
      name,
      colorScheme,
      disabled,
      error,
      radius,
      size,
      label,
      labelClassName,
      wrapperClassName,
      options,
      value,
      placeholder,
      searchable = true,
      emptyData = 'No data found',
      onChange,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);

    const optionsRef = useRef(normalizeOptions(options));

    useEffect(() => {
      optionsRef.current = normalizeOptions(options);
    }, [options]);

    const displayLabel = useMemo(() => {
      if (!value) return placeholder;

      return optionsRef.current[value].label;
    }, [optionsRef, placeholder, value]);

    return (
      <div className="w-full">
        {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              role="combobox"
              aria-controls={name}
              aria-expanded={open}
              ref={ref}
              className={elementWrapperStyles({
                colorScheme: error ? 'error' : colorScheme,
                disabled,
                radius,
                size,
                className: cn(
                  'min-w-52 data-[state=open]:ring-primary-light data-[state=open]:ring-2',
                  wrapperClassName
                ),
              })}
              {...props}
            >
              <span
                className={inputStyles({
                  className: cn(
                    'block truncate h-auto',
                    (!value || (Array.isArray(value) && value.length === 0)) &&
                      'text-input-placeholder'
                  ),
                })}
              >
                {displayLabel}
              </span>
              <span className={inputIconStyles({ isRight: true })}>
                <ChevronsUpDown />
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
            <Command>
              {searchable && (
                <>
                  <CommandInput
                    className="py-2 sm:py-3 h-auto text-xs"
                    placeholder={placeholder}
                    rightElement={<Search />}
                    wrapperClassName="pr-0"
                  />
                  <CommandEmpty className="py-4">{emptyData}</CommandEmpty>
                </>
              )}
              <CommandList>
                <CommandGroup>
                  {options?.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={(currentValue) => {
                        onChange?.(currentValue === value ? '' : currentValue);
                        setOpen(false);
                      }}
                      className={cn(option.value === value && 'bg-secondary-light')}
                    >
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </div>
    );
  }
);

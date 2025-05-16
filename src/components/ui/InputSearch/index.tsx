'use client';

import { type ChangeEventHandler, forwardRef, KeyboardEventHandler, useEffect } from 'react';

import { SearchIcon, XIcon } from 'lucide-react';

import { useDebounce } from '@/hooks/common/use-debounce';

import { Button } from '../Button';
import { Input } from '../Input';
import type { InputProps } from '../Input';

export type InputSearchProps = Omit<InputProps, 'type' | 'onChange' | 'value'> & {
  clearable?: boolean;
  value?: string;
  onChange: (value: string) => void;
  onSearch?: (value: string) => void;
  onDebounceChange?: (value: string) => void;
};

export const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  ({ value, radius, clearable = true, onChange, onDebounceChange, onSearch, ...props }, ref) => {
    const debouncedValue = useDebounce(value);

    useEffect(() => {
      if (typeof debouncedValue === 'string') {
        onDebounceChange?.(debouncedValue);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
      onChange?.(event.currentTarget.value);
    const handleClear = () => onChange?.('');
    const handleSearch = () => onSearch?.(value || '');
    const onKeyUp: KeyboardEventHandler<HTMLInputElement> = (event) => {
      if (event.key === 'Enter') {
        onSearch?.(value || '');
      }
    };

    return (
      <div className="relative">
        <Input
          type="text"
          ref={ref}
          radius={radius}
          onChange={handleChange}
          value={value}
          onKeyUp={onKeyUp}
          rightElement={
            <div className="flex items-center gap-1">
              {clearable && !!value && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="p-0.5 h-full [&_svg]:w-3 [&_svg]:h-3 rounded-full focus:ring-0 bg-secondary-light enabled:hover:bg-secondary"
                  aria-label="clear search"
                >
                  <XIcon />
                </button>
              )}
              <Button
                type="button"
                onClick={handleSearch}
                className="py-1.5 px-2 h-full rounded-tl-none rounded-bl-none focus:ring-0"
                radius="sm"
                aria-label="Search"
              >
                <SearchIcon />
              </Button>
            </div>
          }
          rightElementClassName="px-0"
          {...props}
        />
      </div>
    );
  }
);

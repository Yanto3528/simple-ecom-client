'use client';

import { forwardRef, useMemo } from 'react';

import { Calendar as CalendarIcon } from 'lucide-react';

import { useToggle } from '@/hooks/use-toggle';
import { formatDate } from '@/lib/date.utils';
import { cn } from '@/lib/utils';
import { FormElementProps } from '@/types/form.types';

import { Calendar } from '../Calendar';
import { elementWrapperStyles } from '../FormElementWrapper/FormElementWrapper.styles';
import { FormErrorMessage } from '../FormErrorMessage';
import { FormLabel } from '../FormLabel';
import { inputIconStyles, inputStyles } from '../Input/Input.styles';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';

type SingleDatePicker = {
  mode?: 'single';
  value?: Date;
  onChange?: (date: Date) => void;
};

type RangeDatePicker = {
  mode: 'range';
  value?: Date[];
  onChange?: (date: Date[]) => void;
};

export type DatePickerProps = FormElementProps &
  (SingleDatePicker | RangeDatePicker) & {
    placeholder?: string;
  };

export const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    {
      colorScheme,
      disabled,
      error,
      label,
      labelClassName,
      radius,
      size,
      wrapperClassName,
      value,
      mode,
      placeholder = 'Pick a date',
      onChange,
    },
    ref
  ) => {
    const [isOpen, { set, close }] = useToggle();

    const handleChange = (selectedDate: Date[]) => {
      if (mode === 'range') {
        onChange?.(selectedDate);
      } else {
        onChange?.(selectedDate[0]);
      }

      close();
    };

    const displayValue = useMemo(() => {
      if (!value || (Array.isArray(value) && !value.length)) return placeholder;

      if (Array.isArray(value)) {
        return value.reduce((accum, date, index) => {
          const dateFormat = `${accum}${formatDate(date)}`;
          if (index !== value.length - 1) {
            return `${dateFormat} - `;
          }
          return dateFormat;
        }, '');
      }

      return formatDate(value, 'MMMM DD, YYYY');
    }, [value, placeholder]);

    return (
      <div className="w-full">
        {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
        <Popover open={isOpen} onOpenChange={set}>
          <PopoverTrigger asChild>
            <button
              type="button"
              ref={ref}
              disabled={disabled}
              className={elementWrapperStyles({
                colorScheme: error ? 'error' : colorScheme,
                size,
                disabled,
                radius,
                className: cn(
                  'min-w-52 data-[state=open]:ring-primary-light data-[state=open]:ring-2',
                  wrapperClassName
                ),
              })}
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
                {displayValue}
              </span>
              <span className={inputIconStyles({ isRight: true })}>
                <CalendarIcon />
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode={mode} value={value} onChange={handleChange} />
          </PopoverContent>
        </Popover>
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </div>
    );
  }
);

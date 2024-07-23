import { forwardRef, ComponentPropsWithoutRef, ChangeEventHandler } from 'react';

import { cn } from '@/lib/utils';
import { FormElementProps } from '@/types/form.types';

import { FormElementWrapper } from '../FormElementWrapper';
import { FormErrorMessage } from '../FormErrorMessage';
import { FormLabel } from '../FormLabel';

import { textareaStyles } from './Textarea.styles';

export type TextareaProps = Omit<
  ComponentPropsWithoutRef<'textarea'>,
  'size' | 'value' | 'onChange'
> &
  FormElementProps & {
    maxLength?: number;
    value?: string;
    onChange?: (value: string) => void;
  };

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      error,
      disabled,
      colorScheme,
      radius,
      label,
      labelClassName,
      wrapperClassName,
      size,
      id,
      rows = 5,
      maxLength,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
      const eventValue = event.currentTarget.value;
      if (maxLength && eventValue.length > maxLength) {
        return;
      }

      onChange?.(event.currentTarget.value);
    };

    return (
      <div className="w-full">
        <div className="flex items-center gap-3 justify-between">
          {label && (
            <FormLabel htmlFor={id} className={cn('flex-1', labelClassName)}>
              {label}
            </FormLabel>
          )}
          {maxLength && (
            <div className="text-foreground-subtle text-right flex-1 mb-1 text-xs">
              {value?.length || 0} / {maxLength}
            </div>
          )}
        </div>
        <FormElementWrapper
          error={error}
          disabled={disabled}
          colorScheme={colorScheme}
          size={size}
          radius={radius}
          className={cn('h-auto', wrapperClassName)}
        >
          <textarea
            ref={ref}
            className={textareaStyles({
              size,
              className,
            })}
            disabled={disabled}
            id={id}
            rows={rows}
            value={value}
            onChange={handleChange}
            {...props}
          />
        </FormElementWrapper>
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </div>
    );
  }
);

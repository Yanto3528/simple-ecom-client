import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { ChevronLeftIcon } from 'lucide-react';

import { dateButtonStyles } from '../Calendar.styles';

type CalendarHeaderProps = {
  children: ReactNode;
  prevButtonProps: ComponentPropsWithoutRef<'button'>;
  nextButtonProps: ComponentPropsWithoutRef<'button'>;
};

export function CalendarHeader({
  children,
  prevButtonProps,
  nextButtonProps,
}: CalendarHeaderProps) {
  return (
    <div className="grid grid-cols-calendar-header gap-4 items-center mb-4">
      <button type="button" className={dateButtonStyles({})} {...prevButtonProps}>
        <ChevronLeftIcon className="max-sm:w-4 max-sm:h-4" />
      </button>
      {children}
      <button type="button" className={dateButtonStyles({})} {...nextButtonProps}>
        <ChevronLeftIcon className="rotate-[180deg] max-sm:w-4 max-sm:h-4" />
      </button>
    </div>
  );
}

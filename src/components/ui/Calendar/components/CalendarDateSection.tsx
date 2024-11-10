import { MouseEventHandler } from 'react';

import {
  useContextCalendars,
  useContextDatePickerOffsetPropGetters,
  useContextDaysPropGetters,
} from '@rehookify/datepicker';
import dayjs from 'dayjs';

import { cn } from '@/utils';

import { Button } from '../../Button';
import { dayStyles, headerButtonStyles, headerTextStyles } from '../Calendar.styles';
import { CalendarSectionState } from '../Calendar.types';

import { CalendarHeader } from './CalendarHeader';

type CalendarDateSectionProps = {
  setCurrentSection: (section: CalendarSectionState) => void;
  onDateChanges: (dates: Date[]) => void;
  minDate?: Date;
  maxDate?: Date;
};

export function CalendarDateSection({
  setCurrentSection,
  onDateChanges,
  minDate,
  maxDate,
}: CalendarDateSectionProps) {
  const { calendars, weekDays } = useContextCalendars();
  const { dayButton } = useContextDaysPropGetters();
  const { addOffset, subtractOffset, setOffset } = useContextDatePickerOffsetPropGetters();

  const { days, month, year } = calendars[0];

  const handleMonthClick = () => {
    setCurrentSection('month');
  };

  const handleYearClick = () => {
    setCurrentSection('year');
  };

  const handleClickToday: MouseEventHandler<HTMLButtonElement> = (event) => {
    const { onClick } = setOffset(new Date());
    onDateChanges([new Date()]);
    onClick?.(event);
  };

  const isMinDateAfterNow = minDate ? dayjs(minDate).isAfter(dayjs(), 'day') : false;
  const isMaxDateBeforeNow = maxDate ? dayjs(maxDate).isBefore(dayjs(), 'day') : false;

  return (
    <div>
      <CalendarHeader
        prevButtonProps={{ ...subtractOffset({ months: 1 }) }}
        nextButtonProps={{ ...addOffset({ months: 1 }) }}
      >
        <div className="flex items-center justify-center gap-3">
          <button type="button" className={headerButtonStyles({})} onClick={handleMonthClick}>
            <p className={headerTextStyles({})}>{month}</p>
          </button>
          <button type="button" className={headerButtonStyles({})} onClick={handleYearClick}>
            <p className={headerTextStyles({})}>{year}</p>
          </button>
        </div>
      </CalendarHeader>
      <ul className="grid grid-cols-7 gap-y-2 mb-2">
        {weekDays.map((day) => (
          <li key={day}>
            <p className="text-center ts-body-xs">{day}</p>
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-7 gap-y-2">
        {days.map((date) => (
          <button
            type="button"
            key={date.$date.toString()}
            className={cn(
              'day',
              date.range,
              dayStyles({
                disabled: date.disabled,
                inOtherMonth: !date.inCurrentMonth,
                now: date.now,
                selected: date.selected,
              })
            )}
            {...dayButton(date)}
          >
            {date.day}
          </button>
        ))}
      </div>
      <Button
        disabled={isMinDateAfterNow || isMaxDateBeforeNow}
        className="w-full mt-2"
        size="sm"
        onClick={handleClickToday}
      >
        Today
      </Button>
    </div>
  );
}

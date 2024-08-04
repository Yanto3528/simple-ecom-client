import { useContextDatePickerOffsetPropGetters, useContextMonths } from '@rehookify/datepicker';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import { dateButtonStyles, headerButtonStyles, headerTextStyles } from '../Calendar.styles';
import { CalendarSectionState } from '../Calendar.types';

import { CalendarHeader } from './CalendarHeader';

dayjs.extend(isSameOrBefore);

type CalendarMonthSectionProps = {
  setCurrentSection: (section: CalendarSectionState) => void;
  onUpdateSelectedDate: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
};

export function CalendarMonthSection({
  setCurrentSection,
  onUpdateSelectedDate,
  minDate,
  maxDate,
}: CalendarMonthSectionProps) {
  const { months } = useContextMonths();
  const { addOffset, subtractOffset, setOffset } = useContextDatePickerOffsetPropGetters();

  const year = months[0].$date.getFullYear();

  const handleYearClick = () => {
    setCurrentSection('year');
  };

  const getDisabledMonth = (monthDate: Date) => {
    if (minDate && dayjs(monthDate).isSameOrBefore(dayjs(minDate), 'month')) {
      return true;
    }

    if (maxDate && dayjs(monthDate).isAfter(dayjs(maxDate), 'month')) {
      return true;
    }

    return false;
  };

  return (
    <div>
      <CalendarHeader
        prevButtonProps={{ ...subtractOffset({ years: 1 }) }}
        nextButtonProps={{ ...addOffset({ years: 1 }) }}
      >
        <button type="button" className={headerButtonStyles({})} onClick={handleYearClick}>
          <p className={headerTextStyles({})}>{year}</p>
        </button>
      </CalendarHeader>
      <ul className="grid grid-cols-3 gap-2 gap-y-12">
        {months.map((dpMonth) => {
          const disabled = getDisabledMonth(dpMonth.$date);

          return (
            <li key={dpMonth.$date.toDateString()}>
              <button
                type="button"
                className={dateButtonStyles({ selected: dpMonth.selected })}
                onClick={(event) => {
                  const { onClick } = setOffset(dpMonth.$date);
                  setCurrentSection('date');
                  onUpdateSelectedDate(dpMonth.$date);
                  onClick?.(event);
                }}
                disabled={disabled}
                aria-disabled={disabled}
              >
                {dayjs(dpMonth.$date).format('MMM')}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

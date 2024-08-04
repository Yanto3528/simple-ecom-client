import { useContextYears, useContextYearsPropGetters } from '@rehookify/datepicker';

import { dateButtonStyles } from '../Calendar.styles';
import { CalendarSectionState } from '../Calendar.types';

import { CalendarHeader } from './CalendarHeader';

type CalendarYearSectionProps = {
  setCurrentSection: (section: CalendarSectionState) => void;
};

export function CalendaryYearSection({ setCurrentSection }: CalendarYearSectionProps) {
  const { years } = useContextYears();
  const {
    yearButton,
    // these prop-getters will switch between years pages
    nextYearsButton,
    previousYearsButton,
  } = useContextYearsPropGetters();

  return (
    <div>
      <CalendarHeader prevButtonProps={previousYearsButton()} nextButtonProps={nextYearsButton()}>
        <p className="text-center">
          {years[0].$date.getFullYear()} - {years[years.length - 1].year}
        </p>
      </CalendarHeader>
      <ul className="grid grid-cols-3 gap-x-2 gap-y-12">
        {years.map((dpYear) => {
          const { onClick, ...yearButtonProps } = yearButton(dpYear);

          return (
            <li key={dpYear.year}>
              <button
                type="button"
                onClick={(event) => {
                  onClick?.(event);
                  setCurrentSection('month');
                }}
                className={dateButtonStyles({ selected: dpYear.selected })}
                {...yearButtonProps}
              >
                {dpYear.year}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

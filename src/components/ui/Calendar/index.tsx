'use client';

import { useState } from 'react';

import { DatePickerStateProvider } from '@rehookify/datepicker';

import { CalendarProps, CalendarSectionState } from './Calendar.types';
import { CalendarDateSection } from './components/CalendarDateSection';
import { CalendarMonthSection } from './components/CalendarMonthSection';
import { CalendaryYearSection } from './components/CalendarYearSection';

import './calendar.css';

export function Calendar({ minDate, maxDate, value, mode = 'single', onChange }: CalendarProps) {
  const [selectedDates, setSelectedDates] = useState<Date[]>(() => {
    if (value) {
      return [value];
    }

    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);

    return [date];
  });
  const [currentSection, setCurrentSection] = useState<CalendarSectionState>('date');

  const onDatesChange = (dates: Date[]) => {
    setSelectedDates(dates);
    onChange?.(dates[0]);
  };

  const onUpdateSelectedDate = (date: Date) => {
    setSelectedDates([date]);
  };

  return (
    <DatePickerStateProvider
      config={{
        selectedDates,
        onDatesChange,
        calendar: {
          startDay: 1,
        },
        dates: {
          mode,
          minDate,
          maxDate,
        },
        time: {
          interval: 5,
        },
        focusDate: selectedDates[0],
      }}
    >
      <div className="flex gap-4">
        <div className="p-4 bg-primary-accent shadow-md rounded-lg min-w-[300px]">
          {currentSection === 'date' && (
            <CalendarDateSection
              setCurrentSection={setCurrentSection}
              onDateChanges={onDatesChange}
              minDate={minDate}
              maxDate={maxDate}
            />
          )}
          {currentSection === 'month' && (
            <CalendarMonthSection
              setCurrentSection={setCurrentSection}
              onUpdateSelectedDate={onUpdateSelectedDate}
              minDate={minDate}
              maxDate={maxDate}
            />
          )}
          {currentSection === 'year' && (
            <CalendaryYearSection setCurrentSection={setCurrentSection} />
          )}
        </div>
      </div>
    </DatePickerStateProvider>
  );
}

export type CalendarProps = {
  minDate?: Date;
  maxDate?: Date;
  value?: Date | Date[];
  mode?: 'single' | 'range';
  onChange?: (date: Date[]) => void;
};

export type CalendarSectionState = 'date' | 'month' | 'year';

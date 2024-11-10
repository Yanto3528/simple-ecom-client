import dayjs from 'dayjs';

type DateFormat = 'DD/MM/YYYY' | 'MMMM DD, YYYY';

export const formatDate = (date: Date | string, dateFormat: DateFormat = 'DD/MM/YYYY') =>
  dayjs(date).format(dateFormat);

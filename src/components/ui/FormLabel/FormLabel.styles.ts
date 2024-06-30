import { tv } from '@/lib/tailwind-variant';

export const formLabelStyles = tv('mb-1 block text-sm', {
  variants: {
    required: {
      true: 'before:content-["*"] before:text-danger before:mr-1 before:align-middle',
    },
  },
});

import plugin from 'tailwindcss/plugin';

type Screens = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
};

type FontSizeTuple = [string, Record<string, string>];
type FontStyles = string | FontSizeTuple;
type FontMedia = [
  '3xs',
  '2xs',
  'xs',
  'sm',
  'base',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
];

type FontSizes = {
  [key in FontMedia[number]]: FontStyles;
};

export default plugin(({ addComponents, matchUtilities, theme }) => {
  const screens = theme('screens', {}) as Screens;
  const fontSize = theme('fontSize') as FontSizes;

  const mediaQueries = Object.entries(screens).reduce((accum, [key, value]) => {
    const screenKey = key as keyof Screens;
    accum[screenKey] = `@media (min-width: ${value})`;

    return accum;
  }, {} as Screens);

  const fontStyles = Object.entries(fontSize).reduce(
    (accum, [key, value]) => {
      const styles =
        typeof value === 'string' ? { fontSize: value } : { fontSize: value[0], ...value[1] };

      const fontKey = key as keyof FontSizes;
      accum[fontKey] = styles;

      return accum;
    },
    {} as Record<keyof FontSizes, Record<string, string>>
  );

  const text = {
    '.ts-body-2xs': {
      ...fontStyles['3xs'],
      [mediaQueries.sm]: {
        ...fontStyles['2xs'],
      },
    },
    '.ts-body-xs': {
      ...fontStyles['2xs'],
      [mediaQueries.sm]: {
        ...fontStyles.xs,
      },
    },
    '.ts-body-sm': {
      ...fontStyles.xs,
      [mediaQueries.sm]: {
        ...fontStyles.sm,
      },
    },
    '.ts-body-base': {
      ...fontStyles.sm,
      [mediaQueries.sm]: {
        ...fontStyles.base,
      },
    },
    '.ts-heading-xs': {
      ...fontStyles.lg,
      [mediaQueries.sm]: {
        ...fontStyles.xl,
      },
    },
    '.ts-heading-sm': {
      ...fontStyles.xl,
      [mediaQueries.sm]: {
        ...fontStyles['2xl'],
      },
    },
    '.ts-heading-base': {
      ...fontStyles['2xl'],
      [mediaQueries.sm]: {
        ...fontStyles['3xl'],
      },
    },
    '.ts-heading-lg': {
      ...fontStyles['3xl'],
      [mediaQueries.sm]: {
        ...fontStyles['4xl'],
      },
    },
    '.ts-heading-xl': {
      ...fontStyles['4xl'],
      [mediaQueries.sm]: {
        ...fontStyles['5xl'],
      },
    },
  };

  addComponents(text);
  matchUtilities(
    {
      'text-shadow': (value) => ({
        textShadow: value,
      }),
    },
    { values: theme('textShadow') }
  );
});

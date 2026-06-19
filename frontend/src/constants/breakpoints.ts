const BREAKPOINTS_EM = {
  xl: 100,
  lg: 80,
  md: 64,
  sm: 48,
  xs: 30,
} as const;

export const MEDIA_QUERIES = {
  xl: `(max-width: ${BREAKPOINTS_EM.xl}em)`,
  lg: `(max-width: ${BREAKPOINTS_EM.lg}em)`,
  md: `(max-width: ${BREAKPOINTS_EM.md}em)`,
  sm: `(max-width: ${BREAKPOINTS_EM.sm}em)`,
  xs: `(max-width: ${BREAKPOINTS_EM.xs}em)`,
} as const;

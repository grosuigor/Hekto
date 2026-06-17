export const LOCALES_LABELS = {
  en: "English",
  ro: "Română",
  ru: "Русский",
} as const;

export type Locale = keyof typeof LOCALES_LABELS;

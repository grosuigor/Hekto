import { type Dispatch, type SetStateAction, useMemo } from "react";

import { type Locale, LOCALES_LABELS, MEDIA_QUERIES } from "@/constants";

import { useMediaQuery } from "@/hooks/components";
import { useLocaleContext } from "@/store";

type useAvailableLocalesFn = () => [
  Locale,
  Array<{
    locale: Locale;
    label: string;
  }>,
  Dispatch<SetStateAction<Locale>>,
];

export const useAvailableLocales: useAvailableLocalesFn = () => {
  const [locale, setLocale] = useLocaleContext();
  const isMd = useMediaQuery(MEDIA_QUERIES.md);

  const availableLocales = useMemo(
    () =>
      Object.entries(LOCALES_LABELS)
        .filter(([loc]) => loc !== locale)
        .map(([locale, label]) => ({
          locale,
          label: isMd ? locale : label,
        })) as Array<{
        locale: Locale;
        label: string;
      }>,
    [locale, isMd],
  );

  return [locale, availableLocales, setLocale];
};

import {
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

import type { Locale } from "@/constants";

import { preferencesStorage } from "@/services/storage";

import { LocaleContext } from "./context";
import { DEFAULT_LOCALE } from "./defaults";

export function LocaleProvider({ children }: PropsWithChildren) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    let cancelled = false;

    void preferencesStorage.getLocale().then((stored) => {
      if (cancelled || !stored) return;

      setLocaleState(stored);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const setLocale: Dispatch<SetStateAction<Locale>> = useCallback((action) => {
    setLocaleState((prev) => {
      const next = typeof action === "function" ? action(prev) : action;

      void preferencesStorage.setLocale(next);

      return next;
    });
  }, []);

  return (
    <LocaleContext value={{ locale, setLocale }}>{children}</LocaleContext>
  );
}

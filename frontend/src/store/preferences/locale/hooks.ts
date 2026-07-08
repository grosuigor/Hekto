import { type Dispatch, type SetStateAction, useContext } from "react";

import type { Locale } from "@/constants";

import { LocaleContext } from "./context";

export function useLocaleContext(): [Locale, Dispatch<SetStateAction<Locale>>] {
  const context = useContext(LocaleContext);

  if (context === null) {
    throw new Error("Locale context used without provider!");
  }

  const { locale, setLocale } = context;

  return [locale, setLocale];
}

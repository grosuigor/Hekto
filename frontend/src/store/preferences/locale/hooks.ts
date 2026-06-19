import { type Dispatch, type SetStateAction, useContext } from "react";
import { LocaleContext } from "./context";
import type { Locale } from "@/constants";

export function useLocaleContext(): [Locale, Dispatch<SetStateAction<Locale>>] {
  const context = useContext(LocaleContext);

  if (context === null) {
    throw new Error("Locale context used without provider!");
  }

  const { locale, setLocale } = context;

  return [locale, setLocale];
}

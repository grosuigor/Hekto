import type { Locale } from "@/constants";
import { createContext, type Dispatch, SetStateAction } from "react";

type LocaleContextType = {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
};

export const LocaleContext = createContext<LocaleContextType | null>(null);

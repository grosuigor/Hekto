import { createContext, type Dispatch, SetStateAction } from "react";

import type { Locale } from "@/constants";

type LocaleContextType = {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
};

export const LocaleContext = createContext<LocaleContextType | null>(null);

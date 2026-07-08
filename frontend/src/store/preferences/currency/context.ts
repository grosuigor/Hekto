import { createContext, type Dispatch, SetStateAction } from "react";

import type { Currency } from "@/constants";

type CurrencyContextType = {
  currency: Currency;
  setCurrency: Dispatch<SetStateAction<Currency>>;
};

export const CurrencyContext = createContext<CurrencyContextType | null>(null);

import type { Currency } from "@/constants";
import { createContext, type Dispatch, SetStateAction } from "react";

type CurrencyContextType = {
  currency: Currency;
  setCurrency: Dispatch<SetStateAction<Currency>>;
};

export const CurrencyContext = createContext<CurrencyContextType | null>(null);

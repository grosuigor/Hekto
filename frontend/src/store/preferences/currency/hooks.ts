import { type Dispatch, type SetStateAction, useContext } from "react";

import type { Currency } from "@/constants";

import { CurrencyContext } from "./context";

export function useCurrencyContext(): [
  Currency,
  Dispatch<SetStateAction<Currency>>,
] {
  const context = useContext(CurrencyContext);

  if (context === null) {
    throw new Error("Currency context used without provider!");
  }

  const { currency, setCurrency } = context;

  return [currency, setCurrency];
}

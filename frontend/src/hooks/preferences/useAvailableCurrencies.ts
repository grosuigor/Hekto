import { CURRENCY_COEFFICIENTS, type Currency } from "@/constants";
import { useCurrencyContext } from "@/store";
import { type Dispatch, type SetStateAction, useMemo } from "react";

type useAvailableCurrenciesFn = () => [
  Currency,
  Currency[],
  Dispatch<SetStateAction<Currency>>,
];

export const useAvailableCurrencies: useAvailableCurrenciesFn = () => {
  const [currency, setCurrency] = useCurrencyContext();

  const availableCurrencies = useMemo(
    () =>
      Object.keys(CURRENCY_COEFFICIENTS).filter(
        (curr) => curr !== currency,
      ) as Currency[],
    [currency],
  );

  return [currency, availableCurrencies, setCurrency];
};

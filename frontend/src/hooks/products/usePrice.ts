import { useMemo } from "react";

import { CURRENCY_COEFFICIENTS, CURRENCY_SYMBOLS } from "@/constants";

import { useCurrencyContext } from "@/store";

function formatPrice(price: number, currency: keyof typeof CURRENCY_COEFFICIENTS) {
  const transformed = (price * CURRENCY_COEFFICIENTS[currency]).toFixed(2);
  const { symbol, position } = CURRENCY_SYMBOLS[currency];

  if (position === "front") {
    return symbol + transformed;
  }

  return transformed + symbol;
}

export function usePrice(originalPrice: number): string;
export function usePrice(originalPrice: number[]): string[];
export function usePrice(
  originalPrice: number | number[],
): string | string[] {
  const [currency] = useCurrencyContext();

  return useMemo(() => {
    if (Array.isArray(originalPrice)) {
      return originalPrice.map((price) => formatPrice(price, currency));
    }

    return formatPrice(originalPrice, currency);
  }, [originalPrice, currency]);
}

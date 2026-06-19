export const CURRENCY_COEFFICIENTS = {
  USD: 1,
  EUR: 0.9,
  MDL: 17.3,
} as const;

export type Currency = keyof typeof CURRENCY_COEFFICIENTS;

export const CURRENCY_SYMBOLS: Record<
  Currency,
  {
    symbol: string;
    position: "front" | "back";
  }
> = {
  USD: { symbol: "$", position: "front" },
  EUR: { symbol: "€", position: "front" },
  MDL: { symbol: "L", position: "back" },
};

import type { Sorting } from "@/types";

export const SORTING_MAP: Record<string, Sorting> = {
  "Price: High -> Low": { key: "price", order: "descending" },
  "Price: Low -> High": { key: "price", order: "ascending" },
  "Rating: High -> Low": { key: "rating", order: "descending" },
  "Rating: Low -> High": { key: "rating", order: "ascending" },
};

export const COUNT_OPTIONS = [10, 12, 16, 24];

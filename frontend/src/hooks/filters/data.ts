export const FILTER_COLORS: Record<string, "info" | "secondary" | "danger"> = {
  brand: "info",
  discountPercentage: "danger",
  rating: "secondary",
  category: "danger",
  price: "info",
  colors: "secondary",
};

export const RANGE_FILTER_STEPS: Record<string, number> = {
  discountPercentage: 5,
  rating: 0.1,
  price: 1,
};

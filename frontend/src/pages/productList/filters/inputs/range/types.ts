import type { Range } from "@/types";

export type RangeInputProps = {
  filterName: string;
  allValues: Range;
  filterValues: Range;
  step?: number;
  color?: "info" | "secondary" | "danger";
};
import { Input } from "@/components";
import type { Range } from "@/types";

type RangeInputProps = {
  filterName: string;
  allValues: Range;
  filterValues: Range;
  step?: number;
  color?: "info" | "secondary" | "danger";
};

export function RangeInput({
  filterName,
  allValues,
  filterValues,
  step,
  color,
}: RangeInputProps) {
  return (
    <Input.Range
      key={`${filterName}-range`}
      min={allValues.min}
      max={allValues.max}
      value={filterValues}
      step={step}
      data-name={filterName}
      color={color}
    />
  );
}

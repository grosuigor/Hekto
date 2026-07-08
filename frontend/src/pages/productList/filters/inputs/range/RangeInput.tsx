import { Input } from "@/components";
import type { RangeInputProps } from "./types";

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

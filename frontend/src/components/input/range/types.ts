import type { ComponentWithoutChildrenProps, Range } from "@/types";
import type { Dispatch, SetStateAction } from "react";
import type { InputColor } from "../types";

export type RangeProps = ComponentWithoutChildrenProps & {
  min: number;
  max: number;
  step?: number;
  value: Range;
  setValue?: Dispatch<SetStateAction<Range>>;
  color?: InputColor;
  "data-name"?: string;
};
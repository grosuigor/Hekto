import type { ComponentWithoutChildrenProps } from "@/types";
import type { Dispatch, SetStateAction } from "react";

export type CounterProps = ComponentWithoutChildrenProps & {
  id: string;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  min?: number;
  max?: number;
};
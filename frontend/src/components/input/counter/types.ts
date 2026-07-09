import type { Dispatch, SetStateAction } from "react";

import type { ComponentWithoutChildrenProps } from "@/types";

export type CounterProps = ComponentWithoutChildrenProps & {
  id: string;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  min?: number;
  max?: number;
};
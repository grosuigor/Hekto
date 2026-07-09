import type { ComponentProps } from "@/types";
import type { Dispatch, SetStateAction } from "react";
import type { ValueType } from "../types";

export type SelectProps<T extends ValueType> = ComponentProps & {
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
  options: T[];
  id: string;
};
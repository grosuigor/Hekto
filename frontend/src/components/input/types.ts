import type { ComponentProps } from "@/types";
import type { Dispatch, SetStateAction } from "react";

export type InputColor = "info" | "secondary" | "danger";

export type ValueType = string | number;

export type InputProps<T extends ValueType> = ComponentProps & {
  id: string;
  value: T;
  setValue?: Dispatch<SetStateAction<T>>;
  endAdornment?: React.ReactNode;
  placeholder: string;
  onFocus?: () => void;
  onBlur?: () => void;
  type?: string;
  debounceMs?: number;
  readOnly?: boolean;
  "data-name"?: string;
};
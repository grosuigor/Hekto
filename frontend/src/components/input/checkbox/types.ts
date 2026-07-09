import type { ComponentWithoutChildrenProps } from "@/types";
import type { Dispatch, SetStateAction } from "react";
import type { InputColor } from "../types";

export type CheckboxProps = ComponentWithoutChildrenProps & {
  checked: boolean;
  setChecked?: Dispatch<SetStateAction<boolean>>;
  color?: InputColor;
  id: string;
  "data-name"?: string;
  "data-value"?: string;
};
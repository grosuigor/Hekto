import type { ComponentWithoutChildrenProps } from "@/types";
import type { MouseEvent, KeyboardEvent } from "react";

export type ModalProps = ComponentWithoutChildrenProps & {
  open: boolean;
  image: string;
  onClose: (e: MouseEvent | KeyboardEvent) => void;
};
import type { KeyboardEvent,MouseEvent } from "react";

import type { ComponentWithoutChildrenProps } from "@/types";

export type ModalProps = ComponentWithoutChildrenProps & {
  open: boolean;
  image: string;
  onClose: (e: MouseEvent | KeyboardEvent) => void;
};
import type { ComponentWithChildProps } from "@/types";

export type CardContainerProps = ComponentWithChildProps &
(
  | {
      path: string;
    }
  | {
      id: string;
    }
);
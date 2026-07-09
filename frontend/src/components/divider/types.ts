import type { StyleProps } from "@/types";

type DividerOrientation = "horizontal" | "vertical";

export type DividerProps = StyleProps & {
  orientation?: DividerOrientation;
};
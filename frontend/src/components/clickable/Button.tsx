import { Clickable } from "./Clickable";
import type { ClickableProps } from "./types";

type ButtonProps = Omit<ClickableProps & { type: "button" }, "type">;

export function Button(props: ButtonProps) {
  return <Clickable type="button" {...props} />;
}

import { Clickable, ClickableProps } from "./Clickable";

type ButtonProps = Omit<ClickableProps & { type: "button" }, "type">;

export function Button(props: ButtonProps) {
  return <Clickable type="button" {...props} />;
}

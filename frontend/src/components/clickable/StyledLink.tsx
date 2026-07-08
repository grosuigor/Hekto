import { Clickable } from "./Clickable";
import type { ClickableProps } from "./types";

type StyledLinkProps = Omit<ClickableProps & { type: "link" }, "type">;

export function StyledLink(props: StyledLinkProps) {
  return <Clickable type="link" {...props} />;
}

import { Clickable, ClickableProps } from "./Clickable";

type StyledLinkProps = Omit<ClickableProps & { type: "link" }, "type">;

export function StyledLink(props: StyledLinkProps) {
  return <Clickable type="link" {...props} />;
}

import clsx from "clsx/lite";

import { StyledLink } from "@/components/clickable";
import { Typography } from "@/components/typography";

import type { CardActionProps } from "./types";

import styles from "./CardAction.module.scss";

export function CardAction({ variant, to, style, className }: CardActionProps) {
  return (
    <StyledLink
      to={to}
      variant="filled"
      color="success"
      size="sm"
      style={style}
      className={clsx(className, styles.action)}
    >
      <Typography variant="body" modifier="extra-small">
        View {variant}
      </Typography>
    </StyledLink>
  );
}

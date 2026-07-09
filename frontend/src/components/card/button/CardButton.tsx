import clsx from "clsx/lite";

import { StyledLink } from "@/components/clickable";
import { Typography } from "@/components/typography";

import type { CardButtonProps } from "./types";

import styles from "./CardButton.module.scss";

export function CardButton({ variant, to, style, className }: CardButtonProps) {
  return (
    <StyledLink
      to={to}
      variant="filled"
      color="success"
      size="sm"
      style={style}
      className={clsx(className, styles.button)}
    >
      <Typography variant="body" modifier="extra-small">
        View {variant}
      </Typography>
    </StyledLink>
  );
}

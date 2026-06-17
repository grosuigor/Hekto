import clsx from "clsx/lite";
import { Button } from "@/components/clickable";
import { Typography } from "@/components/typography";
import type { ComponentWithoutChildrenProps } from "@/types";
import styles from "./CardButton.module.scss";

type CardButtonProps = ComponentWithoutChildrenProps & {
  variant: "Category" | "Details";
};

export function CardButton({ variant, style, className }: CardButtonProps) {
  return (
    <Button
      variant="filled"
      color="success"
      size="sm"
      style={style}
      className={clsx(className, styles.button)}
    >
      <Typography variant="body" modifier="extra-small">
        View {variant}
      </Typography>
    </Button>
  );
}

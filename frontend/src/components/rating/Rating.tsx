import clsx from "clsx/lite";
import type { RatingProps } from "./types";
import styles from "./Rating.module.scss";
import { Icon } from "@/components/icon";
import { STARS } from "./data";

export function Rating({ rating, style, className }: RatingProps) {
  return (
    <div style={style} className={clsx(styles.rating, className)}>
      {STARS.map((_, i) => {
        const fill = Math.min(Math.max(rating - i, 0), 1);

        if (fill >= 1) {
          return <Icon key={i} name="star" className={styles.filled} />;
        }

        if (fill <= 0) {
          return <Icon key={i} name="star" />;
        }

        return (
          <span key={i} className={styles["star-partial"]}>
            <Icon name="star" />
            <Icon
              name="star"
              className={styles.filled}
              style={{ clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)` }}
            />
          </span>
        );
      })}
    </div>
  );
}

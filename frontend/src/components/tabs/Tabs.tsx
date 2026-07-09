import clsx from "clsx/lite";

import { Typography } from "@/components/typography";

import { Button } from "../clickable";
import { useTabs } from "./hooks";
import type { TabsProps } from "./types";

import styles from "./Tabs.module.scss";

export function Tabs({ names, style, className, children }: TabsProps) {
  const [activeIndex, setActiveIndex] = useTabs(names.length);

  return (
    <div style={style} className={clsx(className, styles.container)}>
      <div className={styles.header} role="tablist">
        {names.map((name, i) => (
          <Button
            key={name}
            variant="text"
            color="black"
            className={clsx(
              styles.tab__name,
              i === activeIndex && styles.active,
            )}
            role="tabpanel"
            id={`tabpanel-${i}`}
            aria-labelledby={`tab-${i}`}
            hidden={i !== activeIndex}
            disabled={i === activeIndex}
            onClick={() => setActiveIndex(i)}
          >
            <Typography variant="subtitle" modifier="big">
              {name}
            </Typography>
          </Button>
        ))}
      </div>
      <div className={styles.names}>
        {children.map((child, i) => (
          <div
            key={names[i]}
            className={clsx(styles.tab, i === activeIndex && styles.active)}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

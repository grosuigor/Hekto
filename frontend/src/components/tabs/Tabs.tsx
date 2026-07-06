import { Typography } from "@/components/typography";
import { ComponentWithChildrenProps } from "@/types";
import clsx from "clsx/lite";
import { useEffect, useState } from "react";
import { Button } from "../clickable";
import styles from "./Tabs.module.scss";

type TabsProps = ComponentWithChildrenProps & {
  names: string[];
};

export function Tabs({ names, style, className, children }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
          setActiveIndex((prev) => (prev + 1) % names.length);
          break;

        case "ArrowLeft":
          setActiveIndex((prev) => (prev - 1 + names.length) % names.length);
          break;

        case "Home":
          setActiveIndex(0);
          break;

        case "End":
          setActiveIndex(names.length - 1);
          break;
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [names.length]);

  return (
    <div style={style} className={clsx(className, styles.container)}>
      <div className={styles.header} role="tablist">
        {names.map((name, i) => (
          <Button
            key={names[i]}
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

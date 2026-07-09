import clsx from "clsx/lite";

import { Button } from "@/components/clickable";
import { Typography } from "@/components/typography";

import { useCounter } from "./hooks";
import type { CounterProps } from "./types";

import styles from "./Counter.module.scss";

export function Counter({
  id,
  value,
  setValue,
  min = 1,
  max = 99,
  style,
  className,
}: CounterProps) {
  const { decrement, increment } = useCounter(min, max, setValue);

  return (
    <div style={style} className={clsx(styles.counter, className)}>
      <Button
        variant="text"
        color="black"
        iconOnly
        rounded
        disabled={value <= min}
        onClick={decrement}
        aria-label="Decrease quantity"
      >
        <Typography variant="body" modifier="small" color="black" isLato>
          -
        </Typography>
      </Button>
      <input
        id={id}
        type="text"
        className={styles.input}
        value={value}
        readOnly
        disabled
        aria-label="Quantity"
      />
      <Button
        variant="text"
        color="black"
        iconOnly
        rounded
        disabled={value >= max}
        onClick={increment}
        aria-label="Increase quantity"
      >
        <Typography variant="body" modifier="small" color="black" isLato>
          +
        </Typography>
      </Button>
    </div>
  );
}

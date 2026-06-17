import { Button } from "@/components/clickable";
import type { ComponentWithoutChildrenProps } from "@/types";
import clsx from "clsx/lite";
import { type Dispatch, type SetStateAction, useCallback } from "react";
import styles from "./Counter.module.scss";
import { Typography } from "@/components/typography";

type CounterProps = ComponentWithoutChildrenProps & {
  id: string;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  min?: number;
  max?: number;
};

export function Counter({
  id,
  value,
  setValue,
  min = 1,
  max = 99,
  style,
  className,
}: CounterProps) {
  const decrement = useCallback(() => {
    setValue((prev) => Math.max(min, prev - 1));
  }, [min, setValue]);

  const increment = useCallback(() => {
    setValue((prev) => Math.min(max, prev + 1));
  }, [max, setValue]);

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

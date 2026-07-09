import { useCallback } from "react";

import clsx from "clsx/lite";

import { useDebounced } from "@/hooks";

import { Typography } from "@/components/typography";

import type { RangeProps } from "./types";

import styles from "./Range.module.scss";

function toPercent(value: number, min: number, max: number) {
  if (max === min) return 0;
  return ((value - min) / (max - min)) * 100;
}

export function Range({
  min,
  max,
  step = 1,
  value,
  setValue,
  color = "info",
  style,
  className,
  "data-name": dataName,
}: RangeProps) {
  const [localValue, setLocalValue] = useDebounced(value, setValue);

  const updateValue = useCallback(
    (type: "min" | "max", newVal: number) => {
      setLocalValue((prev) => {
        const next = { ...prev, [type]: newVal };
        return next.min > next.max ? { min: next.max, max: next.min } : next;
      });
    },
    [setLocalValue],
  );

  return (
    <div
      style={style}
      className={clsx(
        className,
        styles.container,
        styles[`container--${color}`],
      )}
    >
      <div className={styles.field}>
        <div className={styles.label}>
          <Typography variant="body" modifier="small" color="grey-3" isLato>
            Min
          </Typography>
          <Typography variant="body" modifier="small" isLato>
            {localValue.min}
          </Typography>
        </div>
        <input
          value={localValue.min}
          min={min}
          max={max}
          step={step}
          type="range"
          data-name={dataName}
          data-bound="min"
          style={
            {
              "--fill": `${toPercent(localValue.min, min, max)}%`,
            } as React.CSSProperties
          }
          onChange={(e) => updateValue("min", Number(e.target.value))}
        />
      </div>
      <div className={styles.field}>
        <div className={styles.label}>
          <Typography variant="body" modifier="small" color="grey-3" isLato>
            Max
          </Typography>
          <Typography variant="body" modifier="small" isLato>
            {localValue.max}
          </Typography>
        </div>
        <input
          value={localValue.max}
          min={min}
          max={max}
          step={step}
          type="range"
          data-name={dataName}
          data-bound="max"
          style={
            {
              "--fill": `${toPercent(localValue.max, min, max)}%`,
            } as React.CSSProperties
          }
          onChange={(e) => updateValue("max", Number(e.target.value))}
        />
      </div>
    </div>
  );
}

import clsx from "clsx/lite";
import { useCallback } from "react";
import type { CheckboxProps } from "./types";
import styles from "./Checkbox.module.scss";

export function Checkbox({
  checked,
  setChecked,
  color = "info",
  id,
  style,
  className,
  "data-name": dataName,
  "data-value": dataValue,
}: CheckboxProps) {
  const toggle = useCallback(() => {
    setChecked?.((prev) => !prev);
  }, [setChecked]);

  return (
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={toggle}
      data-name={dataName}
      data-value={dataValue}
      className={clsx(className, styles.checkbox, styles[`checkbox--${color}`])}
      style={style}
    />
  );
}

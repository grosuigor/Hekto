import type { ComponentWithoutChildrenProps } from "@/types";
import clsx from "clsx/lite";
import { type Dispatch, type SetStateAction, useCallback } from "react";
import styles from "./Checkbox.module.scss";

type CheckboxProps = ComponentWithoutChildrenProps & {
  checked: boolean;
  setChecked?: Dispatch<SetStateAction<boolean>>;
  color?: "info" | "secondary" | "danger";
  id: string;
  "data-name"?: string;
  "data-value"?: string;
};

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

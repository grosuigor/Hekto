import {
  useCallback,
  useState,
} from "react";

import clsx from "clsx/lite";

import { Button } from "@/components/clickable";
import { Icon } from "@/components/icon";
import { Input } from "@/components/input";
import { Typography } from "@/components/typography";

import type { ValueType } from "../types";
import type { SelectProps } from "./types";

import styles from "./Select.module.scss";

export function Select<T extends ValueType>({
  value,
  setValue,
  options,
  id,
  style,
  className,
}: SelectProps<T>) {
  const [optionsShowed, showOptions] = useState(false);

  const selectOption = useCallback(
    (option: T) => {
      setValue(option);
      showOptions(false);
    },
    [setValue],
  );

  return (
    <div style={style} className={clsx(styles.container, className)}>
      <Input
        id={id}
        value={value}
        readOnly
        debounceMs={0}
        onFocus={() => showOptions(true)}
        onBlur={() => showOptions(false)}
        placeholder=""
        endAdornment={
          <Button variant="text" color="black" rounded tabIndex={-1}>
            <Icon
              name="chevron-down"
              className={clsx(
                styles.chevron,
                optionsShowed && styles["chevron--open"],
              )}
            />
          </Button>
        }
      />
      <div
        className={clsx(
          styles.options,
          optionsShowed && styles["options--active"],
        )}
      >
        {options.map((option) => (
          <Button
            key={option.toString()}
            variant="filled"
            size="sm"
            color="white"
            className={styles.option}
            onClick={() => selectOption(option)}
          >
            <Typography variant="body" color="black" modifier="small" isLato>
              {option}
            </Typography>
          </Button>
        ))}
      </div>
    </div>
  );
}

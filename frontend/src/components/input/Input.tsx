import { type ChangeEvent, useCallback } from "react";

import clsx from "clsx/lite";

import { useDebounced } from "@/hooks";

import { Checkbox } from "./checkbox";
import { Counter } from "./counter";
import { useEndAdornmentWidth } from "./hooks";
import { Range } from "./range";
import { Select } from "./select";
import type { InputProps, ValueType } from "./types";

import styles from "./Input.module.scss";

function Input<T extends ValueType>({
  value,
  setValue,
  endAdornment,
  placeholder,
  onFocus,
  onBlur,
  type = "text",
  id,
  style,
  className,
  debounceMs = 300,
  readOnly,
  "data-name": dataName,
}: InputProps<T>) {
  const [localValue, setLocalValue] = useDebounced(value, setValue, debounceMs);
  const { endAdornmentRef, endAdornmentWidth } = useEndAdornmentWidth(endAdornment);

  const updateValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (readOnly) {
        return;
      }

      setLocalValue(e.target.value as T);
    },
    [readOnly, setLocalValue],
  );

  return (
    <div
      onFocus={onFocus}
      onBlur={onBlur}
      className={clsx(styles["input-container"], className)}
    >
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        value={localValue}
        readOnly={readOnly}
        size={Math.max(String(localValue).length, placeholder.length) || 1}
        onChange={updateValue}
        data-name={dataName}
        style={
          endAdornmentWidth
            ? { ...style, paddingRight: endAdornmentWidth + 16 }
            : style
        }
      />
      {endAdornment && (
        <div ref={endAdornmentRef} className={styles["end-adornment"]}>
          {endAdornment}
        </div>
      )}
    </div>
  );
}
Input.Checkbox = Checkbox;
Input.Counter = Counter;
Input.Range = Range;
Input.Select = Select;

export { Input };

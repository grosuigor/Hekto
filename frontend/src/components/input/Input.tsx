import { useDebounced } from "@/hooks";
import type { ComponentProps } from "@/types";
import clsx from "clsx/lite";
import {
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Checkbox } from "./checkbox";
import { Counter } from "./counter";
import styles from "./Input.module.scss";
import { Range } from "./range";
import { Select } from "./select";

type InputProps<T extends string | number> = ComponentProps & {
  id: string;
  value: T;
  setValue?: Dispatch<SetStateAction<T>>;
  endAdornment?: React.ReactNode;
  placeholder: string;
  onFocus?: () => void;
  onBlur?: () => void;
  type?: string;
  debounceMs?: number;
  readOnly?: boolean;
  "data-name"?: string;
};

function Input<T extends string | number>({
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
  const endAdornmentRef = useRef<HTMLDivElement>(null);
  const [endAdornmentWidth, setEndAdornmentWidth] = useState(0);

  useEffect(() => {
    const node = endAdornmentRef.current;

    if (!node || !endAdornment) {
      setEndAdornmentWidth(0);
      return;
    }

    const updateWidth = () => {
      setEndAdornmentWidth(node.offsetWidth);
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(node);

    return () => observer.disconnect();
  }, [endAdornment]);

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

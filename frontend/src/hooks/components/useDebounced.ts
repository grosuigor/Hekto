import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export function useDebounced<T>(
  externalValue: T,
  onCommit?: Dispatch<SetStateAction<T>>,
  delay = 300,
): [T, Dispatch<SetStateAction<T>>] {
  const [localValue, setLocalValue] = useState(externalValue);
  const commitRef = useRef(onCommit);
  const isDirty = useRef(false);
  const localValueRef = useRef(localValue);

  localValueRef.current = localValue;

  useEffect(() => {
    commitRef.current = onCommit;
  }, [onCommit]);

  useEffect(() => {
    if (!isDirty.current) {
      setLocalValue(externalValue);
    }
  }, [externalValue]);

  useEffect(() => {
    if (!isDirty.current || !commitRef.current) return;

    const commit = () => {
      isDirty.current = false;
      commitRef.current?.(localValueRef.current);
    };

    if (delay === 0) {
      commit();
      return;
    }

    const timeout = setTimeout(commit, delay);

    return () => clearTimeout(timeout);
  }, [localValue, delay]);

  const setValue: Dispatch<SetStateAction<T>> = useCallback((action) => {
    isDirty.current = true;
    setLocalValue(action);
  }, []);

  return [localValue, setValue];
}

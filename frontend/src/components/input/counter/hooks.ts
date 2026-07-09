import { Dispatch, SetStateAction, useCallback } from "react";

export function useCounter(min: number, max: number, setValue: Dispatch<SetStateAction<number>>) {
  const decrement = useCallback(() => {
    setValue((prev) => Math.max(min, prev - 1));
  }, [min, setValue]);

  const increment = useCallback(() => {
    setValue((prev) => Math.min(max, prev + 1));
  }, [max, setValue]);

  return {
    decrement,
    increment
  };
}
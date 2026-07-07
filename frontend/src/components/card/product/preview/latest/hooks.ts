import { useMemo } from "react";

const MAX_WORD_LEN = 30

export function useTrimmedName(name: string) {
  const trimmedName = useMemo(() => {
    if (name.length > MAX_WORD_LEN) {
      return name.slice(0, MAX_WORD_LEN - 3) + "...";
    }

    return name;
  }, [name]);

  return trimmedName
}
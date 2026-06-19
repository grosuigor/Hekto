import { useEffect, useMemo, useRef } from "react";

type CallbackArgument<T> = (newState: T) => void;
type UpdaterReturnType<T> = (updater: T | ((prevState: T) => T)) => void;

export function useUpdater<T extends number | string | boolean | object>(
  prevState: T,
  callback: CallbackArgument<T>,
): UpdaterReturnType<T> {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const updater = useMemo(
    () => (updater: T | ((prevState: T) => T)) => {
      const newState =
        typeof updater === "function"
          ? (updater as (prev: T) => T)(prevState)
          : updater;

      callbackRef.current(newState);
    },
    [prevState],
  );

  return updater;
}

import type { Currency } from "@/constants";
import { preferencesStorage } from "@/services/storage";
import {
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { CurrencyContext } from "./context";
import { DEFAULT_CURRENCY } from "./defaults";

export function CurrencyProvider({ children }: PropsWithChildren) {
  const [currency, setCurrencyState] = useState<Currency>(DEFAULT_CURRENCY);

  useEffect(() => {
    let cancelled = false;

    void preferencesStorage.getCurrency().then((stored) => {
      if (cancelled || !stored) return;

      setCurrencyState(stored);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const setCurrency: Dispatch<SetStateAction<Currency>> = useCallback(
    (action) => {
      setCurrencyState((prev) => {
        const next = typeof action === "function" ? action(prev) : action;

        void preferencesStorage.setCurrency(next);

        return next;
      });
    },
    [],
  );

  return (
    <CurrencyContext value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext>
  );
}

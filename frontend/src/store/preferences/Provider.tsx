import { type PropsWithChildren } from "react";
import { CurrencyProvider } from "./currency";
import { LocaleProvider } from "./locale";

export function PreferencesProvider({ children }: PropsWithChildren) {
  return (
    <CurrencyProvider>
      <LocaleProvider>{children}</LocaleProvider>
    </CurrencyProvider>
  );
}

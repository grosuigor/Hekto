import { type PropsWithChildren } from "react";

import { ItemsProvider } from "../items";
import { PreferencesProvider } from "../preferences";

export function GlobalProvider({ children }: PropsWithChildren) {
  return (
    <PreferencesProvider>
      <ItemsProvider>{children}</ItemsProvider>
    </PreferencesProvider>
  );
}

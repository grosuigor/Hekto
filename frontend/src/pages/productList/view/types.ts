import { Dispatch, SetStateAction } from "react";

import type { View } from "@/types";

export type ViewProps = {
  view: View;
  setView: Dispatch<SetStateAction<View>>;
};
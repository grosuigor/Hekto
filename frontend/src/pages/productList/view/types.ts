import type { View } from "@/types";
import { Dispatch, SetStateAction } from "react";

export type ViewProps = {
  view: View;
  setView: Dispatch<SetStateAction<View>>;
};
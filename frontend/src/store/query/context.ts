import { createContext, type Dispatch } from "react";

import type { Filter, Pagination,Query, Sorting } from "@/types";

export type QueryStoreState = Query & {
  draftFilters: Filter[];
};

export const QueryContext = createContext<QueryStoreState | null>(null);

export type QueryActionType =
  | { type: "SET_SORTING"; payload: Sorting }
  | { type: "SET_PAGINATION"; payload: Pagination }
  | { type: "SET_DRAFT_FILTERS"; payload: Filter[] }
  | { type: "APPLY_FILTERS" }
  | { type: "CLEAR_FILTERS" }
  | { type: "SYNC_FROM_URL"; payload: Query };

export const QueryDispatchContext =
  createContext<Dispatch<QueryActionType> | null>(null);

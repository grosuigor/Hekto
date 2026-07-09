import { type Dispatch, useContext } from "react";

import {
  type QueryActionType,
  QueryContext,
  QueryDispatchContext,
  type QueryStoreState,
} from "./context";

export function useQueryContext(): QueryStoreState {
  const context = useContext(QueryContext);

  if (context === null) {
    throw new Error("Query context used without provider!");
  }

  return context;
}

export function useQueryDispatchContext(): Dispatch<QueryActionType> {
  const context = useContext(QueryDispatchContext);

  if (context === null) {
    throw new Error("Query dispatch context used without provider!");
  }

  return context;
}

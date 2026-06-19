import { type Dispatch, useContext } from "react";
import {
  QueryContext,
  QueryDispatchContext,
  type QueryStoreState,
  type QueryActionType,
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

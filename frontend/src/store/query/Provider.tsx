import { useEffect, useReducer, useRef, type PropsWithChildren } from "react";
import { useSearchParams } from "react-router";
import { QueryContext, QueryDispatchContext } from "./context";
import { queryReducer } from "./reducer";
import { parseSearchParams, serializeToSearchParams } from "./searchParams";
import { createQueryStateFromParams, toAppliedQuery } from "./utils";

export function QueryProvider({ children }: PropsWithChildren) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, dispatch] = useReducer(
    queryReducer,
    searchParams,
    createQueryStateFromParams,
  );
  const skipUrlSync = useRef(false);

  useEffect(() => {
    if (skipUrlSync.current) {
      skipUrlSync.current = false;
      return;
    }

    dispatch({
      type: "SYNC_FROM_URL",
      payload: parseSearchParams(searchParams),
    });
  }, [searchParams]);

  useEffect(() => {
    const nextParams = serializeToSearchParams(toAppliedQuery(state));
    const next = nextParams.toString();

    if (next === searchParams.toString()) {
      return;
    }

    skipUrlSync.current = true;
    setSearchParams(nextParams, { replace: true });
  }, [searchParams, setSearchParams, state]);

  return (
    <QueryContext value={state}>
      <QueryDispatchContext value={dispatch}>{children}</QueryDispatchContext>
    </QueryContext>
  );
}

import type { QueryActionType, QueryStoreState } from "./context";
import { areAppliedQueriesEqual, cloneFilters, toAppliedQuery } from "./utils";

export function queryReducer(
  state: QueryStoreState,
  action: QueryActionType,
): QueryStoreState {
  switch (action.type) {
    case "SET_SORTING":
      return {
        ...state,
        sorting: action.payload,
        pagination: { ...state.pagination, page: 1 },
      };

    case "SET_PAGINATION": {
      const countChanged = action.payload.count !== state.pagination.count;

      return {
        ...state,
        pagination: {
          ...action.payload,
          page: countChanged ? 1 : action.payload.page,
        },
      };
    }

    case "SET_DRAFT_FILTERS":
      return { ...state, draftFilters: action.payload };

    case "APPLY_FILTERS":
      return {
        ...state,
        filters: cloneFilters(state.draftFilters),
        pagination: { ...state.pagination, page: 1 },
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: [],
        draftFilters: [],
        pagination: { ...state.pagination, page: 1 },
      };

    case "SYNC_FROM_URL": {
      if (areAppliedQueriesEqual(toAppliedQuery(state), action.payload)) {
        return state;
      }

      return {
        ...state,
        sorting: action.payload.sorting,
        pagination: action.payload.pagination,
        filters: cloneFilters(action.payload.filters),
        draftFilters: cloneFilters(action.payload.filters),
      };
    }

    default:
      return state;
  }
}

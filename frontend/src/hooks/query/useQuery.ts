import { useQueryContext, useQueryDispatchContext } from "@/store";

type UseQueryFn = () => [ReturnType<typeof useQueryContext>, ReturnType<typeof useQueryDispatchContext>]

export const useQuery: UseQueryFn = () => {
  const queryContext = useQueryContext()
  const dispatch = useQueryDispatchContext()

  return [queryContext, dispatch]
}
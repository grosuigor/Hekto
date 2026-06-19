import type { Filter } from "@/types";
import { request } from "./request";

export function listFilters() {
  return request<Filter[]>("/filters/list");
}

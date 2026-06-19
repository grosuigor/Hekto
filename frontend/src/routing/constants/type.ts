export type Route = {
  label: string;
  path: string;
};

export type RouteGrid = Array<{
  label: string;
  routes: Route[];
}>;

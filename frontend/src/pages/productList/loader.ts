import { listFilters, listProducts } from "@/services/api";

const EMPTY_PRODUCTS = {
  products: [],
  total: 0,
};

export async function loader({ request }: { request: Request }) {
  const searchParams = new URL(request.url).searchParams;

  const [filters, products] = await Promise.all([
    listFilters(),
    listProducts(searchParams),
  ]);

  return {
    filters: filters ?? [],
    products: products ?? EMPTY_PRODUCTS,
  };
}

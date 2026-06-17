import { retrieveProduct } from "@/services/api";

export async function loader({
  params,
}: {
  params: { pid?: string } | Promise<{ pid?: string }>;
}) {
  const { pid: id } = await Promise.resolve(params);

  if (!id) {
    throw new Response("Product not found", { status: 404 });
  }

  const product = await retrieveProduct(id);

  if (!product) {
    throw new Response("Product not found", { status: 404 });
  }

  return product;
}

import { loader as baseLoader } from "../loader"

export async function loader() {
  return baseLoader("cart");
}

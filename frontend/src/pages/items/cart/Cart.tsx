import {
  Button,
  Divider,
  ProductCard,
  Section,
  Skeleton,
  Typography,
} from "@/components";
import { useCart } from "@/hooks";
import { Empty } from "../empty";
import styles from "./Cart.module.scss";
import { loader } from "./loader";
import { useTotal } from "./hooks";
import { ITEMS_COUNT_FALLBACK } from "./data";

function Cart() {
  const [products, dispatch] = useCart();
  const [subtotalPrice, shippingPrice, totalPrice] = useTotal(products);

  if (products?.length === 0) {
    return <Empty />;
  }

  return (
    <Section gap="lg" title="Shopping Cart">
      <div className={styles.layout}>
        <div className={styles.items}>
          {products
            ? products.map((product, i) =>
                product ? (
                  <ProductCard
                    key={product.id}
                    type="cart"
                    product={product}
                    quantity={product.quantity}
                    onQuantityChange={(quantity) =>
                      dispatch({
                        type: "SET_QUANTITY",
                        payload: { productId: product.id, quantity },
                      })
                    }
                    onRemove={() =>
                      dispatch({
                        type: "REMOVE_ITEM",
                        payload: { productId: product.id },
                      })
                    }
                  />
                ) : (
                  <Skeleton key={i} className={styles.skeleton} />
                ),
              )
            : Array.from({
                length: ITEMS_COUNT_FALLBACK,
              }).map((_, i) => (
                <Skeleton key={i} className={styles.skeleton} />
              ))}
        </div>
        <aside className={styles.summary}>
          <div>
            <div>
              <Typography variant="body" modifier="bold">
                Subtotal:
              </Typography>
              <Typography variant="label" modifier="bold">
                {products !== undefined ? subtotalPrice : ""}
              </Typography>
            </div>
            <Divider />
            <div>
              <Typography variant="body" modifier="bold">
                Total:
              </Typography>
              <Typography variant="label" modifier="bold">
                {products !== undefined ? totalPrice : ""}
              </Typography>
            </div>
            <Divider />
            <div>
              <Typography variant="body" modifier="small" color="grey-3">
                Shipping:
              </Typography>
              <Typography variant="label" modifier="small" color="grey-3">
                {products !== undefined ? shippingPrice : ""}
              </Typography>
            </div>
            <Button
              variant="filled"
              className={styles.checkout}
              disabled={products === undefined}
            >
              <Typography variant="subtitle" modifier="extra-small">
                Proceed To Checkout
              </Typography>
            </Button>
          </div>
          <Button
            disabled={products === undefined}
            variant="text"
            color="primary"
            onClick={() => dispatch({ type: "CLEAR" })}
          >
            <Typography variant="body" isLato>
              Clear Cart
            </Typography>
          </Button>
        </aside>
      </div>
    </Section>
  );
}

Cart.loader = loader;

export { Cart };

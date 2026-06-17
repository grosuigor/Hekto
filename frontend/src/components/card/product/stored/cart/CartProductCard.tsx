import { Button } from "@/components/clickable";
import { Icon } from "@/components/icon";
import { Image } from "@/components/image";
import { Input } from "@/components/input";
import { Typography } from "@/components/typography";
import { usePrice, useUpdater } from "@/hooks";
import { PATHS } from "@/routing";
import { CartProduct } from "@/types";
import { Link } from "react-router";
import styles from "./CartProductCard.module.scss";

type CartProductCardProps = {
  product: CartProduct;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onRemove: () => void;
};

export function CartProductCard({
  product,
  quantity,
  onQuantityChange,
  onRemove,
}: CartProductCardProps) {
  const [price, priceTotal] = usePrice([
    product.price,
    product.price * quantity,
  ]);
  const updateQuantity = useUpdater(quantity, onQuantityChange);

  return (
    <div className={styles.item}>
      <Link to={`${PATHS.products}${product.id}`} className={styles.image}>
        <Image src={product.thumbnail} alt={product.name} />
      </Link>
      <div className={styles.content}>
        <Link to={`${PATHS.products}${product.id}`} className={styles.name}>
          <Typography variant="subtitle">{product.name}</Typography>
        </Link>
        <Typography variant="label">{price}</Typography>
      </div>
      <Input.Counter
        id={`cart-${product.id}`}
        value={quantity}
        setValue={updateQuantity}
      />
      <Typography variant="label" modifier="bold" className={styles.price}>
        {priceTotal}
      </Typography>
      <Button variant="text" color="black" iconOnly rounded onClick={onRemove}>
        <Icon name="close" />
      </Button>
    </div>
  );
}

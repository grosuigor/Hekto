import emptyCartImg from "@/assets/cart/empty.png";
import { Image, Section, StyledLink, Typography } from "@/components";
import { PATHS } from "@/routing";
import styles from "./Empty.module.scss"

export function Empty() {
  return (
    <Section gap="lg" className={styles.empty}>
      <Image src={emptyCartImg} alt="Empty Cart" isLocal />
      <Typography variant="h3">Your cart is empty</Typography>
      <StyledLink to={PATHS.products} variant="filled">
        <Typography variant="subtitle" modifier="extra-small">
          Start Shopping
        </Typography>
      </StyledLink>
    </Section>
  );
}

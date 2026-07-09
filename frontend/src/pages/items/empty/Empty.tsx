import { PATHS } from "@/routing";

import { Image, Section, StyledLink, Typography } from "@/components";

import { EmptyProps } from "./types";

import emptyCartImg from "@/assets/cart/empty.png";

import styles from "./Empty.module.scss";

export function Empty({ title, cta }: EmptyProps) {
  return (
    <Section gap="lg" className={styles.empty}>
      <Image src={emptyCartImg} alt="Empty Cart" isLocal />
      <Typography variant="h3">{title}</Typography>
      <StyledLink to={PATHS.products} variant="filled">
        <Typography variant="subtitle" modifier="extra-small">
          {cta}
        </Typography>
      </StyledLink>
    </Section>
  );
}

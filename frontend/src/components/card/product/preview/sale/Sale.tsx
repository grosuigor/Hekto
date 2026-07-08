import clsx from "clsx/lite";

import { Image } from "@/components/image";

import type { SaleProps } from "./types";

import saleImg from "@/assets/sale.svg";

import styles from "./Sale.module.scss";

export function Sale({ isSale, style, className }: SaleProps) {
  if (isSale) {
    return (
      <Image
        style={style}
        className={clsx(styles.sale, className)}
        src={saleImg}
        alt="sale"
        isLocal
      />
    );
  }

  return null;
}

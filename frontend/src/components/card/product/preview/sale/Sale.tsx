import saleImg from "@/assets/sale.svg";
import { Image } from "@/components/image";
import type { ComponentWithoutChildrenProps } from "@/types";
import clsx from "clsx/lite";
import styles from "./Sale.module.scss";

type SaleProps = ComponentWithoutChildrenProps & {
  isSale: boolean;
};

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

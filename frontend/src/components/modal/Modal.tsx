import { createPortal } from "react-dom";

import { Button } from "@/components/clickable";
import { Icon } from "@/components/icon";
import { Image } from "@/components/image";

import { useModal } from "./hooks";
import type { ModalProps } from "./types";

import styles from "./Modal.module.scss";

export function Modal({ open, image, onClose }: ModalProps) {
  useModal(open, onClose);

  if (!open) {
    return null;
  }

  return createPortal(
    <div className={styles.container} onClick={onClose}>
      <Image
        className={styles.img}
        skeletonProps={{ style: { width: "100%", height: "100%" } }}
        src={image}
        alt="Modal Image"
      />
      <Button
        variant="text"
        color="white"
        rounded
        onClick={onClose}
        className={styles.btn}
      >
        <Icon name="close" size="lg" />
      </Button>
    </div>,
    document.getElementById("modal")!,
  );
}

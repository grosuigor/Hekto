import { Button } from "@/components/clickable";
import { Icon } from "@/components/icon";
import { Image } from "@/components/image";
import { type KeyboardEvent, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import { useModal } from "./hooks";

type ModalProps = {
  open: boolean;
  image: string;
  onClose: (e: MouseEvent | KeyboardEvent) => void;
};

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

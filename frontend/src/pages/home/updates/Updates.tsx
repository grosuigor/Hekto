import { Button, Section, Typography } from "@/components";

import updatesImg from "@/assets/home/updates.png";

import styles from "./Updates.module.scss";

export function Updates() {
  return (
    <Section bgImage={updatesImg} className={styles.updates}>
      <div className={styles.updates__content}>
        <Typography variant="h2">
          Get Latest Update By Subscribe 0ur Newsletter
        </Typography>
        <Button variant="filled">
          <Typography variant="subtitle" modifier="extra-small">
            Subscribe
          </Typography>
        </Button>
      </div>
    </Section>
  );
}

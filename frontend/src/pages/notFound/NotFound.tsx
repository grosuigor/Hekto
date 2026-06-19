import { Button, Icon, Section, Typography } from "@/components";
import { PATHS } from "@/routing";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import styles from "./NotFound.module.scss";

export function NotFound() {
  const navigate = useNavigate();

  const goHome = useCallback(() => {
    navigate(PATHS.home);
  }, [navigate]);

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Section gap="xl" bgColor="grey-1" title="404 Not Found">
      <Typography variant="subtitle" modifier="small" isLato>
        Oops, this page is not found
      </Typography>
      <div className={styles.actions}>
        <Button variant="filled" onClick={goHome}>
          <Icon name="home" />
          <Typography variant="subtitle" modifier="small">
            Home
          </Typography>
        </Button>
        <Button variant="filled" onClick={goBack}>
          <Icon name="arrow-back" />
          <Typography variant="subtitle" modifier="small">
            Back
          </Typography>
        </Button>
      </div>
    </Section>
  );
}

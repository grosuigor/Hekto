import { useCallback, useState } from "react";

import { Link } from "react-router";

import {
  ADDRESS_LINK,
  EXTERNAL_LINKS,
  FOOTER_ROUTE_GRID,
  PATHS,
} from "@/routing";

import { Button, Icon, Image, Input, Section, Typography } from "@/components";

import logo from "@/assets/logo.svg";

import styles from "./Footer.module.scss";

export function Footer() {
  const [email, setEmail] = useState("");

  const signup = useCallback(() => {
    const trimmed = email.trim();

    if (!trimmed) {
      return;
    }

    setEmail("");
  }, [email]);

  return (
    <footer>
      <Section variant="layout" bgColor="grey-1" className={styles.navigation}>
        <div className={styles.navigation__main}>
          <Link to={PATHS.home}>
            <Image src={logo} alt="logo" isLocal />
          </Link>
          <Input
            id="newsletter_signup"
            type="email"
            placeholder="Enter Email Address"
            value={email}
            setValue={setEmail}
            className={styles.navigation__signup}
            endAdornment={
              <Button onClick={signup} variant="filled" size="sm">
                <Typography variant="body" modifier="extra-small">
                  Sign Up
                </Typography>
              </Button>
            }
          />
          <a href={ADDRESS_LINK} target="_blank" rel="noopener noreferrer">
            <Typography variant="body" color="grey-3" isLato>
              17 Princess Road, London, Greater London NW1 8JR, UK
            </Typography>
          </a>
        </div>
        <div className={styles.navigation__grid}>
          {FOOTER_ROUTE_GRID.map((col) => (
            <div key={col.label} className={styles.navigation__col}>
              <Typography variant="subtitle" color="black">
                {col.label}
              </Typography>
              {col.routes.map(({ path, label }) => (
                <Link key={`${col.label}-${label}`} to={path}>
                  <Typography variant="body" color="grey-3" isLato>
                    {label}
                  </Typography>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </Section>
      <Section variant="layout" bgColor="grey-2" className={styles.copyright}>
        <Typography variant="body" modifier="small" color="grey-3" isLato>
          ©Webecy - All Rights Reserved
        </Typography>
        <div className={styles.socials}>
          {Object.entries(EXTERNAL_LINKS).map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer">
              <Button variant="filled" color="black" size="sm" rounded>
                <Icon name={name} />
              </Button>
            </a>
          ))}
        </div>
      </Section>
    </footer>
  );
}

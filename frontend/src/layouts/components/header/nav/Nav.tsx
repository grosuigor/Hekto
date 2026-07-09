import { Link, NavLink } from "react-router";

import clsx from "clsx/lite";

import { NAV_ROUTES, PATHS } from "@/routing";

import { Image, Section, Typography } from "@/components";

import { NavSearch } from "./search";

import logo from "@/assets/logo.svg";

import styles from "./Nav.module.scss";

export function Nav() {
  return (
    <Section variant="layout" component="nav" className={styles.nav}>
      <Link to={PATHS.home}>
        <Image src={logo} alt="logo" isLocal />
      </Link>
      <div className={styles.nav__links}>
        {NAV_ROUTES.map(({ label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              clsx(styles.nav__link, isActive && styles["nav__link--active"])
            }
            end={path === "/"}
          >
            <Typography variant="label">{label}</Typography>
          </NavLink>
        ))}
      </div>
      <div className="grower" />
      <NavSearch />
    </Section>
  );
}

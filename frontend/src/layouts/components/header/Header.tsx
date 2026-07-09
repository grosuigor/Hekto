import { LOCALES_LABELS, MEDIA_QUERIES } from "@/constants";

import {
  useAvailableCurrencies,
  useAvailableLocales,
  useMediaQuery,
} from "@/hooks";
import { PATHS } from "@/routing";
import { useCartContext } from "@/store";

import { Dropdown, Icon, Section, StyledLink, Typography } from "@/components";

import { Nav } from "./nav";

import styles from "./Header.module.scss";

export function Header() {
  const [currency, availableCurrencies, setCurrency] = useAvailableCurrencies();
  const [locale, availableLocales, setLocale] = useAvailableLocales();
  const isMd = useMediaQuery(MEDIA_QUERIES.md);
  const { items: cartItems } = useCartContext();
  const cartItemCount = cartItems.length;

  return (
    <header className={styles.header}>
      <Section
        variant="layout"
        component="div"
        bgColor="tertiary"
        className={styles.top}
      >
        <div className={styles.top__row}>
          <a href="mailto:mhhasanul@gmail.com" className={styles.top__contact}>
            <Icon name="mail" />
            <Typography
              variant="subtitle"
              modifier="extra-small"
              style={{ textTransform: "none" }}
            >
              mhhasanul@gmail.com
            </Typography>
          </a>
          <a href="tel:(12345)67890" className={styles.top__contact}>
            <Icon name="phone" />
            <Typography variant="subtitle" modifier="extra-small">
              (12345)67890
            </Typography>
          </a>
        </div>
        <div className="grower" />
        <div className={styles.top__row}>
          <Dropdown
            options={availableLocales.map(({ locale, label }) => ({
              text: label,
              onClick: () => setLocale(locale),
            }))}
          >
            <Typography variant="subtitle" modifier="extra-small">
              {isMd ? locale : LOCALES_LABELS[locale]}
            </Typography>
          </Dropdown>
          <Dropdown
            options={availableCurrencies.map((currency) => ({
              text: currency,
              onClick: () => setCurrency(currency),
            }))}
          >
            <Typography variant="subtitle" modifier="extra-small">
              {currency}
            </Typography>
          </Dropdown>
          <StyledLink
            to={PATHS.contacts}
            variant="text"
            color="white"
            size="sm"
          >
            <Typography variant="subtitle" modifier="extra-small">
              Login
            </Typography>
            <Icon name="person" />
          </StyledLink>
          <StyledLink
            to={PATHS.wishlist}
            variant="text"
            color="white"
            size="sm"
          >
            <Typography variant="subtitle" modifier="extra-small">
              Wishlist
            </Typography>
            <Icon name="heart" />
          </StyledLink>
          <StyledLink
            to={PATHS.cart}
            variant="text"
            color="white"
            size="sm"
            style={{ overflow: "visible" }}
            rounded
          >
            <span className={styles.cart}>
              <Icon name="cart" />
              {cartItemCount > 0 && (
                <Typography
                  variant="body"
                  modifier="extra-small"
                  color="white"
                  isLato
                  className={styles.cart__badge}
                >
                  {cartItemCount}
                </Typography>
              )}
            </span>
          </StyledLink>
        </div>
      </Section>
      <Nav />
    </header>
  );
}

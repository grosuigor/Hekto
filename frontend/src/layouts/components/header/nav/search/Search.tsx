import { type MouseEvent, useMemo, useRef, useState } from "react";

import { Link } from "react-router";

import { useProductSearch } from "@/hooks";
import { PATHS } from "@/routing";

import {
  Button,
  Icon,
  Input,
  ProductCard,
  Skeleton,
  Typography,
} from "@/components";

import styles from "./Search.module.scss";

export function NavSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const blurTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const { results, loading, isEnabled } = useProductSearch(searchQuery);
  const hasResults = useMemo(
    () => Object.values(results).some((value) => value.length > 0),
    [results],
  );
  const showDropdown = focused && isEnabled;

  const handleFocus = () => {
    clearTimeout(blurTimeoutRef.current);
    setFocused(true);
  };

  const handleBlur = () => {
    blurTimeoutRef.current = setTimeout(() => setFocused(false), 150);
  };

  const handleDropdownMouseDown = (e: MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <Input
        value={searchQuery}
        setValue={setSearchQuery}
        id="search"
        placeholder="Search"
        className={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        endAdornment={
          <Button variant="filled" iconOnly>
            <Icon name="search" size="lg" />
          </Button>
        }
      />
      {showDropdown && (
        <div className={styles.dropdown} onMouseDown={handleDropdownMouseDown}>
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className={styles.skeleton} />
            ))
          ) : hasResults ? (
            <>
              {results.groups.map(({ value, type }) => (
                <Link
                  key={`${type}-${value}`}
                  to={`${PATHS.products}?filter__${type}=${encodeURIComponent(value)}`}
                  className={styles.suggestion}
                >
                  <Typography variant="body" modifier="small" isLato>
                    See {type}: {value}
                  </Typography>
                </Link>
              ))}
              {results.products.map((result) => (
                <ProductCard
                  key={result.item.id}
                  type="search"
                  product={result.item}
                />
              ))}
            </>
          ) : (
            <Typography
              variant="body"
              color="grey-3"
              modifier="small"
              isLato
              className={styles.empty}
            >
              No products found
            </Typography>
          )}
        </div>
      )}
    </div>
  );
}

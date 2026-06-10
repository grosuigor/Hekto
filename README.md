# Hekto

E-commerce website with: **frontend** (Vite + React) and **backend** (Next.js API).

| Folder   | Stack                                      | Port (dev) |
|----------|--------------------------------------------|------------|
| Frontend | React 19, React Router 7, TypeScript, SCSS | `5173`     |
| Backend  | Next.js 16 App Router, TypeScript          | `3000`     |

API is available from `http://localhost:3000/api/`. Frontend reads URL from`frontend/.env` (`VITE_API_URL`).

---

## Quick start

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
cp .env
npm install
npm run dev
```

# Build check:

```bash
cd frontend && npm run lint && npm run build
cd backend && npm run lint && npm run build
```

---

## Structure

```
Hekto/
├── frontend/
│   └── src/
│       ├── assets/        # Images
│       ├── components/    # Reusable UI, components
│       ├── constants/     # Constants (Locales, Currencies)
│       ├── hooks/         # Hooks
│       ├── layouts/       # Layouts and their components (header, footer)
│       ├── pages/         # Pages, their components and loaders
│       ├── routing/       # PATHS, ROUTE_IDS
│       ├── services/      # API client, storage adapters
│       ├── store/         # Global state (context + reducer)
│       ├── styles/        # Global SCSS
│       └── types/         # General types
├── backend/           # REST API
│   └── src/
│       ├── app/api/       # Route handlers (Next.js App Router)
│       ├── serializers/   # DTO / response mapping
│       ├── storage/       # Models, QuerySet, db.json
│       └── types/         # Types
└── .github/           # templates
```

---

## Git workflow

### Branches

| Prefix       | Meaning.                            | Example                   |
|--------------|-------------------------------------|---------------------------|
| `main`       | Default.                            | —                         |
| `feature/`   | New features.                       | `feature/cart-counter`    |
| `fix/`       | Bug fix.                            | `fix/product-route-outlet`|
| `refactor/`  | Refactoring without logic changes   | `refactor/cart-reducer`   |
| `chore/`     | Infrastructure, meta files, envs    | `chore/github-actions`    |
| `docs/`      | Documentation.                      | `docs/readme`             |

Format: `<prefix>/<short-desc-kebab-case>`.

### Conventional Commits

```
<type>(<scope>): <short desc>
```

Types:
- feat
- fix
- refactor
- style
- chore
- docs

Examples:

```
feat(frontend): add product detail page with related products
fix(backend): return related products in retrieve endpoint
chore(ci): add github actions workflow
docs: add repository readme and pr template
```

---

## Nomenclature: Frontend

### Folders

| Domain         | Style          | Example                         |
|----------------|----------------|---------------------------------|
| Pages.         | `camelCase`    | `productList/`, `notFound/`     |
| Page sections  | `camelCase`    | `uniqueFeatures/`, `latest/`    |
| Components     | `camelCase`    | `button/`, `input/counter/`     |
| Hooks          | `camelCase`    | `hooks/products/`               |
| Storages       | `camelCase`    | `store/cart/`, `store/query/`   |

### Files

| Тип              | Style                         | Example                             |
|------------------|-------------------------------|-------------------------------------|
| Component.       | `PascalCase.tsx`              | `ProductList.tsx`, `CartItem.tsx`   |
| Component Styles | `PascalCase.module.scss`      | `ProductList.module.scss`           |
| SCSS partial     | `_kebab-case.scss`            | `_variables.scss`, `_mixins.scss`   |
| Hook             | `use` + `PascalCase`.ts       | `useCart.ts`, `usePrice.ts`         |
| Page Loader      | `loader.ts`                   | `pages/product/loader.ts`           |
| Static data      | `data.ts`                     | `pages/home/blog/data.ts`           |
| Barrel export    | `index.ts`                    | `components/index.ts`               |
| Types            | `camelCase.ts`                | `product.ts`, `cart.ts`             |
| API functions    | `camelCase` verb + noun       | `listProducts`, `retrieveProduct`   |

### Components and exports

- File Name = Name of the main export (`export function Cart()` → `Cart.tsx`).
- Compound components though namespace: `Input.Counter`, `Input.Select`.
- Product Card: suffix `ProductCard` or `Card` in component name (`FeaturedProductCard`, `SearchProductCard`).
- Containers: suffix `Container` (`CardContainer`, `ProductCardContainer`).

### Store

Every Store Module:

```
store/<domain>/
  Provider.tsx    # useReducer + side-effects
  reducer.ts      # reducer + CartActionType
  state.ts        # state type, selectors, initialState
  context.ts      # React contexts
  hook.ts         # useXContext / useXDispatchContext
  index.ts        # public API
```

### Imports

- Alias `@/` → `frontend/src/`.
- Inside `components/` — import of adjacent `@/components/<module>`
- Outside `components/` — barrel `@/components`, `@/hooks`, `@/store`.

### SCSS

- Desktop-first responsive: `@include respond(md)` etc. in `styles/abstracts/_mixins.scss`.
- Tokens spacing/color — в `styles/abstracts/_variables.scss`.
- `*.module.scss` automatically connects variables + mixins (see `vite.config.ts`).

---

## Nomenclature: Backend

### Folders

| Domain        | Style           | Example                             |
|---------------|-----------------|-------------------------------------|
| API routes    | kebab-case URL  | `products/list/`, `retrieve/[id]/`  |
| Models        | `camelCase`     | `storage/models/product.ts`         |
| Serializers   | `camelCase`     | `serializers/product/preview.ts`    |

### Files

| Type             | Style                         | Example                   |
|------------------|-------------------------------|---------------------------|
| Route handler    | `route.ts`                    | `list/route.ts`           |
| Utils            | `camelCase.ts`                | `urlParser.ts`            |
| Model            | `camelCase.ts` + `Model`      | `ProductModel`            |
| Serializer       | `camelCase.ts` + `Serializer` | `PreviewProductSerializer`|
| Constants in api | `constants.ts`                | `products/constants.ts`   |

### API

- Only `GET`.
- Handler: load `Storage` → call `Model` method → `Serializer.serialize()` → `NextResponse.json()`.
- Endpoints' names — multiple noun + verb: `/products/list`, `/products/retrieve/:id`, `/products/cart`.

### Serializers

- Base class `Serializer<T, D>` in `serializers/base.ts`.
- Single item serializtion: `protected serializeItem()`
- One serializer = one response shape (`PreviewProduct`, `ListedProduct`, …).

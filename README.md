# Products Catalog Frontend

A small frontend app built with React, TypeScript, and Vite that displays products from the DummyJSON API.

The app supports:

- product listing
- debounced search
- pagination
- loading, empty, and error states

## Tech Stack

- React 19
- TypeScript
- Vite
- ESLint
- Prettier

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Then open the local URL shown by Vite in your terminal.

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` runs TypeScript build checks and creates a production build
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint
- `npm run lint:fix` runs ESLint and applies safe fixes
- `npm run format` formats the project with Prettier

## Features

### Product list

Products are loaded from the DummyJSON products endpoint and rendered as cards with:

- thumbnail
- title
- brand
- description
- price
- discount
- rating
- stock

### Search

- search input filters products using the API search endpoint
- search requests are debounced by `1000ms`
- clearing the search resets the list

### Pagination

- products are requested in pages of `10`
- changing the search query resets pagination back to page `1`
- pagination controls are hidden when there is only one page

### States

The UI handles:

- loading state while requests are in progress
- empty state when no products match the current query
- error state when the API request fails

## API

This project uses the public DummyJSON API:

- base URL: `https://dummyjson.com`
- list endpoint: `/products`
- search endpoint: `/products/search`

Main configuration lives in [`src/constants/api.ts`](/c:/Users/krava/Projects/personal/products-website-example-frontend/src/constants/api.ts) and [`src/constants/search.ts`](/c:/Users/krava/Projects/personal/products-website-example-frontend/src/constants/search.ts).

## Project Structure

```text
src/
  api/          API request helpers
  components/   UI components
  constants/    Shared configuration values
  hooks/        Custom React hooks
  types/        TypeScript types
  utils/        Small utility helpers
```

Important entry points:

- [`src/App.tsx`](/c:/Users/krava/Projects/personal/products-website-example-frontend/src/App.tsx) wires search, pagination, and product loading together
- [`src/hooks/useProducts.ts`](/c:/Users/krava/Projects/personal/products-website-example-frontend/src/hooks/useProducts.ts) handles fetching and search behavior
- [`src/api/fetchProducts.ts`](/c:/Users/krava/Projects/personal/products-website-example-frontend/src/api/fetchProducts.ts) loads paginated products
- [`src/api/searchProducts.ts`](/c:/Users/krava/Projects/personal/products-website-example-frontend/src/api/searchProducts.ts) loads paginated search results

## Notes

- No environment variables are required for local development
- Data is fetched directly from a public external API
- The current page size is controlled by the `LIMIT` constant

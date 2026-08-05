# Healthy Rivers and Landscapes website

This repository contains the public landing page for [Healthy Rivers and Landscapes](https://hrl.water.ca.gov/). It is a small static site, separate from the interactive restoration-map application.

## Local development

Install dependencies and start the Vite development server:

```sh
pnpm install
pnpm dev
```

## Production build

```sh
pnpm build
```

The production build is written to `dist/`. You can preview it locally with:

```sh
pnpm preview
```

## Hosting and deployment

The site is hosted on Azure Static Web Apps behind Azure Front Door. Azure Front Door routes the root path (`/`) to this site and routes `/restoration-map/` to the separate restoration-map application.

Deployment is handled by the GitHub Actions workflow in `.github/workflows/`. Store deployment credentials only in GitHub Actions secrets; the workflow expects `AZURE_STATIC_WEB_APPS_API_TOKEN` and does not contain a token.

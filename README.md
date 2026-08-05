# Healthy Rivers and Landscapes website

This repository contains the public landing page for [Healthy Rivers and Landscapes](https://hrl.water.ca.gov/). It is a small static site, separate from the [interactive restoration map application](https://github.com/lucy-dwr/hrl-restoration-map/tree/main).

The page is implemented in `src/App.ts`, with its styles in `src/style.css`. Static assets belong in `public/`. The `/restoration-map/` link is served by the separate restoration-map application and should remain available at that path.

## Local development

Use Node.js 24 to match CI, then install dependencies and start the Vite development server:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Run the TypeScript check before submitting changes:

```sh
pnpm typecheck
```

## Production build

```sh
pnpm build
```

The build runs the TypeScript check, creates the Vite production bundle, and copies `staticwebapp.config.json` into `dist/`. You can preview the result locally with:

```sh
pnpm preview
```

## Hosting and deployment

The site is hosted on Azure Static Web Apps behind Azure Front Door. Azure Front Door routes the root path (`/`) to this site and routes `/restoration-map/` to the separate restoration-map application.

Deployment is handled by `.github/workflows/azure-static-web-apps.yml`. Pushes to `main` deploy the production site; pull requests to `main` create a preview environment, which is removed when the pull request closes. The workflow builds with Node.js 24 and pnpm 9.

Store deployment credentials only in GitHub Actions secrets. The workflow expects `AZURE_STATIC_WEB_APPS_API_TOKEN` and does not contain a token.

# Healthy Rivers and Landscapes website

This repository is the landing page served at the root of
[`https://hrl.water.ca.gov/`](https://hrl.water.ca.gov/). It is a small static
site, separate from the
[interactive restoration map application](https://github.com/Healthy-Rivers-and-Landscapes-Science/hrl-restoration-map).

The page is implemented in `src/App.ts`, with its styles in `src/style.css`.
Static assets belong in `public/`. The `/restoration-map/` link points at the
separate restoration-map application and must stay available at that path.

## Where this fits

| Public path | Served by | Repository |
| --- | --- | --- |
| `/` | this site | `hrl-site` (here) |
| `/restoration-map/` | the map app | [`hrl-restoration-map`](https://github.com/Healthy-Rivers-and-Landscapes-Science/hrl-restoration-map) |
| `/restoration-data/` | the published data snapshot (Azure Blob) | produced by [`hrl-restoration-data-pipeline`](https://github.com/Healthy-Rivers-and-Landscapes-Science/hrl-restoration-data-pipeline) |

The Azure Static Web App (`stapp-hrl-website-prod`, resource group
`rg-hrl-apps-prod-wus3`), the shared Azure Front Door profile, the `/` route, and
the `hrl.water.ca.gov` custom domain are all defined in
[`hrl-azure-infrastructure`](https://github.com/Healthy-Rivers-and-Landscapes-Science/hrl-azure-infrastructure)
(`infra/environments/prod/apps`). This repository only provides the site content
and its own deploy workflow.

## Local development

Use Node.js 24 to match CI, then install dependencies and start the Vite
development server:

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

The build runs the TypeScript check, creates the Vite production bundle, and
copies `staticwebapp.config.json` into `dist/`. Preview the result locally with:

```sh
pnpm preview
```

## Hosting and deployment

The site is hosted on Azure Static Web Apps behind Azure Front Door. Front Door
routes `/` to this site and `/restoration-map/` to the map application; local
development and preview environments are rooted at `/` (`vite.config.ts` sets
`base: '/'`).

Deployment is handled by `.github/workflows/azure-static-web-apps.yml`. Pushes to
`main` deploy production; pull requests create a preview environment that is
removed when the PR closes. The workflow builds with Node.js 24 and pnpm 9.

The workflow needs the `AZURE_STATIC_WEB_APPS_API_TOKEN` GitHub Actions secret -
the deployment token for `stapp-hrl-website-prod`. It is the Static Web App's
own token, separate from the map app's token and from the Terraform deployment
service principal; store it only as a secret in this repository, never
in the workflow file. See
[`hrl-azure-infrastructure` &rarr; `prod/apps/README.md`](https://github.com/Healthy-Rivers-and-Landscapes-Science/hrl-azure-infrastructure/blob/main/infra/environments/prod/apps/README.md)
("Deployment Token").

Any change to routing, the custom domain, or the Front Door profile is made in
`hrl-azure-infrastructure`, not here, and is coordinated with DTS.

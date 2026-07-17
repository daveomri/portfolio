# Portfolio

Personal portfolio and links page for David Omrai.

Built with **React 19 + Vite + MUI v7**, served as a static site by **nginx**
in Docker, and exposed to the internet through a **Cloudflare Tunnel**.

## Tech stack

| Concern      | Choice                                  |
| ------------ | --------------------------------------- |
| UI           | React 19, Material UI (MUI) v7, emotion |
| Routing      | react-router v7 (`BrowserRouter`)       |
| Build tool   | Vite 7                                   |
| Lint/format  | ESLint 9 (flat config) + Prettier       |
| Container    | Multi-stage Docker → nginx              |
| Public access| Cloudflare Tunnel (`cloudflared`)       |
| CI/CD        | GitHub Actions → image on GHCR          |

> Note: Vite 7 requires Node.js **20.19+** or **22.12+**. Use Node 22 for local dev.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build into ./build
npm run preview    # serve the production build locally
npm run lint       # eslint
npm run format     # prettier --write
```

## Project structure

```
src/
  main.jsx            # entry: ThemeProvider + CssBaseline + Router
  theme.js            # MUI theme + shared color palette
  App.jsx             # routes: / (Portfolio) and /links (Links)
  Portfolio.jsx       # "about me" page
  Links.jsx           # link-tree page (data-driven)
  linksData.js        # the link sections/URLs
  components/
    header/Header.jsx # app bar + swipeable drawer nav
    footer/Footer.jsx # social icons
    cards/            # Card wrapper + Greetings card
  resource/           # fonts + images
```

## Docker

Build and run everything (app + tunnel) with Compose:

```bash
cp .env.example .env         # then paste your Cloudflare tunnel token
docker compose up --build -d
```

Or just the web container:

```bash
docker build -t portfolio .
docker run --rm -p 8080:80 portfolio   # http://localhost:8080
```

The image is a static nginx build with SPA fallback (`/links` and any other
route resolve to `index.html`), gzip, and long-cache headers on hashed assets.

## Cloudflare Tunnel (self-hosting)

1. In the Cloudflare **Zero Trust** dashboard: **Networks → Tunnels → Create a
   tunnel** (type *Cloudflared*).
2. Copy the tunnel **token** into `.env` as `TUNNEL_TOKEN`.
3. Add a **Public Hostname** for your domain routing to `http://web:80`.
4. `docker compose up -d`.

No router port-forwarding is needed and your home IP stays private; Cloudflare
terminates TLS.

## Versioning & releases

Semantic Versioning via git tags.

- Every PR and push to `main`/`master` runs **lint + build** (`.github/workflows/ci.yml`).
- Pushing a tag like `v1.2.3` builds and publishes a Docker image to
  **GHCR** (`.github/workflows/release.yml`):

```bash
git tag v1.0.0
git push origin v1.0.0
```

On the server, pull and restart:

```bash
docker compose pull && docker compose up -d
```

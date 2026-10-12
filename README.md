# Portfolio

My personal portfolio page.

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

## Versioning & releases

Semantic Versioning via git tags.

- Every PR and push to `main`/`master` runs **lint + build** (`.github/workflows/ci.yml`).
- Pushing a tag like `v1.2.3` builds and publishes a Docker image to
  **GHCR** (`.github/workflows/release.yml`):

```bash
git tag v1.0.0
git push origin v1.0.0
```
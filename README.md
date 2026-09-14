# Bharghava — Portfolio

Personal site for [Bharghava](https://www.linkedin.com/in/bharghava-b/) — Tech Lead, Hyderabad.

Live target: [https://bharghava52.github.io/](https://bharghava52.github.io/)

## Develop

```bash
nvm use 22
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Output is in `dist/`.

## Deploy (GitHub Pages)

1. Create or use repo `bharghava52/bharghava52.github.io`
2. Push this project to `main`
3. Repo **Settings → Pages → Source**: GitHub Actions
4. The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes on every push to `main`

## Theme

Defaults to the OS preference. Nav toggle cycles **System → Light → Dark**.

## Design mocks

Earlier review mocks remain under [`mocks/`](mocks/).

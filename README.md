# Héctor Fàbrega — Personal website

Premium bilingual personal-brand website for Héctor Fàbrega Roig. Spanish is the default language, with an instant English translation, persistent theme/language preferences, accessible project modals and a lightweight animated hero.

## Stack

- Vite
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons

## Local development

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Quality checks

```bash
npm run lint
npm run build
```

The production build is generated in `dist/`.

## Cloudflare Workers & Pages

Import the GitHub repository manually and use:

- Framework preset: **Vite**
- Build command: **`npm run build`**
- Build output directory: **`dist`**
- Root directory: leave blank
- Node.js version: **20 or newer**

No environment variables, external APIs or paid services are required.

The temporary canonical URL in `index.html`, `public/robots.txt` and `public/sitemap.xml` is `https://web-hecroigg.pages.dev/`. Replace it in those three files if the final Cloudflare project name or custom domain is different.

## Content notes

- Financial content is explicitly educational and does not constitute investment, tax or legal advice.
- Replace the “Email / Próximamente” placeholder when a public personal email is ready.

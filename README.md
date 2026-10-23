# portofolio-rakan-web

Portfolio built with Vue 3, TypeScript, and Vite.

## Development

```sh
npm ci
npm run dev
```

`npm run lint` checks TypeScript and Vue types. `npm run build` checks types and creates the production build in `dist/`.

## Analytics

Vercel Web Analytics is initialized in `src/main.ts` using `@vercel/analytics`. Enable Web Analytics in the Vercel project's Analytics tab, then deploy the updated site. Production visits appear in that dashboard; local development does not send analytics data. No environment variables are required.

## CV download

The About section downloads `public/CV_M_Rakan_Naufal.pdf`. Replace this file to update the downloadable CV, keeping its filename unchanged.

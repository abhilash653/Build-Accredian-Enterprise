# Accredian Enterprise — Frontend

React landing page for Accredian Enterprise, built with TanStack Start (React + Vite) and Tailwind CSS v4.

## Repository Layout

```text
.
├── README.md
├── .gitignore
├── .prettierrc
├── .prettierignore
├── AGENTS.md
├── vercel.json
└── frontend/
    ├── package.json
    ├── package-lock.json
    ├── .env.example
    ├── vite.config.ts
    ├── tsconfig.json
    ├── eslint.config.js
    ├── components.json
    ├── api/ssr.ts
    ├── public/
    └── src/
```

## Setup

```sh
cd frontend
npm install
cp .env.example .env
npm run dev
```

Frontend env vars:

- `VITE_LEADS_API_BASE_URL` - optional external API base URL for lead capture; when unset the lead form falls back to a local mock submission.

Frontend scripts:

- `npm run dev` - start the local dev server
- `npm run build` - create a production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Deployment

Deployed to Vercel via `vercel.json`: a static build of `frontend/` served with a server-render fallback (`frontend/api/ssr.ts`).

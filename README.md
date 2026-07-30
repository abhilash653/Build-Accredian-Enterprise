# Accredian Enterprise Monorepo

This repository is split into two independent apps:

- `frontend/` contains the Lovable-built React landing page.
- `backend/` contains the Node.js + Express API for lead capture and seed data.

## Repository Layout

```text
.
├── README.md
├── .gitignore
├── .prettierrc
├── .prettierignore
├── AGENTS.md
├── frontend/
│   ├── package.json
│   ├── package-lock.json
│   ├── .env.example
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── eslint.config.js
│   ├── components.json
│   ├── public/
│   └── src/
└── backend/
    ├── package.json
    ├── package-lock.json
    ├── .env.example
    ├── app.js
    ├── server.js
    └── src/
        ├── controllers/
        ├── routes/
        ├── services/
        ├── middleware/
        ├── config/
        ├── data/
        └── validation/
```

## Frontend Setup

```sh
cd frontend
npm install
cp .env.example .env
npm run dev
```

Frontend env vars:

- `VITE_LEADS_API_BASE_URL` - backend API base URL, for example `http://localhost:4000`

Frontend scripts:

- `npm run dev` - start the local dev server
- `npm run build` - create a production build
- `npm run preview` - preview the production build locally

## Backend Setup

```sh
cd backend
npm install
cp .env.example .env
npm run dev
```

Backend env vars:

- `PORT` - server port, default `4000`
- `ALLOWED_ORIGIN` - allowed frontend origin for CORS, for example `http://localhost:5173`
- `ADMIN_API_KEY` - header key required by `GET /api/leads`
- `DATA_DIR` - optional override for the JSON data directory

Backend scripts:

- `npm run dev` - start the API with `node --watch`
- `npm start` - start the API normally

## How The Apps Connect

- The frontend lead form posts to the URL in `VITE_LEADS_API_BASE_URL`.
- The backend allows the frontend origin through CORS using `ALLOWED_ORIGIN`.
- The backend stores leads in JSON files under `backend/src/data/`.

## API Reference

All API responses use the same envelope:

```json
{ "success": true, "data": {}, "error": null }
```

### `POST /api/leads`

Create a lead submission.

Request body:

```json
{
  "fullName": "Ananya Rao",
  "workEmail": "ananya@company.com",
  "companyName": "Acme Technologies",
  "teamSize": "51-200",
  "interestArea": "AI/ML",
  "message": "We want a pilot for our data team."
}
```

Success response:

- Status: `201`
- Body: `{ success: true, data: { id, createdAt, ...lead }, error: null }`

Validation failure:

- Status: `400`
- Body: `{ success: false, data: null, error: { message, details: { fields } } }`

### `GET /api/leads`

Returns all captured leads, newest first.

Headers:

- `X-Admin-Key: <ADMIN_API_KEY>`

Success response:

- Status: `200`
- Body: `{ success: true, data: { leads: [...] }, error: null }`

### `GET /api/health`

Uptime and deployment check.

Success response:

- Status: `200`
- Body: `{ success: true, data: { status: "ok", timestamp }, error: null }`

### `GET /api/programs`

Returns the static programs and feature seed data.

### `GET /api/testimonials`

Returns the static testimonial seed data.

## Verified Local Run

I verified both apps start in their own folders:

- Frontend: `npm run build` and `npm run dev -- --host 127.0.0.1 --port 4173`
- Backend: `npm start`

The backend health endpoint responded successfully at `http://127.0.0.1:4000/api/health`, and CORS allowed the frontend origin `http://localhost:5173`.

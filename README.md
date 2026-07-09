# Samar Mukhtar — UI/UX Designer Portfolio

A production-ready React + Vite + Tailwind CSS + Framer Motion portfolio site.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
npm run preview   # preview the production build
```

## Structure

- `src/data/content.js` — all real content (bio, experience, projects, skills) in one place. Edit this file to update copy without touching components.
- `src/components/` — one component per section (Hero, About, Services, Process, Projects, Experience, Contact, Navbar, Footer).
- `public/assets/` — photo, project screenshots, resume PDF, favicon.
- Dark/light theme toggle is built with Tailwind's `class` strategy (see `App.jsx`).

## Deploying

The `dist/` folder produced by `npm run build` is a static site — drop it on Vercel, Netlify, GitHub Pages, or any static host. Update `index.html`'s canonical/OG URLs and `public/sitemap.xml` with the real production domain before you deploy.

## Notes

- Update `public/assets/Samar-Mukhtar-Resume.pdf` any time the resume changes — it's linked from the hero's "Download resume" button.
- Testimonials were intentionally left out since none were supplied — add a `Testimonials.jsx` component and wire it into `App.jsx` once you have real quotes to show.

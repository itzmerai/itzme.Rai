# Ryan Amasora | Portfolio

Professional developer portfolio built with React, TypeScript, Tailwind CSS, and Vite. Deployed on GitHub Pages.
https://itzmerai.github.io/itzme.Rai/
## Tech Stack

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Devicon (CDN)
- **Routing:** React Router (HashRouter)
- **Deployment:** GitHub Pages via GitHub Actions

## Features

- Bento grid layout inspired by modern portfolio's
- Dark / Light theme toggle with localStorage persistence
- Multi-page: Home, Tech Stack, Projects, Certifications
- Experience & Education timeline
- Gallery carousel
- Downloadable CV
- Fully responsive (mobile, tablet, desktop)

## Development
- all commands are specific for my device set-up

```bash
# Install dependencies (exFAT drive requires --no-bin-links)
npm install --no-bin-links

# Start dev server
./node_modules/vite/bin/vite.js dev

# Build for production
./node_modules/vite/bin/vite.js build
```

> **Note:** This project is on an exFAT filesystem which doesn't support symlinks. Use `./node_modules/vite/bin/vite.js` instead of `npx vite`.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds and deploys to GitHub Pages automatically.

**Setup:**
1. Create a GitHub repo and push this code to `main`
2. Go to repo Settings > Pages > Source: "GitHub Actions"
3. Update `base` in `vite.config.ts` to match your repo name

## Project Structure

```
src/
  data/          # Static data (profile, skills, projects, journey, certificates)
  pages/         # Route pages (Home, TechStack, ProjectsPage, CertificationsPage)
  components/    # Reusable UI components
  hooks/         # useTheme hook
  utils/         # cn() helper, asset() path resolver
public/assets/   # Images (projects, certificates, carousel, profile, CV)
```

## License

MIT

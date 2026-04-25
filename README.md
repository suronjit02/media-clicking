# MediaClicking — Agency Website

A modern, fully responsive marketing agency website built with React and Tailwind CSS. The project showcases MediaClicking's services, capabilities, case studies, insights, and career opportunities through a polished, animated single-page experience.

---

## Purpose

MediaClicking is a full-service media and communications agency. This website serves as the agency's digital front door — communicating brand identity, presenting core services and capabilities, sharing thought leadership content, and enabling potential clients and candidates to get in touch.

---

## Live Link

🔗 https://media-clicking.netlify.app/

---

## Tech Stack

| Technology | Version | Role |
|---|---|---|
| [React](https://react.dev/) | ^19 | UI component library |
| [React Router](https://reactrouter.com/) | ^7 | Client-side routing |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 | Utility-first styling |
| [DaisyUI](https://daisyui.com/) | ^5 | Tailwind component library (navbar, dropdowns, badges, etc.) |
| [Framer Motion](https://www.framer.com/motion/) | ^12 | Scroll-triggered and entrance animations |
| [AOS](https://michalsnik.github.io/aos/) | ^2 | Animate On Scroll utility |
| [React Icons](https://react-icons.github.io/react-icons/) | ^5 | Icon library (Lucide, Material, Ant Design, etc.) |
| [Vite](https://vitejs.dev/) | ^8 | Build tool and dev server |
| [ESLint](https://eslint.org/) | ^9 | Code linting |
| [Prettier](https://prettier.io/) | ^3 | Code formatting |

---

## Project Structure

```
src/
├── components/
│   ├── Footer/           # Site footer
│   ├── motion/           # Reusable Framer Motion wrapper (FadeIn)
│   ├── Navbar/           # Sticky navbar with fullscreen overlay menu
│   └── Pages/
│       └── Home/
│           ├── card/     # ServiceCard, CapabilitiesCard
│           ├── About.jsx
│           ├── CapabilitiesSection.jsx
│           ├── ContactSection.jsx
│           ├── Hero.jsx
│           ├── Home.jsx
│           ├── Insights.jsx
│           ├── JoinSection.jsx
│           ├── ProvenResults.jsx
│           ├── ServiceSection.jsx
│           ├── Testimonials.jsx
│           └── Video.jsx
├── Layout/               # Root layout (Navbar + Outlet + Footer)
├── routes/               # React Router configuration
├── index.css             # Global styles, custom animations
└── main.jsx              # App entry point, AOS init
public/
├── img/                  # Hero, service, capabilities, insights images
└── video/                # Background and case study videos
```

---

## Key Features

- **Sticky Navbar** with fullscreen overlay menu (desktop card grid + mobile accordion)
- **Hero Slider** with auto-advancing slides, zoom animation, fade transitions, and dot pagination
- **Scroll Animations** — every section animates in using Framer Motion (`FadeIn` wrapper) with directional slide effects (left/right/up) and staggered children
- **Proven Results** section with video background and case study cards
- **Capabilities Grid** — 17 capability cards in a responsive 4-column layout
- **Testimonials** with brand logo strip
- **Join Section** with open job listings
- **Contact Section** with info panel and contact form
- **Fully Responsive** — mobile, tablet, and desktop layouts

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

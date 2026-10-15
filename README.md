# Navya Vanguru — Digital Content Specialist & Storyteller

[![Live Demo](https://img.shields.io/badge/Live%20Demo-navyavanguru.github.io-6366f1?style=for-the-badge&logo=githubpages&logoColor=white)](https://navyavanguru.github.io/navya-vanguru-portfolio/)
[![React](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

> **"Where Strategy Meets Meaningful Storytelling."**  
> An immersive, cinematic digital portfolio engineered for high-impact visual storytelling, creative strategy, and performance copywriting.

🌐 **Live Website**: [https://navyavanguru.github.io/navya-vanguru-portfolio/](https://navyavanguru.github.io/navya-vanguru-portfolio/)

---

## ✨ Highlights & Key Features

- **🌌 Three.js Animated Dotted Surface** — Interactive 3D particle wave background with perspective camera physics and organic wave mathematics.
- **🎬 Cinematic Opening Sequence** — Subtle graphite wave wipe and smooth dot-grid reveal, providing a high-end transition on first load.
- **🪐 Dual-Layer Parallax Hero** — Coordinated mouse-tracking and scroll-linked depth separation between portrait and typography with Framer Motion spring physics.
- **🏝️ macOS 26 Floating Dock Navigation** — Minimalist glassmorphic pill bar with Lucide icons, spring-animated hover indicator, tooltip support, and a high-contrast signature action button.
- **✍️ Narrative-Driven Strategic Content**:
  - **Strategic Copywriting**: SEO-optimized long-form and web copy aligned with high-conversion frameworks.
  - **High-Impact Video Scripting**: Retention-driven scripts for YouTube, Reels, and branded video.
  - **Community Growth**: Organic social strategies across LinkedIn & Instagram.
  - **Narrative & Brand Strategy**: Multi-channel roadmaps bridging analytical data with human emotion.
- **📱 Responsive & Touch-Optimized** — Fluid layouts with dedicated touch target padding and zero horizontal overflow on mobile viewports.
- **🔍 SEO & Web Crawler Ready** — Pre-configured Open Graph tags, Twitter cards, canonical tags, automated `robots.txt`, and XML `sitemap.xml` for search engine visibility.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework & Core** | [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite 5](https://vitejs.dev/) |
| **3D & Graphics** | [Three.js](https://threejs.org/) (WebGL BufferGeometry & PointsMaterial) |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/), `tailwindcss-animate` |
| **Components** | [Radix UI](https://www.radix-ui.com/), [Shadcn UI](https://ui.shadcn.com/), [Lucide React](https://lucide.dev/) |
| **Routing** | [React Router v6](https://reactrouter.com/) (with `basename` & 404 SPA fallback) |
| **Deployment & CI/CD** | [GitHub Pages](https://pages.github.com/) via automated GitHub Actions |

---

## 📁 Project Architecture

```text
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.ico               # Portfolio favicon
│   ├── robots.txt                # Search engine crawler instructions
│   └── sitemap.xml               # XML sitemap for SEO discovery
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── dotted-surface.tsx # Three.js animated particle wave
│   │   ├── AboutSection.tsx      # Personal narrative & core stats
│   │   ├── ContactSection.tsx    # Direct contact & verified social links
│   │   ├── Footer.tsx            # Minimalist footer with tracking animations
│   │   ├── HeroSection.tsx       # Parallax hero with Framer Motion
│   │   ├── Navbar.tsx            # macOS-style floating island dock
│   │   ├── PortfolioSection.tsx  # Featured work & case studies
│   │   ├── ServicesSection.tsx   # Strategic service offerings
│   │   ├── SkillsSection.tsx     # Modernized skill matrix
│   │   └── SplashScreen.tsx      # Cinematic intro animation
│   ├── pages/
│   │   ├── Index.tsx             # Main orchestrated layout
│   │   └── NotFound.tsx          # 404 fallback page
│   ├── App.tsx                   # App routes & providers
│   ├── index.css                 # Global styles, variables, & typography
│   └── main.tsx                  # Application entry point
├── index.html                    # SEO metadata, Open Graph & fonts
├── package.json                  # Dependencies & build scripts
├── tailwind.config.ts            # Theme colors, fonts & animations
└── vite.config.ts                # Vite config with GitHub Pages base URL
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (or pnpm / yarn / bun)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/navyavanguru/navya-vanguru-portfolio.git
   cd navya-vanguru-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:8080](http://localhost:8080) to view the app in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The bundled static files will be generated in the `dist/` directory with `404.html` generated automatically for SPA routing.

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🚢 Continuous Deployment (GitHub Pages)

This project is configured with automated continuous deployment using **GitHub Actions**:

- Every push to the `main` branch automatically triggers `.github/workflows/deploy.yml`.
- The workflow builds the production assets with the `/navya-vanguru-portfolio/` base URL.
- Artifacts are uploaded and deployed to **GitHub Pages** with HTTPS enforcement.
- Live URL: **[https://navyavanguru.github.io/navya-vanguru-portfolio/](https://navyavanguru.github.io/navya-vanguru-portfolio/)**

---

## 📬 Connect with Navya

- **LinkedIn**: [linkedin.com/in/navyavanguru](https://www.linkedin.com/in/navyavanguru)
- **Instagram**: [@navya_vanguru](https://www.instagram.com/navya_vanguru)
- **Portfolio**: [navyavanguru.github.io/navya-vanguru-portfolio](https://navyavanguru.github.io/navya-vanguru-portfolio/)

---

© 2026 Navya Vanguru. All rights reserved.

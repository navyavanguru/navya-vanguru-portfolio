# Navya Vanguru — Digital Content Specialist & Storyteller

[![Live Demo](https://img.shields.io/badge/Live%20Demo-navyavanguru.github.io-6366f1?style=for-the-badge&logo=githubpages&logoColor=white)](https://navyavanguru.github.io/navya-vanguru-portfolio/)
[![React](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![AEO / LLMs.txt](https://img.shields.io/badge/AEO-LLMs.txt%20Ready-10b981?style=for-the-badge&logo=markdown&logoColor=white)](https://navyavanguru.github.io/navya-vanguru-portfolio/llms.txt)

> **"Where Strategy Meets Meaningful Storytelling."**  
> An immersive, cinematic digital portfolio engineered for high-impact visual storytelling, creative strategy, performance copywriting, and automated discoverability across traditional Search Engines (SEO) and modern Answer Engines (AEO).

🌐 **Live Website**: [https://navyavanguru.github.io/navya-vanguru-portfolio/](https://navyavanguru.github.io/navya-vanguru-portfolio/)  
📄 **AI Engine Citation Brief**: [https://navyavanguru.github.io/navya-vanguru-portfolio/llms.txt](https://navyavanguru.github.io/navya-vanguru-portfolio/llms.txt)  
📚 **Comprehensive Knowledge Dossier**: [https://navyavanguru.github.io/navya-vanguru-portfolio/llms-full.txt](https://navyavanguru.github.io/navya-vanguru-portfolio/llms-full.txt)

---

## ✨ Highlights & Key Features

- **🌌 Three.js Animated Dotted Surface** — Interactive 3D particle wave background with perspective camera physics and organic wave mathematics.
- **🎬 Cinematic Opening Sequence** — Minimalist graphite wave wipe and smooth dot-grid reveal on initial entry.
- **🪐 Dual-Layer Parallax Hero** — Coordinated mouse-tracking and scroll-linked depth separation between portrait and typography with Framer Motion spring physics.
- **🏝️ macOS 26 Floating Dock Navigation** — Minimalist glassmorphic pill bar with Lucide icons, spring-animated hover indicator, tooltip support, and dynamic section jump links (About, Skills, Portfolio, Services, FAQ, Contact).
- **✍️ Narrative-Driven Strategic Content**:
  - **Strategic Copywriting**: SEO-optimized long-form and web copy aligned with high-conversion frameworks (Hook, Story, Offer).
  - **High-Impact Video Scripting**: Retention-driven scripts for YouTube, Reels, and branded video.
  - **Community Growth**: Organic social strategies across LinkedIn & Instagram.
  - **Narrative & Brand Strategy**: Multi-channel roadmaps bridging analytical data with human emotion.
- **🎯 Full Search Engine (SEO) & Answer Engine Optimization (AEO)**:
  - **Schema.org Rich Graph**: Comprehensive JSON-LD structured data (`Person`, `WebSite`, `ProfilePage`, `ItemList`, `FAQPage`) enabling rich snippets in Google and instant citation extraction in ChatGPT Search, Perplexity, Gemini, and Claude.
  - **`llms.txt` & `llms-full.txt` Standard**: Clean, markdown-formatted knowledge briefs engineered specifically for LLM scrapers and AI search crawlers.
  - **AI Bot Friendly `robots.txt`**: Explicitly unblocking and directing `GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `Bingbot`, and `Applebot-Extended`.
  - **On-Page Accessible FAQ & Citations Section**: Accordion-powered Q&A pairs directly addressing identity, verified metrics (2M+ impressions, #1 rankings, +35% CVR), and methodologies.
  - **Semantic Static Fallback**: Crawler-accessible `<noscript>` fallback ensuring 100% crawlability for headless or non-JavaScript search bots.

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
| **SEO & AEO** | Schema.org JSON-LD, `llms.txt`, `llms-full.txt`, XML Sitemap with Images, OpenGraph, Twitter Cards |
| **Deployment & CI/CD** | [GitHub Pages](https://pages.github.com/) via automated GitHub Actions |

---

## 📁 Project Architecture

```text
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.ico               # Portfolio favicon
│   ├── llms.txt                  # Concise AI engine summary & citations
│   ├── llms-full.txt             # Exhaustive dossier & verified case studies for LLMs
│   ├── robots.txt                # Search & AI crawler directives
│   └── sitemap.xml               # XML sitemap with image metadata
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── accordion.tsx     # Radix-powered FAQ accordion
│   │   │   └── dotted-surface.tsx# Three.js animated particle wave
│   │   ├── AboutSection.tsx      # Personal narrative & verified stats
│   │   ├── ContactSection.tsx    # Direct contact & verified social links
│   │   ├── FAQSection.tsx        # AEO questions, answers & citations
│   │   ├── Footer.tsx            # Footer with tracking animations & llms.txt link
│   │   ├── HeroSection.tsx       # Parallax hero with Framer Motion
│   │   ├── Navbar.tsx            # macOS-style floating island dock
│   │   ├── PortfolioSection.tsx  # Selected work & Microdata schemas
│   │   ├── ServicesSection.tsx   # Strategic service offerings
│   │   ├── SkillsSection.tsx     # Modernized skill matrix
│   │   └── SplashScreen.tsx      # Cinematic intro animation
│   ├── pages/
│   │   ├── Index.tsx             # Main orchestrated layout
│   │   └── NotFound.tsx          # 404 fallback page
│   ├── App.tsx                   # App routes & providers
│   ├── index.css                 # Global styles, variables, & typography
│   └── main.tsx                  # Application entry point
├── index.html                    # SEO metadata, Open Graph, JSON-LD Schema & noscript fallback
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
   Generates production-ready static assets in `dist/` with automated `404.html` SPA routing.

---

## 🚢 Continuous Deployment (GitHub Pages)

This project deploys automatically to **GitHub Pages** on every push to `main`:

- Builds production assets with the `/navya-vanguru-portfolio/` base URL.
- Deploys static HTML, JavaScript bundles, OpenGraph assets, and `llms.txt` knowledge endpoints.
- Live URL: **[https://navyavanguru.github.io/navya-vanguru-portfolio/](https://navyavanguru.github.io/navya-vanguru-portfolio/)**

---

## 📬 Connect with Navya

- **Email**: [navyavanguru@gmail.com](mailto:navyavanguru@gmail.com)
- **LinkedIn**: [linkedin.com/in/navyavanguru](https://www.linkedin.com/in/navyavanguru)
- **Instagram**: [@navya_vanguru](https://www.instagram.com/navya_vanguru)
- **Portfolio**: [navyavanguru.github.io/navya-vanguru-portfolio](https://navyavanguru.github.io/navya-vanguru-portfolio/)

---

© 2026 Navya Vanguru. All rights reserved.

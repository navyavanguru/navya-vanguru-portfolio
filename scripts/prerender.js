import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

const indexHtmlPath = path.join(distDir, "index.html");
if (!fs.existsSync(indexHtmlPath)) {
  console.error("dist/index.html not found. Run vite build first.");
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, "utf-8");

// 1. Ensure 404.html exists for SPA fallback
fs.writeFileSync(path.join(distDir, "404.html"), baseHtml);

// 2. Pre-render /digital-marketing-creative-thinking-edubot/index.html
const articleDir = path.join(distDir, "digital-marketing-creative-thinking-edubot");
if (!fs.existsSync(articleDir)) {
  fs.mkdirSync(articleDir, { recursive: true });
}

const articleTitle = "Digital Marketing and Creative Thinking: Lessons from Edubot | Navya Vanguru";
const articleDesc = "How transitioning from beginner to Digital Growth Associate at Edubot in Vijayawada taught me to pair creative thinking with performance data.";
const articleUrl = "https://navyavanguru.github.io/navya-vanguru-portfolio/digital-marketing-creative-thinking-edubot";

let articleHtml = baseHtml;

// Replace title
articleHtml = articleHtml.replace(
  /<title>.*?<\/title>/,
  `<title>${articleTitle}</title>`
);

// Replace meta title & description
articleHtml = articleHtml.replace(
  /<meta name="title" content=".*?" \/>/,
  `<meta name="title" content="${articleTitle}" />`
);
articleHtml = articleHtml.replace(
  /<meta name="description" content=".*?" \/>/,
  `<meta name="description" content="${articleDesc}" />`
);

// Replace canonical link
articleHtml = articleHtml.replace(
  /<link rel="canonical" href=".*?" \/>/,
  `<link rel="canonical" href="${articleUrl}" />`
);

// Replace Open Graph tags
articleHtml = articleHtml.replace(
  /<meta property="og:title" content=".*?" \/>/,
  `<meta property="og:title" content="${articleTitle}" />`
);
articleHtml = articleHtml.replace(
  /<meta property="og:description" content=".*?" \/>/,
  `<meta property="og:description" content="${articleDesc}" />`
);
articleHtml = articleHtml.replace(
  /<meta property="og:url" content=".*?" \/>/,
  `<meta property="og:url" content="${articleUrl}" />`
);

// Replace Twitter tags
articleHtml = articleHtml.replace(
  /<meta name="twitter:title" content=".*?" \/>/,
  `<meta name="twitter:title" content="${articleTitle}" />`
);
articleHtml = articleHtml.replace(
  /<meta name="twitter:description" content=".*?" \/>/,
  `<meta name="twitter:description" content="${articleDesc}" />`
);

fs.writeFileSync(path.join(articleDir, "index.html"), articleHtml);
console.log("Successfully generated static route for /digital-marketing-creative-thinking-edubot/index.html with HTTP 200 support!");

# Saurabh Kumar Ray — Professional Portfolio

A full-stack, recruiter-facing developer portfolio built as a high-performance statically generated (SSG) website using Next.js 16, React, and modular styling. Driven by clean, localizable JSON databases, it features fluid transitions, dynamic API widgets, and a modern responsive structure optimized for search engines and mobile devices.

---

## 🚀 Live Demo & Repository
- **GitHub Repository:** [https://github.com/Saurabh-kumar-ray](https://github.com/Saurabh-kumar-ray)
- **LinkedIn Profile:** [https://www.linkedin.com/in/saurabh-kumar-ray-47bab1321](https://www.linkedin.com/in/saurabh-kumar-ray-47bab1321)

---

## 🛠️ Tech Stack
- **Framework:** Next.js 16 (App Router with Turbopack)
- **UI Logic:** React 19 (Server and Client components)
- **Styling:** CSS3 & Bootstrap 5 (Responsive grids and card designs)
- **Animations:** AOS (Animate on Scroll) & Typewriter transitions
- **APIs:** GitHub REST API (Live repositories telemetry)
- **Fonts & Icons:** Google Fonts (Outfit & Inter), Font Awesome 6 (CDN)
- **Hosting Compatibility:** Vercel, Netlify, Cloudflare Pages, GitHub Pages

---

## ✨ Features
1. **Static Site Generation (SSG):** Next.js pre-compiles every element into static HTML/JS pages during build time. This translates to a Time-To-First-Byte (TTFB) of near zero and perfect Lighthouse scores.
2. **Local JSON Database:** Devoid of database servers, ORM layers, or server-side write locks. All portfolio details reside in editable, Git-tracked JSON files.
3. **Smart Scrollspy Sticky Navigation:** Automatically tracks viewport scrolling and highlights the active section in desktop lists and mobile toggle drawers.
4. **Theme Customization:** Seamless dark and light mode switcher. Visually blocked head-script injections preserve `localStorage` preference on page load, completely eliminating style flashes.
5. **Interactive Project Modals:** Custom dialog portals that render highlights, tech tags, and live repository links, locking the body scroll when open.
6. **Visitor Contact Portal:** Frontend-validated contact form connected to a Server Action. Easily adaptable to third-party email webhooks (e.g. Formspree/Web3Forms) via environment hooks.
7. **Open-Source Telemetry:** Live GitHub repository, stargazers, and follower count metrics synced on-demand via Client side fetches.
8. **SEO & Accessibility Compliance:** Fully semantic HTML5 sections, descriptive ARIA attributes, structured metadata titles, favicon assets, index directives (`robots.txt`), and sitemaps.

---

## 📂 Folder Structure
```bash
c:\Portfolio
├── public/                 # Static assets (images, logos, resumes)
│   ├── assets/
│   │   ├── documents/      # Downloadable Saurabh-Resume.txt
│   │   └── images/         # Profile and avatar SVG graphics
│   ├── favicon.ico
│   ├── robots.txt          # Crawler directives
│   └── sitemap.xml         # XML sitemap configuration
├── src/
│   ├── app/                # Next.js page routers and global styles
│   │   ├── actions.ts      # Visitor contact form submission handlers
│   │   ├── globals.css     # Tailwind CSS base and asset imports
│   │   ├── layout.tsx      # Main layout wrapper, fonts, and meta tags
│   │   ├── page.tsx        # Main homepage entry server component
│   │   └── styles/         # Modular CSS stylesheets
│   ├── components/         # Reusable UI widgets and layout headers
│   │   ├── AosInit.tsx     # Scroll transitions loader
│   │   ├── BackToTop.tsx   # Smooth scroll-to-top button
│   │   ├── ContactForm.tsx # Responsive contact form component
│   │   ├── GithubStats.tsx # Live API metrics widgets
│   │   └── Navbar.tsx      # Responsive header drawer menu
│   ├── data/               # Centralized JSON data files
│   │   ├── profile.json
│   │   ├── education.json
│   │   ├── experience.json
│   │   ├── projects.json
│   │   ├── skills.json
│   │   └── social-links.json
│   └── types/
│       └── custom.d.ts     # Custom TypeScript module overrides
├── tsconfig.json           # Compiler rules
└── package.json            # Node project configuration
```

---

## 💻 Local Development

### 1. Installation
Clone this repository and install package dependencies:
```bash
git clone https://github.com/Saurabh-kumar-ray.git
cd Portfolio
npm install
```

### 2. Run local server
Launch the development compiler:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) on your web browser.

### 3. Production Compilation
Compile the static export bundle:
```bash
npm run build
```

---

## 📝 Updating Portfolio Content
To modify the portfolio details, open the matching JSON file in [src/data/](file:///c:/Portfolio/src/data) and modify its values. Next.js will auto-render modifications:
- **Biographics:** Adjust Name, Email, Phone, Bio, and Tawk.to IDs in [profile.json](file:///c:/Portfolio/src/data/profile.json).
- **University History:** Add degrees, grades, and dates in [education.json](file:///c:/Portfolio/src/data/education.json).
- **Internships:** Detail your experiences in [experience.json](file:///c:/Portfolio/src/data/experience.json).
- **Projects:** Add repository URLs, summaries, and tags in [projects.json](file:///c:/Portfolio/src/data/projects.json).
- **Skills:** Categorize Python, Java, SQL, and AI/ML proficiencies in [skills.json](file:///c:/Portfolio/src/data/skills.json).
- **Socials:** Map LinkedIn and GitHub URLs in [social-links.json](file:///c:/Portfolio/src/data/social-links.json).

---

## ⚡ Deployment on Vercel
1. Push this project code repository to GitHub.
2. Log in to the [Vercel Dashboard](https://vercel.com).
3. Click **Add New Project** and select your portfolio repository.
4. Keep the default settings (Framework Preset: **Next.js**).
5. Click **Deploy**. Vercel will build and launch your portfolio in seconds.

---

## 📄 License
This project is open-source software licensed under the MIT License.

## ✍️ Author
- **Saurabh Kumar Ray** (raysaurabh89867@gmail.com)

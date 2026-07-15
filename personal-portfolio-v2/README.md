# Enterprise-Grade Personal Portfolio Website (v2)

This is a premium, high-performance, and responsive personal portfolio website (v2) built from scratch. It is completely JSON-driven, meaning that all content (experience, projects, skills, education, certifications, and achievements) is stored as static JSON files. Updates can be made simply by editing the JSON data files without touching HTML or CSS.

## 🚀 Features

- **100% JSON-Driven**: Centralized portfolio content makes maintenance extremely straightforward.
- **Sleek Modern Theme**: Dark/light theme with customized custom property tokens, glassmorphism components, and glowing cards.
- **Sticky & Responsive Navigation**: Smart sticky navigation bar with active section highlighting and a clean drawers-based mobile sidebar.
- **Interactive Projects Grid**: Live category filtering for different project areas (Systems, Web Apps, Cloud & DevOps, Open Source).
- **Professional Work & Education Timelines**: High-contrast timelines summarizing work experiences and scholastic history.
- **Live Chat Support**: Turn-key integration with [Tawk.to](https://tawk.to) for live messaging.
- **GitHub Statistics & Coding Profiles**: Dynamic widgets for showcasing developer activity, repository sizes, and external coding profiles.
- **Secure Contact Portal**: Direct validation, validation states, and integration-ready endpoint templates.
- **Optimized Performance & Accessibility**: Validated HTML5, WCAG 2.1 contrast rules, and keyboard navigability.
- **Vercel & GitHub Ready**: Preconfigured with custom clean URLs, security headers, caching, and robots instructions.

---

## 🛠️ Technology Stack

- **Structure & Semantics**: Semantic HTML5
- **Styling & Layout**: CSS3 (Modular variables, grid/flex structure, dark/light themes), Bootstrap 5 (grid layout utility)
- **Logic & Rendering**: Vanilla JavaScript (ES6+ Modules, client-side dynamic fetching)
- **Animation Libraries**: AOS (Animate on Scroll) for scroll-triggered fades, Typed.js for terminal typing subheadings in Hero
- **Icons**: Font Awesome (v6+)

---

## 📂 Project Structure

```
personal-portfolio-v2/
├── index.html                    # Main entry point (semantic HTML5)
├── robots.txt                    # Crawler guidelines
├── sitemap.xml                   # Search engine index list
├── LICENSE                       # MIT License
├── vercel.json                   # Vercel security headers & routing configurations
├── package.json                  # Scripts & local dev settings
├── README.md                     # This documentation file
│
├── data/                         # Dynamic database content
│   ├── profile.json              # Main bio, name, resume, and chat widget configs
│   ├── experience.json           # Professional roles list
│   ├── projects.json             # Code repositories & details
│   ├── skills.json               # Developer skills & rating indexes
│   ├── education.json            # University records
│   ├── certificates.json         # Certifications & links
│   ├── achievements.json         # Technical accomplishments & awards
│   └── social-links.json         # Social URLs & icons
│
├── docs/
│   └── customization-guide.md    # Guide on customizing content JSONs
│
└── assets/
    ├── css/                      # Modular style sheets
    │   ├── variables.css         # Typography tokens, spacing, and theme palettes
    │   ├── layout.css            # Grids, sticky navbars, content frames
    │   ├── components.css        # Card grids, timelines, alerts, responsive drawers
    │   ├── themes.css            # Dark/light overrides
    │   ├── animations.css        # Hover transitions, keyframes, loading sequences
    │   ├── responsive.css        # Mobile breakpoint overrides
    │   └── style.css             # Main stylesheet importing others
    ├── js/                       # Modular ES6 controllers
    │   ├── theme.js              # State manager for Dark/Light mode
    │   ├── navbar.js             # Navigation, active tracking
    │   ├── sidebar.js            # Mobile sidebar drawer toggler
    │   ├── data-loader.js        # Dynamic fetcher & parser for JSON datasets
    │   ├── contact.js            # Form verification & feedback
    │   ├── animations.js         # Library wrappers (AOS, Typed.js)
    │   └── main.js               # Application coordinator
    └── images/                   # Static media folder
        ├── placeholders/         # Default avatars and placeholder graphics
        └── documents/            # Resume and PDF certificates
```

---

## 💻 Local Development

### Prerequisites

Make sure you have [Node.js](https://nodejs.org) installed on your system.

### Steps to Run Locally

1.  Navigate into the project directory:
    ```bash
    cd personal-portfolio-v2
    ```
2.  Install dependencies (this installs `http-server` locally):
    ```bash
    npm install
    ```
3.  Start the local dev server:
    ```bash
    npm run dev
    ```
4.  Open `http://localhost:3000` in your web browser.

---

## 🔧 Customization

To personalize the website's contents, check out the detailed [Customization Guide](docs/customization-guide.md). You can easily update your profiles, experiences, achievements, skills, and projects by editing the JSON files in the `/data` directory.

---

## 🌐 Deployment

### Deploying to Vercel (Recommended)

1.  Push your portfolio repository to GitHub.
2.  Log in to [Vercel](https://vercel.com).
3.  Click **Add New** > **Project** and select your portfolio repository.
4.  Keep default build and output settings (since it's a static site, it will serve `/index.html` directly).
5.  Click **Deploy**.

Vercel will detect [vercel.json](vercel.json) and configure clean URLs and secure headers automatically.

### Deploying to GitHub Pages

1.  Ensure your repository is public on GitHub.
2.  Go to your repository **Settings** > **Pages**.
3.  Under **Build and deployment**, select **Deploy from a branch** and set it to your main branch (`/` root folder).
4.  Save changes. Your website will be live at `https://<username>.github.io/<repository-name>`.

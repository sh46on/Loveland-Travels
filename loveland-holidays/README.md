# 🌴 Loveland Holidays — Premium Kerala Travel Website

A production-ready React homepage for **Loveland Holidays**, a Kerala-based premium travel company.  
Built with **React 18 + Vite + Tailwind CSS**, featuring smooth scroll animations, a responsive carousel, glassmorphism form, and full SEO metadata.

---

## 🗂 Folder Structure

```
loveland-holidays/
├── public/
│   └── favicon.svg                  # SVG favicon
│
├── src/
│   ├── components/
│   │   ├── Loader.jsx               # Splash screen with spinner
│   │   ├── Navbar.jsx               # Sticky nav with scroll-aware styling + mobile menu
│   │   ├── Hero.jsx                 # Full-width banner with animated content
│   │   ├── About.jsx                # Split-layout about section
│   │   ├── Services.jsx             # 5-card services grid with hover flip
│   │   ├── Tours.jsx                # Touch-swipeable carousel
│   │   ├── Reviews.jsx              # Auto-sliding testimonial carousel
│   │   ├── Enquiry.jsx              # Glassmorphism enquiry form with validation
│   │   ├── Contact.jsx              # Contact info + embedded Google Map
│   │   ├── Footer.jsx               # Full footer with links and socials
│   │   ├── WaveSep.jsx              # Reusable SVG wave separator
│   │   └── SectionHeader.jsx        # Reusable section title block
│   │
│   ├── hooks/
│   │   ├── useFadeIn.js             # IntersectionObserver for scroll animations
│   │   └── useScrolled.js           # Tracks navbar scroll state
│   │
│   ├── utils/
│   │   └── scrollTo.js              # Smooth-scroll helper
│   │
│   ├── data/
│   │   └── siteData.js              # ✏️  All site copy, tours, reviews — edit here
│   │
│   ├── App.jsx                      # Root component, composes all sections
│   ├── main.jsx                     # ReactDOM entry point
│   └── index.css                    # Tailwind directives + global CSS vars
│
├── index.html                       # Vite HTML shell with SEO meta tags
├── vite.config.js                   # Vite config with path aliases & code splitting
├── tailwind.config.js               # Extended Tailwind theme (colors, fonts, shadows)
├── postcss.config.js                # PostCSS with Tailwind + autoprefixer
├── eslint.config.js                 # ESLint flat config
└── package.json
```

---

## ⚡ Quick Start

### Prerequisites
- **Node.js** ≥ 18  
- **npm** ≥ 9  (or pnpm / yarn)

### 1. Install dependencies

```bash
cd loveland-holidays
npm install
```

### 2. Start development server

```bash
npm run dev
```

Opens at **http://localhost:3000** with hot-module replacement.

### 3. Production build

```bash
npm run build
```

Output goes to `dist/`. Serve with any static host (Vercel, Netlify, Nginx, etc.).

### 4. Preview production build locally

```bash
npm run preview
```

---

## 🛠 Tech Stack

| Tool            | Purpose                              |
|-----------------|--------------------------------------|
| React 18        | UI component framework               |
| Vite 5          | Build tool & dev server              |
| Tailwind CSS 3  | Utility-first styling                |
| Framer Motion   | Animation library (available, extend)|
| React Icons     | Icon library (available, extend)     |
| PostCSS         | CSS processing pipeline              |
| ESLint          | Code quality                         |

---

## ✏️ Customising Content

All static content lives in **`src/data/siteData.js`**:

```js
// Phone numbers, email, address
export const SITE = { phone1, phone2, email1, email2, address … }

// Services cards
export const SERVICES = [ { icon, title, desc }, … ]

// Tour packages carousel
export const TOURS = [ { title, tag, price, duration, desc, img }, … ]

// Customer reviews
export const REVIEWS = [ { name, location, rating, text }, … ]
```

Edit this file — no other files need changing for content updates.

---

## 📦 Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# drag-drop the dist/ folder at app.netlify.com
```

### Nginx (self-hosted)
```nginx
server {
  root /var/www/loveland-holidays/dist;
  location / { try_files $uri $uri/ /index.html; }
}
```

---

## 🔌 Connecting a Real Backend (Enquiry Form)

The form currently logs to the console. Replace the `setTimeout` in `src/components/Enquiry.jsx` with any of:

**EmailJS (zero backend):**
```bash
npm install @emailjs/browser
```
```js
import emailjs from '@emailjs/browser';
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');
```

**Formspree:**
```js
await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

---

## 🌐 SEO

- Meta title, description, keywords in `index.html`
- Open Graph tags for social sharing
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- All images have descriptive `alt` attributes
- Lazy-loaded images (`loading="lazy"`)

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout                          |
|------------|---------------------------------|
| < 768 px   | Single column, hamburger menu   |
| 768–1100px | Two columns, 2 review cards     |
| > 1100 px  | Full desktop, 3 review cards    |

---

## 📄 License

MIT — feel free to use and adapt for client projects.

---

*Built with ❤️ for Loveland Holidays · Kerala, India*

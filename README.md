# 🚀 Hasintha Nirmal — Portfolio

<div align="center">
  <img src="https://avatars.githubusercontent.com/u/75412702?v=4" alt="Hasintha Nirmal" width="120" style="border-radius: 50%" />

**A modern, automated developer portfolio built with React + Vite**

[![GitHub](https://img.shields.io/badge/GitHub-Hasintha--Nirmal-8b5cf6?style=for-the-badge&logo=github)](https://github.com/Hasintha-Nirmal)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?style=for-the-badge&logo=vite)](https://vite.dev)

</div>

---

## ✨ Features

| Feature                   | Description                                                         |
| ------------------------- | ------------------------------------------------------------------- |
| 🔄 **Auto-Synced**        | Fetches profile, repos, languages & activity live from GitHub API   |
| 🔑 **Private Access**     | Supports GitHub PAT to display private repos & extended stats       |
| 🎨 **Dark Glassmorphism** | Stunning dark UI with glowing accents & blurred glass panels        |
| 📊 **Language Breakdown** | Visual colored bar chart of your most-used programming languages    |
| ⏱️ **Activity Timeline**  | Shows recent pushes, PRs, and stars from your GitHub events         |
| 🧩 **Tech Stack**         | Categorized skill chips (Languages, Frameworks, Tools, Specialties) |
| 📱 **Fully Responsive**   | Mobile-first design that looks great on any screen size             |
| 🔍 **SEO Optimized**      | Meta tags, Open Graph, and semantic HTML for social sharing         |

## 📸 Sections

- **Hero** — Animated intro with avatar and glowing rings
- **About** — Bio, location, company & GitHub stats (public + private)
- **Tech Stack** — Categorized skill chips
- **Language Breakdown** — Colored bar chart aggregated from all repos
- **Projects** — Auto-fetched repo cards with stars, forks & language tags
- **Activity** — Timeline of recent GitHub events with commit messages
- **Footer** — Links and copyright

## 🛠️ Tech Stack

- **React 19** — UI library
- **Vite 7** — Lightning-fast dev server & bundler
- **Vanilla CSS** — Custom design system with CSS variables
- **GitHub REST API** — Live data fetching

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Hasintha-Nirmal/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🔑 Enable Private GitHub Access (Optional)

1. Go to [GitHub Token Settings](https://github.com/settings/tokens)
2. Generate a **classic** token with `repo` + `read:user` scopes
3. Create/edit `.env` in the project root:
   ```env
   VITE_GITHUB_TOKEN=ghp_your_token_here
   ```
4. Restart the dev server

> ⚠️ **Never commit your `.env` file.** It's already in `.gitignore`.

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready to deploy on Vercel, Netlify, or GitHub Pages.

## 📁 Project Structure

```
Portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Glassmorphism navbar
│   │   ├── Hero.jsx          # Animated hero section
│   │   ├── About.jsx         # Profile + GitHub stats
│   │   ├── Skills.jsx        # Tech stack chips
│   │   ├── Languages.jsx     # Language bar chart
│   │   ├── Projects.jsx      # Auto-fetched repo cards
│   │   ├── Activity.jsx      # Recent GitHub events
│   │   ├── Footer.jsx        # Footer
│   │   └── components.css    # All component styles
│   ├── utils/
│   │   └── github.js         # GitHub API helper with token auth
│   ├── App.jsx
│   ├── App.css
│   ├── index.css             # Design system & CSS variables
│   └── main.jsx
├── .env                      # GitHub token (not committed)
├── index.html
└── package.json
```

## 📄 License

This project is open source and available for personal use.

---

<div align="center">
  Built with ❤️ by <strong>Hasintha Nirmal</strong>
</div>

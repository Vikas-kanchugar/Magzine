# EDITIONS - Premium Editorial Magazine 📰

<div align="center">
  
  <img src="(https://raw.githubusercontent.com/Vikas-kanchugar/Magzine/blob/main/src/assets/image/image.png)" alt="EDITIONS Magazine Logo" width="400">

  ### 🌟 Live Demo: [editions-magzine.vercel.app](https://editions-magzine.vercel.app)

  [![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-success?style=for-the-badge&logo=vercel)](https://editions-magzine.vercel.app)
  [![GitHub stars](https://img.shields.io/github/stars/Vikas-kanchugar/Magzine?style=for-the-badge&logo=github)](https://github.com/Vikas-kanchugar/Magzine/stargazers)
  [![GitHub forks](https://img.shields.io/github/forks/Vikas-kanchugar/Magzine?style=for-the-badge&logo=github)](https://github.com/Vikas-kanchugar/Magzine/network)
  [![GitHub license](https://img.shields.io/github/license/Vikas-kanchugar/Magzine?style=for-the-badge)](https://github.com/Vikas-kanchugar/Magzine/blob/main/LICENSE)
  [![React](https://img.shields.io/badge/React-18.2-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.0-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
  
  <p align="center">
    <a href="#-features"><strong>Explore Features</strong></a> •
    <a href="#-tech-stack"><strong>Tech Stack</strong></a> •
    <a href="#-installation"><strong>Installation</strong></a> •
    <a href="#-project-structure"><strong>Structure</strong></a> •
    <a href="#-deployment"><strong>Deployment</strong></a>
  </p>
</div>

## 📸 Screenshots

<div style="white-space: nowrap; overflow-x: auto; padding: 10px 0;">
  <img src="https://via.placeholder.com/300x200?text=Home+Page" height="200" style="display:inline-block; margin-right:10px;">
  <img src="https://via.placeholder.com/300x200?text=Category+Page" height="200" style="display:inline-block; margin-right:10px;">
  <img src="https://via.placeholder.com/300x200?text=Article+Page" height="200" style="display:inline-block; margin-right:10px;">
  <img src="https://via.placeholder.com/300x200?text=Issues+Page" height="200" style="display:inline-block;">
</div>

## 📋 Table of Contents

- [🌟 Features](#-features)
- [🎨 Design Philosophy](#-design-philosophy)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [📦 Installation](#-installation)
- [🚀 Deployment](#-deployment)
- [📱 Responsive Design](#-responsive-design)
- [⚡ Performance](#-performance)
- [🗺️ Roadmap](#️-roadmap)
- [📄 Pages & Features](#-pages--features)
- [🤝 Connect](#-connect)
- [📄 License](#-license)

---

## 🌟 Features

### 🎨 **Premium Editorial Design**
- **Sticky Navbar**: Glassmorphism effect with blur background and smooth transitions
- **Dual Theme System**: Elegant dark/light mode toggle with system preference detection
- **Custom Cursor**: Premium custom cursor with hover effects
- **Smooth Animations**: Framer Motion powered page transitions and scroll animations
- **Magazine-Style Layout**: Asymmetrical grids, masonry layouts, and editorial typography
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop

### 📰 **Magazine Features**
- **Rich Editorial Content**: 30+ premium articles across multiple categories
- **Issue Archive**: Browse magazine issues by month/year with filter functionality
- **Category Pages**: Dedicated pages for Fashion, Culture, Food, Travel, Technology, Design, Wellness, Business, Art
- **Article Reading Experience**: Full-bleed hero images, drop caps, pull quotes, reading progress bar
- **Related Articles**: Smart article recommendations based on categories and tags
- **Contributor Profiles**: Detailed author bios with social links and article history

### 🔧 **Core Functionality**
- **Social Sharing**: Share articles on Twitter, Facebook, LinkedIn, and copy link
- **Save/Like System**: Bookmark articles for later reading (local storage)
- **Comments Section**: User comments on articles with like functionality
- **Image Lightbox**: Click images to view in fullscreen gallery
- **Reading Statistics**: Track article views, shares, and saves
- **Tag System**: Browse related content through topic tags

### 🚀 **Performance Optimizations**
- **Lazy Loading**: Images load as you scroll
- **Code Splitting**: Optimized bundle size with React Router lazy loading
- **Image Optimization**: Unsplash CDN for fast image delivery
- **Smooth Scrolling**: Native scroll behavior with custom progress bar
- **SEO Friendly**: Meta tags, semantic HTML, and structured content

---

## 🎨 Design Philosophy

EDITIONS Magazine embodies a **high-end, luxury editorial aesthetic**:

- **Typography**: Playfair Display (serif) for headlines + Inter (sans-serif) for body text
- **Color Palette**: Deep charcoal (#1a1a1a), warm off-white (#f5f3ef), refined gold (#c6a43f)
- **Spacing**: Generous whitespace, asymmetric layouts, editorial grids
- **Animations**: Subtle transitions, hover effects, and scroll-triggered reveals
- **Glassmorphism**: Blur effects and soft shadows for modern depth

---

## 🛠️ Tech Stack

### **Frontend Framework**
```javascript
{
  "React": "18.2.0",
  "React Router DOM": "6.20.1",
  "Vite": "5.0.8",
  "TailwindCSS": "3.4.0"
}
```

### **UI & Animations**
```javascript
{
  "Framer Motion": "10.16.16",
  "React Icons": "4.12.0",
  "React Intersection Observer": "9.5.3"
}
```

### **Utilities**
```javascript
{
  "Date-fns": "2.30.0"
}
```

### **Styling**
- **TailwindCSS**: Utility-first CSS with custom configuration
- **Custom CSS**: Editorial-specific styles (drop caps, pull quotes, glassmorphism)
- **Responsive Breakpoints**: Mobile-first design with custom container queries

---

## 📁 Project Structure

```
magazine-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navigation with mobile menu
│   │   ├── Footer.jsx          # Footer with social links
│   │   ├── ThemeToggle.jsx     # Dark/light mode toggle
│   │   ├── Hero.jsx            # Full-screen editorial hero
│   │   ├── ArticleCard.jsx     # Article preview card
│   │   ├── IssueCard.jsx       # Magazine issue card
│   │   ├── ContributorCard.jsx # Author profile card
│   │   └── SubscribeCard.jsx   # Pricing plan card
│   ├── pages/
│   │   ├── Home.jsx            # Landing page with featured stories
│   │   ├── Issues.jsx          # Issue archive with filtering
│   │   ├── Article.jsx         # Full article with reading progress
│   │   ├── Category.jsx        # Category page with masonry grid
│   │   ├── Contributors.jsx    # Team member profiles
│   │   ├── Subscribe.jsx       # Pricing plans & newsletter
│   │   └── Contact.jsx         # Contact form with validation
│   ├── data/
│   │   └── mockData.js         # Rich editorial content (30+ articles)
│   ├── hooks/
│   │   └── useTheme.js         # Theme management hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── images/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 📦 Installation

### Prerequisites
- Node.js 18.0 or higher
- npm 9.0 or higher
- Git

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vikas-kanchugar/Magzine.git
   cd Magzine
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 🚀 Deployment

### **Deploy to Vercel (Recommended)**

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub repository
   - Select "Magzine"

3. **Configure Settings**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy
   - Your site will be live at `https://editions-magzine.vercel.app`

### **Alternative Hosting**

#### **Netlify**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

#### **GitHub Pages**
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
"homepage": "https://Vikas-kanchugar.github.io/Magzine",
"scripts": {
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run build
npm run deploy
```

---

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: 320px - 640px - Optimized for smartphones
- **Tablet**: 641px - 1024px - Tablet-friendly layout
- **Desktop**: 1025px+ - Full desktop experience
- **Widescreen**: 1440px+ - Enhanced layouts

### **Mobile Features**
- Hamburger menu navigation
- Touch-optimized buttons
- Responsive typography (fluid font sizes)
- Stacked layouts for better readability
- Optimized image loading

### **Tablet Features**
- 2-column grid layouts
- Optimized spacing
- Touch-friendly interface

---

## ⚡ Performance

### **Optimization Techniques**
- ✅ Lazy loading images
- ✅ Code splitting with React Router
- ✅ Smooth scroll animations
- ✅ Debounced scroll events
- ✅ Image optimization via CDN
- ✅ Minified CSS and JS
- ✅ Efficient re-renders with React.memo

### **Performance Metrics**

| Metric | Target | Status |
|--------|--------|--------|
| First Contentful Paint | < 1.5s | ✅ Optimized |
| Time to Interactive | < 3.0s | ✅ Optimized |
| Lighthouse Performance | > 90 | ✅ 90+ |
| Lighthouse SEO | 100 | ✅ 100 |
| Lighthouse Accessibility | > 95 | ✅ 95+ |

---

## 📄 Pages & Features

### 🏠 **Home Page**
- Full-screen editorial hero with large headline
- Featured stories grid (asymmetrical layout)
- Category strips (Fashion, Culture, Food, Travel, Technology)
- Trending articles section
- Smooth scroll animations

### 📚 **Issues Page**
- Magazine-style cover grid layout
- Hover zoom + overlay details
- Filter by month/year
- Issue descriptions and pricing

### 📰 **Article Page**
- Full-bleed hero image
- Large title + author + date
- Drop cap paragraph styling
- Pull quotes (highlighted blocks)
- Sticky reading progress bar
- Social share buttons
- Related articles section
- Comments section

### 🗂️ **Category Page**
- Masonry grid layout
- Filter and sorting options
- Smooth transitions
- Category hero with description

### 👨‍💼 **Contributors Page**
- Profile cards with image, bio, social links
- Grid with hover animations
- Detailed author information

### 💳 **Subscribe Page**
- Pricing cards (Free, Premium, Pro)
- Highlight recommended plan
- Animated hover effects
- Newsletter signup

### 📩 **Contact Page**
- Editorial pitch form
- Advertising inquiry form
- Validation + success message UI

---

## 🗺️ Roadmap

### **Phase 1: Core Features (Complete) ✅**
- [x] Responsive design system
- [x] Dark/light theme toggle
- [x] 30+ premium articles
- [x] Category pages
- [x] Article reading experience
- [x] Issues archive
- [x] Contributors section
- [x] Subscribe page
- [x] Contact form

### **Phase 2: Enhanced Features (In Progress) 🏗️**
- [x] Comments system
- [x] Save/Like functionality
- [x] Related articles
- [x] Tag system
- [ ] Search functionality
- [ ] Newsletter subscription

### **Phase 3: Premium Features (Planned) 🚀**
- [ ] Backend API with Node.js/Express
- [ ] User authentication
- [ ] Real comments with database
- [ ] Email newsletter system
- [ ] Payment integration for subscriptions
- [ ] Admin dashboard for content management
- [ ] Analytics dashboard
- [ ] PWA installation

---

## 🤝 Connect

<div align="center">

### **Vikas Kanchugar**

[![Portfolio](https://img.shields.io/badge/Portfolio-vikas--kanchugar.vercel.app-blue?style=for-the-badge&logo=vercel)](https://vikas-kanchugar.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Vikas--kanchugar-black?style=for-the-badge&logo=github)](https://github.com/Vikas-kanchugar)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Vikas%20Kanchugar-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/vikas-kanchugar-659b622b9)
[![Email](https://img.shields.io/badge/Email-vikas.kanchugar%40gmail.com-red?style=for-the-badge&logo=gmail)](mailto:vikas.kanchugar@gmail.com)

</div>

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

```
MIT License

Copyright (c) 2026 Vikas Kanchugar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

---

## 🙏 Acknowledgments

- **Unsplash** - For stunning photography
- **Google Fonts** - For Playfair Display and Inter fonts
- **Framer Motion** - For smooth animations
- **TailwindCSS** - For utility-first CSS framework
- **React Community** - For amazing tools and libraries
- **Vercel** - For seamless hosting and deployment

---

## ⭐ Support

If you like this project, please consider:
- Starring the repository ⭐
- Sharing it with your network 🌐
- Reporting issues and suggesting features 🐛
- Connecting on LinkedIn and GitHub 🤝

---

<div align="center">

### Made with ❤️ by Vikas Kanchugar

![Built with React](https://img.shields.io/badge/Built%20with-React-blue?style=for-the-badge&logo=react)
![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-purple?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Styled%20with-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss)

**© 2026 EDITIONS Magazine. All Rights Reserved.**

*Where stories define our era*

</div>

# Amitabh Morey | Software Engineering Portfolio

A modern, interactive developer portfolio built with React, Three.js, and beautiful animations. Features a dark theme with fluid cursor effects, 3D particle backgrounds, and smooth scroll animations.

![Portfolio Preview](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.160-black?style=flat&logo=three.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)

## ✨ Features

- **3D Background** - Interactive particle field and floating geometry using Three.js
- **Fluid Cursor** - WebGL-powered splash cursor effect that responds to mouse movement
- **Click Sparks** - Animated spark effects on click interactions
- **Scroll Animations** - Smooth reveal animations triggered on scroll
- **Gradient Text** - Animated gradient effects on headings
- **Magnet Effect** - Interactive hover effect on buttons and links
- **Tilt Cards** - 3D perspective tilt with glare on project cards
- **Blur Text** - Animated text reveal with blur-to-focus effect
- **Fully Responsive** - Optimized for all device sizes
- **Dark Theme** - Professional obsidian-inspired color scheme

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **3D Graphics:** Three.js, React Three Fiber, React Three Drei
- **Styling:** Tailwind CSS, shadcn/ui
- **Animations:** Motion (Framer Motion), Custom WebGL shaders
- **Build:** Vite, ESBuild

## 📂 Project Structure

```
src/
├── components/
│   ├── effects/          # Animation components
│   │   ├── BlurText.tsx
│   │   ├── ClickSpark.tsx
│   │   ├── GradientText.tsx
│   │   ├── Magnet.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── SplashCursor.tsx
│   │   └── TiltCard.tsx
│   ├── sections/         # Page sections
│   │   ├── About.tsx
│   │   ├── Career.tsx
│   │   ├── Footer.tsx
│   │   ├── GitHub.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── three/            # Three.js components
│   │   ├── FloatingGeometry.tsx
│   │   ├── ParticleField.tsx
│   │   └── Scene.tsx
│   └── ui/               # shadcn/ui components
├── pages/
│   └── Index.tsx
└── index.css             # Design system tokens
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/AmitabhMorey/portfolio.git

# Navigate to directory
cd portfolio

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

Open [http://localhost:5173](http://localhost:5173) to view the portfolio.

### Build for Production

```bash
npm run build
# or
bun run build
```

## 📄 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Introduction with animated name, tagline, and tech stack |
| **About** | Background and engineering philosophy |
| **Skills** | Technical skills categorized by type |
| **Projects** | Featured projects with problem/solution/learnings |
| **GitHub** | GitHub stats and open source activity |
| **Career** | Career interests and target roles |

## 🎨 Customization

### Colors
Edit `src/index.css` to customize the color scheme. The portfolio uses HSL-based CSS variables for theming.

### Content
Update the data arrays in each section component under `src/components/sections/` to personalize the content.

### Effects
Adjust animation parameters in the effect components under `src/components/effects/` to fine-tune the visual experience.

## 📱 Performance

- Lazy-loaded Three.js scene to reduce initial bundle size
- Optimized WebGL shaders for smooth 60fps animations
- Responsive images and efficient asset loading
- Lighthouse score optimized

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **GitHub:** [AmitabhMorey](https://github.com/AmitabhMorey)

---

Built with ❤️ using [Lovable](https://lovable.dev)

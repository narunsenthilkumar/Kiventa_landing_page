# KIVENTA — Premium Product Landing Page

<p align="center">
  <img src="public/assets/branding/kiventa_logo.png" alt="KIVENTA Logo" width="120" />
</p>

<p align="center">
  <strong>"KIVENTA — Turn Intent Into Action."</strong>
</p>

<p align="center">
  <em>An Apple-inspired, cinematic, and production-quality landing page for the KIVENTA productivity workspace.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Release-v1.0.0-0A84FF?style=flat-square" alt="Version" />
  <img src="https://img.shields.io/badge/Framework-React%2019%20%2F%20Vite-5E5CE6?style=flat-square" alt="Framework" />
  <img src="https://img.shields.io/badge/Language-TypeScript-3178C6?style=flat-square" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Design-Apple%20HIG%20%2F%20Glassmorphism-30D158?style=flat-square" alt="Design" />
  <img src="https://img.shields.io/badge/Platforms-Windows%20%7C%20Android%20%7C%20Web-FF9F0A?style=flat-square" alt="Platforms" />
  <img src="https://img.shields.io/badge/Privacy-100%25%20Offline--First-FF453A?style=flat-square" alt="Privacy" />
</p>

---

## 🌟 Overview

This repository contains the marketing website and product landing page for **KIVENTA** — a modern productivity workspace built to help you turn intentions into organized actions, stay focused, and keep your work synchronized across devices.

Crafted with Apple Human Interface principles, spatial glassmorphism, fluid physics-based micro-interactions, dynamic dark/light theme switching, and interactive live simulators.

---

## 🧭 Meaning of the Name

**KIVENTA** is a coined brand name representing the journey from intent to organized action and accomplishment.

### Brand Philosophy
KIVENTA is designed around a simple principle: productivity tools should eliminate friction between thought and execution.

### Tagline
**KIVENTA — Turn Intent Into Action.**

---

## ✨ Key Features & Highlights

- 🍏 **Apple-Inspired Design Language**: Liquid glass surfaces (`backdrop-filter: blur(24px)`), specular borders, layered depth hierarchy, and spring animations.
- 🌓 **Dynamic Theming**: True OLED Dark Mode (`#08080A`), Crisp Apple Light Mode (`#F5F5F9`), and System auto-detection with smooth background and opacity transitions.
- ⚡ **Interactive Hero Mockup**: Functional task checklist with real-time SVG progress ring calculations and pointer-based 3D parallax tilt.
- 🧠 **Smart Productivity Simulators**:
  - **Natural Language Parsing Demo**: Live text extraction of task names, dates, times, and tags.
  - **On-Device Voice Tasks Simulator**: Animated audio waveform with local speech engine transcriptions.
- ⏱️ **Focus Mode Stage**: Working 25:00 Pomodoro timer with Digital & Apple Minimalist Analog clock screensavers, breathing ambient glow, and built-in soundscape selectors.
- 📅 **Interactive Calendar**: Month, Week, and Agenda timeline views with spring-highlight date transitions.
- 📊 **Productivity Telemetry**: Animated completion velocity curves, streak tracking (12 days 🔥), and milestone badges.
- 🔄 **Cross-Device Sync Architecture**: Interactive 3-device network (Windows, Android, Web) showcasing 6-digit PIN pairing, Lamport logical clocks, and tombstone deletion protection.
- 💾 **Data Sovereignty**: Working JSON atomic backup and CSV spreadsheet export triggers.
- 📥 **Centralized Download Hub**: Prominent distribution cards for Windows (`Taskora-Setup.exe`), Android (`Taskora.apk` and `Taskora.aab`), and Web App with configurable release endpoints in `downloadConfig.ts`.
- 📱 **100% Responsive & Accessible**: Flawless layout across 320px mobile to 1920px desktop with `prefers-reduced-motion` compliance.

---

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 6](https://vite.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Apple HIG Tokens, Pure Vanilla CSS Glassmorphism, CSS 3D Transforms
- **Typography**: Plus Jakarta Sans / Inter & JetBrains Mono

---

## 📂 Project Structure

```
To_do_list_landing_page/
├── public/
│   ├── assets/
│   │   └── branding/          # High-resolution KIVENTA logos, icons, splash
│   ├── favicon.ico
│   └── favicon.png
├── src/
│   ├── config/
│   │   └── downloadConfig.ts  # Centralized download URLs, platform metadata & changelog
│   ├── theme/
│   │   ├── tokens.ts          # Apple HIG tokens (Light, OLED Dark, Radii, Shadows)
│   │   └── ThemeContext.tsx   # Theme provider with system preference synchronization
│   ├── components/
│   │   ├── common/
│   │   │   ├── GlassSurface.tsx     # Reusable glassmorphic container
│   │   │   ├── AnimatedButton.tsx   # Tactile spring-feedback button
│   │   │   ├── PillBadge.tsx        # Apple-style status & tag badge
│   │   │   └── DeviceFrame.tsx      # Realistic macOS & mobile device frames
│   │   ├── navigation/
│   │   │   ├── Navbar.tsx           # Floating glass pill navbar
│   │   │   └── MobileMenu.tsx       # Animated slide-in mobile drawer
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx      # Headline, badges, and CTA triggers
│   │   │   ├── HeroAppPreview.tsx   # Interactive app mockup & progress ring
│   │   │   └── ParallaxContainer.tsx# Pointer-tracking 3D tilt
│   │   ├── showcase/
│   │   │   └── ProductShowcase.tsx  # Core experience cards (Today, Inbox, Focus, etc.)
│   │   ├── features/
│   │   │   └── FeaturesGrid.tsx     # Grouped feature matrix (30+ features)
│   │   ├── smart/
│   │   │   └── SmartProductivity.tsx# NLP parser & voice task simulators
│   │   ├── focus/
│   │   │   └── FocusSection.tsx     # Pomodoro timer & Apple analog clock
│   │   ├── calendar/
│   │   │   └── CalendarSection.tsx  # Month/Week/Agenda planner
│   │   ├── statistics/
│   │   │   └── StatisticsSection.tsx# Telemetry graphs & streak counters
│   │   ├── sync/
│   │   │   └── SyncSection.tsx      # 3-device synchronization visualizer
│   │   ├── offline/
│   │   │   └── OfflineSection.tsx   # Autonomous offline execution flow
│   │   ├── backup/
│   │   │   └── BackupSection.tsx    # Atomic JSON & CSV export triggers
│   │   ├── download/
│   │   │   └── DownloadSection.tsx  # Windows, Android, and Web download cards
│   │   ├── installation/
│   │   │   └── InstallationGuide.tsx# Tabbed step-by-step installation instructions
│   │   ├── security/
│   │   │   └── SecuritySection.tsx  # Privacy & zero-cloud principles
│   │   ├── cta/
│   │   │   └── FinalCta.tsx         # High-impact glass CTA section
│   │   └── footer/
│   │       └── Footer.tsx           # Structured Apple-style footer
│   ├── hooks/
│   │   ├── useScrollSpy.ts          # Active section observer for navigation
│   │   └── useScrollReveal.ts       # Viewport entrance animation observer
│   ├── styles/
│   │   ├── global.css               # Reset, typography & glassmorphism system
│   │   └── animations.css           # Keyframes, spring transitions & glows
│   ├── App.tsx                      # Main application layout
│   └── main.tsx                     # React root mount point
├── index.html                       # SEO metadata, OpenGraph, font preconnects
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn / pnpm

### Installation
```bash
# Clone or navigate to the project directory
cd To_do_list_landing_page

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
```
Builds the optimized production assets into the `dist/` directory with strict TypeScript type checking.

### Local Preview of Production Build
```bash
npm run preview
```

---

## ⚙️ Download Configuration

To update release URLs, binary filenames, or version numbers, edit `src/config/downloadConfig.ts`:

```typescript
export const DOWNLOAD_TARGETS = {
  windows: {
    label: "Download for Windows",
    url: "/downloads/Taskora-Setup-1.0.0.exe",
    fileName: "Taskora-Setup-1.0.0.exe",
    version: "1.0.0",
    fileSize: "188 MB",
    architecture: "x64 / AMD64",
    ...
  },
  androidApk: {
    label: "Download APK",
    url: "/downloads/Taskora.apk",
    fileName: "Taskora.apk",
    fileSize: "42 MB",
    ...
  },
  ...
};
```

---

## 📄 License

© 2026 KIVENTA. All rights reserved.

/**
 * Taskora Download & Release Configuration
 * Centralized repository for all platform distribution targets, release metadata,
 * checksums, and system requirements.
 */

export interface ReleaseInfo {
  id: 'windows' | 'android-apk' | 'android-aab' | 'web';
  platformName: string;
  badge: string;
  label: string;
  subLabel?: string;
  url: string;
  fallbackUrl?: string;
  fileName?: string;
  fileSize?: string;
  version: string;
  releaseDate: string;
  architecture: string;
  requirements: string;
  isPrimary?: boolean;
  type: 'installer' | 'apk' | 'bundle' | 'webapp';
  description: string;
  highlights: string[];
}

export const APP_METADATA = {
  name: 'Taskora',
  tagline: 'Organize your day. Focus on what matters.',
  supportingLine: 'Your tasks, projects, focus, and productivity — beautifully organized in one place.',
  latestVersion: '1.0.0',
  releaseMonthYear: 'August 2026',
  copyright: '© 2026 Taskora. All rights reserved.',
  links: {
    github: 'https://github.com/taskora/taskora',
    documentation: '#installation',
    privacy: '#privacy',
    terms: '#privacy',
    support: 'mailto:support@taskora.app',
    webAppLive: 'https://taskora.app/app',
  },
  stats: {
    platformsCount: '3 Platforms',
    privacyRate: '100% Offline-First',
    activeFocusSessions: '25 Min Flow',
    syncSpeed: '< 50ms Local Sync',
  },
};

export const DOWNLOAD_TARGETS: Record<string, ReleaseInfo> = {
  windows: {
    id: 'windows',
    platformName: 'Windows',
    badge: 'Desktop App',
    label: 'Download for Windows',
    subLabel: 'Installer (.exe) • 64-bit',
    url: '/downloads/Taskora-Setup-1.0.0.exe',
    fallbackUrl: 'https://github.com/taskora/taskora/releases/download/v1.0.0/Taskora-Setup-1.0.0.exe',
    fileName: 'Taskora-Setup-1.0.0.exe',
    fileSize: '188 MB',
    version: '1.0.0',
    releaseDate: 'August 2026',
    architecture: 'x64 / AMD64',
    requirements: 'Windows 10 / 11 (64-bit)',
    isPrimary: true,
    type: 'installer',
    description: 'Your complete Taskora workspace for desktop with system tray, native hotkeys, and hardware voice engine.',
    highlights: [
      'Native Windows desktop application with Mica/Acrylic translucency',
      'Global keyboard shortcuts (Quick Add task anywhere)',
      'Offline-first zero latency SQLite/Async local persistence',
      'On-device speech recognition via native Windows audio engine',
    ],
  },
  androidApk: {
    id: 'android-apk',
    platformName: 'Android',
    badge: 'Direct APK',
    label: 'Download APK',
    subLabel: 'Direct Installation (.apk)',
    url: '/downloads/Taskora.apk',
    fallbackUrl: 'https://github.com/taskora/taskora/releases/download/v1.0.0/Taskora.apk',
    fileName: 'Taskora.apk',
    fileSize: '42 MB',
    version: '1.0.0',
    releaseDate: 'August 2026',
    architecture: 'ARM64 / ARMv7 / x86_64',
    requirements: 'Android 8.0 (Oreo) or higher',
    isPrimary: true,
    type: 'apk',
    description: 'Your productivity workspace wherever you go with fluid swipe gestures and tactile haptic feedback.',
    highlights: [
      'Instant direct APK sideload without Play Store account requirements',
      'Fluid 60fps gesture-driven swipe actions and task completion animations',
      'True OLED dark mode tuned for battery conservation',
      'Encrypted local backup export & restore directly to device storage',
    ],
  },
  androidAab: {
    id: 'android-aab',
    platformName: 'Android',
    badge: 'App Bundle',
    label: 'Android App Bundle',
    subLabel: 'Distribution (.aab)',
    url: '/downloads/Taskora.aab',
    fallbackUrl: 'https://github.com/taskora/taskora/releases/download/v1.0.0/Taskora.aab',
    fileName: 'Taskora.aab',
    fileSize: '38 MB',
    version: '1.0.0',
    releaseDate: 'August 2026',
    architecture: 'Universal Google Play Format',
    requirements: 'Android 8.0+ via Google Play / Internal App Sharing',
    type: 'bundle',
    description: 'AAB distribution artifact designed for Google Play Store deployment and internal testing streams.',
    highlights: [
      'Google Play optimized dynamic feature delivery',
      'Automated device-tailored APK generation',
      'For developers & distribution teams (not for direct device sideloading)',
    ],
  },
  web: {
    id: 'web',
    platformName: 'Web',
    badge: 'Instant Access',
    label: 'Open Taskora Web',
    subLabel: 'Progressive Web App',
    url: 'https://taskora.app/web',
    fallbackUrl: '#hero',
    version: '1.0.0 (Live)',
    releaseDate: 'August 2026',
    architecture: 'All Modern Browsers',
    requirements: 'Chrome, Edge, Safari, Firefox, Brave',
    type: 'webapp',
    description: 'Use Taskora instantly from your browser with zero installation and full offline capability.',
    highlights: [
      'Instant load with service worker caching & local IndexedDB storage',
      'Zero installation required — installable as a Desktop/Mobile PWA',
      'Device pairing with QR code and 6-digit cryptographic PIN',
    ],
  },
};

export const CHANGELOG_V1 = [
  {
    version: '1.0.0',
    date: 'August 2026',
    title: 'Initial Production Release',
    items: [
      'Apple-inspired spatial glassmorphic interface with True Black OLED & Crisp Light themes',
      'Smart Natural Language task creation with automatic date/time/tag extraction',
      'Cinematic Focus Mode with 25:00 timer, ambient breathing halo, and soundscapes',
      'Interactive Calendar with Month, Week, and Agenda timeline views',
      'Cryptographic 6-digit offline device pairing with Lamport logical clocks',
      'Zero-cloud architecture: 100% on-device private data storage',
    ],
  },
];

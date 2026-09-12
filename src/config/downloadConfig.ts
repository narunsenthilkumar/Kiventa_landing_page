/**
 * KIVENTA Download & Release Configuration
 * Centralized repository for all platform distribution targets, GitHub release assets,
 * and live application URLs.
 *
 * DO NOT hard-code GitHub URLs or release asset links in individual components.
 * Modify this configuration to update repository paths, version numbers, or asset names.
 */

// Centralized GitHub Repository Information
export const GITHUB_OWNER = "narunsenthilkumar";
export const GITHUB_REPO_NAME = "To_do_list_application";
export const GITHUB_REPOSITORY = `${GITHUB_OWNER}/${GITHUB_REPO_NAME}`;

// Release Version Metadata
export const APP_VERSION = "1.0.0";
export const RELEASE_TAG = `v${APP_VERSION}`;

// Toggle to use latest dynamic release or pinned tag release
// Default: 'latest' (https://github.com/OWNER/REPO/releases/latest/download)
// Pinned: 'versioned' (https://github.com/OWNER/REPO/releases/download/v1.0.0)
export const USE_VERSIONED_RELEASE = false;

const GITHUB_RELEASE_BASE = USE_VERSIONED_RELEASE
  ? `https://github.com/${GITHUB_REPOSITORY}/releases/download/${RELEASE_TAG}`
  : `https://github.com/${GITHUB_REPOSITORY}/releases/latest/download`;

// Live Web Application URL
export const WEB_APP_URL = "https://todo-list-application-js.vercel.app/";

/**
 * Production-Ready Download Configuration Schema
 */
export const downloadConfig = {
  version: APP_VERSION,

  github: {
    repository: GITHUB_REPOSITORY,
    releaseBase: GITHUB_RELEASE_BASE,
    releaseTag: RELEASE_TAG,
    releasesUrl: `https://github.com/${GITHUB_REPOSITORY}/releases`,
  },

  windows: {
    name: "KIVENTA for Windows",
    fileName: "Kiventa-Setup.exe",
    platform: "Windows",
    architecture: "x64",
    requirements: "Windows 10 / 11 (64-bit)",
    version: APP_VERSION,
    url: `${GITHUB_RELEASE_BASE}/Kiventa-Setup.exe`,
    tagline: "Full KIVENTA experience for Windows desktop.",
    highlights: [
      "Native Windows desktop application with Mica translucency",
      "Global keyboard shortcuts (Quick Add task from anywhere)",
      "Zero-latency SQLite local persistence engine",
      "Offline-first with no account requirement",
    ],
  },

  android: {
    apk: {
      name: "KIVENTA APK",
      fileName: "Kiventa.apk",
      platform: "Android",
      requirements: "Android 8.0 (Oreo) or higher",
      version: APP_VERSION,
      url: `${GITHUB_RELEASE_BASE}/Kiventa.apk`,
      tagline: "Take your tasks, projects, calendar and focus mode anywhere.",
      highlights: [
        "Instant direct APK sideload without Play Store login",
        "Fluid 60fps gesture-driven swipe actions",
        "True OLED dark mode tuned for battery conservation",
        "Encrypted local backup export & restore",
      ],
    },

    aab: {
      name: "KIVENTA Android App Bundle",
      fileName: "Kiventa.aab",
      platform: "Android",
      requirements: "Google Play Store / Distribution",
      version: APP_VERSION,
      url: `${GITHUB_RELEASE_BASE}/Kiventa.aab`,
      tagline: "Google Play optimized dynamic distribution bundle.",
      distributionNote:
        "AAB is intended for Google Play distribution. It is not the normal direct-install Android package for mobile phones.",
    },
  },

  web: {
    name: "KIVENTA Web",
    platform: "Web",
    requirements: "Chrome, Safari, Edge, Firefox, Brave",
    version: `${APP_VERSION} (Live)`,
    url: WEB_APP_URL,
    tagline: "Use KIVENTA directly from your browser.",
    highlights: [
      "Instant browser access with zero local installation",
      "Progressive Web App (PWA) installable to Desktop / Mobile dock",
      "100% offline-capable with local IndexedDB storage",
      "End-to-end private device pairing with 6-digit PIN",
    ],
  },
};

/**
 * App-wide metadata and brand resources
 */
export const APP_METADATA = {
  name: "KIVENTA",
  tagline: "Turn Intent Into Action.",
  supportingLine:
    "KIVENTA is a modern productivity workspace built to help you turn intentions into organized actions, stay focused, and keep your work synchronized across devices.",
  brandMeaning:
    "KIVENTA is a coined brand name representing the journey from intent to organized action and accomplishment.",
  latestVersion: APP_VERSION,
  releaseMonthYear: "August 2026",
  copyright: "© 2026 KIVENTA. All rights reserved.",
  links: {
    github: `https://github.com/${GITHUB_REPOSITORY}`,
    githubReleases: `https://github.com/${GITHUB_REPOSITORY}/releases`,
    documentation: "#installation",
    privacy: "#privacy",
    terms: "#privacy",
    support: "mailto:support@kiventa.app",
    webAppLive: WEB_APP_URL,
  },
  stats: {
    platformsCount: "3 Platforms",
    privacyRate: "100% Offline-First",
    activeFocusSessions: "25 Min Flow",
    syncSpeed: "< 50ms Local Sync",
  },
};

/**
 * Release Info Interface for backward compatibility with components
 */
export interface ReleaseInfo {
  id: "windows" | "android-apk" | "android-aab" | "web";
  platformName: string;
  badge: string;
  label: string;
  subLabel?: string;
  url: string;
  fileName?: string;
  version: string;
  architecture?: string;
  requirements: string;
  isPrimary?: boolean;
  type: "installer" | "apk" | "bundle" | "webapp";
  description: string;
  highlights?: string[];
}

export const DOWNLOAD_TARGETS: Record<string, ReleaseInfo> = {
  windows: {
    id: "windows",
    platformName: downloadConfig.windows.platform,
    badge: "Desktop App",
    label: "Download for Windows",
    subLabel: `${downloadConfig.windows.fileName} • 64-bit`,
    url: downloadConfig.windows.url,
    fileName: downloadConfig.windows.fileName,
    version: downloadConfig.version,
    architecture: downloadConfig.windows.architecture,
    requirements: downloadConfig.windows.requirements,
    isPrimary: true,
    type: "installer",
    description: downloadConfig.windows.tagline,
    highlights: downloadConfig.windows.highlights,
  },
  androidApk: {
    id: "android-apk",
    platformName: downloadConfig.android.apk.platform,
    badge: "Direct APK",
    label: "Download APK",
    subLabel: downloadConfig.android.apk.fileName,
    url: downloadConfig.android.apk.url,
    fileName: downloadConfig.android.apk.fileName,
    version: downloadConfig.version,
    architecture: "ARM64 / ARMv7 / x86_64",
    requirements: downloadConfig.android.apk.requirements,
    isPrimary: true,
    type: "apk",
    description: downloadConfig.android.apk.tagline,
    highlights: downloadConfig.android.apk.highlights,
  },
  androidAab: {
    id: "android-aab",
    platformName: downloadConfig.android.aab.platform,
    badge: "Play Bundle",
    label: "Download AAB",
    subLabel: downloadConfig.android.aab.fileName,
    url: downloadConfig.android.aab.url,
    fileName: downloadConfig.android.aab.fileName,
    version: downloadConfig.version,
    architecture: "Universal Google Play Format",
    requirements: downloadConfig.android.aab.requirements,
    type: "bundle",
    description: downloadConfig.android.aab.tagline,
  },
  web: {
    id: "web",
    platformName: downloadConfig.web.platform,
    badge: "Instant Access",
    label: "Open KIVENTA Web",
    subLabel: "Browser Web App",
    url: downloadConfig.web.url,
    version: downloadConfig.web.version,
    requirements: downloadConfig.web.requirements,
    type: "webapp",
    description: downloadConfig.web.tagline,
    highlights: downloadConfig.web.highlights,
  },
};

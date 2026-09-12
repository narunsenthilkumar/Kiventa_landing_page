import { useState, useEffect } from 'react';
import { downloadConfig } from '../config/downloadConfig';

export type PlatformType = 'windows' | 'android' | 'macos' | 'ios' | 'linux' | 'unknown';

export interface ActionTarget {
  label: string;
  url: string;
  targetId: 'windows' | 'android' | 'web';
  isExternalDownload: boolean;
}

export interface PlatformInfo {
  platform: PlatformType;
  platformName: string;
  isWindows: boolean;
  isAndroid: boolean;
  isMacOS: boolean;
  isIOS: boolean;
  isLinux: boolean;
  isMobile: boolean;
  isDesktop: boolean;
  primaryAction: ActionTarget;
  secondaryAction: ActionTarget;
}

export const usePlatform = (): PlatformInfo => {
  const [platformInfo, setPlatformInfo] = useState<PlatformInfo>(() => ({
    platform: 'windows',
    platformName: 'Windows',
    isWindows: true,
    isAndroid: false,
    isMacOS: false,
    isIOS: false,
    isLinux: false,
    isMobile: false,
    isDesktop: true,
    primaryAction: {
      label: 'Download for Windows',
      url: downloadConfig.windows.url,
      targetId: 'windows' as const,
      isExternalDownload: true,
    },
    secondaryAction: {
      label: 'Get KIVENTA for Android',
      url: downloadConfig.android.apk.url,
      targetId: 'android' as const,
      isExternalDownload: true,
    },
  }));

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const userAgent = window.navigator.userAgent.toLowerCase();
    const platformStr =
      (window.navigator as unknown as { userAgentData?: { platform?: string } }).userAgentData?.platform?.toLowerCase() ||
      window.navigator.platform?.toLowerCase() ||
      '';

    let detectedPlatform: PlatformType = 'unknown';
    let detectedName = 'Desktop';

    if (/android/i.test(userAgent)) {
      detectedPlatform = 'android';
      detectedName = 'Android';
    } else if (/win/i.test(userAgent) || /windows/i.test(platformStr)) {
      detectedPlatform = 'windows';
      detectedName = 'Windows';
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      detectedPlatform = 'ios';
      detectedName = 'iOS';
    } else if (/mac/i.test(userAgent) || /macintosh/i.test(platformStr)) {
      detectedPlatform = 'macos';
      detectedName = 'macOS';
    } else if (/linux/i.test(userAgent) || /linux/i.test(platformStr)) {
      detectedPlatform = 'linux';
      detectedName = 'Linux';
    }

    const isWindows = detectedPlatform === 'windows';
    const isAndroid = detectedPlatform === 'android';
    const isMacOS = detectedPlatform === 'macos';
    const isIOS = detectedPlatform === 'ios';
    const isLinux = detectedPlatform === 'linux';
    const isMobile = isAndroid || isIOS;
    const isDesktop = !isMobile;

    let primaryAction: ActionTarget = {
      label: 'Download for Windows',
      url: downloadConfig.windows.url,
      targetId: 'windows',
      isExternalDownload: true,
    };

    let secondaryAction: ActionTarget = {
      label: 'Get KIVENTA for Android',
      url: downloadConfig.android.apk.url,
      targetId: 'android',
      isExternalDownload: true,
    };

    if (isAndroid) {
      primaryAction = {
        label: 'Download APK',
        url: downloadConfig.android.apk.url,
        targetId: 'android',
        isExternalDownload: true,
      };
      secondaryAction = {
        label: 'Open KIVENTA Web',
        url: downloadConfig.web.url,
        targetId: 'web',
        isExternalDownload: false,
      };
    } else if (isMacOS || isIOS || isLinux) {
      primaryAction = {
        label: 'Open KIVENTA Web',
        url: downloadConfig.web.url,
        targetId: 'web',
        isExternalDownload: false,
      };
      secondaryAction = {
        label: 'Download for Windows',
        url: downloadConfig.windows.url,
        targetId: 'windows',
        isExternalDownload: true,
      };
    }

    setPlatformInfo({
      platform: detectedPlatform,
      platformName: detectedName,
      isWindows,
      isAndroid,
      isMacOS,
      isIOS,
      isLinux,
      isMobile,
      isDesktop,
      primaryAction,
      secondaryAction,
    });
  }, []);

  return platformInfo;
};

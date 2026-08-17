import React, { useState } from 'react';
import {
  Monitor,
  Smartphone,
  Globe,
  Download,
  Check,
  ExternalLink,
  Copy,
  CheckCheck,
  Sparkles,
  Info,
  ShieldCheck,
  Layers,
  Cpu,
  Package,
} from 'lucide-react';
import { GlassSurface } from '../common/GlassSurface';
import { PillBadge } from '../common/PillBadge';
import { downloadConfig } from '../../config/downloadConfig';
import { usePlatform } from '../../hooks/usePlatform';

export const DownloadSection: React.FC = () => {
  const platformInfo = usePlatform();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeDownloadId, setActiveDownloadId] = useState<string | null>(null);

  const handleCopy = (url: string, key: string) => {
    navigator.clipboard.writeText(url);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleDownloadClick = (id: string) => {
    setActiveDownloadId(id);
    setTimeout(() => setActiveDownloadId(null), 3000);
  };

  return (
    <section
      id="downloads"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '60px',
        paddingBottom: '80px',
      }}
    >
      {/* Ambient lighting glows */}
      <div
        className="ambient-glow"
        style={{
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '720px',
          height: '720px',
          background:
            'radial-gradient(circle, rgba(10, 132, 255, 0.22) 0%, rgba(94, 92, 230, 0.14) 45%, transparent 75%)',
        }}
      />
      <div
        className="ambient-glow"
        style={{
          bottom: '10%',
          right: '8%',
          width: '400px',
          height: '400px',
          background:
            'radial-gradient(circle, rgba(48, 209, 88, 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="section-container">
        {/* Section Header */}
        <div className="section-header reveal-hidden" style={{ textAlign: 'center' }}>
          <span className="section-tag">Cross-Platform Apps</span>
          <h2 className="text-gradient-hero" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}>
            Taskora on every device
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
              color: 'var(--textSecondary)',
              maxWidth: '680px',
              margin: '0 auto 24px auto',
            }}
          >
            Stay organized across Windows, Android, and Web.
          </p>

          {/* GitHub Release Metadata Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px 20px',
              borderRadius: '9999px',
              background: 'var(--pillBackground)',
              border: '1px solid var(--subtleBorder)',
              fontSize: '0.88rem',
              color: 'var(--textSecondary)',
              flexWrap: 'wrap',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: 'var(--textPrimary)' }}>
              <Sparkles size={15} style={{ color: 'var(--accent)' }} />
              Latest Release
            </span>
            <span style={{ opacity: 0.35 }}>•</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent)' }}>
              v{downloadConfig.version}
            </span>
            <span style={{ opacity: 0.35 }}>•</span>
            <span style={{ color: 'var(--textSecondary)' }}>
              Available for Windows and Android
            </span>
            {platformInfo.platformName !== 'unknown' && (
              <>
                <span style={{ opacity: 0.35 }}>•</span>
                <span style={{ color: 'var(--success)', fontWeight: 500 }}>
                  Detected: {platformInfo.platformName}
                </span>
              </>
            )}
          </div>
        </div>

        {/* 3 Main Platform Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            marginBottom: '48px',
          }}
          className="download-cards-grid"
        >
          {/* ============================================================ */}
          {/* CARD 1: WINDOWS DESKTOP */}
          {/* ============================================================ */}
          <GlassSurface
            interactive
            className={`reveal-hidden reveal-delay-1 download-platform-card ${
              platformInfo.isWindows ? 'detected-platform-highlight' : ''
            }`}
            style={{
              padding: '36px 30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              borderRadius: '28px',
              border: platformInfo.isWindows
                ? '1px solid rgba(10, 132, 255, 0.45)'
                : '1px solid var(--glassBorder)',
            }}
          >
            {platformInfo.isWindows && (
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '28px',
                  background: 'linear-gradient(135deg, #0A84FF 0%, #5E5CE6 100%)',
                  color: '#FFFFFF',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  boxShadow: '0 4px 12px rgba(10, 132, 255, 0.4)',
                }}
              >
                Recommended for your device
              </div>
            )}

            <div>
              {/* Card Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                  gap: '12px',
                }}
              >
                <div
                  className="platform-icon-box"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '18px',
                    background:
                      'linear-gradient(135deg, rgba(0, 113, 227, 0.2) 0%, rgba(94, 92, 230, 0.2) 100%)',
                    border: '1px solid rgba(0, 113, 227, 0.35)',
                    color: '#0A84FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <Monitor size={30} />
                </div>
                <div style={{ textAlign: 'right' }}>
                  <PillBadge label="Latest version • v1.0.0" variant="accent" size="sm" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>
                {downloadConfig.windows.name}
              </h3>
              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--textSecondary)',
                  marginBottom: '20px',
                  lineHeight: 1.55,
                }}
              >
                {downloadConfig.windows.tagline}
              </p>

              {/* Technical Specifications */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginBottom: '22px',
                }}
              >
                <span className="spec-pill">
                  <Cpu size={13} style={{ color: 'var(--accent)' }} />
                  Windows 10/11
                </span>
                <span className="spec-pill">
                  <Layers size={13} style={{ color: 'var(--accent)' }} />
                  64-bit (x64)
                </span>
                <span className="spec-pill">
                  <Package size={13} style={{ color: 'var(--accent)' }} />
                  EXE Installer
                </span>
              </div>

              {/* Feature Highlights */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '9px',
                  marginBottom: '28px',
                }}
              >
                {downloadConfig.windows.highlights.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '9px',
                      fontSize: '0.85rem',
                    }}
                  >
                    <Check
                      size={16}
                      style={{ color: '#0A84FF', flexShrink: 0, marginTop: '2px' }}
                    />
                    <span style={{ color: 'var(--textSecondary)', lineHeight: 1.45 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div>
              {/* Release Asset Name Tag */}
              <div
                style={{
                  padding: '9px 14px',
                  borderRadius: '12px',
                  background: 'var(--pillBackground)',
                  border: '1px solid var(--subtleBorder)',
                  fontSize: '0.8rem',
                  color: 'var(--textTertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '14px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <span style={{ color: 'var(--textSecondary)' }}>
                  {downloadConfig.windows.fileName}
                </span>
                <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Official Release</span>
              </div>

              {/* Direct Download Anchor Button */}
              <a
                href={downloadConfig.windows.url}
                target="_blank"
                rel="noopener noreferrer"
                download={downloadConfig.windows.fileName}
                onClick={() => handleDownloadClick('windows')}
                className="animated-btn shimmer-trigger direct-download-btn"
                style={{
                  width: '100%',
                  minHeight: '48px',
                  padding: '14px 24px',
                  fontSize: '1rem',
                  borderRadius: '16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, #0A84FF 0%, #5E5CE6 100%)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 24px -6px rgba(10, 132, 255, 0.45)',
                  cursor: 'pointer',
                  marginBottom: '10px',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <Download size={18} />
                <span>
                  {activeDownloadId === 'windows'
                    ? 'Opening GitHub Release...'
                    : 'Download for Windows'}
                </span>
              </a>

              {/* Copy URL action */}
              <button
                type="button"
                onClick={() => handleCopy(downloadConfig.windows.url, 'windows')}
                className="copy-url-btn"
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--textTertiary)',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  borderRadius: '8px',
                  transition: 'color 0.2s ease',
                }}
              >
                {copiedKey === 'windows' ? (
                  <>
                    <CheckCheck size={14} style={{ color: 'var(--success)' }} />
                    <span style={{ color: 'var(--success)' }}>Direct URL copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Direct Download URL</span>
                  </>
                )}
              </button>
            </div>
          </GlassSurface>

          {/* ============================================================ */}
          {/* CARD 2: ANDROID MOBILE (APK + AAB) */}
          {/* ============================================================ */}
          <GlassSurface
            interactive
            className={`reveal-hidden reveal-delay-2 download-platform-card ${
              platformInfo.isAndroid ? 'detected-platform-highlight' : ''
            }`}
            style={{
              padding: '36px 30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              borderRadius: '28px',
              border: platformInfo.isAndroid
                ? '1px solid rgba(48, 209, 88, 0.45)'
                : '1px solid var(--glassBorder)',
            }}
          >
            {platformInfo.isAndroid && (
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '28px',
                  background: 'linear-gradient(135deg, #30D158 0%, #0A84FF 100%)',
                  color: '#FFFFFF',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  boxShadow: '0 4px 12px rgba(48, 209, 88, 0.4)',
                }}
              >
                Recommended for your phone
              </div>
            )}

            <div>
              {/* Card Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                  gap: '12px',
                }}
              >
                <div
                  className="platform-icon-box"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '18px',
                    background:
                      'linear-gradient(135deg, rgba(48, 209, 88, 0.2) 0%, rgba(10, 132, 255, 0.2) 100%)',
                    border: '1px solid rgba(48, 209, 88, 0.35)',
                    color: '#30D158',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <Smartphone size={30} />
                </div>
                <div style={{ textAlign: 'right' }}>
                  <PillBadge label="Android 8.0+" variant="success" size="sm" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>
                {downloadConfig.android.apk.name}
              </h3>
              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--textSecondary)',
                  marginBottom: '20px',
                  lineHeight: 1.55,
                }}
              >
                {downloadConfig.android.apk.tagline}
              </p>

              {/* Technical Specifications */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginBottom: '22px',
                }}
              >
                <span className="spec-pill">
                  <Cpu size={13} style={{ color: 'var(--success)' }} />
                  Android 8.0+
                </span>
                <span className="spec-pill">
                  <Layers size={13} style={{ color: 'var(--success)' }} />
                  Direct Sideload (.apk)
                </span>
                <span className="spec-pill">
                  <Package size={13} style={{ color: 'var(--warning)' }} />
                  Google Play (.aab)
                </span>
              </div>

              {/* Feature Highlights */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '9px',
                  marginBottom: '24px',
                }}
              >
                {downloadConfig.android.apk.highlights.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '9px',
                      fontSize: '0.85rem',
                    }}
                  >
                    <Check
                      size={16}
                      style={{ color: '#30D158', flexShrink: 0, marginTop: '2px' }}
                    />
                    <span style={{ color: 'var(--textSecondary)', lineHeight: 1.45 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div>
              {/* Primary APK & Secondary AAB Button Container */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  marginBottom: '10px',
                }}
                className="android-actions-grid"
              >
                {/* Primary: Download APK */}
                <a
                  href={downloadConfig.android.apk.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={downloadConfig.android.apk.fileName}
                  onClick={() => handleDownloadClick('android-apk')}
                  className="animated-btn shimmer-trigger"
                  style={{
                    minHeight: '48px',
                    padding: '12px 16px',
                    fontSize: '0.95rem',
                    borderRadius: '16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    background: 'linear-gradient(135deg, #30D158 0%, #0A84FF 100%)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 24px -6px rgba(48, 209, 88, 0.45)',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <Download size={16} />
                  <span>
                    {activeDownloadId === 'android-apk' ? 'Opening APK...' : 'Download APK'}
                  </span>
                </a>

                {/* Secondary: Download AAB */}
                <a
                  href={downloadConfig.android.aab.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={downloadConfig.android.aab.fileName}
                  onClick={() => handleDownloadClick('android-aab')}
                  className="animated-btn"
                  style={{
                    minHeight: '48px',
                    padding: '12px 16px',
                    fontSize: '0.95rem',
                    borderRadius: '16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    background: 'var(--pillBackground)',
                    color: 'var(--textPrimary)',
                    border: '1px solid var(--glassBorder)',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <Package size={16} />
                  <span>Download AAB</span>
                </a>
              </div>

              {/* AAB Distribution Notice */}
              <div
                style={{
                  padding: '9px 12px',
                  borderRadius: '12px',
                  background: 'rgba(255, 159, 10, 0.08)',
                  border: '1px solid rgba(255, 159, 10, 0.22)',
                  fontSize: '0.78rem',
                  color: 'var(--textSecondary)',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  lineHeight: 1.45,
                }}
              >
                <Info
                  size={15}
                  style={{ color: '#FF9500', flexShrink: 0, marginTop: '2px' }}
                />
                <span>
                  <strong>Notice:</strong> AAB is intended for Google Play distribution.
                </span>
              </div>

              {/* Copy URL action */}
              <button
                type="button"
                onClick={() => handleCopy(downloadConfig.android.apk.url, 'android-apk')}
                className="copy-url-btn"
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--textTertiary)',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  borderRadius: '8px',
                  transition: 'color 0.2s ease',
                }}
              >
                {copiedKey === 'android-apk' ? (
                  <>
                    <CheckCheck size={14} style={{ color: 'var(--success)' }} />
                    <span style={{ color: 'var(--success)' }}>APK direct URL copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Direct APK URL</span>
                  </>
                )}
              </button>
            </div>
          </GlassSurface>

          {/* ============================================================ */}
          {/* CARD 3: WEB APP */}
          {/* ============================================================ */}
          <GlassSurface
            interactive
            className="reveal-hidden reveal-delay-3 download-platform-card"
            style={{
              padding: '36px 30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              borderRadius: '28px',
              border: '1px solid var(--glassBorder)',
            }}
          >
            <div>
              {/* Card Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                  gap: '12px',
                }}
              >
                <div
                  className="platform-icon-box"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '18px',
                    background:
                      'linear-gradient(135deg, rgba(94, 92, 230, 0.2) 0%, rgba(10, 132, 255, 0.2) 100%)',
                    border: '1px solid rgba(94, 92, 230, 0.35)',
                    color: '#5E5CE6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <Globe size={30} />
                </div>
                <div style={{ textAlign: 'right' }}>
                  <PillBadge label="Instant Browser Access" variant="purple" size="sm" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>
                {downloadConfig.web.name}
              </h3>
              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--textSecondary)',
                  marginBottom: '20px',
                  lineHeight: 1.55,
                }}
              >
                {downloadConfig.web.tagline}
              </p>

              {/* Technical Specifications */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginBottom: '22px',
                }}
              >
                <span className="spec-pill">
                  <Globe size={13} style={{ color: '#5E5CE6' }} />
                  Zero Installation
                </span>
                <span className="spec-pill">
                  <ShieldCheck size={13} style={{ color: '#5E5CE6' }} />
                  PWA Installable
                </span>
                <span className="spec-pill">
                  <Layers size={13} style={{ color: '#5E5CE6' }} />
                  All Modern Browsers
                </span>
              </div>

              {/* Feature Highlights */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '9px',
                  marginBottom: '28px',
                }}
              >
                {downloadConfig.web.highlights.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '9px',
                      fontSize: '0.85rem',
                    }}
                  >
                    <Check
                      size={16}
                      style={{ color: '#5E5CE6', flexShrink: 0, marginTop: '2px' }}
                    />
                    <span style={{ color: 'var(--textSecondary)', lineHeight: 1.45 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div>
              {/* Browser Compatibility Tag */}
              <div
                style={{
                  padding: '9px 14px',
                  borderRadius: '12px',
                  background: 'var(--pillBackground)',
                  border: '1px solid var(--subtleBorder)',
                  fontSize: '0.8rem',
                  color: 'var(--textTertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '14px',
                }}
              >
                <span style={{ color: 'var(--textSecondary)' }}>Chrome • Safari • Edge • Firefox</span>
                <span style={{ color: '#5E5CE6', fontWeight: 600 }}>Live Onboarding</span>
              </div>

              {/* Open Web App Button */}
              <a
                href={downloadConfig.web.url}
                target="_blank"
                rel="noopener noreferrer"
                className="animated-btn shimmer-trigger"
                style={{
                  width: '100%',
                  minHeight: '48px',
                  padding: '14px 24px',
                  fontSize: '1rem',
                  borderRadius: '16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, #5E5CE6 0%, #0A84FF 100%)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 24px -6px rgba(94, 92, 230, 0.45)',
                  cursor: 'pointer',
                  marginBottom: '10px',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <ExternalLink size={18} />
                <span>Open Taskora Web</span>
              </a>

              {/* Copy URL action */}
              <button
                type="button"
                onClick={() => handleCopy(downloadConfig.web.url, 'web')}
                className="copy-url-btn"
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--textTertiary)',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  borderRadius: '8px',
                  transition: 'color 0.2s ease',
                }}
              >
                {copiedKey === 'web' ? (
                  <>
                    <CheckCheck size={14} style={{ color: 'var(--success)' }} />
                    <span style={{ color: 'var(--success)' }}>Web URL copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Web App URL</span>
                  </>
                )}
              </button>
            </div>
          </GlassSurface>
        </div>

        {/* Security and Integrity Banner */}
        <div
          className="reveal-hidden"
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            padding: '16px 24px',
            borderRadius: '20px',
            background: 'var(--pillBackground)',
            border: '1px solid var(--subtleBorder)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
            fontSize: '0.84rem',
            color: 'var(--textTertiary)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={18} style={{ color: 'var(--success)', flexShrink: 0 }} />
            <span>
              All builds are compiled from source and published directly via official GitHub Releases.
            </span>
          </div>
          <a
            href={downloadConfig.github.releasesUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--accent)',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            View GitHub Releases <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Embedded Component Styles */}
      <style>{`
        .spec-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 8px;
          background: var(--pillBackground);
          border: 1px solid var(--subtleBorder);
          font-size: 0.78rem;
          color: var(--textSecondary);
          font-weight: 500;
        }

        .download-platform-card {
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.35s ease;
        }

        .download-platform-card:hover .platform-icon-box {
          transform: scale(1.08) translateY(-2px);
        }

        .copy-url-btn:hover {
          color: var(--textPrimary) !important;
          background: var(--pillBackground) !important;
        }

        .direct-download-btn:active {
          transform: scale(0.97);
        }

        @media (max-width: 520px) {
          .android-actions-grid {
            grid-template-columns: 1fr !important;
          }
          .download-platform-card {
            padding: 26px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

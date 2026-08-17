import React, { useState } from 'react';
import { Monitor, Smartphone, Globe, Download, Check, ExternalLink, Info } from 'lucide-react';
import { GlassSurface } from '../common/GlassSurface';
import { PillBadge } from '../common/PillBadge';
import { AnimatedButton } from '../common/AnimatedButton';
import { DOWNLOAD_TARGETS, APP_METADATA, ReleaseInfo } from '../../config/downloadConfig';

export const DownloadSection: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopyLink = (target: ReleaseInfo) => {
    navigator.clipboard.writeText(window.location.origin + target.url);
    setCopiedLink(target.id);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  const handleDownload = (target: ReleaseInfo) => {
    if (target.type === 'webapp') {
      window.open(target.url, '_blank');
      return;
    }

    // Trigger download of release asset or fallback
    const a = document.createElement('a');
    a.href = target.url;
    a.download = target.fileName || 'Taskora-Release';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="downloads" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Ambient background glow */}
      <div
        className="ambient-glow"
        style={{
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, var(--glowColor) 0%, rgba(94, 92, 230, 0.18) 50%, transparent 80%)',
        }}
      />

      <div className="section-container">
        {/* Section Header */}
        <div className="section-header reveal-hidden">
          <span className="section-tag">Cross-Platform Distribution</span>
          <h2 className="text-gradient-hero">Take Taskora with you.</h2>
          <p>
            Choose your platform and start organizing your day. Free, 100% offline-first, and zero subscriptions.
          </p>

          {/* Release Version Metadata Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '20px',
              padding: '6px 18px',
              borderRadius: '9999px',
              background: 'var(--pillBackground)',
              border: '1px solid var(--subtleBorder)',
              fontSize: '0.86rem',
              color: 'var(--textSecondary)',
            }}
          >
            <span><strong>Latest Release:</strong> v{APP_METADATA.latestVersion}</span>
            <span style={{ opacity: 0.4 }}>•</span>
            <span>{APP_METADATA.releaseMonthYear}</span>
            <span style={{ opacity: 0.4 }}>•</span>
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Production Ready</span>
          </div>
        </div>

        {/* 3 Main Download Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            marginBottom: '40px',
          }}
        >
          {/* Card 1: Windows Desktop */}
          <GlassSurface interactive className="reveal-hidden reveal-delay-1" style={{ padding: '36px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(0, 113, 227, 0.2) 0%, rgba(94, 92, 230, 0.2) 100%)',
                    border: '1px solid rgba(0, 113, 227, 0.3)',
                    color: '#0A84FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Monitor size={28} />
                </div>
                <PillBadge label="Windows 10 / 11" variant="accent" size="sm" />
              </div>

              <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '8px' }}>
                Taskora for Windows
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--textSecondary)', marginBottom: '20px' }}>
                {DOWNLOAD_TARGETS.windows.description}
              </p>

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
                {DOWNLOAD_TARGETS.windows.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem' }}>
                    <Check size={15} style={{ color: '#0A84FF', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--textSecondary)' }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions & File Metadata */}
            <div>
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'var(--pillBackground)',
                  border: '1px solid var(--subtleBorder)',
                  fontSize: '0.78rem',
                  color: 'var(--textTertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                }}
              >
                <span>{DOWNLOAD_TARGETS.windows.fileName}</span>
                <strong>{DOWNLOAD_TARGETS.windows.fileSize} • 64-bit</strong>
              </div>

              <AnimatedButton
                variant="download"
                size="lg"
                icon={<Download size={18} />}
                isDownloadAction
                onClick={() => handleDownload(DOWNLOAD_TARGETS.windows)}
                style={{ width: '100%', marginBottom: '10px' }}
              >
                Download for Windows
              </AnimatedButton>

              <button
                onClick={() => handleCopyLink(DOWNLOAD_TARGETS.windows)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--textTertiary)',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  padding: '6px',
                  textAlign: 'center',
                }}
              >
                {copiedLink === 'windows' ? '✓ Link copied to clipboard!' : 'Copy Direct Download URL'}
              </button>
            </div>
          </GlassSurface>

          {/* Card 2: Android Mobile (APK + AAB) */}
          <GlassSurface interactive className="reveal-hidden reveal-delay-2" style={{ padding: '36px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(48, 209, 88, 0.2) 0%, rgba(10, 132, 255, 0.2) 100%)',
                    border: '1px solid rgba(48, 209, 88, 0.3)',
                    color: '#30D158',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Smartphone size={28} />
                </div>
                <PillBadge label="Android 8.0+" variant="success" size="sm" />
              </div>

              <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '8px' }}>
                Taskora for Android
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--textSecondary)', marginBottom: '20px' }}>
                {DOWNLOAD_TARGETS.androidApk.description}
              </p>

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                {DOWNLOAD_TARGETS.androidApk.highlights.slice(0, 3).map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem' }}>
                    <Check size={15} style={{ color: '#30D158', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--textSecondary)' }}>{h}</span>
                  </div>
                ))}
              </div>

              {/* Important AAB note */}
              <div
                style={{
                  padding: '10px 12px',
                  borderRadius: '12px',
                  background: 'rgba(255, 159, 10, 0.08)',
                  border: '1px solid rgba(255, 159, 10, 0.2)',
                  fontSize: '0.78rem',
                  color: 'var(--textSecondary)',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}
              >
                <Info size={15} style={{ color: '#FF9500', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>APK:</strong> Direct manual install. <strong>AAB:</strong> Google Play deployment bundle.
                </span>
              </div>
            </div>

            {/* Actions */}
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                <AnimatedButton
                  variant="download"
                  size="md"
                  icon={<Download size={16} />}
                  isDownloadAction
                  onClick={() => handleDownload(DOWNLOAD_TARGETS.androidApk)}
                  style={{ width: '100%', background: 'linear-gradient(135deg, #30D158 0%, #0A84FF 100%)' }}
                >
                  APK (42MB)
                </AnimatedButton>

                <AnimatedButton
                  variant="secondary"
                  size="md"
                  onClick={() => handleDownload(DOWNLOAD_TARGETS.androidAab)}
                  style={{ width: '100%' }}
                >
                  AAB Bundle
                </AnimatedButton>
              </div>

              <button
                onClick={() => handleCopyLink(DOWNLOAD_TARGETS.androidApk)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--textTertiary)',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  padding: '6px',
                  textAlign: 'center',
                }}
              >
                {copiedLink === 'android-apk' ? '✓ APK link copied!' : 'Copy Direct APK URL'}
              </button>
            </div>
          </GlassSurface>

          {/* Card 3: Web App */}
          <GlassSurface interactive className="reveal-hidden reveal-delay-3" style={{ padding: '36px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(94, 92, 230, 0.2) 0%, rgba(10, 132, 255, 0.2) 100%)',
                    border: '1px solid rgba(94, 92, 230, 0.3)',
                    color: '#5E5CE6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Globe size={28} />
                </div>
                <PillBadge label="Instant Browser Access" variant="purple" size="sm" />
              </div>

              <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '8px' }}>
                Taskora Web
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--textSecondary)', marginBottom: '20px' }}>
                {DOWNLOAD_TARGETS.web.description}
              </p>

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
                {DOWNLOAD_TARGETS.web.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem' }}>
                    <Check size={15} style={{ color: '#5E5CE6', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--textSecondary)' }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div>
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'var(--pillBackground)',
                  border: '1px solid var(--subtleBorder)',
                  fontSize: '0.78rem',
                  color: 'var(--textTertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                }}
              >
                <span>Zero Installation Required</span>
                <strong>Chrome / Safari / Firefox</strong>
              </div>

              <AnimatedButton
                variant="primary"
                size="lg"
                icon={<ExternalLink size={17} />}
                onClick={() => handleDownload(DOWNLOAD_TARGETS.web)}
                style={{ width: '100%', marginBottom: '10px' }}
              >
                Open Taskora Web
              </AnimatedButton>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(DOWNLOAD_TARGETS.web.url);
                  setCopiedLink('web');
                  setTimeout(() => setCopiedLink(null), 2500);
                }}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--textTertiary)',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  padding: '6px',
                  textAlign: 'center',
                }}
              >
                {copiedLink === 'web' ? '✓ Web URL copied!' : 'Copy Web App Link'}
              </button>
            </div>
          </GlassSurface>
        </div>
      </div>
    </section>
  );
};

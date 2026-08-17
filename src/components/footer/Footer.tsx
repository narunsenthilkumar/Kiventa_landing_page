import React from 'react';
import { Monitor, Smartphone, Globe, ExternalLink } from 'lucide-react';
import { APP_METADATA, downloadConfig } from '../../config/downloadConfig';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--subtleBorder)',
        background: 'var(--cardBackground)',
        paddingTop: '70px',
        paddingBottom: '40px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="section-container" style={{ paddingTop: 0, paddingBottom: 0 }}>
        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
            gap: '40px',
            marginBottom: '60px',
          }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src="/assets/branding/taskora-favicon.png"
                alt="Taskora"
                style={{ width: '32px', height: '32px', borderRadius: '8px' }}
              />
              <span style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
                {APP_METADATA.name}
              </span>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--textSecondary)', maxWidth: '320px', lineHeight: 1.6 }}>
              {APP_METADATA.tagline}
            </p>

            <div style={{ fontSize: '0.84rem', color: 'var(--textTertiary)', maxWidth: '300px' }}>
              {APP_METADATA.supportingLine}
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: '9999px',
                background: 'var(--pillBackground)',
                border: '1px solid var(--subtleBorder)',
                fontSize: '0.78rem',
                color: 'var(--success)',
                fontWeight: 600,
                width: 'fit-content',
                marginTop: '8px',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#30D158', display: 'inline-block' }} />
              <span>Offline-First • Zero Cloud Server Dependency</span>
            </div>
          </div>

          {/* Column 1: Product */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--textPrimary)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Product
            </h4>
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }} style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', transition: 'color 0.2s' }}>
              Overview
            </a>
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollTo('features'); }} style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', transition: 'color 0.2s' }}>
              Features
            </a>
            <a href="#smart" onClick={(e) => { e.preventDefault(); scrollTo('smart'); }} style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', transition: 'color 0.2s' }}>
              Smart AI
            </a>
            <a href="#focus" onClick={(e) => { e.preventDefault(); scrollTo('focus'); }} style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', transition: 'color 0.2s' }}>
              Focus Mode
            </a>
            <a href="#calendar" onClick={(e) => { e.preventDefault(); scrollTo('calendar'); }} style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', transition: 'color 0.2s' }}>
              Calendar
            </a>
          </div>

          {/* Column 2: Architecture */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--textPrimary)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Architecture
            </h4>
            <a href="#sync" onClick={(e) => { e.preventDefault(); scrollTo('sync'); }} style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', transition: 'color 0.2s' }}>
              Cross-Device Sync
            </a>
            <a href="#offline" onClick={(e) => { e.preventDefault(); scrollTo('offline'); }} style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', transition: 'color 0.2s' }}>
              Offline-First Engine
            </a>
            <a href="#backup" onClick={(e) => { e.preventDefault(); scrollTo('backup'); }} style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', transition: 'color 0.2s' }}>
              Backup & Export
            </a>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); scrollTo('privacy'); }} style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', transition: 'color 0.2s' }}>
              Security & Privacy
            </a>
          </div>

          {/* Column 3: Downloads */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--textPrimary)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Downloads
            </h4>
            <a
              href={downloadConfig.windows.url}
              target="_blank"
              rel="noopener noreferrer"
              download={downloadConfig.windows.fileName}
              style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Monitor size={14} style={{ color: 'var(--accent)' }} /> Windows
            </a>
            <a
              href={downloadConfig.android.apk.url}
              target="_blank"
              rel="noopener noreferrer"
              download={downloadConfig.android.apk.fileName}
              style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Smartphone size={14} style={{ color: 'var(--success)' }} /> Android APK
            </a>
            <a
              href={downloadConfig.android.aab.url}
              target="_blank"
              rel="noopener noreferrer"
              download={downloadConfig.android.aab.fileName}
              style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Smartphone size={14} style={{ color: '#FF9500' }} /> Android AAB
            </a>
            <a
              href={downloadConfig.web.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Globe size={14} style={{ color: '#5E5CE6' }} /> Web App
            </a>
          </div>

          {/* Column 4: Resources & GitHub */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--textPrimary)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Support
            </h4>
            <a href="#installation" onClick={(e) => { e.preventDefault(); scrollTo('installation'); }} style={{ fontSize: '0.88rem', color: 'var(--textSecondary)' }}>
              Installation Guide
            </a>
            <a
              href={downloadConfig.github.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <span>GitHub Releases</span> <ExternalLink size={12} />
            </a>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); scrollTo('privacy'); }} style={{ fontSize: '0.88rem', color: 'var(--textSecondary)' }}>
              Privacy Statement
            </a>
            <a href="mailto:support@taskora.app" style={{ fontSize: '0.88rem', color: 'var(--textSecondary)' }}>
              Contact Team
            </a>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div
          style={{
            borderTop: '1px solid var(--subtleBorder)',
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.84rem',
            color: 'var(--textTertiary)',
          }}
        >
          <div>{APP_METADATA.copyright}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span>Apple HIG Spatial Design</span>
            <span>•</span>
            <span>Version {downloadConfig.version}</span>
            <span>•</span>
            <span>August 2026</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

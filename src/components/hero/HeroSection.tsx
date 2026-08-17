import React from 'react';
import { Download, Sparkles, Monitor, Smartphone, Globe, ShieldCheck, ArrowRight } from 'lucide-react';
import { PillBadge } from '../common/PillBadge';
import { ParallaxContainer } from './ParallaxContainer';
import { HeroAppPreview } from './HeroAppPreview';
import { downloadConfig } from '../../config/downloadConfig';
import { usePlatform } from '../../hooks/usePlatform';

export const HeroSection: React.FC = () => {
  const platformInfo = usePlatform();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '130px',
        paddingBottom: '80px',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glows */}
      <div
        className="ambient-glow"
        style={{
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(circle, var(--glowColor) 0%, rgba(94, 92, 230, 0.15) 50%, transparent 80%)',
        }}
      />
      <div
        className="ambient-glow"
        style={{
          top: '40%',
          right: '5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(48, 209, 88, 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="section-container" style={{ textAlign: 'center', paddingTop: 0, paddingBottom: 0 }}>
        {/* Entrance Stage 1: Brand pill badge */}
        <div style={{ marginBottom: '20px', animation: 'heroRise 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
          <PillBadge
            label="Taskora 1.0 — 100% Offline-First Productivity"
            variant="accent"
            icon={<Sparkles size={14} />}
            dot
            pulse
          />
        </div>

        {/* Entrance Stage 2: Hero Headline */}
        <h1
          style={{
            fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.08,
            maxWidth: '900px',
            margin: '0 auto 22px auto',
            animation: 'heroRise 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.08s backwards',
          }}
          className="text-gradient-hero"
        >
          Your day.{' '}
          <span className="text-gradient-accent">Under control.</span>
        </h1>

        {/* Entrance Stage 3: Subheading */}
        <p
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            lineHeight: 1.6,
            maxWidth: '740px',
            margin: '0 auto 32px auto',
            color: 'var(--textSecondary)',
            animation: 'heroRise 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.16s backwards',
          }}
        >
          Taskora brings tasks, projects, focus sessions, smart planning, reminders, and productivity insights into one beautifully designed workspace.
        </p>

        {/* Entrance Stage 4: Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            marginBottom: '18px',
            animation: 'heroRise 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.24s backwards',
          }}
        >
          {/* Primary CTA (Direct download or OS-specific action) */}
          <a
            href={platformInfo.primaryAction.url}
            target={platformInfo.primaryAction.isExternalDownload ? '_blank' : '_blank'}
            rel="noopener noreferrer"
            download={platformInfo.isWindows ? downloadConfig.windows.fileName : platformInfo.isAndroid ? downloadConfig.android.apk.fileName : undefined}
            className="animated-btn shimmer-trigger"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'none',
              padding: '15px 32px',
              fontSize: '1.05rem',
              borderRadius: '18px',
              background: 'linear-gradient(135deg, #0A84FF 0%, #5E5CE6 100%)',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 12px 30px -8px rgba(10, 132, 255, 0.5)',
              minHeight: '48px',
              transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <Download size={18} />
            <span>{platformInfo.primaryAction.label}</span>
          </a>

          {/* Secondary CTA */}
          <a
            href={platformInfo.secondaryAction.url}
            target={platformInfo.secondaryAction.isExternalDownload ? '_blank' : '_blank'}
            rel="noopener noreferrer"
            download={platformInfo.isAndroid ? downloadConfig.windows.fileName : downloadConfig.android.apk.fileName}
            className="animated-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'none',
              padding: '15px 30px',
              fontSize: '1.05rem',
              borderRadius: '18px',
              background: 'var(--pillBackground)',
              color: 'var(--textPrimary)',
              border: '1px solid var(--glassBorder)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              minHeight: '48px',
              transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <Smartphone size={18} style={{ color: 'var(--success)' }} />
            <span>{platformInfo.secondaryAction.label}</span>
          </a>
        </div>

        {/* Web App Tertiary Link */}
        <div
          style={{
            marginBottom: '32px',
            animation: 'heroRise 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.28s backwards',
          }}
        >
          <a
            href={downloadConfig.web.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.92rem',
              color: 'var(--textSecondary)',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'transparent',
              transition: 'color 0.2s ease',
              fontWeight: 500,
            }}
            className="hero-web-link"
          >
            <span>Or use Taskora Web</span>
            <ArrowRight size={14} style={{ color: '#5E5CE6' }} />
          </a>
        </div>

        {/* Entrance Stage 5: Platform Availability Indicator */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '16px',
            padding: '8px 20px',
            borderRadius: '9999px',
            background: 'var(--pillBackground)',
            border: '1px solid var(--subtleBorder)',
            fontSize: '0.86rem',
            color: 'var(--textTertiary)',
            marginBottom: '56px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            animation: 'heroRise 1s cubic-bezier(0.16, 1, 0.3, 1) 0.32s backwards',
          }}
        >
          <button
            onClick={() => scrollTo('downloads')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--textSecondary)',
              fontSize: 'inherit',
            }}
          >
            <Monitor size={15} style={{ color: '#007AFF' }} /> Windows Desktop
          </button>
          <span style={{ opacity: 0.3 }}>•</span>
          <button
            onClick={() => scrollTo('downloads')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--textSecondary)',
              fontSize: 'inherit',
            }}
          >
            <Smartphone size={15} style={{ color: '#30D158' }} /> Android APK / AAB
          </button>
          <span style={{ opacity: 0.3 }}>•</span>
          <a
            href={downloadConfig.web.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--textSecondary)',
            }}
          >
            <Globe size={15} style={{ color: '#5E5CE6' }} /> Web Browser
          </a>
          <span style={{ opacity: 0.3 }}>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--textTertiary)' }}>
            <ShieldCheck size={14} style={{ color: 'var(--success)' }} /> Zero Cloud Tracking
          </span>
        </div>

        {/* Entrance Stage 6: Product Preview with 3D Parallax */}
        <div
          style={{
            animation: 'heroRise 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.38s backwards',
            maxWidth: '1080px',
            margin: '0 auto',
          }}
        >
          <ParallaxContainer maxTilt={4} perspective={1400}>
            <HeroAppPreview />
          </ParallaxContainer>
        </div>
      </div>

      <style>{`
        .hero-web-link:hover {
          color: var(--textPrimary) !important;
        }
      `}</style>
    </section>
  );
};

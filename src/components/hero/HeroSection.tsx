import React from 'react';
import { Download, Compass, Sparkles, Monitor, Smartphone, Globe, ShieldCheck } from 'lucide-react';
import { AnimatedButton } from '../common/AnimatedButton';
import { PillBadge } from '../common/PillBadge';
import { ParallaxContainer } from './ParallaxContainer';
import { HeroAppPreview } from './HeroAppPreview';

export const HeroSection: React.FC = () => {
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
            marginBottom: '36px',
            animation: 'heroRise 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.24s backwards',
          }}
        >
          <AnimatedButton
            variant="download"
            size="lg"
            icon={<Download size={18} />}
            isDownloadAction
            onClick={() => scrollTo('downloads')}
          >
            Download Taskora
          </AnimatedButton>

          <AnimatedButton
            variant="secondary"
            size="lg"
            icon={<Compass size={18} />}
            onClick={() => scrollTo('features')}
          >
            Explore Features
          </AnimatedButton>
        </div>

        {/* Entrance Stage 5: Platform Availability Indicator */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '16px',
            padding: '8px 18px',
            borderRadius: '9999px',
            background: 'var(--pillBackground)',
            border: '1px solid var(--subtleBorder)',
            fontSize: '0.86rem',
            color: 'var(--textTertiary)',
            marginBottom: '56px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            animation: 'heroRise 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s backwards',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--textSecondary)' }}>
            <Monitor size={15} style={{ color: '#007AFF' }} /> Windows Desktop
          </span>
          <span style={{ opacity: 0.3 }}>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--textSecondary)' }}>
            <Smartphone size={15} style={{ color: '#30D158' }} /> Android APK / AAB
          </span>
          <span style={{ opacity: 0.3 }}>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--textSecondary)' }}>
            <Globe size={15} style={{ color: '#5E5CE6' }} /> Web Browser
          </span>
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
    </section>
  );
};

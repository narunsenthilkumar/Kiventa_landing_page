import React, { useState, useEffect } from 'react';
import { 
  Wifi, 
  Smartphone, 
  Laptop, 
  ShieldCheck, 
  Zap, 
  Share2, 
  Radio, 
  CheckCircle2, 
  ArrowRight,
  RotateCw
} from 'lucide-react';
import { GlassSurface } from '../common/GlassSurface';
import { PillBadge } from '../common/PillBadge';

type SyncPhase = 'detected' | 'ready' | 'syncing' | 'synced';

export const NearbySyncSection: React.FC = () => {
  const [phase, setPhase] = useState<SyncPhase>('synced');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Status mapping
  const statusLabels: Record<SyncPhase, { label: string; variant: 'accent' | 'warning' | 'purple' | 'success'; icon: React.ReactNode }> = {
    detected: {
      label: 'Device detected',
      variant: 'accent',
      icon: <Radio size={14} className="spin-animation" />,
    },
    ready: {
      label: 'Ready to share',
      variant: 'warning',
      icon: <Wifi size={14} />,
    },
    syncing: {
      label: 'Syncing tasks',
      variant: 'purple',
      icon: <RotateCw size={14} className="spin-animation" />,
    },
    synced: {
      label: 'Tasks synced',
      variant: 'success',
      icon: <CheckCircle2 size={14} />,
    },
  };

  // Cycle animation states
  useEffect(() => {
    if (!isAutoPlaying) return;

    const sequence: SyncPhase[] = ['detected', 'ready', 'syncing', 'synced'];
    let currentIdx = sequence.indexOf(phase);

    const timer = setTimeout(() => {
      const nextIdx = (currentIdx + 1) % sequence.length;
      setPhase(sequence[nextIdx]);
    }, phase === 'synced' ? 4000 : 1800);

    return () => clearTimeout(timer);
  }, [phase, isAutoPlaying]);

  const handleSimulateBump = () => {
    setIsAutoPlaying(false);
    setPhase('detected');
    setTimeout(() => {
      setPhase('ready');
      setTimeout(() => {
        setPhase('syncing');
        setTimeout(() => {
          setPhase('synced');
          setTimeout(() => setIsAutoPlaying(true), 3000);
        }, 1600);
      }, 1400);
    }, 1200);
  };

  return (
    <section
      id="nearby-sync"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, transparent 0%, rgba(10, 132, 255, 0.04) 50%, transparent 100%)',
      }}
    >
      {/* Ambient background glow */}
      <div
        className="ambient-glow"
        style={{
          top: '20%',
          right: '5%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(94, 92, 230, 0.14) 0%, transparent 70%)',
        }}
      />

      <div className="section-container">
        {/* Section Header */}
        <div className="section-header reveal-hidden">
          <span className="section-tag">Proximity Intelligence</span>
          <h2 className="text-gradient-hero">Tasks, Shared in a Bump.</h2>
          <p>
            Share and synchronize your tasks with nearby devices using KIVENTA's Nearby Sync experience.
          </p>
        </div>

        {/* 2-Column Showcase Layout */}
        <div className="nearby-sync-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '48px', alignItems: 'center', maxWidth: '1120px', margin: '0 auto' }}>
          {/* Left Column: Descriptions & Benefits */}
          <div className="reveal-hidden" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <PillBadge label="Zero NFC / LiDAR Dependency" variant="accent" size="sm" dot />
                <PillBadge label="P2P Proximity" variant="success" size="sm" />
              </div>
              <h3 style={{ fontSize: '1.85rem', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.25, marginBottom: '14px' }}>
                Seamless task handoff across devices right in front of you.
              </h3>
              <p style={{ fontSize: '0.96rem', color: 'var(--textSecondary)', lineHeight: 1.6 }}>
                Need to transfer today's sprint agenda from your phone to a colleague's laptop or your desktop workstation? Simply bring your devices into proximity. KIVENTA automatically negotiates a direct encrypted channel without requiring cloud relays, pairing PINs, NFC tags, or specialized LiDAR sensors.
              </p>
            </div>

            {/* 4 Feature Benefits */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '12px',
                    background: 'rgba(10, 132, 255, 0.12)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Zap size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--textPrimary)' }}>
                    Zero Setup & Universal Discovery
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: 'var(--textSecondary)', marginTop: '2px', lineHeight: 1.5 }}>
                    Uses local peer-to-peer radio discovery. No account sign-in or router configurations needed.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '12px',
                    background: 'rgba(48, 209, 88, 0.12)',
                    color: 'var(--success)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Wifi size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--textPrimary)' }}>
                    No Hardware Restrictions
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: 'var(--textSecondary)', marginTop: '2px', lineHeight: 1.5 }}>
                    Operates without demanding NFC touch or optical LiDAR. Compatible with standard Wi-Fi and Bluetooth LE-enabled hardware.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '12px',
                    background: 'rgba(94, 92, 230, 0.12)',
                    color: '#5E5CE6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Share2 size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--textPrimary)' }}>
                    Instant Task & Checklist Beam
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: 'var(--textSecondary)', marginTop: '2px', lineHeight: 1.5 }}>
                    Beam single focus tasks, detailed subtask checklists, and priority tags with low latency.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '12px',
                    background: 'rgba(255, 159, 10, 0.12)',
                    color: 'var(--warning)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--textPrimary)' }}>
                    Deterministic Lamport Clock Merging
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: 'var(--textSecondary)', marginTop: '2px', lineHeight: 1.5 }}>
                    Integrates directly with KIVENTA's local conflict-free resolution architecture to eliminate overwritten data.
                  </p>
                </div>
              </div>
            </div>

            {/* Trigger / CTA Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginTop: '6px' }}>
              <button
                type="button"
                id="simulate-bump-btn"
                onClick={handleSimulateBump}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  background: 'var(--accent)',
                  color: '#FFFFFF',
                  border: 'none',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px -6px rgba(10, 132, 255, 0.45)',
                  transition: 'all 0.18s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <RotateCw size={16} />
                <span>Simulate Nearby Bump</span>
              </button>

              <a
                href="#downloads"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '12px 20px',
                  borderRadius: '9999px',
                  background: 'var(--pillBackground)',
                  border: '1px solid var(--subtleBorder)',
                  color: 'var(--textPrimary)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.18s ease',
                }}
              >
                <span>Get KIVENTA</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Realistic Interactive Device-to-Device Stage */}
          <GlassSurface
            className="reveal-hidden reveal-delay-2"
            style={{
              padding: '36px 28px',
              borderRadius: '32px',
              position: 'relative',
              overflow: 'hidden',
              background: 'var(--cardBackground)',
              border: '1px solid var(--glassBorder)',
              boxShadow: 'var(--glassShadow)',
            }}
          >
            {/* Top Status Bar with Connection Pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '32px',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--textTertiary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Nearby Proximity Channel
                </span>
              </div>

              {/* Dynamic Status Indicator */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  background: 'var(--pillBackground)',
                  border: '1px solid var(--subtleBorder)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color:
                    statusLabels[phase].variant === 'success'
                      ? 'var(--success)'
                      : statusLabels[phase].variant === 'warning'
                      ? 'var(--warning)'
                      : statusLabels[phase].variant === 'purple'
                      ? '#5E5CE6'
                      : 'var(--accent)',
                }}
              >
                {statusLabels[phase].icon}
                <span>{statusLabels[phase].label}</span>
              </div>
            </div>

            {/* Two Device Representation Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                alignItems: 'center',
                gap: '16px',
                position: 'relative',
                marginBottom: '28px',
              }}
              className="device-stage-row"
            >
              {/* Device A (Sender / Mobile) */}
              <div
                style={{
                  padding: '20px 16px',
                  borderRadius: '20px',
                  background: 'var(--glassSurface)',
                  border: phase === 'detected' || phase === 'ready' || phase === 'syncing'
                    ? '1px solid var(--glassBorderHover)'
                    : '1px solid var(--subtleBorder)',
                  boxShadow: phase === 'syncing'
                    ? '0 10px 30px -5px rgba(10, 132, 255, 0.3)'
                    : 'none',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: 'rgba(10, 132, 255, 0.15)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Smartphone size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.94rem' }}>Device A</div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--textTertiary)' }}>KIVENTA Mobile</div>
                </div>
                <PillBadge
                  label={phase === 'synced' ? 'Source • Synced' : 'Broadcasting'}
                  size="sm"
                  variant={phase === 'synced' ? 'success' : 'accent'}
                  dot
                />
              </div>

              {/* Middle Sync / Connection Animation Node */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  padding: '0 8px',
                }}
              >
                {/* Radio Pulse Waves */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'var(--pillBackground)',
                    border: '1px solid var(--glassBorderHover)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    position: 'relative',
                  }}
                >
                  <Share2 size={20} className={phase === 'syncing' ? 'spin-animation' : ''} />
                  {/* Subtle pulsing ring */}
                  {(phase === 'ready' || phase === 'syncing') && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: '-6px',
                        borderRadius: '50%',
                        border: '2px solid var(--accent)',
                        opacity: 0.5,
                        animation: 'pulseRing 1.5s infinite ease-out',
                      }}
                    />
                  )}
                </div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'var(--textTertiary)',
                    marginTop: '8px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  Nearby Sync
                </span>
              </div>

              {/* Device B (Receiver / Laptop) */}
              <div
                style={{
                  padding: '20px 16px',
                  borderRadius: '20px',
                  background: 'var(--glassSurface)',
                  border: phase === 'synced'
                    ? '1px solid rgba(48, 209, 88, 0.4)'
                    : '1px solid var(--subtleBorder)',
                  boxShadow: phase === 'synced'
                    ? '0 10px 30px -5px rgba(48, 209, 88, 0.25)'
                    : 'none',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: phase === 'synced' ? 'rgba(48, 209, 88, 0.15)' : 'rgba(94, 92, 230, 0.15)',
                    color: phase === 'synced' ? 'var(--success)' : '#5E5CE6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Laptop size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.94rem' }}>Device B</div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--textTertiary)' }}>KIVENTA Desktop</div>
                </div>
                <PillBadge
                  label={phase === 'synced' ? 'Received • Synced' : phase === 'syncing' ? 'Receiving...' : 'Proximity Peer'}
                  size="sm"
                  variant={phase === 'synced' ? 'success' : 'purple'}
                  dot
                />
              </div>
            </div>

            {/* Animated Task Moving Card */}
            <div
              style={{
                borderRadius: '16px',
                background: 'var(--pillBackground)',
                border: '1px solid var(--subtleBorder)',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                transform:
                  phase === 'detected'
                    ? 'translateX(-6px)'
                    : phase === 'syncing'
                    ? 'translateX(0px) scale(1.02)'
                    : phase === 'synced'
                    ? 'translateX(6px)'
                    : 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '6px',
                    border: phase === 'synced' ? 'none' : '2px solid var(--textTertiary)',
                    background: phase === 'synced' ? 'var(--success)' : 'transparent',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {phase === 'synced' && <CheckCircle2 size={16} />}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--textPrimary)' }}>
                    🚀 Finalize Q4 Product Architecture
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--textTertiary)' }}>
                    Tag: #Sprint • 4 Subtasks • High Priority
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <PillBadge
                  label={phase === 'synced' ? 'Instant Merged' : phase === 'syncing' ? 'In Flight' : 'Staged'}
                  size="sm"
                  variant={phase === 'synced' ? 'success' : 'accent'}
                />
              </div>
            </div>

            {/* Protocol Security Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '20px',
                paddingTop: '16px',
                borderTop: '1px solid var(--subtleBorder)',
                fontSize: '0.78rem',
                color: 'var(--textTertiary)',
              }}
            >
              <span>Encrypted via Ephemeral Curve25519</span>
              <span>Sub-50ms Local Transfer</span>
            </div>
          </GlassSurface>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .nearby-sync-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 520px) {
          .device-stage-row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

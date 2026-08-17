import React from 'react';
import { Lock, HardDrive, KeyRound, EyeOff, FileSpreadsheet, Ban } from 'lucide-react';
import { GlassSurface } from '../common/GlassSurface';

export const SecuritySection: React.FC = () => {
  const pillars = [
    {
      title: '100% Local-First Storage',
      desc: 'All tasks, notes, categories, and timers are saved directly on your device using native local storage engines.',
      icon: <HardDrive size={20} />,
      color: 'var(--accent)',
    },
    {
      title: 'Zero Third-Party Cloud Audio',
      desc: 'Voice tasks and natural language queries execute locally on your physical hardware without uploading sound recordings to external APIs.',
      icon: <Lock size={20} />,
      color: '#30D158',
    },
    {
      title: 'Cryptographic Peer Pairing',
      desc: 'Cross-device synchronization requires explicit time-bound 6-digit verification codes and SHA-256 payload integrity checksums.',
      icon: <KeyRound size={20} />,
      color: '#5E5CE6',
    },
    {
      title: 'No Trackers or Behavioral Ads',
      desc: 'Taskora contains zero analytics beacons, advertising SDKs, or data brokers. Your productivity telemetry stays strictly confidential.',
      icon: <EyeOff size={20} />,
      color: '#FF9500',
    },
    {
      title: 'Instant Device Revocation',
      desc: 'Permanently revoke access for lost or old devices in one click. Blocked devices can never synchronize mutations again.',
      icon: <Ban size={20} />,
      color: '#FF453A',
    },
    {
      title: 'Unrestricted Data Portability',
      desc: 'Export your complete workspace as atomic JSON snapshots or human-readable CSV spreadsheets whenever you choose.',
      icon: <FileSpreadsheet size={20} />,
      color: '#0A84FF',
    },
  ];

  return (
    <section id="privacy" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header reveal-hidden">
          <span className="section-tag">Security & Sovereignty</span>
          <h2 className="text-gradient-hero">Your productivity belongs to you.</h2>
          <p>
            We believe your daily thoughts, schedules, and projects are private. Taskora is architected from the ground up with zero cloud dependencies.
          </p>
        </div>

        {/* 6 Security Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
            maxWidth: '1080px',
            margin: '0 auto',
          }}
        >
          {pillars.map((pillar, idx) => (
            <GlassSurface
              key={idx}
              interactive
              className={`reveal-hidden reveal-delay-${(idx % 3) + 1}`}
              style={{ padding: '28px 24px' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'var(--pillBackground)',
                    border: '1px solid var(--subtleBorder)',
                    color: pillar.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {pillar.icon}
                </div>

                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '6px' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', lineHeight: 1.5 }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </GlassSurface>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Monitor, Smartphone, Globe, KeyRound, ShieldCheck, GitMerge } from 'lucide-react';
import { GlassSurface } from '../common/GlassSurface';
import { PillBadge } from '../common/PillBadge';

export const SyncSection: React.FC = () => {

  return (
    <section
      id="sync"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, transparent 0%, rgba(94, 92, 230, 0.04) 50%, transparent 100%)',
      }}
    >
      {/* Ambient glow */}
      <div
        className="ambient-glow"
        style={{
          top: '30%',
          right: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(10, 132, 255, 0.16) 0%, transparent 70%)',
        }}
      />

      <div className="section-container">
        {/* Section Header */}
        <div className="section-header reveal-hidden">
          <span className="section-tag">Zero-Cloud Synchronization</span>
          <h2 className="text-gradient-hero">Your tasks. Everywhere.</h2>
          <p>
            Keep your Taskora workspace perfectly consistent across Windows, Android, and Web with cryptographic local pairing and deterministic conflict resolution.
          </p>
        </div>

        {/* Animated 3-Device Network Stage */}
        <GlassSurface
          className="reveal-hidden"
          style={{
            maxWidth: '1020px',
            margin: '0 auto 40px auto',
            padding: '50px 30px',
            borderRadius: '32px',
          }}
        >
          {/* 3 Devices Visual Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
              position: 'relative',
              marginBottom: '40px',
            }}
          >
            {/* Device 1: Windows Desktop */}
            <div
              style={{
                padding: '24px',
                borderRadius: '20px',
                background: 'var(--cardBackground)',
                border: '1px solid var(--glassBorderHover)',
                boxShadow: '0 12px 30px -8px rgba(0, 122, 255, 0.25)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.2) 0%, rgba(94, 92, 230, 0.2) 100%)',
                  color: '#0A84FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Monitor size={26} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Windows Desktop</h4>
                <div style={{ fontSize: '0.8rem', color: 'var(--textTertiary)' }}>Electron SQLite / Async Store</div>
              </div>
              <PillBadge label="Host Device • LWW" size="sm" variant="accent" dot pulse />
            </div>

            {/* Device 2: Android Phone */}
            <div
              style={{
                padding: '24px',
                borderRadius: '20px',
                background: 'var(--cardBackground)',
                border: '1px solid var(--glassBorderHover)',
                boxShadow: '0 12px 30px -8px rgba(48, 209, 88, 0.25)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(48, 209, 88, 0.2) 0%, rgba(10, 132, 255, 0.2) 100%)',
                  color: '#30D158',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Smartphone size={26} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Android Mobile</h4>
                <div style={{ fontSize: '0.8rem', color: 'var(--textTertiary)' }}>Encrypted Local Storage</div>
              </div>
              <PillBadge label="Paired Peer • Active" size="sm" variant="success" dot pulse />
            </div>

            {/* Device 3: Web Browser */}
            <div
              style={{
                padding: '24px',
                borderRadius: '20px',
                background: 'var(--cardBackground)',
                border: '1px solid var(--glassBorderHover)',
                boxShadow: '0 12px 30px -8px rgba(94, 92, 230, 0.25)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(94, 92, 230, 0.2) 0%, rgba(10, 132, 255, 0.2) 100%)',
                  color: '#5E5CE6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Globe size={26} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Web Browser</h4>
                <div style={{ fontSize: '0.8rem', color: 'var(--textTertiary)' }}>IndexedDB Persistence</div>
              </div>
              <PillBadge label="Client PWA • Synced" size="sm" variant="purple" dot pulse />
            </div>
          </div>

          {/* Sync Protocol Architecture Pills */}
          <div
            style={{
              padding: '20px',
              borderRadius: '20px',
              background: 'var(--pillBackground)',
              border: '1px solid var(--subtleBorder)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: '16px',
              fontSize: '0.86rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <KeyRound size={16} style={{ color: 'var(--accent)' }} />
              <span><strong>6-Digit PIN Pairing</strong> (5-min time window)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <GitMerge size={16} style={{ color: '#5E5CE6' }} />
              <span><strong>Lamport Logical Clocks</strong> (Deterministic LWW)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} style={{ color: 'var(--success)' }} />
              <span><strong>Tombstone Protection</strong> (Prevents resurrection)</span>
            </div>
          </div>
        </GlassSurface>

        {/* 4 Feature Deep Dives */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          <GlassSurface interactive className="reveal-hidden reveal-delay-1" style={{ padding: '24px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>Explicit Device Authorization</h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--textSecondary)', lineHeight: 1.5 }}>
              Devices must be explicitly paired via cryptographic verification. Unpaired devices are rejected with zero access to your task database.
            </p>
          </GlassSurface>

          <GlassSurface interactive className="reveal-hidden reveal-delay-2" style={{ padding: '24px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>Persistent Revocation</h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--textSecondary)', lineHeight: 1.5 }}>
              Disconnect a lost or decommissioned device with one tap. Its authorization key is permanently blacklisted until re-verified.
            </p>
          </GlassSurface>

          <GlassSurface interactive className="reveal-hidden reveal-delay-3" style={{ padding: '24px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>Subtask & Tag Union</h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--textSecondary)', lineHeight: 1.5 }}>
              Edits made simultaneously across multiple offline devices preserve created tags and subtask states through mathematical union logic.
            </p>
          </GlassSurface>

          <GlassSurface interactive className="reveal-hidden reveal-delay-4" style={{ padding: '24px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>Air-Gapped Mutation Packets</h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--textSecondary)', lineHeight: 1.5 }}>
              Optionally export and import raw encrypted mutation JSON packets manually across completely air-gapped secure workstations.
            </p>
          </GlassSurface>
        </div>
      </div>
    </section>
  );
};

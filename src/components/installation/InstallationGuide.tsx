import React, { useState } from 'react';
import { Monitor, Smartphone, Globe, AlertTriangle } from 'lucide-react';
import { GlassSurface } from '../common/GlassSurface';
import { PillBadge } from '../common/PillBadge';

export const InstallationGuide: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<'windows' | 'android' | 'web'>('windows');

  return (
    <section id="installation" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header reveal-hidden">
          <span className="section-tag">Quick Start</span>
          <h2 className="text-gradient-hero">Ready in minutes.</h2>
          <p>
            Simple, transparent installation with zero telemetry, zero adware, and no required account creation.
          </p>

          {/* Platform Tab Switcher */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '32px',
            }}
          >
            <button
              onClick={() => setActivePlatform('windows')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: activePlatform === 'windows' ? 'var(--accent)' : 'var(--glassBorder)',
                background: activePlatform === 'windows' ? 'var(--accentSoft)' : 'var(--pillBackground)',
                color: activePlatform === 'windows' ? 'var(--accent)' : 'var(--textSecondary)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <Monitor size={16} /> Windows
            </button>

            <button
              onClick={() => setActivePlatform('android')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: activePlatform === 'android' ? 'var(--success)' : 'var(--glassBorder)',
                background: activePlatform === 'android' ? 'rgba(48, 209, 88, 0.12)' : 'var(--pillBackground)',
                color: activePlatform === 'android' ? 'var(--success)' : 'var(--textSecondary)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <Smartphone size={16} /> Android (APK / AAB)
            </button>

            <button
              onClick={() => setActivePlatform('web')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: activePlatform === 'web' ? '#5E5CE6' : 'var(--glassBorder)',
                background: activePlatform === 'web' ? 'rgba(94, 92, 230, 0.12)' : 'var(--pillBackground)',
                color: activePlatform === 'web' ? '#5E5CE6' : 'var(--textSecondary)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <Globe size={16} /> Web PWA
            </button>
          </div>
        </div>

        {/* Tab Content Panels */}
        <GlassSurface
          className="reveal-hidden"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '40px 32px',
            borderRadius: '28px',
          }}
        >
          {activePlatform === 'windows' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Windows Setup Instructions</h3>
                <PillBadge label="Architecture: 64-bit (x64)" size="sm" variant="accent" />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
                {[
                  { step: '1', title: 'Download Installer', detail: 'Click "Download for Windows" to get Taskora-Setup.exe' },
                  { step: '2', title: 'Run Setup', detail: 'Double click the downloaded installer executable' },
                  { step: '3', title: 'Follow Wizard', detail: 'Choose standard or portable destination folder' },
                  { step: '4', title: 'Launch & Work', detail: 'Taskora opens instantly with offline local database' },
                ].map((item) => (
                  <div
                    key={item.step}
                    style={{
                      background: 'var(--pillBackground)',
                      padding: '18px 16px',
                      borderRadius: '16px',
                      border: '1px solid var(--subtleBorder)',
                    }}
                  >
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '8px',
                        background: 'var(--accentSoft)',
                        color: 'var(--accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.86rem',
                        marginBottom: '10px',
                      }}
                    >
                      {item.step}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.92rem', marginBottom: '4px' }}>{item.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--textSecondary)' }}>{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activePlatform === 'android' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Android Direct APK & AAB Guide</h3>
                <PillBadge label="Minimum OS: Android 8.0+" size="sm" variant="success" />
              </div>

              {/* Steps */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
                {[
                  { step: '1', title: 'Download APK', detail: 'Download Taskora.apk directly to your Android phone' },
                  { step: '2', title: 'Open File', detail: 'Tap the download notification or open via Files app' },
                  { step: '3', title: 'Grant Permission', detail: 'Allow "Install unknown apps" if prompted by Android' },
                  { step: '4', title: 'Install & Enjoy', detail: 'Complete setup and enjoy tactile haptics & gestures' },
                ].map((item) => (
                  <div
                    key={item.step}
                    style={{
                      background: 'var(--pillBackground)',
                      padding: '18px 16px',
                      borderRadius: '16px',
                      border: '1px solid var(--subtleBorder)',
                    }}
                  >
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '8px',
                        background: 'rgba(48, 209, 88, 0.15)',
                        color: 'var(--success)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.86rem',
                        marginBottom: '10px',
                      }}
                    >
                      {item.step}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.92rem', marginBottom: '4px' }}>{item.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--textSecondary)' }}>{item.detail}</div>
                  </div>
                ))}
              </div>

              {/* AAB Note */}
              <div
                style={{
                  padding: '16px',
                  borderRadius: '16px',
                  background: 'rgba(255, 159, 10, 0.08)',
                  border: '1px solid rgba(255, 159, 10, 0.2)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                }}
              >
                <AlertTriangle size={20} style={{ color: '#FF9500', flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '0.84rem', color: 'var(--textSecondary)', lineHeight: 1.5 }}>
                  <strong style={{ color: 'var(--textPrimary)' }}>What is the Android App Bundle (AAB)?</strong>
                  <br />
                  AAB files are intended for Google Play Store publishing and automated APK splitting. They cannot be installed directly by end users without developer tools (like `bundletool`). For phone installation, use the <strong>Taskora.apk</strong> package above.
                </div>
              </div>
            </div>
          )}

          {activePlatform === 'web' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Web App & PWA Instructions</h3>
                <PillBadge label="Zero Download Required" size="sm" variant="purple" />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
                {[
                  { step: '1', title: 'Open Web App', detail: 'Launch in Chrome, Safari, Edge, Firefox, or Brave' },
                  { step: '2', title: 'Pair Devices (Optional)', detail: 'Enter 6-digit PIN to sync with your desktop or phone' },
                  { step: '3', title: 'Install as PWA', detail: 'Click browser "Install App" for desktop dock icon' },
                  { step: '4', title: 'Work Offline', detail: 'Service worker ensures instant access without internet' },
                ].map((item) => (
                  <div
                    key={item.step}
                    style={{
                      background: 'var(--pillBackground)',
                      padding: '18px 16px',
                      borderRadius: '16px',
                      border: '1px solid var(--subtleBorder)',
                    }}
                  >
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '8px',
                        background: 'rgba(94, 92, 230, 0.15)',
                        color: '#5E5CE6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.86rem',
                        marginBottom: '10px',
                      }}
                    >
                      {item.step}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.92rem', marginBottom: '4px' }}>{item.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--textSecondary)' }}>{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </GlassSurface>
      </div>
    </section>
  );
};

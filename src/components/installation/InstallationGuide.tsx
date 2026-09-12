import React, { useState } from 'react';
import { Monitor, Smartphone, Globe, AlertTriangle, Download, ExternalLink } from 'lucide-react';
import { GlassSurface } from '../common/GlassSurface';
import { PillBadge } from '../common/PillBadge';
import { downloadConfig } from '../../config/downloadConfig';

export const InstallationGuide: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<'windows' | 'android' | 'web'>(() => {
    if (typeof window === 'undefined') return 'windows';
    const ua = window.navigator.userAgent.toLowerCase();
    if (/android/i.test(ua)) return 'android';
    return 'windows';
  });

  return (
    <section id="installation" style={{ position: 'relative', paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header reveal-hidden" style={{ textAlign: 'center' }}>
          <span className="section-tag">Setup & Verification</span>
          <h2 className="text-gradient-hero">Installation Guide</h2>
          <p>
            Quick, transparent installation steps with zero background telemetry and no forced account registration.
          </p>

          {/* Platform Tab Switcher */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '32px',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => setActivePlatform('windows')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: activePlatform === 'windows' ? 'var(--accent)' : 'var(--glassBorder)',
                background: activePlatform === 'windows' ? 'var(--accentSoft)' : 'var(--pillBackground)',
                color: activePlatform === 'windows' ? 'var(--accent)' : 'var(--textSecondary)',
                fontSize: '0.92rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <Monitor size={16} /> Windows (x64)
            </button>

            <button
              onClick={() => setActivePlatform('android')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: activePlatform === 'android' ? 'var(--success)' : 'var(--glassBorder)',
                background: activePlatform === 'android' ? 'rgba(48, 209, 88, 0.12)' : 'var(--pillBackground)',
                color: activePlatform === 'android' ? 'var(--success)' : 'var(--textSecondary)',
                fontSize: '0.92rem',
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
                padding: '10px 22px',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: activePlatform === 'web' ? '#5E5CE6' : 'var(--glassBorder)',
                background: activePlatform === 'web' ? 'rgba(94, 92, 230, 0.12)' : 'var(--pillBackground)',
                color: activePlatform === 'web' ? '#5E5CE6' : 'var(--textSecondary)',
                fontSize: '0.92rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <Globe size={16} /> Web Browser
            </button>
          </div>
        </div>

        {/* Tab Content Panels */}
        <GlassSurface
          className="reveal-hidden"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            padding: '40px 32px',
            borderRadius: '28px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* WINDOWS TAB */}
          {activePlatform === 'windows' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '4px' }}>
                    Windows Installation Steps
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--textSecondary)' }}>
                    Follow these 4 simple steps to install KIVENTA on Windows 10 or 11.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <PillBadge label="Architecture: 64-bit" size="sm" variant="accent" />
                  <a
                    href={downloadConfig.windows.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={downloadConfig.windows.fileName}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      background: 'var(--accentSoft)',
                      color: 'var(--accent)',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    <Download size={14} /> Get EXE
                  </a>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '16px',
                }}
              >
                {[
                  {
                    step: '1',
                    title: `Download ${downloadConfig.windows.fileName}`,
                    detail: 'Get the official executable from GitHub Releases.',
                  },
                  {
                    step: '2',
                    title: 'Open the installer',
                    detail: 'Double-click the downloaded setup file in your Downloads folder.',
                  },
                  {
                    step: '3',
                    title: 'Follow installation steps',
                    detail: 'Proceed through the quick setup wizard instructions.',
                  },
                  {
                    step: '4',
                    title: 'Launch KIVENTA',
                    detail: 'Open KIVENTA from your Start menu or desktop shortcut.',
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    style={{
                      background: 'var(--pillBackground)',
                      padding: '22px 18px',
                      borderRadius: '18px',
                      border: '1px solid var(--subtleBorder)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '10px',
                          background: 'var(--accentSoft)',
                          color: 'var(--accent)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          marginBottom: '12px',
                        }}
                      >
                        {item.step}
                      </div>
                      <div style={{ fontWeight: 600, fontSize: '0.96rem', marginBottom: '6px', color: 'var(--textPrimary)' }}>
                        {item.title}
                      </div>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--textSecondary)', lineHeight: 1.45 }}>
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ANDROID TAB */}
          {activePlatform === 'android' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '4px' }}>
                    Android APK Installation Steps
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--textSecondary)' }}>
                    Direct APK sideloading instructions for any Android 8.0+ smartphone or tablet.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <PillBadge label="Minimum: Android 8.0+" size="sm" variant="success" />
                  <a
                    href={downloadConfig.android.apk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={downloadConfig.android.apk.fileName}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      background: 'rgba(48, 209, 88, 0.15)',
                      color: 'var(--success)',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    <Download size={14} /> Get APK
                  </a>
                </div>
              </div>

              {/* 5 Official APK Steps */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                  gap: '14px',
                }}
              >
                {[
                  {
                    step: '1',
                    title: `Download ${downloadConfig.android.apk.fileName}`,
                    detail: 'Tap the Download APK button on your device.',
                  },
                  {
                    step: '2',
                    title: 'Open downloaded APK',
                    detail: 'Open the file via notification drawer or Files app.',
                  },
                  {
                    step: '3',
                    title: 'Allow installation',
                    detail: 'Enable "Install unknown apps" if Android prompts you.',
                  },
                  {
                    step: '4',
                    title: 'Install KIVENTA',
                    detail: 'Tap "Install" on the system package installer dialog.',
                  },
                  {
                    step: '5',
                    title: 'Open the application',
                    detail: 'Launch KIVENTA and begin organizing right away.',
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    style={{
                      background: 'var(--pillBackground)',
                      padding: '20px 16px',
                      borderRadius: '18px',
                      border: '1px solid var(--subtleBorder)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '10px',
                          background: 'rgba(48, 209, 88, 0.15)',
                          color: 'var(--success)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          marginBottom: '10px',
                        }}
                      >
                        {item.step}
                      </div>
                      <div style={{ fontWeight: 600, fontSize: '0.92rem', marginBottom: '4px', color: 'var(--textPrimary)' }}>
                        {item.title}
                      </div>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--textSecondary)', lineHeight: 1.4 }}>
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* AAB Bundle Clarification Box */}
              <div
                style={{
                  padding: '16px 20px',
                  borderRadius: '18px',
                  background: 'rgba(255, 159, 10, 0.08)',
                  border: '1px solid rgba(255, 159, 10, 0.24)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                }}
              >
                <AlertTriangle size={22} style={{ color: '#FF9500', flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '0.86rem', color: 'var(--textSecondary)', lineHeight: 1.55 }}>
                  <strong style={{ color: 'var(--textPrimary)', display: 'block', marginBottom: '2px' }}>
                    About Android App Bundle (.aab)
                  </strong>
                  Android App Bundle (.aab) is intended for Play Store publishing and distribution. It is not the normal direct-install package for Android phones. For mobile installation, use the <strong>{downloadConfig.android.apk.fileName}</strong> package above.
                </div>
              </div>
            </div>
          )}

          {/* WEB TAB */}
          {activePlatform === 'web' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '4px' }}>
                    Web App & PWA Instructions
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--textSecondary)' }}>
                    Access KIVENTA directly from any modern web browser with zero setup.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <PillBadge label="Zero Download Required" size="sm" variant="purple" />
                  <a
                    href={downloadConfig.web.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      background: 'rgba(94, 92, 230, 0.15)',
                      color: '#5E5CE6',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    <ExternalLink size={14} /> Open Live Web App
                  </a>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '16px',
                }}
              >
                {[
                  {
                    step: '1',
                    title: 'Open KIVENTA Web',
                    detail: 'Navigate directly to the KIVENTA Web app in any modern browser.',
                  },
                  {
                    step: '2',
                    title: 'Sign in / pair device',
                    detail: 'Optionally pair your phone or desktop using a private 6-digit cryptographic PIN.',
                  },
                  {
                    step: '3',
                    title: 'Install as PWA (Optional)',
                    detail: 'Click "Install KIVENTA" in Chrome, Edge, or Safari to add to your dock or homescreen.',
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    style={{
                      background: 'var(--pillBackground)',
                      padding: '22px 18px',
                      borderRadius: '18px',
                      border: '1px solid var(--subtleBorder)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '10px',
                          background: 'rgba(94, 92, 230, 0.15)',
                          color: '#5E5CE6',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          marginBottom: '12px',
                        }}
                      >
                        {item.step}
                      </div>
                      <div style={{ fontWeight: 600, fontSize: '0.96rem', marginBottom: '6px', color: 'var(--textPrimary)' }}>
                        {item.title}
                      </div>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--textSecondary)', lineHeight: 1.45 }}>
                      {item.detail}
                    </div>
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

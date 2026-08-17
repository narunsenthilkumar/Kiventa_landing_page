import React from 'react';
import { WifiOff, PlusCircle, CheckCircle2, Shield, RefreshCw } from 'lucide-react';
import { GlassSurface } from '../common/GlassSurface';
import { PillBadge } from '../common/PillBadge';

export const OfflineSection: React.FC = () => {
  const steps = [
    { title: 'Offline Mode', detail: 'Airplane, remote cabin, or zero Wi-Fi', icon: <WifiOff size={18} />, color: '#8E8E93' },
    { title: 'Create Tasks', detail: 'Add tasks, tags, projects seamlessly', icon: <PlusCircle size={18} />, color: 'var(--accent)' },
    { title: 'Complete & Edit', detail: 'Swipe, update notes, run focus timer', icon: <CheckCircle2 size={18} />, color: '#30D158' },
    { title: 'Local Snapshot', detail: 'All data committed to encrypted local DB', icon: <Shield size={18} />, color: '#5E5CE6' },
    { title: 'Peer Reconnect', detail: 'Sync updates seamlessly when available', icon: <RefreshCw size={18} />, color: '#FF9500' },
  ];

  return (
    <section id="offline" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header reveal-hidden">
          <span className="section-tag">Zero Latency Guarantee</span>
          <h2 className="text-gradient-hero">Works even when you're offline.</h2>
          <p>
            No spinning loaders or network timeouts. Taskora gives you desktop-grade instant response times because all your data lives locally on your physical machine.
          </p>
        </div>

        {/* Interactive Flow Visual */}
        <GlassSurface
          className="reveal-hidden"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '44px 30px',
            borderRadius: '28px',
          }}
        >
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(142, 142, 147, 0.15)',
                  color: 'var(--textSecondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <WifiOff size={18} />
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>Autonomous Offline Execution Flow</span>
            </div>
            <PillBadge label="100% On-Device Persistence" variant="subtle" size="sm" />
          </div>

          {/* Stepper Flow */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: '14px',
              position: 'relative',
            }}
          >
            {steps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--pillBackground)',
                  borderRadius: '18px',
                  padding: '20px 16px',
                  border: '1px solid var(--subtleBorder)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'var(--cardBackground)',
                      color: step.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {step.icon}
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--textTertiary)' }}>
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.96rem', fontWeight: 600, marginBottom: '4px' }}>{step.title}</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--textSecondary)', lineHeight: 1.4 }}>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassSurface>
      </div>
    </section>
  );
};

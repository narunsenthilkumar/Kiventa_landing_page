import React from 'react';
import { Download, Globe, Sparkles, ShieldCheck } from 'lucide-react';
import { GlassSurface } from '../common/GlassSurface';
import { AnimatedButton } from '../common/AnimatedButton';
import { PillBadge } from '../common/PillBadge';
import { DOWNLOAD_TARGETS } from '../../config/downloadConfig';

export const FinalCta: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cta" style={{ position: 'relative', padding: '60px 24px 100px 24px' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', position: 'relative' }}>
        {/* Ambient Particle Glow behind card */}
        <div
          className="ambient-glow"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(circle, var(--glowColor) 0%, rgba(94, 92, 230, 0.25) 50%, transparent 80%)',
          }}
        />

        <GlassSurface
          className="reveal-hidden"
          style={{
            padding: '70px 40px',
            borderRadius: '36px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
            border: '1px solid var(--glassBorderHover)',
            boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.6), 0 0 1px rgba(255, 255, 255, 0.3)',
          }}
        >
          <div style={{ marginBottom: '20px' }}>
            <PillBadge
              label="Start Your Journey Today"
              variant="accent"
              icon={<Sparkles size={14} />}
              dot
              pulse
            />
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.12,
              marginBottom: '20px',
              maxWidth: '780px',
              margin: '0 auto 20px auto',
            }}
            className="text-gradient-hero"
          >
            Ready to take control of your day?
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'var(--textSecondary)',
              maxWidth: '620px',
              margin: '0 auto 36px auto',
              lineHeight: 1.6,
            }}
          >
            Join thousands who have organized their work, reclaimed their focus, and protected their privacy with Taskora.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '28px',
            }}
          >
            <AnimatedButton
              variant="download"
              size="xl"
              icon={<Download size={20} />}
              isDownloadAction
              onClick={() => scrollTo('downloads')}
            >
              Download Taskora
            </AnimatedButton>

            <AnimatedButton
              variant="glass"
              size="xl"
              icon={<Globe size={20} />}
              onClick={() => window.open(DOWNLOAD_TARGETS.web.url, '_blank')}
            >
              Open Web App
            </AnimatedButton>
          </div>

          <div
            style={{
              fontSize: '0.84rem',
              color: 'var(--textTertiary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              flexWrap: 'wrap',
            }}
          >
            <ShieldCheck size={16} style={{ color: 'var(--success)' }} />
            <span>Free & Open Architecture • 100% Offline-First • No Credit Card Required</span>
          </div>
        </GlassSurface>
      </div>
    </section>
  );
};

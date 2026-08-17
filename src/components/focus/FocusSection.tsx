import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, CloudRain, Wind, Trees, Sparkles, CheckCircle2 } from 'lucide-react';
import { GlassSurface } from '../common/GlassSurface';
import { PillBadge } from '../common/PillBadge';

export const FocusSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(25 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [selectedSoundscape, setSelectedSoundscape] = useState<string>('rain');
  const [clockMode, setClockMode] = useState<'digital' | 'analog'>('digital');

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const soundscapes = [
    { id: 'rain', name: 'Gentle Rain', icon: <CloudRain size={16} /> },
    { id: 'whitenoise', name: 'White Noise', icon: <Wind size={16} /> },
    { id: 'forest', name: 'Pine Forest', icon: <Trees size={16} /> },
    { id: 'binaural', name: 'Binaural 40Hz', icon: <Sparkles size={16} /> },
  ];

  return (
    <section
      id="focus"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, transparent 0%, rgba(10, 132, 255, 0.04) 50%, transparent 100%)',
      }}
    >
      {/* Ambient breathing background orb */}
      <div
        className="ambient-glow animate-breathe"
        style={{
          top: '25%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, var(--glowColor) 0%, rgba(94, 92, 230, 0.15) 50%, transparent 80%)',
        }}
      />

      <div className="section-container">
        {/* Header */}
        <div className="section-header reveal-hidden">
          <span className="section-tag">Focus & Flow</span>
          <h2 className="text-gradient-hero">Deep work, without the noise.</h2>
          <p>
            Immerse yourself in distraction-free work intervals with the Apple minimalist analog screensaver, task binding, and ambient audio soundscapes.
          </p>
        </div>

        {/* Large Cinematic Focus Stage */}
        <GlassSurface
          className="reveal-hidden"
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            padding: '50px 30px',
            textAlign: 'center',
            position: 'relative',
            borderRadius: '32px',
          }}
        >
          {/* Top Status Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '36px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <PillBadge
              label={isRunning ? 'Focus Interval Active' : 'Ready to Focus'}
              variant={isRunning ? 'success' : 'accent'}
              dot
              pulse={isRunning}
            />

            {/* Screensaver toggle */}
            <div style={{ display: 'flex', gap: '6px', background: 'var(--pillBackground)', padding: '3px', borderRadius: '12px' }}>
              <button
                onClick={() => setClockMode('digital')}
                style={{
                  padding: '5px 12px',
                  borderRadius: '9px',
                  border: 'none',
                  background: clockMode === 'digital' ? 'var(--cardBackground)' : 'transparent',
                  color: clockMode === 'digital' ? 'var(--accent)' : 'var(--textSecondary)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Digital
              </button>
              <button
                onClick={() => setClockMode('analog')}
                style={{
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  border: 'none',
                  background: clockMode === 'analog' ? 'var(--cardBackground)' : 'transparent',
                  color: clockMode === 'analog' ? 'var(--accent)' : 'var(--textSecondary)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Apple Analog Clock
              </button>
            </div>
          </div>

          {/* Bound Task Header */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              borderRadius: '9999px',
              background: 'var(--pillBackground)',
              border: '1px solid var(--subtleBorder)',
              marginBottom: '32px',
              fontSize: '0.92rem',
              color: 'var(--textPrimary)',
              fontWeight: 500,
            }}
          >
            <CheckCircle2 size={16} style={{ color: 'var(--accent)' }} />
            <span>Target: <strong>Design Apple glassmorphic focus mode widgets</strong></span>
          </div>

          {/* Timer Display / Analog View */}
          {clockMode === 'digital' ? (
            <div style={{ position: 'relative', margin: '20px 0 40px 0' }}>
              <div
                style={{
                  fontSize: 'clamp(4.5rem, 12vw, 7.5rem)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '-0.04em',
                  color: 'var(--textPrimary)',
                  lineHeight: 1,
                  textShadow: isRunning ? '0 0 40px var(--glowColor)' : 'none',
                  transition: 'text-shadow 0.4s ease',
                }}
              >
                {formattedTime}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--textTertiary)', marginTop: '8px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {isRunning ? '25 Min Deep Work Session' : '25:00 Standard Pomodoro'}
              </div>
            </div>
          ) : (
            /* Apple Minimalist Analog Clock Simulation */
            <div style={{ position: 'relative', width: '220px', height: '220px', margin: '20px auto 40px auto' }}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '2px solid var(--glassBorder)',
                  background: 'var(--pillBackground)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2)',
                }}
              >
                {/* 12-hour tick marks */}
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                  <div
                    key={deg}
                    style={{
                      position: 'absolute',
                      top: '8px',
                      left: 'calc(50% - 1px)',
                      width: deg % 90 === 0 ? '3px' : '1px',
                      height: deg % 90 === 0 ? '12px' : '6px',
                      background: deg % 90 === 0 ? 'var(--accent)' : 'var(--textTertiary)',
                      transformOrigin: '1px 102px',
                      transform: `rotate(${deg}deg)`,
                    }}
                  />
                ))}

                {/* Minute Hand */}
                <div
                  style={{
                    position: 'absolute',
                    top: '28px',
                    left: 'calc(50% - 2px)',
                    width: '4px',
                    height: '82px',
                    borderRadius: '4px',
                    background: 'var(--textPrimary)',
                    transformOrigin: '2px 82px',
                    transform: `rotate(${(25 - minutes) * 6}deg)`,
                    transition: 'transform 0.5s ease',
                  }}
                />

                {/* Second Hand (Orange/Accent continuous sweep) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '18px',
                    left: 'calc(50% - 1px)',
                    width: '2px',
                    height: '92px',
                    borderRadius: '2px',
                    background: '#FF9500',
                    transformOrigin: '1px 92px',
                    transform: `rotate(${((60 - seconds) % 60) * 6}deg)`,
                    transition: isRunning ? 'transform 1s linear' : 'none',
                  }}
                />

                {/* Center Cap */}
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#FF9500',
                    zIndex: 10,
                  }}
                />
              </div>
            </div>
          )}

          {/* Interactive Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '40px',
            }}
          >
            <button
              onClick={toggleTimer}
              aria-label={isRunning ? 'Pause Focus' : 'Start Focus'}
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: isRunning ? 'var(--pillBackground)' : 'linear-gradient(135deg, #0A84FF 0%, #5E5CE6 100%)',
                color: isRunning ? 'var(--textPrimary)' : '#FFFFFF',
                border: '1px solid',
                borderColor: isRunning ? 'var(--glassBorder)' : 'rgba(255, 255, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: isRunning ? 'none' : '0 12px 28px -6px var(--glowColor)',
                transform: 'scale(1)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.94)')}
              onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {isRunning ? <Pause size={24} /> : <Play size={24} style={{ marginLeft: '3px' }} />}
            </button>

            <button
              onClick={resetTimer}
              aria-label="Reset Timer"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'var(--pillBackground)',
                color: 'var(--textSecondary)',
                border: '1px solid var(--subtleBorder)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--textPrimary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--textSecondary)')}
            >
              <RotateCcw size={18} />
            </button>
          </div>

          {/* Soundscapes Selector Bar */}
          <div
            style={{
              borderTop: '1px solid var(--subtleBorder)',
              paddingTop: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <span style={{ fontSize: '0.84rem', color: 'var(--textTertiary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Volume2 size={15} /> Ambient Audio:
            </span>
            {soundscapes.map((snd) => (
              <button
                key={snd.id}
                onClick={() => setSelectedSoundscape(snd.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '12px',
                  background: selectedSoundscape === snd.id ? 'var(--accentSoft)' : 'var(--pillBackground)',
                  border: '1px solid',
                  borderColor: selectedSoundscape === snd.id ? 'var(--accent)' : 'var(--subtleBorder)',
                  color: selectedSoundscape === snd.id ? 'var(--accent)' : 'var(--textSecondary)',
                  fontSize: '0.84rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {snd.icon} {snd.name}
              </button>
            ))}
          </div>
        </GlassSurface>
      </div>
    </section>
  );
};

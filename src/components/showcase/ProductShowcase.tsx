import React, { useState } from 'react';
import { Sparkles, Inbox, FolderKanban, Calendar, Clock, BarChart3, Flame, Play, Pause, ListTodo } from 'lucide-react';
import { GlassSurface } from '../common/GlassSurface';
import { PillBadge } from '../common/PillBadge';

export const ProductShowcase: React.FC = () => {
  const [focusPlaying, setFocusPlaying] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState<'all' | 'design' | 'eng'>('all');

  return (
    <section id="showcase" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header reveal-hidden">
          <span className="section-tag">Core Experience</span>
          <h2 className="text-gradient-hero">Everything in one place.</h2>
          <p>
            Seamlessly switch between execution, planning, deep focus, and strategic tracking without fragmented apps.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {/* Card 1: TODAY */}
          <GlassSurface interactive className="reveal-hidden reveal-delay-1" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(10, 132, 255, 0.2) 0%, rgba(94, 92, 230, 0.2) 100%)',
                  border: '1px solid rgba(10, 132, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                }}
              >
                <Sparkles size={22} />
              </div>
              <PillBadge label="Today's Horizon" variant="accent" size="sm" />
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>TODAY</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--textSecondary)', marginBottom: '20px' }}>
              Curated daily view prioritizing what matters today with smart completion streaks and progress telemetry.
            </p>

            {/* Mini Visual Simulation */}
            <div
              style={{
                background: 'var(--pillBackground)',
                borderRadius: '16px',
                padding: '14px',
                border: '1px solid var(--subtleBorder)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>Daily Velocity</span>
                <span style={{ fontSize: '0.82rem', color: '#30D158', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <Flame size={13} /> 12-day streak
                </span>
              </div>
              <div
                style={{
                  height: '6px',
                  borderRadius: '3px',
                  background: 'var(--subtleBorder)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ width: '75%', height: '100%', background: 'linear-gradient(90deg, #0A84FF, #30D158)' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.76rem', color: 'var(--textTertiary)' }}>
                <span>6 completed</span>
                <span>2 remaining</span>
              </div>
            </div>
          </GlassSurface>

          {/* Card 2: INBOX */}
          <GlassSurface interactive className="reveal-hidden reveal-delay-2" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(255, 159, 10, 0.2) 0%, rgba(255, 59, 48, 0.2) 100%)',
                  border: '1px solid rgba(255, 159, 10, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--warning)',
                }}
              >
                <Inbox size={22} />
              </div>
              <PillBadge label="Frictionless Capture" variant="warning" size="sm" />
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>INBOX</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--textSecondary)', marginBottom: '20px' }}>
              Instant cognitive offloading. Capture fleeting thoughts in milliseconds with natural language parsing and voice capture.
            </p>

            <div
              style={{
                background: 'var(--pillBackground)',
                borderRadius: '16px',
                padding: '12px 14px',
                border: '1px solid var(--subtleBorder)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <ListTodo size={16} style={{ color: 'var(--accent)' }} />
              <span style={{ fontSize: '0.84rem', color: 'var(--textSecondary)', fontStyle: 'italic' }}>
                "Call legal team Friday 3pm #Contract"
              </span>
            </div>
          </GlassSurface>

          {/* Card 3: PROJECTS */}
          <GlassSurface interactive className="reveal-hidden reveal-delay-3" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(94, 92, 230, 0.2) 0%, rgba(10, 132, 255, 0.2) 100%)',
                  border: '1px solid rgba(94, 92, 230, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#5E5CE6',
                }}
              >
                <FolderKanban size={22} />
              </div>
              <PillBadge label="Structured Workspaces" variant="purple" size="sm" />
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>PROJECTS</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--textSecondary)', marginBottom: '20px' }}>
              Organize multi-step objectives into colored project spaces with subtasks, milestones, and tag categorization.
            </p>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <span
                onClick={() => setActiveProjectTab('all')}
                style={{
                  padding: '4px 10px',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: activeProjectTab === 'all' ? 'var(--accentSoft)' : 'var(--pillBackground)',
                  color: activeProjectTab === 'all' ? 'var(--accent)' : 'var(--textSecondary)',
                }}
              >
                All (8)
              </span>
              <span
                onClick={() => setActiveProjectTab('design')}
                style={{
                  padding: '4px 10px',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: activeProjectTab === 'design' ? 'rgba(94, 92, 230, 0.2)' : 'var(--pillBackground)',
                  color: '#5E5CE6',
                }}
              >
                • Design System
              </span>
              <span
                onClick={() => setActiveProjectTab('eng')}
                style={{
                  padding: '4px 10px',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: activeProjectTab === 'eng' ? 'rgba(48, 209, 88, 0.2)' : 'var(--pillBackground)',
                  color: '#30D158',
                }}
              >
                • Mobile Core
              </span>
            </div>
          </GlassSurface>

          {/* Card 4: CALENDAR */}
          <GlassSurface interactive className="reveal-hidden reveal-delay-1" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(48, 209, 88, 0.2) 0%, rgba(10, 132, 255, 0.2) 100%)',
                  border: '1px solid rgba(48, 209, 88, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--success)',
                }}
              >
                <Calendar size={22} />
              </div>
              <PillBadge label="Temporal Planning" variant="success" size="sm" />
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>CALENDAR</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--textSecondary)', marginBottom: '20px' }}>
              Fluid Month, Week, and Agenda timeline views. Smooth spring-highlight date transitions for painless scheduling.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '4px',
                textAlign: 'center',
                fontSize: '0.75rem',
                padding: '8px',
                background: 'var(--pillBackground)',
                borderRadius: '12px',
              }}
            >
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                <div key={i} style={{ color: 'var(--textTertiary)', fontWeight: 600 }}>{d}</div>
              ))}
              {[15, 16, 17, 18, 19, 20, 21].map((d, i) => (
                <div
                  key={i}
                  style={{
                    padding: '4px 0',
                    borderRadius: '6px',
                    fontWeight: d === 17 ? 700 : 500,
                    background: d === 17 ? 'var(--accent)' : 'transparent',
                    color: d === 17 ? '#FFF' : 'var(--textSecondary)',
                  }}
                >
                  {d}
                </div>
              ))}
            </div>
          </GlassSurface>

          {/* Card 5: FOCUS */}
          <GlassSurface interactive className="reveal-hidden reveal-delay-2" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(255, 69, 58, 0.2) 0%, rgba(255, 149, 0, 0.2) 100%)',
                  border: '1px solid rgba(255, 69, 58, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--error)',
                }}
              >
                <Clock size={22} />
              </div>
              <PillBadge label="Flow State" variant="urgent" size="sm" />
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>FOCUS</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--textSecondary)', marginBottom: '20px' }}>
              Pomodoro timer with analog/digital Apple minimalist screensavers, ambient soundscapes, and task binding.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, rgba(10, 132, 255, 0.1) 0%, rgba(94, 92, 230, 0.1) 100%)',
                border: '1px solid var(--subtleBorder)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.3rem', fontWeight: 800 }}>
                {focusPlaying ? '24:59' : '25:00'}
              </div>
              <button
                onClick={() => setFocusPlaying(!focusPlaying)}
                style={{
                  background: 'var(--accent)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFF',
                  cursor: 'pointer',
                }}
              >
                {focusPlaying ? <Pause size={14} /> : <Play size={14} style={{ marginLeft: '2px' }} />}
              </button>
            </div>
          </GlassSurface>

          {/* Card 6: STATISTICS */}
          <GlassSurface interactive className="reveal-hidden reveal-delay-3" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(10, 132, 255, 0.2) 0%, rgba(48, 209, 88, 0.2) 100%)',
                  border: '1px solid rgba(10, 132, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                }}
              >
                <BarChart3 size={22} />
              </div>
              <PillBadge label="Actionable Insights" variant="accent" size="sm" />
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>STATISTICS</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--textSecondary)', marginBottom: '20px' }}>
              Track daily streaks, completion rates, milestone velocity, and focus hours with zero data leaving your device.
            </p>

            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '40px', padding: '0 8px' }}>
              {[45, 60, 30, 85, 95, 70, 100].map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    background: i === 6 ? 'var(--accent)' : 'var(--pillBackground)',
                    borderRadius: '4px',
                    border: '1px solid var(--subtleBorder)',
                  }}
                />
              ))}
            </div>
          </GlassSurface>
        </div>
      </div>
    </section>
  );
};

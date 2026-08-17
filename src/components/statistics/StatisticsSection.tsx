import React from 'react';
import { Flame, Clock, Award, CheckCircle2, Target, ArrowUpRight } from 'lucide-react';
import { GlassSurface } from '../common/GlassSurface';
import { PillBadge } from '../common/PillBadge';

export const StatisticsSection: React.FC = () => {

  const weeklyData = [
    { day: 'Mon', tasks: 12, focusHours: 4.2, height: 75 },
    { day: 'Tue', tasks: 16, focusHours: 5.5, height: 95 },
    { day: 'Wed', tasks: 10, focusHours: 3.8, height: 60 },
    { day: 'Thu', tasks: 14, focusHours: 4.8, height: 85 },
    { day: 'Fri', tasks: 18, focusHours: 6.2, height: 100 },
    { day: 'Sat', tasks: 8, focusHours: 2.5, height: 45 },
    { day: 'Sun', tasks: 6, focusHours: 1.8, height: 35 },
  ];

  return (
    <section id="statistics" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header reveal-hidden">
          <span className="section-tag">Productivity Telemetry</span>
          <h2 className="text-gradient-hero">Progress you can see.</h2>
          <p>
            Gain actionable insights into your execution velocity, focus duration, and completion streaks without data brokers or cloud telemetry.
          </p>
        </div>

        {/* Top Summary KPI Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '18px',
            marginBottom: '32px',
          }}
        >
          {/* KPI 1 */}
          <GlassSurface interactive className="reveal-hidden reveal-delay-1" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontSize: '0.84rem', color: 'var(--textTertiary)', fontWeight: 600 }}>Tasks Completed</span>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '10px',
                  background: 'rgba(48, 209, 88, 0.15)',
                  color: 'var(--success)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CheckCircle2 size={16} />
              </div>
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>148</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--success)', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ArrowUpRight size={14} /> +18% from last week
            </div>
          </GlassSurface>

          {/* KPI 2 */}
          <GlassSurface interactive className="reveal-hidden reveal-delay-2" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontSize: '0.84rem', color: 'var(--textTertiary)', fontWeight: 600 }}>Completion Rate</span>
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
                }}
              >
                <Target size={16} />
              </div>
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>94.2%</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--textSecondary)', marginTop: '8px' }}>
              Optimal work distribution
            </div>
          </GlassSurface>

          {/* KPI 3 */}
          <GlassSurface interactive className="reveal-hidden reveal-delay-3" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontSize: '0.84rem', color: 'var(--textTertiary)', fontWeight: 600 }}>Daily Streak</span>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '10px',
                  background: 'rgba(255, 149, 0, 0.15)',
                  color: '#FF9500',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Flame size={16} />
              </div>
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>12 Days</div>
            <div style={{ fontSize: '0.8rem', color: '#FF9500', marginTop: '8px' }}>
              Personal record streak 🔥
            </div>
          </GlassSurface>

          {/* KPI 4 */}
          <GlassSurface interactive className="reveal-hidden reveal-delay-4" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontSize: '0.84rem', color: 'var(--textTertiary)', fontWeight: 600 }}>Deep Focus Time</span>
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
                }}
              >
                <Clock size={16} />
              </div>
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>34.5 hrs</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--textSecondary)', marginTop: '8px' }}>
              Across 82 Pomodoro blocks
            </div>
          </GlassSurface>
        </div>

        {/* Large Chart Visual & Milestone Breakdown */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 340px',
            gap: '24px',
          }}
          className="stats-grid-split"
        >
          {/* Main Velocity Chart */}
          <GlassSurface className="reveal-hidden" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Weekly Productivity Curve</h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--textSecondary)' }}>Tasks executed vs. Deep Focus hours logged</p>
              </div>
              <PillBadge label="Live Telemetry" variant="accent" size="sm" dot pulse />
            </div>

            {/* Chart Area */}
            <div
              style={{
                height: '240px',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: '14px',
                paddingBottom: '28px',
                borderBottom: '1px solid var(--subtleBorder)',
                position: 'relative',
              }}
            >
              {weeklyData.map((item, idx) => (
                <div
                  key={item.day}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    height: '100%',
                    justifyContent: 'flex-end',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      maxWidth: '44px',
                      height: `${item.height}%`,
                      borderRadius: '12px',
                      background:
                        idx === 4
                          ? 'linear-gradient(180deg, var(--accent) 0%, #5E5CE6 100%)'
                          : 'var(--pillBackground)',
                      border: '1px solid',
                      borderColor: idx === 4 ? 'rgba(255, 255, 255, 0.4)' : 'var(--subtleBorder)',
                      boxShadow: idx === 4 ? '0 10px 24px -4px var(--glowColor)' : 'none',
                      transition: 'height 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s ease',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      paddingTop: '8px',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scaleY(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scaleY(1)')}
                  >
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: idx === 4 ? '#FFF' : 'var(--textSecondary)' }}>
                      {item.tasks}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--textTertiary)', fontWeight: 600 }}>{item.day}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', fontSize: '0.82rem', color: 'var(--textTertiary)' }}>
              <span>Average: 12.0 tasks / day</span>
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Peak Velocity: Friday (18 tasks)</span>
            </div>
          </GlassSurface>

          {/* Milestones & Badges */}
          <GlassSurface className="reveal-hidden reveal-delay-2" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <Award size={20} style={{ color: '#FF9500' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Active Milestones</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ padding: '14px', borderRadius: '16px', background: 'var(--pillBackground)', border: '1px solid var(--subtleBorder)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>100 Tasks Completed</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--success)', fontWeight: 700 }}>✓ UNLOCKED</span>
                </div>
                <div style={{ height: '5px', borderRadius: '3px', background: 'var(--subtleBorder)', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', background: '#30D158' }} />
                </div>
              </div>

              <div style={{ padding: '14px', borderRadius: '16px', background: 'var(--pillBackground)', border: '1px solid var(--subtleBorder)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>14-Day Focus Streak</span>
                  <span style={{ fontSize: '0.78rem', color: '#FF9500', fontWeight: 700 }}>12 / 14 Days</span>
                </div>
                <div style={{ height: '5px', borderRadius: '3px', background: 'var(--subtleBorder)', overflow: 'hidden' }}>
                  <div style={{ width: '85%', height: '100%', background: '#FF9500' }} />
                </div>
              </div>

              <div style={{ padding: '14px', borderRadius: '16px', background: 'var(--pillBackground)', border: '1px solid var(--subtleBorder)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>50 Focus Hours Master</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 700 }}>34.5 / 50 hrs</span>
                </div>
                <div style={{ height: '5px', borderRadius: '3px', background: 'var(--subtleBorder)', overflow: 'hidden' }}>
                  <div style={{ width: '69%', height: '100%', background: 'var(--accent)' }} />
                </div>
              </div>
            </div>
          </GlassSurface>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .stats-grid-split {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { GlassSurface } from '../common/GlassSurface';
import { PillBadge } from '../common/PillBadge';

interface CalendarEvent {
  id: string;
  title: string;
  day: number;
  time: string;
  category: string;
  color: string;
  priority: string;
}

export const CalendarSection: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(17);
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'agenda'>('month');

  const events: CalendarEvent[] = [
    { id: '1', title: 'Taskora v1.0.0 Architecture Review', day: 17, time: '10:00 AM - 11:30 AM', category: 'Engineering', color: '#0A84FF', priority: 'Urgent' },
    { id: '2', title: 'Focus Sprint: Apple Glass Polish', day: 17, time: '2:00 PM - 3:30 PM', category: 'Design System', color: '#5E5CE6', priority: 'High' },
    { id: '3', title: 'Verify Lamport Logical Clock Sync', day: 18, time: '11:00 AM - 12:00 PM', category: 'Security', color: '#30D158', priority: 'Medium' },
    { id: '4', title: 'Cross-platform Haptic Calibration', day: 19, time: '4:00 PM - 5:00 PM', category: 'Mobile Core', color: '#FF9F0A', priority: 'Medium' },
    { id: '5', title: 'Weekly Product Roadmap Sync', day: 21, time: '3:00 PM - 4:00 PM', category: 'Planning', color: '#FF453A', priority: 'High' },
  ];

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const selectedEvents = events.filter((e) => e.day === selectedDay);

  return (
    <section id="calendar" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header reveal-hidden">
          <span className="section-tag">Temporal Planning</span>
          <h2 className="text-gradient-hero">See your time differently.</h2>
          <p>
            Effortlessly visualize your commitments across Month, Week, and Agenda timelines with seamless day selection transitions.
          </p>
        </div>

        {/* Large Calendar Workspace Frame */}
        <GlassSurface
          className="reveal-hidden"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '36px 30px',
            borderRadius: '28px',
          }}
        >
          {/* Top Bar: Month Navigator & View Switcher */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '30px',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'var(--accentSoft)',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CalendarIcon size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 700 }}>August 2026</h3>
                <div style={{ fontSize: '0.84rem', color: 'var(--textTertiary)' }}>Today is Monday, Aug 17</div>
              </div>
            </div>

            {/* View Switcher Pills */}
            <div
              style={{
                display: 'flex',
                gap: '4px',
                background: 'var(--pillBackground)',
                padding: '4px',
                borderRadius: '14px',
                border: '1px solid var(--subtleBorder)',
              }}
            >
              {(['month', 'week', 'agenda'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  style={{
                    padding: '6px 16px',
                    borderRadius: '10px',
                    border: 'none',
                    background: viewMode === mode ? 'var(--cardBackground)' : 'transparent',
                    color: viewMode === mode ? 'var(--accent)' : 'var(--textSecondary)',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                    boxShadow: viewMode === mode ? '0 2px 8px rgba(0,0,0,0.12)' : 'none',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Calendar Grid & Sidebar Split */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 320px',
              gap: '28px',
            }}
            className="calendar-grid-split"
          >
            {/* Days Grid */}
            <div>
              {/* Day Header Row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(7, 1fr)',
                  gap: '8px',
                  textAlign: 'center',
                  marginBottom: '12px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--textTertiary)',
                }}
              >
                {dayNames.map((name) => (
                  <div key={name}>{name}</div>
                ))}
              </div>

              {/* Day Cells */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(7, 1fr)',
                  gap: '8px',
                }}
              >
                {/* 5 empty offset days for August 2026 starting Saturday */}
                {[27, 28, 29, 30, 31].map((prevDay) => (
                  <div
                    key={`prev-${prevDay}`}
                    style={{
                      height: '52px',
                      borderRadius: '14px',
                      padding: '8px',
                      fontSize: '0.84rem',
                      color: 'var(--textQuaternary)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      opacity: 0.35,
                    }}
                  >
                    {prevDay}
                  </div>
                ))}

                {daysInMonth.map((day) => {
                  const isSelected = selectedDay === day;
                  const isToday = day === 17;
                  const dayEvents = events.filter((e) => e.day === day);

                  return (
                    <div
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      style={{
                        height: '52px',
                        borderRadius: '14px',
                        padding: '6px 8px',
                        fontSize: '0.86rem',
                        fontWeight: isSelected || isToday ? 700 : 500,
                        background: isSelected
                          ? 'var(--accent)'
                          : isToday
                          ? 'var(--accentSoft)'
                          : 'var(--pillBackground)',
                        color: isSelected ? '#FFFFFF' : isToday ? 'var(--accent)' : 'var(--textPrimary)',
                        border: '1px solid',
                        borderColor: isSelected
                          ? 'transparent'
                          : isToday
                          ? 'var(--accent)'
                          : 'var(--subtleBorder)',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                        transform: isSelected ? 'scale(1.04)' : 'scale(1)',
                        boxShadow: isSelected ? '0 8px 20px -4px var(--glowColor)' : 'none',
                        position: 'relative',
                        zIndex: isSelected ? 2 : 1,
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) e.currentTarget.style.borderColor = 'var(--accent)';
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) e.currentTarget.style.borderColor = isToday ? 'var(--accent)' : 'var(--subtleBorder)';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span>{day}</span>
                        {isToday && !isSelected && (
                          <span style={{ fontSize: '0.62rem', background: 'var(--accent)', color: '#FFF', padding: '1px 4px', borderRadius: '4px' }}>
                            NOW
                          </span>
                        )}
                      </div>

                      {/* Event Dot Indicators */}
                      {dayEvents.length > 0 && (
                        <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
                          {dayEvents.map((ev, i) => (
                            <span
                              key={i}
                              style={{
                                width: '5px',
                                height: '5px',
                                borderRadius: '50%',
                                background: isSelected ? '#FFFFFF' : ev.color,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Selected Day Events Stream */}
            <div
              style={{
                background: 'var(--pillBackground)',
                borderRadius: '20px',
                border: '1px solid var(--subtleBorder)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--textTertiary)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Selected Agenda
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: '2px' }}>
                    August {selectedDay}, 2026
                  </h4>
                </div>
                <PillBadge label={`${selectedEvents.length} items`} size="sm" variant="accent" />
              </div>

              {selectedEvents.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px 10px', color: 'var(--textTertiary)', fontSize: '0.88rem' }}>
                  No tasks scheduled for this day.
                  <div style={{ marginTop: '12px' }}>
                    <button
                      onClick={() => {
                        const newEv: CalendarEvent = {
                          id: Date.now().toString(),
                          title: `New task for Aug ${selectedDay}`,
                          day: selectedDay,
                          time: '12:00 PM - 1:00 PM',
                          category: 'Focus',
                          color: '#0A84FF',
                          priority: 'Medium',
                        };
                        events.push(newEv);
                        setSelectedDay(selectedDay);
                      }}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '10px',
                        background: 'var(--accentSoft)',
                        border: 'none',
                        color: 'var(--accent)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      + Add Schedule
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {selectedEvents.map((ev) => (
                    <div
                      key={ev.id}
                      style={{
                        padding: '14px',
                        borderRadius: '14px',
                        background: 'var(--cardBackground)',
                        border: '1px solid var(--subtleBorder)',
                        borderLeft: `4px solid ${ev.color}`,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                      }}
                    >
                      <div style={{ fontSize: '0.92rem', fontWeight: 600 }}>{ev.title}</div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem' }}>
                        <span style={{ color: 'var(--textTertiary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={12} /> {ev.time}
                        </span>
                        <span style={{ color: ev.color, fontWeight: 600 }}>#{ev.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </GlassSurface>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .calendar-grid-split {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

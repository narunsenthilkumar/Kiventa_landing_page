import React, { useState } from 'react';
import { Check, Flame, Clock, Calendar as CalendarIcon, Folder, Plus, Sparkles, MoreHorizontal, ShieldCheck } from 'lucide-react';
import { DeviceFrame } from '../common/DeviceFrame';
import { PillBadge } from '../common/PillBadge';

interface TaskItem {
  id: string;
  title: string;
  category: string;
  priority: 'urgent' | 'high' | 'medium' | 'low';
  dueTime: string;
  completed: boolean;
  tagColor: string;
}

export const HeroAppPreview: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([
    {
      id: '1',
      title: 'Review React Native architecture & sync engine',
      category: 'Engineering',
      priority: 'urgent',
      dueTime: '10:00 AM',
      completed: true,
      tagColor: '#0A84FF',
    },
    {
      id: '2',
      title: 'Design Apple glassmorphic focus mode widgets',
      category: 'Design System',
      priority: 'high',
      dueTime: '2:30 PM',
      completed: true,
      tagColor: '#5E5CE6',
    },
    {
      id: '3',
      title: 'Test offline-first cryptographic device pairing',
      category: 'Security',
      priority: 'medium',
      dueTime: '4:15 PM',
      completed: false,
      tagColor: '#30D158',
    },
    {
      id: '4',
      title: 'Export encrypted JSON backup & verify SHA-256',
      category: 'Data',
      priority: 'low',
      dueTime: '6:00 PM',
      completed: false,
      tagColor: '#FF9F0A',
    },
  ]);

  const [activeTab, setActiveTab] = useState<'today' | 'inbox' | 'focus' | 'calendar'>('today');

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const percentage = Math.round((completedCount / totalCount) * 100);

  // SVG Progress Ring calculations
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <DeviceFrame type="macos" title="Taskora — Today Workspace">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '220px 1fr 260px',
          minHeight: '480px',
          background: 'var(--cardBackground)',
          color: 'var(--textPrimary)',
          fontSize: '0.9rem',
        }}
        className="hero-app-grid"
      >
        {/* Left Sidebar */}
        <div
          style={{
            borderRight: '1px solid var(--subtleBorder)',
            background: 'var(--glassSurface)',
            padding: '16px 12px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          className="hero-app-sidebar"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {/* Quick Profile / Sync Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 10px',
                borderRadius: '12px',
                background: 'var(--pillBackground)',
                marginBottom: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#30D158',
                    display: 'inline-block',
                    animation: 'pulseRing 2s infinite',
                  }}
                />
                <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Local Store</span>
              </div>
              <ShieldCheck size={14} style={{ color: 'var(--accent)' }} />
            </div>

            {/* Navigation tabs */}
            <button
              onClick={() => setActiveTab('today')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 12px',
                borderRadius: '12px',
                background: activeTab === 'today' ? 'var(--accentSoft)' : 'transparent',
                color: activeTab === 'today' ? 'var(--accent)' : 'var(--textPrimary)',
                border: 'none',
                cursor: 'pointer',
                fontWeight: activeTab === 'today' ? 600 : 500,
                textAlign: 'left',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={16} /> Today
              </span>
              <span
                style={{
                  fontSize: '0.75rem',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  background: activeTab === 'today' ? 'var(--accent)' : 'var(--pillBackground)',
                  color: activeTab === 'today' ? '#FFF' : 'var(--textSecondary)',
                }}
              >
                {tasks.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('inbox')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 12px',
                borderRadius: '12px',
                background: activeTab === 'inbox' ? 'var(--accentSoft)' : 'transparent',
                color: activeTab === 'inbox' ? 'var(--accent)' : 'var(--textSecondary)',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 500,
                textAlign: 'left',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Folder size={16} /> Inbox
              </span>
              <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>7</span>
            </button>

            <button
              onClick={() => setActiveTab('focus')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 12px',
                borderRadius: '12px',
                background: activeTab === 'focus' ? 'var(--accentSoft)' : 'transparent',
                color: activeTab === 'focus' ? 'var(--accent)' : 'var(--textSecondary)',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 500,
                textAlign: 'left',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} /> Focus Mode
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--success)' }}>25m</span>
            </button>

            <button
              onClick={() => setActiveTab('calendar')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 12px',
                borderRadius: '12px',
                background: activeTab === 'calendar' ? 'var(--accentSoft)' : 'transparent',
                color: activeTab === 'calendar' ? 'var(--accent)' : 'var(--textSecondary)',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 500,
                textAlign: 'left',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CalendarIcon size={16} /> Calendar
              </span>
              <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>Aug</span>
            </button>
          </div>

          {/* Quick Streak Widget */}
          <div
            style={{
              padding: '12px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(255, 149, 0, 0.1) 0%, rgba(255, 59, 48, 0.1) 100%)',
              border: '1px solid rgba(255, 149, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #FF9500 0%, #FF3B30 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF',
              }}
            >
              <Flame size={18} />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--textSecondary)' }}>Current Streak</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--textPrimary)' }}>12 Days</div>
            </div>
          </div>
        </div>

        {/* Main Center Area: Today's Tasks */}
        <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                August 17, 2026
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginTop: '2px' }}>Today's Tasks</h3>
            </div>

            <button
              onClick={() => {
                const newTask: TaskItem = {
                  id: Date.now().toString(),
                  title: 'Plan tomorrow focus schedule',
                  category: 'Productivity',
                  priority: 'medium',
                  dueTime: '8:00 PM',
                  completed: false,
                  tagColor: '#5856D6',
                };
                setTasks((prev) => [...prev, newTask]);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                borderRadius: '12px',
                background: 'var(--accent)',
                color: '#FFF',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.82rem',
                boxShadow: '0 4px 12px var(--glowColor)',
              }}
            >
              <Plus size={15} /> Add Task
            </button>
          </div>

          {/* Task Interactive Checklist */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: '14px',
                  background: task.completed ? 'var(--pillBackground)' : 'var(--glassSurface)',
                  border: '1px solid',
                  borderColor: task.completed ? 'var(--subtleBorder)' : 'var(--glassBorder)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  opacity: task.completed ? 0.75 : 1,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.borderColor = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.borderColor = task.completed ? 'var(--subtleBorder)' : 'var(--glassBorder)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                  {/* Apple Style Checkbox */}
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      border: task.completed ? 'none' : '2px solid var(--textQuaternary)',
                      background: task.completed ? '#30D158' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                      flexShrink: 0,
                    }}
                  >
                    {task.completed && <Check size={13} color="#FFFFFF" strokeWidth={3} />}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span
                      style={{
                        fontWeight: 500,
                        textDecoration: task.completed ? 'line-through' : 'none',
                        color: task.completed ? 'var(--textTertiary)' : 'var(--textPrimary)',
                        fontSize: '0.92rem',
                      }}
                    >
                      {task.title}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '3px' }}>
                      <span style={{ fontSize: '0.75rem', color: task.tagColor, fontWeight: 600 }}>
                        • {task.category}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--textTertiary)' }}>{task.dueTime}</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <PillBadge
                    label={task.priority}
                    size="sm"
                    variant={
                      task.priority === 'urgent'
                        ? 'urgent'
                        : task.priority === 'high'
                        ? 'warning'
                        : task.priority === 'medium'
                        ? 'purple'
                        : 'success'
                    }
                  />
                  <MoreHorizontal size={16} style={{ color: 'var(--textQuaternary)' }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: '0.78rem', color: 'var(--textTertiary)', textAlign: 'center' }}>
            💡 Click any task to toggle completion and see the real-time progress ring adapt.
          </div>
        </div>

        {/* Right Info Panel: Progress & Focus Preview */}
        <div
          style={{
            borderLeft: '1px solid var(--subtleBorder)',
            background: 'var(--glassSurface)',
            padding: '20px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
          className="hero-app-right"
        >
          {/* Progress Ring Card */}
          <div
            style={{
              padding: '16px',
              borderRadius: '16px',
              background: 'var(--pillBackground)',
              border: '1px solid var(--subtleBorder)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--textSecondary)', marginBottom: '12px' }}>
              Completion Progress
            </div>

            <div style={{ position: 'relative', width: '84px', height: '84px' }}>
              <svg width="84" height="84" viewBox="0 0 84 84">
                <circle
                  cx="42"
                  cy="42"
                  r={radius}
                  stroke="var(--subtleBorder)"
                  strokeWidth="7"
                  fill="transparent"
                />
                <circle
                  cx="42"
                  cy="42"
                  r={radius}
                  stroke="url(#heroProgressGradient)"
                  strokeWidth="7"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  transform="rotate(-90 42 42)"
                  style={{ transition: 'stroke-dashoffset 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
                <defs>
                  <linearGradient id="heroProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0A84FF" />
                    <stop offset="100%" stopColor="#30D158" />
                  </linearGradient>
                </defs>
              </svg>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: 'var(--textPrimary)',
                }}
              >
                {percentage}%
              </div>
            </div>

            <div style={{ marginTop: '10px', fontSize: '0.8rem', color: 'var(--textSecondary)' }}>
              <strong>{completedCount}</strong> of <strong>{totalCount}</strong> tasks done
            </div>
          </div>

          {/* Active Focus Session Widget */}
          <div
            style={{
              padding: '16px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(10, 132, 255, 0.08) 0%, rgba(94, 92, 230, 0.08) 100%)',
              border: '1px solid rgba(10, 132, 255, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase' }}>
                Deep Focus
              </span>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#30D158' }} />
            </div>

            <div style={{ fontSize: '1.6rem', fontWeight: 800, fontFamily: 'var(--font-mono)', letterSpacing: '-0.03em' }}>
              24:18
            </div>

            <div style={{ fontSize: '0.78rem', color: 'var(--textSecondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              🎯 App Glass UI Polish
            </div>
          </div>
        </div>
      </div>

      {/* Responsive layout styles for preview mockup */}
      <style>{`
        @media (max-width: 900px) {
          .hero-app-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-app-sidebar, .hero-app-right {
            display: none !important;
          }
        }
      `}</style>
    </DeviceFrame>
  );
};

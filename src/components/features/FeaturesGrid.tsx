import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Mic, 
  Clock, 
  RefreshCw, 
  ShieldCheck, 
  Sliders, 
  Tag, 
  Pin, 
  Star, 
  Search, 
  Calendar, 
  Flame, 
  Milestone, 
  CornerDownRight, 
  Smartphone, 
  Download, 
  HardDrive, 
  FileSpreadsheet, 
  Layers, 
  SunMoon, 
  Vibrate, 
  Laptop,
  Check
} from 'lucide-react';
import { GlassSurface } from '../common/GlassSurface';
import { PillBadge } from '../common/PillBadge';

interface FeatureCategory {
  id: string;
  name: string;
  badge: string;
  icon: React.ReactNode;
  description: string;
  features: {
    title: string;
    detail: string;
    icon: React.ReactNode;
  }[];
}

export const FeaturesGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories: FeatureCategory[] = [
    {
      id: 'task-management',
      name: 'Task Management',
      badge: 'Core Workflows',
      icon: <CheckCircle2 size={18} />,
      description: 'Granular control over your daily commitments with fluid interactions.',
      features: [
        { title: 'Subtasks & Checklists', detail: 'Break complex tasks into hierarchical steps with progress tracking', icon: <CornerDownRight size={16} /> },
        { title: 'Colored Tags & Labels', detail: 'Organize by context, client, or workflow with custom palette tags', icon: <Tag size={16} /> },
        { title: 'Pin & Favorite Tasks', detail: 'Keep critical priorities permanently in view at the top of your workspace', icon: <Pin size={16} /> },
        { title: '5-Level Priorities', detail: 'Urgent, High, Medium, Low, and None for clear decision making', icon: <Star size={16} /> },
        { title: 'Task Deferral', detail: 'Postpone tasks to Tomorrow, Next Week, or Someday with one gesture', icon: <Clock size={16} /> },
        { title: 'Gesture Swipe Actions', detail: 'Swipe left to delete/defer, swipe right to complete with haptics', icon: <Smartphone size={16} /> },
      ],
    },
    {
      id: 'smart-ai',
      name: 'Smart & Natural Language',
      badge: 'On-Device Intelligence',
      icon: <Sparkles size={18} />,
      description: 'Intelligent assistants that accelerate capture without uploading audio or text to the cloud.',
      features: [
        { title: 'Natural Language Parsing', detail: 'Type "Submit deck tomorrow at 4pm" for automatic date/time extraction', icon: <Sparkles size={16} /> },
        { title: '100% On-Device Voice Tasks', detail: 'Windows SAPI, Android native speech & Web Speech with zero cloud audio', icon: <Mic size={16} /> },
        { title: 'Automatic Categorization', detail: 'Auto-detect project tags based on contextual keywords in task titles', icon: <Layers size={16} /> },
        { title: 'Smart Scheduling Engine', detail: 'Suggests optimal task time blocks according to existing calendar commitments', icon: <Calendar size={16} /> },
        { title: 'Intelligent Reminders', detail: 'Configurable notifications timed to prevent task neglect', icon: <Clock size={16} /> },
        { title: 'Instant Live Search', detail: 'Sub-millisecond filtering across titles, notes, tags, and projects', icon: <Search size={16} /> },
      ],
    },
    {
      id: 'focus-time',
      name: 'Focus & Productivity',
      badge: 'Flow State',
      icon: <Clock size={18} />,
      description: 'Built-in tools to protect your attention and track milestone progress.',
      features: [
        { title: 'Pomodoro Focus Timer', detail: 'Customizable 25/5 intervals with breathing glow and task binding', icon: <Clock size={16} /> },
        { title: 'Apple Analog & Digital Screensaver', detail: '60fps second sweep with zero drift and minimalist Apple typography', icon: <Laptop size={16} /> },
        { title: 'Ambient Soundscapes', detail: 'White noise, gentle rain, forest birds, and binaural beats built-in', icon: <Sparkles size={16} /> },
        { title: 'Productivity Streaks', detail: 'Build momentum with daily completion streak tracking', icon: <Flame size={16} /> },
        { title: 'Milestone Progress Meters', detail: 'Visual progress metrics for long-term project deliverables', icon: <Milestone size={16} /> },
        { title: 'Completion Particle FX', detail: 'Satisfying 60fps micro-animations upon task completion', icon: <Check size={16} /> },
      ],
    },
    {
      id: 'sync-storage',
      name: 'Sync & Privacy',
      badge: 'Zero-Cloud Architecture',
      icon: <RefreshCw size={18} />,
      description: 'Offline-first durability with cryptographic local device synchronization.',
      features: [
        { title: 'Offline-First Operation', detail: 'Full functionality without internet; zero network dependency', icon: <HardDrive size={16} /> },
        { title: 'Cryptographic Device Pairing', detail: 'Pair Windows, Android, and Web via 6-digit PIN and SHA-256 checksums', icon: <ShieldCheck size={16} /> },
        { title: 'Deterministic LWW Sync', detail: 'Lamport logical clocks ensure conflict-free merging across devices', icon: <RefreshCw size={16} /> },
        { title: 'Tombstone Deletion Protection', detail: 'Prevents resurrected tasks when syncing older device snapshots', icon: <CheckCircle2 size={16} /> },
        { title: 'JSON Atomic Backup & Restore', detail: 'Export complete database snapshot or restore with automatic migration', icon: <Download size={16} /> },
        { title: 'Clean CSV Data Export', detail: 'One-click spreadsheet export for custom analytics and reports', icon: <FileSpreadsheet size={16} /> },
      ],
    },
    {
      id: 'interface',
      name: 'UI & Personalization',
      badge: 'Apple HIG Design',
      icon: <Sliders size={18} />,
      description: 'Crafted for visual delight with native performance and customization.',
      features: [
        { title: 'Dynamic Dark / Light / System Mode', detail: 'True OLED black and crisp daylight modes with system adaptation', icon: <SunMoon size={16} /> },
        { title: '12-Hour / 24-Hour Time Engine', detail: 'Universal time format preference synchronized throughout the app', icon: <Clock size={16} /> },
        { title: 'Spatial Glassmorphic Materials', detail: 'Layered translucent surfaces with specular highlights and depth', icon: <Layers size={16} /> },
        { title: 'Multi-Platform Tactile Haptics', detail: 'Fine-tuned vibration and click feedback across mobile and desktop', icon: <Vibrate size={16} /> },
        { title: 'Full Keyboard Navigation', detail: 'Fast desktop hotkeys to add, navigate, edit, and complete tasks', icon: <Laptop size={16} /> },
        { title: 'Fluid Responsive Layouts', detail: 'Flawless presentation across phones, tablets, laptops, and ultra-wides', icon: <Smartphone size={16} /> },
      ],
    },
  ];

  const filteredCategories = activeTab === 'all' ? categories : categories.filter((c) => c.id === activeTab);

  return (
    <section id="features" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Header */}
        <div className="section-header reveal-hidden">
          <span className="section-tag">Feature Suite</span>
          <h2 className="text-gradient-hero">Powerful enough for everything.</h2>
          <p>
            Every tool you need to stay organized, focused, and in control — crafted without bloat or subscription paywalls.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              marginTop: '32px',
            }}
          >
            <button
              onClick={() => setActiveTab('all')}
              style={{
                padding: '7px 16px',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: activeTab === 'all' ? 'var(--accent)' : 'var(--glassBorder)',
                background: activeTab === 'all' ? 'var(--accentSoft)' : 'var(--pillBackground)',
                color: activeTab === 'all' ? 'var(--accent)' : 'var(--textSecondary)',
                fontSize: '0.86rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              All Features (30+)
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  padding: '7px 16px',
                  borderRadius: '9999px',
                  border: '1px solid',
                  borderColor: activeTab === cat.id ? 'var(--accent)' : 'var(--glassBorder)',
                  background: activeTab === cat.id ? 'var(--accentSoft)' : 'var(--pillBackground)',
                  color: activeTab === cat.id ? 'var(--accent)' : 'var(--textSecondary)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="reveal-hidden">
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'var(--accentSoft)',
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700 }}>{cat.name}</h3>
                    <p style={{ fontSize: '0.86rem', color: 'var(--textSecondary)' }}>{cat.description}</p>
                  </div>
                </div>
                <PillBadge label={cat.badge} variant="accent" size="sm" />
              </div>

              {/* Category Features Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                  gap: '16px',
                }}
              >
                {cat.features.map((feat, featIdx) => (
                  <GlassSurface
                    key={featIdx}
                    interactive
                    className={`reveal-hidden reveal-delay-${(featIdx % 3) + 1}`}
                    style={{ padding: '20px 22px' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'var(--pillBackground)',
                          border: '1px solid var(--subtleBorder)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent)',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        {feat.icon}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1.02rem', fontWeight: 600, marginBottom: '4px' }}>{feat.title}</h4>
                        <p style={{ fontSize: '0.86rem', color: 'var(--textSecondary)', lineHeight: 1.5 }}>
                          {feat.detail}
                        </p>
                      </div>
                    </div>
                  </GlassSurface>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

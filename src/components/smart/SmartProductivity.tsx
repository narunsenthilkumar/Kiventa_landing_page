import React, { useState } from 'react';
import { Sparkles, Mic, Calendar, Layers, Bell, ShieldCheck } from 'lucide-react';
import { GlassSurface } from '../common/GlassSurface';
import { PillBadge } from '../common/PillBadge';

interface SampleNL {
  input: string;
  title: string;
  date: string;
  time: string;
  category: string;
  priority: string;
}

export const SmartProductivity: React.FC = () => {
  const samples: SampleNL[] = [
    {
      input: 'Remind me to submit the assignment tomorrow at 5 PM #Study',
      title: 'Submit the assignment',
      date: 'Tomorrow (Tuesday)',
      time: '5:00 PM',
      category: 'Study',
      priority: 'High',
    },
    {
      input: 'Meeting with design team Friday 10:30 AM !urgent @Work',
      title: 'Meeting with design team',
      date: 'Friday, Aug 21',
      time: '10:30 AM',
      category: 'Work',
      priority: 'Urgent',
    },
    {
      input: 'Buy groceries and fruits tonight at 8 PM #Personal',
      title: 'Buy groceries and fruits',
      date: 'Tonight',
      time: '8:00 PM',
      category: 'Personal',
      priority: 'Medium',
    },
  ];

  const [selectedSample, setSelectedSample] = useState<SampleNL>(samples[0]);
  const [customInput, setCustomInput] = useState<string>(samples[0].input);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [voiceText, setVoiceText] = useState<string>('Call Mom tomorrow at 7 PM');

  const handleSelectSample = (sample: SampleNL) => {
    setSelectedSample(sample);
    setCustomInput(sample.input);
  };

  const handleSimulateVoice = () => {
    setIsListening(true);
    setTimeout(() => {
      setVoiceText('Schedule product sync on Thursday 3 PM #Engineering');
      setIsListening(false);
    }, 2400);
  };

  return (
    <section id="smart" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Ambient glow */}
      <div
        className="ambient-glow"
        style={{
          top: '30%',
          left: '10%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(94, 92, 230, 0.18) 0%, transparent 70%)',
        }}
      />

      <div className="section-container">
        {/* Section Header */}
        <div className="section-header reveal-hidden">
          <span className="section-tag">On-Device Intelligence</span>
          <h2 className="text-gradient-hero">Taskora thinks with you.</h2>
          <p>
            Capture ideas at the speed of thought. Taskora’s local parsing engine understands your intent without sending a single byte to external servers.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '28px',
            marginBottom: '32px',
          }}
        >
          {/* Left: Interactive Natural Language Parser */}
          <GlassSurface className="reveal-hidden reveal-delay-1" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '12px',
                    background: 'var(--accentSoft)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Sparkles size={20} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Natural Language Parsing</h3>
              </div>
              <PillBadge label="Interactive Demo" variant="accent" size="sm" />
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--textSecondary)', marginBottom: '18px' }}>
              Type naturally. Taskora automatically isolates the task name, date, time, tags, and priorities in real time.
            </p>

            {/* Sample Chips */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
              {samples.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectSample(s)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '10px',
                    background: selectedSample.input === s.input ? 'var(--accentSoft)' : 'var(--pillBackground)',
                    border: '1px solid',
                    borderColor: selectedSample.input === s.input ? 'var(--accent)' : 'var(--subtleBorder)',
                    color: selectedSample.input === s.input ? 'var(--accent)' : 'var(--textSecondary)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Sample {idx + 1}
                </button>
              ))}
            </div>

            {/* Input Box */}
            <div
              style={{
                position: 'relative',
                background: 'var(--pillBackground)',
                borderRadius: '16px',
                border: '1px solid var(--glassBorder)',
                padding: '14px 16px',
                marginBottom: '20px',
              }}
            >
              <div style={{ fontSize: '0.78rem', color: 'var(--textTertiary)', marginBottom: '4px' }}>Input Sentence:</div>
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--textPrimary)',
                  fontSize: '0.96rem',
                  fontWeight: 500,
                  outline: 'none',
                }}
              />
            </div>

            {/* Real-time Extracted Entities Card */}
            <div
              style={{
                background: 'var(--cardBackground)',
                borderRadius: '18px',
                border: '1px solid var(--subtleBorder)',
                padding: '18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Parsed Metadata Breakdown
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                <div style={{ padding: '10px 12px', borderRadius: '12px', background: 'var(--pillBackground)' }}>
                  <div style={{ fontSize: '0.74rem', color: 'var(--textTertiary)' }}>Task Title</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, marginTop: '2px' }}>{selectedSample.title}</div>
                </div>

                <div style={{ padding: '10px 12px', borderRadius: '12px', background: 'var(--pillBackground)' }}>
                  <div style={{ fontSize: '0.74rem', color: 'var(--textTertiary)' }}>Due Date</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, marginTop: '2px', color: 'var(--accent)' }}>
                    {selectedSample.date}
                  </div>
                </div>

                <div style={{ padding: '10px 12px', borderRadius: '12px', background: 'var(--pillBackground)' }}>
                  <div style={{ fontSize: '0.74rem', color: 'var(--textTertiary)' }}>Scheduled Time</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, marginTop: '2px' }}>{selectedSample.time}</div>
                </div>

                <div style={{ padding: '10px 12px', borderRadius: '12px', background: 'var(--pillBackground)' }}>
                  <div style={{ fontSize: '0.74rem', color: 'var(--textTertiary)' }}>Category / Tag</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, marginTop: '2px', color: '#5E5CE6' }}>
                    #{selectedSample.category}
                  </div>
                </div>
              </div>
            </div>
          </GlassSurface>

          {/* Right: On-Device Voice Tasks */}
          <GlassSurface className="reveal-hidden reveal-delay-2" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '12px',
                    background: 'rgba(48, 209, 88, 0.15)',
                    color: 'var(--success)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Mic size={20} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Voice Tasks (100% On-Device)</h3>
              </div>
              <PillBadge label="Zero Cloud Upload" variant="success" size="sm" />
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--textSecondary)', marginBottom: '22px' }}>
              Speak your tasks aloud. Uses native Windows SAPI, Android offline speech engine, and Web Speech API with no third-party audio transmission.
            </p>

            {/* Interactive Voice Simulator Box */}
            <div
              style={{
                background: 'var(--cardBackground)',
                borderRadius: '20px',
                border: '1px solid var(--subtleBorder)',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '16px',
              }}
            >
              {/* Mic Pulse Button */}
              <button
                onClick={handleSimulateVoice}
                aria-label="Simulate voice capture"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: isListening
                    ? 'linear-gradient(135deg, #FF3B30 0%, #FF9500 100%)'
                    : 'linear-gradient(135deg, #0A84FF 0%, #5E5CE6 100%)',
                  border: 'none',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: isListening
                    ? '0 0 30px rgba(255, 59, 48, 0.5)'
                    : '0 8px 24px rgba(10, 132, 255, 0.35)',
                  transform: isListening ? 'scale(1.08)' : 'scale(1)',
                  transition: 'all 0.3s ease',
                }}
              >
                <Mic size={28} />
              </button>

              {/* Simulated Audio Waveform */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', height: '32px' }}>
                {[12, 24, 18, 28, 14, 26, 32, 20, 16, 24, 10, 18].map((h, i) => (
                  <span
                    key={i}
                    style={{
                      width: '4px',
                      height: isListening ? `${h}px` : '6px',
                      borderRadius: '2px',
                      background: isListening ? 'var(--accent)' : 'var(--subtleBorder)',
                      transition: 'height 0.15s ease',
                      animation: isListening ? `waveBar 0.8s ease-in-out ${i * 0.08}s infinite` : 'none',
                    }}
                  />
                ))}
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--textTertiary)', marginBottom: '4px' }}>
                  {isListening ? 'Listening via local speech engine...' : 'Live Transcribed Speech:'}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--textPrimary)', fontStyle: 'italic' }}>
                  "{voiceText}"
                </div>
              </div>

              <div style={{ fontSize: '0.78rem', color: 'var(--textTertiary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={14} style={{ color: 'var(--success)' }} />
                <span>Processed completely offline on your hardware</span>
              </div>
            </div>
          </GlassSurface>
        </div>

        {/* 3 Secondary Cards: Smart Scheduling, Auto-Categorization, Smart Reminders */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {/* Card: Smart Scheduling */}
          <GlassSurface interactive className="reveal-hidden reveal-delay-1" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: 'rgba(255, 159, 10, 0.15)',
                  color: 'var(--warning)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Calendar size={18} />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Smart Scheduling</h4>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', lineHeight: 1.5 }}>
              Taskora analyzes upcoming deadlines and balances workload to prevent burnout without complex manual calendar rearrangement.
            </p>
          </GlassSurface>

          {/* Card: Auto Categorization */}
          <GlassSurface interactive className="reveal-hidden reveal-delay-2" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: 'rgba(94, 92, 230, 0.15)',
                  color: '#5E5CE6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Layers size={18} />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Auto Categorization</h4>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', lineHeight: 1.5 }}>
              "Finish React Native project" is automatically routed to Coding Projects with associated tags and priority weights applied.
            </p>
          </GlassSurface>

          {/* Card: Smart Reminders */}
          <GlassSurface interactive className="reveal-hidden reveal-delay-3" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: 'rgba(255, 59, 48, 0.15)',
                  color: 'var(--error)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Bell size={18} />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Intelligent Reminders</h4>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', lineHeight: 1.5 }}>
              Timely, unobtrusive notifications that prompt you right when tasks need attention, with one-tap Snooze or Defer options.
            </p>
          </GlassSurface>
        </div>
      </div>
    </section>
  );
};

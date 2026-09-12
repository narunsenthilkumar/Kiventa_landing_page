import React from 'react';
import { X, Download, Sun, Moon, Laptop, Sparkles, CheckCircle2, Clock, Calendar, RefreshCw, Shield, Share2, MessageSquare } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { AnimatedButton } from '../common/AnimatedButton';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, activeSection }) => {
  const { mode, setMode } = useTheme();

  if (!isOpen) return null;

  const navLinks = [
    { id: 'features', label: 'Features', icon: <CheckCircle2 size={18} /> },
    { id: 'smart', label: 'Smart AI', icon: <Sparkles size={18} /> },
    { id: 'focus', label: 'Focus Mode', icon: <Clock size={18} /> },
    { id: 'calendar', label: 'Calendar', icon: <Calendar size={18} /> },
    { id: 'sync', label: 'Cross-Device Sync', icon: <RefreshCw size={18} /> },
    { id: 'nearby-sync', label: 'Nearby Sync (Bump)', icon: <Share2 size={18} /> },
    { id: 'privacy', label: 'Security & Privacy', icon: <Shield size={18} /> },
    { id: 'reviews', label: 'User Reviews', icon: <MessageSquare size={18} /> },
    { id: 'downloads', label: 'Downloads', icon: <Download size={18} /> },
  ];

  const handleLinkClick = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        background: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        animation: 'fadeIn 0.25s ease forwards',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxHeight: '90vh',
          background: 'var(--cardBackground)',
          borderBottom: '1px solid var(--glassBorder)',
          padding: '24px 20px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
          borderBottomLeftRadius: '28px',
          borderBottomRightRadius: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          overflowY: 'auto',
          animation: 'heroRise 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/assets/branding/kiventa_logo.png" alt="KIVENTA logo" style={{ width: '28px', height: '28px', borderRadius: '7px', objectFit: 'contain' }} />
            <span style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em' }}>KIVENTA</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              background: 'var(--pillBackground)',
              border: '1px solid var(--subtleBorder)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--textPrimary)',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '12px 16px',
                  borderRadius: '14px',
                  background: isActive ? 'var(--accentSoft)' : 'transparent',
                  color: isActive ? 'var(--accent)' : 'var(--textPrimary)',
                  border: 'none',
                  textAlign: 'left',
                  fontSize: '1rem',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
                }}
              >
                <span style={{ color: isActive ? 'var(--accent)' : 'var(--textSecondary)' }}>{link.icon}</span>
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Theme Selector */}
        <div
          style={{
            padding: '14px',
            borderRadius: '16px',
            background: 'var(--pillBackground)',
            border: '1px solid var(--subtleBorder)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--textSecondary)' }}>Theme</span>
          <div style={{ display: 'flex', gap: '6px', background: 'rgba(0,0,0,0.1)', padding: '3px', borderRadius: '12px' }}>
            <button
              onClick={() => setMode('light')}
              style={{
                padding: '6px 12px',
                borderRadius: '9px',
                border: 'none',
                background: mode === 'light' ? 'var(--cardBackground)' : 'transparent',
                color: mode === 'light' ? 'var(--accent)' : 'var(--textSecondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.8rem',
                fontWeight: 600,
                boxShadow: mode === 'light' ? '0 2px 6px rgba(0,0,0,0.15)' : 'none',
              }}
            >
              <Sun size={14} /> Light
            </button>
            <button
              onClick={() => setMode('dark')}
              style={{
                padding: '6px 12px',
                borderRadius: '9px',
                border: 'none',
                background: mode === 'dark' ? 'var(--cardBackground)' : 'transparent',
                color: mode === 'dark' ? 'var(--accent)' : 'var(--textSecondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.8rem',
                fontWeight: 600,
                boxShadow: mode === 'dark' ? '0 2px 6px rgba(0,0,0,0.15)' : 'none',
              }}
            >
              <Moon size={14} /> Dark
            </button>
            <button
              onClick={() => setMode('system')}
              style={{
                padding: '6px 12px',
                borderRadius: '9px',
                border: 'none',
                background: mode === 'system' ? 'var(--cardBackground)' : 'transparent',
                color: mode === 'system' ? 'var(--accent)' : 'var(--textSecondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.8rem',
                fontWeight: 600,
                boxShadow: mode === 'system' ? '0 2px 6px rgba(0,0,0,0.15)' : 'none',
              }}
            >
              <Laptop size={14} /> Auto
            </button>
          </div>
        </div>

        {/* CTA */}
        <AnimatedButton
          variant="download"
          size="lg"
          icon={<Download size={18} />}
          isDownloadAction
          onClick={() => handleLinkClick('downloads')}
          style={{ width: '100%' }}
        >
          Download KIVENTA
        </AnimatedButton>
      </div>
    </div>
  );
};

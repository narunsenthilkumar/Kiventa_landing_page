import React, { useState, useEffect } from 'react';
import { Download, Sun, Moon, Laptop, Menu } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { AnimatedButton } from '../common/AnimatedButton';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { mode, setMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'features', label: 'Features' },
    { id: 'smart', label: 'Smart AI' },
    { id: 'focus', label: 'Focus' },
    { id: 'calendar', label: 'Calendar' },
    { id: 'sync', label: 'Sync' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'downloads', label: 'Downloads' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 90,
          display: 'flex',
          justifyContent: 'center',
          padding: isScrolled ? '12px 16px' : '20px 24px',
          transition: 'padding 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'none',
        }}
      >
        <div
          className="glass-panel"
          style={{
            pointerEvents: 'auto',
            width: '100%',
            maxWidth: '1080px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 14px 8px 18px',
            borderRadius: '9999px',
            background: isScrolled ? 'var(--navBackground)' : 'var(--glassSurface)',
            borderColor: isScrolled ? 'var(--glassBorderHover)' : 'var(--glassBorder)',
            boxShadow: isScrolled
              ? '0 20px 40px -10px rgba(0, 0, 0, 0.45), 0 0 1px rgba(255, 255, 255, 0.2)'
              : '0 10px 30px -10px rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(24px) saturate(190%)',
            WebkitBackdropFilter: 'blur(24px) saturate(190%)',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Logo on Left */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <img
              src="/assets/branding/kiventa_logo.png"
              alt="KIVENTA logo"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '7px',
                objectFit: 'contain',
              }}
            />
            <span
              style={{
                fontWeight: 700,
                fontSize: '1.15rem',
                letterSpacing: '-0.02em',
                color: 'var(--textPrimary)',
              }}
            >
              KIVENTA
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: 'var(--pillBackground)',
              padding: '4px 6px',
              borderRadius: '9999px',
              border: '1px solid var(--subtleBorder)',
            }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  style={{
                    background: isActive ? 'var(--cardBackground)' : 'transparent',
                    color: isActive ? 'var(--textPrimary)' : 'var(--textSecondary)',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '6px 14px',
                    fontSize: '0.86rem',
                    fontWeight: isActive ? 600 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.12)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget.style.color = 'var(--textPrimary)');
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget.style.color = 'var(--textSecondary)');
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle & Download CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Theme Dropdown / Quick Switch */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                aria-label="Toggle theme selector"
                style={{
                  background: 'var(--pillBackground)',
                  border: '1px solid var(--subtleBorder)',
                  color: 'var(--textPrimary)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {mode === 'light' ? <Sun size={17} /> : mode === 'dark' ? <Moon size={17} /> : <Laptop size={17} />}
              </button>

              {isThemeMenuOpen && (
                <div
                  className="glass-panel"
                  style={{
                    position: 'absolute',
                    top: '46px',
                    right: 0,
                    padding: '6px',
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    minWidth: '130px',
                    boxShadow: '0 16px 36px rgba(0,0,0,0.3)',
                    zIndex: 100,
                  }}
                >
                  <button
                    onClick={() => {
                      setMode('light');
                      setIsThemeMenuOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      border: 'none',
                      borderRadius: '10px',
                      background: mode === 'light' ? 'var(--accentSoft)' : 'transparent',
                      color: mode === 'light' ? 'var(--accent)' : 'var(--textPrimary)',
                      fontSize: '0.84rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <Sun size={15} /> Light
                  </button>
                  <button
                    onClick={() => {
                      setMode('dark');
                      setIsThemeMenuOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      border: 'none',
                      borderRadius: '10px',
                      background: mode === 'dark' ? 'var(--accentSoft)' : 'transparent',
                      color: mode === 'dark' ? 'var(--accent)' : 'var(--textPrimary)',
                      fontSize: '0.84rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <Moon size={15} /> Dark
                  </button>
                  <button
                    onClick={() => {
                      setMode('system');
                      setIsThemeMenuOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      border: 'none',
                      borderRadius: '10px',
                      background: mode === 'system' ? 'var(--accentSoft)' : 'transparent',
                      color: mode === 'system' ? 'var(--accent)' : 'var(--textPrimary)',
                      fontSize: '0.84rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <Laptop size={15} /> Auto (System)
                  </button>
                </div>
              )}
            </div>

            {/* Primary Download Button */}
            <div className="desktop-cta">
              <AnimatedButton
                variant="download"
                size="sm"
                icon={<Download size={15} />}
                isDownloadAction
                onClick={() => scrollTo('downloads')}
              >
                Download
              </AnimatedButton>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              style={{
                background: 'var(--pillBackground)',
                border: '1px solid var(--subtleBorder)',
                color: 'var(--textPrimary)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Navbar CSS helper */}
      <style>{`
        @media (max-width: 860px) {
          .desktop-nav, .desktop-cta {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>

      {/* Mobile Glass Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};

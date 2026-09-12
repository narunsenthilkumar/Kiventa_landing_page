import React from 'react';

interface DeviceFrameProps {
  children: React.ReactNode;
  type?: 'macos' | 'iphone' | 'laptop' | 'browser';
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const DeviceFrame: React.FC<DeviceFrameProps> = ({
  children,
  type = 'macos',
  title = 'KIVENTA',
  className = '',
  style,
}) => {
  if (type === 'iphone') {
    return (
      <div
        className={`device-frame-iphone ${className}`}
        style={{
          borderRadius: '44px',
          border: '8px solid rgba(255, 255, 255, 0.15)',
          background: 'var(--cardBackground)',
          boxShadow: '0 30px 70px -10px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
          position: 'relative',
          maxWidth: '340px',
          margin: '0 auto',
          ...style,
        }}
      >
        {/* Dynamic Island / Notch */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '88px',
            height: '22px',
            background: '#000000',
            borderRadius: '16px',
            zIndex: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 8px',
          }}
        >
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1c1c1e' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#0a84ff', opacity: 0.8 }} />
        </div>
        <div style={{ paddingTop: '42px' }}>{children}</div>
      </div>
    );
  }

  // macOS / Browser Window Frame
  return (
    <div
      className={`device-frame-macos ${className}`}
      style={{
        borderRadius: '24px',
        border: '1px solid var(--glassBorder)',
        background: 'var(--cardBackground)',
        boxShadow: 'var(--glassShadow)',
        overflow: 'hidden',
        position: 'relative',
        ...style,
      }}
    >
      {/* Title Bar with Traffic Lights */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 18px',
          background: 'var(--glassSurface)',
          borderBottom: '1px solid var(--subtleBorder)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F56', display: 'inline-block' }} />
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E', display: 'inline-block' }} />
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27C93F', display: 'inline-block' }} />
        </div>

        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--textSecondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <img src="/assets/branding/kiventa_logo.png" alt="" style={{ width: '14px', height: '14px', borderRadius: '3px', objectFit: 'contain' }} />
          <span>{title}</span>
        </div>

        <div style={{ width: '52px' }} />
      </div>

      <div>{children}</div>
    </div>
  );
};

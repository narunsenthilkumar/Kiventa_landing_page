import React from 'react';

interface PillBadgeProps {
  label: string;
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'urgent' | 'purple' | 'subtle';
  icon?: React.ReactNode;
  dot?: boolean;
  pulse?: boolean;
  size?: 'sm' | 'md';
  className?: string;
  onClick?: () => void;
}

export const PillBadge: React.FC<PillBadgeProps> = ({
  label,
  variant = 'default',
  icon,
  dot = false,
  pulse = false,
  size = 'md',
  className = '',
  onClick,
}) => {
  const getColors = () => {
    switch (variant) {
      case 'accent':
        return {
          bg: 'rgba(10, 132, 255, 0.12)',
          text: 'var(--accent)',
          border: 'rgba(10, 132, 255, 0.25)',
          dot: 'var(--accent)',
        };
      case 'success':
        return {
          bg: 'rgba(48, 209, 88, 0.12)',
          text: 'var(--success)',
          border: 'rgba(48, 209, 88, 0.25)',
          dot: 'var(--success)',
        };
      case 'warning':
        return {
          bg: 'rgba(255, 159, 10, 0.12)',
          text: 'var(--warning)',
          border: 'rgba(255, 159, 10, 0.25)',
          dot: 'var(--warning)',
        };
      case 'urgent':
        return {
          bg: 'rgba(255, 69, 58, 0.12)',
          text: 'var(--error)',
          border: 'rgba(255, 69, 58, 0.25)',
          dot: 'var(--error)',
        };
      case 'purple':
        return {
          bg: 'rgba(94, 92, 230, 0.12)',
          text: 'var(--priorityMedium)',
          border: 'rgba(94, 92, 230, 0.25)',
          dot: 'var(--priorityMedium)',
        };
      case 'subtle':
        return {
          bg: 'var(--pillBackground)',
          text: 'var(--textTertiary)',
          border: 'var(--subtleBorder)',
          dot: 'var(--textQuaternary)',
        };
      default:
        return {
          bg: 'var(--pillBackground)',
          text: 'var(--textPrimary)',
          border: 'var(--glassBorder)',
          dot: 'var(--accent)',
        };
    }
  };

  const styleConfig = getColors();

  return (
    <span
      onClick={onClick}
      className={`glass-pill ${onClick ? 'interactive' : ''} ${className}`}
      style={{
        background: styleConfig.bg,
        color: styleConfig.text,
        borderColor: styleConfig.border,
        padding: size === 'sm' ? '3px 10px' : '6px 14px',
        fontSize: size === 'sm' ? '0.75rem' : '0.84rem',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.2s ease',
      }}
    >
      {dot && (
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: styleConfig.dot,
            display: 'inline-block',
            animation: pulse ? 'pulseRing 2s infinite' : 'none',
          }}
        />
      )}
      {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
      <span>{label}</span>
    </span>
  );
};

import React, { useState } from 'react';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost' | 'download';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  external?: boolean;
  download?: boolean | string;
  isDownloadAction?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  href,
  external,
  download,
  isDownloadAction = false,
  className = '',
  style,
  onClick,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Size styling
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: '8px 16px', fontSize: '0.875rem', borderRadius: '12px' },
    md: { padding: '12px 24px', fontSize: '0.975rem', borderRadius: '16px' },
    lg: { padding: '15px 32px', fontSize: '1.05rem', borderRadius: '18px' },
    xl: { padding: '18px 40px', fontSize: '1.15rem', borderRadius: '22px' },
  };

  // Variant styling
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          background: 'linear-gradient(135deg, var(--accentGradientStart) 0%, var(--accentGradientEnd) 100%)',
          color: '#FFFFFF',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          boxShadow: isHovered
            ? '0 16px 32px -8px var(--glowColor), 0 0 1px rgba(255, 255, 255, 0.4)'
            : '0 8px 20px -6px var(--glowColor)',
        };
      case 'download':
        return {
          background: 'linear-gradient(135deg, #0A84FF 0%, #5E5CE6 100%)',
          color: '#FFFFFF',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: isHovered
            ? '0 20px 40px -10px rgba(10, 132, 255, 0.45), 0 0 2px rgba(255, 255, 255, 0.6)'
            : '0 8px 24px -6px rgba(10, 132, 255, 0.3)',
        };
      case 'secondary':
        return {
          background: 'var(--pillBackground)',
          color: 'var(--textPrimary)',
          border: '1px solid var(--glassBorder)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        };
      case 'glass':
        return {
          background: isHovered ? 'var(--glassSurfaceHover)' : 'var(--glassSurface)',
          color: 'var(--textPrimary)',
          border: '1px solid var(--glassBorder)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: isHovered ? '0 12px 28px rgba(0,0,0,0.15)' : '0 4px 12px rgba(0,0,0,0.06)',
        };
      case 'ghost':
        return {
          background: 'transparent',
          color: 'var(--textSecondary)',
          border: '1px solid transparent',
        };
      default:
        return {};
    }
  };

  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
    transform: isPressed ? 'scale(0.96)' : isHovered ? 'translateY(-2px)' : 'none',
    outline: 'none',
    userSelect: 'none',
    ...sizeStyles[size],
    ...getVariantStyles(),
    ...style,
  };

  const iconStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
    transform: isDownloadAction && isHovered ? 'translateY(2px)' : isHovered && iconPosition === 'right' ? 'translateX(3px)' : 'none',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span style={iconStyle}>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span style={iconStyle}>{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        download={download}
        style={buttonStyle}
        className={`animated-btn shimmer-trigger ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsPressed(false);
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      style={buttonStyle}
      className={`animated-btn shimmer-trigger ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

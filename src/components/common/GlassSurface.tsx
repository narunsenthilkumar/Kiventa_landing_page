import React from 'react';

interface GlassSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'card' | 'panel' | 'pill' | 'subtle';
  interactive?: boolean;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
}

export const GlassSurface: React.FC<GlassSurfaceProps> = ({
  children,
  variant = 'card',
  interactive = false,
  className = '',
  style,
  ...props
}) => {
  const baseClass = variant === 'panel' ? 'glass-panel' : variant === 'pill' ? 'glass-pill' : 'glass-card';
  const interactiveClass = interactive ? 'glass-card-interactive' : '';

  return (
    <div
      className={`${baseClass} ${interactiveClass} ${className}`.trim()}
      style={{
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

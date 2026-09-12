import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  id?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  onRatingChange,
  readOnly = false,
  size = 'md',
  id = 'star-rating',
}) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const starSizes = {
    sm: 14,
    md: 20,
    lg: 28,
  };

  const currentSize = starSizes[size];
  const activeScore = hoverRating !== null ? hoverRating : rating;

  const handleKeyDown = (e: React.KeyboardEvent, starIndex: number) => {
    if (readOnly || !onRatingChange) return;

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onRatingChange(starIndex);
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(5, starIndex + 1);
      onRatingChange(next);
      const nextBtn = document.getElementById(`${id}-star-${next}`);
      nextBtn?.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      const prev = Math.max(1, starIndex - 1);
      onRatingChange(prev);
      const prevBtn = document.getElementById(`${id}-star-${prev}`);
      prevBtn?.focus();
    }
  };

  return (
    <div
      role={readOnly ? 'img' : 'radiogroup'}
      aria-label={readOnly ? `Rating: ${rating} out of 5 stars` : 'Rate KIVENTA (1 to 5 stars)'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size === 'sm' ? '2px' : '4px',
      }}
    >
      {[1, 2, 3, 4, 5].map((starIndex) => {
        const isFilled = starIndex <= activeScore;

        if (readOnly) {
          return (
            <span
              key={starIndex}
              aria-hidden="true"
              style={{
                display: 'inline-flex',
                color: isFilled ? '#FF9F0A' : 'var(--textQuaternary)',
                transition: 'color 0.15s ease',
              }}
            >
              <Star
                size={currentSize}
                fill={isFilled ? '#FF9F0A' : 'none'}
                strokeWidth={isFilled ? 0 : 1.5}
              />
            </span>
          );
        }

        return (
          <button
            key={starIndex}
            id={`${id}-star-${starIndex}`}
            type="button"
            role="radio"
            aria-checked={rating === starIndex}
            aria-label={`${starIndex} star${starIndex > 1 ? 's' : ''}`}
            tabIndex={rating === starIndex || (rating === 0 && starIndex === 1) ? 0 : -1}
            onClick={() => onRatingChange?.(starIndex)}
            onMouseEnter={() => setHoverRating(starIndex)}
            onMouseLeave={() => setHoverRating(null)}
            onKeyDown={(e) => handleKeyDown(e, starIndex)}
            style={{
              background: 'transparent',
              border: 'none',
              padding: '4px',
              cursor: 'pointer',
              color: isFilled ? '#FF9F0A' : 'var(--textQuaternary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '6px',
              outline: 'none',
              transition: 'transform 0.12s ease, color 0.15s ease',
              transform: hoverRating === starIndex ? 'scale(1.2)' : 'scale(1)',
            }}
            onFocus={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 2px var(--accent)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Star
              size={currentSize}
              fill={isFilled ? '#FF9F0A' : 'transparent'}
              stroke={isFilled ? '#FF9F0A' : 'currentColor'}
              strokeWidth={1.75}
            />
          </button>
        );
      })}
    </div>
  );
};

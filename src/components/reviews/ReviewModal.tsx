import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { StarRating } from './StarRating';
import { createReview } from '../../services/reviewService';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitted?: () => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, onSubmitted }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [errors, setErrors] = useState<{ name?: string; rating?: string; review?: string; general?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Focus trap & escape key handler
  useEffect(() => {
    if (!isOpen) {
      // Reset state on close
      setName('');
      setEmail('');
      setRating(5);
      setReviewText('');
      setErrors({});
      setIsSubmitting(false);
      setIsSubmitted(false);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    setTimeout(() => nameInputRef.current?.focus(), 100);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: typeof errors = {};
    const trimmedName = name.trim();
    const trimmedReview = reviewText.trim();

    if (!trimmedName) {
      errs.name = 'Please enter your name.';
    } else if (trimmedName.length < 2) {
      errs.name = 'Name must be at least 2 characters long.';
    } else if (trimmedName.length > 80) {
      errs.name = 'Name must be 80 characters or less.';
    }

    if (!rating || rating < 1 || rating > 5) {
      errs.rating = 'Please choose a star rating (1–5).';
    }

    if (!trimmedReview) {
      errs.review = 'Please enter your review.';
    } else if (trimmedReview.length < 10) {
      errs.review = `Review must be at least 10 characters (${trimmedReview.length}/10).`;
    } else if (trimmedReview.length > 1000) {
      errs.review = 'Review must not exceed 1000 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSubmitted) return;

    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    const result = await createReview({
      name: name.trim(),
      email: email.trim() || undefined,
      rating,
      review: reviewText.trim(),
    });

    setIsSubmitting(false);

    if (result.error) {
      setErrors({ general: result.error });
    } else {
      setIsSubmitted(true);
      onSubmitted?.();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="review-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        background: 'rgba(0, 0, 0, 0.68)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        animation: 'fadeIn 0.2s ease forwards',
      }}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '520px',
          background: 'var(--cardBackground)',
          borderRadius: '28px',
          border: '1px solid var(--glassBorder)',
          boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.7), 0 0 1px rgba(255, 255, 255, 0.18)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          animation: 'scaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '22px 28px',
            borderBottom: '1px solid var(--subtleBorder)',
            background: 'var(--glassSurface)',
          }}
        >
          <div>
            <h3 id="review-modal-title" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
              {isSubmitted ? 'Review Received' : 'Write a Review'}
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--textTertiary)', marginTop: '2px' }}>
              {isSubmitted ? 'Thank you for your feedback' : 'Share your genuine experience with KIVENTA'}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              background: 'var(--pillBackground)',
              border: '1px solid var(--subtleBorder)',
              color: 'var(--textSecondary)',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '26px 28px' }}>
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(48, 209, 88, 0.12)',
                  color: 'var(--success)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <CheckCircle2 size={36} />
              </div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>
                Thank you for your review!
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--textSecondary)', maxWidth: '380px', margin: '0 auto 24px auto', lineHeight: 1.5 }}>
                Your review has been submitted and will appear on the KIVENTA landing page once verified by our moderation team.
              </p>
              <button
                type="button"
                onClick={onClose}
                style={{
                  padding: '12px 28px',
                  borderRadius: '9999px',
                  background: 'var(--accent)',
                  color: '#FFFFFF',
                  border: 'none',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px -4px rgba(10, 132, 255, 0.4)',
                }}
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* General Error Banner */}
              {errors.general && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'rgba(255, 69, 58, 0.12)',
                    border: '1px solid rgba(255, 69, 58, 0.3)',
                    color: 'var(--error)',
                    fontSize: '0.86rem',
                    marginBottom: '20px',
                  }}
                >
                  <AlertCircle size={18} style={{ flexShrink: 0 }} />
                  <span>{errors.general}</span>
                </div>
              )}

              {/* Star Rating Selector */}
              <div style={{ marginBottom: '22px' }}>
                <label
                  htmlFor="review-rating"
                  style={{
                    display: 'block',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    marginBottom: '8px',
                    color: 'var(--textPrimary)',
                  }}
                >
                  Your Rating <span style={{ color: 'var(--error)' }}>*</span>
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <StarRating
                    id="review-rating"
                    rating={rating}
                    onRatingChange={(newRating) => {
                      setRating(newRating);
                      if (errors.rating) setErrors((prev) => ({ ...prev, rating: undefined }));
                    }}
                    size="lg"
                  />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--textSecondary)' }}>
                    {rating} of 5 stars
                  </span>
                </div>
                {errors.rating && (
                  <p style={{ color: 'var(--error)', fontSize: '0.8rem', marginTop: '6px' }}>{errors.rating}</p>
                )}
              </div>

              {/* Name Field */}
              <div style={{ marginBottom: '18px' }}>
                <label
                  htmlFor="review-name"
                  style={{
                    display: 'block',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    marginBottom: '6px',
                    color: 'var(--textPrimary)',
                  }}
                >
                  Your Name <span style={{ color: 'var(--error)' }}>*</span>
                </label>
                <input
                  ref={nameInputRef}
                  id="review-name"
                  type="text"
                  required
                  maxLength={80}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  placeholder="e.g. Sarah Connor"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'var(--pillBackground)',
                    border: errors.name ? '1px solid var(--error)' : '1px solid var(--subtleBorder)',
                    color: 'var(--textPrimary)',
                    fontSize: '0.94rem',
                    outline: 'none',
                    transition: 'border-color 0.15s ease',
                  }}
                  onFocus={(e) => {
                    if (!errors.name) e.currentTarget.style.borderColor = 'var(--accent)';
                  }}
                  onBlur={(e) => {
                    if (!errors.name) e.currentTarget.style.borderColor = 'var(--subtleBorder)';
                  }}
                />
                {errors.name && (
                  <p style={{ color: 'var(--error)', fontSize: '0.8rem', marginTop: '4px' }}>{errors.name}</p>
                )}
              </div>

              {/* Optional Email Field */}
              <div style={{ marginBottom: '18px' }}>
                <label
                  htmlFor="review-email"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    marginBottom: '6px',
                    color: 'var(--textPrimary)',
                  }}
                >
                  <span>Email</span>
                  <span style={{ fontSize: '0.76rem', color: 'var(--textTertiary)', fontWeight: 400 }}>
                    Never displayed publicly
                  </span>
                </label>
                <input
                  id="review-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'var(--pillBackground)',
                    border: '1px solid var(--subtleBorder)',
                    color: 'var(--textPrimary)',
                    fontSize: '0.94rem',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Review Text Area */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label
                    htmlFor="review-text"
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--textPrimary)',
                    }}
                  >
                    Your Review <span style={{ color: 'var(--error)' }}>*</span>
                  </label>
                  <span
                    style={{
                      fontSize: '0.76rem',
                      color: reviewText.trim().length < 10 ? 'var(--textTertiary)' : 'var(--success)',
                    }}
                  >
                    {reviewText.trim().length} / 1000 characters
                  </span>
                </div>
                <textarea
                  id="review-text"
                  required
                  rows={4}
                  maxLength={1000}
                  value={reviewText}
                  onChange={(e) => {
                    setReviewText(e.target.value);
                    if (errors.review) setErrors((prev) => ({ ...prev, review: undefined }));
                  }}
                  placeholder="What do you love most about using KIVENTA? How has it helped your daily workflow?"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '14px',
                    background: 'var(--pillBackground)',
                    border: errors.review ? '1px solid var(--error)' : '1px solid var(--subtleBorder)',
                    color: 'var(--textPrimary)',
                    fontSize: '0.92rem',
                    lineHeight: 1.5,
                    resize: 'vertical',
                    outline: 'none',
                    minHeight: '100px',
                  }}
                  onFocus={(e) => {
                    if (!errors.review) e.currentTarget.style.borderColor = 'var(--accent)';
                  }}
                  onBlur={(e) => {
                    if (!errors.review) e.currentTarget.style.borderColor = 'var(--subtleBorder)';
                  }}
                />
                {errors.review && (
                  <p style={{ color: 'var(--error)', fontSize: '0.8rem', marginTop: '4px' }}>{errors.review}</p>
                )}
              </div>

              {/* Submit & Cancel Actions */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px' }}>
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '9999px',
                    background: 'transparent',
                    border: '1px solid var(--subtleBorder)',
                    color: 'var(--textSecondary)',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  id="submit-review-btn"
                  disabled={isSubmitting}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 24px',
                    borderRadius: '9999px',
                    background: isSubmitting ? 'var(--accentSoft)' : 'var(--accent)',
                    color: '#FFFFFF',
                    border: 'none',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    boxShadow: '0 4px 14px -2px rgba(10, 132, 255, 0.45)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="spin-animation" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Submit Review</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

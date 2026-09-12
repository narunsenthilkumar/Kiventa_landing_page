import React, { useState, useEffect, useCallback } from 'react';
import { MessageSquarePlus, ShieldCheck, ChevronDown, Sparkles, Loader2 } from 'lucide-react';
import { GlassSurface } from '../common/GlassSurface';
import { StarRating } from './StarRating';
import { ReviewModal } from './ReviewModal';
import { ReviewModerationModal } from './ReviewModerationModal';
import { Review, ReviewSummary } from '../../types/review';
import { getApprovedReviews, getReviewSummary, subscribeToReviews } from '../../services/reviewService';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [summary, setSummary] = useState<ReviewSummary>({
    averageRating: 0,
    totalCount: 0,
    ratingDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
  });
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [offset, setOffset] = useState(0);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [isModerationModalOpen, setIsModerationModalOpen] = useState(false);

  const PAGE_SIZE = 6;

  // Fetch initial summary and first page of reviews
  const loadData = useCallback(async () => {
    setLoading(true);
    const [summaryRes, reviewsRes] = await Promise.all([
      getReviewSummary(),
      getApprovedReviews(PAGE_SIZE, 0),
    ]);

    if (summaryRes.data) {
      setSummary(summaryRes.data);
    }

    if (reviewsRes.data) {
      setReviews(reviewsRes.data.reviews);
      setHasMore(reviewsRes.data.hasMore);
      setOffset(reviewsRes.data.reviews.length);
    }
    setLoading(false);
  }, []);

  // Realtime subscription setup
  useEffect(() => {
    loadData();

    // Subscribe to changes in the database
    const unsubscribe = subscribeToReviews(() => {
      // Reload reviews and summary when changes happen in database
      loadData();
    });

    return () => {
      unsubscribe();
    };
  }, [loadData]);

  // Load more pagination
  const handleLoadMore = async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);

    const res = await getApprovedReviews(PAGE_SIZE, offset);
    setLoadingMore(false);

    if (res.data) {
      setReviews((prev) => [...prev, ...res.data!.reviews]);
      setHasMore(res.data.hasMore);
      setOffset((prev) => prev + res.data!.reviews.length);
    }
  };

  const formatReviewDate = (isoString: string): string => {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      });
    } catch {
      return '';
    }
  };

  return (
    <section
      id="reviews"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, transparent 0%, rgba(10, 132, 255, 0.03) 50%, transparent 100%)',
      }}
    >
      {/* Ambient background glow */}
      <div
        className="ambient-glow"
        style={{
          top: '25%',
          left: '5%',
          width: '520px',
          height: '520px',
          background: 'radial-gradient(circle, rgba(10, 132, 255, 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="section-container">
        {/* Section Header */}
        <div className="section-header reveal-hidden">
          <span className="section-tag">Community Feedback</span>
          <h2 className="text-gradient-hero">Reviews from KIVENTA Users</h2>
          <p>
            Authentic experiences from developers, designers, and productive individuals organizing their work with KIVENTA.
          </p>
        </div>

        {/* Dynamic Summary Card & Action Bar */}
        <GlassSurface
          className="reveal-hidden"
          style={{
            maxWidth: '1020px',
            margin: '0 auto 44px auto',
            padding: '36px 32px',
            borderRadius: '28px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
            }}
          >
            {/* Left: Dynamic Average Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              {summary.totalCount > 0 ? (
                <>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <span style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>
                      {summary.averageRating.toFixed(1)}
                    </span>
                    <span style={{ fontSize: '1.2rem', color: 'var(--textTertiary)', fontWeight: 600 }}>/ 5</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <StarRating rating={Math.round(summary.averageRating)} readOnly size="md" />
                    </div>
                    <span style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', fontWeight: 500 }}>
                      Based on {summary.totalCount} verified {summary.totalCount === 1 ? 'review' : 'reviews'}
                    </span>
                  </div>
                </>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'var(--accentSoft)',
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Be the first to review KIVENTA.</h3>
                    <p style={{ fontSize: '0.86rem', color: 'var(--textTertiary)' }}>
                      Share your experience and help others build a focused workflow.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Write a Review Button */}
              <button
                type="button"
                id="write-review-button"
                onClick={() => setIsWriteModalOpen(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  background: 'var(--accent)',
                  color: '#FFFFFF',
                  border: 'none',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px -6px rgba(10, 132, 255, 0.45)',
                  transition: 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.18s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px -6px rgba(10, 132, 255, 0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px -6px rgba(10, 132, 255, 0.45)';
                }}
              >
                <MessageSquarePlus size={18} />
                <span>Write a Review</span>
              </button>

              {/* Staff Moderation Portal Button */}
              <button
                type="button"
                onClick={() => setIsModerationModalOpen(true)}
                title="Open Review Moderation"
                aria-label="Open staff moderation portal"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--pillBackground)',
                  border: '1px solid var(--subtleBorder)',
                  color: 'var(--textSecondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--textPrimary)';
                  e.currentTarget.style.borderColor = 'var(--glassBorderHover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--textSecondary)';
                  e.currentTarget.style.borderColor = 'var(--subtleBorder)';
                }}
              >
                <ShieldCheck size={18} />
              </button>
            </div>
          </div>
        </GlassSurface>

        {/* Reviews Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--textTertiary)' }}>
            <Loader2 size={32} className="spin-animation" style={{ margin: '0 auto 12px auto' }} />
            <p style={{ fontSize: '0.95rem' }}>Loading reviews from Supabase...</p>
          </div>
        ) : reviews.length === 0 ? (
          <GlassSurface
            className="reveal-hidden"
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              padding: '48px 30px',
              textAlign: 'center',
              borderRadius: '24px',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'var(--accentSoft)',
                color: 'var(--accent)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <MessageSquarePlus size={26} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>
              No public reviews yet
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--textSecondary)', maxWidth: '400px', margin: '0 auto 20px auto', lineHeight: 1.5 }}>
              KIVENTA is built with love and privacy. Click below to submit your rating and be featured right here!
            </p>
            <button
              onClick={() => setIsWriteModalOpen(true)}
              style={{
                padding: '10px 22px',
                borderRadius: '9999px',
                background: 'var(--accent)',
                color: '#FFFFFF',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Write First Review
            </button>
          </GlassSurface>
        ) : (
          <>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '24px',
                maxWidth: '1020px',
                margin: '0 auto',
              }}
            >
              {reviews.map((rev, idx) => (
                <GlassSurface
                  key={rev.id}
                  interactive
                  className={`reveal-hidden reveal-delay-${(idx % 3) + 1}`}
                  style={{
                    padding: '28px',
                    borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '210px',
                  }}
                >
                  {/* Top: Stars & Quote */}
                  <div>
                    <div style={{ marginBottom: '14px' }}>
                      <StarRating rating={rev.rating} readOnly size="sm" />
                    </div>
                    <p
                      style={{
                        fontSize: '0.94rem',
                        color: 'var(--textPrimary)',
                        lineHeight: 1.6,
                        fontStyle: 'normal',
                      }}
                    >
                      "{rev.review}"
                    </p>
                  </div>

                  {/* Bottom: Author & Date */}
                  <div
                    style={{
                      borderTop: '1px solid var(--subtleBorder)',
                      paddingTop: '16px',
                      marginTop: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, var(--accentGradientStart) 0%, var(--accentGradientEnd) 100%)',
                          color: '#FFFFFF',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textTransform: 'uppercase',
                        }}
                      >
                        {rev.name.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--textPrimary)' }}>
                          {rev.name}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--textTertiary)' }}>
                          KIVENTA User
                        </div>
                      </div>
                    </div>

                    <div style={{ fontSize: '0.78rem', color: 'var(--textTertiary)' }}>
                      {formatReviewDate(rev.createdAt)}
                    </div>
                  </div>
                </GlassSurface>
              ))}
            </div>

            {/* Pagination: "View More Reviews" */}
            {hasMore && (
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <button
                  type="button"
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 28px',
                    borderRadius: '9999px',
                    background: 'var(--cardBackground)',
                    border: '1px solid var(--glassBorder)',
                    color: 'var(--textPrimary)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: loadingMore ? 'not-allowed' : 'pointer',
                    boxShadow: 'var(--glassShadow)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--glassBorderHover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--glassBorder)';
                  }}
                >
                  {loadingMore ? (
                    <>
                      <Loader2 size={16} className="spin-animation" />
                      <span>Loading more...</span>
                    </>
                  ) : (
                    <>
                      <span>View More Reviews</span>
                      <ChevronDown size={16} />
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Review Submission Modal Dialog */}
      <ReviewModal
        isOpen={isWriteModalOpen}
        onClose={() => setIsWriteModalOpen(false)}
        onSubmitted={() => {
          // Note: Under moderation, new review is pending so won't appear until approved
        }}
      />

      {/* Staff Review Moderation Modal */}
      <ReviewModerationModal
        isOpen={isModerationModalOpen}
        onClose={() => setIsModerationModalOpen(false)}
        onReviewUpdated={loadData}
      />
    </section>
  );
};

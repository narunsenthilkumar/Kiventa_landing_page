import React, { useState, useEffect } from 'react';
import { X, Check, Ban, Trash2, RefreshCw, ShieldAlert, Loader2 } from 'lucide-react';
import { Review, ReviewStatus } from '../../types/review';
import { getAdminReviews, moderateReview, deleteAdminReview } from '../../services/reviewService';
import { StarRating } from './StarRating';

interface ReviewModerationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewUpdated?: () => void;
}

export const ReviewModerationModal: React.FC<ReviewModerationModalProps> = ({
  isOpen,
  onClose,
  onReviewUpdated,
}) => {
  const [activeTab, setActiveTab] = useState<ReviewStatus>('pending');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchReviews = async () => {
    setLoading(true);
    setError(null);
    const res = await getAdminReviews(activeTab);
    setLoading(false);
    if (res.error) {
      setError(res.error);
    } else {
      setReviews(res.data || []);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchReviews();
    }
  }, [isOpen, activeTab]);

  if (!isOpen) return null;

  const handleModerate = async (id: string, newStatus: 'approved' | 'rejected') => {
    setActionLoadingId(id);
    const res = await moderateReview(id, newStatus);
    setActionLoadingId(null);
    if (!res.error) {
      // Refresh list
      setReviews((prev) => prev.filter((r) => r.id !== id));
      onReviewUpdated?.();
    } else {
      alert(res.error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to permanently delete this review?')) return;
    setActionLoadingId(id);
    const res = await deleteAdminReview(id);
    setActionLoadingId(null);
    if (!res.error) {
      setReviews((prev) => prev.filter((r) => r.id !== id));
      onReviewUpdated?.();
    } else {
      alert(res.error);
    }
  };

  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return '';
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="moderation-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 160,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        background: 'rgba(0, 0, 0, 0.72)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        animation: 'fadeIn 0.2s ease forwards',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '780px',
          maxHeight: '85vh',
          background: 'var(--cardBackground)',
          borderRadius: '28px',
          border: '1px solid var(--glassBorder)',
          boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.8)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'scaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 24px',
            borderBottom: '1px solid var(--subtleBorder)',
            background: 'var(--glassSurface)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--accentSoft)',
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ShieldAlert size={20} />
            </div>
            <div>
              <h3 id="moderation-modal-title" style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                Review Moderation Hub
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--textTertiary)' }}>
                Inspect, approve, or reject submissions before public release
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={fetchReviews}
              disabled={loading}
              title="Refresh reviews"
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
              }}
            >
              <RefreshCw size={15} className={loading ? 'spin-animation' : ''} />
            </button>

            <button
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
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Tab Filters */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            padding: '12px 24px',
            borderBottom: '1px solid var(--subtleBorder)',
            background: 'var(--pillBackground)',
          }}
        >
          {(['pending', 'approved', 'rejected'] as ReviewStatus[]).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  border: 'none',
                  background: isActive ? 'var(--cardBackground)' : 'transparent',
                  color: isActive ? 'var(--textPrimary)' : 'var(--textSecondary)',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.85rem',
                  textTransform: 'capitalize',
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.15)' : 'none',
                  transition: 'all 0.18s ease',
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Content List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '50px 0', color: 'var(--textTertiary)' }}>
              <Loader2 size={30} className="spin-animation" style={{ margin: '0 auto 12px auto' }} />
              <p>Loading {activeTab} reviews...</p>
            </div>
          ) : error ? (
            <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--error)' }}>
              <p>{error}</p>
            </div>
          ) : reviews.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--textTertiary)' }}>
              <p style={{ fontSize: '1rem', fontWeight: 500 }}>No {activeTab} reviews found.</p>
              <p style={{ fontSize: '0.82rem', marginTop: '4px' }}>
                New submissions will automatically show up here for moderation.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {reviews.map((r) => {
                const isProcessing = actionLoadingId === r.id;
                return (
                  <div
                    key={r.id}
                    style={{
                      padding: '18px 20px',
                      borderRadius: '18px',
                      background: 'var(--glassSurface)',
                      border: '1px solid var(--subtleBorder)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ fontWeight: 700, fontSize: '0.98rem' }}>{r.name}</span>
                          {r.email && (
                            <span style={{ fontSize: '0.78rem', color: 'var(--textTertiary)' }}>
                              ({r.email})
                            </span>
                          )}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                          <StarRating rating={r.rating} readOnly size="sm" />
                          <span style={{ fontSize: '0.78rem', color: 'var(--textTertiary)' }}>
                            • {formatDate(r.createdAt)}
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {r.status !== 'approved' && (
                          <button
                            onClick={() => handleModerate(r.id, 'approved')}
                            disabled={isProcessing}
                            title="Approve review"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '5px',
                              padding: '6px 12px',
                              borderRadius: '8px',
                              background: 'rgba(48, 209, 88, 0.15)',
                              color: 'var(--success)',
                              border: 'none',
                              fontSize: '0.82rem',
                              fontWeight: 600,
                              cursor: isProcessing ? 'not-allowed' : 'pointer',
                            }}
                          >
                            <Check size={14} /> Approve
                          </button>
                        )}

                        {r.status !== 'rejected' && (
                          <button
                            onClick={() => handleModerate(r.id, 'rejected')}
                            disabled={isProcessing}
                            title="Reject review"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '5px',
                              padding: '6px 12px',
                              borderRadius: '8px',
                              background: 'rgba(255, 159, 10, 0.15)',
                              color: 'var(--warning)',
                              border: 'none',
                              fontSize: '0.82rem',
                              fontWeight: 600,
                              cursor: isProcessing ? 'not-allowed' : 'pointer',
                            }}
                          >
                            <Ban size={14} /> Reject
                          </button>
                        )}

                        <button
                          onClick={() => handleDelete(r.id)}
                          disabled={isProcessing}
                          title="Delete review"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '6px 10px',
                            borderRadius: '8px',
                            background: 'rgba(255, 69, 58, 0.12)',
                            color: 'var(--error)',
                            border: 'none',
                            cursor: isProcessing ? 'not-allowed' : 'pointer',
                          }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.88rem', color: 'var(--textSecondary)', lineHeight: 1.5 }}>
                      "{r.review}"
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

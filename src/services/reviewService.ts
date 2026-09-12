import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { Review, ReviewSubmission, ReviewSummary, ReviewStatus, ReviewRow, ReviewUpdate, ServiceResult } from '../types/review';

function mapRowToReview(row: ReviewRow): Review {
  return {
    id: row.id,
    userId: row.user_id,
    name: row.name,
    email: row.email,
    rating: row.rating,
    review: row.review,
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

/**
 * Fetch approved reviews sorted by newest first
 */
export async function getApprovedReviews(limit = 6, offset = 0): Promise<ServiceResult<{ reviews: Review[]; hasMore: boolean }>> {
  if (!isSupabaseConfigured) {
    return {
      data: { reviews: [], hasMore: false },
      error: 'Supabase is not configured.',
    };
  }

  try {
    const { data, error, count } = await supabase
      .from('reviews')
      .select('*', { count: 'exact' })
      .eq('status', 'approved')
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      console.error('[ReviewService] getApprovedReviews error:', error);
      return {
        data: null,
        error: 'Unable to load reviews right now. Please check your connection.',
      };
    }

    const reviews = (data || []).map(mapRowToReview);
    const total = count ?? reviews.length;
    const hasMore = offset + reviews.length < total;

    return {
      data: { reviews, hasMore },
      error: null,
    };
  } catch (err) {
    console.error('[ReviewService] getApprovedReviews unexpected exception:', err);
    return {
      data: null,
      error: 'An unexpected network error occurred while loading reviews.',
    };
  }
}

/**
 * Dynamically compute rating aggregates from actual database rows
 */
export async function getReviewSummary(): Promise<ServiceResult<ReviewSummary>> {
  if (!isSupabaseConfigured) {
    return {
      data: {
        averageRating: 0,
        totalCount: 0,
        ratingDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
      },
      error: 'Supabase is not configured.',
    };
  }

  try {
    const { data, error } = await supabase
      .from('reviews')
      .select('rating')
      .eq('status', 'approved');

    if (error) {
      console.error('[ReviewService] getReviewSummary error:', error);
      return {
        data: null,
        error: 'Unable to calculate review statistics.',
      };
    }

    const ratings = data || [];
    const totalCount = ratings.length;

    if (totalCount === 0) {
      return {
        data: {
          averageRating: 0,
          totalCount: 0,
          ratingDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
        },
        error: null,
      };
    }

    const distribution: { 5: number; 4: number; 3: number; 2: number; 1: number } = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    };

    let sum = 0;
    for (const item of ratings) {
      const r = item.rating as 1 | 2 | 3 | 4 | 5;
      if (distribution[r] !== undefined) {
        distribution[r]++;
      }
      sum += r;
    }

    const averageRating = Math.round((sum / totalCount) * 10) / 10;

    return {
      data: {
        averageRating,
        totalCount,
        ratingDistribution: distribution,
      },
      error: null,
    };
  } catch (err) {
    console.error('[ReviewService] getReviewSummary unexpected error:', err);
    return {
      data: null,
      error: 'Failed to compute rating statistics.',
    };
  }
}

/**
 * Validate and submit a review to Supabase
 * Enforces status = 'pending' and does not attempt SELECT due to RLS
 */
export async function createReview(submission: ReviewSubmission): Promise<ServiceResult<void>> {
  if (!isSupabaseConfigured) {
    return { data: null, error: 'Review submission service is currently offline.' };
  }

  // Frontend validation
  const trimmedName = submission.name.trim();
  const trimmedReview = submission.review.trim();

  if (!trimmedName || trimmedName.length < 2) {
    return { data: null, error: 'Please enter your name (at least 2 characters).' };
  }
  if (trimmedName.length > 80) {
    return { data: null, error: 'Name must not exceed 80 characters.' };
  }

  if (!submission.rating || submission.rating < 1 || submission.rating > 5) {
    return { data: null, error: 'Please select a valid star rating from 1 to 5.' };
  }

  if (!trimmedReview || trimmedReview.length < 10) {
    return { data: null, error: 'Review text must be at least 10 characters long.' };
  }
  if (trimmedReview.length > 1000) {
    return { data: null, error: 'Review text cannot exceed 1000 characters.' };
  }

  try {
    // Note: Do not chain .select() because public users cannot SELECT pending rows under RLS
    const { error } = await supabase.from('reviews').insert({
      name: trimmedName,
      email: submission.email?.trim() || null,
      rating: Math.floor(submission.rating),
      review: trimmedReview,
      status: 'pending',
      user_id: submission.userId || null,
    });

    if (error) {
      console.error('[ReviewService] createReview error:', error);
      if (error.code === '23514') {
        return { data: null, error: 'Review content does not satisfy character length or rating requirements.' };
      }
      return { data: null, error: 'Unable to submit your review right now. Please try again later.' };
    }

    return { data: undefined, error: null };
  } catch (err) {
    console.error('[ReviewService] createReview unexpected exception:', err);
    return { data: null, error: 'Unable to connect to the review server. Please verify your internet connection.' };
  }
}

/**
 * Update a user's own review
 */
export async function updateReview(id: string, updates: Partial<ReviewSubmission>): Promise<ServiceResult<void>> {
  try {
    const payload: ReviewUpdate = {
      status: 'pending', // Reset to pending upon edit for moderation
    };
    if (updates.name !== undefined) payload.name = updates.name.trim();
    if (updates.rating !== undefined) payload.rating = updates.rating;
    if (updates.review !== undefined) payload.review = updates.review.trim();

    const { error } = await supabase
      .from('reviews')
      .update(payload)
      .eq('id', id);

    if (error) {
      return { data: null, error: 'Unable to update review.' };
    }
    return { data: undefined, error: null };
  } catch {
    return { data: null, error: 'Connection failure during review update.' };
  }
}

/**
 * Delete a user's own review
 */
export async function deleteReview(id: string): Promise<ServiceResult<void>> {
  try {
    const { error } = await supabase
      .from('reviews')
      .delete()
      .eq('id', id);

    if (error) {
      return { data: null, error: 'Unable to delete review.' };
    }
    return { data: undefined, error: null };
  } catch {
    return { data: null, error: 'Connection failure during review deletion.' };
  }
}

/**
 * Fetch reviews for administration / moderation interface
 */
export async function getAdminReviews(statusFilter?: ReviewStatus): Promise<ServiceResult<Review[]>> {
  try {
    let query = supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });

    if (statusFilter) {
      query = query.eq('status', statusFilter);
    }

    const { data, error } = await query;
    if (error) {
      console.error('[ReviewService] getAdminReviews error:', error);
      return { data: null, error: 'Unable to fetch reviews for moderation.' };
    }

    return { data: (data || []).map(mapRowToReview), error: null };
  } catch (err) {
    console.error('[ReviewService] getAdminReviews unexpected error:', err);
    return { data: null, error: 'Failed to connect to review management service.' };
  }
}

/**
 * Moderate a review (Approve or Reject)
 */
export async function moderateReview(id: string, status: 'approved' | 'rejected'): Promise<ServiceResult<void>> {
  try {
    const { error } = await supabase
      .from('reviews')
      .update({ status })
      .eq('id', id);

    if (error) {
      console.error('[ReviewService] moderateReview error:', error);
      return { data: null, error: `Failed to update status to ${status}.` };
    }

    return { data: undefined, error: null };
  } catch (err) {
    console.error('[ReviewService] moderateReview unexpected error:', err);
    return { data: null, error: 'Network error while moderating review.' };
  }
}

/**
 * Delete a review from moderation panel
 */
export async function deleteAdminReview(id: string): Promise<ServiceResult<void>> {
  try {
    const { error } = await supabase
      .from('reviews')
      .delete()
      .eq('id', id);

    if (error) {
      return { data: null, error: 'Failed to delete review record.' };
    }
    return { data: undefined, error: null };
  } catch {
    return { data: null, error: 'Network error during review deletion.' };
  }
}

/**
 * Realtime subscription to reviews table
 * Returns cleanup function to unsubscribe on unmount
 */
export function subscribeToReviews(onUpdate: () => void): () => void {
  if (!isSupabaseConfigured) return () => {};

  try {
    const channelName = `public:reviews:${Date.now()}`;
    const channel = supabase
      .channel(channelName)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'reviews',
        },
        () => {
          onUpdate();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  } catch (err) {
    console.error('[ReviewService] Failed to set up Realtime subscription:', err);
    return () => {};
  }
}

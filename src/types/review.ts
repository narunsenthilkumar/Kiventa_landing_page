import { Database, ReviewStatus } from './database.types';

export type { ReviewStatus };

export type ReviewRow = Database['public']['Tables']['reviews']['Row'];
export type ReviewInsert = Database['public']['Tables']['reviews']['Insert'];
export type ReviewUpdate = Database['public']['Tables']['reviews']['Update'];

export interface Review {
  id: string;
  userId: string | null;
  name: string;
  email: string | null;
  rating: number;
  review: string;
  status: ReviewStatus;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewSubmission {
  name: string;
  email?: string;
  rating: number;
  review: string;
  userId?: string | null;
}

export interface ReviewSummary {
  averageRating: number;
  totalCount: number;
  ratingDistribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

export interface ServiceResult<T> {
  data: T | null;
  error: string | null;
}

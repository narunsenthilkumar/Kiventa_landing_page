export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type ReviewStatus = 'pending' | 'approved' | 'rejected';

export interface Database {
  public: {
    Tables: {
      reviews: {
        Row: {
          id: string;
          user_id: string | null;
          name: string;
          email: string | null;
          rating: number;
          review: string;
          status: ReviewStatus;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          name: string;
          email?: string | null;
          rating: number;
          review: string;
          status?: ReviewStatus;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          name?: string;
          email?: string | null;
          rating?: number;
          review?: string;
          status?: ReviewStatus;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

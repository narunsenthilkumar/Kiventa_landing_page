-- ============================================================
-- TASKORA DATABASE MIGRATION: 20260908000001
-- Persistent User Reviews System with Moderation & RLS
-- PostgreSQL 15+ / Supabase Standard
-- ============================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. REVIEWS TABLE
CREATE TABLE IF NOT EXISTS public.reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    name TEXT NOT NULL,
    email TEXT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review TEXT NOT NULL CHECK (char_length(trim(review)) >= 10 AND char_length(review) <= 1000),
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. INDEXES FOR PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_reviews_status_created_at 
    ON public.reviews(status, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_reviews_user_id 
    ON public.reviews(user_id);

-- 4. AUTOMATIC UPDATED_AT TRIGGER
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_reviews_updated_at ON public.reviews;
CREATE TRIGGER set_reviews_updated_at
    BEFORE UPDATE ON public.reviews
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- 5. ROW LEVEL SECURITY (RLS)
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any to avoid duplication
DROP POLICY IF EXISTS "Public can view approved reviews" ON public.reviews;
DROP POLICY IF EXISTS "Anyone can submit pending reviews" ON public.reviews;
DROP POLICY IF EXISTS "Users can update own pending reviews" ON public.reviews;
DROP POLICY IF EXISTS "Users can delete own reviews" ON public.reviews;
DROP POLICY IF EXISTS "Service role full access to reviews" ON public.reviews;
DROP POLICY IF EXISTS "Allow staff or admin full review access" ON public.reviews;

-- Policy 1: Anyone (anonymous & authenticated) can view APPROVED reviews
CREATE POLICY "Public can view approved reviews"
    ON public.reviews
    FOR SELECT
    TO anon, authenticated
    USING (status = 'approved');

-- Policy 2: Anyone can submit a review, but it must be initialized as 'pending'
CREATE POLICY "Anyone can submit pending reviews"
    ON public.reviews
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (
        status = 'pending' 
        AND (user_id IS NULL OR user_id = auth.uid())
    );

-- Policy 3: Authenticated users can update only their own review (status must remain pending)
CREATE POLICY "Users can update own pending reviews"
    ON public.reviews
    FOR UPDATE
    TO authenticated
    USING (auth.uid() = user_id)
    WITH CHECK (
        auth.uid() = user_id 
        AND status = 'pending'
    );

-- Policy 4: Authenticated users can delete their own review
CREATE POLICY "Users can delete own reviews"
    ON public.reviews
    FOR DELETE
    TO authenticated
    USING (auth.uid() = user_id);

-- Policy 5: Service role / Admin bypass (full access)
CREATE POLICY "Service role full access to reviews"
    ON public.reviews
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- 6. SUPABASE REALTIME REPLICATION
-- Enable realtime for reviews table so clients can subscribe to updates
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_publication_tables 
        WHERE pubname = 'supabase_realtime' 
        AND schemaname = 'public' 
        AND tablename = 'reviews'
    ) THEN
        ALTER PUBLICATION supabase_realtime ADD TABLE public.reviews;
    END IF;
END $$;

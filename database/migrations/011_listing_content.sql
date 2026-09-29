-- ============================================================
-- Nivora Database V2
-- Migration: 011_listing_content
-- Purpose: Store listing tags and media
-- ============================================================

CREATE TABLE public.listing_content (
    listing_id UUID PRIMARY KEY
        REFERENCES public.listings(id)
        ON DELETE CASCADE,

    -- Up to 30 tags
    tags TEXT[] NOT NULL DEFAULT '{}'
        CHECK (cardinality(tags) <= 30),

    -- Up to 6 image URLs
    images TEXT[] NOT NULL DEFAULT '{}'
        CHECK (cardinality(images) <= 6),

    -- One optional video
    video_url TEXT,

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
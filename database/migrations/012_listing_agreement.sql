-- ============================================================
-- Nivora Database V2
-- Migration: 012_listing_agreement
-- Purpose: Store listing agreement, rules and notes
-- ============================================================

CREATE TABLE public.listing_agreement (
    listing_id UUID PRIMARY KEY
        REFERENCES public.listings(id)
        ON DELETE CASCADE,

    agreement_url TEXT,

    rules TEXT[] NOT NULL DEFAULT '{}',

    notes TEXT[] NOT NULL DEFAULT '{}',

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
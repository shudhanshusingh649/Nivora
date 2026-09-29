-- ============================================================
-- Nivora Database V2
-- Migration: 013_user_watchlist
-- Purpose: Store listings saved by users
-- ============================================================

CREATE TABLE public.user_watchlist (
    user_id UUID NOT NULL
        REFERENCES public.users(id)
        ON DELETE CASCADE,

    listing_id UUID NOT NULL
        REFERENCES public.listings(id)
        ON DELETE CASCADE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    PRIMARY KEY (user_id, listing_id)
);
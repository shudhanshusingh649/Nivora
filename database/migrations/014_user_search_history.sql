-- ============================================================
-- Nivora Database V2
-- Migration: 014_user_search_history
-- Purpose: Store user search history
-- ============================================================

CREATE TABLE public.user_search_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL
        REFERENCES public.users(id)
        ON DELETE CASCADE,

    search_text TEXT NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
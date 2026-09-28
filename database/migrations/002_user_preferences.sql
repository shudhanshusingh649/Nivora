-- ============================================================
-- Nivora Database V2
-- Migration: 002_user_preferences
-- Purpose: Store user application preferences
-- ============================================================

CREATE TABLE public.user_preferences (
    user_id UUID PRIMARY KEY
        REFERENCES public.users(id)
        ON DELETE CASCADE,

    theme TEXT,

    language TEXT,

    notifications_enabled BOOLEAN NOT NULL DEFAULT TRUE,

    email_notifications BOOLEAN NOT NULL DEFAULT TRUE,

    push_notifications BOOLEAN NOT NULL DEFAULT TRUE
);
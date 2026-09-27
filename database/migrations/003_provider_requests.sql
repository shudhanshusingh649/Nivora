-- ============================================================
-- Nivora Database V2
-- Migration: 003_provider_requests
-- Purpose: Store initial provider onboarding requests
-- ============================================================

CREATE TABLE public.provider_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL
        REFERENCES public.users(id)
        ON DELETE CASCADE,

    provider_type TEXT NOT NULL,

    property_name TEXT,

    location TEXT NOT NULL,

    short_description TEXT NOT NULL,

    description TEXT,

    notes TEXT,

    status TEXT NOT NULL DEFAULT 'pending'
        CHECK (status IN ('pending', 'document_verification', 'approved', 'rejected')),

    submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    reviewed_at TIMESTAMPTZ,

    reviewed_by UUID
        REFERENCES public.admins(id)
        ON DELETE SET NULL,

    rejection_reason TEXT,

    reviewer_notes TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
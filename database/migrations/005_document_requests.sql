-- ============================================================
-- Nivora Database V2
-- Migration: 005_document_requests
-- Purpose: Request specific documents from users
-- ============================================================

CREATE TABLE public.document_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL
        REFERENCES public.users(id)
        ON DELETE CASCADE,

    document_type TEXT NOT NULL,

    reason TEXT,

    status TEXT NOT NULL DEFAULT 'pending'
        CHECK (status IN ('pending', 'fulfilled', 'rejected', 'cancelled')),

    user_document_id UUID
        REFERENCES public.user_documents(id)
        ON DELETE SET NULL,

    requested_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    fulfilled_at TIMESTAMPTZ,

    reviewed_at TIMESTAMPTZ,

    reviewed_by UUID
        REFERENCES public.admins(id)
        ON DELETE SET NULL,

    rejection_reason TEXT,

    notes TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
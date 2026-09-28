-- ============================================================
-- Nivora Database V2
-- Migration: 004_user_documents
-- Purpose: Store documents belonging to users
-- ============================================================

CREATE TABLE public.user_documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL
        REFERENCES public.users(id)
        ON DELETE CASCADE,

    document_type TEXT NOT NULL,

    document_name TEXT,

    file_path TEXT NOT NULL,

    status TEXT NOT NULL DEFAULT 'pending'
        CHECK (status IN ('pending', 'verified', 'rejected')),

    verified_at TIMESTAMPTZ,

    verified_by UUID
        REFERENCES public.admins(id)
        ON DELETE SET NULL,

    rejection_reason TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
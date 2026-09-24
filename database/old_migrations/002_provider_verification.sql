-- ============================================================
-- Nivora Database
-- Migration: 002_provider_verification.sql
-- Purpose: Provider verification and review workflow
-- ============================================================


-- ============================================================
-- 1. PROVIDER VERIFICATION REQUESTS
-- ============================================================

CREATE TABLE provider_verification_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    provider_id UUID NOT NULL
        REFERENCES providers(id) ON DELETE CASCADE,

    status TEXT NOT NULL DEFAULT 'pending',

    submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    assigned_to UUID
        REFERENCES admin_users(id) ON DELETE SET NULL,

    reviewed_at TIMESTAMPTZ,

    rejection_reason TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT provider_verification_status_check
        CHECK (
            status IN (
                'pending',
                'under_review',
                'approved',
                'rejected'
            )
        )
);


-- ============================================================
-- 2. VERIFICATION DOCUMENTS
-- ============================================================
-- Actual files are stored in Supabase Storage.
-- This table stores their metadata/reference.

CREATE TABLE provider_verification_documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    verification_request_id UUID NOT NULL
        REFERENCES provider_verification_requests(id)
        ON DELETE CASCADE,

    document_type TEXT NOT NULL,

    storage_path TEXT NOT NULL,

    file_name TEXT,
    file_size BIGINT,
    mime_type TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT provider_document_type_check
        CHECK (
            document_type IN (
                'identity',
                'address',
                'ownership',
                'business',
                'other'
            )
        )
);


-- ============================================================
-- 3. VERIFICATION REVIEW HISTORY
-- ============================================================
-- Keeps a history of actions taken by reviewers.

CREATE TABLE provider_verification_reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    verification_request_id UUID NOT NULL
        REFERENCES provider_verification_requests(id)
        ON DELETE CASCADE,

    reviewer_id UUID NOT NULL
        REFERENCES admin_users(id) ON DELETE RESTRICT,

    previous_status TEXT,
    new_status TEXT NOT NULL,

    remarks TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT provider_review_status_check
        CHECK (
            new_status IN (
                'pending',
                'under_review',
                'approved',
                'rejected'
            )
        )
);


-- ============================================================
-- 4. INDEXES
-- ============================================================

CREATE INDEX idx_provider_verification_provider
    ON provider_verification_requests(provider_id);

CREATE INDEX idx_provider_verification_status
    ON provider_verification_requests(status);

CREATE INDEX idx_provider_verification_assigned
    ON provider_verification_requests(assigned_to);

CREATE INDEX idx_provider_verification_documents_request
    ON provider_verification_documents(verification_request_id);

CREATE INDEX idx_provider_verification_reviews_request
    ON provider_verification_reviews(verification_request_id);

CREATE INDEX idx_provider_verification_reviews_reviewer
    ON provider_verification_reviews(reviewer_id);
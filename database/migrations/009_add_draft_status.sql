-- ============================================================
-- Nivora Database V2
-- Migration: 009_add_draft_status
-- Purpose: Allow draft status for provider and listing requests
-- ============================================================


-- ============================================================
-- Provider Requests
-- ============================================================

ALTER TABLE public.provider_requests
DROP CONSTRAINT provider_requests_status_check;

ALTER TABLE public.provider_requests
ADD CONSTRAINT provider_requests_status_check
CHECK (
    status IN (
        'draft',
        'pending',
        'document_verification',
        'approved',
        'rejected'
    )
);


-- ============================================================
-- Provider Listing Requests
-- ============================================================

ALTER TABLE public.provider_listing_requests
DROP CONSTRAINT provider_listing_requests_status_check;

ALTER TABLE public.provider_listing_requests
ADD CONSTRAINT provider_listing_requests_status_check
CHECK (
    status IN (
        'draft',
        'pending',
        'document_verification',
        'approved',
        'rejected'
    )
);
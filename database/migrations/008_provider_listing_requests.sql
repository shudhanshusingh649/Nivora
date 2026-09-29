-- ============================================================
-- Nivora Database V2
-- Migration: 008_provider_listing_requests
-- Purpose: Store property listing requests submitted by providers
-- ============================================================

CREATE TABLE public.provider_listing_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    provider_id UUID NOT NULL
        REFERENCES public.providers(id)
        ON DELETE CASCADE,

    -- ========================================================
    -- Basic Information
    -- ========================================================

    property_name TEXT NOT NULL,

    category_id UUID NOT NULL
        REFERENCES public.property_categories(id)
        ON DELETE RESTRICT,

    custom_category TEXT,

    short_description TEXT NOT NULL,

    description TEXT,

    -- ========================================================
    -- Location
    -- ========================================================

    address TEXT NOT NULL,

    city TEXT NOT NULL,

    state TEXT NOT NULL,

    pincode TEXT NOT NULL,

    latitude DECIMAL(10, 8),

    longitude DECIMAL(11, 8),

    -- ========================================================
    -- Property Details
    -- ========================================================

    details TEXT,

    commercial_details TEXT,

    -- ========================================================
    -- Tags and Rules
    -- Comma-separated submitted values
    -- ========================================================

    tags TEXT,

    rules TEXT,

    -- ========================================================
    -- Media
    -- Maximum 4 images
    -- Stores image path/URL
    -- ========================================================

    images TEXT[] NOT NULL DEFAULT '{}'
        CHECK (cardinality(images) <= 4),

    -- ========================================================
    -- Review Workflow
    -- ========================================================

    status TEXT NOT NULL DEFAULT 'pending'
        CHECK (
            status IN (
                'pending',
                'document_verification',
                'approved',
                'rejected'
            )
        ),

    submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    reviewed_at TIMESTAMPTZ,

    reviewed_by UUID
        REFERENCES public.admins(id)
        ON DELETE SET NULL,

    rejection_reason TEXT,

    reviewer_notes TEXT,

    -- ========================================================
    -- Record Management
    -- ========================================================

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
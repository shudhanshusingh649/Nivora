-- ============================================================
-- Nivora Database V2
-- Migration: 010_listings
-- Purpose: Store approved and active property listings
-- ============================================================

CREATE TABLE public.listings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    provider_id UUID NOT NULL
        REFERENCES public.providers(id)
        ON DELETE CASCADE,

    category_id UUID NOT NULL
        REFERENCES public.property_categories(id)
        ON DELETE RESTRICT,

    -- ========================================================
    -- Basic Information
    -- ========================================================

    property_name TEXT NOT NULL,

    short_description TEXT,

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
    -- Listing Status
    -- ========================================================

    view_status TEXT NOT NULL DEFAULT 'live'
        CHECK (
            view_status IN (
                'live',
                'unlisted'
            )
        ),

    property_status TEXT NOT NULL DEFAULT 'available'
        CHECK (
            property_status IN (
                'available',
                'open',
                'booked'
            )
        ),

    -- ========================================================
    -- Record Management
    -- ========================================================

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
-- ============================================================
-- Nivora Database V2
-- Migration: 007_property_metadata
-- Purpose: Store global property categories, tags, and rules
-- ============================================================


-- ============================================================
-- Property Categories
-- ============================================================

CREATE TABLE public.property_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name TEXT NOT NULL UNIQUE,

    description TEXT,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO public.property_categories (name, description)
VALUES
    ('PG', 'Paying Guest accommodation'),
    ('Hostel', 'Hostel accommodation'),
    ('Mess', 'Food and mess service'),
    ('Rental', 'Rental property'),
    ('Flat', 'Flat or apartment'),
    ('Room', 'Individual room'),
    ('Other', 'Other property or service type');


-- ============================================================
-- Property Tags
-- ============================================================

CREATE TABLE public.property_tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name TEXT NOT NULL UNIQUE,

    description TEXT,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO public.property_tags (name)
VALUES
    ('Student Friendly'),
    ('WiFi'),
    ('Food Included'),
    ('AC'),
    ('Non-AC'),
    ('Furnished'),
    ('Semi Furnished'),
    ('Parking'),
    ('Laundry'),
    ('CCTV'),
    ('Power Backup'),
    ('Attached Bathroom'),
    ('Shared Bathroom'),
    ('Near Campus'),
    ('24/7 Water'),
    ('24/7 Security');


-- ============================================================
-- Property Rules
-- ============================================================

CREATE TABLE public.property_rules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name TEXT NOT NULL UNIQUE,

    description TEXT,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO public.property_rules (name)
VALUES
    ('No Smoking'),
    ('No Alcohol'),
    ('No Pets'),
    ('Visitors Allowed'),
    ('Visitors Not Allowed'),
    ('Quiet Hours'),
    ('ID Required'),
    ('Maintain Cleanliness'),
    ('No Illegal Activities');
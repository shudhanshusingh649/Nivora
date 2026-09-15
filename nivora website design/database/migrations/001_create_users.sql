-- ============================================================
-- Nivora Database
-- Migration: 001_foundation.sql
-- Purpose: Phase 1 foundation schema
-- ============================================================

-- ============================================================
-- 1. USERS
-- ============================================================
-- The user's authentication identity is handled by Supabase Auth.
-- Therefore, no password is stored here.

CREATE TABLE users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,

    email TEXT NOT NULL UNIQUE,
    phone TEXT UNIQUE,

    is_verified BOOLEAN NOT NULL DEFAULT FALSE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- ============================================================
-- 2. USER PROFILES
-- ============================================================

CREATE TABLE user_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL UNIQUE
        REFERENCES users(id) ON DELETE CASCADE,

    full_name TEXT,
    username TEXT UNIQUE,

    age INTEGER,
    gender TEXT,

    profile_photo TEXT,

    current_city TEXT,
    permanent_city TEXT,

    occupation TEXT,
    college TEXT,
    course TEXT,
    year_semester TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT user_profiles_age_check
        CHECK (age IS NULL OR age >= 0)
);


-- ============================================================
-- 3. PROVIDERS
-- ============================================================
-- A normal user can optionally become a provider.
-- One user can have only one provider account.

CREATE TABLE providers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL UNIQUE
        REFERENCES users(id) ON DELETE CASCADE,

    status TEXT NOT NULL DEFAULT 'pending',

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT providers_status_check
        CHECK (
            status IN (
                'pending',
                'under_review',
                'approved',
                'rejected',
                'suspended'
            )
        )
);


-- ============================================================
-- 4. PROVIDER TYPES
-- ============================================================
-- A provider can have multiple types.

CREATE TABLE provider_types (
    id SMALLSERIAL PRIMARY KEY,

    name TEXT NOT NULL UNIQUE,

    description TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- ============================================================
-- 5. PROVIDER TYPE ASSIGNMENTS
-- ============================================================
-- Many-to-many relationship:
--
-- providers ←→ provider_types

CREATE TABLE provider_type_assignments (
    provider_id UUID NOT NULL
        REFERENCES providers(id) ON DELETE CASCADE,

    provider_type_id SMALLINT NOT NULL
        REFERENCES provider_types(id) ON DELETE RESTRICT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    PRIMARY KEY (provider_id, provider_type_id)
);


-- ============================================================
-- 6. ADMIN USERS
-- ============================================================
-- Internal Nivora employees who can perform administrative
-- operations such as verification/review.

CREATE TABLE admin_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL UNIQUE
        REFERENCES users(id) ON DELETE CASCADE,

    admin_role TEXT NOT NULL DEFAULT 'reviewer',

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT admin_users_role_check
        CHECK (
            admin_role IN (
                'reviewer',
                'admin',
                'super_admin'
            )
        )
);


-- ============================================================
-- 7. INDEXES
-- ============================================================

CREATE INDEX idx_users_phone
    ON users(phone);

CREATE INDEX idx_providers_status
    ON providers(status);

CREATE INDEX idx_provider_type_assignments_type
    ON provider_type_assignments(provider_type_id);

CREATE INDEX idx_admin_users_role
    ON admin_users(admin_role);


-- ============================================================
-- 8. INITIAL PROVIDER TYPES
-- ============================================================

INSERT INTO provider_types (name, description)
VALUES
    ('property_owner', 'Property owner'),
    ('pg_hostel_owner', 'PG or hostel provider'),
    ('mess_owner', 'Mess or food provider'),
    ('service_provider', 'Local service provider');
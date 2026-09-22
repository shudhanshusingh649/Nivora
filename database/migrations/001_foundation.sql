-- ============================================================
-- Nivora Database V2
-- Migration: 001_foundation
-- Purpose: Create the initial user foundation
-- ============================================================


-- ============================================================
-- USERS
-- Application-level user linked to Supabase Auth
-- ============================================================

CREATE TABLE public.users (
    id UUID PRIMARY KEY
        REFERENCES auth.users(id)
        ON DELETE CASCADE,

    email TEXT NOT NULL UNIQUE,

    phone TEXT UNIQUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- ============================================================
-- USER PROFILES
-- Additional information for Nivora users
-- ============================================================

CREATE TABLE public.user_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL UNIQUE
        REFERENCES public.users(id)
        ON DELETE CASCADE,

    first_name TEXT,

    last_name TEXT,

    display_name TEXT,

    avatar_url TEXT,

    bio TEXT,

    city TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- ============================================================
-- PROVIDERS
-- Represents an approved Nivora provider
-- ============================================================

CREATE TABLE public.providers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL UNIQUE
        REFERENCES public.users(id)
        ON DELETE CASCADE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- ============================================================
-- ADMINS
-- Represents Nivora staff members
-- ============================================================

CREATE TABLE public.admins (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL UNIQUE
        REFERENCES public.users(id)
        ON DELETE CASCADE,

    role TEXT NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
-- ============================================================
-- Nivora Database
-- Migration: 005_authentication_foundation.sql
-- Purpose: Synchronize Supabase Auth users with Nivora users
-- ============================================================


-- ============================================================
-- 1. FUNCTION: CREATE Nivora USER AFTER AUTH SIGNUP
-- ============================================================

CREATE OR REPLACE FUNCTION public.handle_new_auth_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN

    INSERT INTO public.users (
        id,
        email,
        phone
    )
    VALUES (
        NEW.id,
        NEW.email,
        NEW.phone
    )
    ON CONFLICT (id) DO NOTHING;

    INSERT INTO public.user_profiles (
        user_id
    )
    VALUES (
        NEW.id
    )
    ON CONFLICT (user_id) DO NOTHING;

    RETURN NEW;

END;
$$;


-- ============================================================
-- 2. TRIGGER: AUTH USER CREATED
-- ============================================================

DROP TRIGGER IF EXISTS on_auth_user_created
ON auth.users;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT
    ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_auth_user();


-- ============================================================
-- 3. FUNCTION: SYNC AUTH USER CHANGES
-- ============================================================

CREATE OR REPLACE FUNCTION public.handle_auth_user_update()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN

    UPDATE public.users
    SET
        email = NEW.email,
        phone = NEW.phone,
        updated_at = NOW()
    WHERE id = NEW.id;

    RETURN NEW;

END;
$$;


-- ============================================================
-- 4. TRIGGER: AUTH USER UPDATED
-- ============================================================

DROP TRIGGER IF EXISTS on_auth_user_updated
ON auth.users;

CREATE TRIGGER on_auth_user_updated
    AFTER UPDATE OF email, phone
    ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_auth_user_update();
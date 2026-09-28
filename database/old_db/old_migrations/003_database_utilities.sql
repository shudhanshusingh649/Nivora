-- ============================================================
-- Nivora Database
-- Migration: 003_database_utilities.sql
-- Purpose: Common database utilities and timestamp handling
-- ============================================================


-- ============================================================
-- 1. UPDATED_AT FUNCTION
-- ============================================================
-- Automatically updates updated_at whenever an existing
-- record is modified.

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;


-- ============================================================
-- 2. USERS TRIGGER
-- ============================================================

CREATE TRIGGER users_set_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();


-- ============================================================
-- 3. USER PROFILES TRIGGER
-- ============================================================

CREATE TRIGGER user_profiles_set_updated_at
BEFORE UPDATE ON user_profiles
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();


-- ============================================================
-- 4. PROVIDERS TRIGGER
-- ============================================================

CREATE TRIGGER providers_set_updated_at
BEFORE UPDATE ON providers
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();


-- ============================================================
-- 5. ADMIN USERS TRIGGER
-- ============================================================

CREATE TRIGGER admin_users_set_updated_at
BEFORE UPDATE ON admin_users
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();


-- ============================================================
-- 6. PROVIDER VERIFICATION REQUESTS TRIGGER
-- ============================================================

CREATE TRIGGER provider_verification_requests_set_updated_at
BEFORE UPDATE ON provider_verification_requests
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();
-- ============================================================
-- Nivora Database V2
-- Migration: 006_update_user_profiles
-- Purpose: Add DOB and detailed address fields to user profiles
-- ============================================================

ALTER TABLE public.user_profiles
ADD COLUMN date_of_birth DATE,
ADD COLUMN address_line_1 TEXT,
ADD COLUMN address_line_2 TEXT,
ADD COLUMN state TEXT,
ADD COLUMN pincode TEXT;
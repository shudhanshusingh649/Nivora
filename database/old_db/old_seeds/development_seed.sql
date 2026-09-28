-- ============================================================
-- Nivora Database
-- Migration: 004_development_seed.sql
-- Purpose: Development/reference seed data
-- ============================================================

INSERT INTO provider_types (name, description)
VALUES
    ('property_owner', 'Property owner'),
    ('pg_hostel_owner', 'PG or hostel provider'),
    ('mess_owner', 'Mess or food provider'),
    ('service_provider', 'Local service provider')
ON CONFLICT (name) DO NOTHING;
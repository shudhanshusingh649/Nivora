CREATE TABLE provider_category_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    provider_id UUID NOT NULL
        REFERENCES providers(id)
        ON DELETE CASCADE,

    requested_name VARCHAR(100) NOT NULL,

    description TEXT,

    status VARCHAR(30) NOT NULL DEFAULT 'pending'
        CHECK (
            status IN (
                'pending',
                'under_review',
                'rejected',
                'converted'
            )
        ),

    reviewed_by UUID
        REFERENCES admin_users(id)
        ON DELETE SET NULL,

    reviewed_at TIMESTAMPTZ,

    admin_notes TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_provider_category_requests_provider_id
    ON provider_category_requests(provider_id);

CREATE INDEX idx_provider_category_requests_status
    ON provider_category_requests(status);

CREATE INDEX idx_provider_category_requests_reviewed_by
    ON provider_category_requests(reviewed_by);
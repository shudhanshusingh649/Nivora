require("dotenv").config();

const { createClient } = require("@supabase/supabase-js");

const {
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY,
    SUPABASE_SECRET_KEY
} = process.env;

if (!SUPABASE_URL) {
    throw new Error("Missing SUPABASE_URL");
}

if (!SUPABASE_PUBLISHABLE_KEY) {
    throw new Error("Missing SUPABASE_PUBLISHABLE_KEY");
}

if (!SUPABASE_SECRET_KEY) {
    throw new Error("Missing SUPABASE_SECRET_KEY");
}

const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

const supabaseAdmin = createClient(
    SUPABASE_URL,
    SUPABASE_SECRET_KEY
);

/*
 * Verifies a Supabase access token by asking Supabase Auth
 * for the authenticated user.
 *
 * This avoids trusting a user ID supplied by the client.
 */
async function verifyAccessToken(token) {
    if (!token) {
        throw new Error("Missing access token");
    }

    const {
        data: { user },
        error
    } = await supabase.auth.getUser(token);

    if (error || !user) {
        throw new Error("Invalid or expired access token");
    }

    return user;
}

function getBearerToken(header) {
    if (!header || !header.startsWith("Bearer ")) {
        return null;
    }

    return header.slice(7).trim();
}

module.exports = {
    supabase,
    supabaseAdmin,
    verifyAccessToken,
    getBearerToken
};

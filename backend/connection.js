require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
const { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, SUPABASE_SECRET_KEY } = process.env;
if (!SUPABASE_URL) throw new Error("Missing SUPABASE_URL");
if (!SUPABASE_PUBLISHABLE_KEY) throw new Error("Missing SUPABASE_PUBLISHABLE_KEY");
if (!SUPABASE_SECRET_KEY) throw new Error("Missing SUPABASE_SECRET_KEY");
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SECRET_KEY);
module.exports = { supabase, supabaseAdmin };

const { supabase } = require("./connection");
async function testConnection() {
    const { data, error } = await supabase.from("users").select("id").limit(1);
    if (error) { console.error("Database connection failed:"); console.error(error); process.exit(1); }
    console.log("Nivora database connection successful.");
    console.log("Result:", data);
}
testConnection();

require("dotenv").config();

const { supabase } = require("./auth");

async function testAuthConnection() {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
        console.error("Supabase Auth connection failed:");
        console.error(error);
        process.exit(1);
    }

    console.log("Nivora Supabase Auth connection successful.");
    console.log("Current server-side session:", data.session ? "present" : "none");
}

testAuthConnection();

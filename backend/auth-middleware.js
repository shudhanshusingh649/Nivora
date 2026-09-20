const {
    verifyAccessToken,
    getBearerToken
} = require("./auth");

/*
 * Framework-independent authentication middleware.
 *
 * Pass the request Authorization header and receive
 * the authenticated Supabase user.
 */
async function authenticate(authorizationHeader) {
    const token = getBearerToken(authorizationHeader);

    if (!token) {
        const error = new Error("Authentication required");
        error.status = 401;
        throw error;
    }

    try {
        return await verifyAccessToken(token);
    } catch (error) {
        error.status = 401;
        throw error;
    }
}

module.exports = {
    authenticate
};

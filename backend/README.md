# Nivora Authentication Module

This folder contains the database-side/backend authentication foundation for Nivora.

## What this module does

- Connects the JavaScript backend to Supabase Auth.
- Extracts a Bearer access token from an HTTP Authorization header.
- Verifies the access token through Supabase Auth.
- Returns the authenticated Supabase user.
- Provides a server-side admin Supabase client for trusted operations.

## Environment

Create `.env` from `.env.example`:

```env
SUPABASE_URL=
SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SECRET_KEY=
SUPABASE_JWKS_URL=
```

Never commit `.env` or the secret key.

## Install

```bash
npm install
```

## Basic test

```bash
npm test
```

This checks that the JavaScript module can communicate with Supabase Auth.

## Authentication flow

```text
Web / Mobile
     |
     | Authorization: Bearer <access_token>
     v
JavaScript Backend
     |
     | verifyAccessToken()
     v
Supabase Auth
     |
     | authenticated user
     v
user.id
     |
     v
public.users.id
```

The backend must use the verified authenticated user ID. It must not trust a `user_id` sent by the client.

## Using the middleware

The framework-independent middleware can be used by the backend framework:

```js
const { authenticate } = require("./auth-middleware");

const user = await authenticate(
    request.headers.authorization
);

console.log(user.id);
```

The actual Express/Fastify/etc. adapter should be implemented by the JavaScript backend developer.

## Nivora authentication levels

The database/auth contract is:

```text
No login
    -> Explore listings

Email / Google login
    -> Basic account features

Phone verified
    -> Apply
    -> Contact property owner
    -> Book
    -> List property
    -> Other phone-required actions
```

The exact API authorization rules are part of the backend application layer.

## Important security note

`SUPABASE_SECRET_KEY` is server-only.

Never expose it to:

- Browser JavaScript
- Mobile applications
- Public APIs
- GitHub

The publishable key can be used in client-facing Supabase integrations, subject to RLS and the application's security model.

## Scope

This module completes the reusable authentication foundation from the database/backend side.

It does not implement:

- Login UI
- Google OAuth UI
- Email login UI
- Phone OTP UI
- Express/Fastify routes
- Frontend authentication state
- Mobile authentication screens

Those belong to the application layers.

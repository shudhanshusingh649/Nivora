# Zeevo Database V2

Database system for **Zeevo**, a property marketplace platform for discovering, managing, and providing properties and related services.

This repository contains the database schema, migrations, seed data, tests, and database documentation used by the Zeevo project.

## Tech Stack

* **Database:** PostgreSQL
* **Platform:** Supabase
* **Schema management:** SQL migrations
* **Authentication:** Supabase Auth / backend integration
* **Storage:** Supabase Storage for files and media
* **Version Control:** Git & GitHub

## Repository Structure

```text
database/
│
├── migrations/       # Database schema and structural changes
├── seeds/            # Development/sample data
├── tests/            # Database tests and validation
│
├── README.md         # Project overview
├── PRD.md            # Database requirements
├── Architecture.md  # Database architecture and schema
└── Rules.md          # Database development rules
```

## Database Architecture

Zeevo uses a relational PostgreSQL database with a modular structure.

The database contains common/core tables and dependent tables for features that extend them.

For example:

```text
users
  │
  └── user_profiles

providers
  │
  └── listings
        ├── listing_content
        ├── listing_agreement
        └── future category-specific details
```

This approach keeps common information centralized while allowing category-specific and feature-specific data to grow independently.

## Migration System

Database changes are managed using numbered SQL migrations.

```text
001_*.sql
002_*.sql
003_*.sql
...
```

Each migration represents a specific database change.

### Important

Once a migration has been applied, **do not edit the existing migration**.

For a new change, create a new migration:

```text
015_some_new_change.sql
```

This keeps the database history reproducible and prevents differences between environments.

## Current Development Phases

The database is being developed in phases:

```text
Phase 1 → User
Phase 2 → Provider
Phase 3 → Admin
Phase 4 → Security + Auth
```

Security and authentication-related database work is intentionally handled separately from the initial development schema.

## Current Features

The database currently includes systems for:

* User profiles
* User preferences
* Provider onboarding requests
* User documents and document requests
* Property categories
* Property tags
* Property rules
* Provider listing requests
* Property listings
* Listing tags, images and video
* Listing agreements
* User watchlist
* User search history

## Listing Architecture

The main property listing is stored in the `listings` table.

Additional listing information is separated into dependent tables where appropriate.

```text
listings
│
├── listing_content
│     ├── tags
│     ├── images
│     └── video
│
├── listing_agreement
│     ├── agreement
│     ├── rules
│     └── notes
│
├── category-specific details    # Future
├── listing_interests             # Future
├── listing_schedule_requests     # Future
├── listing_update_requests       # Future
└── listing_reports               # Future
```

The listing request and actual listing are separate concepts:

```text
Provider
   │
   ▼
Listing Request
   │
   │ Review
   ▼
Listing
```

The request handles the review workflow, while `listings` represents the current property data.

## Development Status

This database is currently under active development.

Some features and tables are intentionally incomplete and will be added after their workflows and requirements are finalized.

Do not assume that a table or feature marked as future is ready for application integration.

## For Contributors

Before making database changes:

1. Read `Rules.md`.
2. Check the existing migrations.
3. Review `Architecture.md` before changing existing relationships.
4. Create a new migration for schema changes.
5. Test the migration locally/development Supabase project.
6. Add or update seed/test data when required.
7. Commit the migration with a clear commit message.
8. Open a Pull Request for review.

### Recommended workflow

```text
Create branch
     ↓
Create migration
     ↓
Test in Supabase
     ↓
Update seed/test data if required
     ↓
Commit
     ↓
Push branch
     ↓
Create Pull Request
     ↓
Review
     ↓
Merge
```

## Documentation

| Document                             | Purpose                                                 |
| ------------------------------------ | ------------------------------------------------------- |
| [`PRD.md`](PRD.md)                   | Database requirements and scope                         |
| [`Architecture.md`](Architecture.md) | Database architecture, workflows, tables and attributes |
| [`Rules.md`](Rules.md)               | Database development rules and conventions              |

## Note

Zeevo Database V2 is designed to evolve through controlled migrations rather than modifying the database structure directly without version tracking.

The application/backend may contain additional validation and business logic that is intentionally not enforced entirely at the database level during the current development phase.

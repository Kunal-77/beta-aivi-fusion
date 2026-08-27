# AIVI Vision

# TASK: Create "Beta AIVI" — Merge New UI + Existing AIVI Backend

I have two separate GitHub repositories:

1. EXISTING AIVI PRODUCTION PROJECT — source of truth for functionality/backend:

https://github.com/Kunal-77/AI-Initiative-Value-Intelligence

2. NEW UI DESIGN PROJECT — source of truth for the new visual design:

https://github.com/Kunal-77/crest-flow-spark

Create a NEW independent project/repository named:

Beta AIVI

The goal is to combine the two projects into one fully working application.

IMPORTANT:

Do NOT simply copy the old AIVI UI into Beta AIVI.

Replace the existing AIVI frontend UI with the new UI/design from crest-flow-spark while preserving and reconnecting all existing AIVI functionality, backend, authentication, APIs, database logic, routes, and data.

==================================================

1. SOURCE-OF-TRUTH RULES

==================================================

Use:

crest-flow-spark

→ Visual/UI/UX source of truth.

AI-Initiative-Value-Intelligence

→ Functional/backend/data/authentication source of truth.

When the two projects conflict:

UI/visual implementation:

→ Prefer crest-flow-spark.

Business logic/data/API/authentication:

→ Prefer AI-Initiative-Value-Intelligence.

Do NOT remove working backend functionality just because the new UI does not currently have an equivalent component.

==================================================

2. CREATE BETA AIVI

==================================================

Create a completely separate project based on the two repositories.

Repository/project name:

Beta AIVI

Do not modify or overwrite either original repository.

All work should happen inside Beta AIVI.

==================================================

3. FRONTEND MIGRATION

==================================================

Replace the existing AIVI frontend visual design with the crest-flow-spark design.

Preserve the existing AIVI application routes and functionality.

Adapt the new UI to the existing AIVI routes rather than deleting routes.

The final application should feel visually like crest-flow-spark but functionally remain AIVI.

Apply the new design consistently to:

- Landing page

- Header/navigation

- Hero

- Buttons

- Cards

- Tables

- Forms

- Workspace selector

- Personal workspace

- Business workspace

- Portfolio

- Initiatives

- Financials

- Approvals

- Governance

- AI/value-related screens

- Settings/profile areas

- Other existing AIVI routes

Do not leave major pages using the old visual design unless there is a technical reason.

==================================================

4. AIVI DATA AND BACKEND PRESERVATION

==================================================

Preserve and reconnect all existing AIVI backend functionality.

Do NOT replace working APIs with mock data.

Do NOT hardcode dashboard values.

Do NOT remove existing database queries.

Do NOT remove existing API endpoints.

Do NOT change database schemas unless absolutely required for compatibility.

Preserve:

- PostgreSQL/Supabase integration

- Existing API routes

- Existing API services

- Database models

- Data fetching

- CRUD operations

- Calculations

- Financial data

- AI cost/value calculations

- Portfolio data

- Initiative data

- Approval workflows

- Governance workflows

- Existing business logic

The new UI must consume the real AIVI data.

==================================================

5. AUTHENTICATION

==================================================

Preserve the existing Clerk authentication implementation.

Do NOT replace the existing authentication system with mock authentication.

Preserve:

- Login

- Logout

- Protected routes

- User sessions

- Organization/workspace selection

- Business workspace isolation

- Personal workspace access

- Existing redirects

- Existing Clerk metadata usage

After login, existing AIVI users must still be routed correctly.

==================================================

6. WORKSPACE ARCHITECTURE

==================================================

Preserve the distinction between:

PERSONAL WORKSPACE

and

BUSINESS WORKSPACE

Personal users must continue seeing personal data.

Business users must continue seeing organization/business data.

Do not mix tenant data.

Preserve all existing authorization and data-isolation rules.

==================================================

7. UI ADAPTATION

==================================================

Use the crest-flow-spark design language as the primary visual system.

Preserve its:

- Typography

- Color system

- Spacing

- Grid layouts

- Glass/card treatment

- Buttons

- Hover effects

- Borders

- Glow effects

- Animations

- Navigation styling

- Responsive behavior

- Dark/light theme behavior where applicable

However, adapt the content to the actual AIVI product.

Do NOT use fake/demo content from crest-flow-spark where AIVI already has real data.

Example:

If crest-flow-spark contains a demo metric such as:

"$2.4M savings"

but AIVI has a real savings value,

display the AIVI value.

The UI should communicate the actual AIVI product.

==================================================

8. HERO / BRANDING

==================================================

The AIVI landing page should use the new visual style.

Use the AIVI branding and actual AIVI terminology.

Include the premium hero treatment:

- AIVI logo/mark

- Rotating 3D-style centerpiece where appropriate

- Orbital/circular visual treatment

- Technical labels

- Premium glowing CTA buttons

- Poppins-style primary typography

- Monospace technical typography

- Responsive layout

Do not replace the AIVI identity with the crest-flow-spark product identity.

crest-flow-spark is only the design reference.

==================================================

9. COMPONENT ARCHITECTURE

==================================================

Where possible, create reusable components rather than duplicating styles.

Examples:

- Button

- Card

- Table

- Badge

- Header

- Sidebar

- Modal

- Tabs

- KPI cards

- Charts

- Workspace selector

- Navigation

- Hero components

Use the existing AIVI component architecture where it is already functional, but update its visual implementation to match the new design.

==================================================

10. ROUTING

==================================================

Audit all existing AIVI routes before changing anything.

Create a route mapping such as:

AIVI existing route

→ corresponding Beta AIVI route

→ new UI component

→ existing API/data source

Do not accidentally remove routes during the UI migration.

All existing important routes must remain accessible.

==================================================

11. RESPONSIVE DESIGN

==================================================

The final Beta AIVI application must work on:

- Desktop

- Laptop

- Tablet

- Mobile

Do not simply scale the desktop UI down.

Adapt:

- Navigation

- Sidebar

- Cards

- Tables

- Charts

- Hero

- Forms

- Modals

- Grids

- Buttons

for smaller screens.

==================================================

12. NO MOCK BACKEND

==================================================

This is extremely important.

Do NOT create fake API responses simply to make the new UI look populated.

If an existing AIVI API already provides the required information, connect the new UI to that API.

If a UI element exists in crest-flow-spark but AIVI does not have equivalent data, use an appropriate empty state instead of inventing production data.

==================================================

13. ENVIRONMENT / CONFIGURATION

==================================================

Inspect both projects and preserve the required environment configuration.

Identify all required:

- Clerk variables

- Database variables

- API URLs

- Supabase variables

- Authentication configuration

- Frontend/backend connection variables

Do not expose secrets in source code.

Do not commit real secrets.

Provide a clear list of required environment variables for Beta AIVI.

==================================================

14. VERIFICATION

==================================================

Before considering the project complete:

1. Install dependencies.

2. Run TypeScript checks.

3. Run frontend build.

4. Run backend build/checks where applicable.

5. Start the application.

6. Verify the main routes manually.

7. Verify Clerk login.

8. Verify workspace selection.

9. Verify Personal Workspace.

10. Verify Business Workspace.

11. Verify API requests.

12. Verify real database data appears.

13. Verify no console/runtime errors.

14. Verify responsive layouts.

15. Verify navigation between pages.

==================================================

15. CRITICAL DATA-SAFETY RULE

==================================================

DO NOT delete or overwrite existing AIVI backend/data functionality simply to make the new UI easier to implement.

If something is unclear:

PRESERVE THE EXISTING FUNCTIONALITY.

Adapt the UI around it.

Do not silently remove functionality.

==================================================

16. FINAL RESULT

==================================================

The finished Beta AIVI project should be:

NEW UI:

crest-flow-spark design language

+

AIVI:

existing backend

existing APIs

existing database

existing authentication

existing routes

existing business logic

existing real data

=

ONE FULLY WORKING BETA AIVI APPLICATION.

The user should be able to navigate through the application and feel that it is one unified product, not two projects glued together.

Before making destructive changes, inspect both repositories and understand their architecture.

Do not modify the original repositories.

Do not push changes to either original repository.

Only work on the new Beta AIVI project.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5fdd0426-25ff-4d3a-b614-73d158a8f6cf).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

Supabase integration notes

1) Environment
- Set the following env vars in production/Vercel:
  - SUPABASE_URL=https://peskckqhxchbllluelvy.supabase.co
  - SUPABASE_ANON_KEY=<anon-key>

2) SQL import
- Import the `supabase_schema.sql` file into your Supabase project's SQL editor or run it via `psql`.

3) Storage
- Create a public bucket named `photos` in Supabase Storage and enable public URLs.

5) Admin UI
- The project includes an `Admin` UI component at `src/components/Admin.tsx` and a protected admin page at `admin.html`.
- Mot de passe d'accès : `caro2026`.
- Cette UI permet d'uploader un logo (met à jour `settings.key='logo'`) et plusieurs images de galerie dans le bucket `photos`.
- Pour la production, protégez l'accès ou supprimez cette page si nécessaire.

4) Usage
- Use the client in `src/lib/supabaseClient.ts`.
- Helpers: `src/lib/supabaseHelpers.ts` contains `fetchGallery`, `uploadPhoto`, `fetchLogo`, `setLogoUrl`.

4) Run locally
- Install deps: `npm i`
- Start dev server: `npm run dev`

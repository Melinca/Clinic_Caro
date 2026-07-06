-- Supabase SQL schema for Caro Aesthetics
-- Tables: photos (gallery), settings (site-wide settings like logo)

-- Enable pgcrypto extension for gen_random_uuid() on Supabase
create extension if not exists "pgcrypto";

-- photos table: store gallery images uploaded or external links
create table if not exists public.photos (
  id uuid default gen_random_uuid() primary key,
  url text not null,
  label text,
  source text,
  created_at timestamptz default now()
);

-- settings table: store key/value pairs, e.g., logo url
create table if not exists public.settings (
  id uuid default gen_random_uuid() primary key,
  key text not null unique,
  value text,
  updated_at timestamptz default now()
);

-- Insert an initial logo setting (empty by default)
insert into public.settings (key, value) values ('logo', '')
on conflict (key) do nothing;

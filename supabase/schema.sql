-- Execute no SQL Editor do Supabase.
create table if not exists public.profiles (
 id uuid primary key references auth.users(id) on delete cascade,
 username text not null default '',
 avatar_url text,
 favorite_genres text[] not null default '{}',
 updated_at timestamptz not null default now()
);
create table if not exists public.favorites (
 user_id uuid not null references auth.users(id) on delete cascade,
 movie_id text not null,
 created_at timestamptz not null default now(),
 primary key (user_id,movie_id)
);
create table if not exists public.movie_requests (
 id bigint generated always as identity primary key,
 user_id uuid references auth.users(id) on delete set null,
 title text not null check(char_length(title) between 1 and 150),
 release_year integer check(release_year between 1888 and 2100),
 note text check(char_length(note)<=500),
 created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
alter table public.favorites enable row level security;
alter table public.movie_requests enable row level security;
create policy "profiles own read" on public.profiles for select to authenticated using ((select auth.uid())=id);
create policy "profiles own insert" on public.profiles for insert to authenticated with check ((select auth.uid())=id);
create policy "profiles own update" on public.profiles for update to authenticated using ((select auth.uid())=id) with check ((select auth.uid())=id);
create policy "favorites own read" on public.favorites for select to authenticated using ((select auth.uid())=user_id);
create policy "favorites own insert" on public.favorites for insert to authenticated with check ((select auth.uid())=user_id);
create policy "favorites own delete" on public.favorites for delete to authenticated using ((select auth.uid())=user_id);
-- Pedidos podem ser enviados por visitantes. Configure CAPTCHA/rate limiting antes de divulgar amplamente.
create policy "visitors can request movies" on public.movie_requests for insert to anon, authenticated with check (user_id is null or user_id=(select auth.uid()));
insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('avatars','avatars',true,2097152,array['image/jpeg','image/png','image/webp'])
on conflict (id) do nothing;
create policy "avatars public read" on storage.objects for select to public using (bucket_id='avatars');
create policy "avatars own upload" on storage.objects for insert to authenticated with check (bucket_id='avatars' and (storage.foldername(name))[1]=(select auth.uid())::text);

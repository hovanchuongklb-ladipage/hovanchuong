-- Bảng lưu trữ lead đăng ký từ landing page Sunshine Sky City
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  email text,
  wants_info boolean not null default true,
  wants_tour boolean not null default false,
  source text,
  created_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_phone_idx on public.leads (phone);

alter table public.leads enable row level security;

-- Cho phép client (anon key) chỉ được INSERT, không được đọc/sửa/xóa dữ liệu
create policy "Allow anonymous insert on leads"
  on public.leads
  for insert
  to anon
  with check (true);

-- Bảng cấu hình toàn site (Meta Pixel ID, Conversions API token, ...)
-- Đây là bảng "singleton" - luôn chỉ có đúng 1 dòng với id = 1.
create table if not exists public.site_settings (
  id smallint primary key default 1,
  meta_pixel_id text,
  capi_token text,
  updated_at timestamptz not null default now(),
  constraint site_settings_singleton check (id = 1)
);

insert into public.site_settings (id)
values (1)
on conflict (id) do nothing;

alter table public.site_settings enable row level security;

-- Không tạo bất kỳ policy nào cho anon/authenticated: bảng này chứa
-- capi_token (nhạy cảm) nên chỉ service role key (bypass RLS) mới được
-- đọc/ghi, dùng trong CMS server component và các API route nội bộ.

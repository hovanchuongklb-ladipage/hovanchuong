import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

/**
 * Admin client using the Supabase service role key — bypasses RLS.
 * Server-only: never import this file from a "use client" component.
 */
export function getSupabaseAdminClient() {
  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Thiếu cấu hình Supabase Admin: kiểm tra NEXT_PUBLIC_SUPABASE_URL và SUPABASE_SERVICE_ROLE_KEY"
    );
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });
}

export interface SiteSettingsRow {
  id: number;
  meta_pixel_id: string | null;
  capi_token: string | null;
  updated_at: string;
}

export interface LeadRow {
  id: string;
  full_name: string;
  phone: string;
  email: string | null;
  wants_info: boolean;
  wants_tour: boolean;
  source: string | null;
  created_at: string;
}

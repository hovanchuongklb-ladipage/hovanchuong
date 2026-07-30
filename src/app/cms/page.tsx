import { AlertTriangle } from "lucide-react";

import { ExportExcelButton } from "@/components/cms/ExportExcelButton";
import { LeadsTable } from "@/components/cms/LeadsTable";
import { SettingsForm } from "@/components/cms/SettingsForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getSupabaseAdminClient, type LeadRow, type SiteSettingsRow } from "@/lib/supabase-admin";
import type { SiteSettingsValues } from "@/lib/validations";

export const dynamic = "force-dynamic";
// supabase-js issues plain GET requests under the hood; Next.js's fetch
// Data Cache would otherwise cache them even on a force-dynamic route.
export const fetchCache = "force-no-store";

async function fetchSettings(): Promise<{ data: SiteSettingsRow | null; error: string | null }> {
  try {
    const supabaseAdmin = getSupabaseAdminClient();
    const { data, error } = await supabaseAdmin
      .from("site_settings")
      .select("*")
      .eq("id", 1)
      .maybeSingle();

    if (error) {
      throw error;
    }

    return { data: data as SiteSettingsRow | null, error: null };
  } catch (error) {
    console.error("Lỗi tải site_settings cho CMS:", error);
    return {
      data: null,
      error: "Không thể tải cấu hình. Kiểm tra SUPABASE_SERVICE_ROLE_KEY.",
    };
  }
}

async function fetchLeads(): Promise<{ data: LeadRow[]; error: string | null }> {
  try {
    const supabaseAdmin = getSupabaseAdminClient();
    const { data, error } = await supabaseAdmin
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return { data: (data ?? []) as LeadRow[], error: null };
  } catch (error) {
    console.error("Lỗi tải danh sách leads cho CMS:", error);
    return {
      data: [],
      error: "Không thể tải danh sách leads. Kiểm tra SUPABASE_SERVICE_ROLE_KEY.",
    };
  }
}

export default async function CmsPage() {
  const [{ data: settings, error: settingsError }, { data: leads, error: leadsError }] =
    await Promise.all([fetchSettings(), fetchLeads()]);

  const settingsInitialValues: SiteSettingsValues = {
    metaPixelId: settings?.meta_pixel_id ?? "",
    capiToken: settings?.capi_token ?? "",
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Sunshine Sky City — CMS
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Quản lý cấu hình tracking và danh sách khách hàng đăng ký.
          </p>
        </header>

        <Tabs defaultValue="leads">
          <TabsList className="border-slate-700 bg-slate-900">
            <TabsTrigger value="leads">Danh sách Leads</TabsTrigger>
            <TabsTrigger value="settings">Cấu hình Tracking</TabsTrigger>
          </TabsList>

          <TabsContent value="leads">
            {leadsError && (
              <div className="mb-4 flex items-center gap-2 rounded-lg border border-red-500/40 bg-red-950/50 px-4 py-3 text-sm text-red-200">
                <AlertTriangle className="h-4 w-4 shrink-0" />
                {leadsError}
              </div>
            )}
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-400">
                Tổng số lead: <span className="font-semibold text-white">{leads.length}</span>
              </p>
              <ExportExcelButton data={leads} />
            </div>
            <LeadsTable leads={leads} />
          </TabsContent>

          <TabsContent value="settings">
            {settingsError && (
              <div className="mb-4 flex items-center gap-2 rounded-lg border border-red-500/40 bg-red-950/50 px-4 py-3 text-sm text-red-200">
                <AlertTriangle className="h-4 w-4 shrink-0" />
                {settingsError}
              </div>
            )}
            <div className="max-w-lg rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h2 className="mb-4 text-lg font-semibold">
                Meta Pixel &amp; Conversions API
              </h2>
              <SettingsForm initialValues={settingsInitialValues} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

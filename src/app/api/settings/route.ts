import { NextResponse } from "next/server";

import { getSupabaseAdminClient } from "@/lib/supabase-admin";
import { siteSettingsSchema } from "@/lib/validations";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Dữ liệu gửi lên không hợp lệ" },
      { status: 400 }
    );
  }

  const parsed = siteSettingsSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Thông tin chưa hợp lệ, vui lòng kiểm tra lại",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  try {
    const supabaseAdmin = getSupabaseAdminClient();
    const { error } = await supabaseAdmin.from("site_settings").upsert({
      id: 1,
      meta_pixel_id: parsed.data.metaPixelId || null,
      capi_token: parsed.data.capiToken || null,
      updated_at: new Date().toISOString(),
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error("Lỗi lưu cấu hình site_settings:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Không thể lưu cấu hình lúc này, vui lòng thử lại sau",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Đã lưu cấu hình thành công",
  });
}

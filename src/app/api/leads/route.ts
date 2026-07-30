import { NextResponse } from "next/server";

import { siteConfig } from "@/config/site";
import { sendMetaLeadEvent } from "@/lib/meta-capi";
import { getSupabaseClient } from "@/lib/supabase";
import { getSupabaseAdminClient } from "@/lib/supabase-admin";
import { sendTelegramNotification } from "@/lib/telegram";
import { leadFormSchema } from "@/lib/validations";

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

  const parsed = leadFormSchema.safeParse(body);

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

  const { fullName, phone, email, wantsInfo, wantsTour, source } = parsed.data;

  // Action 1: Lưu lead vào Supabase
  try {
    const supabase = getSupabaseClient();
    const { error } = await supabase.from("leads").insert({
      full_name: fullName,
      phone,
      email: email || null,
      wants_info: wantsInfo ?? true,
      wants_tour: wantsTour ?? false,
      source: source ?? "Landing page Noble Crystal Riverside",
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error("Lỗi lưu lead vào Supabase:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Không thể lưu thông tin lúc này, vui lòng thử lại sau",
      },
      { status: 502 }
    );
  }

  // Action 2: Bắn thông báo Telegram (không chặn phản hồi thành công nếu lead đã lưu)
  try {
    await sendTelegramNotification({
      fullName,
      phone,
      email: email || undefined,
      source,
    });
  } catch (error) {
    console.error("Lỗi gửi thông báo Telegram:", error);
  }

  // Action 3: Gửi sự kiện Lead lên Meta Conversions API (không chặn phản hồi nếu lỗi/chưa cấu hình)
  try {
    const supabaseAdmin = getSupabaseAdminClient();
    const { data: settings, error: settingsError } = await supabaseAdmin
      .from("site_settings")
      .select("meta_pixel_id, capi_token")
      .eq("id", 1)
      .maybeSingle();

    if (settingsError) {
      throw settingsError;
    }

    if (settings?.meta_pixel_id && settings?.capi_token) {
      const clientIp =
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        undefined;
      const userAgent = request.headers.get("user-agent") ?? undefined;
      const eventSourceUrl = request.headers.get("referer") ?? undefined;

      await sendMetaLeadEvent({
        pixelId: settings.meta_pixel_id,
        capiToken: settings.capi_token,
        phone,
        email: email || undefined,
        eventSourceUrl: eventSourceUrl ?? siteConfig.url,
        clientIp,
        userAgent,
      });
    }
  } catch (error) {
    console.error("Lỗi gửi sự kiện Meta Conversions API:", error);
  }

  return NextResponse.json({
    success: true,
    message: "Đã ghi nhận thông tin, chúng tôi sẽ liên hệ sớm nhất",
  });
}

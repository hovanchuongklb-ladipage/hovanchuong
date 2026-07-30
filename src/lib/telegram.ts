import { siteConfig } from "@/config/site";

interface TelegramLeadPayload {
  fullName: string;
  phone: string;
  email?: string;
  source?: string;
}

export async function sendTelegramNotification(lead: TelegramLeadPayload) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn("Bỏ qua thông báo Telegram: thiếu TELEGRAM_BOT_TOKEN hoặc TELEGRAM_CHAT_ID");
    return { skipped: true };
  }

  const text = [
    `🔥 CÓ KHÁCH MỚI - ${siteConfig.name.toUpperCase()}`,
    `👤 Tên: ${lead.fullName}`,
    `📞 SĐT: ${lead.phone}`,
    lead.email ? `✉️ Email: ${lead.email}` : null,
    `🌐 Nguồn: ${lead.source ?? `Landing page ${siteConfig.name}`}`,
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    }
  );

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Gửi Telegram thất bại: ${response.status} ${errorBody}`);
  }

  return response.json();
}

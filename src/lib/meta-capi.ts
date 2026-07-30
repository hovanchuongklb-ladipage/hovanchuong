import { createHash } from "node:crypto";

const GRAPH_API_VERSION = "v19.0";

function hashForCapi(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

/** Normalizes a Vietnamese phone number to E.164 digits (no leading "+") for Meta CAPI hashing. */
function normalizePhoneForCapi(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("84")) {
    return digits;
  }
  if (digits.startsWith("0")) {
    return `84${digits.slice(1)}`;
  }
  return digits;
}

interface SendMetaLeadEventParams {
  pixelId: string;
  capiToken: string;
  phone: string;
  email?: string;
  eventSourceUrl: string;
  clientIp?: string;
  userAgent?: string;
}

export async function sendMetaLeadEvent(params: SendMetaLeadEventParams) {
  const userData: Record<string, string | string[]> = {
    ph: [hashForCapi(normalizePhoneForCapi(params.phone))],
  };

  if (params.email) {
    userData.em = [hashForCapi(params.email)];
  }

  if (params.clientIp) {
    userData.client_ip_address = params.clientIp;
  }

  if (params.userAgent) {
    userData.client_user_agent = params.userAgent;
  }

  const endpoint = `https://graph.facebook.com/${GRAPH_API_VERSION}/${params.pixelId}/events?access_token=${encodeURIComponent(
    params.capiToken
  )}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: [
        {
          event_name: "Lead",
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_source_url: params.eventSourceUrl,
          user_data: userData,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Meta CAPI thất bại: ${response.status} ${errorBody}`);
  }

  return response.json();
}

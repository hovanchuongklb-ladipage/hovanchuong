import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const REALM = "Noble Crystal Riverside CMS";

function unauthorized() {
  return new NextResponse("Yêu cầu xác thực để truy cập khu vực quản trị.", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${REALM}"`,
    },
  });
}

export function middleware(request: NextRequest) {
  const cmsPassword = process.env.CMS_PASSWORD;
  const cmsUsername = process.env.CMS_USERNAME || "admin";

  if (!cmsPassword) {
    console.error(
      "CMS_PASSWORD chưa được cấu hình — chặn toàn bộ truy cập /cms để an toàn."
    );
    return unauthorized();
  }

  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return unauthorized();
  }

  try {
    const base64Credentials = authHeader.slice("Basic ".length);
    const decoded = atob(base64Credentials);
    const separatorIndex = decoded.indexOf(":");
    const username = separatorIndex === -1 ? decoded : decoded.slice(0, separatorIndex);
    const password = separatorIndex === -1 ? "" : decoded.slice(separatorIndex + 1);

    if (username !== cmsUsername || password !== cmsPassword) {
      return unauthorized();
    }
  } catch (error) {
    console.error("Lỗi giải mã Basic Auth header:", error);
    return unauthorized();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/cms/:path*", "/api/settings/:path*"],
};

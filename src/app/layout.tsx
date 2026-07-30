import type { Metadata, Viewport } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ToastProvider } from "@/components/ui/toast";
import { siteConfig } from "@/config/site";
import { getSupabaseAdminClient } from "@/lib/supabase-admin";

import "./globals.css";

// Self-hosted via next/font (no runtime request to Google, no layout shift).
// Distinct pairing from the base boilerplate's Playfair Display / Be Vietnam
// Pro — both fonts below ship a "vietnamese" subset so Vietnamese diacritics
// render correctly, same requirement the base boilerplate had.
const displayFont = Lora({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const sansFont = Nunito_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  // Trailing slash matters: relative-URL resolution against a base URL
  // treats the base's last path segment as replaceable unless it ends in
  // "/" — without the slash, resolving a relative path here would drop
  // siteConfig.basePath's segment entirely (currently "", so this is inert
  // until the project moves under a subpath).
  metadataBase: new URL(`${siteConfig.url}/`),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.seo.keywords],
  authors: [{ name: siteConfig.developer }],
  creator: siteConfig.developer,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.seo.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.description,
    images: [siteConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1e3f",
};

// The Meta Pixel ID is edited at runtime via /cms and must not be frozen at
// build time by static generation. Revalidate at most once a minute so a
// change made in the CMS takes effect shortly without making every page
// load pay for a live Supabase round-trip.
export const revalidate = 60;

async function getMetaPixelId(): Promise<string | null> {
  try {
    const supabaseAdmin = getSupabaseAdminClient();
    const { data, error } = await supabaseAdmin
      .from("site_settings")
      .select("meta_pixel_id")
      .eq("id", 1)
      .maybeSingle();

    if (error) {
      throw error;
    }

    return data?.meta_pixel_id ?? null;
  } catch (error) {
    console.error("Không thể tải cấu hình Meta Pixel:", error);
    return null;
  }
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const metaPixelId = await getMetaPixelId();

  return (
    <html lang="vi" className={`${displayFont.variable} ${sansFont.variable}`}>
      <body className="antialiased">
        {metaPixelId && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
        <ErrorBoundary>
          <ToastProvider>{children}</ToastProvider>
        </ErrorBoundary>
        {metaPixelId && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              alt=""
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        )}
      </body>
    </html>
  );
}

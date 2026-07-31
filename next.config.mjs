/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone deployment on its own domain (hovanchuong.site) — no
  // gateway/rewrite project involved. basePath keeps the site at
  // /noble-crystal-riverside rather than the domain root. Must always
  // match siteConfig.basePath in src/config/site.ts.
  basePath: "/noble-crystal-riverside",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

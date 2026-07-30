/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone deployment on its own domain (chauthanhvuong.site) — no
  // gateway/rewrite project involved. basePath keeps the site at /skycity
  // rather than the domain root. Must always match siteConfig.basePath in
  // src/config/site.ts.
  basePath: "/skycity",
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

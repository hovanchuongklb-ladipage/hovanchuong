/** @type {import('next').NextConfig} */
const nextConfig = {
  // No custom domain assigned yet — deploys to its default Vercel URL at
  // the domain root, so basePath is empty. If this project later moves
  // under a subpath (its own domain + prefix, or a gateway rewrite like the
  // base boilerplate), set this to match siteConfig.basePath.
  basePath: "",
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

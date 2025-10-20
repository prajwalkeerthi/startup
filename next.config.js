/** @type {import('next').NextConfig} */
const nextConfig = {
  // 👇 Enables static HTML export (replaces `next export`)
  output: 'export',

  // 👇 Required because GitHub Pages doesn't support Next.js Image Optimization
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },

  // 👇 These two ensure paths work correctly on GitHub Pages
  basePath: '/startup-nextjs-main', // your repo name
  assetPrefix: '/startup-nextjs-main/',
};

export default nextConfig;

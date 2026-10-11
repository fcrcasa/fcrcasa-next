import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://formsubmit.co https://pagead2.googlesyndication.com https://google.com https://googleadservices.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://td.doubleclick.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.gstatic.com https://www.googletagmanager.com; frame-src 'self' https://www.googletagmanager.com https://td.doubleclick.net; img-src 'self' blob: data: https://www.googletagmanager.com https://pagead2.googlesyndication.com https://www.google.com https://googleadservices.com https://stats.g.doubleclick.net https://googleads.g.doubleclick.net https://www.google-analytics.com https://www.googleadservices.com https://td.doubleclick.net https://www.google.it; font-src 'self' data: https://fonts.gstatic.com https://www.gstatic.com; connect-src 'self' https://*.google-analytics.com https://www.google-analytics.com https://www.googletagmanager.com https://formsubmit.co https://pagead2.googlesyndication.com https://google.com https://www.google.com https://googleadservices.com https://www.googleadservices.com https://stats.g.doubleclick.net https://googleads.g.doubleclick.net https://td.doubleclick.net;",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "unsafe-none",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "cross-origin",
          },
        ],
      },
    ];
  },
};

export default withMDX(nextConfig);

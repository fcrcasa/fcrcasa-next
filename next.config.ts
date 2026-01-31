import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
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
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://formsubmit.co; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://www.googletagmanager.com; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://formsubmit.co;",
          }
        ],
      },
    ];
  },
};

export default nextConfig;

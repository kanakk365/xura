import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/ev-report", destination: "/ev-report.html" },
      { source: "/youth-sports-report", destination: "/youth-sports-report.html" },
    ];
  },
};

export default nextConfig;

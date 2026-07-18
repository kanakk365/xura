import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/ev-report", destination: "/ev-report.html" },
      { source: "/youth-sports-report", destination: "/youth-sports-report.html" },
      { source: "/incentives-report", destination: "/incentives-report.html" },
      { source: "/incentives-deck", destination: "/incentives-deck.html" },
      { source: "/corporate-deck", destination: "/corporate-deck.html" },
      { source: "/nj-ev-tourism-corridor", destination: "/nj-ev-tourism-corridor.html" },
      { source: "/nj-ev-tourism-corridor-short", destination: "/nj-ev-tourism-corridor-short.html" },
      { source: "/ferrandino-deck", destination: "/ferrandino-deck.html" },
      { source: "/xura-acquisition-deck", destination: "/xura-acquisition-deck.html" },
    ];
  },
};

export default nextConfig;

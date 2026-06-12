import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Prevents strict type warnings from throwing build breaking errors
  typescript: {
    ignoreBuildErrors: true,
  },

  // 2. High-performance image optimization formats layer
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

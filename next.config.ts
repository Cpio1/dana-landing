import type { NextConfig } from "next";

// GitHub Pages hosts this repository under /dana-landing.
// Keep local development and deployments to a custom domain at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
    qualities: [70, 75],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 70 — сжатые превью галереи, 75 — значение по умолчанию для остальных фото.
    qualities: [70, 75],
  },
};

export default nextConfig;

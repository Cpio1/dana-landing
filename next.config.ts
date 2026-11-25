import type { NextConfig } from "next";

/**
 * Префикс пути сайта.
 * - GitHub Pages (https://cpio1.github.io/dana-landing/) — "/dana-landing".
 * - Собственный домен (например, *.edu.kz) — пустая строка: задайте
 *   переменную PAGES_BASE_PATH="" при сборке (в GitHub Actions это
 *   делается автоматически, если указана repository variable CUSTOM_DOMAIN).
 * - `npm run dev` — без префикса, сайт открывается на http://localhost:3000/.
 */
const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.PAGES_BASE_PATH ?? (isProd ? "/dana-landing" : "");

const nextConfig: NextConfig = {
  // Полностью статический сайт: `next build` кладёт готовые файлы в `out/`.
  output: "export",
  basePath,
  // GitHub Pages отдаёт /dana-landing/ → /dana-landing/index.html.
  trailingSlash: true,
  // Делаем значение доступным в клиентском коде (пути к фото в next/image).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    // На GitHub Pages нет сервера оптимизации изображений — фото отдаются как есть.
    unoptimized: true,
    // 70 — сжатые превью галереи, 75 — значение по умолчанию для остальных фото.
    qualities: [70, 75],
  },
};

export default nextConfig;

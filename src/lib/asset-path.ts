/**
 * Добавляет basePath (например, "/dana-landing" на GitHub Pages) к пути
 * статического файла из `public/`. next/image сам этого не делает.
 * Внешние ссылки (http, data:) и пустые значения возвращаются без изменений.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(src: string): string;
export function assetPath(src: string | undefined): string | undefined;
export function assetPath(src: string | undefined): string | undefined {
  if (!src || !src.startsWith("/") || src.startsWith("//")) return src;
  if (basePath && (src === basePath || src.startsWith(`${basePath}/`))) return src;
  return `${basePath}${src}`;
}

import Image from "next/image";
import type { ImageAsset } from "@/types/content";
import { Icon } from "@/components/ui/Icon";

interface PlaceholderPhotoProps {
  image: ImageAsset;
  className?: string;
  rounded?: string;
  sizes?: string;
  /**
   * "cover" (default) fills the container and crops to match its shape.
   * "contain" shows the whole photo without cropping: with `width`/`height`
   * (the photo's real pixel size), the box sizes itself to the photo's own
   * aspect ratio; without them, the photo is letterboxed inside the
   * container's existing fixed aspect ratio (e.g. a gallery grid cell).
   */
  fit?: "cover" | "contain";
  /** CSS object-position, e.g. "top" to favor the upper part of a "cover" photo. */
  objectPosition?: string;
  width?: number;
  height?: number;
  /** next/image quality; must be listed in `images.qualities` (next.config.ts). */
  quality?: number;
  loading?: "lazy" | "eager";
}

/**
 * Shows the real photo once `image.src` is set. Until then, renders a calm
 * neutral placeholder so the layout is easy to preview before photos are added.
 */
export function PlaceholderPhoto({
  image,
  className = "",
  rounded = "rounded-2xl",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  fit = image.fit ?? "cover",
  objectPosition = image.objectPosition,
  width,
  height,
  quality,
  loading,
}: PlaceholderPhotoProps) {
  const isNaturalSize = fit === "contain" && width && height;
  const isContain = fit === "contain";

  return (
    <div
      className={`relative overflow-hidden border border-border bg-bg-alt ${rounded} ${className}`}
    >
      {image.src ? (
        isNaturalSize ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={width}
            height={height}
            sizes={sizes}
            quality={quality}
            loading={loading}
            className="h-auto w-full object-contain"
          />
        ) : (
          // Одна структура для всех форматов: основной <img> всегда в одной позиции,
          // поэтому при переключении вертикальное ↔ горизонтальное фото React его не
          // пересоздаёт (меняются только src и object-fit), а размер контейнера постоянен.
          <>
            {isContain && (
              // Размытый фон без CSS blur: крошечная версия фото, растянутая браузером,
              // сама выглядит мягкой, но не нагружает прокрутку как filter: blur.
              <Image
                src={image.src}
                alt=""
                aria-hidden="true"
                fill
                sizes="32px"
                quality={quality}
                loading={loading}
                className="object-cover opacity-60"
              />
            )}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={sizes}
              quality={quality}
              loading={loading}
              style={objectPosition ? { objectPosition } : undefined}
              className={isContain ? "object-contain" : "object-cover"}
            />
          </>
        )
      ) : (
        <div
          role="img"
          aria-label={image.alt}
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-ink-soft/60"
        >
          <Icon name="camera" className="h-8 w-8" />
          {image.caption && (
            <span className="text-xs font-medium">{image.caption}</span>
          )}
        </div>
      )}
    </div>
  );
}

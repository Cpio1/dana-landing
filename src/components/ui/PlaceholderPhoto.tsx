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
   * "contain" shows the whole photo at its own aspect ratio — pass
   * `width`/`height` (the photo's real pixel size) with this mode.
   */
  fit?: "cover" | "contain";
  width?: number;
  height?: number;
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
  fit = "cover",
  width,
  height,
}: PlaceholderPhotoProps) {
  const isContain = fit === "contain" && width && height;

  return (
    <div
      className={`relative overflow-hidden border border-border bg-bg-alt ${rounded} ${className}`}
    >
      {image.src ? (
        isContain ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={width}
            height={height}
            sizes={sizes}
            className="h-auto w-full object-contain"
          />
        ) : (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            className="object-cover"
          />
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

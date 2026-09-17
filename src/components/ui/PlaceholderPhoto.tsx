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
            className="h-auto w-full object-contain"
          />
        ) : isContain ? (
          <>
            <Image
              src={image.src}
              alt=""
              aria-hidden="true"
              fill
              sizes={sizes}
              className="scale-110 object-cover opacity-60 blur-2xl"
            />
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={sizes}
              style={objectPosition ? { objectPosition } : undefined}
              className="object-contain"
            />
          </>
        ) : (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            style={objectPosition ? { objectPosition } : undefined}
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

import { useState, type ImgHTMLAttributes } from "react"
import { getOptimizedImageUrl, getResponsiveImageSrcSet } from "@/lib/images"

type ProductImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "onError"> & {
  src: string | null | undefined
}

export function ProductImage({ src, ...props }: ProductImageProps) {
  const resolvedSrc = getOptimizedImageUrl(src) ?? "/placeholder.svg"
  const [failedSrc, setFailedSrc] = useState<string | null>(null)
  const hasFailed = failedSrc === resolvedSrc

  return (
    <img
      {...props}
      src={hasFailed ? "/placeholder.svg" : resolvedSrc}
      srcSet={hasFailed ? undefined : getResponsiveImageSrcSet(resolvedSrc)}
      onError={() => setFailedSrc(resolvedSrc)}
    />
  )
}

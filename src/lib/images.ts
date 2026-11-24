import imageWidths from "./image-widths.json"

export function getOptimizedImageUrl(src: string | null | undefined): string | undefined {
  if (!src) return undefined

  const match = /^(\/[^?#]+)\.(?:png|jpe?g)([?#].*)?$/i.exec(src)
  return match ? `${match[1]}.webp${match[2] ?? ""}` : src
}

export function getResponsiveImageSrcSet(src: string | null | undefined): string | undefined {
  const imageSrc = getOptimizedImageUrl(src)
  if (!imageSrc) return undefined

  const match = /^(\/[^?#]+)\.webp([?#].*)?$/i.exec(imageSrc)
  if (!match) return undefined

  const [, base, suffix = ""] = match
  const width = imageWidths[`${base}.webp` as keyof typeof imageWidths]
  if (!width || width < 480) return undefined

  const candidates = [
    ...(width >= 480 ? [[`${base}-480.webp`, 480] as const] : []),
    ...(width >= 960 ? [[`${base}-960.webp`, 960] as const] : []),
    [`${base}.webp`, width] as const,
  ]
  const uniqueCandidates = candidates.filter(
    (candidate, index) => candidates.findIndex(([, candidateWidth]) => candidateWidth === candidate[1]) === index,
  )

  return uniqueCandidates.map(([path, candidateWidth]) => `${path}${suffix} ${candidateWidth}w`).join(", ")
}

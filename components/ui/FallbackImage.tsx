'use client'

/**
 * FallbackImage — client component that renders an image with graceful
 * fallback when the src is missing (e.g. photo not yet uploaded).
 *
 * Accepts either:
 *   - fill={true}  → behaves like next/image with fill layout
 *   - no fill      → renders a plain <img> tag (for non-fill usage)
 *
 * The parent element must have position:relative when fill is used.
 */

import { useState } from 'react'

interface FallbackImageProps {
  src: string
  alt: string
  className?: string
  fill?: boolean
}

export default function FallbackImage({ src, alt, className = '', fill }: FallbackImageProps) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    // Render nothing — the placeholder content sitting underneath shows through
    return null
  }

  if (fill) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full ${className}`}
        onError={() => setErrored(true)}
      />
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
    />
  )
}

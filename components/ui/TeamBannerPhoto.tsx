'use client'

import { useState } from 'react'

export default function TeamBannerPhoto() {
  const [errored, setErrored] = useState(false)

  if (errored) return null

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/assets/about/team-photo.jpg"
      alt="GemuCube Solutions team"
      className="absolute inset-0 w-full h-full object-cover object-center"
      onError={() => setErrored(true)}
    />
  )
}

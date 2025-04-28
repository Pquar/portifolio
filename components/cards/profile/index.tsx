'use client'

import { clsx } from 'clsx'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Image } from '~/components/ui/image'
//import { SpotifyNowPlaying } from '~/components/ui/now-playing'
import { SITE_METADATA } from '~/data/site-metadata'
import { ProfileCardInfo } from './profile-info'

export function ProfileCard() {
  let ref = useRef<HTMLDivElement>(null)
  let [style, setStyle] = useState<React.CSSProperties>({})

  let onMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current || window.innerWidth < 1280) return

    let { clientX, clientY } = e
    let { width, height, x, y } = ref.current.getBoundingClientRect()
    let mouseX = Math.abs(clientX - x)
    let mouseY = Math.abs(clientY - y)
    let rotateMin = -15
    let rotateMax = 15
    let rotateRange = rotateMax - rotateMin

    let rotate = {
      x: rotateMax - (mouseY / height) * rotateRange,
      y: rotateMin + (mouseX / width) * rotateRange,
    }

    setStyle({
      transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    })
  }, [])

  let onMouseLeave = useCallback(() => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' })
  }, [])

  useEffect(() => {
    let { current } = ref
    if (!current) return
    current.addEventListener('mousemove', onMouseMove)
    current.addEventListener('mouseleave', onMouseLeave)
    return () => {
      if (!current) return
      current.removeEventListener('mousemove', onMouseMove)
      current.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [onMouseLeave, onMouseMove])

  return (
    <>
      <div
        className="relative z-10 mb-8 flex scale-100 items-center justify-center transition-all duration-200 ease-out hover:z-50 md:mb-0 md:hover:scale-[1.15]"
        style={{ perspective: '300px' }}
        ref={ref}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-1"></div>
        <div
          style={style}
          className={clsx(
            'flex flex-col overflow-hidden rounded-full bg-white shadow-demure outline outline-1 outline-gray-100 dark:bg-dark dark:shadow-mondegreen dark:outline-gray-600'
          )}
        >
          <Image
            src={SITE_METADATA.siteLogo}
            alt={SITE_METADATA.title}
            width={256}
            height={256}
            loading="eager"
            className="rounded-full"
          />
        </div>
      </div>

      <ProfileCardInfo />
    </>
  )
}

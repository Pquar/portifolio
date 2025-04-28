'use client'

import { clsx } from 'clsx'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { Twemoji } from '~/components/ui/twemoji'
import { SITE_METADATA } from '~/data/site-metadata'

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    stringsElement: '#bios',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  })
}

export function TypedBios() {
  let el = useRef(null)
  let typed = useRef<Typed | null>(null)

  useEffect(() => {
    if (el.current) {
      typed.current?.destroy()
      typed.current = createTypedInstance(el.current)
    }
  }, [])

  return (
    <div
      className={clsx([
        'flex min-h-8 items-center gap-0.5',
        [
          '[&_.typed-cursor]:inline-block',
          '[&_.typed-cursor]:w-2',
          '[&_.typed-cursor]:h-5.5',
          '[&_.typed-cursor]:text-transparent',
          '[&_.typed-cursor]:bg-slate-800',
          'dark:[&_.typed-cursor]:bg-slate-100',
        ],
      ])}
    >
      <ul id="bios" className="hidden">
        <li>Sempre tentando aprender coisas novas.</li>
        <li>Moro atualmente em {SITE_METADATA.city}.</li>
        <li>Primeira linguagem foi c++.</li>
        <li>Gosto bastante da area Financeira em desenvolvimento software.</li>
        <li>
          Estas nos planos ter um cachorro, mais ainda nao tenho. <Twemoji emoji="dog" />
        </li>
        <li>
          Tentando aprender Violão. <Twemoji emoji="guitar" />
        </li>
        <li>
          Gosto de video games, mmo-rpg, jogos de estrategia em geral.{' '}
          <Twemoji emoji="video-game" />.
        </li>
        <li>
          Normalmente jogo algum game por 2 messes incessantemente e quito nem nunca mais olhar para
          traz.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}

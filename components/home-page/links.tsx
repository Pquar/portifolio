import { Link } from '~/components/ui/link'
import { Twemoji } from '~/components/ui/twemoji'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { SITE_METADATA } from '~/data/site-metadata'

const LINKS = [
  {
    title: `Projetos`,
    href: `/projects`,
    emoji: 'man-technologist',
  },
  {
    title: `Blog`,
    href: `/blog`,
    emoji: 'memo',
  },
  {
    title: `Dicas rápidas`,
    href: `/snippets`,
    emoji: 'dna',
  },
  {
    title: `Sobre min`,
    href: `/about`,
    emoji: 'smiling-face-with-sunglasses',
  },
]

export function BlogLinks() {
  return (
    <div className="flex flex-col gap-2.5 md:gap-3">
      {LINKS.map(({ title, href, emoji }) => (
        <Link key={title} href={href} className="flex items-center gap-1.5">
          <Twemoji emoji={emoji} />
          <GrowingUnderline className="leading-6">
            {title}
          </GrowingUnderline>
        </Link>
      ))}
    </div>
  )
}

'use client'

import { Mail, Map, Phone } from 'lucide-react'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Link } from '~/components/ui/link'
import { Twemoji } from '~/components/ui/twemoji'
import { SITE_METADATA } from '~/data/site-metadata'

export function FooterMeta() {
  return (
    <div className="space-y-2 py-1.5 text-gray-800 dark:text-gray-200">
      <div className="flex items-center gap-2">
        <Mail className="h-5 w-5" />
        <Link href={`mailto:${SITE_METADATA.email}`}>
          <GrowingUnderline className="font-medium">{SITE_METADATA.email}</GrowingUnderline>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Map className="h-5 w-5" />
        <span className="font-medium">
          {SITE_METADATA.city}, <Twemoji emoji="flag-brazil" className="!h-4.5" />
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Phone className="h-5 w-5" />
        <Link href={SITE_METADATA.whatsapp}>
          <GrowingUnderline className="font-medium">WhatsApp</GrowingUnderline>
        </Link>
      </div>
    </div>
  )
}

'use client'

import { Logo } from '~/components/header/logo'
import { SITE_METADATA } from '~/data/site-metadata'

export function LogoAndRepo() {
  return (
    <div className="flex items-center">
      <Logo className="mr-4" />
      <div>
        <span className="text-lg font-bold text-gray-900 dark:text-white">
          {SITE_METADATA.headerTitle}
        </span>
        <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">Software</span>
      </div>
    </div>
  )
}

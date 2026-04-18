'use client'

import { ExternalLink, Globe } from 'lucide-react'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Link } from '~/components/ui/link'
import type { Client } from '~/types/data'

export function ClientCard({ client }: { client: Client }) {
  let { name, description, siteUrl, category } = client

  let categoryLabel = {
    site: 'Site',
    sistema: 'Sistema',
    consultoria: 'Consultoria',
  }[category]

  let categoryColor = {
    site: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    sistema: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
    consultoria: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  }[category]

  return (
    <div className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/50 md:p-8">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/30">
            <Globe className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h3>
            <span
              className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColor}`}
            >
              {categoryLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mb-6 flex-1 text-gray-600 dark:text-gray-400">{description}</p>

      {/* Preview iframe */}
      <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-2 dark:bg-gray-800">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-50 dark:bg-gray-900">
          <iframe
            src={siteUrl}
            title={`Preview de ${name}`}
            className="pointer-events-none absolute left-0 top-0 h-[1000%] w-[1000%] origin-top-left"
            style={{ transform: 'scale(0.1)' }}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end">
        <Link
          href={siteUrl}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          <GrowingUnderline className="inline-flex items-center gap-1.5">
            Visitar
            <ExternalLink className="h-3.5 w-3.5" />
          </GrowingUnderline>
        </Link>
      </div>
    </div>
  )
}

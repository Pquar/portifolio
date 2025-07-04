'use client'

import { Clock, Github, Map, Star } from 'lucide-react'
import useSWR from 'swr'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Link } from '~/components/ui/link'
import { Twemoji } from '~/components/ui/twemoji'
import { SITE_METADATA } from '~/data/site-metadata'
import type { GithubRepository } from '~/types/data'
import { fetcher } from '~/utils/misc'

const TIME_IS = 'https://time.is/sao_paulo'
const MY_TIMEZONE = 'America/Sao_Paulo'
const MY_TIMEZONE_OFFSET = -3 * 60 // UTC-3 = -180 minutos

function getTime() {
  let localDate = new Date()
  let saoPauloTime = new Date(
    new Intl.DateTimeFormat('en-US', {
      timeZone: MY_TIMEZONE,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(localDate)
  )

  let [spHours, spMinutes, spSeconds] = new Intl.DateTimeFormat('en-GB', {
    timeZone: MY_TIMEZONE,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(localDate).split(':').map(Number)

  let spTotalMinutes = spHours * 60 + spMinutes
  let localTotalMinutes = localDate.getHours() * 60 + localDate.getMinutes()

  let diffInHours = (localTotalMinutes - spTotalMinutes) / 60

  let diff =
    diffInHours === 0
      ? 'same time'
      : diffInHours > 0
      ? `${diffInHours}h ahead`
      : `${Math.abs(diffInHours)}h behind`

  let time = new Intl.DateTimeFormat('en-US', {
    timeZone: MY_TIMEZONE,
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(localDate)

  return { time, diff }
}

export function FooterMeta() {
  let { time, diff } = getTime()
  let siteRepo = SITE_METADATA.siteRepo.replace('https://github.com/', '')
  let repoName = siteRepo.split('/')[1]
  let { data: repo } = useSWR<GithubRepository>(`/api/github?repo=${siteRepo}`, fetcher)

  return (
    <div className="space-y-2 py-1.5 text-gray-800 dark:text-gray-200">
      <div className="flex items-center gap-1 font-medium">
        <Github className="h-5 w-5" />
        <Link href={SITE_METADATA.siteRepo} className="ml-1">
          <GrowingUnderline data-umami-event="view-repo">{repoName}</GrowingUnderline>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Map className="h-5 w-5" />
        <span className="font-medium">
          {SITE_METADATA.city}, <Twemoji emoji="flag-brazil" className="!h-4.5" />
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="h-5 w-5" />
        <Link href={TIME_IS}>
          <GrowingUnderline className="font-medium">
            {time} <span className="text-gray-500 dark:text-gray-400">- {diff}</span>
          </GrowingUnderline>
        </Link>
      </div>
    </div>
  )
}

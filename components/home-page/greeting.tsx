import clsx from 'clsx'
import { SITE_METADATA } from '~/data/site-metadata'
export function Greeting() {
  return (
    <div
      className={clsx(
        'font-greeting font-extrabold tracking-tight',
        'text-[40px] leading-[60px] md:text-[68px] md:leading-[100px]'
      )}
    >
      {SITE_METADATA.headerTitle}
    </div>
  )
}

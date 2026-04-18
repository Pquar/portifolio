import { clsx } from 'clsx'

export function FooterBottom() {
  const year = new Date().getFullYear()
  return (
    <div
      className={clsx([
        'pt-5 md:my-2',
        'flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:gap-16',
        'border-t border-gray-200 dark:border-gray-700',
      ])}
    >
      <div className="w-full text-center text-sm text-gray-500 dark:text-gray-400">
        <span>
          © {year} ACLONM Software. Todos os direitos reservados. Tecnologia inteligente. Gestão
          sem limites.
        </span>
      </div>
    </div>
  )
}

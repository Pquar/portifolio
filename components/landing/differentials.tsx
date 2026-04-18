import { Wrench, HeartHandshake, Puzzle, RefreshCw } from 'lucide-react'

const DIFFERENTIALS = [
  {
    icon: Wrench,
    title: 'Sistema próprio',
    description:
      'Não somos revenda. Desenvolvemos toda a tecnologia internamente, com total controle sobre evolução e qualidade.',
  },
  {
    icon: HeartHandshake,
    title: 'Suporte próximo',
    description:
      'Atendimento humanizado e ágil. Você fala direto com quem entende do sistema e resolve de verdade.',
  },
  {
    icon: Puzzle,
    title: 'Soluções sob medida',
    description:
      'Cada empresa é única. Adaptamos e personalizamos funcionalidades para atender exatamente o que você precisa.',
  },
  {
    icon: RefreshCw,
    title: 'Tecnologia atualizada',
    description:
      'Stack moderna, atualizações frequentes e segurança de ponta. Seu sistema sempre na vanguarda.',
  },
]

export function Differentials() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 xl:px-12">
        <div className="text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Diferenciais
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            O que nos torna diferentes
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="group text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 shadow-lg shadow-indigo-500/20 transition-transform group-hover:scale-110 dark:from-indigo-500 dark:to-indigo-600">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Cog, DollarSign, TrendingUp, ShieldCheck } from 'lucide-react'

const BENEFITS = [
  {
    icon: Cog,
    title: 'Automatização de processos',
    description:
      'Elimine tarefas manuais e repetitivas. O Atrix ERP automatiza fluxos de trabalho para que sua equipe foque no que realmente importa.',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    icon: DollarSign,
    title: 'Controle financeiro e operacional',
    description:
      'Visão completa de receitas, despesas, fluxo de caixa e indicadores. Tome decisões baseadas em dados reais, não em achismos.',
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-100 dark:bg-emerald-900/30',
  },
  {
    icon: TrendingUp,
    title: 'Escalabilidade do negócio',
    description:
      'Cresça sem medo. Nossos sistemas acompanham a evolução da sua empresa, de uma filial a dezenas.',
    color: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-100 dark:bg-violet-900/30',
  },
  {
    icon: ShieldCheck,
    title: 'Redução de erros e retrabalho',
    description:
      'Processos padronizados e validações automáticas garantem menos erros, menos retrabalho e mais produtividade.',
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-100 dark:bg-amber-900/30',
  },
]

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="border-y border-gray-200 bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-900/30 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 xl:px-12">
        <div className="text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Benefícios
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Por que empresas escolhem a ACLONM?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Resultados concretos que impactam diretamente o dia a dia e o crescimento do seu
            negócio.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {BENEFITS.map(({ icon: Icon, title, description, color, bg }) => (
            <div
              key={title}
              className="flex gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900/50 md:p-8"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${bg}`}
              >
                <Icon className={`h-6 w-6 ${color}`} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

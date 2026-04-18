import { BarChart3, Code, Globe, Lightbulb, ArrowRight } from 'lucide-react'
import { Link } from '~/components/ui/link'

const SOLUTIONS = [
  {
    icon: BarChart3,
    title: 'Atrix Gestão ERP',
    badge: 'Produto próprio',
    description:
      'Sistema completo de gestão empresarial. Controle financeiro, estoque, vendas, compras, fiscal e muito mais em uma única plataforma.',
    features: [
      'Controle financeiro completo',
      'Gestão de estoque e compras',
      'Emissão de NF-e e NFS-e',
      'Relatórios e dashboards',
      'Controle de vendas e PDV',
      'Multi-empresa e multi-filial',
    ],
    bgLight: 'bg-indigo-50',
    bgDark: 'dark:bg-indigo-950/30',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    icon: Code,
    title: 'Desenvolvimento de software',
    badge: null,
    description:
      'Criamos todo tipo de software: sistemas web, aplicativos mobile, automações, integrações e plataformas completas. Da ideia ao deploy.',
    features: [
      'Sistemas web e desktop',
      'Aplicativos mobile',
      'APIs e integrações',
      'Automação de processos',
      'Arquitetura escalável',
      'Manutenção e evolução contínua',
    ],
    bgLight: 'bg-violet-50',
    bgDark: 'dark:bg-violet-950/30',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
  {
    icon: Globe,
    title: 'Sites e landing pages',
    badge: null,
    description:
      'Sites institucionais, e-commerces e landing pages otimizadas para conversão. Presença digital que gera resultados reais.',
    features: [
      'Design responsivo e moderno',
      'Otimizado para SEO',
      'Alta performance',
      'Integração com redes sociais',
    ],
    bgLight: 'bg-emerald-50',
    bgDark: 'dark:bg-emerald-950/30',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    icon: Lightbulb,
    title: 'Consultoria em tecnologia',
    badge: null,
    description:
      'Orientação estratégica para decisões de tecnologia. Ajudamos sua empresa a escolher, planejar e implementar as soluções certas.',
    features: [
      'Diagnóstico de processos',
      'Planejamento de arquitetura',
      'Escolha de tecnologias',
      'Transformação digital',
    ],
    bgLight: 'bg-amber-50',
    bgDark: 'dark:bg-amber-950/30',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
]

export function Solutions() {
  return (
    <section id="solucoes" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 xl:px-12">
        <div className="text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Nossas soluções
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Tecnologia completa para o seu negócio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Do ERP à consultoria estratégica, desenvolvemos qualquer tipo de software e ajudamos sua
            empresa a tomar as melhores decisões em tecnologia.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {SOLUTIONS.map(
            ({ icon: Icon, title, badge, description, features, bgLight, bgDark, iconColor }) => (
              <div
                key={title}
                className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/50"
              >
                {badge && (
                  <span className="absolute -top-3 right-6 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                    {badge}
                  </span>
                )}
                <div className={`mb-5 inline-flex w-fit rounded-xl ${bgLight} ${bgDark} p-3`}>
                  <Icon className={`h-6 w-6 ${iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-3 flex-1 text-gray-600 dark:text-gray-400">{description}</p>
                <ul className="mt-6 space-y-2.5">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <svg
                        className="h-4 w-4 shrink-0 text-emerald-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contato"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Saiba mais
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

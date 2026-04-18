import { Check, ArrowRight, Globe, Cog, BarChart3, Cloud, Server, Puzzle, Bot } from 'lucide-react'
import { Link } from '~/components/ui/link'

const PROJECTS_SERVICES = [
  {
    icon: Globe,
    title: 'Sites e landing pages',
    description:
      'Sites institucionais, landing pages e blogs profissionais. Projeto com escopo definido, entrega rápida.',
    badge: 'Popular',
    items: [
      'Design responsivo e moderno',
      'Otimizado para SEO e conversão',
      'Domínio e hospedagem orientados',
      'Entrega com treinamento',
    ],
  },
  {
    icon: Cog,
    title: 'Software sob encomenda',
    description:
      'Sistemas personalizados, automação de processos e integrações. Desenvolvemos exatamente o que sua operação precisa.',
    badge: null,
    items: [
      'Análise de requisitos completa',
      'Automação de processos',
      'Integrações via API',
      'Suporte pós-entrega',
    ],
  },
  {
    icon: Bot,
    title: 'Agentes de IA',
    description:
      'Agentes inteligentes que automatizam tarefas, atendem clientes e otimizam operações usando inteligência artificial.',
    badge: null,
    items: [
      'Chatbots e atendimento automatizado',
      'Automação com IA generativa',
      'Integração com sistemas existentes',
      'Treinamento com dados do seu negócio',
    ],
  },
]

const ERP_PLANS = [
  {
    name: 'Essencial',
    description: 'Para pequenas empresas que precisam de controle básico.',
    features: [
      'Controle financeiro',
      'Gestão de estoque',
      'Cadastro de clientes e fornecedores',
      'Emissão de NF-e',
      '25 usuário',
      'Suporte por e-mail',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    description: 'Para empresas em crescimento que precisam de mais poder.',
    badge: 'Mais popular',
    features: [
      'Tudo do Essencial',
      'Gestão de vendas e PDV',
      'Contas a pagar e receber',
      'Relatórios avançados',
      'Dashboards em tempo real',
      'Até 100 usuários',
      'Suporte prioritário',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Para operações complexas e multi-filial.',
    features: [
      'Tudo do Pro',
      'Multi-empresa e multi-filial',
      'Usuários ilimitados',
      'API para integrações',
      'Gerente de conta dedicado',
      'SLA garantido',
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="planos" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 xl:px-12">
        <div className="text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Como trabalhamos
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Projetos sob demanda e planos mensais
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Sites e sistemas são projetos com escopo definido. O Atrix ERP é assinatura mensal com
            evolução contínua.
          </p>
        </div>

        {/* ── Projetos avulsos ── */}
        <div className="mt-16">
          <h3 className="mb-2 text-center text-xl font-bold text-gray-900 dark:text-white md:text-2xl">
            Projetos por demanda
          </h3>
          <p className="mb-8 text-center text-gray-500 dark:text-gray-400">
            Orçamento personalizado para cada projeto. Fale com um consultor.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {PROJECTS_SERVICES.map(({ icon: Icon, title, description, badge, items }) => (
              <div
                key={title}
                className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/50"
              >
                {badge && (
                  <span className="absolute -top-3 right-6 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                    {badge}
                  </span>
                )}
                <div className="mb-4 inline-flex w-fit rounded-xl bg-gray-100 p-3 dark:bg-gray-800">
                  <Icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h4>
                <p className="mt-2 flex-1 text-gray-600 dark:text-gray-400">{description}</p>
                <ul className="mt-6 space-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contato"
                  className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600"
                >
                  Solicitar orçamento
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="my-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
          <div className="flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300">
            <BarChart3 className="h-4 w-4" />
            Atrix Gestão ERP
          </div>
          <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* ── Atrix ERP planos ── */}
        <div>
          <h3 className="mb-2 text-center text-xl font-bold text-gray-900 dark:text-white md:text-2xl">
            Planos mensais — Atrix Gestão ERP
          </h3>
          <p className="mb-4 text-center text-gray-500 dark:text-gray-400">
            Sem taxa de implantação. Demonstração disponível com nossos consultores.
          </p>

          {/* Infra badges */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm dark:border-gray-700 dark:bg-gray-800">
              <Cloud className="h-4 w-4 text-indigo-500" />
              <span className="text-gray-700 dark:text-gray-300">Hospedagem em nuvem</span>
            </div>
            <span className="text-gray-400">ou</span>
            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm dark:border-gray-700 dark:bg-gray-800">
              <Server className="h-4 w-4 text-violet-500" />
              <span className="text-gray-700 dark:text-gray-300">Servidor próprio</span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {ERP_PLANS.map(({ name, description, features, highlighted, badge }) => (
              <div
                key={name}
                className={`relative flex flex-col rounded-2xl border p-8 shadow-sm transition-shadow hover:shadow-lg ${
                  highlighted
                    ? 'border-indigo-500 bg-white ring-2 ring-indigo-500 dark:border-indigo-400 dark:bg-gray-900/80 dark:ring-indigo-400'
                    : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900/50'
                }`}
              >
                {badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                    {badge}
                  </span>
                )}
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>

                <div className="my-6 border-t border-gray-200 dark:border-gray-700" />

                <ul className="flex-1 space-y-3">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contato"
                  className={`mt-8 flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all ${
                    highlighted
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-700'
                      : 'border border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  Falar com consultor
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Evolução */}
          <div className="mt-10 flex items-center justify-center gap-3 rounded-xl border border-dashed border-indigo-300 bg-indigo-50/50 px-6 py-4 dark:border-indigo-700 dark:bg-indigo-950/20">
            <Puzzle className="h-5 w-5 shrink-0 text-indigo-600 dark:text-indigo-400" />
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Plataforma em evolução contínua</span> — Precisa de um
              módulo novo? Desenvolvemos sob demanda e integramos ao seu Atrix ERP.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

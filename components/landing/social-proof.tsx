import { Building2, Users, TrendingUp, Clock } from 'lucide-react'

const STATS = [
  { icon: Building2, value: '50+', label: 'Empresas atendidas' },
  { icon: Users, value: '200+', label: 'Usuários ativos' },
  { icon: TrendingUp, value: '98%', label: 'Satisfação dos clientes' },
  { icon: Clock, value: '24h', label: 'Tempo médio de resposta' },
]

const TESTIMONIALS = [
  {
    quote:
      'O Atrix ERP transformou a forma como gerenciamos nosso estoque e finanças. Reduzimos erros em 80% no primeiro mês.',
    author: 'Maria Silva',
    role: 'Diretora Financeira',
    company: 'Comércio ABC',
  },
  {
    quote:
      'O suporte da ACLONM é excepcional. Sempre que precisamos, a equipe resolve rápido e com atenção.',
    author: 'Carlos Oliveira',
    role: 'Gerente de TI',
    company: 'Indústria XYZ',
  },
  {
    quote:
      'Migramos de um sistema antigo e a diferença foi imediata. Mais controle, mais velocidade, menos dor de cabeça.',
    author: 'Ana Costa',
    role: 'CEO',
    company: 'Distribuidora Fast',
  },
]

export function SocialProof() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 xl:px-12">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900/50"
            >
              <Icon className="mb-3 h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <span className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">
                {value}
              </span>
              <span className="mt-1 text-sm text-gray-600 dark:text-gray-400">{label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="mb-10 text-center text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            O que nossos clientes dizem
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map(({ quote, author, role, company }) => (
              <div
                key={author}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/50"
              >
                <svg
                  className="mb-4 h-8 w-8 text-indigo-300 dark:text-indigo-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="flex-1 text-gray-600 dark:text-gray-400">{quote}</p>
                <div className="mt-6 border-t border-gray-100 pt-4 dark:border-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white">{author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {role} — {company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

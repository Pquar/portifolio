import { Code2, Shield, Zap, Lightbulb } from 'lucide-react'

export function About() {
  return (
    <section id="sobre" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 xl:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Sobre a empresa
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Somos a ACLONM Software
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Empresa de tecnologia especializada em desenvolvimento de software e consultoria
              estratégica. Criamos sistemas, sites, aplicativos e plataformas completas — tudo com
              tecnologia própria e foco total no resultado do cliente.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Além do desenvolvimento, oferecemos{' '}
              <span className="font-semibold text-gray-900 dark:text-white">
                consultoria em tecnologia
              </span>{' '}
              para ajudar empresas a tomar decisões inteligentes, otimizar processos e acelerar a
              transformação digital. Nosso produto principal, o{' '}
              <span className="font-semibold text-gray-900 dark:text-white">Atrix Gestão ERP</span>,
              é prova da nossa capacidade de entregar soluções robustas e escaláveis.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Code2,
                title: 'Tecnologia própria',
                desc: 'Desenvolvemos tudo internamente — do ERP a sistemas sob medida.',
              },
              {
                icon: Lightbulb,
                title: 'Consultoria',
                desc: 'Orientação estratégica para decisões de tecnologia e processos.',
              },
              {
                icon: Shield,
                title: 'Confiança',
                desc: 'Parceria próxima com cada cliente, com suporte real e acessível.',
              },
              {
                icon: Zap,
                title: 'Inovação',
                desc: 'Stack moderna e atualizações constantes para manter você à frente.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900/50"
              >
                <div className="mb-3 inline-flex rounded-lg bg-indigo-100 p-2.5 dark:bg-indigo-900/30">
                  <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

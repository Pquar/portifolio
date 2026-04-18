import { genPageMetadata } from 'app/seo'
import { ClientCard } from '~/components/cards/client'
import { Container } from '~/components/ui/container'
import { PageHeader } from '~/components/ui/page-header'
import { CLIENTS } from '~/data/clients'

export let metadata = genPageMetadata({ title: 'Clientes' })

export default function ClientsPage() {
  let sites = CLIENTS.filter(({ category }) => category === 'site')
  let sistemas = CLIENTS.filter(({ category }) => category === 'sistema')
  let consultoria = CLIENTS.filter(({ category }) => category === 'consultoria')

  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="Clientes"
        description="Conheça alguns dos projetos que desenvolvemos. Sites, sistemas e soluções digitais entregues com qualidade e foco em resultado."
        className="border-b border-gray-200 dark:border-gray-700"
      />

      {sites.length > 0 && (
        <div className="py-5 md:py-10">
          <h3 className="mb-6 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:mb-8 md:text-3xl">
            Sites e landing pages
          </h3>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {sites.map((client) => (
              <ClientCard key={client.name} client={client} />
            ))}
          </div>
        </div>
      )}

      {sistemas.length > 0 && (
        <div className="mt-6 border-t border-gray-200 py-5 dark:border-gray-700 md:mt-10 md:py-10">
          <h3 className="mb-6 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:mb-8 md:text-3xl">
            Sistemas
          </h3>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {sistemas.map((client) => (
              <ClientCard key={client.name} client={client} />
            ))}
          </div>
        </div>
      )}

      {consultoria.length > 0 && (
        <div className="mt-6 border-t border-gray-200 py-5 dark:border-gray-700 md:mt-10 md:py-10">
          <h3 className="mb-6 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:mb-8 md:text-3xl">
            Consultoria
          </h3>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {consultoria.map((client) => (
              <ClientCard key={client.name} client={client} />
            ))}
          </div>
        </div>
      )}
    </Container>
  )
}

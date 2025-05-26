import { Suspense } from 'react'
import { genPageMetadata } from '~/app/seo'
import { Container } from '~/components/ui/container'
import { PageHeader } from '~/components/ui/page-header'
import movies from '~/json/movies.json' assert { type: 'json' }
import { MoviesList } from './movies-list'
import type { Movie } from '~/types/data'

export let metadata = genPageMetadata({ title: 'My movies list' })

export default async function MoviesPage() {
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="Movies"
        description={
          <>
            <p>
              Tem suspense algo relacionado ao construcao eu vejo, estilo bob contrutor com sherlock holmes.
            </p>
          </>
        }
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-5 md:py-10">
        <Suspense>
          <MoviesList movies={movies as unknown as Movie[]} />
        </Suspense>
      </div>
    </Container>
  )
}

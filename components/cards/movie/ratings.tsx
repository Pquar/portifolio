import type { Movie } from '~/types/data'

export function Ratings({ movie }: { movie: Movie }) {
  const { runtime } = movie

  return (
    <div className="flex items-center gap-4">
      <p></p>
    </div>
  )
}

import { Hero } from '~/components/landing/hero'
import { About } from '~/components/landing/about'
import { Solutions } from '~/components/landing/solutions'
import { Benefits } from '~/components/landing/benefits'
import { Differentials } from '~/components/landing/differentials'
import { SocialProof } from '~/components/landing/social-proof'
import { Pricing } from '~/components/landing/pricing'
import { CtaFinal } from '~/components/landing/cta-final'

export function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Solutions />
      <Benefits />
      <Differentials />
      <SocialProof />
      <Pricing />
      <CtaFinal />
    </div>
  )
}

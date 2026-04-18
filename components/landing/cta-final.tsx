import { ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from '~/components/ui/link'
import { SITE_METADATA } from '~/data/site-metadata'

export function CtaFinal() {
  return (
    <section id="contato" className="relative overflow-hidden py-16 md:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600 to-indigo-800 dark:from-indigo-900 dark:to-gray-900" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-400 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 xl:px-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
          Vamos construir o software que sua empresa precisa
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-indigo-100">
          Seja um ERP, um app, um site ou uma consultoria estratégica — fale com nossa equipe e
          descubra como a tecnologia certa pode transformar o seu negócio.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={SITE_METADATA.whatsapp}
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-indigo-700 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
          >
            <MessageCircle className="h-5 w-5" />
            Falar pelo WhatsApp
          </Link>
          <Link
            href={`mailto:${SITE_METADATA.email}`}
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
          >
            Enviar e-mail
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-8 text-sm text-indigo-200">
          Sem compromisso. Vamos conversar sobre o seu projeto.
        </p>
      </div>
    </section>
  )
}

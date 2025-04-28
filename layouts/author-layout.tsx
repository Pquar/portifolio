import type { Author } from 'contentlayer/generated'
import type { ReactNode } from 'react'
import { CareerTimeline } from '~/components/author/career'
import { SocialAccounts } from '~/components/author/social-accounts'
import { ProfileCard } from '~/components/cards/profile'
import { Button } from '~/components/ui/button'
import { Container } from '~/components/ui/container'
import { Image } from '~/components/ui/image'
import { PageHeader } from '~/components/ui/page-header'
import { Twemoji } from '~/components/ui/twemoji'
import { SITE_METADATA } from '~/data/site-metadata'

interface Props {
  children?: ReactNode
  content: Omit<Author, '_id' | '_raw' | 'body'>
}

export function AuthorLayout({ children }: Props) {
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="About"
        description="Um pouco sobre min e experiencias que obtive."
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-8 md:grid md:grid-cols-3">
        <div className="pr-4">
          <ProfileCard />
        </div>
        <div className="md:col-span-2 md:pl-12 xl:pl-16">
          <div className="prose prose-lg dark:prose-invert">
            <div>
              <h2 className="mt-0">
                Hi there <Twemoji emoji="waving-hand" />
              </h2>
              <p>
                Eu sou <strong>Cleiton Moura</strong>, Software Engineer atualmente morando no{' '}
                <strong>Brasil</strong>. Maioria do meus trabalho foram relacionados com{' '}
                <strong>Javascript & Typescript</strong>.Trabalhos como contração de eCommerce,
                Relatórios Financeiros, Websites, BlockChain, software voltado normalmente para
                desenvolvimento web. As tecnologias que trabalho <strong>React</strong>,{' '}
                <strong>NodeJS</strong>, <strong>Nest</strong>, <strong>Next</strong> e{' '}
                <strong>TailwindCSS</strong>.
              </p>
              <p>
                Qualquer melhoria ou quiser falar sobre algum projeto que tenha em mente so me
                contar em qualquer uma de minhas redes <Twemoji emoji="rocket" />.
              </p>
            </div>
            <div>
              <div className="mb-[1em] mt-[2em] flex items-center justify-between [&>h2]:my-0">
                <h2>Minha Carreira</h2>
                <Button as="a" href="/static/resume.pdf" target="_blank">
                  <span>Mais detalhes</span>
                  <Twemoji emoji="page-facing-up" />
                </Button>
              </div>
             {/*  <CareerTimeline /> */}
            </div>
          
         
            <div>
              <h2>Contact</h2>
              <p>
                Entre em contato em {' '}
                <a href={`mailto:${SITE_METADATA.email}`}>{SITE_METADATA.email}</a> ou pelas minha redes sociais
              </p>
              <SocialAccounts />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

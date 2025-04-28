import type { Project } from '~/types/data'

export const PROJECTS: Project[] = [
  {
    type: 'work',
    title: 'Ensino de  Programação',
    description: `Projeto para ensino para quem esta inciando no mundo da programação.`,
    imgSrc: '/static/images/logo.png',
    url: 'https://github.com/Pquar/PROJETOS-COM-HTML_CSS_JAVASCRIPT',
    builtWith: ['CSS' ,'Javascript', 'Bootstrap', 'Html'],
    links: [
      { title: 'GitHub', url: 'https://github.com/Pquar/PROJETOS-COM-HTML_CSS_JAVASCRIPT' },
    ],
  },
  {
    type: 'self',
    title: 'gacha-clonm.com',
    imgSrc: '/static/images/writer-96.png',
    url: 'https://gacha-clonm.com',
    repo: '#',
    builtWith: ['NextJS', 'TailwindCSS', 'Typescript'],
  },
]

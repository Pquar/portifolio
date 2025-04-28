export const SITE_METADATA = {
  city: 'Balneário Camboriú',
  instagram: 'https://instagram.com/proquar',
  x: "https://x.com/fkquar",
  title: `Cleiton Moura dev blog – stories, insights, and ideias`,
  author: 'Cleiton Moura',
  headerTitle: `Clon dev blog`,
  description: 'Espaço para compartilhar ideias, projetos e aprendizados.',
  language: 'pt-br',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.clon.com',
  siteRepo: 'https://github.com/pquar/portifolio',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.jpeg`,
  email: 'clon.moura@gmail.com',
  github: 'https://github.com/pquar',
  linkedin: 'https://www.linkedin.com/in/cleiton-araujo-moura',
  locale: 'pt-BR',
  stickyNav: true,
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
  support: {
    buyMeACoffee: 'https://www.buymeacoffee.com/leohuynh.dev',
    paypal: 'https://paypal.me/hta218?country.x=VN&locale.x=en_US',
    kofi: 'https://ko-fi.com/hta218',
  },
}

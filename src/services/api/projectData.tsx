import { AntiSapa, Bic, BicAdmin, Foodify, Trouve } from '@/assets/images'
import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandBootstrap,
  IconBrandPhp,
  IconBrandSass,
} from '@tabler/icons-react'

const projectData = [
  {
    id: 1,
    thumbnail: Trouve,
    title: 'Trouvé',
    description:
      'Book your ride in minutes and enjoy the convenience of effortless travel planning.',
    links: {
      github: '',
      site: 'https://trouve.africa',
    },
    technologies: [
      <IconBrandReact key='react' />,
      <IconBrandTypescript key='typescript' />,
      <IconBrandTailwind key='tailwind' />,
      'GSAP',
    ],
  },
  {
    id: 2,
    thumbnail: Foodify,
    title: 'Foodify',
    description:
      'An online restaurant for ordering local and intercontinental dishes.',
    links: {
      github: '',
      site: 'https://foodify-v1-dev.netlify.app',
    },
    technologies: [
      <IconBrandReact key='react' />,
      <IconBrandTailwind key='tailwind' />,
    ],
  },
  {
    id: 3,
    thumbnail: Bic,
    title: 'BI Corporations',
    description:
      'Real Estate agency website for booking and renting apartments.',
    links: {
      github: '',
      site: 'https://bicorporations.com',
    },
    technologies: [
      <IconBrandHtml5 key='html5' />,
      <IconBrandCss3 key='css3' />,
      <IconBrandBootstrap key='bootstrap' />,
      <IconBrandPhp key='php' />,
      <IconBrandSass key='sass' />,
    ],
  },
  {
    id: 4,
    thumbnail: AntiSapa,
    title: 'Anti Sapa',
    description: 'Fintech company app landing page to help people save money.',
    links: {
      github: 'https://github.com/Joseph-Jnr/anti-sapa',
      site: 'https://anti-sapa.netlify.app/',
    },
    technologies: [
      <IconBrandReact key='react' />,
      <IconBrandTailwind key='tailwind' />,
    ],
  },
  {
    id: 5,
    thumbnail: BicAdmin,
    title: 'Admin Dashboard',
    description: 'Manage and monitor website data and activities in one place.',
    links: {
      github: '',
      site: '',
    },
    technologies: [
      <IconBrandHtml5 key='html5' />,
      <IconBrandCss3 key='css3' />,
      <IconBrandBootstrap key='bootstrap' />,
      <IconBrandPhp key='php' />,
      <IconBrandSass key='sass' />,
    ],
  },
]

export default projectData

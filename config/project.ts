import { BookOpen, Cloud, FileText, Hexagon, Icon, Rss } from 'react-feather'

export interface ProjectProps {
  name: string
  link: string
  slug: string
  icon: Icon
}

export const projectLinks: ProjectProps[] = [
  {
    name: 'IMAGES',
    link: 'https://github.com/ghosthim/ghost_blog_images',
    slug: 'spencerwooo/dowww',
    icon: BookOpen,
  },
]
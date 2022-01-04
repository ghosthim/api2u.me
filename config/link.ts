import { Rss, Github, Props, Steam } from '@icons-pack/react-simple-icons'
import { FC } from 'react'

export interface LinkProps {
  name: string
  link: string
  icon?: FC<Props>
  apiUrl: string
  color: string
  followerName?: string
}

export const socialLinks: LinkProps[] = [
  {
    name: 'GitHub',
    link: 'https://github.com/ghosthim',
    icon: Github,
    apiUrl: 'https://api.spencerwoo.com/substats/?source=github&queryKey=ghosthim',
    color: '#24292f',
  },
  {
    name: 'RSS',
    link: 'https://blog.spencerwoo.com/',
    icon: Rss,
    apiUrl: 'https://api.spencerwoo.com/substats/?source=feedly|inoreader&queryKey=https%3A%2F%2Fapi2u.me%2Fposts%2Findex.xml',
    color: '#FFA500',
    followerName: 'subscribers',
  },
  {
    name: 'Steam Games',
    link: 'https://steamcommunity.com/id/firebearllc',
    icon: Steam,
    apiUrl: 'https://api.spencerwoo.com/substats/?source=steamGames&queryKey=76561198102451485',
    color: '#134375',
    followerName: 'games',
  },
  {
    name: 'Steam Friends',
    link: 'https://steamcommunity.com/id/firebearllc',
    icon: Steam,
    apiUrl: 'https://api.spencerwoo.com/substats/?source=steamFriends&queryKey=76561198102451485',
    color: '#134375',
    followerName: 'friends',
  },
]

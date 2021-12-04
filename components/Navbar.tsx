import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { Menu as MenuIcon } from 'react-feather'
import { Fragment } from 'react'

const navigations = [
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Publication',
    link: '/publication',
  },
  {
    name: 'Projects',
    link: '/projects',
  },
  {
    name: 'Links',
    link: '/links',
  },
]

const MenuItemLink = (props: { [x: string]: any; href: any; children: any }) => {
  const { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  )
}

const Navbar = () => {
  return (
    <header className="flex font-sans p-6 text-gray-500 items-center justify-between">
      <Link href="/">Spencer</Link>
      <nav className="flex space-x-4 hidden sm:block">
        {navigations.map(n => (
          <Link href={n.link}>{n.name}</Link>
        ))}
      </nav>

      <div className="block sm:hidden">
        <Menu as="div" className="text-left relative inline-block">
          <Menu.Button className="text-current">
            <MenuIcon size={20} />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="bg-white rounded shadow-lg mt-2 origin-top-right right-0 shadow-gray-600 w-32 absolute ">
              {navigations.map(n => (
                <div className="p-2">
                  <Menu.Item>
                    <MenuItemLink href={n.link}>{n.name}</MenuItemLink>
                  </Menu.Item>
                </div>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  )
}

export default Navbar
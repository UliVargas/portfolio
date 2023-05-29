'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import classNames from 'classnames'

interface Route {
  url: string
  label: string
}

const routes: Route[] = [
  {
    url: '/',
    label: 'Sobre Mí'
  },
  {
    url: '/projects',
    label: 'Proyectos'
  }
]

export const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className="hidden md:contents">
      {
        <ul className="text-center md:text-left md:flex md:gap-x-6">
          {routes.map(({ url, label }) => {
            return (
              <li
                className={classNames(
                  'text-md font-normal py-1 md:py-0 text-[#010B40] hover:text-[#127357]',
                  {
                    'text-[#127357]': url === pathname
                  }
                )}
                key={url}
              >
                <Link
                  href={url}
                  className={
                    pathname === url
                      ? 'text-[#127357] underline underline-offset-4'
                      : ''
                  }
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      }
    </nav>
  )
}

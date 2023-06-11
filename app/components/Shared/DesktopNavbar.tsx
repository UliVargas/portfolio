import classNames from 'classnames'
import { Link } from '@remix-run/react'

import { Route } from './Navbar'

export const DesktopNavbar = ({
  routes,
  pathname
}: {
  routes: Route[]
  pathname: string
}) => {
  return (
    <nav className="hidden md:flex">
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
                  to={url}
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
